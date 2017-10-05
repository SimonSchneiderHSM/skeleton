'use strict';

const bootstrapperIocModule = require('@process-engine-js/bootstrapper/ioc_module');
const bootstrapperNodeIocModule = require('@process-engine-js/bootstrapper_node/ioc_module');
const InvocationContainer = require('addict-ioc').InvocationContainer;
const logger = require('loggerhythm').Logger.createLogger('bootstrapper');

const iocModuleNames = [
  '..',
  '@process-engine-js/services',
  '@process-engine-js/bootstrapper',
  '@process-engine-js/bootstrapper_node',
  '@process-engine-js/caching',
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
];

const iocModules = iocModuleNames.map((moduleName) => {
  return require(`${moduleName}/ioc_module`);
});

async function start() {
  
  const container = new InvocationContainer({
    defaults: {
      conventionCalls: ['initialize'],
    },
  });

  for (const iocModule of iocModules) {
    iocModule.registerInContainer(container);
  }

  container.validateDependencies();

  try {
    const bootstrapper = await container.resolveAsync('AppBootstrapper');
    await bootstrapper.start();

    logger.info('Bootstrapper started successfully.');
  } catch(error) {
    logger.error('Bootstrapper failed to start.', error);
  }
}

start();
