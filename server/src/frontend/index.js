'use strict';

import 'babel-polyfill';

const debug = require('debug')('bootstrapper');

const ExtensionBootstrapper = require('@process-engine-js/bootstrapper').ExtensionBootstrapper;
const Container = require('addict-ioc').Container;
const extensionDiscoveryTag = require('@process-engine-js/core_contracts').ExtensionDiscoveryTag;

const coreIocModule = require('@process-engine-js/core/ioc_module');
const datasourceAdapterBaseIocModule = require('@process-engine-js/datasource_adapter_base/ioc_module');

// Persist into localstorage only
// const datasourceAdapterLocalstorageIocModule = require('@process-engine-js/datasource_adapter_localstorage/ioc_module');

// Persist via proxy (using datastore_http endpoint on server)
const datasourceAdapterProxyIocModule = require('@process-engine-js/datasource_adapter_proxy/ioc_module');

const dataModelIocModule = require('@process-engine-js/data_model/ioc_module');
const dataModelContractsIocModule = require('@process-engine-js/data_model_contracts/ioc_module');
const datastoreIocModule = require('@process-engine-js/datastore/ioc_module');
//const datastoreMessagebusIocModule = require('@process-engine-js/datastore_messagebus/ioc_module');
const DatastoreMessageBusHandler = require('@process-engine-js/datastore_messagebus/dist/commonjs/index').DatastoreMessageBusHandler;

const processRepositoryIocModule = require('@process-engine-js/process_repository_browser/ioc_module');
// const processEngineIocModule = require('@process-engine-js/process_engine/ioc_module');

const invocationIocModule = require('@process-engine-js/invocation/ioc_module');
const metadataIocModule = require('@process-engine-js/metadata/ioc_module');
const iamIocModule = require('@process-engine-js/iam_browser/ioc_module');
const messagebusIocModule = require('@process-engine-js/messagebus/ioc_module');
const MessageBusExternalService = require('@process-engine-js/messagebus/dist/commonjs/index').MessageBusService;

const MessagebusRoutingAdapter = require('@process-engine-js/routing/dist/commonjs/adapters').MessagebusRoutingAdapter;
const messagebusAdapterLocalIocModule = require('@process-engine-js/messagebus_adapter_local/ioc_module');
//const messagebusAdapterFayeBrowserIocModule = require('@process-engine-js/messagebus_adapter_faye_browser/ioc_module');
const MessagebusAdapterFayeBrowser = require('@process-engine-js/messagebus_adapter_faye_browser/dist/commonjs/index').FayeAdapter;

const featureIocModule = require('@process-engine-js/feature/ioc_module');
const routingIocModule = require('@process-engine-js/routing/ioc_module');
const httpIocModule = require('@process-engine-js/http/ioc_module');

const eventAggregatorIocModule = require('@process-engine-js/event_aggregator/ioc_module');
const timingIocModule = require('@process-engine-js/timing/ioc_module');
const securityIocModule = require('@process-engine-js/security_service/ioc_module');
const pkiServiceIocModule = require('@process-engine-js/pki_service/ioc_module');
const validationServiceModule = require('@process-engine-js/validation/ioc_module');

const processEngineClientApiIocModule = require('@process-engine-js/process_engine_client_api/ioc_module');

import MainApp from './mainApp.js';

import { ConfigResolver } from './config_resolver';
import { ClientExtension } from './client_extension';
import { BpmnResolver } from './bpmn_resolver';

