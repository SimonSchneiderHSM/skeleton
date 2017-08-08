import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { reduxStore as createStore, routesProvider, DevTools } from '@process-engine-js/frontend/dist/clientHelper';
import clientRouteConfig from './helpers/routes/route-config-helper';

import { Provider } from 'react-redux';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import useRelay from 'react-router-relay';
import { ReduxAsyncConnect } from 'redux-async-connect';

import Relay from 'react-relay';

import { applyTheme } from './theme/themeProvider';

import reducer from './redux/reducer';

import reduxApiImpl from './redux/rest_redux';
import adapterFetch from 'redux-api/lib/adapters/fetch';

import 'isomorphic-fetch';
import injectTapEventPlugin from 'react-tap-event-plugin';

require('es6-promise').polyfill();

class MainApp {

  constructor(datastoreService, iamService, processEngineClientApi) {
    this._iamService = iamService;
    this._datastoreService = datastoreService;
    this._processEngineClientApi = processEngineClientApi;
  }

  get model() {
    return this._model;
  }

  get datastoreService() {
    return this._datastoreService;
  }

  get iamService() {
    return this._iamService;
  }

  get processEngineClientApi() {
    return this._processEngineClientApi;
  }

  initialize() {
    this._history = browserHistory;
    this._dest = document.getElementById('content');

    try {
      injectTapEventPlugin();
      applyTheme();
    } catch (e) {
      console.log(e.message);
    }

    reduxApiImpl.use('fetch', adapterFetch(fetch));
    reduxApiImpl.use('options', {
      credentials: 'same-origin'
    });

    if (window.__data) {
      window.$REDUX_STATE = window.__data;
    }
    const initialState = window.$REDUX_STATE;
    this._store = (initialState ? createStore(null, reducer(reduxApiImpl.reducers), this._history, initialState) : createStore(null, reducer(reduxApiImpl.reducers), this._history));
    delete window.$REDUX_STATE;

    const renderWithMiddleware = applyRouterMiddleware(
      (child, props) => <ReduxAsyncConnect {...props} filter={(item) => !item.deferred}>{child}</ReduxAsyncConnect>,
      useRelay
    );

    Relay.injectNetworkLayer(
      new Relay.DefaultNetworkLayer('/graphql', {
        credentials: 'same-origin',
      })
    );

    const providedRoutes = routesProvider(this._store, clientRouteConfig, {
      processEngineClientApi: this.processEngineClientApi,
      iamService: this.iamService
    });

    this._component = (
      <Router history={this._history} render={renderWithMiddleware} environment={Relay.Store} forceFetch={true}>
        {providedRoutes}
      </Router>
    );

    if (process.env.NODE_ENV !== 'production') {
      window.React = React;
    }
  }

  start() {
    if (__DEVTOOLS__ && !window.devToolsExtension) {
      ReactDOM.render(
        <Provider store={this._store} key="provider">
          <div>
            {this._component}
            <DevTools/>
          </div>
        </Provider>,
        this._dest
      );
    } else {
      ReactDOM.render(
        <Provider store={this._store} key="provider">
          {this._component}
        </Provider>,
        this._dest
      );
    }
  }
}

export default MainApp;
