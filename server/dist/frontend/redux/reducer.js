'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxAsyncConnect = require('redux-async-connect');

var combinedReducers = function combinedReducers(reducers) {
    return (0, _redux.combineReducers)(Object.assign({
        routing: _reactRouterRedux.routerReducer,
        reduxAsyncConnect: _reduxAsyncConnect.reducer
    }, reducers));
};

exports.default = combinedReducers;
module.exports = exports['default'];
