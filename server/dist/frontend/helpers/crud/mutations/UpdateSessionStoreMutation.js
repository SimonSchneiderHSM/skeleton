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

var UdpateSessionStoreMutation = (_temp = _class = function (_Relay$Mutation) {
    (0, _inherits3.default)(UdpateSessionStoreMutation, _Relay$Mutation);

    function UdpateSessionStoreMutation() {
        (0, _classCallCheck3.default)(this, UdpateSessionStoreMutation);
        return (0, _possibleConstructorReturn3.default)(this, (UdpateSessionStoreMutation.__proto__ || Object.getPrototypeOf(UdpateSessionStoreMutation)).apply(this, arguments));
    }

    (0, _createClass3.default)(UdpateSessionStoreMutation, [{
        key: 'getMutation',
        value: function getMutation() {
            return function () {
                return {
                    calls: [{
                        kind: 'Call',
                        metadata: {},
                        name: 'updateSessionStore',
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
                        inputType: 'UpdateSessionStoreInput!'
                    },
                    name: 'UpdateSessionStoreMutation',
                    responseType: 'UpdateSessionStorePayload'
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
                            fieldName: 'identityId',
                            kind: 'Field',
                            metadata: {},
                            type: 'String'
                        }, {
                            fieldName: 'systemUserId',
                            kind: 'Field',
                            metadata: {},
                            type: 'String'
                        }, {
                            fieldName: 'data',
                            kind: 'Field',
                            metadata: {},
                            type: 'String'
                        }, {
                            fieldName: 'roles',
                            kind: 'Field',
                            metadata: {},
                            type: 'String'
                        }],
                        fieldName: 'entity',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true
                        },
                        type: 'SessionStore'
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
                                        fieldName: 'identityId',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'systemUserId',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'data',
                                        kind: 'Field',
                                        metadata: {},
                                        type: 'String'
                                    }, {
                                        fieldName: 'roles',
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
                                    type: 'SessionStore'
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
                                type: 'SessionStoreEdge'
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
                            fieldName: 'SessionStoreConnection',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isConnection: true,
                                isFindable: true
                            },
                            type: 'SessionStoreConnection'
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
                    name: 'UpdateSessionStoreMutation_ValueRelayQL',
                    type: 'UpdateSessionStorePayload'
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
                    entity: this.props.sessionstore.id
                }
            }];
        }
    }, {
        key: 'getVariables',
        value: function getVariables() {
            return {

                id: this.props.updatedSessionStore.id,

                identityId: this.props.updatedSessionStore.identityId,

                systemUserId: this.props.updatedSessionStore.systemUserId,

                data: this.props.updatedSessionStore.data,

                roles: this.props.updatedSessionStore.roles
            };
        }
    }, {
        key: 'getOptimisticResponse',
        value: function getOptimisticResponse() {
            return {
                entity: {

                    id: this.props.updatedSessionStore.id,

                    identityId: this.props.updatedSessionStore.identityId,

                    systemUserId: this.props.updatedSessionStore.systemUserId,

                    data: this.props.updatedSessionStore.data,

                    roles: this.props.updatedSessionStore.roles
                }
            };
        }
    }]);
    return UdpateSessionStoreMutation;
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
                    fieldName: 'SessionStoreConnection',
                    kind: 'Field',
                    metadata: {
                        canHaveSubselections: true,
                        isConnection: true,
                        isFindable: true
                    },
                    type: 'SessionStoreConnection'
                }],
                id: _reactRelay2.default.QL.__id(),
                kind: 'Fragment',
                metadata: {},
                name: 'UpdateSessionStoreMutation_CatalogRelayQL',
                type: 'Catalog'
            };
        }();
    },
    sessionstore: function sessionstore() {
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
                    fieldName: 'identityId',
                    kind: 'Field',
                    metadata: {},
                    type: 'String'
                }, {
                    fieldName: 'systemUserId',
                    kind: 'Field',
                    metadata: {},
                    type: 'String'
                }, {
                    fieldName: 'data',
                    kind: 'Field',
                    metadata: {},
                    type: 'String'
                }, {
                    fieldName: 'roles',
                    kind: 'Field',
                    metadata: {},
                    type: 'String'
                }],
                id: _reactRelay2.default.QL.__id(),
                kind: 'Fragment',
                metadata: {},
                name: 'UpdateSessionStoreMutation_SessionstoreRelayQL',
                type: 'SessionStore'
            };
        }();
    }
}, _temp);
exports.default = UdpateSessionStoreMutation;
module.exports = exports['default'];
