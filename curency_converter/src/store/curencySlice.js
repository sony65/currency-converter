import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllSymbols, getLatestRates } from '../api/api';

const defaultCurency = 'RUB';

const langMapToCurency = {
    'ru-Ru': 'RUB',
    'ru': 'RUB',
    'en-US': 'USD',
    'en': 'USD',

};

const getBaseCurency = () => {
    return langMapToCurency[navigator.language] ?? defaultCurency;
}

const initialState = {
    baseCurency: getBaseCurency(),
    curencyList: {},
    latestRates: {},
};

export const getAllSymbolsList = createAsyncThunk(
    'curency/getAllSymbolsList',
    () => getAllSymbols()
);

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
        builder.addCase(getAllSymbolsList.fulfilled, (state, action) => {
            state.curencyList = action.payload;
        });
        builder.addCase(getLatestRatesThunk.fulfilled, (state, action) => {
            state.latestRates = action.payload;
        });
    },
});

export const { changeBaseCurency } = curencySlice.actions;
export const { reducer: curencyReducer  } = curencySlice;