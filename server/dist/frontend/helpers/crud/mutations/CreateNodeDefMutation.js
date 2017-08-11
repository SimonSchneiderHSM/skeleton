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

var CreateNodeDefMutation = (_temp = _class = function (_Relay$Mutation) {
    (0, _inherits3.default)(CreateNodeDefMutation, _Relay$Mutation);

    function CreateNodeDefMutation() {
        (0, _classCallCheck3.default)(this, CreateNodeDefMutation);
        return (0, _possibleConstructorReturn3.default)(this, (CreateNodeDefMutation.__proto__ || Object.getPrototypeOf(CreateNodeDefMutation)).apply(this, arguments));
    }

    (0, _createClass3.default)(CreateNodeDefMutation, [{
        key: 'getMutation',
        value: function getMutation() {
            return function () {
                return {
                    calls: [{
                        kind: 'Call',
                        metadata: {},
                        name: 'createNodeDef',
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
                        inputType: 'CreateNodeDefInput!'
                    },
                    name: 'CreateNodeDefMutation',
                    responseType: 'CreateNodeDefPayload'
                };
            }();
        }
    }, {
        key: 'getVariables',
        value: function getVariables() {
            return {
                id: this.props.id,
                name: this.props.name,
                key: this.props.key,
                processDef: this.props.processDef,
                lane: this.props.lane,
                type: this.props.type,
                extensions: this.props.extensions,
                attachedToNode: this.props.attachedToNode,
                events: this.props.events,
                script: this.props.script,
                eventType: this.props.eventType,
                cancelActivity: this.props.cancelActivity,
                subProcessKey: this.props.subProcessKey,
                subProcessDef: this.props.subProcessDef,
                counter: this.props.counter,
                timerDefinitionType: this.props.timerDefinitionType,
                timerDefinition: this.props.timerDefinition,
                startContext: this.props.startContext,
                startContextEntityType: this.props.startContextEntityType,
                signal: this.props.signal,
                message: this.props.message,
                condition: this.props.condition,
                errorName: this.props.errorName,
                errorCode: this.props.errorCode
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
                                        fieldName: 'name',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'key',
                                        kind: 'Field',
                                        metadata: {},
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
                                        fieldName: 'processDef',
                                        kind: 'Field',
                                        metadata: {
                                            canHaveSubselections: true
                                        },
                                        type: 'ProcessDef'
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
                                        fieldName: 'lane',
                                        kind: 'Field',
                                        metadata: {
                                            canHaveSubselections: true
                                        },
                                        type: 'Lane'
                                    }, {
                                        fieldName: 'type',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'extensions',
                                        kind: 'Field',
                                        metadata: {},
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
                                        fieldName: 'attachedToNode',
                                        kind: 'Field',
                                        metadata: {
                                            canHaveSubselections: true
                                        },
                                        type: 'NodeDef'
                                    }, {
                                        fieldName: 'events',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'script',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'eventType',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'cancelActivity',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'Boolean'
                                    }, {
                                        fieldName: 'subProcessKey',
                                        kind: 'Field',
                                        metadata: {},
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
                                        fieldName: 'subProcessDef',
                                        kind: 'Field',
                                        metadata: {
                                            canHaveSubselections: true
                                        },
                                        type: 'NodeDef'
                                    }, {
                                        fieldName: 'counter',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'Float'
                                    }, {
                                        fieldName: 'timerDefinitionType',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'Float'
                                    }, {
                                        fieldName: 'timerDefinition',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'startContext',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'startContextEntityType',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'signal',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'message',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'condition',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'errorName',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'errorCode',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }],
                                    fieldName: 'node',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true,
                                        isRequisite: true
                                    },
                                    type: 'NodeDef'
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
                                type: 'NodeDefEdge'
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
                            fieldName: 'NodeDefConnection',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isConnection: true,
                                isFindable: true
                            },
                            type: 'NodeDefConnection'
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
                            type: 'NodeDef'
                        }],
                        fieldName: 'entityEdge',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true
                        },
                        type: 'NodeDefEdge'
                    }],
                    id: _reactRelay2.default.QL.__id(),
                    kind: 'Fragment',
                    metadata: {},
                    name: 'CreateNodeDefMutation_ValueRelayQL',
                    type: 'CreateNodeDefPayload'
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
                connectionName: 'NodeDefConnection',
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
                name = _props.name,
                key = _props.key,
                processDef = _props.processDef,
                lane = _props.lane,
                type = _props.type,
                extensions = _props.extensions,
                attachedToNode = _props.attachedToNode,
                events = _props.events,
                script = _props.script,
                eventType = _props.eventType,
                cancelActivity = _props.cancelActivity,
                subProcessKey = _props.subProcessKey,
                subProcessDef = _props.subProcessDef,
                counter = _props.counter,
                timerDefinitionType = _props.timerDefinitionType,
                timerDefinition = _props.timerDefinition,
                startContext = _props.startContext,
                startContextEntityType = _props.startContextEntityType,
                signal = _props.signal,
                message = _props.message,
                condition = _props.condition,
                errorName = _props.errorName,
                errorCode = _props.errorCode,
                catalog = _props.catalog;
            var totalCount = catalog.NodeDefConnection.totalCount;


            return {
                catalog: {
                    NodeDefConnection: {
                        totalCount: ++totalCount
                    },
                    id: catalog.id
                },
                entityEdge: {
                    node: {
                        id: id,
                        name: name,
                        key: key,
                        processDef: processDef,
                        lane: lane,
                        type: type,
                        extensions: extensions,
                        attachedToNode: attachedToNode,
                        events: events,
                        script: script,
                        eventType: eventType,
                        cancelActivity: cancelActivity,
                        subProcessKey: subProcessKey,
                        subProcessDef: subProcessDef,
                        counter: counter,
                        timerDefinitionType: timerDefinitionType,
                        timerDefinition: timerDefinition,
                        startContext: startContext,
                        startContextEntityType: startContextEntityType,
                        signal: signal,
                        message: message,
                        condition: condition,
                        errorName: errorName,
                        errorCode: errorCode
                    }
                }
            };
        }
    }]);
    return CreateNodeDefMutation;
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
                    fieldName: 'NodeDefConnection',
                    kind: 'Field',
                    metadata: {
                        canHaveSubselections: true,
                        isConnection: true,
                        isFindable: true
                    },
                    type: 'NodeDefConnection'
                }],
                id: _reactRelay2.default.QL.__id(),
                kind: 'Fragment',
                metadata: {},
                name: 'CreateNodeDefMutation_CatalogRelayQL',
                type: 'Catalog'
            };
        }();
    }
}, _temp);
exports.default = CreateNodeDefMutation;
module.exports = exports['default'];
