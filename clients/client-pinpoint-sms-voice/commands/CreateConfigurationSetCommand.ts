import {
  PinpointSMSVoiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../PinpointSMSVoiceClient";
import {
  CreateConfigurationSetRequest,
  CreateConfigurationSetResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1CreateConfigurationSetCommand,
  serializeAws_restJson1_1CreateConfigurationSetCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type CreateConfigurationSetCommandInput = CreateConfigurationSetRequest;
export type CreateConfigurationSetCommandOutput = CreateConfigurationSetResponse &
  __MetadataBearer;

export class CreateConfigurationSetCommand extends $Command<
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
  PinpointSMSVoiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateConfigurationSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateConfigurationSetCommandInput,
    CreateConfigurationSetCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateConfigurationSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1CreateConfigurationSetCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateConfigurationSetCommandOutput> {
    return deserializeAws_restJson1_1CreateConfigurationSetCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
