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

var RemoveReservationMutation = (_temp = _class = function (_Relay$Mutation) {
    (0, _inherits3.default)(RemoveReservationMutation, _Relay$Mutation);

    function RemoveReservationMutation() {
        (0, _classCallCheck3.default)(this, RemoveReservationMutation);
        return (0, _possibleConstructorReturn3.default)(this, (RemoveReservationMutation.__proto__ || Object.getPrototypeOf(RemoveReservationMutation)).apply(this, arguments));
    }

    (0, _createClass3.default)(RemoveReservationMutation, [{
        key: 'getMutation',
        value: function getMutation() {
            return function () {
                throw new Error('GraphQL validation error ``Cannot query field "removeReservation" on type "Mutation". Did you mean "removeUserTask", "removeUser", or "removeSessionStore"?`` in file `src/frontend/helpers/crud/mutations/RemoveReservationMutation.js`. Try updating your GraphQL schema if an argument/field/type was recently added.');
            }();
        }
    }, {
        key: 'getFatQuery',
        value: function getFatQuery() {
            return function () {
                throw new Error('GraphQL validation error ``Unknown type "RemoveReservationPayload". Did you mean "RemoveUserTaskPayload", "RemoveUserPayload", "RemoveTimerPayload", "RemoveSessionStorePayload", or "RemoveEventPayload"?`` in file `src/frontend/helpers/crud/mutations/RemoveReservationMutation.js`. Try updating your GraphQL schema if an argument/field/type was recently added.');
            }();
        }
    }, {
        key: 'getConfigs',
        value: function getConfigs() {
            return [{
                type: 'NODE_DELETE',
                parentName: 'catalog',
                parentID: this.props.catalog.id,
                connectionName: 'ReservationConnection',
                deletedIDFieldName: 'deletedId'
            }];
        }
    }, {
        key: 'getVariables',
        value: function getVariables() {
            return {
                id: this.props.reservation.id
            };
        }
    }, {
        key: 'getOptimisticResponse',
        value: function getOptimisticResponse() {
            var _props = this.props,
                catalog = _props.catalog,
                reservation = _props.reservation;
            var totalCount = catalog.ReservationConnection.totalCount;


            return {
                catalog: {
                    ReservationConnection: {
                        totalCount: --totalCount
                    },
                    id: catalog.id
                },
                deletedId: reservation.id
            };
        }
    }]);
    return RemoveReservationMutation;
}(_reactRelay2.default.Mutation), _class.fragments = {
    catalog: function catalog() {
        return function () {
            throw new Error('GraphQL validation error ``Cannot query field "ReservationConnection" on type "Catalog". Did you mean "UserTaskConnection", "UserConnection", "EntityConnection", "SessionStoreConnection", or "TimerConnection"?`` in file `src/frontend/helpers/crud/mutations/RemoveReservationMutation.js`. Try updating your GraphQL schema if an argument/field/type was recently added.');
        }();
    },

    reservation: function reservation() {
        return function () {
            throw new Error('GraphQL validation error ``Unknown type "Reservation".`` in file `src/frontend/helpers/crud/mutations/RemoveReservationMutation.js`. Try updating your GraphQL schema if an argument/field/type was recently added.');
        }();
    }
}, _temp);
exports.default = RemoveReservationMutation;
module.exports = exports['default'];
