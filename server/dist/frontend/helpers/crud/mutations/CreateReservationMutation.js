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

var CreateReservationMutation = (_temp = _class = function (_Relay$Mutation) {
    (0, _inherits3.default)(CreateReservationMutation, _Relay$Mutation);

    function CreateReservationMutation() {
        (0, _classCallCheck3.default)(this, CreateReservationMutation);
        return (0, _possibleConstructorReturn3.default)(this, (CreateReservationMutation.__proto__ || Object.getPrototypeOf(CreateReservationMutation)).apply(this, arguments));
    }

    (0, _createClass3.default)(CreateReservationMutation, [{
        key: 'getMutation',
        value: function getMutation() {
            return function () {
                throw new Error('GraphQL validation error ``Cannot query field "createReservation" on type "Mutation". Did you mean "createUserTask", "createUser", or "createSessionStore"?`` in file `src/frontend/helpers/crud/mutations/CreateReservationMutation.js`. Try updating your GraphQL schema if an argument/field/type was recently added.');
            }();
        }
    }, {
        key: 'getVariables',
        value: function getVariables() {
            return {
                id: this.props.id,
                name: this.props.name,
                category: this.props.category,
                isOneWay: this.props.isOneWay,
                navigationSystem: this.props.navigationSystem,
                additionalDriver: this.props.additionalDriver,
                price: this.props.price
            };
        }
    }, {
        key: 'getFatQuery',
        value: function getFatQuery() {
            return function () {
                throw new Error('GraphQL validation error ``Unknown type "CreateReservationPayload". Did you mean "CreateUserTaskPayload", "CreateUserPayload", "CreateTimerPayload", "CreateSessionStorePayload", or "CreateEventPayload"?`` in file `src/frontend/helpers/crud/mutations/CreateReservationMutation.js`. Try updating your GraphQL schema if an argument/field/type was recently added.');
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
                connectionName: 'ReservationConnection',
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
                category = _props.category,
                isOneWay = _props.isOneWay,
                navigationSystem = _props.navigationSystem,
                additionalDriver = _props.additionalDriver,
                price = _props.price,
                catalog = _props.catalog;
            var totalCount = catalog.ReservationConnection.totalCount;


            return {
                catalog: {
                    ReservationConnection: {
                        totalCount: ++totalCount
                    },
                    id: catalog.id
                },
                entityEdge: {
                    node: {
                        id: id,
                        name: name,
                        category: category,
                        isOneWay: isOneWay,
                        navigationSystem: navigationSystem,
                        additionalDriver: additionalDriver,
                        price: price
                    }
                }
            };
        }
    }]);
    return CreateReservationMutation;
}(_reactRelay2.default.Mutation), _class.fragments = {
    catalog: function catalog() {
        return function () {
            throw new Error('GraphQL validation error ``Cannot query field "ReservationConnection" on type "Catalog". Did you mean "UserTaskConnection", "UserConnection", "EntityConnection", "SessionStoreConnection", or "TimerConnection"?`` in file `src/frontend/helpers/crud/mutations/CreateReservationMutation.js`. Try updating your GraphQL schema if an argument/field/type was recently added.');
        }();
    }
}, _temp);
exports.default = CreateReservationMutation;
module.exports = exports['default'];
