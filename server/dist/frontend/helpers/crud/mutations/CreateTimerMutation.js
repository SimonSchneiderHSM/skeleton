'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp; /* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

var _reactRelay = require('react-relay');

var _reactRelay2 = _interopRequireDefault(_reactRelay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateTimerMutation = (_temp = _class = function (_Relay$Mutation) {
    (0, _inherits3.default)(CreateTimerMutation, _Relay$Mutation);

    function CreateTimerMutation() {
        (0, _classCallCheck3.default)(this, CreateTimerMutation);
        return (0, _possibleConstructorReturn3.default)(this, (CreateTimerMutation.__proto__ || Object.getPrototypeOf(CreateTimerMutation)).apply(this, arguments));
    }

    (0, _createClass3.default)(CreateTimerMutation, [{
        key: 'getMutation',
        value: function getMutation() {
            return function () {
                return {
                    calls: [{
                        kind: 'Call',
                        metadata: {},
                        name: 'createTimer',
                        value: {
                            kind: 'CallVariable',
                            callVariableName: 'input'
                        }
                    }],
                    children: [{
                        fieldName: 'clientMutationId',
                        kind: 'Field',
                        metadata: {
                            isGenerated: true,
                            isRequisite: true
                        },
                        type: 'String'
                    }],
                    kind: 'Mutation',
                    metadata: {
                        inputType: 'CreateTimerInput!'
                    },
                    name: 'CreateTimerMutation',
                    responseType: 'CreateTimerPayload'
                };
            }();
        }
    }, {
        key: 'getVariables',
        value: function getVariables() {
            return {
                id: this.props.id,
                timerType: this.props.timerType,
                timerIsoString: this.props.timerIsoString,
                timerRule: this.props.timerRule,
                eventName: this.props.eventName,
                lastElapsed: this.props.lastElapsed
            };
        }
    }, {
        key: 'getFatQuery',
        value: function getFatQuery() {
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
                            calls: [{
                                kind: 'Call',
                                metadata: {
                                    type: 'Int'
                                },
                                name: 'first',
                                value: {
                                    kind: 'CallValue',
                                    callValue: 0
                                }
                            }],
                            children: [{
                                children: [{
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }, {
                                        fieldName: 'timerType',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'Float'
                                    }, {
                                        fieldName: 'timerIsoString',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'timerRule',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'eventName',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'lastElapsed',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'Date'
                                    }],
                                    fieldName: 'node',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true,
                                        isRequisite: true
                                    },
                                    type: 'Timer'
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
                                type: 'TimerEdge'
                            }, {
                                fieldName: 'totalCount',
                                kind: 'Field',
                                metadata: {},
                                type: 'Int'
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
                            fieldName: 'TimerConnection',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isConnection: true,
                                isFindable: true
                            },
                            type: 'TimerConnection'
                        }],
                        fieldName: 'catalog',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            inferredRootCallName: 'node',
                            inferredPrimaryKey: 'id'
                        },
                        type: 'Catalog'
                    }, {
                        children: [{
                            fieldName: 'cursor',
                            kind: 'Field',
                            metadata: {
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'String'
                        }, {
                            children: [{
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
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'Timer'
                        }],
                        fieldName: 'entityEdge',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true
                        },
                        type: 'TimerEdge'
                    }],
                    id: _reactRelay2.default.QL.__id(),
                    kind: 'Fragment',
                    metadata: {},
                    name: 'CreateTimerMutation_ValueRelayQL',
                    type: 'CreateTimerPayload'
                };
            }();
        }
    }, {
        key: 'getConfigs',
        value: function getConfigs() {
            return [{
                type: 'FIELDS_CHANGE',
                fieldIDs: {
                    catalog: this.props.catalog.id
                }
            }, {
                type: 'RANGE_ADD',
                parentName: 'catalog',
                parentID: this.props.catalog.id,
                connectionName: 'TimerConnection',
                edgeName: 'entityEdge',
                rangeBehaviors: function rangeBehaviors(connectionArgs) {
                    return 'refetch';
                }
            }];
        }
    }, {
        key: 'getOptimisticResponse',
        value: function getOptimisticResponse() {
            var _props = this.props,
                id = _props.id,
                timerType = _props.timerType,
                timerIsoString = _props.timerIsoString,
                timerRule = _props.timerRule,
                eventName = _props.eventName,
                lastElapsed = _props.lastElapsed,
                catalog = _props.catalog;
            var totalCount = catalog.TimerConnection.totalCount;


            return {
                catalog: {
                    TimerConnection: {
                        totalCount: ++totalCount
                    },
                    id: catalog.id
                },
                entityEdge: {
                    node: {
                        id: id,
                        timerType: timerType,
                        timerIsoString: timerIsoString,
                        timerRule: timerRule,
                        eventName: eventName,
                        lastElapsed: lastElapsed
                    }
                }
            };
        }
    }]);
    return CreateTimerMutation;
}(_reactRelay2.default.Mutation), _class.fragments = {
    catalog: function catalog() {
        return function () {
            return {
                children: [{
                    fieldName: 'id',
                    kind: 'Field',
                    metadata: {
                        isRequisite: true
                    },
                    type: 'ID'
                }, {
                    children: [{
                        fieldName: 'totalCount',
                        kind: 'Field',
                        metadata: {},
                        type: 'Int'
                    }],
                    fieldName: 'TimerConnection',
                    kind: 'Field',
                    metadata: {
                        canHaveSubselections: true,
                        isConnection: true,
                        isFindable: true
                    },
                    type: 'TimerConnection'
                }],
                id: _reactRelay2.default.QL.__id(),
                kind: 'Fragment',
                metadata: {},
                name: 'CreateTimerMutation_CatalogRelayQL',
                type: 'Catalog'
            };
        }();
    }
}, _temp);
exports.default = CreateTimerMutation;
module.exports = exports['default'];
