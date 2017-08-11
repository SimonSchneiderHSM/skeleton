'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var URL = '';

exports.default = {
  login: {
    url: URL + '/iam/login',
    options: {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  logout: {
    url: URL + '/iam/logout'
  },
  getIdentity: {
    url: URL + '/iam/getidentity'
  },

  getProcessDefById: {
    url: URL + '/datastore/ProcessDef/:id'
  },

  executeProcessDefMethod: {
    url: URL + '/datastore/ProcessDef/:id/:method',
    options: {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },

  getReservation: {
    url: URL + '/datastore/Reservation',
    transformer: function transformer(data, prevData, action) {
      data || (data = {});
      return { entities: data._entities || [], totalCount: data._totalCount || null };
    }
  },
  getReservationById: {
    url: URL + '/datastore/Reservation/:id'
  },
  saveNewReservation: {
    url: URL + '/datastore/Reservation',
    options: {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  updateReservation: {
    url: URL + '/datastore/Reservation/:id',
    options: {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  deleteReservation: {
    url: URL + '/datastore/Reservation/:id',
    options: {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  executeReservationClassMethod: {
    url: URL + '/datastore/Reservation/:method',
    options: {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  executeReservationMethod: {
    url: URL + '/datastore/Reservation/:id/:method',
    options: {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  }
};
module.exports = exports['default'];
