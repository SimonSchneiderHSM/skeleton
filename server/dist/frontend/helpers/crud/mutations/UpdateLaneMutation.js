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

var UdpateLaneMutation = (_temp = _class = function (_Relay$Mutation) {
    (0, _inherits3.default)(UdpateLaneMutation, _Relay$Mutation);

    function UdpateLaneMutation() {
        (0, _classCallCheck3.default)(this, UdpateLaneMutation);
        return (0, _possibleConstructorReturn3.default)(this, (UdpateLaneMutation.__proto__ || Object.getPrototypeOf(UdpateLaneMutation)).apply(this, arguments));
    }

    (0, _createClass3.default)(UdpateLaneMutation, [{
        key: 'getMutation',
        value: function getMutation() {
            return function () {
                return {
                    calls: [{
                        kind: 'Call',
                        metadata: {},
                        name: 'updateLane',
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
                        inputType: 'UpdateLaneInput!'
                    },
                    name: 'UpdateLaneMutation',
                    responseType: 'UpdateLanePayload'
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
                            fieldName: 'processDef',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true
                            },
                            type: 'ProcessDef'
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
                            type: 'LaneEntity_nodeDefCollection_ConnectionConnection'
                        }],
                        fieldName: 'entity',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true
                        },
                        type: 'Lane'
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
                                        fieldName: 'processDef',
                                        kind: 'Field',
                                        metadata: {
                                            canHaveSubselections: true
                                        },
                                        type: 'ProcessDef'
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
                                        type: 'LaneEntity_nodeDefCollection_ConnectionConnection'
                                    }],
                                    fieldName: 'node',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true,
                                        isRequisite: true
                                    },
                                    type: 'Lane'
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
                                type: 'LaneEdge'
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
                            fieldName: 'LaneConnection',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isConnection: true,
                                isFindable: true
                            },
                            type: 'LaneConnection'
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
                    name: 'UpdateLaneMutation_ValueRelayQL',
                    type: 'UpdateLanePayload'
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
                    entity: this.props.lane.id
                }
            }];
        }
    }, {
        key: 'getVariables',
        value: function getVariables() {
            return {

                id: this.props.updatedLane.id,

                name: this.props.updatedLane.name,

                key: this.props.updatedLane.key,

                extensions: this.props.updatedLane.extensions,

                processDef: this.props.updatedLane.processDef,

                counter: this.props.updatedLane.counter,

                nodeDefCollection: this.props.updatedLane.nodeDefCollection
            };
        }
    }, {
        key: 'getOptimisticResponse',
        value: function getOptimisticResponse() {
            return {
                entity: {

                    id: this.props.updatedLane.id,

                    name: this.props.updatedLane.name,

                    key: this.props.updatedLane.key,

                    extensions: this.props.updatedLane.extensions,

                    processDef: this.props.updatedLane.processDef,

                    counter: this.props.updatedLane.counter,

                    nodeDefCollection: this.props.updatedLane.nodeDefCollection
                }
            };
        }
    }]);
    return UdpateLaneMutation;
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
                    fieldName: 'LaneConnection',
                    kind: 'Field',
                    metadata: {
                        canHaveSubselections: true,
                        isConnection: true,
                        isFindable: true
                    },
                    type: 'LaneConnection'
                }],
                id: _reactRelay2.default.QL.__id(),
                kind: 'Fragment',
                metadata: {},
                name: 'UpdateLaneMutation_CatalogRelayQL',
                type: 'Catalog'
            };
        }();
    },
    lane: function lane() {
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
                    fieldName: 'processDef',
                    kind: 'Field',
                    metadata: {
                        canHaveSubselections: true
                    },
                    type: 'ProcessDef'
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
                    type: 'LaneEntity_nodeDefCollection_ConnectionConnection'
                }],
                id: _reactRelay2.default.QL.__id(),
                kind: 'Fragment',
                metadata: {},
                name: 'UpdateLaneMutation_LaneRelayQL',
                type: 'Lane'
            };
        }();
    }
}, _temp);
exports.default = UdpateLaneMutation;
module.exports = exports['default'];
