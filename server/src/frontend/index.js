'use strict';

import 'babel-polyfill';

const debug = require('debug')('bootstrapper');

const ExtensionBootstrapper = require('@process-engine-js/bootstrapper').ExtensionBootstrapper;
const Container = require('addict-ioc').Container;
const extensionDiscoveryTag = require('@process-engine-js/core_contracts').ExtensionDiscoveryTag;

const coreIocModule = require('@process-engine-js/core/ioc_module'); 
const iamIocModule = require('@process-engine-js/iam_browser/ioc_module'); 
const MessageBusExternalService = require('@process-engine-js/messagebus/dist/commonjs/index').MessageBusService;
const processEngineClientApiIocModule = require('@process-engine-js/process_engine_client_api/ioc_module');
const MessagebusAdapterFayeBrowser = require('@process-engine-js/messagebus_adapter_faye_browser/dist/commonjs/index').FayeAdapter; 

const httpIocModule = require('@process-engine-js/http/ioc_module'); 

import MainApp from './mainApp.js';

import { ConfigResolver } from './config_resolver';
import { ClientExtension } from './client_extension';

function start() {

  const container = new Container({
    resolver: new ConfigResolver()
  });

  const bootstrapper = new ExtensionBootstrapper(container, extensionDiscoveryTag);
  

  container.register('MainApp', MainApp)
    .dependencies('ProcessEngineClientApi') 
    .singleton();

  container.register('ClientExtension', ClientExtension)
    .dependencies('IamService', 'MainApp', 'MessageBusExternalService')
    .singleton()
    .tags(extensionDiscoveryTag);
  
  // --------------
  iamIocModule.registerInContainer(container, false, false); 
  coreIocModule.registerInContainer(container);
  httpIocModule.registerInContainer(container); 

   container.register('MessagebusAdapterFayeBrowser', MessagebusAdapterFayeBrowser) 
    .dependencies('IamService') 
    .configure('messagebus:faye'); 
  // --------------

  container.register('MessageBusExternalService', MessageBusExternalService) 
    .dependencies('MessagebusAdapterFayeBrowser', 'IamService', 'ApplicationService') 
    .singleton(); 

  const ProcessEngineClientApi = require('@process-engine-js/process_engine_client_api/dist/commonjs/index').ProcessEngineClientApi; 
  container.register('ProcessEngineClientApi', ProcessEngineClientApi) 
    .dependencies('MessageBusExternalService') 
    .singleton(); 

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
