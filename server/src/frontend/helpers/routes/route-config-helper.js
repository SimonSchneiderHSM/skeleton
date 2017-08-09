'use strict';

import {
  Home,
  
  
  App
} from '../../containers';


import ProcessDefinitions from '/Users/heiko/Desktop/Projekte/BPMN/skeleton/server/node_modules/@process-engine-js/process_engine_http/dist/commonjs/frontend/container/ProcessDefinitions/ProcessDefinitions.js';
import ProcessDefinition from '/Users/heiko/Desktop/Projekte/BPMN/skeleton/server/node_modules/@process-engine-js/process_engine_http/dist/commonjs/frontend/container/ProcessDefinition/ProcessDefinition.js';

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
    },
   __PROCESS__DEFINITIONS__: {
      key: 1,
      name: 'processdefinitions',
      breadcrumbIgnore: false,
      breadcrumbName: '',
      path: 'process/definitions',
      component: ProcessDefinitions,
      prepareParams: null,
      queries: relayQueries.CatalogQueries
    },
   __PROCESS__DEFINITION__: {
      key: 2,
      name: 'processdefinition',
      breadcrumbIgnore: false,
      breadcrumbName: '',
      path: 'process/definition/:id',
      component: ProcessDefinition,
      prepareParams: (relayPrepareParams && relayPrepareParams.prepareIDParams ? relayPrepareParams.prepareIDParams : null),
      queries: relayQueries.CatalogQueries
    }
  },
  routePath: '/app',
  appName: 'app',
  name: 'App',
  AppComponent: App,
  appQueries:relayQueries.ViewerQueries
};

export default routeSetup;
