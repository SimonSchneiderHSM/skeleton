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

var UdpateProcessTokenMutation = (_temp = _class = function (_Relay$Mutation) {
    (0, _inherits3.default)(UdpateProcessTokenMutation, _Relay$Mutation);

    function UdpateProcessTokenMutation() {
        (0, _classCallCheck3.default)(this, UdpateProcessTokenMutation);
        return (0, _possibleConstructorReturn3.default)(this, (UdpateProcessTokenMutation.__proto__ || Object.getPrototypeOf(UdpateProcessTokenMutation)).apply(this, arguments));
    }

    (0, _createClass3.default)(UdpateProcessTokenMutation, [{
        key: 'getMutation',
        value: function getMutation() {
            return function () {
                return {
                    calls: [{
                        kind: 'Call',
                        metadata: {},
                        name: 'updateProcessToken',
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
                        inputType: 'UpdateProcessTokenInput!'
                    },
                    name: 'UpdateProcessTokenMutation',
                    responseType: 'UpdateProcessTokenPayload'
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
                            fieldName: 'data',
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
                        }],
                        fieldName: 'entity',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true
                        },
                        type: 'ProcessToken'
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
                                        fieldName: 'data',
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
                                    }],
                                    fieldName: 'node',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true,
                                        isRequisite: true
                                    },
                                    type: 'ProcessToken'
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
                                type: 'ProcessTokenEdge'
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
                            fieldName: 'ProcessTokenConnection',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isConnection: true,
                                isFindable: true
                            },
                            type: 'ProcessTokenConnection'
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
                    name: 'UpdateProcessTokenMutation_ValueRelayQL',
                    type: 'UpdateProcessTokenPayload'
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
                    entity: this.props.processtoken.id
                }
            }];
        }
    }, {
        key: 'getVariables',
        value: function getVariables() {
            return {

                id: this.props.updatedProcessToken.id,

                data: this.props.updatedProcessToken.data,

                process: this.props.updatedProcessToken.process
            };
        }
    }, {
        key: 'getOptimisticResponse',
        value: function getOptimisticResponse() {
            return {
                entity: {

                    id: this.props.updatedProcessToken.id,

                    data: this.props.updatedProcessToken.data,

                    process: this.props.updatedProcessToken.process
                }
            };
        }
    }]);
    return UdpateProcessTokenMutation;
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
                    fieldName: 'ProcessTokenConnection',
                    kind: 'Field',
                    metadata: {
                        canHaveSubselections: true,
                        isConnection: true,
                        isFindable: true
                    },
                    type: 'ProcessTokenConnection'
                }],
                id: _reactRelay2.default.QL.__id(),
                kind: 'Fragment',
                metadata: {},
                name: 'UpdateProcessTokenMutation_CatalogRelayQL',
                type: 'Catalog'
            };
        }();
    },
    processtoken: function processtoken() {
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
                    fieldName: 'data',
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
                }],
                id: _reactRelay2.default.QL.__id(),
                kind: 'Fragment',
                metadata: {},
                name: 'UpdateProcessTokenMutation_ProcesstokenRelayQL',
                type: 'ProcessToken'
            };
        }();
    }
}, _temp);
exports.default = UdpateProcessTokenMutation;
module.exports = exports['default'];
