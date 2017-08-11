'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var prepareIDParams = function prepareIDParams(params, options) {
    var id = params.id,
        sportType = params.sportType;


    var nextId = null;
    var nextSportType = null;
    if (id) {
        nextId = id;
    }
    if (sportType) {
        nextSportType = sportType;
    }

    return {
        id: nextId,
        sportType: nextSportType
    };
};

exports.default = prepareIDParams;
module.exports = exports['default'];
