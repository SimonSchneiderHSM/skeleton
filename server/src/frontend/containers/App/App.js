import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import IndexLink from 'react-router/lib/IndexLink.js';
import { LinkContainer } from 'react-router-bootstrap';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Helmet from 'react-helmet';

import RaisedButton from '@process-engine-js/frontend_mui/dist/commonjs/Buttons/RaisedButton/RaisedButton.js';
import TextField from '@process-engine-js/frontend_mui/dist/commonjs/InputForms/TextField/TextField.js';

import getMuiTheme from 'material-ui/styles/getMuiTheme.js';

import { applyTheme } from '../../theme/themeProvider';
import Relay from 'react-relay';
import reduxApi from '../../redux/rest_redux';

const iamActions = reduxApi.actions;

@connect(
  (state) => ({
    login: state.login,
    getIdentity: state.getIdentity
  }),
  (dispatch) => ({})
)
class App extends Component {
  static propTypes = {
    children: PropTypes.object,
    helmetHead: PropTypes.object,
    viewer: PropTypes.object,
    login: PropTypes.object,
    getIdentity: PropTypes.object,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
    relay: PropTypes.object,
    route: PropTypes.object,
    router: PropTypes.object
  };

  static childContextTypes = {
    viewer: React.PropTypes.object,
    muiTheme: PropTypes.object
  };

  getChildContext() {
    return {
      viewer: this.props.viewer,
      muiTheme: getMuiTheme(applyTheme())
    };
  }

  constructor(props) {
    super(props);

    let loggedInAs = 'Guest';
    let loggedInId = 'guest';

    if (this.isLoggedIn()) {
      const { viewer } = props;

      if (viewer && viewer.identity && viewer.identity.name) {
        loggedInAs = viewer.identity.name;
        loggedInId = viewer.identity.id;
      }
    }

    this.state = {
      authObj: null,
      activeMenuId: null,
      username: 'John',
      password: 'Doe',
      loggedInAs,
      loggedInId
    };
  }

  componentDidMount() {
    if (this.props.route.injectables && this.props.route.injectables.iamService) {
      const iamService = this.props.route.injectables.iamService;
      iamService.createAuthObject().then((authObj) => {
        this.setState({
          authObj,
          loggedInAs: authObj.identity.name,
          loggedInId: authObj.identity.id
        })
      });
    }
  }

  isLoggedIn() {
    const { viewer } = this.props;

    return (viewer && viewer.identity && viewer.identity.id && viewer.identity.id !== 'guest');
  }

  handleMenuClick(menuId) {
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

  handleLogin(e) {
    const username = this.refs.username.getCurrentValue();
    const password = this.refs.password.getCurrentValue();
    this.context.store.dispatch(iamActions.login.sync(null, {
      body: JSON.stringify({
        username,
        password
      })
    }, (err, loginData) => {
      if (err) throw err;
      const authObj = loginData;
      this.setState({
        authObj,
        loggedInAs: authObj.identity.name,
        loggedInId: authObj.identity.id
      }, this.props.relay.forceFetch);
    }));
  }

  handleLogout(e) {
    this.context.store.dispatch(iamActions.logout.sync(null, null, (err, data) => {
      if (err) throw err;
      if (data.result) {
        this.context.store.dispatch(iamActions.login.reset());
        this.context.store.dispatch(iamActions.getIdentity.reset());
        this.context.store.dispatch(iamActions.logout.reset());
        this.setState({
          authObj: null
        }, this.props.relay.forceFetch)

      }
    }));
  }

  handleChangePassword(newValue) {
    this.setState({
      password: newValue
    });
  }

  handleChangeUsername(newValue) {
    this.setState({
      username: newValue
    });
  }

  getExecutionContext() {
    let executionContext = null;
    if (this.props.route.injectables && this.props.route.injectables.iamService && this.state.authObj) {
      const iamService = this.props.route.injectables.iamService;
      executionContext = iamService.createContextFromAuthObject(this.state.authObj);
    }

    return executionContext;
  }

  render() {
    const styles = require('./App.scss');
    const helmetHead = this.props.helmetHead;

    const isLoggedIn = this.isLoggedIn();

    let loginForm = (
      <div>
        <span>Viewing as: {this.state.loggedInAs} </span>
        <RaisedButton theme={applyTheme('Header')}
                      muiProps={{
                        label: 'Logout'
                      }}
                      qflProps={{
                        onClick: (e) => {
                          this.handleLogout(e);
                        },
                        style: {
                          display: 'inline-block',
                          marginTop: '8px'
                        }
                      }}
        />
      </div>
    );

    if (!isLoggedIn) {
      loginForm = (
        <div>
          <TextField ref="username"
                     theme={applyTheme('Header')}
                     muiProps={{
                       tabIndex: 1,
                       floatingLabelText: 'Benutzer'
                     }}
                     value={this.state.username}
                     onChange={(newValue) => this.handleChangeUsername(newValue)}
                     qflProps={{
                       style: {
                         display: 'inline-block',
                         marginRight: '10px'
                       }
                     }}
          />
          <TextField ref="password"
                     theme={applyTheme('Header')}
                     muiProps={{
                       tabIndex: 2,
                       floatingLabelText: 'Password',
                       type: 'password'
                     }}
                     value={this.state.password}
                     onChange={(newValue) => this.handleChangePassword(newValue)}
                     qflProps={{
                       style: {
                         display: 'inline-block',
                         marginRight: '10px'
                       }
                     }}
          />
          <RaisedButton theme={applyTheme('Header')}
                        muiProps={{
                          label: 'Login'
                        }}
                        qflProps={{
                          onClick: (e) => {
                            this.handleLogin(e);
                          },
                          style: {
                            display: 'inline-block',
                            position: 'relative',
                            bottom: '6px'
                          }
                        }}
          />
        </div>
      );
    }

    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        const newProps = {
          loggedIn: isLoggedIn,
          executionContext: this.getExecutionContext()
        };
        if (child.props.routerProps && child.props.routerProps.route && child.props.routerProps.route.name === 'processdefinitions') {
          newProps.onRowDoubleClick = (row) => {
            this.context.router.push('/app/process/definition/' + row.id);
          }
        }
    return React.cloneElement(child, newProps);
  }
    );

    return (
      <div className={styles.app}>
        <Helmet {...helmetHead}/>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/app/" activeStyle={{ color: '#33e0ff' }}>
                <div className={styles.brand}/>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav navbar>
              <NavDropdown title="Demo" id="basic-nav-dropdown">
                <LinkContainer to="/app/process/definitions">
                  <MenuItem>ProzessManager</MenuItem>
                </LinkContainer>
                {/*<LinkContainer to="/app/demo/componentpool">
                  <MenuItem>ComponentPool</MenuItem>
                </LinkContainer>*/}
              </NavDropdown>
            </Nav>
            <Nav navbar pullRight>
              {loginForm}
            </Nav>

          </Navbar.Collapse>
        </Navbar>

        <div key={this.state.loggedInId} className={styles.appContent}>
          {childrenWithProps}
        </div>
      </div>
    );
  }
}

const RelayedApp = Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        identity {
          id,
          name,
          roles
        }
      }
    `
  }
});
export default RelayedApp;
