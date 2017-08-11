import React, { Component, PropTypes } from 'react';
import { Table, RaisedButton, TextField, DropDown } from '@process-engine-js/frontend_mui';
import { MenuItem } from 'material-ui';

import { applyTheme } from '../../../theme/themeProvider';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import { MenuOverlay } from '../';
import $ from 'jquery';

class ListBox extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node,
    frame: React.PropTypes.bool,
    createProcessKey: React.PropTypes.string,
    createButtonMuiProps: React.PropTypes.object,
    createButtonQflProps: React.PropTypes.object,
    createButtonProps: React.PropTypes.object,
    createButtonTheme: React.PropTypes.object,
    createDialogTheme: React.PropTypes.object,
    createFormItemTheme: React.PropTypes.object,
    createConfirmTheme: React.PropTypes.object,
    createWidgetTheme: React.PropTypes.object,
    createTheme: React.PropTypes.object,

    onSearch: React.PropTypes.func,
    searchFieldMuiProps: React.PropTypes.object,
    searchFieldQflProps: React.PropTypes.object,
    searchFieldProps: React.PropTypes.object,
    searchValue: React.PropTypes.string,
    tableProps: React.PropTypes.object,
    data: React.PropTypes.any,
    searchKeyDelay: React.PropTypes.number,
    controlledHeight: React.PropTypes.number,

    dataClassName: React.PropTypes.string.isRequired,

    itemBasedButtonSchema: React.PropTypes.any,
    itemBasedButtonMuiProps: React.PropTypes.object,
    itemBasedButtonQflProps: React.PropTypes.object,
    itemBasedButtonProps: React.PropTypes.object,
    itemBasedMoreButtonMuiProps: React.PropTypes.object,
    itemBasedMoreButtonQflProps: React.PropTypes.object,
    itemBasedMoreButtonProps: React.PropTypes.object,

    listBasedButtonSchema: React.PropTypes.any,
    filterMenuSchema: React.PropTypes.any,
    onFilterChange: React.PropTypes.func,

    baseFilterMenuSchema: React.PropTypes.any,

    onProcessEnded: React.PropTypes.func
  };

  static defaultProps = {
    title: null,
    frame: true,
    searchKeyDelay: 250
  };

  static contextTypes = {
    viewer: React.PropTypes.object
  };

  constructor(props) {
    super(props);

    const fayeClient = window.createMessageClient();
    this.state = {
      faye: fayeClient,
      subscriptions: {},
      isItemBasedMoreMenuOpened: false,
      selectedRows: {},
      searchValue: props.searchValue
    };
  }

  componentWillUnmount() {
    if (this.state.subscriptions) {
      Object.keys(this.state.subscriptions).forEach((subscription) => {
        this.state.subscriptions[subscription].channel.cancel();
      });
    }
  }

  handleStart(subscriptionId, startToken, done) {
    const participantUUID = this.state.faye._participantId;
    const msg = this.state.faye.createMessage({
      action: 'start',
      key: subscriptionId,
      token: startToken
    });

    this.state.faye.publish('/processengine', msg);
    const curChannelName = '/participant/' + participantUUID;
    const subscription = {
      channelName: curChannelName,
      channel: this.state.faye.subscribe(curChannelName, (fayeMsg) => {
        if (fayeMsg && fayeMsg.data && fayeMsg.data.action) {
          const data = fayeMsg.data;
          const processKey = subscriptionId;
          switch (fayeMsg.data.action) {
            case 'userTask': {
              const nextTaskEntity = fayeMsg.data.data;
              const nextTask = fayeMsg.data.data.nodeDef;

              const curTaskChannelName = '/processengine/node/' + nextTaskEntity.id;
              const currentSubscriptions = this.state.subscriptions;
              currentSubscriptions[subscriptionId].started = true;
              currentSubscriptions[subscriptionId].nextTask = nextTask;
              currentSubscriptions[subscriptionId].nextTaskEntity = nextTaskEntity;
              currentSubscriptions[subscriptionId].taskChannelName = curTaskChannelName;

              this.setState({
                subscriptions: currentSubscriptions
              });
              break;
            }
            case 'endEvent': {
              this.handleStop(subscriptionId);

              this.setState({
                currentOffset: 0
              }, () => {
                if (this.props.onProcessEnded) {
                  this.props.onProcessEnded(processKey, data);
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

    subscription.channel.then(() => {
      const currentSubscriptions = this.state.subscriptions;
      currentSubscriptions[subscriptionId] = subscription;
      this.setState({
        subscriptions: currentSubscriptions
      }, done);
    });
  }

  handleStop(subscriptionId, done) {
    const currentSubscriptions = this.state.subscriptions;
    const currentSubscription = currentSubscriptions[subscriptionId];
    currentSubscription.channel.cancel();

    delete currentSubscriptions[subscriptionId];

    this.setState({
      subscriptions: currentSubscriptions
    }, done);
  }

  delay = (() => {
    let timer = 0;
    return (callback, ms) => {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

  handleItemClicked(dataKey) {
    this.setState({
      isItemBasedMoreMenuOpened: false
    });

    const selectedItems = [];
    if (this.state.selectedRows) {
      Object.keys(this.state.selectedRows).forEach((key) => {
        selectedItems.push(this.state.selectedRows[key]);
      });
    }
    if (selectedItems && selectedItems.length > 0) {
      this.handleStart(dataKey, selectedItems.map((selectedItem) => selectedItem.id));
    }
  }

  handleSelectedRowsChanged(selectedRows) {
    this.setState({
      selectedRows
    });
  }

  cleanSelected() {
    if (this.refs && this.refs.listBoxTable && this.refs.listBoxTable.cleanSelected) {
      this.refs.listBoxTable.cleanSelected();
    }
  }

  handleFilterItemChange(key, oldValue, newValue, choosenElement, element) {
    if (this.props.onFilterChange) {
      this.props.onFilterChange(key, newValue, choosenElement, element);
    }
  }

  itemBasedMoreMenuId = 'demoItemBasedMoreMenu';

  render() {
    const styles = require('./ListBox.scss');

    let style = null;
    if (this.props.frame === true) {
      style = styles.gridListBox;
    } else {
      style = styles.gridListBoxNoFrame;
    }

    const themeObj = applyTheme();

    const { rbtProps } = (this.props.tableProps || {});
    if (this.props.tableProps) {
      delete this.props.tableProps.rbtProps;
    }

    const processables = [];

    let createButton = null;
    if (this.props.createProcessKey) {
      createButton = (
        <RaisedButton
          theme={applyTheme('TableHeader')}
          muiProps={{
            label: '+',
            primary: true,
            className: styles.createButton,
            style: {
              borderRadius: '0px'
            },
            onClick: (e) => {
              this.handleStart(this.props.createProcessKey + this.props.dataClassName, this.context.viewer.identity.id);
            },
            ...this.props.createButtonMuiProps
          }}
          qflProps={{
            style: {
              paddingTop: '9px',
              width: 'auto',
              display: 'inline-block'
            },
            ...this.props.createButtonQflProps
          }}
          {...this.props.createButtonProps}
        />
      );

      let createProcessContainer = null;
      const createProcessable = ((this.state.subscriptions && this.state.subscriptions['Create' + this.props.dataClassName]) || null);
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

    let filterMenuElements = [];
    if (this.props.filterMenuSchema && this.props.filterMenuSchema.length > 0) {
      filterMenuElements = this.props.filterMenuSchema.map((filterMenuSchemaItem) => (
        <DropDown
          key={filterMenuSchemaItem.key}
          theme={filterMenuSchemaItem.theme}
          value={filterMenuSchemaItem.currentValue}
          items={filterMenuSchemaItem.items.map((dropDownItem, dropDownItemIdx) => <MenuItem
            key={filterMenuSchemaItem.key + '-' + dropDownItemIdx}
            value={dropDownItem.value}
            primaryText={dropDownItem.label}
          />)}
          muiProps={{
            floatingLabelText: filterMenuSchemaItem.label,
            ...filterMenuSchemaItem.muiProps
          }}
          onChange={(event, index, oldValue, newValue) => this.handleFilterItemChange(filterMenuSchemaItem.key, oldValue, newValue, filterMenuSchemaItem.items[index], filterMenuSchemaItem)}
          qflProps={{
            style: {
              paddingTop: themeObj.distances.primary,
              display: 'inline-block',
              width: '150px',
              marginLeft: themeObj.distances.halfPrimary
            },
            ...filterMenuSchemaItem.qflProps
          }}
        />
      ));
    }

    let itemBasedElements = [];
    if (Object.keys(this.state.selectedRows).length > 0) {
      if (this.props.itemBasedButtonSchema && this.props.itemBasedButtonSchema.length > 0) {
        itemBasedElements = itemBasedElements.concat(this.props.itemBasedButtonSchema.filter((buttonSchemaItem) => {
          if (!buttonSchemaItem.multiple && Object.keys(this.state.selectedRows).length > 1) {
            return false;
          }
          return !buttonSchemaItem.isMore;
        }).map((buttonSchemaItem, buttonSchemaIdx) => {
          let itemBasedButtonProcessContainer = null;
          const itemBasedButtonProcessable = ((this.state.subscriptions && this.state.subscriptions[buttonSchemaItem.processableKey]) || null);
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

          return (
            <RaisedButton
              theme={applyTheme('TableHeader')}
              muiProps={{
                icon: buttonSchemaItem.icon,
                primary: true,
                className: styles.itemBasedButton,
                style: {
                  borderRadius: '0px'
                },
                onClick: (e) => {
                  this.handleItemClicked.bind(this, buttonSchemaItem.processableKey)();
                },
                ...this.props.itemBasedButtonMuiProps
              }}
              qflProps={{
                style: {
                  paddingTop: themeObj.distances.primary,
                  width: 'auto',
                  display: 'inline-block',
                  position: 'relative',
                  top: '-2px',
                  marginLeft: themeObj.distances.halfPrimary
                },
                ...this.props.itemBasedButtonQflProps
              }}
              {...this.props.itemBasedButtonProps}
            />
          );
        }));

        const itemBasedMoreButtons = this.props.itemBasedButtonSchema.filter((buttonSchemaItem) => {
          if (!buttonSchemaItem.multiple && Object.keys(this.state.selectedRows).length > 1) {
            return false;
          }
          return buttonSchemaItem.isMore;
        });
        if (itemBasedMoreButtons.length > 0) {
          const menuSchema = [{
            sectionName: null,
            items: itemBasedMoreButtons.map((buttonSchemaItem) => {
              let itemBasedButtonProcessContainer = null;
              const itemBasedButtonProcessable = ((this.state.subscriptions && this.state.subscriptions[buttonSchemaItem.processableKey]) || null);
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

          itemBasedElements = itemBasedElements.concat([
            <div
              style={{
                position: 'relative',
                display: 'inline-block'
              }}
            >
              <RaisedButton
                theme={applyTheme('TableHeader')}
                muiProps={{
                  icon: <ExpandMoreIcon/>,
                  labelPosition: 'before',
                  label: 'MEHR',
                  primary: true,
                  className: styles.itemBasedMoreButton,
                  style: {
                    borderRadius: '0px'
                  },
                  onClick: (e) => {
                    if (!this.state.isItemBasedMoreMenuOpened) {
                      $(window.document).on('click', (ce) => {
                        if (ce.originalEvent && ce.originalEvent.path.filter((item) => item.id === this.itemBasedMoreMenuId).length === 0) {
                          $(window.document).off('click');
                          this.setState({
                            isItemBasedMoreMenuOpened: false
                          });
                        }
                      });
                    }
                    this.setState({
                      isItemBasedMoreMenuOpened: !this.state.isItemBasedMoreMenuOpened
                    });
                  },
                  ...this.props.itemBasedMoreButtonMuiProps
                }}
                qflProps={{
                  style: {
                    paddingTop: themeObj.distances.primary,
                    width: 'auto',
                    display: 'inline-block',
                    marginLeft: themeObj.distances.halfPrimary
                  },
                  ...this.props.itemBasedMoreButtonQflProps
                }}
                {...this.props.itemBasedMoreButtonProps}
              />
              <div
                id={this.itemBasedMoreMenuId}
                style={{
                  display: (this.state.isItemBasedMoreMenuOpened ? 'block' : 'none'),
                  position: 'absolute',
                  zIndex: '10',
                  whiteSpace: 'nowrap',
                  color: 'black',
                  backgroundColor: 'white',
                  padding: themeObj.distances.halfPrimary,
                  marginLeft: themeObj.distances.halfPrimary,
                }}
              >
                <MenuOverlay
                  menuSchema={menuSchema}
                  onMenuItemClicked={(key) => {
                    const matchedButtonSchemaItems = itemBasedMoreButtons.filter((buttonSchemaItem) => (buttonSchemaItem.key === key));
                    let buttonSchemaItem = null;
                    if (matchedButtonSchemaItems.length === 1) {
                      buttonSchemaItem = matchedButtonSchemaItems[0];
                    }
                    if (buttonSchemaItem) {
                      this.handleItemClicked.bind(this, buttonSchemaItem.processableKey)();
                    }
                  }}
                />
              </div>
            </div>
          ]);
        }
      }
    }

    let searchField = null;
    if (this.props.onSearch) {
      searchField = (
        <TextField
          watch
          value={this.state.searchValue}
          theme={applyTheme('TableHeader')}
          muiProps={{
            hintText: 'Suchen',
            className: styles.searchField,
            ...this.props.searchFieldMuiProps
          }}
          qflProps={{
            style: {
              paddingTop: '9px',
              display: 'inline-block',
              position: 'relative',
              top: '-1px',
              marginRight: themeObj.distances.halfPrimary
            },
            ...this.props.searchFieldQflProps
          }}
          {...this.props.searchFieldProps}
          onChange={(oldValue, newValue, e) => {
            if (this.props.onSearch) {
              this.delay(() => {
                this.props.onSearch(newValue);
              }, (e && e.keyCode === 13 ? 0 : this.props.searchKeyDelay));
            }
          }}
        />
      );
    }

    return (
      <div
        className={style}
        style={{
          padding: '0px',
          verticalAlign: 'top',
          lineHeight: 1.2,
          position: 'relative'
        }}
      >
        <div className={styles.itemHeader}>
          {this.props.title}
        </div>
        <div className={styles.tableBar}>
          {createButton}{searchField}
          <div
            style={{
              position: 'relative',
              display: 'inline'
            }}
          >{filterMenuElements}</div>
          <div
            style={{
              position: 'relative',
              display: 'inline'
            }}
          >{itemBasedElements}</div>

        </div>

        <div
          style={{
            display: (this.state.isItemBasedMoreMenuOpened ? 'block' : 'none')
          }}
          className={styles.contentOverlay}
        />

        <Table
          ref="listBoxTable"
          theme={applyTheme('Table')}
          selectorTheme={applyTheme('TableSelector')}
          onSelectedRowsChanged={(selectedRows) => {
            this.handleSelectedRowsChanged(selectedRows);
          }}
          {...this.props.tableProps}
          rbtProps={{
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
            selectRowHeaderTdClassName: styles.tableHeaderColumnSelector,
            ...rbtProps
          }}
          stylingProps={{
            containerStyle: {
              height: this.props.controlledHeight + 'px'
            },
            tableStyle: {
              height: (this.props.controlledHeight - 10) + 'px'
            },
            headerStyle: {
              height: '35px'
            },
            bodyStyle: {
              height: (this.props.controlledHeight - 10 - 35) + 'px'
            }
          }}

        />
        {this.props.children}
        {processables}
      </div>
    );
  }
}

export default ListBox;

