"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require("redbox-react");

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require("react");

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require("react-transform-catch-errors");

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  NotFound: {
    displayName: "NotFound"
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: "src/frontend/containers/NotFound/NotFound.js",
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var NotFound = _wrapComponent("NotFound")(function (_Component) {
  (0, _inherits3.default)(NotFound, _Component);

  function NotFound() {
    (0, _classCallCheck3.default)(this, NotFound);
    return (0, _possibleConstructorReturn3.default)(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  (0, _createClass3.default)(NotFound, [{
    key: "render",
    value: function render() {
      return _react3.default.createElement(
        "div",
        { className: "container" },
        _react3.default.createElement(
          "h1",
          null,
          "Doh! 404!"
        ),
        _react3.default.createElement(
          "p",
          null,
          "These are ",
          _react3.default.createElement(
            "em",
            null,
            "not"
          ),
          " the droids you are looking for!"
        )
      );
    }
  }]);
  return NotFound;
}(_react2.Component));

exports.default = NotFound;
module.exports = exports["default"];
