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

var UdpateReservationMutation = (_temp = _class = function (_Relay$Mutation) {
    (0, _inherits3.default)(UdpateReservationMutation, _Relay$Mutation);

    function UdpateReservationMutation() {
        (0, _classCallCheck3.default)(this, UdpateReservationMutation);
        return (0, _possibleConstructorReturn3.default)(this, (UdpateReservationMutation.__proto__ || Object.getPrototypeOf(UdpateReservationMutation)).apply(this, arguments));
    }

    (0, _createClass3.default)(UdpateReservationMutation, [{
        key: 'getMutation',
        value: function getMutation() {
            return function () {
                throw new Error('GraphQL validation error ``Cannot query field "updateReservation" on type "Mutation". Did you mean "updateUserTask", "updateUser", or "updateSessionStore"?`` in file `src/frontend/helpers/crud/mutations/UpdateReservationMutation.js`. Try updating your GraphQL schema if an argument/field/type was recently added.');
            }();
        }
    }, {
        key: 'getFatQuery',
        value: function getFatQuery() {
            return function () {
                throw new Error('GraphQL validation error ``Unknown type "UpdateReservationPayload". Did you mean "UpdateUserTaskPayload", "UpdateUserPayload", "UpdateSessionStorePayload", "UpdateEventPayload", or "UpdateTimerPayload"?`` in file `src/frontend/helpers/crud/mutations/UpdateReservationMutation.js`. Try updating your GraphQL schema if an argument/field/type was recently added.');
            }();
        }
    }, {
        key: 'getConfigs',
        value: function getConfigs() {
            return [{
                type: 'FIELDS_CHANGE',
                fieldIDs: {
                    catalog: this.props.catalog.id,
                    entity: this.props.reservation.id
                }
            }];
        }
    }, {
        key: 'getVariables',
        value: function getVariables() {
            return {

                id: this.props.updatedReservation.id,

                name: this.props.updatedReservation.name,

                category: this.props.updatedReservation.category,

                isOneWay: this.props.updatedReservation.isOneWay,

                navigationSystem: this.props.updatedReservation.navigationSystem,

                additionalDriver: this.props.updatedReservation.additionalDriver,

                price: this.props.updatedReservation.price
            };
        }
    }, {
        key: 'getOptimisticResponse',
        value: function getOptimisticResponse() {
            return {
                entity: {

                    id: this.props.updatedReservation.id,

                    name: this.props.updatedReservation.name,

                    category: this.props.updatedReservation.category,

                    isOneWay: this.props.updatedReservation.isOneWay,

                    navigationSystem: this.props.updatedReservation.navigationSystem,

                    additionalDriver: this.props.updatedReservation.additionalDriver,

                    price: this.props.updatedReservation.price
                }
            };
        }
    }]);
    return UdpateReservationMutation;
}(_reactRelay2.default.Mutation), _class.fragments = {
    catalog: function catalog() {
        return function () {
            throw new Error('GraphQL validation error ``Cannot query field "ReservationConnection" on type "Catalog". Did you mean "UserTaskConnection", "UserConnection", "EntityConnection", "SessionStoreConnection", or "TimerConnection"?`` in file `src/frontend/helpers/crud/mutations/UpdateReservationMutation.js`. Try updating your GraphQL schema if an argument/field/type was recently added.');
        }();
    },
    reservation: function reservation() {
        return function () {
            throw new Error('GraphQL validation error ``Unknown type "Reservation".`` in file `src/frontend/helpers/crud/mutations/UpdateReservationMutation.js`. Try updating your GraphQL schema if an argument/field/type was recently added.');
        }();
    }
}, _temp);
exports.default = UdpateReservationMutation;
module.exports = exports['default'];
