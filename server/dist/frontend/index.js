'use strict';

require('babel-polyfill');

var _mainApp = require('./mainApp.js');

var _mainApp2 = _interopRequireDefault(_mainApp);

var _config_resolver = require('./config_resolver');

var _client_extension = require('./client_extension');

var _bpmn_resolver = require('./bpmn_resolver');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('bootstrapper');

var ExtensionBootstrapper = require('@process-engine-js/bootstrapper').ExtensionBootstrapper;
var Container = require('addict-ioc').Container;
var extensionDiscoveryTag = require('@process-engine-js/core_contracts').ExtensionDiscoveryTag;

var coreIocModule = require('@process-engine-js/core/ioc_module');
var datasourceAdapterBaseIocModule = require('@process-engine-js/datasource_adapter_base/ioc_module');

// Persist into localstorage only
// const datasourceAdapterLocalstorageIocModule = require('@process-engine-js/datasource_adapter_localstorage/ioc_module');

// Persist via proxy (using datastore_http endpoint on server)
var datasourceAdapterProxyIocModule = require('@process-engine-js/datasource_adapter_proxy/ioc_module');

var dataModelIocModule = require('@process-engine-js/data_model/ioc_module');
var dataModelContractsIocModule = require('@process-engine-js/data_model_contracts/ioc_module');
var datastoreIocModule = require('@process-engine-js/datastore/ioc_module');
//const datastoreMessagebusIocModule = require('@process-engine-js/datastore_messagebus/ioc_module');
var DatastoreMessageBusHandler = require('@process-engine-js/datastore_messagebus/dist/commonjs/index').DatastoreMessageBusHandler;

var processRepositoryIocModule = require('@process-engine-js/process_repository_browser/ioc_module');
// const processEngineIocModule = require('@process-engine-js/process_engine/ioc_module');

var invocationIocModule = require('@process-engine-js/invocation/ioc_module');
var metadataIocModule = require('@process-engine-js/metadata/ioc_module');
var iamIocModule = require('@process-engine-js/iam_browser/ioc_module');
var messagebusIocModule = require('@process-engine-js/messagebus/ioc_module');
var MessageBusExternalService = require('@process-engine-js/messagebus/dist/commonjs/index').MessageBusService;

var MessagebusRoutingAdapter = require('@process-engine-js/routing/dist/commonjs/adapters').MessagebusRoutingAdapter;
var messagebusAdapterLocalIocModule = require('@process-engine-js/messagebus_adapter_local/ioc_module');
//const messagebusAdapterFayeBrowserIocModule = require('@process-engine-js/messagebus_adapter_faye_browser/ioc_module');
var MessagebusAdapterFayeBrowser = require('@process-engine-js/messagebus_adapter_faye_browser/dist/commonjs/index').FayeAdapter;

var featureIocModule = require('@process-engine-js/feature/ioc_module');
var routingIocModule = require('@process-engine-js/routing/ioc_module');
var httpIocModule = require('@process-engine-js/http/ioc_module');

var eventAggregatorIocModule = require('@process-engine-js/event_aggregator/ioc_module');
var timingIocModule = require('@process-engine-js/timing/ioc_module');
var securityIocModule = require('@process-engine-js/security_service/ioc_module');
var pkiServiceIocModule = require('@process-engine-js/pki_service/ioc_module');
var validationServiceModule = require('@process-engine-js/validation/ioc_module');

var processEngineClientApiIocModule = require('@process-engine-js/process_engine_client_api/ioc_module');

