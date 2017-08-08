'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _dec, _class, _class2, _temp;

var _reactRedux = require('react-redux');

var _IndexLink = require('react-router/lib/IndexLink.js');

var _IndexLink2 = _interopRequireDefault(_IndexLink);

var _reactRouterBootstrap = require('react-router-bootstrap');

var _NavDropdown = require('react-bootstrap/lib/NavDropdown');

var _NavDropdown2 = _interopRequireDefault(_NavDropdown);

var _Navbar = require('react-bootstrap/lib/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Nav = require('react-bootstrap/lib/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _MenuItem = require('react-bootstrap/lib/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _RaisedButton = require('@process-engine-js/frontend_mui/dist/commonjs/Buttons/RaisedButton/RaisedButton.js');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = require('@process-engine-js/frontend_mui/dist/commonjs/InputForms/TextField/TextField.js');

var _TextField2 = _interopRequireDefault(_TextField);

var _getMuiTheme = require('material-ui/styles/getMuiTheme.js');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _themeProvider = require('../../theme/themeProvider');

var _reactRelay = require('react-relay');

var _reactRelay2 = _interopRequireDefault(_reactRelay);

var _rest_redux = require('../../redux/rest_redux');

var _rest_redux2 = _interopRequireDefault(_rest_redux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  App: {
    displayName: 'App'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/frontend/containers/App/App.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var iamActions = _rest_redux2.default.actions;

var App = _wrapComponent('App')((_dec = (0, _reactRedux.connect)(function (state) {
  return {
    login: state.login,
    getIdentity: state.getIdentity
  };
}, function (dispatch) {
  return {};
}), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(App, _Component);
  (0, _createClass3.default)(App, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        viewer: this.props.viewer,
        muiTheme: (0, _getMuiTheme2.default)((0, _themeProvider.applyTheme)())
      };
    }
  }]);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    var loggedInAs = 'Guest';
    var loggedInId = 'guest';

    if (_this.isLoggedIn()) {
      var viewer = props.viewer;


      if (viewer && viewer.identity && viewer.identity.name) {
        loggedInAs = viewer.identity.name;
        loggedInId = viewer.identity.id;
      }
    }

    _this.state = {
      authObj: null,
      activeMenuId: null,
      username: 'John',
      password: 'Doe',
      loggedInAs: loggedInAs,
      loggedInId: loggedInId
    };
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.route.injectables && this.props.route.injectables.iamService) {
        var iamService = this.props.route.injectables.iamService;
        iamService.createAuthObject().then(function (authObj) {
          _this2.setState({
            authObj: authObj,
            loggedInAs: authObj.identity.name,
            loggedInId: authObj.identity.id
          });
        });
      }
    }
  }, {
    key: 'isLoggedIn',
    value: function isLoggedIn() {
      var viewer = this.props.viewer;


      return viewer && viewer.identity && viewer.identity.id && viewer.identity.id !== 'guest';
    }
  }, {
    key: 'handleMenuClick',
    value: function handleMenuClick(menuId) {
      if (this.state.activeMenuId === menuId) {
        this.setState({
          activeMenuId: null
        });
      } else {
        this.setState({
          activeMenuId: menuId
        });
      }
    }
  }, {
    key: 'handleLogin',
    value: function handleLogin(e) {
      var _this3 = this;

      var username = this.refs.username.getCurrentValue();
      var password = this.refs.password.getCurrentValue();
      this.context.store.dispatch(iamActions.login.sync(null, {
        body: JSON.stringify({
          username: username,
          password: password
        })
      }, function (err, loginData) {
        if (err) throw err;
        var authObj = loginData;
        _this3.setState({
          authObj: authObj,
          loggedInAs: authObj.identity.name,
          loggedInId: authObj.identity.id
        }, _this3.props.relay.forceFetch);
      }));
    }
  }, {
    key: 'handleLogout',
    value: function handleLogout(e) {
      var _this4 = this;

      this.context.store.dispatch(iamActions.logout.sync(null, null, function (err, data) {
        if (err) throw err;
        if (data.result) {
          _this4.context.store.dispatch(iamActions.login.reset());
          _this4.context.store.dispatch(iamActions.getIdentity.reset());
          _this4.context.store.dispatch(iamActions.logout.reset());
          _this4.setState({
            authObj: null
          }, _this4.props.relay.forceFetch);
        }
      }));
    }
  }, {
    key: 'handleChangePassword',
    value: function handleChangePassword(newValue) {
      this.setState({
        password: newValue
      });
    }
  }, {
    key: 'handleChangeUsername',
    value: function handleChangeUsername(newValue) {
      this.setState({
        username: newValue
      });
    }
  }, {
    key: 'getExecutionContext',
    value: function getExecutionContext() {
      var executionContext = null;
      if (this.props.route.injectables && this.props.route.injectables.iamService && this.state.authObj) {
        var iamService = this.props.route.injectables.iamService;
        executionContext = iamService.createContextFromAuthObject(this.state.authObj);
      }

      return executionContext;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var styles = require('./App.scss');
      var helmetHead = this.props.helmetHead;

      var isLoggedIn = this.isLoggedIn();

      var loginForm = _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'span',
          null,
          'Viewing as: ',
          this.state.loggedInAs,
          ' '
        ),
        _react3.default.createElement(_RaisedButton2.default, { theme: (0, _themeProvider.applyTheme)('Header'),
          muiProps: {
            label: 'Logout'
          },
          qflProps: {
            onClick: function onClick(e) {
              _this5.handleLogout(e);
            },
            style: {
              display: 'inline-block',
              marginTop: '8px'
            }
          }
        })
      );

      if (!isLoggedIn) {
        loginForm = _react3.default.createElement(
          'div',
          null,
          _react3.default.createElement(_TextField2.default, { ref: 'username',
            theme: (0, _themeProvider.applyTheme)('Header'),
            muiProps: {
              tabIndex: 1,
              floatingLabelText: 'Benutzer'
            },
            value: this.state.username,
            onChange: function onChange(newValue) {
              return _this5.handleChangeUsername(newValue);
            },
            qflProps: {
              style: {
                display: 'inline-block',
                marginRight: '10px'
              }
            }
          }),
          _react3.default.createElement(_TextField2.default, { ref: 'password',
            theme: (0, _themeProvider.applyTheme)('Header'),
            muiProps: {
              tabIndex: 2,
              floatingLabelText: 'Password',
              type: 'password'
            },
            value: this.state.password,
            onChange: function onChange(newValue) {
              return _this5.handleChangePassword(newValue);
            },
            qflProps: {
              style: {
                display: 'inline-block',
                marginRight: '10px'
              }
            }
          }),
          _react3.default.createElement(_RaisedButton2.default, { theme: (0, _themeProvider.applyTheme)('Header'),
            muiProps: {
              label: 'Login'
            },
            qflProps: {
              onClick: function onClick(e) {
                _this5.handleLogin(e);
              },
              style: {
                display: 'inline-block',
                position: 'relative',
                bottom: '6px'
              }
            }
          })
        );
      }

      var childrenWithProps = _react3.default.Children.map(this.props.children, function (child) {
        var newProps = {
          loggedIn: isLoggedIn,
          executionContext: _this5.getExecutionContext()
        };
        if (child.props.routerProps && child.props.routerProps.route && child.props.routerProps.route.name === 'processdefinitions') {
          newProps.onRowDoubleClick = function (row) {
            _this5.context.router.push('/app/process/definition/' + row.id);
          };
        }
        return _react3.default.cloneElement(child, newProps);
      });

      return _react3.default.createElement(
        'div',
        { className: styles.app },
        _react3.default.createElement(_reactHelmet2.default, helmetHead),
        _react3.default.createElement(
          _Navbar2.default,
          { fixedTop: true },
          _react3.default.createElement(
            _Navbar2.default.Header,
            null,
            _react3.default.createElement(
              _Navbar2.default.Brand,
              null,
              _react3.default.createElement(
                _IndexLink2.default,
                { to: '/app/', activeStyle: { color: '#33e0ff' } },
                _react3.default.createElement('div', { className: styles.brand })
              )
            ),
            _react3.default.createElement(_Navbar2.default.Toggle, null)
          ),
          _react3.default.createElement(
            _Navbar2.default.Collapse,
            null,
            _react3.default.createElement(
              _Nav2.default,
              { navbar: true },
              _react3.default.createElement(
                _NavDropdown2.default,
                { title: 'Demo', id: 'basic-nav-dropdown' },
                _react3.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: '/app/process/definitions' },
                  _react3.default.createElement(
                    _MenuItem2.default,
                    null,
                    'ProzessManager'
                  )
                )
              )
            ),
            _react3.default.createElement(
              _Nav2.default,
              { navbar: true, pullRight: true },
              loginForm
            )
          )
        ),
        _react3.default.createElement(
          'div',
          { key: this.state.loggedInId, className: styles.appContent },
          childrenWithProps
        )
      );
    }
  }]);
  return App;
}(_react2.Component), _class2.propTypes = {
  children: _react2.PropTypes.object,
  helmetHead: _react2.PropTypes.object,
  viewer: _react2.PropTypes.object,
  login: _react2.PropTypes.object,
  getIdentity: _react2.PropTypes.object
}, _class2.contextTypes = {
  store: _react2.PropTypes.object.isRequired,
  relay: _react2.PropTypes.object,
  route: _react2.PropTypes.object,
  router: _react2.PropTypes.object
}, _class2.childContextTypes = {
  viewer: _react3.default.PropTypes.object,
  muiTheme: _react2.PropTypes.object
}, _temp)) || _class));

var RelayedApp = _reactRelay2.default.createContainer(App, {
  fragments: {
    viewer: function viewer() {
      return function () {
        return {
          children: [{
            children: [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isRequisite: true
              },
              type: 'ID'
            }, {
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'roles',
              kind: 'Field',
              metadata: {
                isPlural: true
              },
              type: 'String'
            }],
            fieldName: 'identity',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true
            },
            type: 'Identity'
          }, {
            fieldName: 'id',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'ID'
          }],
          id: _reactRelay2.default.QL.__id(),
          kind: 'Fragment',
          metadata: {},
          name: 'App_ViewerRelayQL',
          type: 'Viewer'
        };
      }();
    }
  }
});
exports.default = RelayedApp;
module.exports = exports['default'];
