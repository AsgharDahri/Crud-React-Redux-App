import crudReducer from "./crud-reducers";

import {combineReducers} from 'redux';
 
const rootreducer=combineReducers({
    crudReducer
})

export default rootreducer;