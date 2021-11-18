import { configureStore } from '@reduxjs/toolkit';
import { combineRedusers } from 'redux';
import { curencyReducer } from './curencySlice';
import { convertReducer } from './convertSlice';

const rootReducer = combineRedusers({
    curency: curencyReducer,
    convert: convertReducer,
});

export const store = configureStore({reducer: rootReducer});

