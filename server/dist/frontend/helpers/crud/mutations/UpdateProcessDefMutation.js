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

var UdpateProcessDefMutation = (_temp = _class = function (_Relay$Mutation) {
    (0, _inherits3.default)(UdpateProcessDefMutation, _Relay$Mutation);

    function UdpateProcessDefMutation() {
        (0, _classCallCheck3.default)(this, UdpateProcessDefMutation);
        return (0, _possibleConstructorReturn3.default)(this, (UdpateProcessDefMutation.__proto__ || Object.getPrototypeOf(UdpateProcessDefMutation)).apply(this, arguments));
    }

    (0, _createClass3.default)(UdpateProcessDefMutation, [{
        key: 'getMutation',
        value: function getMutation() {
            return function () {
                return {
                    calls: [{
                        kind: 'Call',
                        metadata: {},
                        name: 'updateProcessDef',
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
                        inputType: 'UpdateProcessDefInput!'
                    },
                    name: 'UpdateProcessDefMutation',
                    responseType: 'UpdateProcessDefPayload'
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
                            fieldName: 'defId',
                            kind: 'Field',
                            metadata: {},
                            type: 'String'
                        }, {
                            fieldName: 'xml',
                            kind: 'Field',
                            metadata: {},
                            type: 'String'
                        }, {
                            fieldName: 'extensions',
                            kind: 'Field',
                            metadata: {},
                            type: 'String'
                        }, {
                            fieldName: 'internalName',
                            kind: 'Field',
                            metadata: {},
                            type: 'String'
                        }, {
                            fieldName: 'path',
                            kind: 'Field',
                            metadata: {},
                            type: 'String'
                        }, {
                            fieldName: 'category',
                            kind: 'Field',
                            metadata: {},
                            type: 'String'
                        }, {
                            fieldName: 'module',
                            kind: 'Field',
                            metadata: {},
                            type: 'String'
                        }, {
                            fieldName: 'readonly',
                            kind: 'Field',
                            metadata: {},
                            type: 'Boolean'
                        }, {
                            fieldName: 'version',
                            kind: 'Field',
                            metadata: {},
                            type: 'String'
                        }, {
                            fieldName: 'counter',
                            kind: 'Field',
                            metadata: {},
                            type: 'Float'
                        }, {
                            fieldName: 'nodeDefCollection',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isConnection: true,
                                isFindable: true
                            },
                            type: 'ProcessDefEntity_nodeDefCollection_ConnectionConnection'
                        }, {
                            fieldName: 'flowDefCollection',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isConnection: true,
                                isFindable: true
                            },
                            type: 'ProcessDefEntity_flowDefCollection_ConnectionConnection'
                        }, {
                            fieldName: 'laneCollection',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isConnection: true,
                                isFindable: true
                            },
                            type: 'ProcessDefEntity_laneCollection_ConnectionConnection'
                        }],
                        fieldName: 'entity',
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
                                        fieldName: 'defId',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'xml',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'extensions',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'internalName',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'path',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'category',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'module',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'readonly',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'Boolean'
                                    }, {
                                        fieldName: 'version',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'counter',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'Float'
                                    }, {
                                        fieldName: 'nodeDefCollection',
                                        kind: 'Field',
                                        metadata: {
                                            canHaveSubselections: true,
                                            isConnection: true,
                                            isFindable: true
                                        },
                                        type: 'ProcessDefEntity_nodeDefCollection_ConnectionConnection'
                                    }, {
                                        fieldName: 'flowDefCollection',
                                        kind: 'Field',
                                        metadata: {
                                            canHaveSubselections: true,
                                            isConnection: true,
                                            isFindable: true
                                        },
                                        type: 'ProcessDefEntity_flowDefCollection_ConnectionConnection'
                                    }, {
                                        fieldName: 'laneCollection',
                                        kind: 'Field',
                                        metadata: {
                                            canHaveSubselections: true,
                                            isConnection: true,
                                            isFindable: true
                                        },
                                        type: 'ProcessDefEntity_laneCollection_ConnectionConnection'
                                    }],
                                    fieldName: 'node',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true,
                                        isRequisite: true
                                    },
                                    type: 'ProcessDef'
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
                                type: 'ProcessDefEdge'
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
                            fieldName: 'ProcessDefConnection',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isConnection: true,
                                isFindable: true
                            },
                            type: 'ProcessDefConnection'
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
                    name: 'UpdateProcessDefMutation_ValueRelayQL',
                    type: 'UpdateProcessDefPayload'
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
                    entity: this.props.processdef.id
                }
            }];
        }
    }, {
        key: 'getVariables',
        value: function getVariables() {
            return {

                id: this.props.updatedProcessDef.id,

                name: this.props.updatedProcessDef.name,

                key: this.props.updatedProcessDef.key,

                defId: this.props.updatedProcessDef.defId,

                xml: this.props.updatedProcessDef.xml,

                extensions: this.props.updatedProcessDef.extensions,

                internalName: this.props.updatedProcessDef.internalName,

                path: this.props.updatedProcessDef.path,

                category: this.props.updatedProcessDef.category,

                module: this.props.updatedProcessDef.module,

                readonly: this.props.updatedProcessDef.readonly,

                version: this.props.updatedProcessDef.version,

                counter: this.props.updatedProcessDef.counter,

                nodeDefCollection: this.props.updatedProcessDef.nodeDefCollection,

                flowDefCollection: this.props.updatedProcessDef.flowDefCollection,

                laneCollection: this.props.updatedProcessDef.laneCollection
            };
        }
    }, {
        key: 'getOptimisticResponse',
        value: function getOptimisticResponse() {
            return {
                entity: {

                    id: this.props.updatedProcessDef.id,

                    name: this.props.updatedProcessDef.name,

                    key: this.props.updatedProcessDef.key,

                    defId: this.props.updatedProcessDef.defId,

                    xml: this.props.updatedProcessDef.xml,

                    extensions: this.props.updatedProcessDef.extensions,

                    internalName: this.props.updatedProcessDef.internalName,

                    path: this.props.updatedProcessDef.path,

                    category: this.props.updatedProcessDef.category,

                    module: this.props.updatedProcessDef.module,

                    readonly: this.props.updatedProcessDef.readonly,

                    version: this.props.updatedProcessDef.version,

                    counter: this.props.updatedProcessDef.counter,

                    nodeDefCollection: this.props.updatedProcessDef.nodeDefCollection,

                    flowDefCollection: this.props.updatedProcessDef.flowDefCollection,

                    laneCollection: this.props.updatedProcessDef.laneCollection
                }
            };
        }
    }]);
    return UdpateProcessDefMutation;
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
                    fieldName: 'ProcessDefConnection',
                    kind: 'Field',
                    metadata: {
                        canHaveSubselections: true,
                        isConnection: true,
                        isFindable: true
                    },
                    type: 'ProcessDefConnection'
                }],
                id: _reactRelay2.default.QL.__id(),
                kind: 'Fragment',
                metadata: {},
                name: 'UpdateProcessDefMutation_CatalogRelayQL',
                type: 'Catalog'
            };
        }();
    },
    processdef: function processdef() {
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
                    fieldName: 'defId',
                    kind: 'Field',
                    metadata: {},
                    type: 'String'
                }, {
                    fieldName: 'xml',
                    kind: 'Field',
                    metadata: {},
                    type: 'String'
                }, {
                    fieldName: 'extensions',
                    kind: 'Field',
                    metadata: {},
                    type: 'String'
                }, {
                    fieldName: 'internalName',
                    kind: 'Field',
                    metadata: {},
                    type: 'String'
                }, {
                    fieldName: 'path',
                    kind: 'Field',
                    metadata: {},
                    type: 'String'
                }, {
                    fieldName: 'category',
                    kind: 'Field',
                    metadata: {},
                    type: 'String'
                }, {
                    fieldName: 'module',
                    kind: 'Field',
                    metadata: {},
                    type: 'String'
                }, {
                    fieldName: 'readonly',
                    kind: 'Field',
                    metadata: {},
                    type: 'Boolean'
                }, {
                    fieldName: 'version',
                    kind: 'Field',
                    metadata: {},
                    type: 'String'
                }, {
                    fieldName: 'counter',
                    kind: 'Field',
                    metadata: {},
                    type: 'Float'
                }, {
                    fieldName: 'nodeDefCollection',
                    kind: 'Field',
                    metadata: {
                        canHaveSubselections: true,
                        isConnection: true,
                        isFindable: true
                    },
                    type: 'ProcessDefEntity_nodeDefCollection_ConnectionConnection'
                }, {
                    fieldName: 'flowDefCollection',
                    kind: 'Field',
                    metadata: {
                        canHaveSubselections: true,
                        isConnection: true,
                        isFindable: true
                    },
                    type: 'ProcessDefEntity_flowDefCollection_ConnectionConnection'
                }, {
                    fieldName: 'laneCollection',
                    kind: 'Field',
                    metadata: {
                        canHaveSubselections: true,
                        isConnection: true,
                        isFindable: true
                    },
                    type: 'ProcessDefEntity_laneCollection_ConnectionConnection'
                }],
                id: _reactRelay2.default.QL.__id(),
                kind: 'Fragment',
                metadata: {},
                name: 'UpdateProcessDefMutation_ProcessdefRelayQL',
                type: 'ProcessDef'
            };
        }();
    }
}, _temp);
exports.default = UdpateProcessDefMutation;
module.exports = exports['default'];
