import { combineReducers } from 'redux';

import { getAllTrainsReducer } from './reducers/getAllTrainsReducer';
import { trainDetailsReducer } from './reducers/trainDetailsReducer';

export const rootReducer = combineReducers({
    getAllTrainsReducer,
    trainDetailsReducer
});