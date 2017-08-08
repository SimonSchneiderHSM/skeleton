'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _class, _temp;

var _reactGridLayout = require('react-grid-layout');

var _reactRelay = require('react-relay');

var _reactRelay2 = _interopRequireDefault(_reactRelay);

var _RaisedButton = require('@process-engine-js/frontend_mui/dist/commonjs/Buttons/RaisedButton/RaisedButton.js');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _ProcessableContainer = require('@process-engine-js/process_engine_client_processable_react/dist/commonjs/Processable/ProcessableContainer.js');

var _ProcessableContainer2 = _interopRequireDefault(_ProcessableContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Home: {
    displayName: 'Home'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/frontend/containers/Home/Home.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var ResponsiveReactGridLayout = (0, _reactGridLayout.WidthProvider)(_reactGridLayout.Responsive);

var Home = _wrapComponent('Home')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {
      startReservationProcessInstance: null,
      startReservationProcessableContainer: null
    };
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.relay.forceFetch();
    }
  }, {
    key: 'renderProcessContainer',
    value: function renderProcessContainer(processKey) {
      switch (processKey) {
        case 'ReservationProcess':
          if (this.props.route.injectables && this.props.route.injectables.iamService) {
            var iamService = this.props.route.injectables.iamService;
            var context = iamService.createContextFromAuthObject(this.context.authObj);

            this.setState({
              startReservationProcessableContainer: _react3.default.createElement(_ProcessableContainer2.default, { executionContext: context, modal: false, key: this.state.startReservationProcessInstance.nextTaskEntity.id, processInstance: this.state.startReservationProcessInstance })
            });
          }
          break;
        default:
      }
    }
  }, {
    key: 'handleUserTask',
    value: function handleUserTask(processKey, message) {
      this.renderProcessContainer(processKey);
    }
  }, {
    key: 'handleManualTask',
    value: function handleManualTask(processKey, message) {}
  }, {
    key: 'handleEndEvent',
    value: function handleEndEvent(processKey, message) {
      var _this2 = this;

      switch (processKey) {
        case 'ReservationProcess':
          this.setState({
            startReservationProcessInstance: null,
            startReservationProcessableContainer: null
          }, function () {
            _this2.props.relay.forceFetch();
          });
          break;
        default:
      }
    }
  }, {
    key: 'startReservation',
    value: function startReservation(event) {
      var _this3 = this;

      if (this.props.route.injectables && this.props.route.injectables.processEngineClientApi) {
        if (this.props.route.injectables && this.props.route.injectables.iamService && this.context.authObj) {
          var iamService = this.props.route.injectables.iamService;
          var context = iamService.createContextFromAuthObject(this.context.authObj);

          this.props.route.injectables.processEngineClientApi.startProcess('ReservationProcess', this, context).then(function (startReservationProcessInstance) {
            _this3.setState({
              startReservationProcessInstance: startReservationProcessInstance
            });
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var styles = require('./Home.scss');

      var _props$catalog = this.props.catalog,
          reservations = _props$catalog.reservations,
          reservationsSmallClass = _props$catalog.reservationsSmallClass,
          reservationsMediumClass = _props$catalog.reservationsMediumClass;


      var reservationList = null;

      var reservationCount = 0;
      var reservationCountSmallClass = 0;
      var reservationCountMediumClass = 0;

      if (reservations && reservations.edges && reservations.edges.length > 0) {
        reservationCount = reservations.edges.length;
        var reservationEdges = reservations.edges;
        if (reservationEdges) {
          reservationList = reservationEdges.map(function (reservationEdge) {
            return _react3.default.createElement(
              'span',
              null,
              reservationEdge.node.id,
              ': ',
              reservationEdge.node.name,
              '- ',
              reservationEdge.node.category,
              ': ',
              reservationEdge.node.price,
              ' EUR',
              _react3.default.createElement('br', null)
            );
          });
        }
      }
      if (reservationsSmallClass && reservationsSmallClass.edges && reservationsSmallClass.edges.length > 0) {
        reservationCountSmallClass = reservationsSmallClass.edges.length;
      }
      if (reservationsMediumClass && reservationsMediumClass.edges && reservationsMediumClass.edges.length > 0) {
        reservationCountMediumClass = reservationsMediumClass.edges.length;
      }
      var tilesData = [{
        title: 'Reservierungen',
        key: 'a',
        content: _react3.default.createElement(
          'span',
          { className: styles.dashboardCount },
          reservationCount
        )
      }, {
        title: 'Kleinwagen',
        key: 'b',
        content: _react3.default.createElement(
          'span',
          { className: styles.dashboardCount },
          reservationCountSmallClass
        )
      }, {
        title: 'Limousine',
        key: 'c',
        content: _react3.default.createElement(
          'span',
          { className: styles.dashboardCount },
          reservationCountMediumClass
        )
      }];

      var layout = [{ i: 'a', x: 0, y: 0, w: 4, h: 1 }, { i: 'b', x: 4, y: 0, w: 4, h: 1 }, { i: 'c', x: 8, y: 0, w: 4, h: 1 }];

      var layouts = {
        lg: layout
      };

      var reservationStartElement = null;
      if (this.context.authObj) {
        reservationStartElement = _react3.default.createElement(_RaisedButton2.default, {
          muiProps: {
            label: 'Neue Reservierung starten'
          },
          qflProps: {
            onClick: function onClick(event) {
              return _this4.startReservation(event);
            }
          }
        });
      }

      var returningElement = _react3.default.createElement(
        'div',
        { className: styles.homeContainer,
          style: {
            margin: '0 auto',
            width: '100%',
            maxWidth: '1200px'
          } },
        reservationStartElement,
        _react3.default.createElement(
          'h1',
          null,
          'Reservierungen (',
          reservationCount,
          ')'
        ),
        _react3.default.createElement(
          ResponsiveReactGridLayout,
          { className: styles.dashboardGridContainer,
            layouts: layouts,
            breakpoints: { lg: 1200 },
            cols: { lg: 12 },
            margin: [9, 9],
            rowHeight: 144,
            isDraggable: false
          },
          tilesData.map(function (tile) {
            return _react3.default.createElement(
              'div',
              { key: tile.key },
              _react3.default.createElement(
                'h2',
                { className: styles.dashboardCountTitle },
                tile.title
              ),
              _react3.default.createElement(
                'div',
                { className: styles.dashboardCountContainer },
                tile.content
              )
            );
          })
        ),
        _react3.default.createElement('hr', null),
        reservationList
      );

      if (this.state.startReservationProcessableContainer) {
        returningElement = _react3.default.createElement(
          'div',
          { className: styles.homeContainer,
            style: {
              margin: '0 auto',
              width: '100%',
              maxWidth: '1200px'
            } },
          _react3.default.createElement(
            'h1',
            null,
            'Reservierung anlegen'
          ),
          this.state.startReservationProcessableContainer
        );
      }

      //TODO Show small widgets with different counts of reservations
      return returningElement;
    }
  }]);
  return Home;
}(_react2.Component), _class.propTypes = {
  catalog: _react2.PropTypes.object,
  route: _react2.PropTypes.object,
  children: _react2.PropTypes.node
}, _class.contextTypes = {
  authObj: _react2.PropTypes.object,
  relay: _react2.PropTypes.object,
  router: _react2.PropTypes.object
}, _temp));

