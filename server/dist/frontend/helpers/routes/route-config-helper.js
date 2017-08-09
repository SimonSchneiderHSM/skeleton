'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _containers = require('../../containers');

var _ProcessDefinitions = require('/Users/heiko/Desktop/Projekte/BPMN/skeleton/server/node_modules/@process-engine-js/process_engine_http/dist/commonjs/frontend/container/ProcessDefinitions/ProcessDefinitions.js');

var _ProcessDefinitions2 = _interopRequireDefault(_ProcessDefinitions);

var _ProcessDefinition = require('/Users/heiko/Desktop/Projekte/BPMN/skeleton/server/node_modules/@process-engine-js/process_engine_http/dist/commonjs/frontend/container/ProcessDefinition/ProcessDefinition.js');

var _ProcessDefinition2 = _interopRequireDefault(_ProcessDefinition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var relayQueries = require('../../relay');
var relayPrepareParams = require('../../relay/prepareParams');

var routeSetup = {
  routeConfig: {
    __HOME__: {
      key: 0,
      name: 'home',
      breadcrumbIgnore: true,
      breadcrumbName: 'Home',
      isIndexRoute: true,
      component: _containers.Home,
      prepareParams: null,
      queries: null
    },
    __PROCESS__DEFINITIONS__: {
      key: 1,
      name: 'processdefinitions',
      breadcrumbIgnore: false,
      breadcrumbName: '',
      path: 'process/definitions',
      component: _ProcessDefinitions2.default,
      prepareParams: null,
      queries: relayQueries.CatalogQueries
    },
    __PROCESS__DEFINITION__: {
      key: 2,
      name: 'processdefinition',
      breadcrumbIgnore: false,
      breadcrumbName: '',
      path: 'process/definition/:id',
      component: _ProcessDefinition2.default,
      prepareParams: relayPrepareParams && relayPrepareParams.prepareIDParams ? relayPrepareParams.prepareIDParams : null,
      queries: relayQueries.CatalogQueries
    }
  },
  routePath: '/app',
  appName: 'app',
  name: 'App',
  AppComponent: _containers.App,
  appQueries: relayQueries.ViewerQueries
};

exports.default = routeSetup;
module.exports = exports['default'];
