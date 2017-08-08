import React, { Component, PropTypes } from 'react';
import { Responsive, WidthProvider as widthProvider } from 'react-grid-layout';
import Relay from 'react-relay';
import RaisedButton from '@process-engine-js/frontend_mui/dist/commonjs/Buttons/RaisedButton/RaisedButton.js';
import ProcessableContainer from '@process-engine-js/process_engine_client_processable_react/dist/commonjs/Processable/ProcessableContainer.js';

const ResponsiveReactGridLayout = widthProvider(Responsive);

class Home extends Component {
  static propTypes = {
    catalog: PropTypes.object,
    route: PropTypes.object,
    children: PropTypes.node
  };

  static contextTypes = {
    authObj: PropTypes.object,
    relay: PropTypes.object,
    router: PropTypes.object
  };

  constructor() {
    super();

    this.state = {
      startReservationProcessInstance: null,
      startReservationProcessableContainer: null
    };
  }

  componentDidMount() {
    this.props.relay.forceFetch();
  }

  renderProcessContainer(processKey) {
    switch(processKey) {
      case 'ReservationProcess':
        if (this.props.route.injectables && this.props.route.injectables.iamService) {
          const iamService = this.props.route.injectables.iamService;
          const context = iamService.createContextFromAuthObject(this.context.authObj);

          this.setState({
            startReservationProcessableContainer: (
              <ProcessableContainer executionContext={context} modal={false} key={this.state.startReservationProcessInstance.nextTaskEntity.id} processInstance={this.state.startReservationProcessInstance}/>
            )
          });
        }
        break;
      default:
    }
  };

  handleUserTask(processKey, message) {
    this.renderProcessContainer(processKey);
  };

  handleManualTask(processKey, message) {};

  handleEndEvent(processKey, message) {
    switch(processKey) {
      case 'ReservationProcess':
        this.setState({
          startReservationProcessInstance: null,
          startReservationProcessableContainer: null
        }, () => {
          this.props.relay.forceFetch();
        });
        break;
      default:
    }
  };

  startReservation(event) {
    if (this.props.route.injectables && this.props.route.injectables.processEngineClientApi) {
      if (this.props.route.injectables && this.props.route.injectables.iamService && this.context.authObj) {
        const iamService = this.props.route.injectables.iamService;
        const context = iamService.createContextFromAuthObject(this.context.authObj);

        this.props.route.injectables.processEngineClientApi.startProcess('ReservationProcess', this, context).then((startReservationProcessInstance) => {
          this.setState({
            startReservationProcessInstance
          });
        });
      }
    }
  }

  render() {
    const styles = require('./Home.scss');

    const { reservations, reservationsSmallClass, reservationsMediumClass } = this.props.catalog;

    let reservationList = null;

    let reservationCount = 0;
    let reservationCountSmallClass = 0;
    let reservationCountMediumClass = 0;

    if (reservations && reservations.edges && reservations.edges.length > 0) {
      reservationCount = reservations.edges.length;
      const reservationEdges = reservations.edges;
      if (reservationEdges) {
        reservationList = reservationEdges.map((reservationEdge) =>
          <span>{reservationEdge.node.id}: {reservationEdge.node.name}
            - {reservationEdge.node.category}: {reservationEdge.node.price} EUR<br/></span>);
      }
    }
    if (reservationsSmallClass && reservationsSmallClass.edges && reservationsSmallClass.edges.length > 0) {
      reservationCountSmallClass = reservationsSmallClass.edges.length;
    }
    if (reservationsMediumClass && reservationsMediumClass.edges && reservationsMediumClass.edges.length > 0) {
      reservationCountMediumClass = reservationsMediumClass.edges.length;
    }
    const tilesData = [
      {
        title: 'Reservierungen',
        key: 'a',
        content: <span className={styles.dashboardCount}>{reservationCount}</span>
      },
      {
        title: 'Kleinwagen',
        key: 'b',
        content: <span className={styles.dashboardCount}>{reservationCountSmallClass}</span>
      },
      {
        title: 'Limousine',
        key: 'c',
        content: <span className={styles.dashboardCount}>{reservationCountMediumClass}</span>
      }
    ];

    const layout = [
      { i: 'a', x: 0, y: 0, w: 4, h: 1 },
      { i: 'b', x: 4, y: 0, w: 4, h: 1 },
      { i: 'c', x: 8, y: 0, w: 4, h: 1 }
    ];

    const layouts = {
      lg: layout
    };

    let reservationStartElement = null;
    if (this.context.authObj) {
      reservationStartElement = (
        <RaisedButton
          muiProps={{
            label: 'Neue Reservierung starten'
          }}
          qflProps={{
            onClick: (event) => this.startReservation(event)
          }}
        />
      );
    }

    let returningElement = (
      <div className={styles.homeContainer}
           style={{
             margin: '0 auto',
             width: '100%',
             maxWidth: '1200px'
           }}>
        {reservationStartElement}
        <h1>Reservierungen ({reservationCount})</h1>
        <ResponsiveReactGridLayout className={styles.dashboardGridContainer}
                                   layouts={layouts}
                                   breakpoints={{ lg: 1200 }}
                                   cols={{ lg: 12 }}
                                   margin={[9, 9]}
                                   rowHeight={144}
                                   isDraggable={false}
        >

          {tilesData.map((tile) => {
            return (
              <div key={tile.key}>
                <h2 className={styles.dashboardCountTitle}>{tile.title}</h2>
                <div className={styles.dashboardCountContainer}>
                  {tile.content}
                </div>
              </div>
            );
          })}
        </ResponsiveReactGridLayout>
        <hr />
        {reservationList}
      </div>
    );

    if (this.state.startReservationProcessableContainer) {
      returningElement = (
        <div className={styles.homeContainer}
             style={{
               margin: '0 auto',
               width: '100%',
               maxWidth: '1200px'
             }}>
          <h1>Reservierung anlegen</h1>
          {this.state.startReservationProcessableContainer}
        </div>
      );
    }

    //TODO Show small widgets with different counts of reservations
    return returningElement
  }
}

const initialQuery = {
  operator: 'and',
  queries: [
    {
      attribute: 'id',
      operator: 'is not',
      value: 'null'
    }
  ]
};

const initialQuerySmallClass = {
  operator: 'and',
  queries: [
    {
      attribute: 'id',
      operator: 'is not',
      value: 'null'
    },
    {
      attribute: 'category',
      operator: '=',
      value: 'smallClass'
    }
  ]
};

const initialQueryMediumClass = {
  operator: 'and',
  queries: [
    {
      attribute: 'id',
      operator: 'is not',
      value: 'null'
    },
    {
      attribute: 'category',
      operator: '=',
      value: 'mediumClass'
    }
  ]
};

const RelayedHome = Relay.createContainer(Home, {
  initialVariables: {
    query: JSON.stringify(initialQuery),
    querySmallClass: JSON.stringify(initialQuerySmallClass),
    queryMediumClass: JSON.stringify(initialQueryMediumClass),
  },

  fragments: {
    catalog: () => Relay.QL`
            fragment on Catalog {
                reservations: ReservationConnection(find: $query) {
                    edges {
                        node {
                            category,
                            price
                        }
                    }
                },
                reservationsSmallClass: ReservationConnection(find: $querySmallClass) {
                    edges {
                        node {
                            category
                        }
                    }
                },
                reservationsMediumClass: ReservationConnection(find: $queryMediumClass) {
                    edges {
                        node {
                            category
                        }
                    }
                }
            }
        `
  }
});

export default RelayedHome;
