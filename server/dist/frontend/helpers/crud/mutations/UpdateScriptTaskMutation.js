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

var UdpateScriptTaskMutation = (_temp = _class = function (_Relay$Mutation) {
    (0, _inherits3.default)(UdpateScriptTaskMutation, _Relay$Mutation);

    function UdpateScriptTaskMutation() {
        (0, _classCallCheck3.default)(this, UdpateScriptTaskMutation);
        return (0, _possibleConstructorReturn3.default)(this, (UdpateScriptTaskMutation.__proto__ || Object.getPrototypeOf(UdpateScriptTaskMutation)).apply(this, arguments));
    }

    (0, _createClass3.default)(UdpateScriptTaskMutation, [{
        key: 'getMutation',
        value: function getMutation() {
            return function () {
                return {
                    calls: [{
                        kind: 'Call',
                        metadata: {},
                        name: 'updateScriptTask',
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
                        inputType: 'UpdateScriptTaskInput!'
                    },
                    name: 'UpdateScriptTaskMutation',
                    responseType: 'UpdateScriptTaskPayload'
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
                            fieldName: 'process',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true
                            },
                            type: 'Process'
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
                            fieldName: 'nodeDef',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true
                            },
                            type: 'NodeDef'
                        }, {
                            fieldName: 'type',
                            kind: 'Field',
                            metadata: {},
                            type: 'String'
                        }, {
                            fieldName: 'state',
                            kind: 'Field',
                            metadata: {},
                            type: 'String'
                        }, {
                            fieldName: 'participant',
                            kind: 'Field',
                            metadata: {},
                            type: 'String'
                        }, {
                            fieldName: 'application',
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
                            fieldName: 'processToken',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true
                            },
                            type: 'ProcessToken'
                        }, {
                            fieldName: 'instanceCounter',
                            kind: 'Field',
                            metadata: {},
                            type: 'Float'
                        }, {
                            fieldName: 'script',
                            kind: 'Field',
                            metadata: {},
                            type: 'String'
                        }],
                        fieldName: 'entity',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true
                        },
                        type: 'ScriptTask'
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
                                        fieldName: 'process',
                                        kind: 'Field',
                                        metadata: {
                                            canHaveSubselections: true
                                        },
                                        type: 'Process'
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
                                        fieldName: 'nodeDef',
                                        kind: 'Field',
                                        metadata: {
                                            canHaveSubselections: true
                                        },
                                        type: 'NodeDef'
                                    }, {
                                        fieldName: 'type',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'state',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'participant',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'application',
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
                                        fieldName: 'processToken',
                                        kind: 'Field',
                                        metadata: {
                                            canHaveSubselections: true
                                        },
                                        type: 'ProcessToken'
                                    }, {
                                        fieldName: 'instanceCounter',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'Float'
                                    }, {
                                        fieldName: 'script',
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
                                    type: 'ScriptTask'
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
                                type: 'ScriptTaskEdge'
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
                            fieldName: 'ScriptTaskConnection',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isConnection: true,
                                isFindable: true
                            },
                            type: 'ScriptTaskConnection'
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
                    name: 'UpdateScriptTaskMutation_ValueRelayQL',
                    type: 'UpdateScriptTaskPayload'
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
                    entity: this.props.scripttask.id
                }
            }];
        }
    }, {
        key: 'getVariables',
        value: function getVariables() {
            return {

                id: this.props.updatedScriptTask.id,

                name: this.props.updatedScriptTask.name,

                key: this.props.updatedScriptTask.key,

                process: this.props.updatedScriptTask.process,

                nodeDef: this.props.updatedScriptTask.nodeDef,

                type: this.props.updatedScriptTask.type,

                state: this.props.updatedScriptTask.state,

                participant: this.props.updatedScriptTask.participant,

                application: this.props.updatedScriptTask.application,

                processToken: this.props.updatedScriptTask.processToken,

                instanceCounter: this.props.updatedScriptTask.instanceCounter,

                script: this.props.updatedScriptTask.script
            };
        }
    }, {
        key: 'getOptimisticResponse',
        value: function getOptimisticResponse() {
            return {
                entity: {

                    id: this.props.updatedScriptTask.id,

                    name: this.props.updatedScriptTask.name,

                    key: this.props.updatedScriptTask.key,

                    process: this.props.updatedScriptTask.process,

                    nodeDef: this.props.updatedScriptTask.nodeDef,

                    type: this.props.updatedScriptTask.type,

                    state: this.props.updatedScriptTask.state,

                    participant: this.props.updatedScriptTask.participant,

                    application: this.props.updatedScriptTask.application,

                    processToken: this.props.updatedScriptTask.processToken,

                    instanceCounter: this.props.updatedScriptTask.instanceCounter,

                    script: this.props.updatedScriptTask.script
                }
            };
        }
    }]);
    return UdpateScriptTaskMutation;
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
                    fieldName: 'ScriptTaskConnection',
                    kind: 'Field',
                    metadata: {
                        canHaveSubselections: true,
                        isConnection: true,
                        isFindable: true
                    },
                    type: 'ScriptTaskConnection'
                }],
                id: _reactRelay2.default.QL.__id(),
                kind: 'Fragment',
                metadata: {},
                name: 'UpdateScriptTaskMutation_CatalogRelayQL',
                type: 'Catalog'
            };
        }();
    },
    scripttask: function scripttask() {
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
                    fieldName: 'process',
                    kind: 'Field',
                    metadata: {
                        canHaveSubselections: true
                    },
                    type: 'Process'
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
                    fieldName: 'nodeDef',
                    kind: 'Field',
                    metadata: {
                        canHaveSubselections: true
                    },
                    type: 'NodeDef'
                }, {
                    fieldName: 'type',
                    kind: 'Field',
                    metadata: {},
                    type: 'String'
                }, {
                    fieldName: 'state',
                    kind: 'Field',
                    metadata: {},
                    type: 'String'
                }, {
                    fieldName: 'participant',
                    kind: 'Field',
                    metadata: {},
                    type: 'String'
                }, {
                    fieldName: 'application',
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
                    fieldName: 'processToken',
                    kind: 'Field',
                    metadata: {
                        canHaveSubselections: true
                    },
                    type: 'ProcessToken'
                }, {
                    fieldName: 'instanceCounter',
                    kind: 'Field',
                    metadata: {},
                    type: 'Float'
                }, {
                    fieldName: 'script',
                    kind: 'Field',
                    metadata: {},
                    type: 'String'
                }],
                id: _reactRelay2.default.QL.__id(),
                kind: 'Fragment',
                metadata: {},
                name: 'UpdateScriptTaskMutation_ScripttaskRelayQL',
                type: 'ScriptTask'
            };
        }();
    }
}, _temp);
exports.default = UdpateScriptTaskMutation;
module.exports = exports['default'];
