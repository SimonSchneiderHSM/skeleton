'use strict';

const bootstrapperIocModule = require('@process-engine-js/bootstrapper/ioc_module');
const bootstrapperNodeIocModule = require('@process-engine-js/bootstrapper_node/ioc_module');
const Container = require('addict-ioc').Container;
// const logger = require('loggerhythm')('start');
// require('loggerhythm').logLevel('info');
const debug = require('debug')('bootstrapper');

const httpExtensionIocModule = require('@process-engine-js/http_extension/ioc_module');
const coreIocModule = require('@process-engine-js/core/ioc_module');
const dataModelIocModule = require('@process-engine-js/data_model/ioc_module');
const dataModelContractsIocModule = require('@process-engine-js/data_model_contracts/ioc_module');
const datastoreIocModule = require('@process-engine-js/datastore/ioc_module');
const datastoreHttpIocModule = require('@process-engine-js/datastore_http/ioc_module');
const datastoreMessagebusIocModule = require('@process-engine-js/datastore_messagebus/ioc_module');
const datasourceAdapterBaseIocModule = require('@process-engine-js/datasource_adapter_base/ioc_module');
// const datasourceAdapterOrientDbIocModule = require('@process-engine-js/datasource_adapter_orientdb/ioc_module');
// const datasourceAdapterMongoDbIocModule = require('@process-engine-js/datasource_adapter_mongodb/ioc_module');
const datasourceAdapterPostgresIocModule = require('@process-engine-js/datasource_adapter_postgres/ioc_module');
// const datasourceAdapterRedisIocModule = require('@process-engine-js/datasource_adapter_redis/ioc_module');
const processEngineIocModule = require('@process-engine-js/process_engine/ioc_module');
const processEngineHttpIocModule = require('@process-engine-js/process_engine_http/ioc_module');
const processRepositoryIocModule = require('@process-engine-js/process_repository/ioc_module');
const invocationIocModule = require('@process-engine-js/invocation/ioc_module');
const metadataIocModule = require('@process-engine-js/metadata/ioc_module');
const iamIocModule = require('@process-engine-js/iam/ioc_module');
const iamHttpIocModule = require('@process-engine-js/iam_http/ioc_module');
const messagebusHttpIocModule = require('@process-engine-js/messagebus_http/ioc_module');
const messagebusIocModule = require('@process-engine-js/messagebus/ioc_module');
const messagebusAdapterFayeIocModule = require('@process-engine-js/messagebus_adapter_faye/ioc_module');
const graphiqlHttpIocModule = require('@process-engine-js/graphiql_http/ioc_module');
const graphiqlIocModule = require('@process-engine-js/graphiql/ioc_module');
const frontendHttpIocModule = require('@process-engine-js/frontend_http/ioc_module');
const frontendIocModule = require('@process-engine-js/frontend/ioc_module');
const featureIocModule = require('@process-engine-js/feature/ioc_module');
const routingIocModule = require('@process-engine-js/routing/ioc_module');
const servicesIocModule = require('@process-engine-js/services/ioc_module');
const securityServicesIocModule = require('@process-engine-js/security_service/ioc_module');
const eventAggregatorIocModule = require('@process-engine-js/event_aggregator/ioc_module');
const timingIocModule = require('@process-engine-js/timing/ioc_module');
const pkiServiceIocModule = require('@process-engine-js/pki_service/ioc_module');
const validationServiceIocModule = require('@process-engine-js/validation/ioc_module');

function start() {
  
  const container = new Container();

  bootstrapperIocModule.registerInContainer(container);
  bootstrapperNodeIocModule.registerInContainer(container);

  const bootstrapper = container.resolve('AppBootstrapper');

  httpExtensionIocModule.registerInContainer(container);
  coreIocModule.registerInContainer(container);
  dataModelIocModule.registerInContainer(container);
  dataModelContractsIocModule.registerInContainer(container);
  datastoreIocModule.registerInContainer(container);
  datastoreHttpIocModule.registerInContainer(container);
  datastoreMessagebusIocModule.registerInContainer(container);
  datasourceAdapterBaseIocModule.registerInContainer(container);
  // datasourceAdapterOrientDbIocModule.registerInContainer(container);
  // datasourceAdapterMongoDbIocModule.registerInContainer(container);
  datasourceAdapterPostgresIocModule.registerInContainer(container);
  // datasourceAdapterRedisIocModule.registerInContainer(container);
  processEngineIocModule.registerInContainer(container);
  processEngineHttpIocModule.registerInContainer(container);
  processRepositoryIocModule.registerInContainer(container);
  invocationIocModule.registerInContainer(container);
  metadataIocModule.registerInContainer(container);
  iamIocModule.registerInContainer(container, false, false);
  iamHttpIocModule.registerInContainer(container);
  messagebusHttpIocModule.registerInContainer(container);
  messagebusIocModule.registerInContainer(container);
  messagebusAdapterFayeIocModule.registerInContainer(container);
  graphiqlHttpIocModule.registerInContainer(container);
  graphiqlIocModule.registerInContainer(container);
  frontendHttpIocModule.registerInContainer(container);
  frontendIocModule.registerInContainer(container);
  featureIocModule.registerInContainer(container);
  routingIocModule.registerInContainer(container);
  servicesIocModule.registerInContainer(container);
  securityServicesIocModule.registerInContainer(container);
  eventAggregatorIocModule.registerInContainer(container);
  timingIocModule.registerInContainer(container);
  pkiServiceIocModule.registerInContainer(container);
  validationServiceIocModule.registerInContainer(container);

  container.validateDependencies();
  bootstrapper.start()
  .then(() => {
    const iamService = container.resolve('IamService');
    return iamService.createInternalContext('iam_system');
  })
  .then((context) => {
    debug('IamService found - context generated');
    const datastoreService = container.resolve('DatastoreService');
    return datastoreService.importDefaultData(context);
  })

  // ----- test validation
  .then((context) => {
    debug('check schema');
    
    const validationService = container.resolve('ValidationService');
    validationService.initialize();

    const result = validationService.validateMethodCall('IMailService', 'send', [
      'from',
      'to',
      'subject'
    ]);
    debug(result);
  })
  // --------

  .then(() => {
    debug('Bootstrapper started successfully.');
  })
  .catch((error) => {
    debug('Bootstrapper failed to start.', error);
  });
}

start();
