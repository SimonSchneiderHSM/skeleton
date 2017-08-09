'use strict';

import {
  Home,
  App
} from '../../containers';



const relayQueries = require('../../relay');
const relayPrepareParams = require('../../relay/prepareParams');

const routeSetup = {
  routeConfig: {
   __HOME__: {
      key: 0,
      name: 'home',
      breadcrumbIgnore: true,
      breadcrumbName: 'Home',
      isIndexRoute: true,
      component: Home,
      prepareParams: null,
      queries: null
    }
  },
  routePath: '/app',
  appName: 'app',
  name: 'App',
  AppComponent: App,
  appQueries:relayQueries.ViewerQueries
};

export default routeSetup;
