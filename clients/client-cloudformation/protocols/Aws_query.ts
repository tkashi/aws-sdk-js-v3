import {
  CancelUpdateStackCommandInput,
  CancelUpdateStackCommandOutput
} from "../commands/CancelUpdateStackCommand";
import {
  ContinueUpdateRollbackCommandInput,
  ContinueUpdateRollbackCommandOutput
} from "../commands/ContinueUpdateRollbackCommand";
import {
  CreateChangeSetCommandInput,
  CreateChangeSetCommandOutput
} from "../commands/CreateChangeSetCommand";
import {
  CreateStackCommandInput,
  CreateStackCommandOutput
} from "../commands/CreateStackCommand";
import {
  CreateStackInstancesCommandInput,
  CreateStackInstancesCommandOutput
} from "../commands/CreateStackInstancesCommand";
import {
  CreateStackSetCommandInput,
  CreateStackSetCommandOutput
} from "../commands/CreateStackSetCommand";
import {
  DeleteChangeSetCommandInput,
  DeleteChangeSetCommandOutput
} from "../commands/DeleteChangeSetCommand";
import {
  DeleteStackCommandInput,
  DeleteStackCommandOutput
} from "../commands/DeleteStackCommand";
import {
  DeleteStackInstancesCommandInput,
  DeleteStackInstancesCommandOutput
} from "../commands/DeleteStackInstancesCommand";
import {
  DeleteStackSetCommandInput,
  DeleteStackSetCommandOutput
} from "../commands/DeleteStackSetCommand";
import {
  DeregisterTypeCommandInput,
  DeregisterTypeCommandOutput
} from "../commands/DeregisterTypeCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput
} from "../commands/DescribeAccountLimitsCommand";
import {
  DescribeChangeSetCommandInput,
  DescribeChangeSetCommandOutput
} from "../commands/DescribeChangeSetCommand";
import {
  DescribeStackDriftDetectionStatusCommandInput,
  DescribeStackDriftDetectionStatusCommandOutput
} from "../commands/DescribeStackDriftDetectionStatusCommand";
import {
  DescribeStackEventsCommandInput,
  DescribeStackEventsCommandOutput
} from "../commands/DescribeStackEventsCommand";
import {
  DescribeStackInstanceCommandInput,
  DescribeStackInstanceCommandOutput
} from "../commands/DescribeStackInstanceCommand";
import {
  DescribeStackResourceCommandInput,
  DescribeStackResourceCommandOutput
} from "../commands/DescribeStackResourceCommand";
import {
  DescribeStackResourceDriftsCommandInput,
  DescribeStackResourceDriftsCommandOutput
} from "../commands/DescribeStackResourceDriftsCommand";
import {
  DescribeStackResourcesCommandInput,
  DescribeStackResourcesCommandOutput
} from "../commands/DescribeStackResourcesCommand";
import {
  DescribeStackSetCommandInput,
  DescribeStackSetCommandOutput
} from "../commands/DescribeStackSetCommand";
import {
  DescribeStackSetOperationCommandInput,
  DescribeStackSetOperationCommandOutput
} from "../commands/DescribeStackSetOperationCommand";
import {
  DescribeStacksCommandInput,
  DescribeStacksCommandOutput
} from "../commands/DescribeStacksCommand";
import {
  DescribeTypeCommandInput,
  DescribeTypeCommandOutput
} from "../commands/DescribeTypeCommand";
import {
  DescribeTypeRegistrationCommandInput,
  DescribeTypeRegistrationCommandOutput
} from "../commands/DescribeTypeRegistrationCommand";
import {
  DetectStackDriftCommandInput,
  DetectStackDriftCommandOutput
} from "../commands/DetectStackDriftCommand";
import {
  DetectStackResourceDriftCommandInput,
  DetectStackResourceDriftCommandOutput
} from "../commands/DetectStackResourceDriftCommand";
import {
  DetectStackSetDriftCommandInput,
  DetectStackSetDriftCommandOutput
} from "../commands/DetectStackSetDriftCommand";
import {
  EstimateTemplateCostCommandInput,
  EstimateTemplateCostCommandOutput
} from "../commands/EstimateTemplateCostCommand";
import {
  ExecuteChangeSetCommandInput,
  ExecuteChangeSetCommandOutput
} from "../commands/ExecuteChangeSetCommand";
import {
  GetStackPolicyCommandInput,
  GetStackPolicyCommandOutput
} from "../commands/GetStackPolicyCommand";
import {
  GetTemplateCommandInput,
  GetTemplateCommandOutput
} from "../commands/GetTemplateCommand";
import {
  GetTemplateSummaryCommandInput,
  GetTemplateSummaryCommandOutput
} from "../commands/GetTemplateSummaryCommand";
import {
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput
} from "../commands/ListChangeSetsCommand";
import {
  ListExportsCommandInput,
  ListExportsCommandOutput
} from "../commands/ListExportsCommand";
import {
  ListImportsCommandInput,
  ListImportsCommandOutput
} from "../commands/ListImportsCommand";
import {
  ListStackInstancesCommandInput,
  ListStackInstancesCommandOutput
} from "../commands/ListStackInstancesCommand";
import {
  ListStackResourcesCommandInput,
  ListStackResourcesCommandOutput
} from "../commands/ListStackResourcesCommand";
import {
  ListStackSetOperationResultsCommandInput,
  ListStackSetOperationResultsCommandOutput
} from "../commands/ListStackSetOperationResultsCommand";
import {
  ListStackSetOperationsCommandInput,
  ListStackSetOperationsCommandOutput
} from "../commands/ListStackSetOperationsCommand";
import {
  ListStackSetsCommandInput,
  ListStackSetsCommandOutput
} from "../commands/ListStackSetsCommand";
import {
  ListStacksCommandInput,
  ListStacksCommandOutput
} from "../commands/ListStacksCommand";
import {
  ListTypeRegistrationsCommandInput,
  ListTypeRegistrationsCommandOutput
} from "../commands/ListTypeRegistrationsCommand";
import {
  ListTypeVersionsCommandInput,
  ListTypeVersionsCommandOutput
} from "../commands/ListTypeVersionsCommand";
import {
  ListTypesCommandInput,
  ListTypesCommandOutput
} from "../commands/ListTypesCommand";
import {
  RecordHandlerProgressCommandInput,
  RecordHandlerProgressCommandOutput
} from "../commands/RecordHandlerProgressCommand";
import {
  RegisterTypeCommandInput,
  RegisterTypeCommandOutput
} from "../commands/RegisterTypeCommand";
import {
  SetStackPolicyCommandInput,
  SetStackPolicyCommandOutput
} from "../commands/SetStackPolicyCommand";
import {
  SetTypeDefaultVersionCommandInput,
  SetTypeDefaultVersionCommandOutput
} from "../commands/SetTypeDefaultVersionCommand";
import {
  SignalResourceCommandInput,
  SignalResourceCommandOutput
} from "../commands/SignalResourceCommand";
import {
  StopStackSetOperationCommandInput,
  StopStackSetOperationCommandOutput
} from "../commands/StopStackSetOperationCommand";
import {
  UpdateStackCommandInput,
  UpdateStackCommandOutput
} from "../commands/UpdateStackCommand";
import {
  UpdateStackInstancesCommandInput,
  UpdateStackInstancesCommandOutput
} from "../commands/UpdateStackInstancesCommand";
import {
  UpdateStackSetCommandInput,
  UpdateStackSetCommandOutput
} from "../commands/UpdateStackSetCommand";
import {
  UpdateTerminationProtectionCommandInput,
  UpdateTerminationProtectionCommandOutput
} from "../commands/UpdateTerminationProtectionCommand";
import {
  ValidateTemplateCommandInput,
  ValidateTemplateCommandOutput
} from "../commands/ValidateTemplateCommand";
import {
  AccountGateResult,
  AccountLimit,
  AlreadyExistsException,
  CFNRegistryException,
  CancelUpdateStackInput,
  Capability,
  Change,
  ChangeSetNotFoundException,
  ChangeSetSummary,
  ContinueUpdateRollbackInput,
  ContinueUpdateRollbackOutput,
  CreateChangeSetInput,
  CreateChangeSetOutput,
  CreateStackInput,
  CreateStackInstancesInput,
  CreateStackInstancesOutput,
  CreateStackOutput,
  CreateStackSetInput,
  CreateStackSetOutput,
  CreatedButModifiedException,
  DeleteChangeSetInput,
  DeleteChangeSetOutput,
  DeleteStackInput,
  DeleteStackInstancesInput,
  DeleteStackInstancesOutput,
  DeleteStackSetInput,
  DeleteStackSetOutput,
  DeregisterTypeInput,
  DeregisterTypeOutput,
  DescribeAccountLimitsInput,
  DescribeAccountLimitsOutput,
  DescribeChangeSetInput,
  DescribeChangeSetOutput,
  DescribeStackDriftDetectionStatusInput,
  DescribeStackDriftDetectionStatusOutput,
  DescribeStackEventsInput,
  DescribeStackEventsOutput,
  DescribeStackInstanceInput,
  DescribeStackInstanceOutput,
  DescribeStackResourceDriftsInput,
  DescribeStackResourceDriftsOutput,
  DescribeStackResourceInput,
  DescribeStackResourceOutput,
  DescribeStackResourcesInput,
  DescribeStackResourcesOutput,
  DescribeStackSetInput,
  DescribeStackSetOperationInput,
  DescribeStackSetOperationOutput,
  DescribeStackSetOutput,
  DescribeStacksInput,
  DescribeStacksOutput,
  DescribeTypeInput,
  DescribeTypeOutput,
  DescribeTypeRegistrationInput,
  DescribeTypeRegistrationOutput,
  DetectStackDriftInput,
  DetectStackDriftOutput,
  DetectStackResourceDriftInput,
  DetectStackResourceDriftOutput,
  DetectStackSetDriftInput,
  DetectStackSetDriftOutput,
  EstimateTemplateCostInput,
  EstimateTemplateCostOutput,
  ExecuteChangeSetInput,
  ExecuteChangeSetOutput,
  Export,
  GetStackPolicyInput,
  GetStackPolicyOutput,
  GetTemplateInput,
  GetTemplateOutput,
  GetTemplateSummaryInput,
  GetTemplateSummaryOutput,
  InsufficientCapabilitiesException,
  InvalidChangeSetStatusException,
  InvalidOperationException,
  InvalidStateTransitionException,
  LimitExceededException,
  ListChangeSetsInput,
  ListChangeSetsOutput,
  ListExportsInput,
  ListExportsOutput,
  ListImportsInput,
  ListImportsOutput,
  ListStackInstancesInput,
  ListStackInstancesOutput,
  ListStackResourcesInput,
  ListStackResourcesOutput,
  ListStackSetOperationResultsInput,
  ListStackSetOperationResultsOutput,
  ListStackSetOperationsInput,
  ListStackSetOperationsOutput,
  ListStackSetsInput,
  ListStackSetsOutput,
  ListStacksInput,
  ListStacksOutput,
  ListTypeRegistrationsInput,
  ListTypeRegistrationsOutput,
  ListTypeVersionsInput,
  ListTypeVersionsOutput,
  ListTypesInput,
  ListTypesOutput,
  LoggingConfig,
  NameAlreadyExistsException,
  OperationIdAlreadyExistsException,
  OperationInProgressException,
  OperationNotFoundException,
  OperationStatusCheckFailedException,
  Output,
  Parameter,
  ParameterConstraints,
  ParameterDeclaration,
  PhysicalResourceIdContextKeyValuePair,
  PropertyDifference,
  RecordHandlerProgressInput,
  RecordHandlerProgressOutput,
  RegisterTypeInput,
  RegisterTypeOutput,
  ResourceAttribute,
  ResourceChange,
  ResourceChangeDetail,
  ResourceIdentifierSummary,
  ResourceTargetDefinition,
  ResourceToImport,
  RollbackConfiguration,
  RollbackTrigger,
  SetStackPolicyInput,
  SetTypeDefaultVersionInput,
  SetTypeDefaultVersionOutput,
  SignalResourceInput,
  Stack,
  StackDriftInformation,
  StackDriftInformationSummary,
  StackEvent,
  StackInstance,
  StackInstanceNotFoundException,
  StackInstanceSummary,
  StackResource,
  StackResourceDetail,
  StackResourceDrift,
  StackResourceDriftInformation,
  StackResourceDriftInformationSummary,
  StackResourceDriftStatus,
  StackResourceSummary,
  StackSet,
  StackSetDriftDetectionDetails,
  StackSetNotEmptyException,
  StackSetNotFoundException,
  StackSetOperation,
  StackSetOperationPreferences,
  StackSetOperationResultSummary,
  StackSetOperationSummary,
  StackSetSummary,
  StackStatus,
  StackSummary,
  StaleRequestException,
  StopStackSetOperationInput,
  StopStackSetOperationOutput,
  Tag,
  TemplateParameter,
  TemplateStage,
  TokenAlreadyExistsException,
  TypeNotFoundException,
  TypeSummary,
  TypeVersionSummary,
  UpdateStackInput,
  UpdateStackInstancesInput,
  UpdateStackInstancesOutput,
  UpdateStackOutput,
  UpdateStackSetInput,
  UpdateStackSetOutput,
  UpdateTerminationProtectionInput,
  UpdateTerminationProtectionOutput,
  ValidateTemplateInput,
  ValidateTemplateOutput
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { parse as xmlParse } from "fast-xml-parser";
import { v4 as generateIdempotencyToken } from "uuid";

export async function serializeAws_queryCancelUpdateStackCommand(
  input: CancelUpdateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCancelUpdateStackInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CancelUpdateStack",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryContinueUpdateRollbackCommand(
  input: ContinueUpdateRollbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryContinueUpdateRollbackInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ContinueUpdateRollback",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateChangeSetCommand(
  input: CreateChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateChangeSetInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateChangeSet",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateStackCommand(
  input: CreateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateStackInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateStack",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteChangeSetCommand(
  input: DeleteChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteChangeSetInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteChangeSet",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteStackCommand(
  input: DeleteStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteStackInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteStack",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeregisterTypeCommand(
  input: DeregisterTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeregisterTypeInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeregisterType",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeAccountLimitsCommand(
  input: DescribeAccountLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeAccountLimitsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeAccountLimits",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeChangeSetCommand(
  input: DescribeChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeChangeSetInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeChangeSet",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeStackDriftDetectionStatusCommand(
  input: DescribeStackDriftDetectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeStackDriftDetectionStatusInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeStackDriftDetectionStatus",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeStackEventsCommand(
  input: DescribeStackEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeStackEventsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeStackEvents",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeStackResourceCommand(
  input: DescribeStackResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeStackResourceInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeStackResource",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeStackResourceDriftsCommand(
  input: DescribeStackResourceDriftsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeStackResourceDriftsInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeStackResourceDrifts",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeStackResourcesCommand(
  input: DescribeStackResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeStackResourcesInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeStackResources",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeStacksCommand(
  input: DescribeStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeStacksInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeStacks",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeTypeCommand(
  input: DescribeTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeTypeInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeType",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeTypeRegistrationCommand(
  input: DescribeTypeRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeTypeRegistrationInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeTypeRegistration",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDetectStackDriftCommand(
  input: DetectStackDriftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDetectStackDriftInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DetectStackDrift",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDetectStackResourceDriftCommand(
  input: DetectStackResourceDriftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDetectStackResourceDriftInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DetectStackResourceDrift",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryEstimateTemplateCostCommand(
  input: EstimateTemplateCostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryEstimateTemplateCostInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "EstimateTemplateCost",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryExecuteChangeSetCommand(
  input: ExecuteChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryExecuteChangeSetInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ExecuteChangeSet",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryGetStackPolicyCommand(
  input: GetStackPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryGetStackPolicyInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "GetStackPolicy",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryGetTemplateCommand(
  input: GetTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryGetTemplateInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "GetTemplate",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryGetTemplateSummaryCommand(
  input: GetTemplateSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryGetTemplateSummaryInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "GetTemplateSummary",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListChangeSetsCommand(
  input: ListChangeSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryListChangeSetsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ListChangeSets",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListExportsCommand(
  input: ListExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryListExportsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ListExports",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListImportsCommand(
  input: ListImportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryListImportsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ListImports",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListStackResourcesCommand(
  input: ListStackResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryListStackResourcesInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ListStackResources",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListStacksCommand(
  input: ListStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryListStacksInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ListStacks",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListTypeRegistrationsCommand(
  input: ListTypeRegistrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryListTypeRegistrationsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ListTypeRegistrations",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListTypeVersionsCommand(
  input: ListTypeVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryListTypeVersionsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ListTypeVersions",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListTypesCommand(
  input: ListTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryListTypesInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ListTypes",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryRecordHandlerProgressCommand(
  input: RecordHandlerProgressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryRecordHandlerProgressInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "RecordHandlerProgress",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryRegisterTypeCommand(
  input: RegisterTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryRegisterTypeInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "RegisterType",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_querySetStackPolicyCommand(
  input: SetStackPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_querySetStackPolicyInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "SetStackPolicy",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_querySetTypeDefaultVersionCommand(
  input: SetTypeDefaultVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_querySetTypeDefaultVersionInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "SetTypeDefaultVersion",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_querySignalResourceCommand(
  input: SignalResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_querySignalResourceInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "SignalResource",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryUpdateStackCommand(
  input: UpdateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryUpdateStackInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "UpdateStack",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryUpdateTerminationProtectionCommand(
  input: UpdateTerminationProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryUpdateTerminationProtectionInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "UpdateTerminationProtection",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryValidateTemplateCommand(
  input: ValidateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryValidateTemplateInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ValidateTemplate",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateStackInstancesCommand(
  input: CreateStackInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateStackInstancesInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateStackInstances",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateStackSetCommand(
  input: CreateStackSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateStackSetInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateStackSet",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteStackInstancesCommand(
  input: DeleteStackInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteStackInstancesInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteStackInstances",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteStackSetCommand(
  input: DeleteStackSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteStackSetInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteStackSet",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeStackInstanceCommand(
  input: DescribeStackInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeStackInstanceInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeStackInstance",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeStackSetCommand(
  input: DescribeStackSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeStackSetInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeStackSet",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeStackSetOperationCommand(
  input: DescribeStackSetOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeStackSetOperationInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeStackSetOperation",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDetectStackSetDriftCommand(
  input: DetectStackSetDriftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDetectStackSetDriftInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DetectStackSetDrift",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListStackInstancesCommand(
  input: ListStackInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryListStackInstancesInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ListStackInstances",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListStackSetOperationResultsCommand(
  input: ListStackSetOperationResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryListStackSetOperationResultsInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ListStackSetOperationResults",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListStackSetOperationsCommand(
  input: ListStackSetOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryListStackSetOperationsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ListStackSetOperations",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListStackSetsCommand(
  input: ListStackSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryListStackSetsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ListStackSets",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryStopStackSetOperationCommand(
  input: StopStackSetOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryStopStackSetOperationInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "StopStackSetOperation",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryUpdateStackInstancesCommand(
  input: UpdateStackInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryUpdateStackInstancesInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "UpdateStackInstances",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryUpdateStackSetCommand(
  input: UpdateStackSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryUpdateStackSetInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "UpdateStackSet",
    Version: "2010-05-15"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_queryCancelUpdateStackCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelUpdateStackCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCancelUpdateStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CancelUpdateStackCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCancelUpdateStackCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelUpdateStackCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TokenAlreadyExistsException":
    case "amzn.aws21.activities#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryContinueUpdateRollbackCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContinueUpdateRollbackCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryContinueUpdateRollbackCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryContinueUpdateRollbackOutput(
    data.ContinueUpdateRollbackResult,
    context
  );
  const response: ContinueUpdateRollbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ContinueUpdateRollbackOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryContinueUpdateRollbackCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContinueUpdateRollbackCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TokenAlreadyExistsException":
    case "amzn.aws21.activities#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateChangeSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChangeSetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateChangeSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateChangeSetOutput(
    data.CreateChangeSetResult,
    context
  );
  const response: CreateChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateChangeSetOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateChangeSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChangeSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "amzn.aws21.activities#AlreadyExistsException":
      response = {
        ...(await deserializeAws_queryAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientCapabilitiesException":
    case "amzn.aws21.activities#InsufficientCapabilitiesException":
      response = {
        ...(await deserializeAws_queryInsufficientCapabilitiesExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "amzn.aws21.activities#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateStackCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateStackOutput(
    data.CreateStackResult,
    context
  );
  const response: CreateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateStackOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateStackCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "amzn.aws21.activities#AlreadyExistsException":
      response = {
        ...(await deserializeAws_queryAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientCapabilitiesException":
    case "amzn.aws21.activities#InsufficientCapabilitiesException":
      response = {
        ...(await deserializeAws_queryInsufficientCapabilitiesExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "amzn.aws21.activities#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TokenAlreadyExistsException":
    case "amzn.aws21.activities#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteChangeSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChangeSetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteChangeSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteChangeSetOutput(
    data.DeleteChangeSetResult,
    context
  );
  const response: DeleteChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteChangeSetOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteChangeSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChangeSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidChangeSetStatusException":
    case "amzn.aws21.activities#InvalidChangeSetStatusException":
      response = {
        ...(await deserializeAws_queryInvalidChangeSetStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteStackCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteStackCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteStackCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TokenAlreadyExistsException":
    case "amzn.aws21.activities#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeregisterTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTypeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeregisterTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeregisterTypeOutput(
    data.DeregisterTypeResult,
    context
  );
  const response: DeregisterTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterTypeOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeregisterTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "amzn.aws21.activities#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TypeNotFoundException":
    case "amzn.aws21.activities#TypeNotFoundException":
      response = {
        ...(await deserializeAws_queryTypeNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeAccountLimitsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeAccountLimitsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAccountLimitsOutput(
    data.DescribeAccountLimitsResult,
    context
  );
  const response: DescribeAccountLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAccountLimitsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeAccountLimitsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeChangeSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChangeSetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeChangeSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeChangeSetOutput(
    data.DescribeChangeSetResult,
    context
  );
  const response: DescribeChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeChangeSetOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeChangeSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChangeSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChangeSetNotFoundException":
    case "amzn.aws21.activities#ChangeSetNotFoundException":
      response = {
        ...(await deserializeAws_queryChangeSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeStackDriftDetectionStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackDriftDetectionStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeStackDriftDetectionStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStackDriftDetectionStatusOutput(
    data.DescribeStackDriftDetectionStatusResult,
    context
  );
  const response: DescribeStackDriftDetectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStackDriftDetectionStatusOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeStackDriftDetectionStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackDriftDetectionStatusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeStackEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackEventsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeStackEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStackEventsOutput(
    data.DescribeStackEventsResult,
    context
  );
  const response: DescribeStackEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStackEventsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeStackEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackEventsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeStackResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeStackResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStackResourceOutput(
    data.DescribeStackResourceResult,
    context
  );
  const response: DescribeStackResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStackResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeStackResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeStackResourceDriftsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourceDriftsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeStackResourceDriftsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStackResourceDriftsOutput(
    data.DescribeStackResourceDriftsResult,
    context
  );
  const response: DescribeStackResourceDriftsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStackResourceDriftsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeStackResourceDriftsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourceDriftsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeStackResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeStackResourcesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStackResourcesOutput(
    data.DescribeStackResourcesResult,
    context
  );
  const response: DescribeStackResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStackResourcesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeStackResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourcesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeStacksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeStacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStacksOutput(
    data.DescribeStacksResult,
    context
  );
  const response: DescribeStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStacksOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeStacksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTypeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTypeOutput(
    data.DescribeTypeResult,
    context
  );
  const response: DescribeTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTypeOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "amzn.aws21.activities#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TypeNotFoundException":
    case "amzn.aws21.activities#TypeNotFoundException":
      response = {
        ...(await deserializeAws_queryTypeNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeTypeRegistrationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTypeRegistrationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeTypeRegistrationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTypeRegistrationOutput(
    data.DescribeTypeRegistrationResult,
    context
  );
  const response: DescribeTypeRegistrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTypeRegistrationOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeTypeRegistrationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTypeRegistrationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "amzn.aws21.activities#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDetectStackDriftCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackDriftCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDetectStackDriftCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDetectStackDriftOutput(
    data.DetectStackDriftResult,
    context
  );
  const response: DetectStackDriftCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectStackDriftOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDetectStackDriftCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackDriftCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDetectStackResourceDriftCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackResourceDriftCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDetectStackResourceDriftCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDetectStackResourceDriftOutput(
    data.DetectStackResourceDriftResult,
    context
  );
  const response: DetectStackResourceDriftCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectStackResourceDriftOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDetectStackResourceDriftCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackResourceDriftCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryEstimateTemplateCostCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EstimateTemplateCostCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryEstimateTemplateCostCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEstimateTemplateCostOutput(
    data.EstimateTemplateCostResult,
    context
  );
  const response: EstimateTemplateCostCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EstimateTemplateCostOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryEstimateTemplateCostCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EstimateTemplateCostCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryExecuteChangeSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteChangeSetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryExecuteChangeSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryExecuteChangeSetOutput(
    data.ExecuteChangeSetResult,
    context
  );
  const response: ExecuteChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExecuteChangeSetOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryExecuteChangeSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteChangeSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChangeSetNotFoundException":
    case "amzn.aws21.activities#ChangeSetNotFoundException":
      response = {
        ...(await deserializeAws_queryChangeSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientCapabilitiesException":
    case "amzn.aws21.activities#InsufficientCapabilitiesException":
      response = {
        ...(await deserializeAws_queryInsufficientCapabilitiesExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidChangeSetStatusException":
    case "amzn.aws21.activities#InvalidChangeSetStatusException":
      response = {
        ...(await deserializeAws_queryInvalidChangeSetStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TokenAlreadyExistsException":
    case "amzn.aws21.activities#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryGetStackPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStackPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetStackPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetStackPolicyOutput(
    data.GetStackPolicyResult,
    context
  );
  const response: GetStackPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetStackPolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryGetStackPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStackPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryGetTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetTemplateOutput(
    data.GetTemplateResult,
    context
  );
  const response: GetTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTemplateOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryGetTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChangeSetNotFoundException":
    case "amzn.aws21.activities#ChangeSetNotFoundException":
      response = {
        ...(await deserializeAws_queryChangeSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryGetTemplateSummaryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateSummaryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetTemplateSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetTemplateSummaryOutput(
    data.GetTemplateSummaryResult,
    context
  );
  const response: GetTemplateSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTemplateSummaryOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryGetTemplateSummaryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateSummaryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "amzn.aws21.activities#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListChangeSetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangeSetsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListChangeSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListChangeSetsOutput(
    data.ListChangeSetsResult,
    context
  );
  const response: ListChangeSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListChangeSetsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListChangeSetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangeSetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListExportsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListExportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListExportsOutput(
    data.ListExportsResult,
    context
  );
  const response: ListExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListExportsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListExportsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListImportsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListImportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListImportsOutput(
    data.ListImportsResult,
    context
  );
  const response: ListImportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListImportsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListImportsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListStackResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackResourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListStackResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListStackResourcesOutput(
    data.ListStackResourcesResult,
    context
  );
  const response: ListStackResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListStackResourcesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListStackResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackResourcesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListStacksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStacksCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListStacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListStacksOutput(
    data.ListStacksResult,
    context
  );
  const response: ListStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListStacksOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListStacksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStacksCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListTypeRegistrationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypeRegistrationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListTypeRegistrationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListTypeRegistrationsOutput(
    data.ListTypeRegistrationsResult,
    context
  );
  const response: ListTypeRegistrationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTypeRegistrationsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListTypeRegistrationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypeRegistrationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "amzn.aws21.activities#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListTypeVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypeVersionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListTypeVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListTypeVersionsOutput(
    data.ListTypeVersionsResult,
    context
  );
  const response: ListTypeVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTypeVersionsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListTypeVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypeVersionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "amzn.aws21.activities#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListTypesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListTypesOutput(data.ListTypesResult, context);
  const response: ListTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTypesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListTypesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "amzn.aws21.activities#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryRecordHandlerProgressCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordHandlerProgressCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRecordHandlerProgressCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRecordHandlerProgressOutput(
    data.RecordHandlerProgressResult,
    context
  );
  const response: RecordHandlerProgressCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RecordHandlerProgressOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryRecordHandlerProgressCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordHandlerProgressCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateTransitionException":
    case "amzn.aws21.activities#InvalidStateTransitionException":
      response = {
        ...(await deserializeAws_queryInvalidStateTransitionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationStatusCheckFailedException":
    case "amzn.aws21.activities#OperationStatusCheckFailedException":
      response = {
        ...(await deserializeAws_queryOperationStatusCheckFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryRegisterTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTypeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRegisterTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRegisterTypeOutput(
    data.RegisterTypeResult,
    context
  );
  const response: RegisterTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterTypeOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryRegisterTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "amzn.aws21.activities#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_querySetStackPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetStackPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetStackPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetStackPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_querySetStackPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetStackPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_querySetTypeDefaultVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTypeDefaultVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetTypeDefaultVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetTypeDefaultVersionOutput(
    data.SetTypeDefaultVersionResult,
    context
  );
  const response: SetTypeDefaultVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SetTypeDefaultVersionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_querySetTypeDefaultVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTypeDefaultVersionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "amzn.aws21.activities#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TypeNotFoundException":
    case "amzn.aws21.activities#TypeNotFoundException":
      response = {
        ...(await deserializeAws_queryTypeNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_querySignalResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_querySignalResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SignalResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_querySignalResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryUpdateStackCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateStackOutput(
    data.UpdateStackResult,
    context
  );
  const response: UpdateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateStackOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryUpdateStackCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientCapabilitiesException":
    case "amzn.aws21.activities#InsufficientCapabilitiesException":
      response = {
        ...(await deserializeAws_queryInsufficientCapabilitiesExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TokenAlreadyExistsException":
    case "amzn.aws21.activities#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryUpdateTerminationProtectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTerminationProtectionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateTerminationProtectionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateTerminationProtectionOutput(
    data.UpdateTerminationProtectionResult,
    context
  );
  const response: UpdateTerminationProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateTerminationProtectionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryUpdateTerminationProtectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTerminationProtectionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryValidateTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryValidateTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryValidateTemplateOutput(
    data.ValidateTemplateResult,
    context
  );
  const response: ValidateTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ValidateTemplateOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryValidateTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateTemplateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateStackInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackInstancesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateStackInstancesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateStackInstancesOutput(
    data.CreateStackInstancesResult,
    context
  );
  const response: CreateStackInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateStackInstancesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateStackInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackInstancesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "amzn.aws21.activities#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StackSetNotFoundException":
    case "amzn.aws21.activities#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.maestro.service.v20160713#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.maestro.service.v20160713#OperationIdAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.maestro.service.v20160713#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StaleRequestException":
    case "com.amazonaws.maestro.service.v20160713#StaleRequestException":
      response = {
        ...(await deserializeAws_queryStaleRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateStackSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackSetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateStackSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateStackSetOutput(
    data.CreateStackSetResult,
    context
  );
  const response: CreateStackSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateStackSetOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateStackSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "amzn.aws21.activities#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CreatedButModifiedException":
    case "com.amazonaws.maestro.service.v20160713#CreatedButModifiedException":
      response = {
        ...(await deserializeAws_queryCreatedButModifiedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NameAlreadyExistsException":
    case "com.amazonaws.maestro.service.v20160713#NameAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryNameAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteStackInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackInstancesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteStackInstancesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteStackInstancesOutput(
    data.DeleteStackInstancesResult,
    context
  );
  const response: DeleteStackInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteStackInstancesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteStackInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackInstancesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "amzn.aws21.activities#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.maestro.service.v20160713#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.maestro.service.v20160713#OperationIdAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.maestro.service.v20160713#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StaleRequestException":
    case "com.amazonaws.maestro.service.v20160713#StaleRequestException":
      response = {
        ...(await deserializeAws_queryStaleRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteStackSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackSetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteStackSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteStackSetOutput(
    data.DeleteStackSetResult,
    context
  );
  const response: DeleteStackSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteStackSetOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteStackSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationInProgressException":
    case "com.amazonaws.maestro.service.v20160713#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StackSetNotEmptyException":
    case "com.amazonaws.maestro.service.v20160713#StackSetNotEmptyException":
      response = {
        ...(await deserializeAws_queryStackSetNotEmptyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeStackInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeStackInstanceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStackInstanceOutput(
    data.DescribeStackInstanceResult,
    context
  );
  const response: DescribeStackInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStackInstanceOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeStackInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackInstanceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "amzn.aws21.activities#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StackInstanceNotFoundException":
    case "com.amazonaws.maestro.service.v20160713#StackInstanceNotFoundException":
      response = {
        ...(await deserializeAws_queryStackInstanceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeStackSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeStackSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStackSetOutput(
    data.DescribeStackSetResult,
    context
  );
  const response: DescribeStackSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStackSetOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeStackSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "amzn.aws21.activities#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeStackSetOperationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSetOperationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeStackSetOperationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStackSetOperationOutput(
    data.DescribeStackSetOperationResult,
    context
  );
  const response: DescribeStackSetOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStackSetOperationOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeStackSetOperationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSetOperationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "amzn.aws21.activities#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotFoundException":
    case "com.amazonaws.maestro.service.v20160713#OperationNotFoundException":
      response = {
        ...(await deserializeAws_queryOperationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDetectStackSetDriftCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackSetDriftCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDetectStackSetDriftCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDetectStackSetDriftOutput(
    data.DetectStackSetDriftResult,
    context
  );
  const response: DetectStackSetDriftCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectStackSetDriftOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDetectStackSetDriftCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackSetDriftCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "amzn.aws21.activities#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.maestro.service.v20160713#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.maestro.service.v20160713#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListStackInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackInstancesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListStackInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListStackInstancesOutput(
    data.ListStackInstancesResult,
    context
  );
  const response: ListStackInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListStackInstancesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListStackInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackInstancesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "amzn.aws21.activities#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListStackSetOperationResultsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetOperationResultsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListStackSetOperationResultsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListStackSetOperationResultsOutput(
    data.ListStackSetOperationResultsResult,
    context
  );
  const response: ListStackSetOperationResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListStackSetOperationResultsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListStackSetOperationResultsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetOperationResultsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "amzn.aws21.activities#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotFoundException":
    case "com.amazonaws.maestro.service.v20160713#OperationNotFoundException":
      response = {
        ...(await deserializeAws_queryOperationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListStackSetOperationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetOperationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListStackSetOperationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListStackSetOperationsOutput(
    data.ListStackSetOperationsResult,
    context
  );
  const response: ListStackSetOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListStackSetOperationsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListStackSetOperationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetOperationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "amzn.aws21.activities#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListStackSetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListStackSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListStackSetsOutput(
    data.ListStackSetsResult,
    context
  );
  const response: ListStackSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListStackSetsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListStackSetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryStopStackSetOperationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStackSetOperationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryStopStackSetOperationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStopStackSetOperationOutput(
    data.StopStackSetOperationResult,
    context
  );
  const response: StopStackSetOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopStackSetOperationOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryStopStackSetOperationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStackSetOperationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "amzn.aws21.activities#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.maestro.service.v20160713#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotFoundException":
    case "com.amazonaws.maestro.service.v20160713#OperationNotFoundException":
      response = {
        ...(await deserializeAws_queryOperationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryUpdateStackInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackInstancesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateStackInstancesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateStackInstancesOutput(
    data.UpdateStackInstancesResult,
    context
  );
  const response: UpdateStackInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateStackInstancesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryUpdateStackInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackInstancesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "amzn.aws21.activities#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.maestro.service.v20160713#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.maestro.service.v20160713#OperationIdAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.maestro.service.v20160713#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StackInstanceNotFoundException":
    case "com.amazonaws.maestro.service.v20160713#StackInstanceNotFoundException":
      response = {
        ...(await deserializeAws_queryStackInstanceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StaleRequestException":
    case "com.amazonaws.maestro.service.v20160713#StaleRequestException":
      response = {
        ...(await deserializeAws_queryStaleRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryUpdateStackSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackSetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateStackSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateStackSetOutput(
    data.UpdateStackSetResult,
    context
  );
  const response: UpdateStackSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateStackSetOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryUpdateStackSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "amzn.aws21.activities#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.maestro.service.v20160713#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.maestro.service.v20160713#OperationIdAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.maestro.service.v20160713#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StackInstanceNotFoundException":
    case "com.amazonaws.maestro.service.v20160713#StackInstanceNotFoundException":
      response = {
        ...(await deserializeAws_queryStackInstanceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StaleRequestException":
    case "com.amazonaws.maestro.service.v20160713#StaleRequestException":
      response = {
        ...(await deserializeAws_queryStaleRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_queryAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAlreadyExistsException(
    body.Error,
    context
  );
  const contents: AlreadyExistsException = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCFNRegistryExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CFNRegistryException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCFNRegistryException(
    body.Error,
    context
  );
  const contents: CFNRegistryException = {
    name: "CFNRegistryException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryChangeSetNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChangeSetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryChangeSetNotFoundException(
    body.Error,
    context
  );
  const contents: ChangeSetNotFoundException = {
    name: "ChangeSetNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInsufficientCapabilitiesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCapabilitiesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInsufficientCapabilitiesException(
    body.Error,
    context
  );
  const contents: InsufficientCapabilitiesException = {
    name: "InsufficientCapabilitiesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidChangeSetStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidChangeSetStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidChangeSetStatusException(
    body.Error,
    context
  );
  const contents: InvalidChangeSetStatusException = {
    name: "InvalidChangeSetStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidStateTransitionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateTransitionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidStateTransitionException(
    body.Error,
    context
  );
  const contents: InvalidStateTransitionException = {
    name: "InvalidStateTransitionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLimitExceededException(
    body.Error,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryOperationStatusCheckFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationStatusCheckFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOperationStatusCheckFailedException(
    body.Error,
    context
  );
  const contents: OperationStatusCheckFailedException = {
    name: "OperationStatusCheckFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryStackSetNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StackSetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryStackSetNotFoundException(
    body.Error,
    context
  );
  const contents: StackSetNotFoundException = {
    name: "StackSetNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTokenAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TokenAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTokenAlreadyExistsException(
    body.Error,
    context
  );
  const contents: TokenAlreadyExistsException = {
    name: "TokenAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTypeNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TypeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTypeNotFoundException(
    body.Error,
    context
  );
  const contents: TypeNotFoundException = {
    name: "TypeNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCreatedButModifiedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreatedButModifiedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCreatedButModifiedException(
    body.Error,
    context
  );
  const contents: CreatedButModifiedException = {
    name: "CreatedButModifiedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidOperationException(
    body.Error,
    context
  );
  const contents: InvalidOperationException = {
    name: "InvalidOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryNameAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NameAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNameAlreadyExistsException(
    body.Error,
    context
  );
  const contents: NameAlreadyExistsException = {
    name: "NameAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryOperationIdAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationIdAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOperationIdAlreadyExistsException(
    body.Error,
    context
  );
  const contents: OperationIdAlreadyExistsException = {
    name: "OperationIdAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryOperationInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOperationInProgressException(
    body.Error,
    context
  );
  const contents: OperationInProgressException = {
    name: "OperationInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryOperationNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOperationNotFoundException(
    body.Error,
    context
  );
  const contents: OperationNotFoundException = {
    name: "OperationNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryStackInstanceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StackInstanceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryStackInstanceNotFoundException(
    body.Error,
    context
  );
  const contents: StackInstanceNotFoundException = {
    name: "StackInstanceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryStackSetNotEmptyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StackSetNotEmptyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryStackSetNotEmptyException(
    body.Error,
    context
  );
  const contents: StackSetNotEmptyException = {
    name: "StackSetNotEmptyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryStaleRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StaleRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryStaleRequestException(
    body.Error,
    context
  );
  const contents: StaleRequestException = {
    name: "StaleRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_queryCancelUpdateStackInput = (
  input: CancelUpdateStackInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClientRequestToken !== undefined) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryCapabilities = (
  input: Array<Capability | string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryContinueUpdateRollbackInput = (
  input: ContinueUpdateRollbackInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClientRequestToken !== undefined) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.ResourcesToSkip !== undefined) {
    const memberEntries = serializeAws_queryResourcesToSkip(
      input.ResourcesToSkip,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ResourcesToSkip.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.RoleARN !== undefined) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryCreateChangeSetInput = (
  input: CreateChangeSetInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Capabilities !== undefined) {
    const memberEntries = serializeAws_queryCapabilities(
      input.Capabilities,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Capabilities.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ChangeSetName !== undefined) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.ChangeSetType !== undefined) {
    entries["ChangeSetType"] = input.ChangeSetType;
  }
  if (input.ClientToken !== undefined) {
    entries["ClientToken"] = input.ClientToken;
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  if (input.NotificationARNs !== undefined) {
    const memberEntries = serializeAws_queryNotificationARNs(
      input.NotificationARNs,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `NotificationARNs.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Parameters !== undefined) {
    const memberEntries = serializeAws_queryParameters(
      input.Parameters,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Parameters.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ResourceTypes !== undefined) {
    const memberEntries = serializeAws_queryResourceTypes(
      input.ResourceTypes,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ResourceTypes.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ResourcesToImport !== undefined) {
    const memberEntries = serializeAws_queryResourcesToImport(
      input.ResourcesToImport,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ResourcesToImport.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.RoleARN !== undefined) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.RollbackConfiguration !== undefined) {
    const memberEntries = serializeAws_queryRollbackConfiguration(
      input.RollbackConfiguration,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `RollbackConfiguration.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TemplateBody !== undefined) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.UsePreviousTemplate !== undefined) {
    entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
  }
  return entries;
};

const serializeAws_queryCreateStackInput = (
  input: CreateStackInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Capabilities !== undefined) {
    const memberEntries = serializeAws_queryCapabilities(
      input.Capabilities,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Capabilities.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ClientRequestToken !== undefined) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.DisableRollback !== undefined) {
    entries["DisableRollback"] = input.DisableRollback;
  }
  if (input.EnableTerminationProtection !== undefined) {
    entries["EnableTerminationProtection"] = input.EnableTerminationProtection;
  }
  if (input.NotificationARNs !== undefined) {
    const memberEntries = serializeAws_queryNotificationARNs(
      input.NotificationARNs,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `NotificationARNs.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.OnFailure !== undefined) {
    entries["OnFailure"] = input.OnFailure;
  }
  if (input.Parameters !== undefined) {
    const memberEntries = serializeAws_queryParameters(
      input.Parameters,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Parameters.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ResourceTypes !== undefined) {
    const memberEntries = serializeAws_queryResourceTypes(
      input.ResourceTypes,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ResourceTypes.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.RoleARN !== undefined) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.RollbackConfiguration !== undefined) {
    const memberEntries = serializeAws_queryRollbackConfiguration(
      input.RollbackConfiguration,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `RollbackConfiguration.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackPolicyBody !== undefined) {
    entries["StackPolicyBody"] = input.StackPolicyBody;
  }
  if (input.StackPolicyURL !== undefined) {
    entries["StackPolicyURL"] = input.StackPolicyURL;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TemplateBody !== undefined) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.TimeoutInMinutes !== undefined) {
    entries["TimeoutInMinutes"] = input.TimeoutInMinutes;
  }
  return entries;
};

const serializeAws_queryDeleteChangeSetInput = (
  input: DeleteChangeSetInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ChangeSetName !== undefined) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryDeleteStackInput = (
  input: DeleteStackInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClientRequestToken !== undefined) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.RetainResources !== undefined) {
    const memberEntries = serializeAws_queryRetainResources(
      input.RetainResources,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `RetainResources.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.RoleARN !== undefined) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryDeregisterTypeInput = (
  input: DeregisterTypeInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Arn !== undefined) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type !== undefined) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.VersionId !== undefined) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};

const serializeAws_queryDescribeAccountLimitsInput = (
  input: DescribeAccountLimitsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryDescribeChangeSetInput = (
  input: DescribeChangeSetInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ChangeSetName !== undefined) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryDescribeStackDriftDetectionStatusInput = (
  input: DescribeStackDriftDetectionStatusInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackDriftDetectionId !== undefined) {
    entries["StackDriftDetectionId"] = input.StackDriftDetectionId;
  }
  return entries;
};

const serializeAws_queryDescribeStackEventsInput = (
  input: DescribeStackEventsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryDescribeStackResourceDriftsInput = (
  input: DescribeStackResourceDriftsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MaxResults !== undefined) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackResourceDriftStatusFilters !== undefined) {
    const memberEntries = serializeAws_queryStackResourceDriftStatusFilters(
      input.StackResourceDriftStatusFilters,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `StackResourceDriftStatusFilters.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryDescribeStackResourceInput = (
  input: DescribeStackResourceInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LogicalResourceId !== undefined) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryDescribeStackResourcesInput = (
  input: DescribeStackResourcesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LogicalResourceId !== undefined) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.PhysicalResourceId !== undefined) {
    entries["PhysicalResourceId"] = input.PhysicalResourceId;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryDescribeStacksInput = (
  input: DescribeStacksInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryDescribeTypeInput = (
  input: DescribeTypeInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Arn !== undefined) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type !== undefined) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.VersionId !== undefined) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};

const serializeAws_queryDescribeTypeRegistrationInput = (
  input: DescribeTypeRegistrationInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RegistrationToken !== undefined) {
    entries["RegistrationToken"] = input.RegistrationToken;
  }
  return entries;
};

const serializeAws_queryDetectStackDriftInput = (
  input: DetectStackDriftInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LogicalResourceIds !== undefined) {
    const memberEntries = serializeAws_queryLogicalResourceIds(
      input.LogicalResourceIds,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `LogicalResourceIds.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryDetectStackResourceDriftInput = (
  input: DetectStackResourceDriftInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LogicalResourceId !== undefined) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryEstimateTemplateCostInput = (
  input: EstimateTemplateCostInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Parameters !== undefined) {
    const memberEntries = serializeAws_queryParameters(
      input.Parameters,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Parameters.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TemplateBody !== undefined) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  return entries;
};

const serializeAws_queryExecuteChangeSetInput = (
  input: ExecuteChangeSetInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ChangeSetName !== undefined) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.ClientRequestToken !== undefined) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryGetStackPolicyInput = (
  input: GetStackPolicyInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryGetTemplateInput = (
  input: GetTemplateInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ChangeSetName !== undefined) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  if (input.TemplateStage !== undefined) {
    entries["TemplateStage"] = input.TemplateStage;
  }
  return entries;
};

const serializeAws_queryGetTemplateSummaryInput = (
  input: GetTemplateSummaryInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackSetName !== undefined) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.TemplateBody !== undefined) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  return entries;
};

const serializeAws_queryListChangeSetsInput = (
  input: ListChangeSetsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryListExportsInput = (
  input: ListExportsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListImportsInput = (
  input: ListImportsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ExportName !== undefined) {
    entries["ExportName"] = input.ExportName;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListStackResourcesInput = (
  input: ListStackResourcesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryListStacksInput = (
  input: ListStacksInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.StackStatusFilter !== undefined) {
    const memberEntries = serializeAws_queryStackStatusFilter(
      input.StackStatusFilter,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `StackStatusFilter.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryListTypeRegistrationsInput = (
  input: ListTypeRegistrationsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MaxResults !== undefined) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.RegistrationStatusFilter !== undefined) {
    entries["RegistrationStatusFilter"] = input.RegistrationStatusFilter;
  }
  if (input.Type !== undefined) {
    entries["Type"] = input.Type;
  }
  if (input.TypeArn !== undefined) {
    entries["TypeArn"] = input.TypeArn;
  }
  if (input.TypeName !== undefined) {
    entries["TypeName"] = input.TypeName;
  }
  return entries;
};

const serializeAws_queryListTypeVersionsInput = (
  input: ListTypeVersionsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Arn !== undefined) {
    entries["Arn"] = input.Arn;
  }
  if (input.DeprecatedStatus !== undefined) {
    entries["DeprecatedStatus"] = input.DeprecatedStatus;
  }
  if (input.MaxResults !== undefined) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.Type !== undefined) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined) {
    entries["TypeName"] = input.TypeName;
  }
  return entries;
};

const serializeAws_queryListTypesInput = (
  input: ListTypesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DeprecatedStatus !== undefined) {
    entries["DeprecatedStatus"] = input.DeprecatedStatus;
  }
  if (input.MaxResults !== undefined) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.ProvisioningType !== undefined) {
    entries["ProvisioningType"] = input.ProvisioningType;
  }
  if (input.Visibility !== undefined) {
    entries["Visibility"] = input.Visibility;
  }
  return entries;
};

const serializeAws_queryLoggingConfig = (
  input: LoggingConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LogGroupName !== undefined) {
    entries["LogGroupName"] = input.LogGroupName;
  }
  if (input.LogRoleArn !== undefined) {
    entries["LogRoleArn"] = input.LogRoleArn;
  }
  return entries;
};

const serializeAws_queryLogicalResourceIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryNotificationARNs = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryParameter = (
  input: Parameter,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ParameterKey !== undefined) {
    entries["ParameterKey"] = input.ParameterKey;
  }
  if (input.ParameterValue !== undefined) {
    entries["ParameterValue"] = input.ParameterValue;
  }
  if (input.ResolvedValue !== undefined) {
    entries["ResolvedValue"] = input.ResolvedValue;
  }
  if (input.UsePreviousValue !== undefined) {
    entries["UsePreviousValue"] = input.UsePreviousValue;
  }
  return entries;
};

const serializeAws_queryParameters = (
  input: Array<Parameter>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryParameter(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryRecordHandlerProgressInput = (
  input: RecordHandlerProgressInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.BearerToken !== undefined) {
    entries["BearerToken"] = input.BearerToken;
  }
  if (input.ClientRequestToken !== undefined) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.CurrentOperationStatus !== undefined) {
    entries["CurrentOperationStatus"] = input.CurrentOperationStatus;
  }
  if (input.ErrorCode !== undefined) {
    entries["ErrorCode"] = input.ErrorCode;
  }
  if (input.OperationStatus !== undefined) {
    entries["OperationStatus"] = input.OperationStatus;
  }
  if (input.ResourceModel !== undefined) {
    entries["ResourceModel"] = input.ResourceModel;
  }
  if (input.StatusMessage !== undefined) {
    entries["StatusMessage"] = input.StatusMessage;
  }
  return entries;
};

const serializeAws_queryRegisterTypeInput = (
  input: RegisterTypeInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClientRequestToken !== undefined) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.ExecutionRoleArn !== undefined) {
    entries["ExecutionRoleArn"] = input.ExecutionRoleArn;
  }
  if (input.LoggingConfig !== undefined) {
    const memberEntries = serializeAws_queryLoggingConfig(
      input.LoggingConfig,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `LoggingConfig.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.SchemaHandlerPackage !== undefined) {
    entries["SchemaHandlerPackage"] = input.SchemaHandlerPackage;
  }
  if (input.Type !== undefined) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined) {
    entries["TypeName"] = input.TypeName;
  }
  return entries;
};

const serializeAws_queryResourceIdentifierProperties = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input).forEach(key => {
    entries[`entry.${counter}.key`] = key;
    entries[`entry.${counter}.value`] = input[key];
    counter++;
  });
  return entries;
};

const serializeAws_queryResourceToImport = (
  input: ResourceToImport,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LogicalResourceId !== undefined) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.ResourceIdentifier !== undefined) {
    const memberEntries = serializeAws_queryResourceIdentifierProperties(
      input.ResourceIdentifier,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ResourceIdentifier.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ResourceType !== undefined) {
    entries["ResourceType"] = input.ResourceType;
  }
  return entries;
};

const serializeAws_queryResourceTypes = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryResourcesToImport = (
  input: Array<ResourceToImport>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryResourceToImport(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryResourcesToSkip = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryRetainResources = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryRollbackConfiguration = (
  input: RollbackConfiguration,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MonitoringTimeInMinutes !== undefined) {
    entries["MonitoringTimeInMinutes"] = input.MonitoringTimeInMinutes;
  }
  if (input.RollbackTriggers !== undefined) {
    const memberEntries = serializeAws_queryRollbackTriggers(
      input.RollbackTriggers,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `RollbackTriggers.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryRollbackTrigger = (
  input: RollbackTrigger,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Arn !== undefined) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type !== undefined) {
    entries["Type"] = input.Type;
  }
  return entries;
};

const serializeAws_queryRollbackTriggers = (
  input: Array<RollbackTrigger>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryRollbackTrigger(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_querySetStackPolicyInput = (
  input: SetStackPolicyInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackPolicyBody !== undefined) {
    entries["StackPolicyBody"] = input.StackPolicyBody;
  }
  if (input.StackPolicyURL !== undefined) {
    entries["StackPolicyURL"] = input.StackPolicyURL;
  }
  return entries;
};

const serializeAws_querySetTypeDefaultVersionInput = (
  input: SetTypeDefaultVersionInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Arn !== undefined) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type !== undefined) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.VersionId !== undefined) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};

const serializeAws_querySignalResourceInput = (
  input: SignalResourceInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LogicalResourceId !== undefined) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  if (input.Status !== undefined) {
    entries["Status"] = input.Status;
  }
  if (input.UniqueId !== undefined) {
    entries["UniqueId"] = input.UniqueId;
  }
  return entries;
};

const serializeAws_queryStackResourceDriftStatusFilters = (
  input: Array<StackResourceDriftStatus | string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryStackStatusFilter = (
  input: Array<StackStatus | string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key !== undefined) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTags = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryUpdateStackInput = (
  input: UpdateStackInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Capabilities !== undefined) {
    const memberEntries = serializeAws_queryCapabilities(
      input.Capabilities,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Capabilities.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ClientRequestToken !== undefined) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.NotificationARNs !== undefined) {
    const memberEntries = serializeAws_queryNotificationARNs(
      input.NotificationARNs,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `NotificationARNs.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Parameters !== undefined) {
    const memberEntries = serializeAws_queryParameters(
      input.Parameters,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Parameters.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ResourceTypes !== undefined) {
    const memberEntries = serializeAws_queryResourceTypes(
      input.ResourceTypes,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ResourceTypes.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.RoleARN !== undefined) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.RollbackConfiguration !== undefined) {
    const memberEntries = serializeAws_queryRollbackConfiguration(
      input.RollbackConfiguration,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `RollbackConfiguration.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackPolicyBody !== undefined) {
    entries["StackPolicyBody"] = input.StackPolicyBody;
  }
  if (input.StackPolicyDuringUpdateBody !== undefined) {
    entries["StackPolicyDuringUpdateBody"] = input.StackPolicyDuringUpdateBody;
  }
  if (input.StackPolicyDuringUpdateURL !== undefined) {
    entries["StackPolicyDuringUpdateURL"] = input.StackPolicyDuringUpdateURL;
  }
  if (input.StackPolicyURL !== undefined) {
    entries["StackPolicyURL"] = input.StackPolicyURL;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TemplateBody !== undefined) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.UsePreviousTemplate !== undefined) {
    entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
  }
  return entries;
};

const serializeAws_queryUpdateTerminationProtectionInput = (
  input: UpdateTerminationProtectionInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnableTerminationProtection !== undefined) {
    entries["EnableTerminationProtection"] = input.EnableTerminationProtection;
  }
  if (input.StackName !== undefined) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryValidateTemplateInput = (
  input: ValidateTemplateInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TemplateBody !== undefined) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  return entries;
};

const serializeAws_queryAccountList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryCreateStackInstancesInput = (
  input: CreateStackInstancesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Accounts !== undefined) {
    const memberEntries = serializeAws_queryAccountList(
      input.Accounts,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Accounts.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId !== undefined) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.OperationPreferences !== undefined) {
    const memberEntries = serializeAws_queryStackSetOperationPreferences(
      input.OperationPreferences,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ParameterOverrides !== undefined) {
    const memberEntries = serializeAws_queryParameters(
      input.ParameterOverrides,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ParameterOverrides.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Regions !== undefined) {
    const memberEntries = serializeAws_queryRegionList(input.Regions, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Regions.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.StackSetName !== undefined) {
    entries["StackSetName"] = input.StackSetName;
  }
  return entries;
};

const serializeAws_queryCreateStackSetInput = (
  input: CreateStackSetInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AdministrationRoleARN !== undefined) {
    entries["AdministrationRoleARN"] = input.AdministrationRoleARN;
  }
  if (input.Capabilities !== undefined) {
    const memberEntries = serializeAws_queryCapabilities(
      input.Capabilities,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Capabilities.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken !== undefined) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  if (input.ExecutionRoleName !== undefined) {
    entries["ExecutionRoleName"] = input.ExecutionRoleName;
  }
  if (input.Parameters !== undefined) {
    const memberEntries = serializeAws_queryParameters(
      input.Parameters,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Parameters.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.StackSetName !== undefined) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TemplateBody !== undefined) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  return entries;
};

const serializeAws_queryDeleteStackInstancesInput = (
  input: DeleteStackInstancesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Accounts !== undefined) {
    const memberEntries = serializeAws_queryAccountList(
      input.Accounts,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Accounts.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId !== undefined) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.OperationPreferences !== undefined) {
    const memberEntries = serializeAws_queryStackSetOperationPreferences(
      input.OperationPreferences,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Regions !== undefined) {
    const memberEntries = serializeAws_queryRegionList(input.Regions, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Regions.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.RetainStacks !== undefined) {
    entries["RetainStacks"] = input.RetainStacks;
  }
  if (input.StackSetName !== undefined) {
    entries["StackSetName"] = input.StackSetName;
  }
  return entries;
};

const serializeAws_queryDeleteStackSetInput = (
  input: DeleteStackSetInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined) {
    entries["StackSetName"] = input.StackSetName;
  }
  return entries;
};

const serializeAws_queryDescribeStackInstanceInput = (
  input: DescribeStackInstanceInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackInstanceAccount !== undefined) {
    entries["StackInstanceAccount"] = input.StackInstanceAccount;
  }
  if (input.StackInstanceRegion !== undefined) {
    entries["StackInstanceRegion"] = input.StackInstanceRegion;
  }
  if (input.StackSetName !== undefined) {
    entries["StackSetName"] = input.StackSetName;
  }
  return entries;
};

const serializeAws_queryDescribeStackSetInput = (
  input: DescribeStackSetInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined) {
    entries["StackSetName"] = input.StackSetName;
  }
  return entries;
};

const serializeAws_queryDescribeStackSetOperationInput = (
  input: DescribeStackSetOperationInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.OperationId !== undefined) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.StackSetName !== undefined) {
    entries["StackSetName"] = input.StackSetName;
  }
  return entries;
};

const serializeAws_queryDetectStackSetDriftInput = (
  input: DetectStackSetDriftInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId !== undefined) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.OperationPreferences !== undefined) {
    const memberEntries = serializeAws_queryStackSetOperationPreferences(
      input.OperationPreferences,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.StackSetName !== undefined) {
    entries["StackSetName"] = input.StackSetName;
  }
  return entries;
};

const serializeAws_queryListStackInstancesInput = (
  input: ListStackInstancesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MaxResults !== undefined) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.StackInstanceAccount !== undefined) {
    entries["StackInstanceAccount"] = input.StackInstanceAccount;
  }
  if (input.StackInstanceRegion !== undefined) {
    entries["StackInstanceRegion"] = input.StackInstanceRegion;
  }
  if (input.StackSetName !== undefined) {
    entries["StackSetName"] = input.StackSetName;
  }
  return entries;
};

const serializeAws_queryListStackSetOperationResultsInput = (
  input: ListStackSetOperationResultsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MaxResults !== undefined) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.OperationId !== undefined) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.StackSetName !== undefined) {
    entries["StackSetName"] = input.StackSetName;
  }
  return entries;
};

const serializeAws_queryListStackSetOperationsInput = (
  input: ListStackSetOperationsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MaxResults !== undefined) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.StackSetName !== undefined) {
    entries["StackSetName"] = input.StackSetName;
  }
  return entries;
};

const serializeAws_queryListStackSetsInput = (
  input: ListStackSetsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MaxResults !== undefined) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.Status !== undefined) {
    entries["Status"] = input.Status;
  }
  return entries;
};

const serializeAws_queryRegionList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryStackSetOperationPreferences = (
  input: StackSetOperationPreferences,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.FailureToleranceCount !== undefined) {
    entries["FailureToleranceCount"] = input.FailureToleranceCount;
  }
  if (input.FailureTolerancePercentage !== undefined) {
    entries["FailureTolerancePercentage"] = input.FailureTolerancePercentage;
  }
  if (input.MaxConcurrentCount !== undefined) {
    entries["MaxConcurrentCount"] = input.MaxConcurrentCount;
  }
  if (input.MaxConcurrentPercentage !== undefined) {
    entries["MaxConcurrentPercentage"] = input.MaxConcurrentPercentage;
  }
  if (input.RegionOrder !== undefined) {
    const memberEntries = serializeAws_queryRegionList(
      input.RegionOrder,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `RegionOrder.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryStopStackSetOperationInput = (
  input: StopStackSetOperationInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.OperationId !== undefined) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.StackSetName !== undefined) {
    entries["StackSetName"] = input.StackSetName;
  }
  return entries;
};

const serializeAws_queryUpdateStackInstancesInput = (
  input: UpdateStackInstancesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Accounts !== undefined) {
    const memberEntries = serializeAws_queryAccountList(
      input.Accounts,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Accounts.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId !== undefined) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.OperationPreferences !== undefined) {
    const memberEntries = serializeAws_queryStackSetOperationPreferences(
      input.OperationPreferences,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ParameterOverrides !== undefined) {
    const memberEntries = serializeAws_queryParameters(
      input.ParameterOverrides,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ParameterOverrides.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Regions !== undefined) {
    const memberEntries = serializeAws_queryRegionList(input.Regions, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Regions.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.StackSetName !== undefined) {
    entries["StackSetName"] = input.StackSetName;
  }
  return entries;
};

const serializeAws_queryUpdateStackSetInput = (
  input: UpdateStackSetInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Accounts !== undefined) {
    const memberEntries = serializeAws_queryAccountList(
      input.Accounts,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Accounts.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.AdministrationRoleARN !== undefined) {
    entries["AdministrationRoleARN"] = input.AdministrationRoleARN;
  }
  if (input.Capabilities !== undefined) {
    const memberEntries = serializeAws_queryCapabilities(
      input.Capabilities,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Capabilities.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  if (input.ExecutionRoleName !== undefined) {
    entries["ExecutionRoleName"] = input.ExecutionRoleName;
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId !== undefined) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.OperationPreferences !== undefined) {
    const memberEntries = serializeAws_queryStackSetOperationPreferences(
      input.OperationPreferences,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Parameters !== undefined) {
    const memberEntries = serializeAws_queryParameters(
      input.Parameters,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Parameters.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Regions !== undefined) {
    const memberEntries = serializeAws_queryRegionList(input.Regions, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Regions.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.StackSetName !== undefined) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TemplateBody !== undefined) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.UsePreviousTemplate !== undefined) {
    entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
  }
  return entries;
};

const deserializeAws_queryAccountLimit = (
  output: any,
  context: __SerdeContext
): AccountLimit => {
  let contents: any = {
    __type: "AccountLimit",
    Name: undefined,
    Value: undefined
  };
  if (output["Name"] !== undefined) {
    contents.Name =
      output["Name"]["#text"] !== undefined
        ? output["Name"]["#text"]
        : output["Name"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = parseInt(
      output["Value"]["#text"] !== undefined
        ? output["Value"]["#text"]
        : output["Value"]
    );
  }
  return contents;
};

const deserializeAws_queryAccountLimitList = (
  output: any,
  context: __SerdeContext
): Array<AccountLimit> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryAccountLimit(entry, context));
  });
  return contents;
};

const deserializeAws_queryAllowedValues = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_queryAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): AlreadyExistsException => {
  let contents: any = {
    __type: "AlreadyExistsException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryCFNRegistryException = (
  output: any,
  context: __SerdeContext
): CFNRegistryException => {
  let contents: any = {
    __type: "CFNRegistryException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryCapabilities = (
  output: any,
  context: __SerdeContext
): Array<Capability | string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_queryChange = (
  output: any,
  context: __SerdeContext
): Change => {
  let contents: any = {
    __type: "Change",
    ResourceChange: undefined,
    Type: undefined
  };
  if (output["ResourceChange"] !== undefined) {
    contents.ResourceChange = deserializeAws_queryResourceChange(
      output["ResourceChange"],
      context
    );
  }
  if (output["Type"] !== undefined) {
    contents.Type =
      output["Type"]["#text"] !== undefined
        ? output["Type"]["#text"]
        : output["Type"];
  }
  return contents;
};

const deserializeAws_queryChangeSetNotFoundException = (
  output: any,
  context: __SerdeContext
): ChangeSetNotFoundException => {
  let contents: any = {
    __type: "ChangeSetNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryChangeSetSummaries = (
  output: any,
  context: __SerdeContext
): Array<ChangeSetSummary> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryChangeSetSummary(entry, context));
  });
  return contents;
};

const deserializeAws_queryChangeSetSummary = (
  output: any,
  context: __SerdeContext
): ChangeSetSummary => {
  let contents: any = {
    __type: "ChangeSetSummary",
    ChangeSetId: undefined,
    ChangeSetName: undefined,
    CreationTime: undefined,
    Description: undefined,
    ExecutionStatus: undefined,
    StackId: undefined,
    StackName: undefined,
    Status: undefined,
    StatusReason: undefined
  };
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId =
      output["ChangeSetId"]["#text"] !== undefined
        ? output["ChangeSetId"]["#text"]
        : output["ChangeSetId"];
  }
  if (output["ChangeSetName"] !== undefined) {
    contents.ChangeSetName =
      output["ChangeSetName"]["#text"] !== undefined
        ? output["ChangeSetName"]["#text"]
        : output["ChangeSetName"];
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output["ExecutionStatus"] !== undefined) {
    contents.ExecutionStatus =
      output["ExecutionStatus"]["#text"] !== undefined
        ? output["ExecutionStatus"]["#text"]
        : output["ExecutionStatus"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId =
      output["StackId"]["#text"] !== undefined
        ? output["StackId"]["#text"]
        : output["StackId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName =
      output["StackName"]["#text"] !== undefined
        ? output["StackName"]["#text"]
        : output["StackName"];
  }
  if (output["Status"] !== undefined) {
    contents.Status =
      output["Status"]["#text"] !== undefined
        ? output["Status"]["#text"]
        : output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason =
      output["StatusReason"]["#text"] !== undefined
        ? output["StatusReason"]["#text"]
        : output["StatusReason"];
  }
  return contents;
};

const deserializeAws_queryChanges = (
  output: any,
  context: __SerdeContext
): Array<Change> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryChange(entry, context));
  });
  return contents;
};

const deserializeAws_queryContinueUpdateRollbackOutput = (
  output: any,
  context: __SerdeContext
): ContinueUpdateRollbackOutput => {
  let contents: any = {
    __type: "ContinueUpdateRollbackOutput"
  };
  return contents;
};

const deserializeAws_queryCreateChangeSetOutput = (
  output: any,
  context: __SerdeContext
): CreateChangeSetOutput => {
  let contents: any = {
    __type: "CreateChangeSetOutput",
    Id: undefined,
    StackId: undefined
  };
  if (output["Id"] !== undefined) {
    contents.Id =
      output["Id"]["#text"] !== undefined
        ? output["Id"]["#text"]
        : output["Id"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId =
      output["StackId"]["#text"] !== undefined
        ? output["StackId"]["#text"]
        : output["StackId"];
  }
  return contents;
};

const deserializeAws_queryCreateStackOutput = (
  output: any,
  context: __SerdeContext
): CreateStackOutput => {
  let contents: any = {
    __type: "CreateStackOutput",
    StackId: undefined
  };
  if (output["StackId"] !== undefined) {
    contents.StackId =
      output["StackId"]["#text"] !== undefined
        ? output["StackId"]["#text"]
        : output["StackId"];
  }
  return contents;
};

const deserializeAws_queryDeleteChangeSetOutput = (
  output: any,
  context: __SerdeContext
): DeleteChangeSetOutput => {
  let contents: any = {
    __type: "DeleteChangeSetOutput"
  };
  return contents;
};

const deserializeAws_queryDeregisterTypeOutput = (
  output: any,
  context: __SerdeContext
): DeregisterTypeOutput => {
  let contents: any = {
    __type: "DeregisterTypeOutput"
  };
  return contents;
};

const deserializeAws_queryDescribeAccountLimitsOutput = (
  output: any,
  context: __SerdeContext
): DescribeAccountLimitsOutput => {
  let contents: any = {
    __type: "DescribeAccountLimitsOutput",
    AccountLimits: undefined,
    NextToken: undefined
  };
  if (output.AccountLimits === "") {
    contents.AccountLimits = [];
  }
  if (
    output["AccountLimits"] !== undefined &&
    output["AccountLimits"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["AccountLimits"]["member"] instanceof Array
        ? output["AccountLimits"]["member"]
        : [output["AccountLimits"]["member"]];
    contents.AccountLimits = deserializeAws_queryAccountLimitList(
      wrappedItem,
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryDescribeChangeSetOutput = (
  output: any,
  context: __SerdeContext
): DescribeChangeSetOutput => {
  let contents: any = {
    __type: "DescribeChangeSetOutput",
    Capabilities: undefined,
    ChangeSetId: undefined,
    ChangeSetName: undefined,
    Changes: undefined,
    CreationTime: undefined,
    Description: undefined,
    ExecutionStatus: undefined,
    NextToken: undefined,
    NotificationARNs: undefined,
    Parameters: undefined,
    RollbackConfiguration: undefined,
    StackId: undefined,
    StackName: undefined,
    Status: undefined,
    StatusReason: undefined,
    Tags: undefined
  };
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (
    output["Capabilities"] !== undefined &&
    output["Capabilities"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Capabilities"]["member"] instanceof Array
        ? output["Capabilities"]["member"]
        : [output["Capabilities"]["member"]];
    contents.Capabilities = deserializeAws_queryCapabilities(
      wrappedItem,
      context
    );
  }
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId =
      output["ChangeSetId"]["#text"] !== undefined
        ? output["ChangeSetId"]["#text"]
        : output["ChangeSetId"];
  }
  if (output["ChangeSetName"] !== undefined) {
    contents.ChangeSetName =
      output["ChangeSetName"]["#text"] !== undefined
        ? output["ChangeSetName"]["#text"]
        : output["ChangeSetName"];
  }
  if (output.Changes === "") {
    contents.Changes = [];
  }
  if (
    output["Changes"] !== undefined &&
    output["Changes"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Changes"]["member"] instanceof Array
        ? output["Changes"]["member"]
        : [output["Changes"]["member"]];
    contents.Changes = deserializeAws_queryChanges(wrappedItem, context);
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output["ExecutionStatus"] !== undefined) {
    contents.ExecutionStatus =
      output["ExecutionStatus"]["#text"] !== undefined
        ? output["ExecutionStatus"]["#text"]
        : output["ExecutionStatus"];
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  if (output.NotificationARNs === "") {
    contents.NotificationARNs = [];
  }
  if (
    output["NotificationARNs"] !== undefined &&
    output["NotificationARNs"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["NotificationARNs"]["member"] instanceof Array
        ? output["NotificationARNs"]["member"]
        : [output["NotificationARNs"]["member"]];
    contents.NotificationARNs = deserializeAws_queryNotificationARNs(
      wrappedItem,
      context
    );
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (
    output["Parameters"] !== undefined &&
    output["Parameters"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Parameters"]["member"] instanceof Array
        ? output["Parameters"]["member"]
        : [output["Parameters"]["member"]];
    contents.Parameters = deserializeAws_queryParameters(wrappedItem, context);
  }
  if (output["RollbackConfiguration"] !== undefined) {
    contents.RollbackConfiguration = deserializeAws_queryRollbackConfiguration(
      output["RollbackConfiguration"],
      context
    );
  }
  if (output["StackId"] !== undefined) {
    contents.StackId =
      output["StackId"]["#text"] !== undefined
        ? output["StackId"]["#text"]
        : output["StackId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName =
      output["StackName"]["#text"] !== undefined
        ? output["StackName"]["#text"]
        : output["StackName"];
  }
  if (output["Status"] !== undefined) {
    contents.Status =
      output["Status"]["#text"] !== undefined
        ? output["Status"]["#text"]
        : output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason =
      output["StatusReason"]["#text"] !== undefined
        ? output["StatusReason"]["#text"]
        : output["StatusReason"];
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    const wrappedItem =
      output["Tags"]["member"] instanceof Array
        ? output["Tags"]["member"]
        : [output["Tags"]["member"]];
    contents.Tags = deserializeAws_queryTags(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryDescribeStackDriftDetectionStatusOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackDriftDetectionStatusOutput => {
  let contents: any = {
    __type: "DescribeStackDriftDetectionStatusOutput",
    DetectionStatus: undefined,
    DetectionStatusReason: undefined,
    DriftedStackResourceCount: undefined,
    StackDriftDetectionId: undefined,
    StackDriftStatus: undefined,
    StackId: undefined,
    Timestamp: undefined
  };
  if (output["DetectionStatus"] !== undefined) {
    contents.DetectionStatus =
      output["DetectionStatus"]["#text"] !== undefined
        ? output["DetectionStatus"]["#text"]
        : output["DetectionStatus"];
  }
  if (output["DetectionStatusReason"] !== undefined) {
    contents.DetectionStatusReason =
      output["DetectionStatusReason"]["#text"] !== undefined
        ? output["DetectionStatusReason"]["#text"]
        : output["DetectionStatusReason"];
  }
  if (output["DriftedStackResourceCount"] !== undefined) {
    contents.DriftedStackResourceCount = parseInt(
      output["DriftedStackResourceCount"]["#text"] !== undefined
        ? output["DriftedStackResourceCount"]["#text"]
        : output["DriftedStackResourceCount"]
    );
  }
  if (output["StackDriftDetectionId"] !== undefined) {
    contents.StackDriftDetectionId =
      output["StackDriftDetectionId"]["#text"] !== undefined
        ? output["StackDriftDetectionId"]["#text"]
        : output["StackDriftDetectionId"];
  }
  if (output["StackDriftStatus"] !== undefined) {
    contents.StackDriftStatus =
      output["StackDriftStatus"]["#text"] !== undefined
        ? output["StackDriftStatus"]["#text"]
        : output["StackDriftStatus"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId =
      output["StackId"]["#text"] !== undefined
        ? output["StackId"]["#text"]
        : output["StackId"];
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  return contents;
};

const deserializeAws_queryDescribeStackEventsOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackEventsOutput => {
  let contents: any = {
    __type: "DescribeStackEventsOutput",
    NextToken: undefined,
    StackEvents: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  if (output.StackEvents === "") {
    contents.StackEvents = [];
  }
  if (
    output["StackEvents"] !== undefined &&
    output["StackEvents"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["StackEvents"]["member"] instanceof Array
        ? output["StackEvents"]["member"]
        : [output["StackEvents"]["member"]];
    contents.StackEvents = deserializeAws_queryStackEvents(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeStackResourceDriftsOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackResourceDriftsOutput => {
  let contents: any = {
    __type: "DescribeStackResourceDriftsOutput",
    NextToken: undefined,
    StackResourceDrifts: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  if (output.StackResourceDrifts === "") {
    contents.StackResourceDrifts = [];
  }
  if (
    output["StackResourceDrifts"] !== undefined &&
    output["StackResourceDrifts"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["StackResourceDrifts"]["member"] instanceof Array
        ? output["StackResourceDrifts"]["member"]
        : [output["StackResourceDrifts"]["member"]];
    contents.StackResourceDrifts = deserializeAws_queryStackResourceDrifts(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeStackResourceOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackResourceOutput => {
  let contents: any = {
    __type: "DescribeStackResourceOutput",
    StackResourceDetail: undefined
  };
  if (output["StackResourceDetail"] !== undefined) {
    contents.StackResourceDetail = deserializeAws_queryStackResourceDetail(
      output["StackResourceDetail"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeStackResourcesOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackResourcesOutput => {
  let contents: any = {
    __type: "DescribeStackResourcesOutput",
    StackResources: undefined
  };
  if (output.StackResources === "") {
    contents.StackResources = [];
  }
  if (
    output["StackResources"] !== undefined &&
    output["StackResources"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["StackResources"]["member"] instanceof Array
        ? output["StackResources"]["member"]
        : [output["StackResources"]["member"]];
    contents.StackResources = deserializeAws_queryStackResources(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeStacksOutput = (
  output: any,
  context: __SerdeContext
): DescribeStacksOutput => {
  let contents: any = {
    __type: "DescribeStacksOutput",
    NextToken: undefined,
    Stacks: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  if (output.Stacks === "") {
    contents.Stacks = [];
  }
  if (
    output["Stacks"] !== undefined &&
    output["Stacks"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Stacks"]["member"] instanceof Array
        ? output["Stacks"]["member"]
        : [output["Stacks"]["member"]];
    contents.Stacks = deserializeAws_queryStacks(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryDescribeTypeOutput = (
  output: any,
  context: __SerdeContext
): DescribeTypeOutput => {
  let contents: any = {
    __type: "DescribeTypeOutput",
    Arn: undefined,
    DefaultVersionId: undefined,
    DeprecatedStatus: undefined,
    Description: undefined,
    DocumentationUrl: undefined,
    ExecutionRoleArn: undefined,
    LastUpdated: undefined,
    LoggingConfig: undefined,
    ProvisioningType: undefined,
    Schema: undefined,
    SourceUrl: undefined,
    TimeCreated: undefined,
    Type: undefined,
    TypeName: undefined,
    Visibility: undefined
  };
  if (output["Arn"] !== undefined) {
    contents.Arn =
      output["Arn"]["#text"] !== undefined
        ? output["Arn"]["#text"]
        : output["Arn"];
  }
  if (output["DefaultVersionId"] !== undefined) {
    contents.DefaultVersionId =
      output["DefaultVersionId"]["#text"] !== undefined
        ? output["DefaultVersionId"]["#text"]
        : output["DefaultVersionId"];
  }
  if (output["DeprecatedStatus"] !== undefined) {
    contents.DeprecatedStatus =
      output["DeprecatedStatus"]["#text"] !== undefined
        ? output["DeprecatedStatus"]["#text"]
        : output["DeprecatedStatus"];
  }
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output["DocumentationUrl"] !== undefined) {
    contents.DocumentationUrl =
      output["DocumentationUrl"]["#text"] !== undefined
        ? output["DocumentationUrl"]["#text"]
        : output["DocumentationUrl"];
  }
  if (output["ExecutionRoleArn"] !== undefined) {
    contents.ExecutionRoleArn =
      output["ExecutionRoleArn"]["#text"] !== undefined
        ? output["ExecutionRoleArn"]["#text"]
        : output["ExecutionRoleArn"];
  }
  if (output["LastUpdated"] !== undefined) {
    contents.LastUpdated = new Date(output["LastUpdated"]);
  }
  if (output["LoggingConfig"] !== undefined) {
    contents.LoggingConfig = deserializeAws_queryLoggingConfig(
      output["LoggingConfig"],
      context
    );
  }
  if (output["ProvisioningType"] !== undefined) {
    contents.ProvisioningType =
      output["ProvisioningType"]["#text"] !== undefined
        ? output["ProvisioningType"]["#text"]
        : output["ProvisioningType"];
  }
  if (output["Schema"] !== undefined) {
    contents.Schema =
      output["Schema"]["#text"] !== undefined
        ? output["Schema"]["#text"]
        : output["Schema"];
  }
  if (output["SourceUrl"] !== undefined) {
    contents.SourceUrl =
      output["SourceUrl"]["#text"] !== undefined
        ? output["SourceUrl"]["#text"]
        : output["SourceUrl"];
  }
  if (output["TimeCreated"] !== undefined) {
    contents.TimeCreated = new Date(output["TimeCreated"]);
  }
  if (output["Type"] !== undefined) {
    contents.Type =
      output["Type"]["#text"] !== undefined
        ? output["Type"]["#text"]
        : output["Type"];
  }
  if (output["TypeName"] !== undefined) {
    contents.TypeName =
      output["TypeName"]["#text"] !== undefined
        ? output["TypeName"]["#text"]
        : output["TypeName"];
  }
  if (output["Visibility"] !== undefined) {
    contents.Visibility =
      output["Visibility"]["#text"] !== undefined
        ? output["Visibility"]["#text"]
        : output["Visibility"];
  }
  return contents;
};

const deserializeAws_queryDescribeTypeRegistrationOutput = (
  output: any,
  context: __SerdeContext
): DescribeTypeRegistrationOutput => {
  let contents: any = {
    __type: "DescribeTypeRegistrationOutput",
    Description: undefined,
    ProgressStatus: undefined,
    TypeArn: undefined,
    TypeVersionArn: undefined
  };
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output["ProgressStatus"] !== undefined) {
    contents.ProgressStatus =
      output["ProgressStatus"]["#text"] !== undefined
        ? output["ProgressStatus"]["#text"]
        : output["ProgressStatus"];
  }
  if (output["TypeArn"] !== undefined) {
    contents.TypeArn =
      output["TypeArn"]["#text"] !== undefined
        ? output["TypeArn"]["#text"]
        : output["TypeArn"];
  }
  if (output["TypeVersionArn"] !== undefined) {
    contents.TypeVersionArn =
      output["TypeVersionArn"]["#text"] !== undefined
        ? output["TypeVersionArn"]["#text"]
        : output["TypeVersionArn"];
  }
  return contents;
};

const deserializeAws_queryDetectStackDriftOutput = (
  output: any,
  context: __SerdeContext
): DetectStackDriftOutput => {
  let contents: any = {
    __type: "DetectStackDriftOutput",
    StackDriftDetectionId: undefined
  };
  if (output["StackDriftDetectionId"] !== undefined) {
    contents.StackDriftDetectionId =
      output["StackDriftDetectionId"]["#text"] !== undefined
        ? output["StackDriftDetectionId"]["#text"]
        : output["StackDriftDetectionId"];
  }
  return contents;
};

const deserializeAws_queryDetectStackResourceDriftOutput = (
  output: any,
  context: __SerdeContext
): DetectStackResourceDriftOutput => {
  let contents: any = {
    __type: "DetectStackResourceDriftOutput",
    StackResourceDrift: undefined
  };
  if (output["StackResourceDrift"] !== undefined) {
    contents.StackResourceDrift = deserializeAws_queryStackResourceDrift(
      output["StackResourceDrift"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryEstimateTemplateCostOutput = (
  output: any,
  context: __SerdeContext
): EstimateTemplateCostOutput => {
  let contents: any = {
    __type: "EstimateTemplateCostOutput",
    Url: undefined
  };
  if (output["Url"] !== undefined) {
    contents.Url =
      output["Url"]["#text"] !== undefined
        ? output["Url"]["#text"]
        : output["Url"];
  }
  return contents;
};

const deserializeAws_queryExecuteChangeSetOutput = (
  output: any,
  context: __SerdeContext
): ExecuteChangeSetOutput => {
  let contents: any = {
    __type: "ExecuteChangeSetOutput"
  };
  return contents;
};

const deserializeAws_queryExport = (
  output: any,
  context: __SerdeContext
): Export => {
  let contents: any = {
    __type: "Export",
    ExportingStackId: undefined,
    Name: undefined,
    Value: undefined
  };
  if (output["ExportingStackId"] !== undefined) {
    contents.ExportingStackId =
      output["ExportingStackId"]["#text"] !== undefined
        ? output["ExportingStackId"]["#text"]
        : output["ExportingStackId"];
  }
  if (output["Name"] !== undefined) {
    contents.Name =
      output["Name"]["#text"] !== undefined
        ? output["Name"]["#text"]
        : output["Name"];
  }
  if (output["Value"] !== undefined) {
    contents.Value =
      output["Value"]["#text"] !== undefined
        ? output["Value"]["#text"]
        : output["Value"];
  }
  return contents;
};

const deserializeAws_queryExports = (
  output: any,
  context: __SerdeContext
): Array<Export> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryExport(entry, context));
  });
  return contents;
};

const deserializeAws_queryGetStackPolicyOutput = (
  output: any,
  context: __SerdeContext
): GetStackPolicyOutput => {
  let contents: any = {
    __type: "GetStackPolicyOutput",
    StackPolicyBody: undefined
  };
  if (output["StackPolicyBody"] !== undefined) {
    contents.StackPolicyBody =
      output["StackPolicyBody"]["#text"] !== undefined
        ? output["StackPolicyBody"]["#text"]
        : output["StackPolicyBody"];
  }
  return contents;
};

const deserializeAws_queryGetTemplateOutput = (
  output: any,
  context: __SerdeContext
): GetTemplateOutput => {
  let contents: any = {
    __type: "GetTemplateOutput",
    StagesAvailable: undefined,
    TemplateBody: undefined
  };
  if (output.StagesAvailable === "") {
    contents.StagesAvailable = [];
  }
  if (
    output["StagesAvailable"] !== undefined &&
    output["StagesAvailable"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["StagesAvailable"]["member"] instanceof Array
        ? output["StagesAvailable"]["member"]
        : [output["StagesAvailable"]["member"]];
    contents.StagesAvailable = deserializeAws_queryStageList(
      wrappedItem,
      context
    );
  }
  if (output["TemplateBody"] !== undefined) {
    contents.TemplateBody =
      output["TemplateBody"]["#text"] !== undefined
        ? output["TemplateBody"]["#text"]
        : output["TemplateBody"];
  }
  return contents;
};

const deserializeAws_queryGetTemplateSummaryOutput = (
  output: any,
  context: __SerdeContext
): GetTemplateSummaryOutput => {
  let contents: any = {
    __type: "GetTemplateSummaryOutput",
    Capabilities: undefined,
    CapabilitiesReason: undefined,
    DeclaredTransforms: undefined,
    Description: undefined,
    Metadata: undefined,
    Parameters: undefined,
    ResourceIdentifierSummaries: undefined,
    ResourceTypes: undefined,
    Version: undefined
  };
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (
    output["Capabilities"] !== undefined &&
    output["Capabilities"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Capabilities"]["member"] instanceof Array
        ? output["Capabilities"]["member"]
        : [output["Capabilities"]["member"]];
    contents.Capabilities = deserializeAws_queryCapabilities(
      wrappedItem,
      context
    );
  }
  if (output["CapabilitiesReason"] !== undefined) {
    contents.CapabilitiesReason =
      output["CapabilitiesReason"]["#text"] !== undefined
        ? output["CapabilitiesReason"]["#text"]
        : output["CapabilitiesReason"];
  }
  if (output.DeclaredTransforms === "") {
    contents.DeclaredTransforms = [];
  }
  if (
    output["DeclaredTransforms"] !== undefined &&
    output["DeclaredTransforms"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["DeclaredTransforms"]["member"] instanceof Array
        ? output["DeclaredTransforms"]["member"]
        : [output["DeclaredTransforms"]["member"]];
    contents.DeclaredTransforms = deserializeAws_queryTransformsList(
      wrappedItem,
      context
    );
  }
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output["Metadata"] !== undefined) {
    contents.Metadata =
      output["Metadata"]["#text"] !== undefined
        ? output["Metadata"]["#text"]
        : output["Metadata"];
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (
    output["Parameters"] !== undefined &&
    output["Parameters"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Parameters"]["member"] instanceof Array
        ? output["Parameters"]["member"]
        : [output["Parameters"]["member"]];
    contents.Parameters = deserializeAws_queryParameterDeclarations(
      wrappedItem,
      context
    );
  }
  if (output.ResourceIdentifierSummaries === "") {
    contents.ResourceIdentifierSummaries = [];
  }
  if (
    output["ResourceIdentifierSummaries"] !== undefined &&
    output["ResourceIdentifierSummaries"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["ResourceIdentifierSummaries"]["member"] instanceof Array
        ? output["ResourceIdentifierSummaries"]["member"]
        : [output["ResourceIdentifierSummaries"]["member"]];
    contents.ResourceIdentifierSummaries = deserializeAws_queryResourceIdentifierSummaries(
      wrappedItem,
      context
    );
  }
  if (output.ResourceTypes === "") {
    contents.ResourceTypes = [];
  }
  if (
    output["ResourceTypes"] !== undefined &&
    output["ResourceTypes"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["ResourceTypes"]["member"] instanceof Array
        ? output["ResourceTypes"]["member"]
        : [output["ResourceTypes"]["member"]];
    contents.ResourceTypes = deserializeAws_queryResourceTypes(
      wrappedItem,
      context
    );
  }
  if (output["Version"] !== undefined) {
    contents.Version =
      output["Version"]["#text"] !== undefined
        ? output["Version"]["#text"]
        : output["Version"];
  }
  return contents;
};

const deserializeAws_queryImports = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_queryInsufficientCapabilitiesException = (
  output: any,
  context: __SerdeContext
): InsufficientCapabilitiesException => {
  let contents: any = {
    __type: "InsufficientCapabilitiesException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryInvalidChangeSetStatusException = (
  output: any,
  context: __SerdeContext
): InvalidChangeSetStatusException => {
  let contents: any = {
    __type: "InvalidChangeSetStatusException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryInvalidStateTransitionException = (
  output: any,
  context: __SerdeContext
): InvalidStateTransitionException => {
  let contents: any = {
    __type: "InvalidStateTransitionException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryLimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryListChangeSetsOutput = (
  output: any,
  context: __SerdeContext
): ListChangeSetsOutput => {
  let contents: any = {
    __type: "ListChangeSetsOutput",
    NextToken: undefined,
    Summaries: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (
    output["Summaries"] !== undefined &&
    output["Summaries"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Summaries"]["member"] instanceof Array
        ? output["Summaries"]["member"]
        : [output["Summaries"]["member"]];
    contents.Summaries = deserializeAws_queryChangeSetSummaries(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryListExportsOutput = (
  output: any,
  context: __SerdeContext
): ListExportsOutput => {
  let contents: any = {
    __type: "ListExportsOutput",
    Exports: undefined,
    NextToken: undefined
  };
  if (output.Exports === "") {
    contents.Exports = [];
  }
  if (
    output["Exports"] !== undefined &&
    output["Exports"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Exports"]["member"] instanceof Array
        ? output["Exports"]["member"]
        : [output["Exports"]["member"]];
    contents.Exports = deserializeAws_queryExports(wrappedItem, context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryListImportsOutput = (
  output: any,
  context: __SerdeContext
): ListImportsOutput => {
  let contents: any = {
    __type: "ListImportsOutput",
    Imports: undefined,
    NextToken: undefined
  };
  if (output.Imports === "") {
    contents.Imports = [];
  }
  if (
    output["Imports"] !== undefined &&
    output["Imports"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Imports"]["member"] instanceof Array
        ? output["Imports"]["member"]
        : [output["Imports"]["member"]];
    contents.Imports = deserializeAws_queryImports(wrappedItem, context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryListStackResourcesOutput = (
  output: any,
  context: __SerdeContext
): ListStackResourcesOutput => {
  let contents: any = {
    __type: "ListStackResourcesOutput",
    NextToken: undefined,
    StackResourceSummaries: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  if (output.StackResourceSummaries === "") {
    contents.StackResourceSummaries = [];
  }
  if (
    output["StackResourceSummaries"] !== undefined &&
    output["StackResourceSummaries"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["StackResourceSummaries"]["member"] instanceof Array
        ? output["StackResourceSummaries"]["member"]
        : [output["StackResourceSummaries"]["member"]];
    contents.StackResourceSummaries = deserializeAws_queryStackResourceSummaries(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryListStacksOutput = (
  output: any,
  context: __SerdeContext
): ListStacksOutput => {
  let contents: any = {
    __type: "ListStacksOutput",
    NextToken: undefined,
    StackSummaries: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  if (output.StackSummaries === "") {
    contents.StackSummaries = [];
  }
  if (
    output["StackSummaries"] !== undefined &&
    output["StackSummaries"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["StackSummaries"]["member"] instanceof Array
        ? output["StackSummaries"]["member"]
        : [output["StackSummaries"]["member"]];
    contents.StackSummaries = deserializeAws_queryStackSummaries(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryListTypeRegistrationsOutput = (
  output: any,
  context: __SerdeContext
): ListTypeRegistrationsOutput => {
  let contents: any = {
    __type: "ListTypeRegistrationsOutput",
    NextToken: undefined,
    RegistrationTokenList: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  if (output.RegistrationTokenList === "") {
    contents.RegistrationTokenList = [];
  }
  if (
    output["RegistrationTokenList"] !== undefined &&
    output["RegistrationTokenList"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["RegistrationTokenList"]["member"] instanceof Array
        ? output["RegistrationTokenList"]["member"]
        : [output["RegistrationTokenList"]["member"]];
    contents.RegistrationTokenList = deserializeAws_queryRegistrationTokenList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryListTypeVersionsOutput = (
  output: any,
  context: __SerdeContext
): ListTypeVersionsOutput => {
  let contents: any = {
    __type: "ListTypeVersionsOutput",
    NextToken: undefined,
    TypeVersionSummaries: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  if (output.TypeVersionSummaries === "") {
    contents.TypeVersionSummaries = [];
  }
  if (
    output["TypeVersionSummaries"] !== undefined &&
    output["TypeVersionSummaries"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["TypeVersionSummaries"]["member"] instanceof Array
        ? output["TypeVersionSummaries"]["member"]
        : [output["TypeVersionSummaries"]["member"]];
    contents.TypeVersionSummaries = deserializeAws_queryTypeVersionSummaries(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryListTypesOutput = (
  output: any,
  context: __SerdeContext
): ListTypesOutput => {
  let contents: any = {
    __type: "ListTypesOutput",
    NextToken: undefined,
    TypeSummaries: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  if (output.TypeSummaries === "") {
    contents.TypeSummaries = [];
  }
  if (
    output["TypeSummaries"] !== undefined &&
    output["TypeSummaries"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["TypeSummaries"]["member"] instanceof Array
        ? output["TypeSummaries"]["member"]
        : [output["TypeSummaries"]["member"]];
    contents.TypeSummaries = deserializeAws_queryTypeSummaries(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryLoggingConfig = (
  output: any,
  context: __SerdeContext
): LoggingConfig => {
  let contents: any = {
    __type: "LoggingConfig",
    LogGroupName: undefined,
    LogRoleArn: undefined
  };
  if (output["LogGroupName"] !== undefined) {
    contents.LogGroupName =
      output["LogGroupName"]["#text"] !== undefined
        ? output["LogGroupName"]["#text"]
        : output["LogGroupName"];
  }
  if (output["LogRoleArn"] !== undefined) {
    contents.LogRoleArn =
      output["LogRoleArn"]["#text"] !== undefined
        ? output["LogRoleArn"]["#text"]
        : output["LogRoleArn"];
  }
  return contents;
};

const deserializeAws_queryLogicalResourceIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_queryNotificationARNs = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_queryOperationStatusCheckFailedException = (
  output: any,
  context: __SerdeContext
): OperationStatusCheckFailedException => {
  let contents: any = {
    __type: "OperationStatusCheckFailedException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryOutput = (
  output: any,
  context: __SerdeContext
): Output => {
  let contents: any = {
    __type: "Output",
    Description: undefined,
    ExportName: undefined,
    OutputKey: undefined,
    OutputValue: undefined
  };
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output["ExportName"] !== undefined) {
    contents.ExportName =
      output["ExportName"]["#text"] !== undefined
        ? output["ExportName"]["#text"]
        : output["ExportName"];
  }
  if (output["OutputKey"] !== undefined) {
    contents.OutputKey =
      output["OutputKey"]["#text"] !== undefined
        ? output["OutputKey"]["#text"]
        : output["OutputKey"];
  }
  if (output["OutputValue"] !== undefined) {
    contents.OutputValue =
      output["OutputValue"]["#text"] !== undefined
        ? output["OutputValue"]["#text"]
        : output["OutputValue"];
  }
  return contents;
};

const deserializeAws_queryOutputs = (
  output: any,
  context: __SerdeContext
): Array<Output> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryOutput(entry, context));
  });
  return contents;
};

const deserializeAws_queryParameter = (
  output: any,
  context: __SerdeContext
): Parameter => {
  let contents: any = {
    __type: "Parameter",
    ParameterKey: undefined,
    ParameterValue: undefined,
    ResolvedValue: undefined,
    UsePreviousValue: undefined
  };
  if (output["ParameterKey"] !== undefined) {
    contents.ParameterKey =
      output["ParameterKey"]["#text"] !== undefined
        ? output["ParameterKey"]["#text"]
        : output["ParameterKey"];
  }
  if (output["ParameterValue"] !== undefined) {
    contents.ParameterValue =
      output["ParameterValue"]["#text"] !== undefined
        ? output["ParameterValue"]["#text"]
        : output["ParameterValue"];
  }
  if (output["ResolvedValue"] !== undefined) {
    contents.ResolvedValue =
      output["ResolvedValue"]["#text"] !== undefined
        ? output["ResolvedValue"]["#text"]
        : output["ResolvedValue"];
  }
  if (output["UsePreviousValue"] !== undefined) {
    contents.UsePreviousValue =
      (output["UsePreviousValue"]["#text"] !== undefined
        ? output["UsePreviousValue"]["#text"]
        : output["UsePreviousValue"]) == "true";
  }
  return contents;
};

const deserializeAws_queryParameterConstraints = (
  output: any,
  context: __SerdeContext
): ParameterConstraints => {
  let contents: any = {
    __type: "ParameterConstraints",
    AllowedValues: undefined
  };
  if (output.AllowedValues === "") {
    contents.AllowedValues = [];
  }
  if (
    output["AllowedValues"] !== undefined &&
    output["AllowedValues"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["AllowedValues"]["member"] instanceof Array
        ? output["AllowedValues"]["member"]
        : [output["AllowedValues"]["member"]];
    contents.AllowedValues = deserializeAws_queryAllowedValues(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryParameterDeclaration = (
  output: any,
  context: __SerdeContext
): ParameterDeclaration => {
  let contents: any = {
    __type: "ParameterDeclaration",
    DefaultValue: undefined,
    Description: undefined,
    NoEcho: undefined,
    ParameterConstraints: undefined,
    ParameterKey: undefined,
    ParameterType: undefined
  };
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue =
      output["DefaultValue"]["#text"] !== undefined
        ? output["DefaultValue"]["#text"]
        : output["DefaultValue"];
  }
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output["NoEcho"] !== undefined) {
    contents.NoEcho =
      (output["NoEcho"]["#text"] !== undefined
        ? output["NoEcho"]["#text"]
        : output["NoEcho"]) == "true";
  }
  if (output["ParameterConstraints"] !== undefined) {
    contents.ParameterConstraints = deserializeAws_queryParameterConstraints(
      output["ParameterConstraints"],
      context
    );
  }
  if (output["ParameterKey"] !== undefined) {
    contents.ParameterKey =
      output["ParameterKey"]["#text"] !== undefined
        ? output["ParameterKey"]["#text"]
        : output["ParameterKey"];
  }
  if (output["ParameterType"] !== undefined) {
    contents.ParameterType =
      output["ParameterType"]["#text"] !== undefined
        ? output["ParameterType"]["#text"]
        : output["ParameterType"];
  }
  return contents;
};

const deserializeAws_queryParameterDeclarations = (
  output: any,
  context: __SerdeContext
): Array<ParameterDeclaration> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryParameterDeclaration(entry, context));
  });
  return contents;
};

const deserializeAws_queryParameters = (
  output: any,
  context: __SerdeContext
): Array<Parameter> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryParameter(entry, context));
  });
  return contents;
};

const deserializeAws_queryPhysicalResourceIdContext = (
  output: any,
  context: __SerdeContext
): Array<PhysicalResourceIdContextKeyValuePair> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(
      deserializeAws_queryPhysicalResourceIdContextKeyValuePair(entry, context)
    );
  });
  return contents;
};

const deserializeAws_queryPhysicalResourceIdContextKeyValuePair = (
  output: any,
  context: __SerdeContext
): PhysicalResourceIdContextKeyValuePair => {
  let contents: any = {
    __type: "PhysicalResourceIdContextKeyValuePair",
    Key: undefined,
    Value: undefined
  };
  if (output["Key"] !== undefined) {
    contents.Key =
      output["Key"]["#text"] !== undefined
        ? output["Key"]["#text"]
        : output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value =
      output["Value"]["#text"] !== undefined
        ? output["Value"]["#text"]
        : output["Value"];
  }
  return contents;
};

const deserializeAws_queryPropertyDifference = (
  output: any,
  context: __SerdeContext
): PropertyDifference => {
  let contents: any = {
    __type: "PropertyDifference",
    ActualValue: undefined,
    DifferenceType: undefined,
    ExpectedValue: undefined,
    PropertyPath: undefined
  };
  if (output["ActualValue"] !== undefined) {
    contents.ActualValue =
      output["ActualValue"]["#text"] !== undefined
        ? output["ActualValue"]["#text"]
        : output["ActualValue"];
  }
  if (output["DifferenceType"] !== undefined) {
    contents.DifferenceType =
      output["DifferenceType"]["#text"] !== undefined
        ? output["DifferenceType"]["#text"]
        : output["DifferenceType"];
  }
  if (output["ExpectedValue"] !== undefined) {
    contents.ExpectedValue =
      output["ExpectedValue"]["#text"] !== undefined
        ? output["ExpectedValue"]["#text"]
        : output["ExpectedValue"];
  }
  if (output["PropertyPath"] !== undefined) {
    contents.PropertyPath =
      output["PropertyPath"]["#text"] !== undefined
        ? output["PropertyPath"]["#text"]
        : output["PropertyPath"];
  }
  return contents;
};

const deserializeAws_queryPropertyDifferences = (
  output: any,
  context: __SerdeContext
): Array<PropertyDifference> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryPropertyDifference(entry, context));
  });
  return contents;
};

const deserializeAws_queryRecordHandlerProgressOutput = (
  output: any,
  context: __SerdeContext
): RecordHandlerProgressOutput => {
  let contents: any = {
    __type: "RecordHandlerProgressOutput"
  };
  return contents;
};

const deserializeAws_queryRegisterTypeOutput = (
  output: any,
  context: __SerdeContext
): RegisterTypeOutput => {
  let contents: any = {
    __type: "RegisterTypeOutput",
    RegistrationToken: undefined
  };
  if (output["RegistrationToken"] !== undefined) {
    contents.RegistrationToken =
      output["RegistrationToken"]["#text"] !== undefined
        ? output["RegistrationToken"]["#text"]
        : output["RegistrationToken"];
  }
  return contents;
};

const deserializeAws_queryRegistrationTokenList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_queryResourceChange = (
  output: any,
  context: __SerdeContext
): ResourceChange => {
  let contents: any = {
    __type: "ResourceChange",
    Action: undefined,
    Details: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    Replacement: undefined,
    ResourceType: undefined,
    Scope: undefined
  };
  if (output["Action"] !== undefined) {
    contents.Action =
      output["Action"]["#text"] !== undefined
        ? output["Action"]["#text"]
        : output["Action"];
  }
  if (output.Details === "") {
    contents.Details = [];
  }
  if (
    output["Details"] !== undefined &&
    output["Details"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Details"]["member"] instanceof Array
        ? output["Details"]["member"]
        : [output["Details"]["member"]];
    contents.Details = deserializeAws_queryResourceChangeDetails(
      wrappedItem,
      context
    );
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId =
      output["LogicalResourceId"]["#text"] !== undefined
        ? output["LogicalResourceId"]["#text"]
        : output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId =
      output["PhysicalResourceId"]["#text"] !== undefined
        ? output["PhysicalResourceId"]["#text"]
        : output["PhysicalResourceId"];
  }
  if (output["Replacement"] !== undefined) {
    contents.Replacement =
      output["Replacement"]["#text"] !== undefined
        ? output["Replacement"]["#text"]
        : output["Replacement"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType =
      output["ResourceType"]["#text"] !== undefined
        ? output["ResourceType"]["#text"]
        : output["ResourceType"];
  }
  if (output.Scope === "") {
    contents.Scope = [];
  }
  if (
    output["Scope"] !== undefined &&
    output["Scope"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Scope"]["member"] instanceof Array
        ? output["Scope"]["member"]
        : [output["Scope"]["member"]];
    contents.Scope = deserializeAws_queryScope(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryResourceChangeDetail = (
  output: any,
  context: __SerdeContext
): ResourceChangeDetail => {
  let contents: any = {
    __type: "ResourceChangeDetail",
    CausingEntity: undefined,
    ChangeSource: undefined,
    Evaluation: undefined,
    Target: undefined
  };
  if (output["CausingEntity"] !== undefined) {
    contents.CausingEntity =
      output["CausingEntity"]["#text"] !== undefined
        ? output["CausingEntity"]["#text"]
        : output["CausingEntity"];
  }
  if (output["ChangeSource"] !== undefined) {
    contents.ChangeSource =
      output["ChangeSource"]["#text"] !== undefined
        ? output["ChangeSource"]["#text"]
        : output["ChangeSource"];
  }
  if (output["Evaluation"] !== undefined) {
    contents.Evaluation =
      output["Evaluation"]["#text"] !== undefined
        ? output["Evaluation"]["#text"]
        : output["Evaluation"];
  }
  if (output["Target"] !== undefined) {
    contents.Target = deserializeAws_queryResourceTargetDefinition(
      output["Target"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryResourceChangeDetails = (
  output: any,
  context: __SerdeContext
): Array<ResourceChangeDetail> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryResourceChangeDetail(entry, context));
  });
  return contents;
};

const deserializeAws_queryResourceIdentifierSummaries = (
  output: any,
  context: __SerdeContext
): Array<ResourceIdentifierSummary> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(
      deserializeAws_queryResourceIdentifierSummary(entry, context)
    );
  });
  return contents;
};

const deserializeAws_queryResourceIdentifierSummary = (
  output: any,
  context: __SerdeContext
): ResourceIdentifierSummary => {
  let contents: any = {
    __type: "ResourceIdentifierSummary",
    LogicalResourceIds: undefined,
    ResourceIdentifiers: undefined,
    ResourceType: undefined
  };
  if (output.LogicalResourceIds === "") {
    contents.LogicalResourceIds = [];
  }
  if (
    output["LogicalResourceIds"] !== undefined &&
    output["LogicalResourceIds"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["LogicalResourceIds"]["member"] instanceof Array
        ? output["LogicalResourceIds"]["member"]
        : [output["LogicalResourceIds"]["member"]];
    contents.LogicalResourceIds = deserializeAws_queryLogicalResourceIds(
      wrappedItem,
      context
    );
  }
  if (output.ResourceIdentifiers === "") {
    contents.ResourceIdentifiers = [];
  }
  if (
    output["ResourceIdentifiers"] !== undefined &&
    output["ResourceIdentifiers"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["ResourceIdentifiers"]["member"] instanceof Array
        ? output["ResourceIdentifiers"]["member"]
        : [output["ResourceIdentifiers"]["member"]];
    contents.ResourceIdentifiers = deserializeAws_queryResourceIdentifiers(
      wrappedItem,
      context
    );
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType =
      output["ResourceType"]["#text"] !== undefined
        ? output["ResourceType"]["#text"]
        : output["ResourceType"];
  }
  return contents;
};

const deserializeAws_queryResourceIdentifiers = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_queryResourceTargetDefinition = (
  output: any,
  context: __SerdeContext
): ResourceTargetDefinition => {
  let contents: any = {
    __type: "ResourceTargetDefinition",
    Attribute: undefined,
    Name: undefined,
    RequiresRecreation: undefined
  };
  if (output["Attribute"] !== undefined) {
    contents.Attribute =
      output["Attribute"]["#text"] !== undefined
        ? output["Attribute"]["#text"]
        : output["Attribute"];
  }
  if (output["Name"] !== undefined) {
    contents.Name =
      output["Name"]["#text"] !== undefined
        ? output["Name"]["#text"]
        : output["Name"];
  }
  if (output["RequiresRecreation"] !== undefined) {
    contents.RequiresRecreation =
      output["RequiresRecreation"]["#text"] !== undefined
        ? output["RequiresRecreation"]["#text"]
        : output["RequiresRecreation"];
  }
  return contents;
};

const deserializeAws_queryResourceTypes = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_queryRollbackConfiguration = (
  output: any,
  context: __SerdeContext
): RollbackConfiguration => {
  let contents: any = {
    __type: "RollbackConfiguration",
    MonitoringTimeInMinutes: undefined,
    RollbackTriggers: undefined
  };
  if (output["MonitoringTimeInMinutes"] !== undefined) {
    contents.MonitoringTimeInMinutes = parseInt(
      output["MonitoringTimeInMinutes"]["#text"] !== undefined
        ? output["MonitoringTimeInMinutes"]["#text"]
        : output["MonitoringTimeInMinutes"]
    );
  }
  if (output.RollbackTriggers === "") {
    contents.RollbackTriggers = [];
  }
  if (
    output["RollbackTriggers"] !== undefined &&
    output["RollbackTriggers"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["RollbackTriggers"]["member"] instanceof Array
        ? output["RollbackTriggers"]["member"]
        : [output["RollbackTriggers"]["member"]];
    contents.RollbackTriggers = deserializeAws_queryRollbackTriggers(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryRollbackTrigger = (
  output: any,
  context: __SerdeContext
): RollbackTrigger => {
  let contents: any = {
    __type: "RollbackTrigger",
    Arn: undefined,
    Type: undefined
  };
  if (output["Arn"] !== undefined) {
    contents.Arn =
      output["Arn"]["#text"] !== undefined
        ? output["Arn"]["#text"]
        : output["Arn"];
  }
  if (output["Type"] !== undefined) {
    contents.Type =
      output["Type"]["#text"] !== undefined
        ? output["Type"]["#text"]
        : output["Type"];
  }
  return contents;
};

const deserializeAws_queryRollbackTriggers = (
  output: any,
  context: __SerdeContext
): Array<RollbackTrigger> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryRollbackTrigger(entry, context));
  });
  return contents;
};

const deserializeAws_queryScope = (
  output: any,
  context: __SerdeContext
): Array<ResourceAttribute | string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_querySetTypeDefaultVersionOutput = (
  output: any,
  context: __SerdeContext
): SetTypeDefaultVersionOutput => {
  let contents: any = {
    __type: "SetTypeDefaultVersionOutput"
  };
  return contents;
};

const deserializeAws_queryStack = (
  output: any,
  context: __SerdeContext
): Stack => {
  let contents: any = {
    __type: "Stack",
    Capabilities: undefined,
    ChangeSetId: undefined,
    CreationTime: undefined,
    DeletionTime: undefined,
    Description: undefined,
    DisableRollback: undefined,
    DriftInformation: undefined,
    EnableTerminationProtection: undefined,
    LastUpdatedTime: undefined,
    NotificationARNs: undefined,
    Outputs: undefined,
    Parameters: undefined,
    ParentId: undefined,
    RoleARN: undefined,
    RollbackConfiguration: undefined,
    RootId: undefined,
    StackId: undefined,
    StackName: undefined,
    StackStatus: undefined,
    StackStatusReason: undefined,
    Tags: undefined,
    TimeoutInMinutes: undefined
  };
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (
    output["Capabilities"] !== undefined &&
    output["Capabilities"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Capabilities"]["member"] instanceof Array
        ? output["Capabilities"]["member"]
        : [output["Capabilities"]["member"]];
    contents.Capabilities = deserializeAws_queryCapabilities(
      wrappedItem,
      context
    );
  }
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId =
      output["ChangeSetId"]["#text"] !== undefined
        ? output["ChangeSetId"]["#text"]
        : output["ChangeSetId"];
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["DeletionTime"] !== undefined) {
    contents.DeletionTime = new Date(output["DeletionTime"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output["DisableRollback"] !== undefined) {
    contents.DisableRollback =
      (output["DisableRollback"]["#text"] !== undefined
        ? output["DisableRollback"]["#text"]
        : output["DisableRollback"]) == "true";
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = deserializeAws_queryStackDriftInformation(
      output["DriftInformation"],
      context
    );
  }
  if (output["EnableTerminationProtection"] !== undefined) {
    contents.EnableTerminationProtection =
      (output["EnableTerminationProtection"]["#text"] !== undefined
        ? output["EnableTerminationProtection"]["#text"]
        : output["EnableTerminationProtection"]) == "true";
  }
  if (output["LastUpdatedTime"] !== undefined) {
    contents.LastUpdatedTime = new Date(output["LastUpdatedTime"]);
  }
  if (output.NotificationARNs === "") {
    contents.NotificationARNs = [];
  }
  if (
    output["NotificationARNs"] !== undefined &&
    output["NotificationARNs"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["NotificationARNs"]["member"] instanceof Array
        ? output["NotificationARNs"]["member"]
        : [output["NotificationARNs"]["member"]];
    contents.NotificationARNs = deserializeAws_queryNotificationARNs(
      wrappedItem,
      context
    );
  }
  if (output.Outputs === "") {
    contents.Outputs = [];
  }
  if (
    output["Outputs"] !== undefined &&
    output["Outputs"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Outputs"]["member"] instanceof Array
        ? output["Outputs"]["member"]
        : [output["Outputs"]["member"]];
    contents.Outputs = deserializeAws_queryOutputs(wrappedItem, context);
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (
    output["Parameters"] !== undefined &&
    output["Parameters"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Parameters"]["member"] instanceof Array
        ? output["Parameters"]["member"]
        : [output["Parameters"]["member"]];
    contents.Parameters = deserializeAws_queryParameters(wrappedItem, context);
  }
  if (output["ParentId"] !== undefined) {
    contents.ParentId =
      output["ParentId"]["#text"] !== undefined
        ? output["ParentId"]["#text"]
        : output["ParentId"];
  }
  if (output["RoleARN"] !== undefined) {
    contents.RoleARN =
      output["RoleARN"]["#text"] !== undefined
        ? output["RoleARN"]["#text"]
        : output["RoleARN"];
  }
  if (output["RollbackConfiguration"] !== undefined) {
    contents.RollbackConfiguration = deserializeAws_queryRollbackConfiguration(
      output["RollbackConfiguration"],
      context
    );
  }
  if (output["RootId"] !== undefined) {
    contents.RootId =
      output["RootId"]["#text"] !== undefined
        ? output["RootId"]["#text"]
        : output["RootId"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId =
      output["StackId"]["#text"] !== undefined
        ? output["StackId"]["#text"]
        : output["StackId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName =
      output["StackName"]["#text"] !== undefined
        ? output["StackName"]["#text"]
        : output["StackName"];
  }
  if (output["StackStatus"] !== undefined) {
    contents.StackStatus =
      output["StackStatus"]["#text"] !== undefined
        ? output["StackStatus"]["#text"]
        : output["StackStatus"];
  }
  if (output["StackStatusReason"] !== undefined) {
    contents.StackStatusReason =
      output["StackStatusReason"]["#text"] !== undefined
        ? output["StackStatusReason"]["#text"]
        : output["StackStatusReason"];
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    const wrappedItem =
      output["Tags"]["member"] instanceof Array
        ? output["Tags"]["member"]
        : [output["Tags"]["member"]];
    contents.Tags = deserializeAws_queryTags(wrappedItem, context);
  }
  if (output["TimeoutInMinutes"] !== undefined) {
    contents.TimeoutInMinutes = parseInt(
      output["TimeoutInMinutes"]["#text"] !== undefined
        ? output["TimeoutInMinutes"]["#text"]
        : output["TimeoutInMinutes"]
    );
  }
  return contents;
};

const deserializeAws_queryStackDriftInformation = (
  output: any,
  context: __SerdeContext
): StackDriftInformation => {
  let contents: any = {
    __type: "StackDriftInformation",
    LastCheckTimestamp: undefined,
    StackDriftStatus: undefined
  };
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
  }
  if (output["StackDriftStatus"] !== undefined) {
    contents.StackDriftStatus =
      output["StackDriftStatus"]["#text"] !== undefined
        ? output["StackDriftStatus"]["#text"]
        : output["StackDriftStatus"];
  }
  return contents;
};

const deserializeAws_queryStackDriftInformationSummary = (
  output: any,
  context: __SerdeContext
): StackDriftInformationSummary => {
  let contents: any = {
    __type: "StackDriftInformationSummary",
    LastCheckTimestamp: undefined,
    StackDriftStatus: undefined
  };
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
  }
  if (output["StackDriftStatus"] !== undefined) {
    contents.StackDriftStatus =
      output["StackDriftStatus"]["#text"] !== undefined
        ? output["StackDriftStatus"]["#text"]
        : output["StackDriftStatus"];
  }
  return contents;
};

const deserializeAws_queryStackEvent = (
  output: any,
  context: __SerdeContext
): StackEvent => {
  let contents: any = {
    __type: "StackEvent",
    ClientRequestToken: undefined,
    EventId: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceProperties: undefined,
    ResourceStatus: undefined,
    ResourceStatusReason: undefined,
    ResourceType: undefined,
    StackId: undefined,
    StackName: undefined,
    Timestamp: undefined
  };
  if (output["ClientRequestToken"] !== undefined) {
    contents.ClientRequestToken =
      output["ClientRequestToken"]["#text"] !== undefined
        ? output["ClientRequestToken"]["#text"]
        : output["ClientRequestToken"];
  }
  if (output["EventId"] !== undefined) {
    contents.EventId =
      output["EventId"]["#text"] !== undefined
        ? output["EventId"]["#text"]
        : output["EventId"];
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId =
      output["LogicalResourceId"]["#text"] !== undefined
        ? output["LogicalResourceId"]["#text"]
        : output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId =
      output["PhysicalResourceId"]["#text"] !== undefined
        ? output["PhysicalResourceId"]["#text"]
        : output["PhysicalResourceId"];
  }
  if (output["ResourceProperties"] !== undefined) {
    contents.ResourceProperties =
      output["ResourceProperties"]["#text"] !== undefined
        ? output["ResourceProperties"]["#text"]
        : output["ResourceProperties"];
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus =
      output["ResourceStatus"]["#text"] !== undefined
        ? output["ResourceStatus"]["#text"]
        : output["ResourceStatus"];
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason =
      output["ResourceStatusReason"]["#text"] !== undefined
        ? output["ResourceStatusReason"]["#text"]
        : output["ResourceStatusReason"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType =
      output["ResourceType"]["#text"] !== undefined
        ? output["ResourceType"]["#text"]
        : output["ResourceType"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId =
      output["StackId"]["#text"] !== undefined
        ? output["StackId"]["#text"]
        : output["StackId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName =
      output["StackName"]["#text"] !== undefined
        ? output["StackName"]["#text"]
        : output["StackName"];
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  return contents;
};

const deserializeAws_queryStackEvents = (
  output: any,
  context: __SerdeContext
): Array<StackEvent> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryStackEvent(entry, context));
  });
  return contents;
};

const deserializeAws_queryStackResource = (
  output: any,
  context: __SerdeContext
): StackResource => {
  let contents: any = {
    __type: "StackResource",
    Description: undefined,
    DriftInformation: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceStatus: undefined,
    ResourceStatusReason: undefined,
    ResourceType: undefined,
    StackId: undefined,
    StackName: undefined,
    Timestamp: undefined
  };
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = deserializeAws_queryStackResourceDriftInformation(
      output["DriftInformation"],
      context
    );
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId =
      output["LogicalResourceId"]["#text"] !== undefined
        ? output["LogicalResourceId"]["#text"]
        : output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId =
      output["PhysicalResourceId"]["#text"] !== undefined
        ? output["PhysicalResourceId"]["#text"]
        : output["PhysicalResourceId"];
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus =
      output["ResourceStatus"]["#text"] !== undefined
        ? output["ResourceStatus"]["#text"]
        : output["ResourceStatus"];
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason =
      output["ResourceStatusReason"]["#text"] !== undefined
        ? output["ResourceStatusReason"]["#text"]
        : output["ResourceStatusReason"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType =
      output["ResourceType"]["#text"] !== undefined
        ? output["ResourceType"]["#text"]
        : output["ResourceType"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId =
      output["StackId"]["#text"] !== undefined
        ? output["StackId"]["#text"]
        : output["StackId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName =
      output["StackName"]["#text"] !== undefined
        ? output["StackName"]["#text"]
        : output["StackName"];
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  return contents;
};

const deserializeAws_queryStackResourceDetail = (
  output: any,
  context: __SerdeContext
): StackResourceDetail => {
  let contents: any = {
    __type: "StackResourceDetail",
    Description: undefined,
    DriftInformation: undefined,
    LastUpdatedTimestamp: undefined,
    LogicalResourceId: undefined,
    Metadata: undefined,
    PhysicalResourceId: undefined,
    ResourceStatus: undefined,
    ResourceStatusReason: undefined,
    ResourceType: undefined,
    StackId: undefined,
    StackName: undefined
  };
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = deserializeAws_queryStackResourceDriftInformation(
      output["DriftInformation"],
      context
    );
  }
  if (output["LastUpdatedTimestamp"] !== undefined) {
    contents.LastUpdatedTimestamp = new Date(output["LastUpdatedTimestamp"]);
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId =
      output["LogicalResourceId"]["#text"] !== undefined
        ? output["LogicalResourceId"]["#text"]
        : output["LogicalResourceId"];
  }
  if (output["Metadata"] !== undefined) {
    contents.Metadata =
      output["Metadata"]["#text"] !== undefined
        ? output["Metadata"]["#text"]
        : output["Metadata"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId =
      output["PhysicalResourceId"]["#text"] !== undefined
        ? output["PhysicalResourceId"]["#text"]
        : output["PhysicalResourceId"];
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus =
      output["ResourceStatus"]["#text"] !== undefined
        ? output["ResourceStatus"]["#text"]
        : output["ResourceStatus"];
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason =
      output["ResourceStatusReason"]["#text"] !== undefined
        ? output["ResourceStatusReason"]["#text"]
        : output["ResourceStatusReason"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType =
      output["ResourceType"]["#text"] !== undefined
        ? output["ResourceType"]["#text"]
        : output["ResourceType"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId =
      output["StackId"]["#text"] !== undefined
        ? output["StackId"]["#text"]
        : output["StackId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName =
      output["StackName"]["#text"] !== undefined
        ? output["StackName"]["#text"]
        : output["StackName"];
  }
  return contents;
};

const deserializeAws_queryStackResourceDrift = (
  output: any,
  context: __SerdeContext
): StackResourceDrift => {
  let contents: any = {
    __type: "StackResourceDrift",
    ActualProperties: undefined,
    ExpectedProperties: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    PhysicalResourceIdContext: undefined,
    PropertyDifferences: undefined,
    ResourceType: undefined,
    StackId: undefined,
    StackResourceDriftStatus: undefined,
    Timestamp: undefined
  };
  if (output["ActualProperties"] !== undefined) {
    contents.ActualProperties =
      output["ActualProperties"]["#text"] !== undefined
        ? output["ActualProperties"]["#text"]
        : output["ActualProperties"];
  }
  if (output["ExpectedProperties"] !== undefined) {
    contents.ExpectedProperties =
      output["ExpectedProperties"]["#text"] !== undefined
        ? output["ExpectedProperties"]["#text"]
        : output["ExpectedProperties"];
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId =
      output["LogicalResourceId"]["#text"] !== undefined
        ? output["LogicalResourceId"]["#text"]
        : output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId =
      output["PhysicalResourceId"]["#text"] !== undefined
        ? output["PhysicalResourceId"]["#text"]
        : output["PhysicalResourceId"];
  }
  if (output.PhysicalResourceIdContext === "") {
    contents.PhysicalResourceIdContext = [];
  }
  if (
    output["PhysicalResourceIdContext"] !== undefined &&
    output["PhysicalResourceIdContext"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["PhysicalResourceIdContext"]["member"] instanceof Array
        ? output["PhysicalResourceIdContext"]["member"]
        : [output["PhysicalResourceIdContext"]["member"]];
    contents.PhysicalResourceIdContext = deserializeAws_queryPhysicalResourceIdContext(
      wrappedItem,
      context
    );
  }
  if (output.PropertyDifferences === "") {
    contents.PropertyDifferences = [];
  }
  if (
    output["PropertyDifferences"] !== undefined &&
    output["PropertyDifferences"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["PropertyDifferences"]["member"] instanceof Array
        ? output["PropertyDifferences"]["member"]
        : [output["PropertyDifferences"]["member"]];
    contents.PropertyDifferences = deserializeAws_queryPropertyDifferences(
      wrappedItem,
      context
    );
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType =
      output["ResourceType"]["#text"] !== undefined
        ? output["ResourceType"]["#text"]
        : output["ResourceType"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId =
      output["StackId"]["#text"] !== undefined
        ? output["StackId"]["#text"]
        : output["StackId"];
  }
  if (output["StackResourceDriftStatus"] !== undefined) {
    contents.StackResourceDriftStatus =
      output["StackResourceDriftStatus"]["#text"] !== undefined
        ? output["StackResourceDriftStatus"]["#text"]
        : output["StackResourceDriftStatus"];
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  return contents;
};

const deserializeAws_queryStackResourceDriftInformation = (
  output: any,
  context: __SerdeContext
): StackResourceDriftInformation => {
  let contents: any = {
    __type: "StackResourceDriftInformation",
    LastCheckTimestamp: undefined,
    StackResourceDriftStatus: undefined
  };
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
  }
  if (output["StackResourceDriftStatus"] !== undefined) {
    contents.StackResourceDriftStatus =
      output["StackResourceDriftStatus"]["#text"] !== undefined
        ? output["StackResourceDriftStatus"]["#text"]
        : output["StackResourceDriftStatus"];
  }
  return contents;
};

const deserializeAws_queryStackResourceDriftInformationSummary = (
  output: any,
  context: __SerdeContext
): StackResourceDriftInformationSummary => {
  let contents: any = {
    __type: "StackResourceDriftInformationSummary",
    LastCheckTimestamp: undefined,
    StackResourceDriftStatus: undefined
  };
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
  }
  if (output["StackResourceDriftStatus"] !== undefined) {
    contents.StackResourceDriftStatus =
      output["StackResourceDriftStatus"]["#text"] !== undefined
        ? output["StackResourceDriftStatus"]["#text"]
        : output["StackResourceDriftStatus"];
  }
  return contents;
};

const deserializeAws_queryStackResourceDrifts = (
  output: any,
  context: __SerdeContext
): Array<StackResourceDrift> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryStackResourceDrift(entry, context));
  });
  return contents;
};

const deserializeAws_queryStackResourceSummaries = (
  output: any,
  context: __SerdeContext
): Array<StackResourceSummary> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryStackResourceSummary(entry, context));
  });
  return contents;
};

const deserializeAws_queryStackResourceSummary = (
  output: any,
  context: __SerdeContext
): StackResourceSummary => {
  let contents: any = {
    __type: "StackResourceSummary",
    DriftInformation: undefined,
    LastUpdatedTimestamp: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceStatus: undefined,
    ResourceStatusReason: undefined,
    ResourceType: undefined
  };
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = deserializeAws_queryStackResourceDriftInformationSummary(
      output["DriftInformation"],
      context
    );
  }
  if (output["LastUpdatedTimestamp"] !== undefined) {
    contents.LastUpdatedTimestamp = new Date(output["LastUpdatedTimestamp"]);
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId =
      output["LogicalResourceId"]["#text"] !== undefined
        ? output["LogicalResourceId"]["#text"]
        : output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId =
      output["PhysicalResourceId"]["#text"] !== undefined
        ? output["PhysicalResourceId"]["#text"]
        : output["PhysicalResourceId"];
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus =
      output["ResourceStatus"]["#text"] !== undefined
        ? output["ResourceStatus"]["#text"]
        : output["ResourceStatus"];
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason =
      output["ResourceStatusReason"]["#text"] !== undefined
        ? output["ResourceStatusReason"]["#text"]
        : output["ResourceStatusReason"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType =
      output["ResourceType"]["#text"] !== undefined
        ? output["ResourceType"]["#text"]
        : output["ResourceType"];
  }
  return contents;
};

const deserializeAws_queryStackResources = (
  output: any,
  context: __SerdeContext
): Array<StackResource> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryStackResource(entry, context));
  });
  return contents;
};

const deserializeAws_queryStackSetNotFoundException = (
  output: any,
  context: __SerdeContext
): StackSetNotFoundException => {
  let contents: any = {
    __type: "StackSetNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryStackSummaries = (
  output: any,
  context: __SerdeContext
): Array<StackSummary> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryStackSummary(entry, context));
  });
  return contents;
};

const deserializeAws_queryStackSummary = (
  output: any,
  context: __SerdeContext
): StackSummary => {
  let contents: any = {
    __type: "StackSummary",
    CreationTime: undefined,
    DeletionTime: undefined,
    DriftInformation: undefined,
    LastUpdatedTime: undefined,
    ParentId: undefined,
    RootId: undefined,
    StackId: undefined,
    StackName: undefined,
    StackStatus: undefined,
    StackStatusReason: undefined,
    TemplateDescription: undefined
  };
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["DeletionTime"] !== undefined) {
    contents.DeletionTime = new Date(output["DeletionTime"]);
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = deserializeAws_queryStackDriftInformationSummary(
      output["DriftInformation"],
      context
    );
  }
  if (output["LastUpdatedTime"] !== undefined) {
    contents.LastUpdatedTime = new Date(output["LastUpdatedTime"]);
  }
  if (output["ParentId"] !== undefined) {
    contents.ParentId =
      output["ParentId"]["#text"] !== undefined
        ? output["ParentId"]["#text"]
        : output["ParentId"];
  }
  if (output["RootId"] !== undefined) {
    contents.RootId =
      output["RootId"]["#text"] !== undefined
        ? output["RootId"]["#text"]
        : output["RootId"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId =
      output["StackId"]["#text"] !== undefined
        ? output["StackId"]["#text"]
        : output["StackId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName =
      output["StackName"]["#text"] !== undefined
        ? output["StackName"]["#text"]
        : output["StackName"];
  }
  if (output["StackStatus"] !== undefined) {
    contents.StackStatus =
      output["StackStatus"]["#text"] !== undefined
        ? output["StackStatus"]["#text"]
        : output["StackStatus"];
  }
  if (output["StackStatusReason"] !== undefined) {
    contents.StackStatusReason =
      output["StackStatusReason"]["#text"] !== undefined
        ? output["StackStatusReason"]["#text"]
        : output["StackStatusReason"];
  }
  if (output["TemplateDescription"] !== undefined) {
    contents.TemplateDescription =
      output["TemplateDescription"]["#text"] !== undefined
        ? output["TemplateDescription"]["#text"]
        : output["TemplateDescription"];
  }
  return contents;
};

const deserializeAws_queryStacks = (
  output: any,
  context: __SerdeContext
): Array<Stack> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryStack(entry, context));
  });
  return contents;
};

const deserializeAws_queryStageList = (
  output: any,
  context: __SerdeContext
): Array<TemplateStage | string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output["Key"] !== undefined) {
    contents.Key =
      output["Key"]["#text"] !== undefined
        ? output["Key"]["#text"]
        : output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value =
      output["Value"]["#text"] !== undefined
        ? output["Value"]["#text"]
        : output["Value"];
  }
  return contents;
};

const deserializeAws_queryTags = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryTag(entry, context));
  });
  return contents;
};

const deserializeAws_queryTemplateParameter = (
  output: any,
  context: __SerdeContext
): TemplateParameter => {
  let contents: any = {
    __type: "TemplateParameter",
    DefaultValue: undefined,
    Description: undefined,
    NoEcho: undefined,
    ParameterKey: undefined
  };
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue =
      output["DefaultValue"]["#text"] !== undefined
        ? output["DefaultValue"]["#text"]
        : output["DefaultValue"];
  }
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output["NoEcho"] !== undefined) {
    contents.NoEcho =
      (output["NoEcho"]["#text"] !== undefined
        ? output["NoEcho"]["#text"]
        : output["NoEcho"]) == "true";
  }
  if (output["ParameterKey"] !== undefined) {
    contents.ParameterKey =
      output["ParameterKey"]["#text"] !== undefined
        ? output["ParameterKey"]["#text"]
        : output["ParameterKey"];
  }
  return contents;
};

const deserializeAws_queryTemplateParameters = (
  output: any,
  context: __SerdeContext
): Array<TemplateParameter> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryTemplateParameter(entry, context));
  });
  return contents;
};

const deserializeAws_queryTokenAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): TokenAlreadyExistsException => {
  let contents: any = {
    __type: "TokenAlreadyExistsException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryTransformsList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_queryTypeNotFoundException = (
  output: any,
  context: __SerdeContext
): TypeNotFoundException => {
  let contents: any = {
    __type: "TypeNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryTypeSummaries = (
  output: any,
  context: __SerdeContext
): Array<TypeSummary> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryTypeSummary(entry, context));
  });
  return contents;
};

const deserializeAws_queryTypeSummary = (
  output: any,
  context: __SerdeContext
): TypeSummary => {
  let contents: any = {
    __type: "TypeSummary",
    DefaultVersionId: undefined,
    Description: undefined,
    LastUpdated: undefined,
    Type: undefined,
    TypeArn: undefined,
    TypeName: undefined
  };
  if (output["DefaultVersionId"] !== undefined) {
    contents.DefaultVersionId =
      output["DefaultVersionId"]["#text"] !== undefined
        ? output["DefaultVersionId"]["#text"]
        : output["DefaultVersionId"];
  }
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output["LastUpdated"] !== undefined) {
    contents.LastUpdated = new Date(output["LastUpdated"]);
  }
  if (output["Type"] !== undefined) {
    contents.Type =
      output["Type"]["#text"] !== undefined
        ? output["Type"]["#text"]
        : output["Type"];
  }
  if (output["TypeArn"] !== undefined) {
    contents.TypeArn =
      output["TypeArn"]["#text"] !== undefined
        ? output["TypeArn"]["#text"]
        : output["TypeArn"];
  }
  if (output["TypeName"] !== undefined) {
    contents.TypeName =
      output["TypeName"]["#text"] !== undefined
        ? output["TypeName"]["#text"]
        : output["TypeName"];
  }
  return contents;
};

const deserializeAws_queryTypeVersionSummaries = (
  output: any,
  context: __SerdeContext
): Array<TypeVersionSummary> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryTypeVersionSummary(entry, context));
  });
  return contents;
};

const deserializeAws_queryTypeVersionSummary = (
  output: any,
  context: __SerdeContext
): TypeVersionSummary => {
  let contents: any = {
    __type: "TypeVersionSummary",
    Arn: undefined,
    Description: undefined,
    TimeCreated: undefined,
    Type: undefined,
    TypeName: undefined,
    VersionId: undefined
  };
  if (output["Arn"] !== undefined) {
    contents.Arn =
      output["Arn"]["#text"] !== undefined
        ? output["Arn"]["#text"]
        : output["Arn"];
  }
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output["TimeCreated"] !== undefined) {
    contents.TimeCreated = new Date(output["TimeCreated"]);
  }
  if (output["Type"] !== undefined) {
    contents.Type =
      output["Type"]["#text"] !== undefined
        ? output["Type"]["#text"]
        : output["Type"];
  }
  if (output["TypeName"] !== undefined) {
    contents.TypeName =
      output["TypeName"]["#text"] !== undefined
        ? output["TypeName"]["#text"]
        : output["TypeName"];
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId =
      output["VersionId"]["#text"] !== undefined
        ? output["VersionId"]["#text"]
        : output["VersionId"];
  }
  return contents;
};

const deserializeAws_queryUpdateStackOutput = (
  output: any,
  context: __SerdeContext
): UpdateStackOutput => {
  let contents: any = {
    __type: "UpdateStackOutput",
    StackId: undefined
  };
  if (output["StackId"] !== undefined) {
    contents.StackId =
      output["StackId"]["#text"] !== undefined
        ? output["StackId"]["#text"]
        : output["StackId"];
  }
  return contents;
};

const deserializeAws_queryUpdateTerminationProtectionOutput = (
  output: any,
  context: __SerdeContext
): UpdateTerminationProtectionOutput => {
  let contents: any = {
    __type: "UpdateTerminationProtectionOutput",
    StackId: undefined
  };
  if (output["StackId"] !== undefined) {
    contents.StackId =
      output["StackId"]["#text"] !== undefined
        ? output["StackId"]["#text"]
        : output["StackId"];
  }
  return contents;
};

const deserializeAws_queryValidateTemplateOutput = (
  output: any,
  context: __SerdeContext
): ValidateTemplateOutput => {
  let contents: any = {
    __type: "ValidateTemplateOutput",
    Capabilities: undefined,
    CapabilitiesReason: undefined,
    DeclaredTransforms: undefined,
    Description: undefined,
    Parameters: undefined
  };
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (
    output["Capabilities"] !== undefined &&
    output["Capabilities"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Capabilities"]["member"] instanceof Array
        ? output["Capabilities"]["member"]
        : [output["Capabilities"]["member"]];
    contents.Capabilities = deserializeAws_queryCapabilities(
      wrappedItem,
      context
    );
  }
  if (output["CapabilitiesReason"] !== undefined) {
    contents.CapabilitiesReason =
      output["CapabilitiesReason"]["#text"] !== undefined
        ? output["CapabilitiesReason"]["#text"]
        : output["CapabilitiesReason"];
  }
  if (output.DeclaredTransforms === "") {
    contents.DeclaredTransforms = [];
  }
  if (
    output["DeclaredTransforms"] !== undefined &&
    output["DeclaredTransforms"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["DeclaredTransforms"]["member"] instanceof Array
        ? output["DeclaredTransforms"]["member"]
        : [output["DeclaredTransforms"]["member"]];
    contents.DeclaredTransforms = deserializeAws_queryTransformsList(
      wrappedItem,
      context
    );
  }
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (
    output["Parameters"] !== undefined &&
    output["Parameters"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Parameters"]["member"] instanceof Array
        ? output["Parameters"]["member"]
        : [output["Parameters"]["member"]];
    contents.Parameters = deserializeAws_queryTemplateParameters(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryAccountGateResult = (
  output: any,
  context: __SerdeContext
): AccountGateResult => {
  let contents: any = {
    __type: "AccountGateResult",
    Status: undefined,
    StatusReason: undefined
  };
  if (output["Status"] !== undefined) {
    contents.Status =
      output["Status"]["#text"] !== undefined
        ? output["Status"]["#text"]
        : output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason =
      output["StatusReason"]["#text"] !== undefined
        ? output["StatusReason"]["#text"]
        : output["StatusReason"];
  }
  return contents;
};

const deserializeAws_queryCreateStackInstancesOutput = (
  output: any,
  context: __SerdeContext
): CreateStackInstancesOutput => {
  let contents: any = {
    __type: "CreateStackInstancesOutput",
    OperationId: undefined
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId =
      output["OperationId"]["#text"] !== undefined
        ? output["OperationId"]["#text"]
        : output["OperationId"];
  }
  return contents;
};

const deserializeAws_queryCreateStackSetOutput = (
  output: any,
  context: __SerdeContext
): CreateStackSetOutput => {
  let contents: any = {
    __type: "CreateStackSetOutput",
    StackSetId: undefined
  };
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId =
      output["StackSetId"]["#text"] !== undefined
        ? output["StackSetId"]["#text"]
        : output["StackSetId"];
  }
  return contents;
};

const deserializeAws_queryCreatedButModifiedException = (
  output: any,
  context: __SerdeContext
): CreatedButModifiedException => {
  let contents: any = {
    __type: "CreatedButModifiedException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryDeleteStackInstancesOutput = (
  output: any,
  context: __SerdeContext
): DeleteStackInstancesOutput => {
  let contents: any = {
    __type: "DeleteStackInstancesOutput",
    OperationId: undefined
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId =
      output["OperationId"]["#text"] !== undefined
        ? output["OperationId"]["#text"]
        : output["OperationId"];
  }
  return contents;
};

const deserializeAws_queryDeleteStackSetOutput = (
  output: any,
  context: __SerdeContext
): DeleteStackSetOutput => {
  let contents: any = {
    __type: "DeleteStackSetOutput"
  };
  return contents;
};

const deserializeAws_queryDescribeStackInstanceOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackInstanceOutput => {
  let contents: any = {
    __type: "DescribeStackInstanceOutput",
    StackInstance: undefined
  };
  if (output["StackInstance"] !== undefined) {
    contents.StackInstance = deserializeAws_queryStackInstance(
      output["StackInstance"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeStackSetOperationOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackSetOperationOutput => {
  let contents: any = {
    __type: "DescribeStackSetOperationOutput",
    StackSetOperation: undefined
  };
  if (output["StackSetOperation"] !== undefined) {
    contents.StackSetOperation = deserializeAws_queryStackSetOperation(
      output["StackSetOperation"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeStackSetOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackSetOutput => {
  let contents: any = {
    __type: "DescribeStackSetOutput",
    StackSet: undefined
  };
  if (output["StackSet"] !== undefined) {
    contents.StackSet = deserializeAws_queryStackSet(
      output["StackSet"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDetectStackSetDriftOutput = (
  output: any,
  context: __SerdeContext
): DetectStackSetDriftOutput => {
  let contents: any = {
    __type: "DetectStackSetDriftOutput",
    OperationId: undefined
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId =
      output["OperationId"]["#text"] !== undefined
        ? output["OperationId"]["#text"]
        : output["OperationId"];
  }
  return contents;
};

const deserializeAws_queryInvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  let contents: any = {
    __type: "InvalidOperationException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryListStackInstancesOutput = (
  output: any,
  context: __SerdeContext
): ListStackInstancesOutput => {
  let contents: any = {
    __type: "ListStackInstancesOutput",
    NextToken: undefined,
    Summaries: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (
    output["Summaries"] !== undefined &&
    output["Summaries"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Summaries"]["member"] instanceof Array
        ? output["Summaries"]["member"]
        : [output["Summaries"]["member"]];
    contents.Summaries = deserializeAws_queryStackInstanceSummaries(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryListStackSetOperationResultsOutput = (
  output: any,
  context: __SerdeContext
): ListStackSetOperationResultsOutput => {
  let contents: any = {
    __type: "ListStackSetOperationResultsOutput",
    NextToken: undefined,
    Summaries: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (
    output["Summaries"] !== undefined &&
    output["Summaries"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Summaries"]["member"] instanceof Array
        ? output["Summaries"]["member"]
        : [output["Summaries"]["member"]];
    contents.Summaries = deserializeAws_queryStackSetOperationResultSummaries(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryListStackSetOperationsOutput = (
  output: any,
  context: __SerdeContext
): ListStackSetOperationsOutput => {
  let contents: any = {
    __type: "ListStackSetOperationsOutput",
    NextToken: undefined,
    Summaries: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (
    output["Summaries"] !== undefined &&
    output["Summaries"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Summaries"]["member"] instanceof Array
        ? output["Summaries"]["member"]
        : [output["Summaries"]["member"]];
    contents.Summaries = deserializeAws_queryStackSetOperationSummaries(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryListStackSetsOutput = (
  output: any,
  context: __SerdeContext
): ListStackSetsOutput => {
  let contents: any = {
    __type: "ListStackSetsOutput",
    NextToken: undefined,
    Summaries: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken =
      output["NextToken"]["#text"] !== undefined
        ? output["NextToken"]["#text"]
        : output["NextToken"];
  }
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (
    output["Summaries"] !== undefined &&
    output["Summaries"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Summaries"]["member"] instanceof Array
        ? output["Summaries"]["member"]
        : [output["Summaries"]["member"]];
    contents.Summaries = deserializeAws_queryStackSetSummaries(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryNameAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): NameAlreadyExistsException => {
  let contents: any = {
    __type: "NameAlreadyExistsException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryOperationIdAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): OperationIdAlreadyExistsException => {
  let contents: any = {
    __type: "OperationIdAlreadyExistsException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryOperationInProgressException = (
  output: any,
  context: __SerdeContext
): OperationInProgressException => {
  let contents: any = {
    __type: "OperationInProgressException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryOperationNotFoundException = (
  output: any,
  context: __SerdeContext
): OperationNotFoundException => {
  let contents: any = {
    __type: "OperationNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryRegionList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_queryStackInstance = (
  output: any,
  context: __SerdeContext
): StackInstance => {
  let contents: any = {
    __type: "StackInstance",
    Account: undefined,
    DriftStatus: undefined,
    LastDriftCheckTimestamp: undefined,
    ParameterOverrides: undefined,
    Region: undefined,
    StackId: undefined,
    StackSetId: undefined,
    Status: undefined,
    StatusReason: undefined
  };
  if (output["Account"] !== undefined) {
    contents.Account =
      output["Account"]["#text"] !== undefined
        ? output["Account"]["#text"]
        : output["Account"];
  }
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus =
      output["DriftStatus"]["#text"] !== undefined
        ? output["DriftStatus"]["#text"]
        : output["DriftStatus"];
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = new Date(
      output["LastDriftCheckTimestamp"]
    );
  }
  if (output.ParameterOverrides === "") {
    contents.ParameterOverrides = [];
  }
  if (
    output["ParameterOverrides"] !== undefined &&
    output["ParameterOverrides"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["ParameterOverrides"]["member"] instanceof Array
        ? output["ParameterOverrides"]["member"]
        : [output["ParameterOverrides"]["member"]];
    contents.ParameterOverrides = deserializeAws_queryParameters(
      wrappedItem,
      context
    );
  }
  if (output["Region"] !== undefined) {
    contents.Region =
      output["Region"]["#text"] !== undefined
        ? output["Region"]["#text"]
        : output["Region"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId =
      output["StackId"]["#text"] !== undefined
        ? output["StackId"]["#text"]
        : output["StackId"];
  }
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId =
      output["StackSetId"]["#text"] !== undefined
        ? output["StackSetId"]["#text"]
        : output["StackSetId"];
  }
  if (output["Status"] !== undefined) {
    contents.Status =
      output["Status"]["#text"] !== undefined
        ? output["Status"]["#text"]
        : output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason =
      output["StatusReason"]["#text"] !== undefined
        ? output["StatusReason"]["#text"]
        : output["StatusReason"];
  }
  return contents;
};

const deserializeAws_queryStackInstanceNotFoundException = (
  output: any,
  context: __SerdeContext
): StackInstanceNotFoundException => {
  let contents: any = {
    __type: "StackInstanceNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryStackInstanceSummaries = (
  output: any,
  context: __SerdeContext
): Array<StackInstanceSummary> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryStackInstanceSummary(entry, context));
  });
  return contents;
};

const deserializeAws_queryStackInstanceSummary = (
  output: any,
  context: __SerdeContext
): StackInstanceSummary => {
  let contents: any = {
    __type: "StackInstanceSummary",
    Account: undefined,
    DriftStatus: undefined,
    LastDriftCheckTimestamp: undefined,
    Region: undefined,
    StackId: undefined,
    StackSetId: undefined,
    Status: undefined,
    StatusReason: undefined
  };
  if (output["Account"] !== undefined) {
    contents.Account =
      output["Account"]["#text"] !== undefined
        ? output["Account"]["#text"]
        : output["Account"];
  }
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus =
      output["DriftStatus"]["#text"] !== undefined
        ? output["DriftStatus"]["#text"]
        : output["DriftStatus"];
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = new Date(
      output["LastDriftCheckTimestamp"]
    );
  }
  if (output["Region"] !== undefined) {
    contents.Region =
      output["Region"]["#text"] !== undefined
        ? output["Region"]["#text"]
        : output["Region"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId =
      output["StackId"]["#text"] !== undefined
        ? output["StackId"]["#text"]
        : output["StackId"];
  }
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId =
      output["StackSetId"]["#text"] !== undefined
        ? output["StackSetId"]["#text"]
        : output["StackSetId"];
  }
  if (output["Status"] !== undefined) {
    contents.Status =
      output["Status"]["#text"] !== undefined
        ? output["Status"]["#text"]
        : output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason =
      output["StatusReason"]["#text"] !== undefined
        ? output["StatusReason"]["#text"]
        : output["StatusReason"];
  }
  return contents;
};

const deserializeAws_queryStackSet = (
  output: any,
  context: __SerdeContext
): StackSet => {
  let contents: any = {
    __type: "StackSet",
    AdministrationRoleARN: undefined,
    Capabilities: undefined,
    Description: undefined,
    ExecutionRoleName: undefined,
    Parameters: undefined,
    StackSetARN: undefined,
    StackSetDriftDetectionDetails: undefined,
    StackSetId: undefined,
    StackSetName: undefined,
    Status: undefined,
    Tags: undefined,
    TemplateBody: undefined
  };
  if (output["AdministrationRoleARN"] !== undefined) {
    contents.AdministrationRoleARN =
      output["AdministrationRoleARN"]["#text"] !== undefined
        ? output["AdministrationRoleARN"]["#text"]
        : output["AdministrationRoleARN"];
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (
    output["Capabilities"] !== undefined &&
    output["Capabilities"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Capabilities"]["member"] instanceof Array
        ? output["Capabilities"]["member"]
        : [output["Capabilities"]["member"]];
    contents.Capabilities = deserializeAws_queryCapabilities(
      wrappedItem,
      context
    );
  }
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output["ExecutionRoleName"] !== undefined) {
    contents.ExecutionRoleName =
      output["ExecutionRoleName"]["#text"] !== undefined
        ? output["ExecutionRoleName"]["#text"]
        : output["ExecutionRoleName"];
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (
    output["Parameters"] !== undefined &&
    output["Parameters"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Parameters"]["member"] instanceof Array
        ? output["Parameters"]["member"]
        : [output["Parameters"]["member"]];
    contents.Parameters = deserializeAws_queryParameters(wrappedItem, context);
  }
  if (output["StackSetARN"] !== undefined) {
    contents.StackSetARN =
      output["StackSetARN"]["#text"] !== undefined
        ? output["StackSetARN"]["#text"]
        : output["StackSetARN"];
  }
  if (output["StackSetDriftDetectionDetails"] !== undefined) {
    contents.StackSetDriftDetectionDetails = deserializeAws_queryStackSetDriftDetectionDetails(
      output["StackSetDriftDetectionDetails"],
      context
    );
  }
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId =
      output["StackSetId"]["#text"] !== undefined
        ? output["StackSetId"]["#text"]
        : output["StackSetId"];
  }
  if (output["StackSetName"] !== undefined) {
    contents.StackSetName =
      output["StackSetName"]["#text"] !== undefined
        ? output["StackSetName"]["#text"]
        : output["StackSetName"];
  }
  if (output["Status"] !== undefined) {
    contents.Status =
      output["Status"]["#text"] !== undefined
        ? output["Status"]["#text"]
        : output["Status"];
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    const wrappedItem =
      output["Tags"]["member"] instanceof Array
        ? output["Tags"]["member"]
        : [output["Tags"]["member"]];
    contents.Tags = deserializeAws_queryTags(wrappedItem, context);
  }
  if (output["TemplateBody"] !== undefined) {
    contents.TemplateBody =
      output["TemplateBody"]["#text"] !== undefined
        ? output["TemplateBody"]["#text"]
        : output["TemplateBody"];
  }
  return contents;
};

const deserializeAws_queryStackSetDriftDetectionDetails = (
  output: any,
  context: __SerdeContext
): StackSetDriftDetectionDetails => {
  let contents: any = {
    __type: "StackSetDriftDetectionDetails",
    DriftDetectionStatus: undefined,
    DriftStatus: undefined,
    DriftedStackInstancesCount: undefined,
    FailedStackInstancesCount: undefined,
    InProgressStackInstancesCount: undefined,
    InSyncStackInstancesCount: undefined,
    LastDriftCheckTimestamp: undefined,
    TotalStackInstancesCount: undefined
  };
  if (output["DriftDetectionStatus"] !== undefined) {
    contents.DriftDetectionStatus =
      output["DriftDetectionStatus"]["#text"] !== undefined
        ? output["DriftDetectionStatus"]["#text"]
        : output["DriftDetectionStatus"];
  }
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus =
      output["DriftStatus"]["#text"] !== undefined
        ? output["DriftStatus"]["#text"]
        : output["DriftStatus"];
  }
  if (output["DriftedStackInstancesCount"] !== undefined) {
    contents.DriftedStackInstancesCount = parseInt(
      output["DriftedStackInstancesCount"]["#text"] !== undefined
        ? output["DriftedStackInstancesCount"]["#text"]
        : output["DriftedStackInstancesCount"]
    );
  }
  if (output["FailedStackInstancesCount"] !== undefined) {
    contents.FailedStackInstancesCount = parseInt(
      output["FailedStackInstancesCount"]["#text"] !== undefined
        ? output["FailedStackInstancesCount"]["#text"]
        : output["FailedStackInstancesCount"]
    );
  }
  if (output["InProgressStackInstancesCount"] !== undefined) {
    contents.InProgressStackInstancesCount = parseInt(
      output["InProgressStackInstancesCount"]["#text"] !== undefined
        ? output["InProgressStackInstancesCount"]["#text"]
        : output["InProgressStackInstancesCount"]
    );
  }
  if (output["InSyncStackInstancesCount"] !== undefined) {
    contents.InSyncStackInstancesCount = parseInt(
      output["InSyncStackInstancesCount"]["#text"] !== undefined
        ? output["InSyncStackInstancesCount"]["#text"]
        : output["InSyncStackInstancesCount"]
    );
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = new Date(
      output["LastDriftCheckTimestamp"]
    );
  }
  if (output["TotalStackInstancesCount"] !== undefined) {
    contents.TotalStackInstancesCount = parseInt(
      output["TotalStackInstancesCount"]["#text"] !== undefined
        ? output["TotalStackInstancesCount"]["#text"]
        : output["TotalStackInstancesCount"]
    );
  }
  return contents;
};

const deserializeAws_queryStackSetNotEmptyException = (
  output: any,
  context: __SerdeContext
): StackSetNotEmptyException => {
  let contents: any = {
    __type: "StackSetNotEmptyException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryStackSetOperation = (
  output: any,
  context: __SerdeContext
): StackSetOperation => {
  let contents: any = {
    __type: "StackSetOperation",
    Action: undefined,
    AdministrationRoleARN: undefined,
    CreationTimestamp: undefined,
    EndTimestamp: undefined,
    ExecutionRoleName: undefined,
    OperationId: undefined,
    OperationPreferences: undefined,
    RetainStacks: undefined,
    StackSetDriftDetectionDetails: undefined,
    StackSetId: undefined,
    Status: undefined
  };
  if (output["Action"] !== undefined) {
    contents.Action =
      output["Action"]["#text"] !== undefined
        ? output["Action"]["#text"]
        : output["Action"];
  }
  if (output["AdministrationRoleARN"] !== undefined) {
    contents.AdministrationRoleARN =
      output["AdministrationRoleARN"]["#text"] !== undefined
        ? output["AdministrationRoleARN"]["#text"]
        : output["AdministrationRoleARN"];
  }
  if (output["CreationTimestamp"] !== undefined) {
    contents.CreationTimestamp = new Date(output["CreationTimestamp"]);
  }
  if (output["EndTimestamp"] !== undefined) {
    contents.EndTimestamp = new Date(output["EndTimestamp"]);
  }
  if (output["ExecutionRoleName"] !== undefined) {
    contents.ExecutionRoleName =
      output["ExecutionRoleName"]["#text"] !== undefined
        ? output["ExecutionRoleName"]["#text"]
        : output["ExecutionRoleName"];
  }
  if (output["OperationId"] !== undefined) {
    contents.OperationId =
      output["OperationId"]["#text"] !== undefined
        ? output["OperationId"]["#text"]
        : output["OperationId"];
  }
  if (output["OperationPreferences"] !== undefined) {
    contents.OperationPreferences = deserializeAws_queryStackSetOperationPreferences(
      output["OperationPreferences"],
      context
    );
  }
  if (output["RetainStacks"] !== undefined) {
    contents.RetainStacks =
      (output["RetainStacks"]["#text"] !== undefined
        ? output["RetainStacks"]["#text"]
        : output["RetainStacks"]) == "true";
  }
  if (output["StackSetDriftDetectionDetails"] !== undefined) {
    contents.StackSetDriftDetectionDetails = deserializeAws_queryStackSetDriftDetectionDetails(
      output["StackSetDriftDetectionDetails"],
      context
    );
  }
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId =
      output["StackSetId"]["#text"] !== undefined
        ? output["StackSetId"]["#text"]
        : output["StackSetId"];
  }
  if (output["Status"] !== undefined) {
    contents.Status =
      output["Status"]["#text"] !== undefined
        ? output["Status"]["#text"]
        : output["Status"];
  }
  return contents;
};

const deserializeAws_queryStackSetOperationPreferences = (
  output: any,
  context: __SerdeContext
): StackSetOperationPreferences => {
  let contents: any = {
    __type: "StackSetOperationPreferences",
    FailureToleranceCount: undefined,
    FailureTolerancePercentage: undefined,
    MaxConcurrentCount: undefined,
    MaxConcurrentPercentage: undefined,
    RegionOrder: undefined
  };
  if (output["FailureToleranceCount"] !== undefined) {
    contents.FailureToleranceCount = parseInt(
      output["FailureToleranceCount"]["#text"] !== undefined
        ? output["FailureToleranceCount"]["#text"]
        : output["FailureToleranceCount"]
    );
  }
  if (output["FailureTolerancePercentage"] !== undefined) {
    contents.FailureTolerancePercentage = parseInt(
      output["FailureTolerancePercentage"]["#text"] !== undefined
        ? output["FailureTolerancePercentage"]["#text"]
        : output["FailureTolerancePercentage"]
    );
  }
  if (output["MaxConcurrentCount"] !== undefined) {
    contents.MaxConcurrentCount = parseInt(
      output["MaxConcurrentCount"]["#text"] !== undefined
        ? output["MaxConcurrentCount"]["#text"]
        : output["MaxConcurrentCount"]
    );
  }
  if (output["MaxConcurrentPercentage"] !== undefined) {
    contents.MaxConcurrentPercentage = parseInt(
      output["MaxConcurrentPercentage"]["#text"] !== undefined
        ? output["MaxConcurrentPercentage"]["#text"]
        : output["MaxConcurrentPercentage"]
    );
  }
  if (output.RegionOrder === "") {
    contents.RegionOrder = [];
  }
  if (
    output["RegionOrder"] !== undefined &&
    output["RegionOrder"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["RegionOrder"]["member"] instanceof Array
        ? output["RegionOrder"]["member"]
        : [output["RegionOrder"]["member"]];
    contents.RegionOrder = deserializeAws_queryRegionList(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryStackSetOperationResultSummaries = (
  output: any,
  context: __SerdeContext
): Array<StackSetOperationResultSummary> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(
      deserializeAws_queryStackSetOperationResultSummary(entry, context)
    );
  });
  return contents;
};

const deserializeAws_queryStackSetOperationResultSummary = (
  output: any,
  context: __SerdeContext
): StackSetOperationResultSummary => {
  let contents: any = {
    __type: "StackSetOperationResultSummary",
    Account: undefined,
    AccountGateResult: undefined,
    Region: undefined,
    Status: undefined,
    StatusReason: undefined
  };
  if (output["Account"] !== undefined) {
    contents.Account =
      output["Account"]["#text"] !== undefined
        ? output["Account"]["#text"]
        : output["Account"];
  }
  if (output["AccountGateResult"] !== undefined) {
    contents.AccountGateResult = deserializeAws_queryAccountGateResult(
      output["AccountGateResult"],
      context
    );
  }
  if (output["Region"] !== undefined) {
    contents.Region =
      output["Region"]["#text"] !== undefined
        ? output["Region"]["#text"]
        : output["Region"];
  }
  if (output["Status"] !== undefined) {
    contents.Status =
      output["Status"]["#text"] !== undefined
        ? output["Status"]["#text"]
        : output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason =
      output["StatusReason"]["#text"] !== undefined
        ? output["StatusReason"]["#text"]
        : output["StatusReason"];
  }
  return contents;
};

const deserializeAws_queryStackSetOperationSummaries = (
  output: any,
  context: __SerdeContext
): Array<StackSetOperationSummary> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryStackSetOperationSummary(entry, context));
  });
  return contents;
};

const deserializeAws_queryStackSetOperationSummary = (
  output: any,
  context: __SerdeContext
): StackSetOperationSummary => {
  let contents: any = {
    __type: "StackSetOperationSummary",
    Action: undefined,
    CreationTimestamp: undefined,
    EndTimestamp: undefined,
    OperationId: undefined,
    Status: undefined
  };
  if (output["Action"] !== undefined) {
    contents.Action =
      output["Action"]["#text"] !== undefined
        ? output["Action"]["#text"]
        : output["Action"];
  }
  if (output["CreationTimestamp"] !== undefined) {
    contents.CreationTimestamp = new Date(output["CreationTimestamp"]);
  }
  if (output["EndTimestamp"] !== undefined) {
    contents.EndTimestamp = new Date(output["EndTimestamp"]);
  }
  if (output["OperationId"] !== undefined) {
    contents.OperationId =
      output["OperationId"]["#text"] !== undefined
        ? output["OperationId"]["#text"]
        : output["OperationId"];
  }
  if (output["Status"] !== undefined) {
    contents.Status =
      output["Status"]["#text"] !== undefined
        ? output["Status"]["#text"]
        : output["Status"];
  }
  return contents;
};

const deserializeAws_queryStackSetSummaries = (
  output: any,
  context: __SerdeContext
): Array<StackSetSummary> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryStackSetSummary(entry, context));
  });
  return contents;
};

const deserializeAws_queryStackSetSummary = (
  output: any,
  context: __SerdeContext
): StackSetSummary => {
  let contents: any = {
    __type: "StackSetSummary",
    Description: undefined,
    DriftStatus: undefined,
    LastDriftCheckTimestamp: undefined,
    StackSetId: undefined,
    StackSetName: undefined,
    Status: undefined
  };
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus =
      output["DriftStatus"]["#text"] !== undefined
        ? output["DriftStatus"]["#text"]
        : output["DriftStatus"];
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = new Date(
      output["LastDriftCheckTimestamp"]
    );
  }
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId =
      output["StackSetId"]["#text"] !== undefined
        ? output["StackSetId"]["#text"]
        : output["StackSetId"];
  }
  if (output["StackSetName"] !== undefined) {
    contents.StackSetName =
      output["StackSetName"]["#text"] !== undefined
        ? output["StackSetName"]["#text"]
        : output["StackSetName"];
  }
  if (output["Status"] !== undefined) {
    contents.Status =
      output["Status"]["#text"] !== undefined
        ? output["Status"]["#text"]
        : output["Status"];
  }
  return contents;
};

const deserializeAws_queryStaleRequestException = (
  output: any,
  context: __SerdeContext
): StaleRequestException => {
  let contents: any = {
    __type: "StaleRequestException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryStopStackSetOperationOutput = (
  output: any,
  context: __SerdeContext
): StopStackSetOperationOutput => {
  let contents: any = {
    __type: "StopStackSetOperationOutput"
  };
  return contents;
};

const deserializeAws_queryUpdateStackInstancesOutput = (
  output: any,
  context: __SerdeContext
): UpdateStackInstancesOutput => {
  let contents: any = {
    __type: "UpdateStackInstancesOutput",
    OperationId: undefined
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId =
      output["OperationId"]["#text"] !== undefined
        ? output["OperationId"]["#text"]
        : output["OperationId"];
  }
  return contents;
};

const deserializeAws_queryUpdateStackSetOutput = (
  output: any,
  context: __SerdeContext
): UpdateStackSetOutput => {
  let contents: any = {
    __type: "UpdateStackSetOutput",
    OperationId: undefined
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId =
      output["OperationId"]["#text"] !== undefined
        ? output["OperationId"]["#text"]
        : output["OperationId"];
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers,
    ...context.endpoint
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const decodeEscapedXML = (str: string) => {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
      });
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return parsedObjToReturn;
    }
    return {};
  });
};

const buildFormUrlencodedString = (entries: any): string => {
  return Object.keys(entries)
    .map(
      key =>
        __extendedEncodeURIComponent(key) +
        "=" +
        __extendedEncodeURIComponent(entries[key])
    )
    .join("&");
};

const loadQueryErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
