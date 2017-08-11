'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRelay = require('react-relay');

var _reactRelay2 = _interopRequireDefault(_reactRelay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    viewer: function viewer() {
        return function () {
            return {
                children: [{
                    fieldName: 'id',
                    kind: 'Field',
                    metadata: {
                        isGenerated: true,
                        isRequisite: true
                    },
                    type: 'ID'
                }],
                fieldName: 'viewer',
                kind: 'Query',
                metadata: {},
                name: 'ViewerQueries',
                type: 'Viewer'
            };
        }();
    }
};
module.exports = exports['default'];
