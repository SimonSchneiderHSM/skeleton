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

var _frontend_mui = require('@process-engine-js/frontend_mui');

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _themeProvider = require('../../../theme/themeProvider');

var _expandMore = require('material-ui/svg-icons/navigation/expand-more');

var _expandMore2 = _interopRequireDefault(_expandMore);

var _ = require('../');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  ListBox: {
    displayName: 'ListBox'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/frontend/components/specific/Demo/ListBox.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var ListBox = _wrapComponent('ListBox')((_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(ListBox, _React$Component);

  function ListBox(props) {
    (0, _classCallCheck3.default)(this, ListBox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ListBox.__proto__ || Object.getPrototypeOf(ListBox)).call(this, props));

    _this.delay = function () {
      var timer = 0;
      return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
      };
    }();

    _this.itemBasedMoreMenuId = 'demoItemBasedMoreMenu';


    var fayeClient = window.createMessageClient();
    _this.state = {
      faye: fayeClient,
      subscriptions: {},
      isItemBasedMoreMenuOpened: false,
      selectedRows: {},
      searchValue: props.searchValue
    };
    return _this;
  }

  (0, _createClass3.default)(ListBox, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this2 = this;

      if (this.state.subscriptions) {
        Object.keys(this.state.subscriptions).forEach(function (subscription) {
          _this2.state.subscriptions[subscription].channel.cancel();
        });
      }
    }
  }, {
    key: 'handleStart',
    value: function handleStart(subscriptionId, startToken, done) {
      var _this3 = this;

      var participantUUID = this.state.faye._participantId;
      var msg = this.state.faye.createMessage({
        action: 'start',
        key: subscriptionId,
        token: startToken
      });

      this.state.faye.publish('/processengine', msg);
      var curChannelName = '/participant/' + participantUUID;
      var subscription = {
        channelName: curChannelName,
        channel: this.state.faye.subscribe(curChannelName, function (fayeMsg) {
          if (fayeMsg && fayeMsg.data && fayeMsg.data.action) {
            var data = fayeMsg.data;
            var processKey = subscriptionId;
            switch (fayeMsg.data.action) {
              case 'userTask':
                {
                  var nextTaskEntity = fayeMsg.data.data;
                  var nextTask = fayeMsg.data.data.nodeDef;

                  var curTaskChannelName = '/processengine/node/' + nextTaskEntity.id;
                  var currentSubscriptions = _this3.state.subscriptions;
                  currentSubscriptions[subscriptionId].started = true;
                  currentSubscriptions[subscriptionId].nextTask = nextTask;
                  currentSubscriptions[subscriptionId].nextTaskEntity = nextTaskEntity;
                  currentSubscriptions[subscriptionId].taskChannelName = curTaskChannelName;

                  _this3.setState({
                    subscriptions: currentSubscriptions
                  });
                  break;
                }
              case 'endEvent':
                {
                  _this3.handleStop(subscriptionId);

                  _this3.setState({
                    currentOffset: 0
                  }, function () {
                    if (_this3.props.onProcessEnded) {
                      _this3.props.onProcessEnded(processKey, data);
                    }
                  });

                  break;
                }
              default:
                break;
            }
          }
        })
      };

      subscription.channel.then(function () {
        var currentSubscriptions = _this3.state.subscriptions;
        currentSubscriptions[subscriptionId] = subscription;
        _this3.setState({
          subscriptions: currentSubscriptions
        }, done);
      });
    }
  }, {
    key: 'handleStop',
    value: function handleStop(subscriptionId, done) {
      var currentSubscriptions = this.state.subscriptions;
      var currentSubscription = currentSubscriptions[subscriptionId];
      currentSubscription.channel.cancel();

      delete currentSubscriptions[subscriptionId];

      this.setState({
        subscriptions: currentSubscriptions
      }, done);
    }
  }, {
    key: 'handleItemClicked',
    value: function handleItemClicked(dataKey) {
      var _this4 = this;

      this.setState({
        isItemBasedMoreMenuOpened: false
      });

      var selectedItems = [];
      if (this.state.selectedRows) {
        Object.keys(this.state.selectedRows).forEach(function (key) {
          selectedItems.push(_this4.state.selectedRows[key]);
        });
      }
      if (selectedItems && selectedItems.length > 0) {
        this.handleStart(dataKey, selectedItems.map(function (selectedItem) {
          return selectedItem.id;
        }));
      }
    }
  }, {
    key: 'handleSelectedRowsChanged',
    value: function handleSelectedRowsChanged(selectedRows) {
      this.setState({
        selectedRows: selectedRows
      });
    }
  }, {
    key: 'cleanSelected',
    value: function cleanSelected() {
      if (this.refs && this.refs.listBoxTable && this.refs.listBoxTable.cleanSelected) {
        this.refs.listBoxTable.cleanSelected();
      }
    }
  }, {
    key: 'handleFilterItemChange',
    value: function handleFilterItemChange(key, oldValue, newValue, choosenElement, element) {
      if (this.props.onFilterChange) {
        this.props.onFilterChange(key, newValue, choosenElement, element);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var styles = require('./ListBox.scss');

      var style = null;
      if (this.props.frame === true) {
        style = styles.gridListBox;
      } else {
        style = styles.gridListBoxNoFrame;
      }

      var themeObj = (0, _themeProvider.applyTheme)();

      var _ref = this.props.tableProps || {},
          rbtProps = _ref.rbtProps;

      if (this.props.tableProps) {
        delete this.props.tableProps.rbtProps;
      }

      var processables = [];

      var createButton = null;
      if (this.props.createProcessKey) {
        createButton = _react3.default.createElement(_frontend_mui.RaisedButton, (0, _extends3.default)({
          theme: (0, _themeProvider.applyTheme)('TableHeader'),
          muiProps: (0, _extends3.default)({
            label: '+',
            primary: true,
            className: styles.createButton,
            style: {
              borderRadius: '0px'
            },
            onClick: function onClick(e) {
              _this5.handleStart(_this5.props.createProcessKey + _this5.props.dataClassName, _this5.context.viewer.identity.id);
            }
          }, this.props.createButtonMuiProps),
          qflProps: (0, _extends3.default)({
            style: {
              paddingTop: '9px',
              width: 'auto',
              display: 'inline-block'
            }
          }, this.props.createButtonQflProps)
        }, this.props.createButtonProps));

        var createProcessContainer = null;
        var createProcessable = this.state.subscriptions && this.state.subscriptions['Create' + this.props.dataClassName] || null;
        if (createProcessable && createProcessable.started && createProcessable.taskChannelName) {
          /*createProcessContainer = (
            <Processable modal key={createProcessable.nextTaskEntity.id} processable={createProcessable}
                         buttonTheme={this.props.createButtonTheme} dialogTheme={this.props.createDialogTheme}
                         formItemTheme={this.props.createFormItemTheme} confirmTheme={this.props.createConfirmTheme}
                         widgetTheme={this.props.createWidgetTheme} theme={this.props.createTheme}
                         mbClient={this.state.faye}/>
          );*/
        }

        processables.push(createProcessContainer);
      }

      var filterMenuElements = [];
      if (this.props.filterMenuSchema && this.props.filterMenuSchema.length > 0) {
        filterMenuElements = this.props.filterMenuSchema.map(function (filterMenuSchemaItem) {
          return _react3.default.createElement(_frontend_mui.DropDown, {
            key: filterMenuSchemaItem.key,
            theme: filterMenuSchemaItem.theme,
            value: filterMenuSchemaItem.currentValue,
            items: filterMenuSchemaItem.items.map(function (dropDownItem, dropDownItemIdx) {
              return _react3.default.createElement(_MenuItem2.default, {
                key: filterMenuSchemaItem.key + '-' + dropDownItemIdx,
                value: dropDownItem.value,
                primaryText: dropDownItem.label
              });
            }),
            muiProps: (0, _extends3.default)({
              floatingLabelText: filterMenuSchemaItem.label
            }, filterMenuSchemaItem.muiProps),
            onChange: function onChange(event, index, oldValue, newValue) {
              return _this5.handleFilterItemChange(filterMenuSchemaItem.key, oldValue, newValue, filterMenuSchemaItem.items[index], filterMenuSchemaItem);
            },
            qflProps: (0, _extends3.default)({
              style: {
                paddingTop: themeObj.distances.primary,
                display: 'inline-block',
                width: '150px',
                marginLeft: themeObj.distances.halfPrimary
              }
            }, filterMenuSchemaItem.qflProps)
          });
        });
      }

      var itemBasedElements = [];
      if (Object.keys(this.state.selectedRows).length > 0) {
        if (this.props.itemBasedButtonSchema && this.props.itemBasedButtonSchema.length > 0) {
          itemBasedElements = itemBasedElements.concat(this.props.itemBasedButtonSchema.filter(function (buttonSchemaItem) {
            if (!buttonSchemaItem.multiple && Object.keys(_this5.state.selectedRows).length > 1) {
              return false;
            }
            return !buttonSchemaItem.isMore;
          }).map(function (buttonSchemaItem, buttonSchemaIdx) {
            var itemBasedButtonProcessContainer = null;
            var itemBasedButtonProcessable = _this5.state.subscriptions && _this5.state.subscriptions[buttonSchemaItem.processableKey] || null;
            if (itemBasedButtonProcessable && itemBasedButtonProcessable.started && itemBasedButtonProcessable.taskChannelName) {
              /*itemBasedButtonProcessContainer = (
                <Processable
                  modal
                  key={itemBasedButtonProcessable.nextTaskEntity.id}
                  processable={itemBasedButtonProcessable}
                  buttonTheme={buttonSchemaItem.themes.buttonTheme}
                  dialogTheme={buttonSchemaItem.themes.dialogTheme}
                  formItemTheme={buttonSchemaItem.themes.formItemTheme}
                  confirmTheme={buttonSchemaItem.themes.confirmTheme}
                  widgetTheme={buttonSchemaItem.themes.widgetTheme}
                  theme={buttonSchemaItem.themes.theme}
                  mbClient={this.state.faye}
                />
              );*/
            }

            processables.push(itemBasedButtonProcessContainer);

            return _react3.default.createElement(_frontend_mui.RaisedButton, (0, _extends3.default)({
              theme: (0, _themeProvider.applyTheme)('TableHeader'),
              muiProps: (0, _extends3.default)({
                icon: buttonSchemaItem.icon,
                primary: true,
                className: styles.itemBasedButton,
                style: {
                  borderRadius: '0px'
                },
                onClick: function onClick(e) {
                  _this5.handleItemClicked.bind(_this5, buttonSchemaItem.processableKey)();
                }
              }, _this5.props.itemBasedButtonMuiProps),
              qflProps: (0, _extends3.default)({
                style: {
                  paddingTop: themeObj.distances.primary,
                  width: 'auto',
                  display: 'inline-block',
                  position: 'relative',
                  top: '-2px',
                  marginLeft: themeObj.distances.halfPrimary
                }
              }, _this5.props.itemBasedButtonQflProps)
            }, _this5.props.itemBasedButtonProps));
          }));

          var itemBasedMoreButtons = this.props.itemBasedButtonSchema.filter(function (buttonSchemaItem) {
            if (!buttonSchemaItem.multiple && Object.keys(_this5.state.selectedRows).length > 1) {
              return false;
            }
            return buttonSchemaItem.isMore;
          });
          if (itemBasedMoreButtons.length > 0) {
            var menuSchema = [{
              sectionName: null,
              items: itemBasedMoreButtons.map(function (buttonSchemaItem) {
                var itemBasedButtonProcessContainer = null;
                var itemBasedButtonProcessable = _this5.state.subscriptions && _this5.state.subscriptions[buttonSchemaItem.processableKey] || null;
                if (itemBasedButtonProcessable && itemBasedButtonProcessable.started && itemBasedButtonProcessable.taskChannelName) {
                  /*itemBasedButtonProcessContainer = (
                    <Processable
                      modal
                      key={itemBasedButtonProcessable.nextTaskEntity.id}
                      processable={itemBasedButtonProcessable}
                      buttonTheme={buttonSchemaItem.themes.buttonTheme}
                      dialogTheme={buttonSchemaItem.themes.dialogTheme}
                      formItemTheme={buttonSchemaItem.themes.formItemTheme}
                      confirmTheme={buttonSchemaItem.themes.confirmTheme}
                      widgetTheme={buttonSchemaItem.themes.widgetTheme}
                      theme={buttonSchemaItem.themes.theme}
                      mbClient={this.state.faye}
                    />
                  );*/
                }

                processables.push(itemBasedButtonProcessContainer);
                return {
                  label: buttonSchemaItem.name,
                  key: buttonSchemaItem.key
                };
              })
            }];

            itemBasedElements = itemBasedElements.concat([_react3.default.createElement(
              'div',
              {
                style: {
                  position: 'relative',
                  display: 'inline-block'
                }
              },
              _react3.default.createElement(_frontend_mui.RaisedButton, (0, _extends3.default)({
                theme: (0, _themeProvider.applyTheme)('TableHeader'),
                muiProps: (0, _extends3.default)({
                  icon: _react3.default.createElement(_expandMore2.default, null),
                  labelPosition: 'before',
                  label: 'MEHR',
                  primary: true,
                  className: styles.itemBasedMoreButton,
                  style: {
                    borderRadius: '0px'
                  },
                  onClick: function onClick(e) {
                    if (!_this5.state.isItemBasedMoreMenuOpened) {
                      (0, _jquery2.default)(window.document).on('click', function (ce) {
                        if (ce.originalEvent && ce.originalEvent.path.filter(function (item) {
                          return item.id === _this5.itemBasedMoreMenuId;
                        }).length === 0) {
                          (0, _jquery2.default)(window.document).off('click');
                          _this5.setState({
                            isItemBasedMoreMenuOpened: false
                          });
                        }
                      });
                    }
                    _this5.setState({
                      isItemBasedMoreMenuOpened: !_this5.state.isItemBasedMoreMenuOpened
                    });
                  }
                }, this.props.itemBasedMoreButtonMuiProps),
                qflProps: (0, _extends3.default)({
                  style: {
                    paddingTop: themeObj.distances.primary,
                    width: 'auto',
                    display: 'inline-block',
                    marginLeft: themeObj.distances.halfPrimary
                  }
                }, this.props.itemBasedMoreButtonQflProps)
              }, this.props.itemBasedMoreButtonProps)),
              _react3.default.createElement(
                'div',
                {
                  id: this.itemBasedMoreMenuId,
                  style: {
                    display: this.state.isItemBasedMoreMenuOpened ? 'block' : 'none',
                    position: 'absolute',
                    zIndex: '10',
                    whiteSpace: 'nowrap',
                    color: 'black',
                    backgroundColor: 'white',
                    padding: themeObj.distances.halfPrimary,
                    marginLeft: themeObj.distances.halfPrimary
                  }
                },
                _react3.default.createElement(_.MenuOverlay, {
                  menuSchema: menuSchema,
                  onMenuItemClicked: function onMenuItemClicked(key) {
                    var matchedButtonSchemaItems = itemBasedMoreButtons.filter(function (buttonSchemaItem) {
                      return buttonSchemaItem.key === key;
                    });
                    var buttonSchemaItem = null;
                    if (matchedButtonSchemaItems.length === 1) {
                      buttonSchemaItem = matchedButtonSchemaItems[0];
                    }
                    if (buttonSchemaItem) {
                      _this5.handleItemClicked.bind(_this5, buttonSchemaItem.processableKey)();
                    }
                  }
                })
              )
            )]);
          }
        }
      }

      var searchField = null;
      if (this.props.onSearch) {
        searchField = _react3.default.createElement(_frontend_mui.TextField, (0, _extends3.default)({
          watch: true,
          value: this.state.searchValue,
          theme: (0, _themeProvider.applyTheme)('TableHeader'),
          muiProps: (0, _extends3.default)({
            hintText: 'Suchen',
            className: styles.searchField
          }, this.props.searchFieldMuiProps),
          qflProps: (0, _extends3.default)({
            style: {
              paddingTop: '9px',
              display: 'inline-block',
              position: 'relative',
              top: '-1px',
              marginRight: themeObj.distances.halfPrimary
            }
          }, this.props.searchFieldQflProps)
        }, this.props.searchFieldProps, {
          onChange: function onChange(oldValue, newValue, e) {
            if (_this5.props.onSearch) {
              _this5.delay(function () {
                _this5.props.onSearch(newValue);
              }, e && e.keyCode === 13 ? 0 : _this5.props.searchKeyDelay);
            }
          }
        }));
      }

      return _react3.default.createElement(
        'div',
        {
          className: style,
          style: {
            padding: '0px',
            verticalAlign: 'top',
            lineHeight: 1.2,
            position: 'relative'
          }
        },
        _react3.default.createElement(
          'div',
          { className: styles.itemHeader },
          this.props.title
        ),
        _react3.default.createElement(
          'div',
          { className: styles.tableBar },
          createButton,
          searchField,
          _react3.default.createElement(
            'div',
            {
              style: {
                position: 'relative',
                display: 'inline'
              }
            },
            filterMenuElements
          ),
          _react3.default.createElement(
            'div',
            {
              style: {
                position: 'relative',
                display: 'inline'
              }
            },
            itemBasedElements
          )
        ),
        _react3.default.createElement('div', {
          style: {
            display: this.state.isItemBasedMoreMenuOpened ? 'block' : 'none'
          },
          className: styles.contentOverlay
        }),
        _react3.default.createElement(_frontend_mui.Table, (0, _extends3.default)({
          ref: 'listBoxTable',
          theme: (0, _themeProvider.applyTheme)('Table'),
          selectorTheme: (0, _themeProvider.applyTheme)('TableSelector'),
          onSelectedRowsChanged: function onSelectedRowsChanged(selectedRows) {
            _this5.handleSelectedRowsChanged(selectedRows);
          }
        }, this.props.tableProps, {
          rbtProps: (0, _extends3.default)({
            data: this.props.data,
            columnFilter: false,
            search: false,
            striped: true,
            hover: true,
            condensed: true,
            pagination: false,
            insertRow: false,
            deleteRow: false,
            trClassName: styles.tableRow,
            tableHeaderClass: styles.tableHeaderRow,
            selectRowTdClassName: styles.tableColumnSelector,
            selectRowHeaderTdClassName: styles.tableHeaderColumnSelector
          }, rbtProps),
          stylingProps: {
            containerStyle: {
              height: this.props.controlledHeight + 'px'
            },
            tableStyle: {
              height: this.props.controlledHeight - 10 + 'px'
            },
            headerStyle: {
              height: '35px'
            },
            bodyStyle: {
              height: this.props.controlledHeight - 10 - 35 + 'px'
            }
          }

        })),
        this.props.children,
        processables
      );
    }
  }]);
  return ListBox;
}(_react3.default.Component), _class.propTypes = {
  title: _react3.default.PropTypes.string,
  children: _react3.default.PropTypes.node,
  frame: _react3.default.PropTypes.bool,
  createProcessKey: _react3.default.PropTypes.string,
  createButtonMuiProps: _react3.default.PropTypes.object,
  createButtonQflProps: _react3.default.PropTypes.object,
  createButtonProps: _react3.default.PropTypes.object,
  createButtonTheme: _react3.default.PropTypes.object,
  createDialogTheme: _react3.default.PropTypes.object,
  createFormItemTheme: _react3.default.PropTypes.object,
  createConfirmTheme: _react3.default.PropTypes.object,
  createWidgetTheme: _react3.default.PropTypes.object,
  createTheme: _react3.default.PropTypes.object,

  onSearch: _react3.default.PropTypes.func,
  searchFieldMuiProps: _react3.default.PropTypes.object,
  searchFieldQflProps: _react3.default.PropTypes.object,
  searchFieldProps: _react3.default.PropTypes.object,
  searchValue: _react3.default.PropTypes.string,
  tableProps: _react3.default.PropTypes.object,
  data: _react3.default.PropTypes.any,
  searchKeyDelay: _react3.default.PropTypes.number,
  controlledHeight: _react3.default.PropTypes.number,

  dataClassName: _react3.default.PropTypes.string.isRequired,

  itemBasedButtonSchema: _react3.default.PropTypes.any,
  itemBasedButtonMuiProps: _react3.default.PropTypes.object,
  itemBasedButtonQflProps: _react3.default.PropTypes.object,
  itemBasedButtonProps: _react3.default.PropTypes.object,
  itemBasedMoreButtonMuiProps: _react3.default.PropTypes.object,
  itemBasedMoreButtonQflProps: _react3.default.PropTypes.object,
  itemBasedMoreButtonProps: _react3.default.PropTypes.object,

  listBasedButtonSchema: _react3.default.PropTypes.any,
  filterMenuSchema: _react3.default.PropTypes.any,
  onFilterChange: _react3.default.PropTypes.func,

  baseFilterMenuSchema: _react3.default.PropTypes.any,

  onProcessEnded: _react3.default.PropTypes.func
}, _class.defaultProps = {
  title: null,
  frame: true,
  searchKeyDelay: 250
}, _class.contextTypes = {
  viewer: _react3.default.PropTypes.object
}, _temp));

exports.default = ListBox;
module.exports = exports['default'];
