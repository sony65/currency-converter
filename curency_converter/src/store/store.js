import { configureStore } from '@reduxjs/toolkit';
import { combineRedusers } from 'redux';
import { curencyReducer } from './curencySlice';

const rootReducer = combineRedusers({
    curency: curencyReducer,
});

export const store = configureStore({reducer: rootReducer});

