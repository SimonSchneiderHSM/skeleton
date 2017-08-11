'use strict';

const bootstrapperIocModule = require('@process-engine-js/bootstrapper/ioc_module');
const bootstrapperNodeIocModule = require('@process-engine-js/bootstrapper_node/ioc_module');
const Container = require('addict-ioc').Container;
const debug = require('debug')('bootstrapper');

const iocModuleNames = [
  '@process-engine-js/bootstrapper',
  '@process-engine-js/bootstrapper_node',
  '@process-engine-js/core',
  '@process-engine-js/data_model',
  '@process-engine-js/data_model_contracts',
  '@process-engine-js/datasource_adapter_base',
  '@process-engine-js/datasource_adapter_postgres',
  '@process-engine-js/datastore',
  '@process-engine-js/datastore_http',
  '@process-engine-js/datastore_messagebus',
  '@process-engine-js/event_aggregator',
  '@process-engine-js/feature',
  '@process-engine-js/frontend',
  '@process-engine-js/graphiql',
  '@process-engine-js/graphiql_http',
  '@process-engine-js/http_extension',
  '@process-engine-js/iam',
  '@process-engine-js/iam_http',
  '@process-engine-js/invocation',
  '@process-engine-js/messagebus',
  '@process-engine-js/messagebus_http',
  '@process-engine-js/messagebus_adapter_faye',
  '@process-engine-js/metadata',
  '@process-engine-js/pki_service',
  '@process-engine-js/process_engine',
  '@process-engine-js/process_engine_http',
  '@process-engine-js/process_repository',
  '@process-engine-js/security_service',
  '@process-engine-js/routing',
  '@process-engine-js/timing',
  '@process-engine-js/validation',

  // This needs to be registered last, otherwise the frontend won't be delivered correctly
  '@process-engine-js/frontend_http',
];

const iocModules = iocModuleNames.map((moduleName) => {
  return require(`${moduleName}/ioc_module`);
});

function start() {
  
  const container = new Container();
  for (const iocModule of iocModules) {
    iocModule.registerInContainer(container);
  }

  container.validateDependencies();

  const bootstrapper = container.resolve('AppBootstrapper');
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
    .then(() => {
      debug('Bootstrapper started successfully.');
    })
    .catch((error) => {
      debug('Bootstrapper failed to start.', error);
    });
}

start();
