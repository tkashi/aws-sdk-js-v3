/*
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

package software.amazon.smithy.aws.typescript.codegen;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.stream.Collectors;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.DocumentShape;
import software.amazon.smithy.model.shapes.ListShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.SetShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.model.traits.XmlFlattenedTrait;
import software.amazon.smithy.model.traits.XmlNameTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.DocumentShapeDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;

/**
 * Visitor to generate deserialization functions for shapes in XML-document
 * based document bodies.
 *
 * No standard visitation methods are overridden; function body generation for all
 * expected deserializers is handled by this class.
 *
 * Timestamps are deserialized from {@link Format}.DATE_TIME by default.
 *
 * @see <a href="https://awslabs.github.io/smithy/spec/xml.html">Smithy XML traits.</a>
 */
final class XmlShapeDeserVisitor extends DocumentShapeDeserVisitor {

    XmlShapeDeserVisitor(GenerationContext context) {
        super(context);
    }

    private DocumentMemberDeserVisitor getMemberVisitor(String dataSource) {
        return new XmlMemberDeserVisitor(getContext(), dataSource, Format.DATE_TIME);
    }

    @Override
    protected void deserializeCollection(GenerationContext context, CollectionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().expectShape(shape.getMember().getTarget());

        // Dispatch to the output value provider for any additional handling.
        writer.write("const contents: any = [];");
        writer.openBlock("(output || []).map((entry: any) => {", "});", () -> {
            String dataSource = handleUnnamedTargetWrapping(context, target, "entry");
            writer.write("contents.push($L);", target.accept(getMemberVisitor(dataSource)));
        });
        writer.write("return contents;");
    }

    private String handleUnnamedTargetWrapping(GenerationContext context, Shape target, String dataSource) {
        if (!deserializationReturnsArray(target)) {
            return dataSource;
        }

        TypeScriptWriter writer = context.getWriter();
        // The XML parser will set one K:V for a member that could
        // return multiple entries but only has one.
        // Update the target element if we target another level of collection.
        String targetLocation = getUnnamedAggregateTargetLocation(context.getModel(), target);
        writer.write("const wrappedItem = ($1L[$2S] instanceof Array) ? $1L[$2S] : [$1L[$2S]];",
                dataSource, targetLocation);
        return "wrappedItem";
    }

    private boolean deserializationReturnsArray(Shape shape) {
        return (shape instanceof CollectionShape) || (shape instanceof MapShape);
    }

    @Override
    protected void deserializeDocument(GenerationContext context, DocumentShape shape) {
        throw new CodegenException(String.format("Cannot deserialize Document types on AWS XML protocols, shape: %s.",
                shape.getId()));
    }

    @Override
    protected void deserializeMap(GenerationContext context, MapShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().expectShape(shape.getValue().getTarget());
        String keyLocation = shape.getKey().getTrait(XmlNameTrait.class).map(XmlNameTrait::getValue).orElse("key");
        String valueLocation = shape.getValue().getTrait(XmlNameTrait.class).map(XmlNameTrait::getValue)
                .orElse("value");

        // Get the right serialization for each entry in the map. Undefined
        // outputs won't have this deserializer invoked.
        writer.write("const mapParams: any = {};");
        writer.openBlock("output.forEach((pair: any) => {", "});", () -> {
            // Dispatch to the output value provider for any additional handling.
            String dataSource = handleUnnamedTargetWrapping(context, target, "pair[\"" + valueLocation + "\"]");
            writer.write("mapParams[pair[$S]] = $L;", keyLocation, target.accept(getMemberVisitor(dataSource)));
        });
        writer.write("return mapParams;");
    }

    @Override
    protected void deserializeStructure(GenerationContext context, StructureShape shape) {
        TypeScriptWriter writer = context.getWriter();

        // Prepare the document contents structure.
        Map<String, MemberShape> members = shape.getAllMembers();
        writer.openBlock("let contents: any = {", "};", () -> {
            writer.write("__type: $S,", shape.getId().getName());
            // Set all the members to undefined to meet type constraints.
            members.forEach((memberName, memberShape) -> writer.write("$L: undefined,", memberName));
        });

        members.forEach((memberName, memberShape) -> {
            // Grab the target shape so we can use a member deserializer on it.
            Shape target = context.getModel().expectShape(memberShape.getTarget());
            deserializeNamedMember(context, memberName, memberShape, "output", (dataSource, visitor) -> {
                writer.write("contents.$L = $L;", memberName, target.accept(visitor));
            });
        });

        writer.write("return contents;");
    }

