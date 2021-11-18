import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { curencyReducer } from './curencySlice';
import { convertReducer } from './convertSlice';

const rootReducer = combineReducers({
    curency: curencyReducer,
    convert: convertReducer,
});

export const store = configureStore({reducer: rootReducer});

