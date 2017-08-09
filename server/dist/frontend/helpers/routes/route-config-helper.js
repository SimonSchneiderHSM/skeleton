'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _containers = require('../../containers');

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
