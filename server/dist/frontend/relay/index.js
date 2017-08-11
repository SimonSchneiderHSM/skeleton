'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ViewerQueries = require('./ViewerQueries/ViewerQueries');

Object.defineProperty(exports, 'ViewerQueries', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ViewerQueries).default;
  }
});

var _CatalogQueries = require('./CatalogQueries/CatalogQueries');

Object.defineProperty(exports, 'CatalogQueries', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CatalogQueries).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
