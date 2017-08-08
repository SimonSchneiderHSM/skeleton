'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BpmnResolver = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _addictIoc = require('addict-ioc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BpmnResolver = exports.BpmnResolver = function (_Resolver) {
  (0, _inherits3.default)(BpmnResolver, _Resolver);

  function BpmnResolver() {
    (0, _classCallCheck3.default)(this, BpmnResolver);
    return (0, _possibleConstructorReturn3.default)(this, (BpmnResolver.__proto__ || Object.getPrototypeOf(BpmnResolver)).apply(this, arguments));
  }

  (0, _createClass3.default)(BpmnResolver, [{
    key: 'resolveObject',
    value: function resolveObject(container, registration) {

      switch (registration.settings.key) {
        case 'reservation.bpmn':
          return require('../backend/modules/demo-backend/bpmn/reservation.bpmn');
        case 'example.bpmn':
          return require('../backend/modules/demo-backend/bpmn/example.bpmn');
      }
    }
  }]);
  return BpmnResolver;
}(_addictIoc.Resolver);