function start() {

  const container = new Container({
    resolver: new ConfigResolver()
  });

  const registrationSettings = {
    tags: {
      bpmn_process: 'internal',
    },
    resolver: new BpmnResolver()
  };

  const template = container.createRegistrationTemplate(registrationSettings);
  template.registerObject('reservation.bpmn');

  const bootstrapper = new ExtensionBootstrapper(container, extensionDiscoveryTag);
  
  container.register('ClientExtension', ClientExtension)
    .dependencies('DatastoreService', 'IamService', 'MainApp', 'ProcessEngineService', 'DatastoreMessageBusHandler', 'MessageBusExternalService')
    .singleton()
    .tags(extensionDiscoveryTag);

  container.register('MainApp', MainApp)
    .dependencies('DatastoreService', 'IamService', 'ProcessEngineClientApi')
    .singleton();

  coreIocModule.registerInContainer(container);
  datasourceAdapterBaseIocModule.registerInContainer(container);
  datasourceAdapterProxyIocModule.registerInContainer(container);
  dataModelIocModule.registerInContainer(container);
  dataModelContractsIocModule.registerInContainer(container);
  datastoreIocModule.registerInContainer(container);

  //datastoreMessagebusIocModule.registerInContainer(container);
  container.register('DatastoreMessageBusHandler', DatastoreMessageBusHandler)
    .dependencies('DatastoreService', 'MessageBusExternalService', 'ApplicationService')
    .injectLazy('DatastoreService')
    .singleton();

  //TODO
  processRepositoryIocModule.registerInContainer(container);


  //processEngineIocModule.registerInContainer(container);
  const ProcessEngineService = require('@process-engine-js/process_engine/dist/commonjs/index').ProcessEngineService;
  const SubprocessExternalEntity = require('@process-engine-js/process_engine/dist/commonjs/index').SubprocessExternalEntity;
  const SubprocessInternalEntity = require('@process-engine-js/process_engine/dist/commonjs/index').SubprocessInternalEntity;
  const BoundaryEventEntity = require('@process-engine-js/process_engine/dist/commonjs/index').BoundaryEventEntity;
  const EndEventEntity = require('@process-engine-js/process_engine/dist/commonjs/index').EndEventEntity;
  const EventEntity = require('@process-engine-js/process_engine/dist/commonjs/index').EventEntity;
  const ExclusiveGatewayEntity = require('@process-engine-js/process_engine/dist/commonjs/index').ExclusiveGatewayEntity;
  const FlowDefEntity = require('@process-engine-js/process_engine/dist/commonjs/index').FlowDefEntity;
  const LaneEntity = require('@process-engine-js/process_engine/dist/commonjs/index').LaneEntity;
  const NodeDefEntity = require('@process-engine-js/process_engine/dist/commonjs/index').NodeDefEntity;
  const NodeInstanceEntity = require('@process-engine-js/process_engine/dist/commonjs/index').NodeInstanceEntity;
  const ParallelGatewayEntity = require('@process-engine-js/process_engine/dist/commonjs/index').ParallelGatewayEntity;
  const ProcessEntity = require('@process-engine-js/process_engine/dist/commonjs/index').ProcessEntity;
  const ProcessDefEntity = require('@process-engine-js/process_engine/dist/commonjs/index').ProcessDefEntity;
  const ProcessTokenEntity = require('@process-engine-js/process_engine/dist/commonjs/index').ProcessTokenEntity;
  const ScriptTaskEntity = require('@process-engine-js/process_engine/dist/commonjs/index').ScriptTaskEntity;
  const ServiceTaskEntity = require('@process-engine-js/process_engine/dist/commonjs/index').ServiceTaskEntity;
  const StartEventEntity = require('@process-engine-js/process_engine/dist/commonjs/index').StartEventEntity;
  const ThrowEventEntity = require('@process-engine-js/process_engine/dist/commonjs/index').ThrowEventEntity;
  const CatchEventEntity = require('@process-engine-js/process_engine/dist/commonjs/index').CatchEventEntity;
  const UserTaskEntity = require('@process-engine-js/process_engine/dist/commonjs/index').UserTaskEntity;
  const ProcessDefEntityTypeService = require('@process-engine-js/process_engine/dist/commonjs/index').ProcessDefEntityTypeService;
  const entityDiscoveryTag = require('@process-engine-js/core_contracts').EntityDiscoveryTag;
  const NodeInstanceEntityDependencyHelper = require('@process-engine-js/process_engine/dist/commonjs/index').NodeInstanceEntityDependencyHelper;
  const NodeInstanceEntityTypeService = require('@process-engine-js/process_engine/dist/commonjs/index').NodeInstanceEntityTypeService;
  container.register('ProcessEngineService', ProcessEngineService)
    .dependencies('MessageBusService', 'EventAggregator', 'ProcessDefEntityTypeService', 'FeatureService', 'IamService', 'ProcessRepository', 'DatastoreService')
    .injectLazy('DatastoreService')
    .singleton()
    .configure('process_engine:process_engine_service');

  container.register('NodeInstanceEntityTypeService', NodeInstanceEntityTypeService)
    .dependencies('DatastoreService', 'MessageBusExternalService', 'IamService', 'EventAggregator', 'FeatureService', 'RoutingService', 'ProcessEngineService')
    .injectLazy('DatastoreService');

  container.register('ProcessDefEntityTypeService', ProcessDefEntityTypeService)
    .dependencies('DatastoreService', 'ProcessRepository', 'Invoker')
    .injectLazy('DatastoreService');


  container.register('NodeInstanceEntityDependencyHelper', NodeInstanceEntityDependencyHelper)
    .dependencies('MessageBusExternalService', 'EventAggregator', 'IamService', 'NodeInstanceEntityTypeService', 'ProcessEngineService', 'TimingService')
    .singleton();

  container.register('BoundaryEventEntity', BoundaryEventEntity)
    .dependencies('NodeInstanceEntityDependencyHelper')
    .tags(entityDiscoveryTag);

  container.register('EndEventEntity', EndEventEntity)
    .dependencies('NodeInstanceEntityDependencyHelper')
    .tags(entityDiscoveryTag);

  container.register('EventEntity', EventEntity)
    .dependencies('NodeInstanceEntityDependencyHelper')
    .tags(entityDiscoveryTag);

  container.register('ExclusiveGatewayEntity', ExclusiveGatewayEntity)
    .dependencies('NodeInstanceEntityDependencyHelper')
    .tags(entityDiscoveryTag);

  container.register('FlowDefEntity', FlowDefEntity)
    .tags(entityDiscoveryTag);

  container.register('LaneEntity', LaneEntity)
    .tags(entityDiscoveryTag);

  container.register('NodeDefEntity', NodeDefEntity)
    .tags(entityDiscoveryTag);

  container.register('NodeInstanceEntity', NodeInstanceEntity)
    .dependencies('NodeInstanceEntityDependencyHelper')
    .tags(entityDiscoveryTag);

  container.register('ParallelGatewayEntity', ParallelGatewayEntity)
    .dependencies('NodeInstanceEntityDependencyHelper')
    .tags(entityDiscoveryTag);

  container.register('ProcessEntity', ProcessEntity)
    .dependencies('IamService', 'NodeInstanceEntityTypeService', 'MessageBusExternalService', 'ProcessEngineService')
    .tags(entityDiscoveryTag);

  container.register('ProcessDefEntity', ProcessDefEntity)
    .dependencies('ProcessDefEntityTypeService', 'ProcessRepository', 'FeatureService', 'MessageBusService', 'RoutingService', 'EventAggregator', 'TimingService', 'ProcessEngineService')
    .tags(entityDiscoveryTag);

  container.register('ProcessTokenEntity', ProcessTokenEntity)
    .tags(entityDiscoveryTag);

  container.register('ScriptTaskEntity', ScriptTaskEntity)
    .dependencies('NodeInstanceEntityDependencyHelper')
    .tags(entityDiscoveryTag);

  container.register('ServiceTaskEntity', ServiceTaskEntity)
    .dependencies('container', 'NodeInstanceEntityDependencyHelper')
    .tags(entityDiscoveryTag);

  container.register('ThrowEventEntity', ThrowEventEntity)
    .dependencies('NodeInstanceEntityDependencyHelper')
    .tags(entityDiscoveryTag);

  container.register('CatchEventEntity', CatchEventEntity)
    .dependencies('NodeInstanceEntityDependencyHelper')
    .tags(entityDiscoveryTag);

  container.register('StartEventEntity', StartEventEntity)
    .dependencies('NodeInstanceEntityDependencyHelper')
    .tags(entityDiscoveryTag);

  container.register('SubprocessInternalEntity', SubprocessInternalEntity)
    .dependencies('NodeInstanceEntityDependencyHelper')
    .tags(entityDiscoveryTag);

  container.register('SubprocessExternalEntity', SubprocessExternalEntity)
    .dependencies('NodeInstanceEntityDependencyHelper', 'ProcessDefEntityTypeService')
    .tags(entityDiscoveryTag);

  container.register('UserTaskEntity', UserTaskEntity)
    .dependencies('NodeInstanceEntityDependencyHelper')
    .tags(entityDiscoveryTag);



  invocationIocModule.registerInContainer(container);
  metadataIocModule.registerInContainer(container);
  iamIocModule.registerInContainer(container, false, false);
  messagebusIocModule.registerInContainer(container);

  messagebusAdapterLocalIocModule.registerInContainer(container);
  //messagebusAdapterFayeBrowserIocModule.registerInContainer(container);

  container.register('MessagebusAdapterFayeBrowser', MessagebusAdapterFayeBrowser)
    .dependencies('IamService')
    .singleton()
    .configure('messagebus:faye');

  container.register('MessageBusExternalService', MessageBusExternalService)
    .dependencies('MessagebusAdapterFayeBrowser', 'IamService', 'ApplicationService')
    .singleton();

  container.register('MessagebusExternalRoutingAdapter', MessagebusRoutingAdapter)
    .dependencies('MessageBusExternalService')
    .singleton();

  featureIocModule.registerInContainer(container);
  routingIocModule.registerInContainer(container);
  httpIocModule.registerInContainer(container);
  eventAggregatorIocModule.registerInContainer(container);
  timingIocModule.registerInContainer(container);
  securityIocModule.registerInContainer(container);
  pkiServiceIocModule.registerInContainer(container);
  validationServiceModule.registerInContainer(container);

  // processEngineClientApiIocModule.registerInContainer(container);
  const ProcessEngineClientApi = require('@process-engine-js/process_engine_client_api/dist/commonjs/index').ProcessEngineClientApi;
  container.register('ProcessEngineClientApi', ProcessEngineClientApi)
    .dependencies('MessageBusExternalService')
    .singleton();


  //container.validateDependencies();
  window.container = container;
  window.localStorage.debug = '*,-faye';

  bootstrapper.start()
  .then(() => {
    console.log('Bootstrapper started successfully.');
  })
  .catch((error) => {
    console.log('Bootstrapper failed to start.', error);
  });
}

start();
