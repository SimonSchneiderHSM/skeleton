'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

const combinedReducers = (reducers) => combineReducers(Object.assign({
    routing: routerReducer,
    reduxAsyncConnect
}, reducers));

export default combinedReducers;