    /**
     * Generates an if statement for deserializing an output member, validating its
     * presence at the correct location, handling collections and flattening, and
     * dispatching to the supplied function to generate the body of the if statement.
     *
     * @param context The generation context.
     * @param memberName The name of the member being deserialized.
     * @param memberShape The shape of the member being deserialized.
     * @param inputLocation The parent input location of the member being deserialized.
     * @param statementBodyGenerator A function that generates the proper deserialization
     *   after member presence is validated.
     */
    void deserializeNamedMember(
            GenerationContext context,
            String memberName,
            MemberShape memberShape,
            String inputLocation,
            BiConsumer<String, DocumentMemberDeserVisitor> statementBodyGenerator
    ) {
        TypeScriptWriter writer = context.getWriter();
        Model model = context.getModel();

        // Use the @xmlName trait if present on the member, otherwise use the member name.
        String locationName = memberShape.getTrait(XmlNameTrait.class)
                .map(XmlNameTrait::getValue)
                .orElse(memberName);
        // Grab the target shape so we can use a member deserializer on it.
        Shape target = context.getModel().expectShape(memberShape.getTarget());
        // Handle @xmlFlattened for collections and maps.
        boolean isFlattened = memberShape.hasTrait(XmlFlattenedTrait.class);
        // Handle targets that return multiple entities per member.
        boolean deserializationReturnsArray = deserializationReturnsArray(target);

        // Build a string based on the traits that represents the location.
        // Note we don't need to handle @xmlAttribute here because the parser flattens
        // attributes in to the main structure.
        StringBuilder sourceBuilder = new StringBuilder(inputLocation).append("['").append(locationName).append("']");
        // Track any locations we need to validate on our way to the final element.
        List<String> locationsToValidate = new ArrayList<>();

        // Go in to a specialized element for unflattened aggregates.
        if (deserializationReturnsArray && !isFlattened) {
            // Make sure we validate the wrapping element is set.
            locationsToValidate.add(sourceBuilder.toString());
            // Update the target element.
            String targetLocation = getUnnamedAggregateTargetLocation(model, target);
            sourceBuilder.append("['").append(targetLocation).append("']");
        }

        // Handle self-closed xml parsed as an empty string.
        if (deserializationReturnsArray) {
            writer.openBlock("if ($L.$L === \"\") {", "}", inputLocation, locationName, () -> {
                if (target instanceof MapShape) {
                    writer.write("contents.$L = {};", memberName);
                } else if (target instanceof ListShape) {
                    writer.write("contents.$L = [];", memberName);
                } else if (target instanceof SetShape) {
                    writer.write("contents.$L = new Set([]);", memberName);
                }
            });
        }

        // Handle the response property.
        String source = sourceBuilder.toString();
        // Validate the resulting target element is set.
        locationsToValidate.add(source);
        // Build a string of the elements to validate before deserializing.
        String validationStatement = locationsToValidate.stream()
                .map(location -> location + " !== undefined")
                .collect(Collectors.joining(" && "));
        writer.openBlock("if ($L) {", "}", validationStatement, () -> {
            String dataSource = handleNamedTargetWrapping(context, target, source);
            statementBodyGenerator.accept(dataSource, getMemberVisitor(dataSource));
        });
    }

    private String handleNamedTargetWrapping(GenerationContext context, Shape target, String dataSource) {
        if (!deserializationReturnsArray(target)) {
            return dataSource;
        }

        TypeScriptWriter writer = context.getWriter();
        // The XML parser will set one K:V for a member that could
        // return multiple entries but only has one.
        writer.write("const wrappedItem = ($1L instanceof Array) ? $1L : [$1L];", dataSource);
        return "wrappedItem";
    }

    private String getUnnamedAggregateTargetLocation(Model model, Shape shape) {
        if (shape.isMapShape()) {
            return "entry";
        }

        // Any other aggregate shape is an instance of a CollectionShape.
        return ((CollectionShape) shape).getMember().getMemberTrait(model, XmlNameTrait.class)
                .map(XmlNameTrait::getValue)
                .orElse("member");
    }

    @Override
    protected void deserializeUnion(GenerationContext context, UnionShape shape) {
        TypeScriptWriter writer = context.getWriter();

        // Check for any known union members and return when we find one.
        Map<String, MemberShape> members = shape.getAllMembers();
        members.forEach((memberName, memberShape) -> {
            // Grab the target shape so we can use a member deserializer on it.
            Shape target = context.getModel().expectShape(memberShape.getTarget());
            deserializeNamedMember(context, memberName, memberShape, "output", (dataSource, visitor) -> {
                writer.openBlock("return {", "};", () -> {
                    // Dispatch to the output value provider for any additional handling.
                    writer.write("$L: $L", memberName, target.accept(visitor));
                });
            });
        });

        // Or write output element to the unknown member.
        writer.write("const key = Object.keys(output)[0];");
        writer.write("return { $$unknown: [key, output[key]] };");
    }
}
