'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('./App/App');

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_App).default;
  }
});

var _Home = require('./Home/Home');

Object.defineProperty(exports, 'Home', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Home).default;
  }
});

var _NotFound = require('./NotFound/NotFound');

Object.defineProperty(exports, 'NotFound', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NotFound).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
