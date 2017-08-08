"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientExtension = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClientExtension = exports.ClientExtension = function () {
  function ClientExtension(datastoreService, iamService, mainApp, processEngineService, datastoreMessageBus, messageBusExternalService) {
    (0, _classCallCheck3.default)(this, ClientExtension);

    this._datastoreService = datastoreService;
    this._iamService = iamService;
    this._mainApp = mainApp;
    this._processEngineService = processEngineService;
    this._datastoreMessageBus = datastoreMessageBus;
    this._messageBusExternalService = messageBusExternalService;
  }

  (0, _createClass3.default)(ClientExtension, [{
    key: "initialize",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.datastoreService.initialize();

              case 2:
                _context.next = 4;
                return this.processEngineService.initialize();

              case 4:
                _context.next = 6;
                return this.messageBusExternalService.initialize();

              case 6:
                _context.next = 8;
                return this.datastoreMessageBus.initialize();

              case 8:
                _context.next = 10;
                return this.iamService.initialize();

              case 10:

                this.mainApp.initialize();

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initialize() {
        return _ref.apply(this, arguments);
      }

      return initialize;
    }()
  }, {
    key: "start",
    value: function start() {
      this.mainApp.start();
    }
  }, {
    key: "messageBusExternalService",
    get: function get() {
      return this._messageBusExternalService;
    }
  }, {
    key: "datastoreMessageBus",
    get: function get() {
      return this._datastoreMessageBus;
    }
  }, {
    key: "datastoreService",
    get: function get() {
      return this._datastoreService;
    }
  }, {
    key: "iamService",
    get: function get() {
      return this._iamService;
    }
  }, {
    key: "mainApp",
    get: function get() {
      return this._mainApp;
    }
  }, {
    key: "processEngineService",
    get: function get() {
      return this._processEngineService;
    }
  }]);
  return ClientExtension;
}();
