import React, { Component, PropTypes } from 'react';

class Home extends Component {
  static propTypes = {
    route: PropTypes.object,
    children: PropTypes.node
  };

  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    const styles = require('./Home.scss');
    let returningElement = (
      <div className={styles.homeContainer}
           style={{
             margin: '0 auto',
             width: '100%',
             maxWidth: '1200px'
           }}>
           Hello World
      </div>
    );

    return returningElement
  }
}

export default Home;
