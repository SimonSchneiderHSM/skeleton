'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigResolver = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _index = require('./static/index');

var _addictIoc = require('addict-ioc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfigResolver = exports.ConfigResolver = function (_Resolver) {
  (0, _inherits3.default)(ConfigResolver, _Resolver);

  function ConfigResolver() {
    (0, _classCallCheck3.default)(this, ConfigResolver);
    return (0, _possibleConstructorReturn3.default)(this, (ConfigResolver.__proto__ || Object.getPrototypeOf(ConfigResolver)).apply(this, arguments));
  }

  (0, _createClass3.default)(ConfigResolver, [{
    key: 'resolveConfig',
    value: function resolveConfig(configNamespace) {

      var configType = typeof configNamespace === 'undefined' ? 'undefined' : (0, _typeof3.default)(configNamespace);

      if (configType === 'undefined') {
        return undefined;
      }
      if (configType === 'object') {
        return configNamespace;
      }
      if (configType === 'function') {
        return configNamespace();
      }

      var segments = configNamespace.split(':');

      var currentNode = _index.config;

      for (var i = 0; i < segments.length; i++) {
        currentNode = currentNode[segments[i]];
      }

      return currentNode;
    }
  }]);
  return ConfigResolver;
}(_addictIoc.Resolver);