function start() {

  var container = new Container({
    resolver: new _config_resolver.ConfigResolver()
  });

  var registrationSettings = {
    tags: {
      bpmn_process: 'internal'
    },
    resolver: new _bpmn_resolver.BpmnResolver()
  };

  var template = container.createRegistrationTemplate(registrationSettings);
  template.registerObject('reservation.bpmn');

  var bootstrapper = new ExtensionBootstrapper(container, extensionDiscoveryTag);

  container.register('ClientExtension', _client_extension.ClientExtension).dependencies('DatastoreService', 'IamService', 'MainApp', 'ProcessEngineService', 'DatastoreMessageBusHandler', 'MessageBusExternalService').singleton().tags(extensionDiscoveryTag);

  container.register('MainApp', _mainApp2.default).dependencies('DatastoreService', 'IamService', 'ProcessEngineClientApi').singleton();

  coreIocModule.registerInContainer(container);
  datasourceAdapterBaseIocModule.registerInContainer(container);
  datasourceAdapterProxyIocModule.registerInContainer(container);
  dataModelIocModule.registerInContainer(container);
  dataModelContractsIocModule.registerInContainer(container);
  datastoreIocModule.registerInContainer(container);

  //datastoreMessagebusIocModule.registerInContainer(container);
  container.register('DatastoreMessageBusHandler', DatastoreMessageBusHandler).dependencies('DatastoreService', 'MessageBusExternalService', 'ApplicationService').injectLazy('DatastoreService').singleton();

  //TODO
  processRepositoryIocModule.registerInContainer(container);

  //processEngineIocModule.registerInContainer(container);
  var ProcessEngineService = require('@process-engine-js/process_engine/dist/commonjs/index').ProcessEngineService;
  var SubprocessExternalEntity = require('@process-engine-js/process_engine/dist/commonjs/index').SubprocessExternalEntity;
  var SubprocessInternalEntity = require('@process-engine-js/process_engine/dist/commonjs/index').SubprocessInternalEntity;
  var BoundaryEventEntity = require('@process-engine-js/process_engine/dist/commonjs/index').BoundaryEventEntity;
  var EndEventEntity = require('@process-engine-js/process_engine/dist/commonjs/index').EndEventEntity;
  var EventEntity = require('@process-engine-js/process_engine/dist/commonjs/index').EventEntity;
  var ExclusiveGatewayEntity = require('@process-engine-js/process_engine/dist/commonjs/index').ExclusiveGatewayEntity;
  var FlowDefEntity = require('@process-engine-js/process_engine/dist/commonjs/index').FlowDefEntity;
  var LaneEntity = require('@process-engine-js/process_engine/dist/commonjs/index').LaneEntity;
  var NodeDefEntity = require('@process-engine-js/process_engine/dist/commonjs/index').NodeDefEntity;
  var NodeInstanceEntity = require('@process-engine-js/process_engine/dist/commonjs/index').NodeInstanceEntity;
  var ParallelGatewayEntity = require('@process-engine-js/process_engine/dist/commonjs/index').ParallelGatewayEntity;
  var ProcessEntity = require('@process-engine-js/process_engine/dist/commonjs/index').ProcessEntity;
  var ProcessDefEntity = require('@process-engine-js/process_engine/dist/commonjs/index').ProcessDefEntity;
  var ProcessTokenEntity = require('@process-engine-js/process_engine/dist/commonjs/index').ProcessTokenEntity;
  var ScriptTaskEntity = require('@process-engine-js/process_engine/dist/commonjs/index').ScriptTaskEntity;
  var ServiceTaskEntity = require('@process-engine-js/process_engine/dist/commonjs/index').ServiceTaskEntity;
  var StartEventEntity = require('@process-engine-js/process_engine/dist/commonjs/index').StartEventEntity;
  var ThrowEventEntity = require('@process-engine-js/process_engine/dist/commonjs/index').ThrowEventEntity;
  var CatchEventEntity = require('@process-engine-js/process_engine/dist/commonjs/index').CatchEventEntity;
  var UserTaskEntity = require('@process-engine-js/process_engine/dist/commonjs/index').UserTaskEntity;
  var ProcessDefEntityTypeService = require('@process-engine-js/process_engine/dist/commonjs/index').ProcessDefEntityTypeService;
  var entityDiscoveryTag = require('@process-engine-js/core_contracts').EntityDiscoveryTag;
  var NodeInstanceEntityDependencyHelper = require('@process-engine-js/process_engine/dist/commonjs/index').NodeInstanceEntityDependencyHelper;
  var NodeInstanceEntityTypeService = require('@process-engine-js/process_engine/dist/commonjs/index').NodeInstanceEntityTypeService;
  container.register('ProcessEngineService', ProcessEngineService).dependencies('MessageBusService', 'EventAggregator', 'ProcessDefEntityTypeService', 'FeatureService', 'IamService', 'ProcessRepository', 'DatastoreService').injectLazy('DatastoreService').singleton().configure('process_engine:process_engine_service');

  container.register('NodeInstanceEntityTypeService', NodeInstanceEntityTypeService).dependencies('DatastoreService', 'MessageBusExternalService', 'IamService', 'EventAggregator', 'FeatureService', 'RoutingService', 'ProcessEngineService').injectLazy('DatastoreService');

  container.register('ProcessDefEntityTypeService', ProcessDefEntityTypeService).dependencies('DatastoreService', 'ProcessRepository', 'Invoker').injectLazy('DatastoreService');

  container.register('NodeInstanceEntityDependencyHelper', NodeInstanceEntityDependencyHelper).dependencies('MessageBusExternalService', 'EventAggregator', 'IamService', 'NodeInstanceEntityTypeService', 'ProcessEngineService', 'TimingService').singleton();

  container.register('BoundaryEventEntity', BoundaryEventEntity).dependencies('NodeInstanceEntityDependencyHelper').tags(entityDiscoveryTag);

  container.register('EndEventEntity', EndEventEntity).dependencies('NodeInstanceEntityDependencyHelper').tags(entityDiscoveryTag);

  container.register('EventEntity', EventEntity).dependencies('NodeInstanceEntityDependencyHelper').tags(entityDiscoveryTag);

  container.register('ExclusiveGatewayEntity', ExclusiveGatewayEntity).dependencies('NodeInstanceEntityDependencyHelper').tags(entityDiscoveryTag);

  container.register('FlowDefEntity', FlowDefEntity).tags(entityDiscoveryTag);

  container.register('LaneEntity', LaneEntity).tags(entityDiscoveryTag);

  container.register('NodeDefEntity', NodeDefEntity).tags(entityDiscoveryTag);

  container.register('NodeInstanceEntity', NodeInstanceEntity).dependencies('NodeInstanceEntityDependencyHelper').tags(entityDiscoveryTag);

  container.register('ParallelGatewayEntity', ParallelGatewayEntity).dependencies('NodeInstanceEntityDependencyHelper').tags(entityDiscoveryTag);

  container.register('ProcessEntity', ProcessEntity).dependencies('IamService', 'NodeInstanceEntityTypeService', 'MessageBusExternalService', 'ProcessEngineService').tags(entityDiscoveryTag);

  container.register('ProcessDefEntity', ProcessDefEntity).dependencies('ProcessDefEntityTypeService', 'ProcessRepository', 'FeatureService', 'MessageBusService', 'RoutingService', 'EventAggregator', 'TimingService', 'ProcessEngineService').tags(entityDiscoveryTag);

  container.register('ProcessTokenEntity', ProcessTokenEntity).tags(entityDiscoveryTag);

  container.register('ScriptTaskEntity', ScriptTaskEntity).dependencies('NodeInstanceEntityDependencyHelper').tags(entityDiscoveryTag);

  container.register('ServiceTaskEntity', ServiceTaskEntity).dependencies('container', 'NodeInstanceEntityDependencyHelper').tags(entityDiscoveryTag);

  container.register('ThrowEventEntity', ThrowEventEntity).dependencies('NodeInstanceEntityDependencyHelper').tags(entityDiscoveryTag);

  container.register('CatchEventEntity', CatchEventEntity).dependencies('NodeInstanceEntityDependencyHelper').tags(entityDiscoveryTag);

  container.register('StartEventEntity', StartEventEntity).dependencies('NodeInstanceEntityDependencyHelper').tags(entityDiscoveryTag);

  container.register('SubprocessInternalEntity', SubprocessInternalEntity).dependencies('NodeInstanceEntityDependencyHelper').tags(entityDiscoveryTag);

  container.register('SubprocessExternalEntity', SubprocessExternalEntity).dependencies('NodeInstanceEntityDependencyHelper', 'ProcessDefEntityTypeService').tags(entityDiscoveryTag);

  container.register('UserTaskEntity', UserTaskEntity).dependencies('NodeInstanceEntityDependencyHelper').tags(entityDiscoveryTag);

  invocationIocModule.registerInContainer(container);
  metadataIocModule.registerInContainer(container);
  iamIocModule.registerInContainer(container, false, false);
  messagebusIocModule.registerInContainer(container);

  messagebusAdapterLocalIocModule.registerInContainer(container);
  //messagebusAdapterFayeBrowserIocModule.registerInContainer(container);

  container.register('MessagebusAdapterFayeBrowser', MessagebusAdapterFayeBrowser).dependencies('IamService').singleton().configure('messagebus:faye');

  container.register('MessageBusExternalService', MessageBusExternalService).dependencies('MessagebusAdapterFayeBrowser', 'IamService', 'ApplicationService').singleton();

  container.register('MessagebusExternalRoutingAdapter', MessagebusRoutingAdapter).dependencies('MessageBusExternalService').singleton();

  featureIocModule.registerInContainer(container);
  routingIocModule.registerInContainer(container);
  httpIocModule.registerInContainer(container);
  eventAggregatorIocModule.registerInContainer(container);
  timingIocModule.registerInContainer(container);
  securityIocModule.registerInContainer(container);
  pkiServiceIocModule.registerInContainer(container);
  validationServiceModule.registerInContainer(container);

  // processEngineClientApiIocModule.registerInContainer(container);
  var ProcessEngineClientApi = require('@process-engine-js/process_engine_client_api/dist/commonjs/index').ProcessEngineClientApi;
  container.register('ProcessEngineClientApi', ProcessEngineClientApi).dependencies('MessageBusExternalService').singleton();

  //container.validateDependencies();
  window.container = container;
  window.localStorage.debug = '*,-faye';

  bootstrapper.start().then(function () {
    console.log('Bootstrapper started successfully.');
  }).catch(function (error) {
    console.log('Bootstrapper failed to start.', error);
  });
}

start();
