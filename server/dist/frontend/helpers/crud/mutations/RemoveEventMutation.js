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

var RemoveEventMutation = (_temp = _class = function (_Relay$Mutation) {
    (0, _inherits3.default)(RemoveEventMutation, _Relay$Mutation);

    function RemoveEventMutation() {
        (0, _classCallCheck3.default)(this, RemoveEventMutation);
        return (0, _possibleConstructorReturn3.default)(this, (RemoveEventMutation.__proto__ || Object.getPrototypeOf(RemoveEventMutation)).apply(this, arguments));
    }

    (0, _createClass3.default)(RemoveEventMutation, [{
        key: 'getMutation',
        value: function getMutation() {
            return function () {
                return {
                    calls: [{
                        kind: 'Call',
                        metadata: {},
                        name: 'removeEvent',
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
                        inputType: 'RemoveEventInput!'
                    },
                    name: 'RemoveEventMutation',
                    responseType: 'RemoveEventPayload'
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
                                    }],
                                    fieldName: 'node',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true,
                                        isRequisite: true
                                    },
                                    type: 'Event'
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
                                type: 'EventEdge'
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
                            fieldName: 'EventConnection',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isConnection: true,
                                isFindable: true
                            },
                            type: 'EventConnection'
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
                        fieldName: 'deletedId',
                        kind: 'Field',
                        metadata: {},
                        type: 'ID'
                    }],
                    id: _reactRelay2.default.QL.__id(),
                    kind: 'Fragment',
                    metadata: {},
                    name: 'RemoveEventMutation_ValueRelayQL',
                    type: 'RemoveEventPayload'
                };
            }();
        }
    }, {
        key: 'getConfigs',
        value: function getConfigs() {
            return [{
                type: 'NODE_DELETE',
                parentName: 'catalog',
                parentID: this.props.catalog.id,
                connectionName: 'EventConnection',
                deletedIDFieldName: 'deletedId'
            }];
        }
    }, {
        key: 'getVariables',
        value: function getVariables() {
            return {
                id: this.props.event.id
            };
        }
    }, {
        key: 'getOptimisticResponse',
        value: function getOptimisticResponse() {
            var _props = this.props,
                catalog = _props.catalog,
                event = _props.event;
            var totalCount = catalog.EventConnection.totalCount;


            return {
                catalog: {
                    EventConnection: {
                        totalCount: --totalCount
                    },
                    id: catalog.id
                },
                deletedId: event.id
            };
        }
    }]);
    return RemoveEventMutation;
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
                    fieldName: 'EventConnection',
                    kind: 'Field',
                    metadata: {
                        canHaveSubselections: true,
                        isConnection: true,
                        isFindable: true
                    },
                    type: 'EventConnection'
                }],
                id: _reactRelay2.default.QL.__id(),
                kind: 'Fragment',
                metadata: {},
                name: 'RemoveEventMutation_CatalogRelayQL',
                type: 'Catalog'
            };
        }();
    },

    event: function event() {
        return function () {
            return {
                children: [{
                    fieldName: 'id',
                    kind: 'Field',
                    metadata: {
                        isRequisite: true
                    },
                    type: 'ID'
                }],
                id: _reactRelay2.default.QL.__id(),
                kind: 'Fragment',
                metadata: {},
                name: 'RemoveEventMutation_EventRelayQL',
                type: 'Event'
            };
        }();
    }
}, _temp);
exports.default = RemoveEventMutation;
module.exports = exports['default'];
