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

var _frontend_mui = require('@process-engine-js/frontend_mui');

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _RadioButton = require('material-ui/RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

var _home = require('material-ui/svg-icons/action/home');

var _home2 = _interopRequireDefault(_home);

var _favorite = require('material-ui/svg-icons/action/favorite');

var _favorite2 = _interopRequireDefault(_favorite);

var _favoriteBorder = require('material-ui/svg-icons/action/favorite-border');

var _favoriteBorder2 = _interopRequireDefault(_favoriteBorder);

var _styles = require('material-ui/styles');

var _Card = require('material-ui/Card');

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    ComponentPool: {
        displayName: 'ComponentPool'
    },
    DefaultComponentPool: {
        displayName: 'DefaultComponentPool'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'src/frontend/containers/ComponentPool/ComponentPool.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var filter = require('material-ui/AutoComplete').default.fuzzyFilter;


var data = [{ id: 1, name: 'Max Mustermann', age: '40' }, { id: 2, name: 'Peter Mafai', age: '45' }, { id: 3, name: 'Udo Lindenberg', age: '47' }, { id: 4, name: 'Helge Schneide', age: '34' }, { id: 5, name: 'Helene Fischer', age: '85' }, { id: 6, name: 'Franz Mustermann', age: '46' }, { id: 7, name: 'Peter Lindenberg', age: '76' }, { id: 8, name: 'Udo Schneider', age: '83' }, { id: 9, name: 'Ina Mäller', age: '54' }, { id: 10, name: 'Helene Mafai', age: '43' }, { id: 11, name: 'Ned Flenders', age: '27' }];

var columnSchema = [{ name: 'id', thcProps: { dataField: 'id', isKey: true, dataAlign: 'center', dataSort: true } }, { name: 'name', thcProps: { dataField: 'name', dataAlign: 'center', dataSort: true } }, { name: 'age', thcProps: { dataField: 'age', dataAlign: 'center', dataSort: true } }];

var ComponentPool = _wrapComponent('ComponentPool')((_temp = _class = function (_Component) {
    (0, _inherits3.default)(ComponentPool, _Component);

    function ComponentPool() {
        (0, _classCallCheck3.default)(this, ComponentPool);
        return (0, _possibleConstructorReturn3.default)(this, (ComponentPool.__proto__ || Object.getPrototypeOf(ComponentPool)).call(this));
    }

    (0, _createClass3.default)(ComponentPool, [{
        key: 'getChildContext',
        value: function getChildContext() {
            var muiTheme = require('../../theme/' + this.props.muiTheme + '/theme');
            return {
                muiTheme: (0, _styles.getMuiTheme)(muiTheme)
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var styles = require('./ComponentPool.scss');

            function onAfterSaveCell(row, cellName, cellValue) {
                console.log('Save cell \'' + cellName + '\' with value \'' + cellValue + '\'');
                console.log('The whole row :');
                console.log(row);
            }

            function onRowSelect(row, isSelected) {
                console.log(row);
                console.log('selected: ' + isSelected);
            }

            function onSelectAll(isSelected) {
                console.log('is select all: ' + isSelected);
            }

            var cellEditProp = {
                mode: 'click',
                blurToSave: true,
                afterSaveCell: onAfterSaveCell
            };

            var selectRowProp = {
                mode: 'checkbox',
                clickToSelect: true,
                bgColor: this.getChildContext().muiTheme.palette.primary1Color,
                onSelect: onRowSelect,
                onSelectAll: onSelectAll
            };

            return _react3.default.createElement(
                'div',
                { key: this.props.muiTheme, className: styles.componentPool + ' container' },
                _react3.default.createElement(
                    _Card.Card,
                    null,
                    _react3.default.createElement(_Card.CardTitle, {
                        title: 'Buttons',
                        subtitle: 'Flat, Raised, Floating, Icon'
                    }),
                    _react3.default.createElement(_Card.CardHeader, {
                        title: 'Flat Buttons'
                    }),
                    _react3.default.createElement(
                        _Card.CardText,
                        null,
                        _react3.default.createElement(
                            'div',
                            null,
                            _react3.default.createElement(_frontend_mui.FlatButton, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    label: 'Normal'
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.FlatButton, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    label: 'Primary',
                                    primary: true
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.FlatButton, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    label: 'Secondary',
                                    secondary: true
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.FlatButton, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    label: 'Disabled',
                                    disabled: true
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            })
                        )
                    ),
                    _react3.default.createElement(_Card.CardHeader, {
                        title: 'Raised Buttons'
                    }),
                    _react3.default.createElement(
                        _Card.CardText,
                        null,
                        _react3.default.createElement(
                            'div',
                            null,
                            _react3.default.createElement(_frontend_mui.RaisedButton, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    label: 'Normal'
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.RaisedButton, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    label: 'Primary',
                                    primary: true
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.RaisedButton, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    label: 'Secondary',
                                    secondary: true
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.RaisedButton, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    label: 'Disabled',
                                    disabled: true
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            })
                        )
                    ),
                    _react3.default.createElement(_Card.CardHeader, {
                        title: 'Floating Buttons'
                    }),
                    _react3.default.createElement(
                        _Card.CardText,
                        null,
                        _react3.default.createElement(
                            'div',
                            null,
                            _react3.default.createElement(
                                _frontend_mui.FloatingButton,
                                {
                                    icon: _react3.default.createElement(_add2.default, null),
                                    theme: this.props.muiTheme,
                                    qflProps: {
                                        style: {
                                            display: 'inline-block'
                                        }
                                    }
                                },
                                _react3.default.createElement(_add2.default, null)
                            ),
                            _react3.default.createElement(_frontend_mui.FloatingButton, {
                                icon: _react3.default.createElement(_add2.default, null),
                                theme: this.props.muiTheme,
                                muiProps: {
                                    mini: true
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.FloatingButton, {
                                icon: _react3.default.createElement(_add2.default, null),
                                theme: this.props.muiTheme,
                                muiProps: {
                                    secondary: true
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.FloatingButton, {
                                icon: _react3.default.createElement(_add2.default, null),
                                theme: this.props.muiTheme,
                                muiProps: {
                                    secondary: true,
                                    mini: true
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.FloatingButton, {
                                icon: _react3.default.createElement(_add2.default, null),
                                theme: this.props.muiTheme,
                                muiProps: {
                                    disabled: true
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.FloatingButton, {
                                icon: _react3.default.createElement(_add2.default, null),
                                theme: this.props.muiTheme,
                                muiProps: {
                                    disabled: true,
                                    mini: true
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            })
                        )
                    ),
                    _react3.default.createElement(_Card.CardHeader, {
                        title: 'Icon Buttons (with Badges)'
                    }),
                    _react3.default.createElement(
                        _Card.CardText,
                        null,
                        _react3.default.createElement(
                            'div',
                            null,
                            _react3.default.createElement(
                                _frontend_mui.IconButton,
                                { icon: _react3.default.createElement(_home2.default, null), theme: this.props.muiTheme },
                                _react3.default.createElement(_home2.default, null)
                            ),
                            _react3.default.createElement(_frontend_mui.IconButton, {
                                icon: _react3.default.createElement(_home2.default, null),
                                theme: this.props.muiTheme,
                                badged: true,
                                badgeProps: {
                                    badgeContent: '5',
                                    secondary: true,
                                    badgeStyle: {
                                        top: '12px',
                                        right: '12px'
                                    }
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.IconButton, {
                                icon: _react3.default.createElement(_home2.default, null),
                                theme: this.props.muiTheme,
                                muiProps: {
                                    iconStyle: {
                                        width: 48,
                                        height: 48
                                    },
                                    style: {
                                        width: 96,
                                        height: 96,
                                        padding: 24
                                    }
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.IconButton, {
                                icon: _react3.default.createElement(_home2.default, null),
                                theme: this.props.muiTheme,
                                badged: true,
                                badgeProps: {
                                    badgeContent: '10',
                                    secondary: true,
                                    badgeStyle: {
                                        top: '24px',
                                        right: '24px',
                                        width: '36px',
                                        height: '36px',
                                        fontSize: '16px'
                                    }
                                },
                                muiProps: {
                                    iconStyle: {
                                        width: 48,
                                        height: 48
                                    },
                                    style: {
                                        width: 96,
                                        height: 96,
                                        padding: 24
                                    }
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            })
                        )
                    )
                ),
                _react3.default.createElement(
                    _Card.Card,
                    null,
                    _react3.default.createElement(_Card.CardTitle, {
                        title: 'Date & Time',
                        subtitle: 'Datepicker, Timepicker'
                    }),
                    _react3.default.createElement(_Card.CardHeader, {
                        title: 'Datepicker'
                    }),
                    _react3.default.createElement(
                        _Card.CardText,
                        null,
                        _react3.default.createElement(
                            'div',
                            null,
                            _react3.default.createElement(_frontend_mui.DatePicker, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    hintText: 'Portrait inline dialog',
                                    container: 'inline'
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.DatePicker, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    hintText: 'Landscape modal dialog',
                                    mode: 'landscape'
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            })
                        )
                    ),
                    _react3.default.createElement(_Card.CardHeader, {
                        title: 'Timepicker'
                    }),
                    _react3.default.createElement(
                        _Card.CardText,
                        null,
                        _react3.default.createElement(
                            'div',
                            null,
                            _react3.default.createElement(_frontend_mui.TimePicker, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    format: '24hr',
                                    hintText: '24hr Format'
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            })
                        )
                    )
                ),
                _react3.default.createElement(
                    _Card.Card,
                    null,
                    _react3.default.createElement(_Card.CardTitle, {
                        title: 'Input & Forms',
                        subtitle: 'TextFields (with autoComplete), DropDowns, CheckBoxes, RadioButtons, Toggles, Wizards'
                    }),
                    _react3.default.createElement(_Card.CardHeader, {
                        title: 'TextFields (with autoComplete)'
                    }),
                    _react3.default.createElement(
                        _Card.CardText,
                        null,
                        _react3.default.createElement(
                            'div',
                            null,
                            _react3.default.createElement(_frontend_mui.TextField, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    disabled: true,
                                    hintText: 'Hint Text (disabled)'
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.TextField, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    disabled: true,
                                    hintText: 'Hint Text (disabled)',
                                    errorText: 'This field is required'
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement('br', null),
                            _react3.default.createElement(_frontend_mui.TextField, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    hintText: 'Hint Text'
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.TextField, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    hintText: 'Hint Text',
                                    errorText: 'This field is required'
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement('br', null),
                            _react3.default.createElement(_frontend_mui.TextField, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    hintText: 'Styled Hint Text',
                                    hintStyle: {
                                        color: 'darkorange'
                                    }
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.TextField, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    hintText: 'Styled Hint & Error Text',
                                    hintStyle: {
                                        color: 'darkorange'
                                    },
                                    errorText: 'This field is required',
                                    errorStyle: {
                                        color: 'darkred'
                                    }
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement('br', null),
                            _react3.default.createElement(_frontend_mui.TextField, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    hintText: 'Hint Text',
                                    floatingLabelText: 'Floating Label Text'
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.TextField, {
                                muiProps: {
                                    hintText: 'Hint Text',
                                    floatingLabelText: 'Floating Label Text',
                                    errorText: 'This field is required'
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement('br', null),
                            _react3.default.createElement(_frontend_mui.TextField, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    hintText: 'Password Field',
                                    floatingLabelText: 'Password',
                                    type: 'password'
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.TextField, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    hintText: 'Password Field',
                                    floatingLabelText: 'Password',
                                    errorText: 'This field is required',
                                    type: 'password'
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement('br', null),
                            _react3.default.createElement(_frontend_mui.TextField, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    hintText: 'Message Field',
                                    floatingLabelText: 'MultiLine and FloatingLabel',
                                    multiLine: true,
                                    rows: 2
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement(_frontend_mui.TextField, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    hintText: 'Message Field',
                                    floatingLabelText: 'MultiLine and FloatingLabel',
                                    errorText: 'The error text can be as long as you want, it will wrap.',
                                    multiLine: true,
                                    rows: 2
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            })
                        )
                    ),
                    _react3.default.createElement(_Card.CardHeader, {
                        title: 'DropDowns'
                    }),
                    _react3.default.createElement(
                        _Card.CardText,
                        null,
                        _react3.default.createElement(
                            'div',
                            null,
                            _react3.default.createElement(
                                _frontend_mui.DropDown,
                                {
                                    theme: this.props.muiTheme,
                                    value: 2,
                                    muiProps: {
                                        maxHeight: '150px'
                                    },
                                    qflProps: {
                                        style: {
                                            display: 'inline-block'
                                        }
                                    }
                                },
                                _react3.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'First element' }),
                                _react3.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'Second element' }),
                                _react3.default.createElement(_MenuItem2.default, { value: 3, primaryText: 'Third element' }),
                                _react3.default.createElement(_MenuItem2.default, { value: 4, primaryText: 'Fourth element' }),
                                _react3.default.createElement(_MenuItem2.default, { value: 5, primaryText: 'Fifth element' }),
                                _react3.default.createElement(_MenuItem2.default, { value: 6, primaryText: 'Sixth element' }),
                                _react3.default.createElement(_MenuItem2.default, { value: 7, primaryText: 'Seventh element' }),
                                _react3.default.createElement(_MenuItem2.default, { value: 8, primaryText: 'Eighth element' }),
                                _react3.default.createElement(_MenuItem2.default, { value: 9, primaryText: 'Ninth element' }),
                                _react3.default.createElement(_MenuItem2.default, { value: 10, primaryText: 'Tenth element' })
                            )
                        )
                    ),
                    _react3.default.createElement(_Card.CardHeader, {
                        title: 'CheckBoxes'
                    }),
                    _react3.default.createElement(
                        _Card.CardText,
                        null,
                        _react3.default.createElement(
                            'div',
                            null,
                            _react3.default.createElement(_frontend_mui.CheckBox, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    label: 'Simple'
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement('br', null),
                            _react3.default.createElement(_frontend_mui.CheckBox, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    disabled: true,
                                    label: 'Simple (disabled)'
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement('br', null),
                            _react3.default.createElement(_frontend_mui.CheckBox, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    checkedIcon: _react3.default.createElement(_favorite2.default, null),
                                    uncheckedIcon: _react3.default.createElement(_favoriteBorder2.default, null),
                                    label: 'Custom icon'
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            })
                        )
                    ),
                    _react3.default.createElement(_Card.CardHeader, {
                        title: 'RadioButtons'
                    }),
                    _react3.default.createElement(
                        _Card.CardText,
                        null,
                        _react3.default.createElement(
                            'div',
                            null,
                            _react3.default.createElement(
                                _frontend_mui.RadioBox,
                                {
                                    theme: this.props.muiTheme,
                                    muiProps: {
                                        name: 'shipSpeed',
                                        defaultSelected: 'second'
                                    },
                                    qflProps: {
                                        style: {
                                            display: 'inline-block'
                                        }
                                    }
                                },
                                _react3.default.createElement(_RadioButton2.default, { value: 'first', label: 'Simple first' }),
                                _react3.default.createElement(_RadioButton2.default, { value: 'second', label: 'Simple second' }),
                                _react3.default.createElement(_RadioButton2.default, {
                                    value: 'third',
                                    label: 'Custom third',
                                    checkedIcon: _react3.default.createElement(_favorite2.default, null),
                                    uncheckedIcon: _react3.default.createElement(_favoriteBorder2.default, null)
                                }),
                                _react3.default.createElement(_RadioButton2.default, { disabled: true, value: 'fourth', label: 'Simple fourth (disabled)' })
                            )
                        )
                    ),
                    _react3.default.createElement(_Card.CardHeader, {
                        title: 'Toggles'
                    }),
                    _react3.default.createElement(
                        _Card.CardText,
                        null,
                        _react3.default.createElement(
                            'div',
                            null,
                            _react3.default.createElement(_frontend_mui.Toggle, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    label: 'Simple',
                                    defaultToggled: true,
                                    style: {
                                        maxWidth: '200px'
                                    }
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            }),
                            _react3.default.createElement('br', null),
                            _react3.default.createElement(_frontend_mui.Toggle, {
                                theme: this.props.muiTheme,
                                muiProps: {
                                    label: 'Simple (disabled)',
                                    disabled: true,
                                    style: {
                                        maxWidth: '200px'
                                    }
                                },
                                qflProps: {
                                    style: {
                                        display: 'inline-block'
                                    }
                                }
                            })
                        )
                    ),
                    _react3.default.createElement(_Card.CardTitle, {
                        title: 'AutoComplete'
                    }),
                    _react3.default.createElement(
                        _Card.CardText,
                        null,
                        _react3.default.createElement(_frontend_mui.AutoComplete, {
                            theme: this.props.muiTheme,
                            value: '',
                            items: [{
                                text: 'First element',
                                value: _react3.default.createElement(_MenuItem2.default, {
                                    primaryText: 'First element',
                                    secondaryText: '1',
                                    innerDivStyle: { color: 'darkred' }
                                })
                            }, {
                                text: 'Second element',
                                value: _react3.default.createElement(_MenuItem2.default, {
                                    primaryText: 'Second element',
                                    secondaryText: '2',
                                    innerDivStyle: { color: 'darkorange' }
                                })
                            }, {
                                text: 'Third element',
                                value: _react3.default.createElement(_MenuItem2.default, {
                                    primaryText: 'Third element',
                                    secondaryText: '3',
                                    innerDivStyle: { color: 'darkgreen' }
                                })
                            }],
                            muiProps: {
                                hintText: 'Example styled menu items (autoComplete)',
                                hintStyle: {
                                    color: 'darkorange'
                                },
                                filter: filter
                            },
                            qflProps: {
                                style: {
                                    display: 'inline-block'
                                }
                            }
                        }),
                        _react3.default.createElement('br', null),
                        _react3.default.createElement(_frontend_mui.AutoComplete, {
                            theme: this.props.muiTheme,
                            value: '',
                            items: ['First element', 'Second element', 'Third element'],
                            muiProps: {
                                hintText: 'Example items (autoComplete)',
                                filter: filter
                            },
                            qflProps: {
                                style: {
                                    display: 'inline-block'
                                }
                            }

                        })
                    ),
                    _react3.default.createElement(_Card.CardTitle, {
                        title: 'Tables'
                    }),
                    _react3.default.createElement(
                        _Card.CardText,
                        null,
                        _react3.default.createElement(
                            'div',
                            null,
                            _react3.default.createElement(_frontend_mui.Table, {
                                theme: this.props.muiTheme,
                                rbtProps: {
                                    data: data,
                                    columnFilter: true,
                                    search: true,
                                    cellEdit: cellEditProp,
                                    striped: true,
                                    hover: true,
                                    condensed: true,
                                    pagination: true,
                                    insertRow: true,
                                    deleteRow: true,
                                    selectRow: selectRowProp
                                },
                                thcSchema: columnSchema
                            })
                        )
                    )
                )
            );
        }
    }]);
    return ComponentPool;
}(_react2.Component), _class.propTypes = {
    muiTheme: _react2.PropTypes.string
}, _temp));

ComponentPool.childContextTypes = {
    muiTheme: _react3.default.PropTypes.object
};

ComponentPool.defaultProps = {
    muiTheme: 'Default'
};

try {
    (0, _reactTapEventPlugin2.default)();
} catch (e) {
    console.log(e.message);
}

var DefaultComponentPool = _wrapComponent('DefaultComponentPool')(function (_Component2) {
    (0, _inherits3.default)(DefaultComponentPool, _Component2);

    function DefaultComponentPool() {
        (0, _classCallCheck3.default)(this, DefaultComponentPool);
        return (0, _possibleConstructorReturn3.default)(this, (DefaultComponentPool.__proto__ || Object.getPrototypeOf(DefaultComponentPool)).call(this));
    }

    (0, _createClass3.default)(DefaultComponentPool, [{
        key: 'render',
        value: function render() {
            return _react3.default.createElement(ComponentPool, { muiTheme: 'Default' });
        }
    }]);
    return DefaultComponentPool;
}(_react2.Component));

exports.default = DefaultComponentPool;
module.exports = exports['default'];
