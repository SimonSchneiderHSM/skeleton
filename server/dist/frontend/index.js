'use strict';

require('babel-polyfill');

var _mainApp = require('./mainApp.js');

var _mainApp2 = _interopRequireDefault(_mainApp);

var _config_resolver = require('./config_resolver');

var _client_extension = require('./client_extension');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('bootstrapper');

var ExtensionBootstrapper = require('@process-engine-js/bootstrapper').ExtensionBootstrapper;
var Container = require('addict-ioc').Container;
var extensionDiscoveryTag = require('@process-engine-js/core_contracts').ExtensionDiscoveryTag;

var coreIocModule = require('@process-engine-js/core/ioc_module');
var iamIocModule = require('@process-engine-js/iam_browser/ioc_module');
var MessageBusExternalService = require('@process-engine-js/messagebus/dist/commonjs/index').MessageBusService;
var processEngineClientApiIocModule = require('@process-engine-js/process_engine_client_api/ioc_module');
var MessagebusAdapterFayeBrowser = require('@process-engine-js/messagebus_adapter_faye_browser/dist/commonjs/index').FayeAdapter;

var httpIocModule = require('@process-engine-js/http/ioc_module');

function start() {

  var container = new Container({
    resolver: new _config_resolver.ConfigResolver()
  });

  var bootstrapper = new ExtensionBootstrapper(container, extensionDiscoveryTag);

  container.register('MainApp', _mainApp2.default).dependencies('ProcessEngineClientApi').singleton();

  container.register('ClientExtension', _client_extension.ClientExtension).dependencies('IamService', 'MainApp', 'MessageBusExternalService').singleton().tags(extensionDiscoveryTag);

  // --------------
  iamIocModule.registerInContainer(container, false, false);
  coreIocModule.registerInContainer(container);
  httpIocModule.registerInContainer(container);

  container.register('MessagebusAdapterFayeBrowser', MessagebusAdapterFayeBrowser).dependencies('IamService').configure('messagebus:faye');
  // --------------

  container.register('MessageBusExternalService', MessageBusExternalService).dependencies('MessagebusAdapterFayeBrowser', 'IamService', 'ApplicationService').singleton();

  var ProcessEngineClientApi = require('@process-engine-js/process_engine_client_api/dist/commonjs/index').ProcessEngineClientApi;
  container.register('ProcessEngineClientApi', ProcessEngineClientApi).dependencies('MessageBusExternalService').singleton();

  window.container = container;
  window.localStorage.debug = '*,-faye';

  bootstrapper.start().then(function () {
    console.log('Bootstrapper started successfully.');
  }).catch(function (error) {
    console.log('Bootstrapper failed to start.', error);
  });
}

start();
