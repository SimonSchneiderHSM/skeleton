'use strict';

const prepareIDParams = function(params, options) {
    const { id, sportType } = params;

    let nextId = null;
    let nextSportType = null;
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

export default prepareIDParams;
