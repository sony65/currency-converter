import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getLatestRates } from '../api/api';
import { getBaseCurency } from './getBaseCurrency';

const initialState = {
    baseCurency: getBaseCurency(),
    latestRates: {},
};

export const getLatestRatesThunk = createAsyncThunk(
    'curency/getLatestRates',
    async (_, thunkAPI) => {
        const { curency } = thunkAPI.getState();
        const { baseCurency } = curency;
        return await getLatestRates(baseCurency);
    },
);

const curencySlice = createSlice({
    name: 'curency',
    initialState,
    reducers: {
        changeBaseCurency: (state, action) => {
            state.baseCurency = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getLatestRatesThunk.fulfilled, (state, action) => {
            state.latestRates = action.payload;
        });
    },
});

export const { changeBaseCurency } = curencySlice.actions;
export const { reducer: curencyReducer  } = curencySlice;