var initialQuery = {
  operator: 'and',
  queries: [{
    attribute: 'id',
    operator: 'is not',
    value: 'null'
  }]
};

var initialQuerySmallClass = {
  operator: 'and',
  queries: [{
    attribute: 'id',
    operator: 'is not',
    value: 'null'
  }, {
    attribute: 'category',
    operator: '=',
    value: 'smallClass'
  }]
};

var initialQueryMediumClass = {
  operator: 'and',
  queries: [{
    attribute: 'id',
    operator: 'is not',
    value: 'null'
  }, {
    attribute: 'category',
    operator: '=',
    value: 'mediumClass'
  }]
};

var RelayedHome = _reactRelay2.default.createContainer(Home, {
  initialVariables: {
    query: JSON.stringify(initialQuery),
    querySmallClass: JSON.stringify(initialQuerySmallClass),
    queryMediumClass: JSON.stringify(initialQueryMediumClass)
  },

  fragments: {
    catalog: function catalog() {
      return function () {
        return {
          children: [{
            alias: 'reservations',
            calls: [{
              kind: 'Call',
              metadata: {},
              name: 'find',
              value: {
                kind: 'CallVariable',
                callVariableName: 'query'
              }
            }],
            children: [{
              children: [{
                children: [{
                  fieldName: 'category',
                  kind: 'Field',
                  metadata: {},
                  type: 'String'
                }, {
                  fieldName: 'price',
                  kind: 'Field',
                  metadata: {},
                  type: 'Float'
                }, {
                  fieldName: 'id',
                  kind: 'Field',
                  metadata: {
                    isGenerated: true,
                    isRequisite: true
                  },
                  type: 'ID'
                }],
                fieldName: 'node',
                kind: 'Field',
                metadata: {
                  canHaveSubselections: true,
                  isRequisite: true
                },
                type: 'Reservation'
              }, {
                fieldName: 'cursor',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }],
              fieldName: 'edges',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                isPlural: true
              },
              type: 'ReservationEdge'
            }, {
              children: [{
                fieldName: 'hasNextPage',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'Boolean'
              }, {
                fieldName: 'hasPreviousPage',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'Boolean'
              }],
              fieldName: 'pageInfo',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                isGenerated: true,
                isRequisite: true
              },
              type: 'PageInfo'
            }],
            fieldName: 'ReservationConnection',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              isConnection: true,
              isFindable: true
            },
            type: 'ReservationConnection'
          }, {
            alias: 'reservationsSmallClass',
            calls: [{
              kind: 'Call',
              metadata: {},
              name: 'find',
              value: {
                kind: 'CallVariable',
                callVariableName: 'querySmallClass'
              }
            }],
            children: [{
              children: [{
                children: [{
                  fieldName: 'category',
                  kind: 'Field',
                  metadata: {},
                  type: 'String'
                }, {
                  fieldName: 'id',
                  kind: 'Field',
                  metadata: {
                    isGenerated: true,
                    isRequisite: true
                  },
                  type: 'ID'
                }],
                fieldName: 'node',
                kind: 'Field',
                metadata: {
                  canHaveSubselections: true,
                  isRequisite: true
                },
                type: 'Reservation'
              }, {
                fieldName: 'cursor',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }],
              fieldName: 'edges',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                isPlural: true
              },
              type: 'ReservationEdge'
            }, {
              children: [{
                fieldName: 'hasNextPage',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'Boolean'
              }, {
                fieldName: 'hasPreviousPage',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'Boolean'
              }],
              fieldName: 'pageInfo',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                isGenerated: true,
                isRequisite: true
              },
              type: 'PageInfo'
            }],
            fieldName: 'ReservationConnection',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              isConnection: true,
              isFindable: true
            },
            type: 'ReservationConnection'
          }, {
            alias: 'reservationsMediumClass',
            calls: [{
              kind: 'Call',
              metadata: {},
              name: 'find',
              value: {
                kind: 'CallVariable',
                callVariableName: 'queryMediumClass'
              }
            }],
            children: [{
              children: [{
                children: [{
                  fieldName: 'category',
                  kind: 'Field',
                  metadata: {},
                  type: 'String'
                }, {
                  fieldName: 'id',
                  kind: 'Field',
                  metadata: {
                    isGenerated: true,
                    isRequisite: true
                  },
                  type: 'ID'
                }],
                fieldName: 'node',
                kind: 'Field',
                metadata: {
                  canHaveSubselections: true,
                  isRequisite: true
                },
                type: 'Reservation'
              }, {
                fieldName: 'cursor',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }],
              fieldName: 'edges',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                isPlural: true
              },
              type: 'ReservationEdge'
            }, {
              children: [{
                fieldName: 'hasNextPage',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'Boolean'
              }, {
                fieldName: 'hasPreviousPage',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'Boolean'
              }],
              fieldName: 'pageInfo',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                isGenerated: true,
                isRequisite: true
              },
              type: 'PageInfo'
            }],
            fieldName: 'ReservationConnection',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              isConnection: true,
              isFindable: true
            },
            type: 'ReservationConnection'
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
          name: 'Home_CatalogRelayQL',
          type: 'Catalog'
        };
      }();
    }
  }
});

exports.default = RelayedHome;
module.exports = exports['default'];
