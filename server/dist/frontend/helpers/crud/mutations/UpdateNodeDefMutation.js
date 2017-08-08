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

var UdpateNodeDefMutation = (_temp = _class = function (_Relay$Mutation) {
    (0, _inherits3.default)(UdpateNodeDefMutation, _Relay$Mutation);

    function UdpateNodeDefMutation() {
        (0, _classCallCheck3.default)(this, UdpateNodeDefMutation);
        return (0, _possibleConstructorReturn3.default)(this, (UdpateNodeDefMutation.__proto__ || Object.getPrototypeOf(UdpateNodeDefMutation)).apply(this, arguments));
    }

    (0, _createClass3.default)(UdpateNodeDefMutation, [{
        key: 'getMutation',
        value: function getMutation() {
            return function () {
                return {
                    calls: [{
                        kind: 'Call',
                        metadata: {},
                        name: 'updateNodeDef',
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
                        inputType: 'UpdateNodeDefInput!'
                    },
                    name: 'UpdateNodeDefMutation',
                    responseType: 'UpdateNodeDefPayload'
                };
            }();
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
                        fieldName: 'entity',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true
                        },
                        type: 'NodeDef'
                    }, {
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
                    }],
                    id: _reactRelay2.default.QL.__id(),
                    kind: 'Fragment',
                    metadata: {},
                    name: 'UpdateNodeDefMutation_ValueRelayQL',
                    type: 'UpdateNodeDefPayload'
                };
            }();
        }
    }, {
        key: 'getConfigs',
        value: function getConfigs() {
            return [{
                type: 'FIELDS_CHANGE',
                fieldIDs: {
                    catalog: this.props.catalog.id,
                    entity: this.props.nodedef.id
                }
            }];
        }
    }, {
        key: 'getVariables',
        value: function getVariables() {
            return {

                id: this.props.updatedNodeDef.id,

                name: this.props.updatedNodeDef.name,

                key: this.props.updatedNodeDef.key,

                processDef: this.props.updatedNodeDef.processDef,

                lane: this.props.updatedNodeDef.lane,

                type: this.props.updatedNodeDef.type,

                extensions: this.props.updatedNodeDef.extensions,

                attachedToNode: this.props.updatedNodeDef.attachedToNode,

                events: this.props.updatedNodeDef.events,

                script: this.props.updatedNodeDef.script,

                eventType: this.props.updatedNodeDef.eventType,

                cancelActivity: this.props.updatedNodeDef.cancelActivity,

                subProcessKey: this.props.updatedNodeDef.subProcessKey,

                subProcessDef: this.props.updatedNodeDef.subProcessDef,

                counter: this.props.updatedNodeDef.counter,

                timerDefinitionType: this.props.updatedNodeDef.timerDefinitionType,

                timerDefinition: this.props.updatedNodeDef.timerDefinition,

                startContext: this.props.updatedNodeDef.startContext,

                startContextEntityType: this.props.updatedNodeDef.startContextEntityType,

                signal: this.props.updatedNodeDef.signal,

                message: this.props.updatedNodeDef.message,

                condition: this.props.updatedNodeDef.condition,

                errorName: this.props.updatedNodeDef.errorName,

                errorCode: this.props.updatedNodeDef.errorCode
            };
        }
    }, {
        key: 'getOptimisticResponse',
        value: function getOptimisticResponse() {
            return {
                entity: {

                    id: this.props.updatedNodeDef.id,

                    name: this.props.updatedNodeDef.name,

                    key: this.props.updatedNodeDef.key,

                    processDef: this.props.updatedNodeDef.processDef,

                    lane: this.props.updatedNodeDef.lane,

                    type: this.props.updatedNodeDef.type,

                    extensions: this.props.updatedNodeDef.extensions,

                    attachedToNode: this.props.updatedNodeDef.attachedToNode,

                    events: this.props.updatedNodeDef.events,

                    script: this.props.updatedNodeDef.script,

                    eventType: this.props.updatedNodeDef.eventType,

                    cancelActivity: this.props.updatedNodeDef.cancelActivity,

                    subProcessKey: this.props.updatedNodeDef.subProcessKey,

                    subProcessDef: this.props.updatedNodeDef.subProcessDef,

                    counter: this.props.updatedNodeDef.counter,

                    timerDefinitionType: this.props.updatedNodeDef.timerDefinitionType,

                    timerDefinition: this.props.updatedNodeDef.timerDefinition,

                    startContext: this.props.updatedNodeDef.startContext,

                    startContextEntityType: this.props.updatedNodeDef.startContextEntityType,

                    signal: this.props.updatedNodeDef.signal,

                    message: this.props.updatedNodeDef.message,

                    condition: this.props.updatedNodeDef.condition,

                    errorName: this.props.updatedNodeDef.errorName,

                    errorCode: this.props.updatedNodeDef.errorCode
                }
            };
        }
    }]);
    return UdpateNodeDefMutation;
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
                name: 'UpdateNodeDefMutation_CatalogRelayQL',
                type: 'Catalog'
            };
        }();
    },
    nodedef: function nodedef() {
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
                id: _reactRelay2.default.QL.__id(),
                kind: 'Fragment',
                metadata: {},
                name: 'UpdateNodeDefMutation_NodedefRelayQL',
                type: 'NodeDef'
            };
        }();
    }
}, _temp);
exports.default = UdpateNodeDefMutation;
module.exports = exports['default'];
