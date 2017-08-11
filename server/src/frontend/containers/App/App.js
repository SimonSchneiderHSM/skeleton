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
  (state) => ({}),
  (dispatch) => ({})
)
class App extends Component {
  static propTypes = {
    children: PropTypes.object,
    helmetHead: PropTypes.object,
    viewer: PropTypes.object,
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

    this.state = {
      authObj: null,
      activeMenuId: null,
      loggedInAs,
      loggedInId
    };
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

  render() {
    const styles = require('./App.scss');
    const helmetHead = this.props.helmetHead;
    const childrenWithProps = React.Children.map(this.props.children, 
      (child) => { 
        const newProps = {}; 
        if (child.props.routerProps && child.props.routerProps.route && child.props.routerProps.route.name === 'processdefinitions') { 
          newProps.onRowDoubleClick = (row) => { 
            this.context.router.push('/app/process/definition/' + row.id); 
          } 
        } 
      return React.cloneElement(child, newProps); 
    }); 
    
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
                {}
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Navbar>

        <div className={styles.appContent}>
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
