'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _clientHelper = require('@process-engine-js/frontend/dist/clientHelper');

var _routeConfigHelper = require('./helpers/routes/route-config-helper');

var _routeConfigHelper2 = _interopRequireDefault(_routeConfigHelper);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _reactRouterRelay = require('react-router-relay');

var _reactRouterRelay2 = _interopRequireDefault(_reactRouterRelay);

var _reduxAsyncConnect = require('redux-async-connect');

var _reactRelay = require('react-relay');

var _reactRelay2 = _interopRequireDefault(_reactRelay);

var _themeProvider = require('./theme/themeProvider');

var _reducer = require('./redux/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _rest_redux = require('./redux/rest_redux');

var _rest_redux2 = _interopRequireDefault(_rest_redux);

var _fetch = require('redux-api/lib/adapters/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

require('isomorphic-fetch');

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('es6-promise').polyfill();

var MainApp = function () {
  function MainApp(datastoreService, iamService, processEngineClientApi) {
    (0, _classCallCheck3.default)(this, MainApp);

    this._iamService = iamService;
    this._datastoreService = datastoreService;
    this._processEngineClientApi = processEngineClientApi;
  }

  (0, _createClass3.default)(MainApp, [{
    key: 'initialize',
    value: function initialize() {
      this._history = _reactRouter.browserHistory;
      this._dest = document.getElementById('content');

      try {
        (0, _reactTapEventPlugin2.default)();
        (0, _themeProvider.applyTheme)();
      } catch (e) {
        console.log(e.message);
      }

      _rest_redux2.default.use('fetch', (0, _fetch2.default)(fetch));
      _rest_redux2.default.use('options', {
        credentials: 'same-origin'
      });

      if (window.__data) {
        window.$REDUX_STATE = window.__data;
      }
      var initialState = window.$REDUX_STATE;
      this._store = initialState ? (0, _clientHelper.reduxStore)(null, (0, _reducer2.default)(_rest_redux2.default.reducers), this._history, initialState) : (0, _clientHelper.reduxStore)(null, (0, _reducer2.default)(_rest_redux2.default.reducers), this._history);
      delete window.$REDUX_STATE;

      var renderWithMiddleware = (0, _reactRouter.applyRouterMiddleware)(function (child, props) {
        return _react2.default.createElement(
          _reduxAsyncConnect.ReduxAsyncConnect,
          (0, _extends3.default)({}, props, { filter: function filter(item) {
              return !item.deferred;
            } }),
          child
        );
      }, _reactRouterRelay2.default);

      _reactRelay2.default.injectNetworkLayer(new _reactRelay2.default.DefaultNetworkLayer('/graphql', {
        credentials: 'same-origin'
      }));

      var providedRoutes = (0, _clientHelper.routesProvider)(this._store, _routeConfigHelper2.default, {
        processEngineClientApi: this.processEngineClientApi,
        iamService: this.iamService
      });

      this._component = _react2.default.createElement(
        _reactRouter.Router,
        { history: this._history, render: renderWithMiddleware, environment: _reactRelay2.default.Store, forceFetch: true },
        providedRoutes
      );

      if (process.env.NODE_ENV !== 'production') {
        window.React = _react2.default;
      }
    }
  }, {
    key: 'start',
    value: function start() {
      if (__DEVTOOLS__ && !window.devToolsExtension) {
        _reactDom2.default.render(_react2.default.createElement(
          _reactRedux.Provider,
          { store: this._store, key: 'provider' },
          _react2.default.createElement(
            'div',
            null,
            this._component,
            _react2.default.createElement(_clientHelper.DevTools, null)
          )
        ), this._dest);
      } else {
        _reactDom2.default.render(_react2.default.createElement(
          _reactRedux.Provider,
          { store: this._store, key: 'provider' },
          this._component
        ), this._dest);
      }
    }
  }, {
    key: 'model',
    get: function get() {
      return this._model;
    }
  }, {
    key: 'datastoreService',
    get: function get() {
      return this._datastoreService;
    }
  }, {
    key: 'iamService',
    get: function get() {
      return this._iamService;
    }
  }, {
    key: 'processEngineClientApi',
    get: function get() {
      return this._processEngineClientApi;
    }
  }]);
  return MainApp;
}();

exports.default = MainApp;
module.exports = exports['default'];
