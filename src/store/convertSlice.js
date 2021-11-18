import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getLatestRates } from '../api/api';
import { getBaseCurency } from './getBaseCurrency';

const initialState = {
    convertFrom: getBaseCurency(),
    convertTo: getBaseCurency(),
    convertAmount: 1,
    convertResult: 1,
    curencies: [getBaseCurency()],

};

export const convertThunk = createAsyncThunk(
    'convert/convertThunk',
    async (_, thunkAPI) => {
        const { convert } = thunkAPI.getState();
        const { convertFrom, convertTo, convertAmount } = convert;
        const newRates = await getLatestRates(convertFrom);
        const rate = newRates[convertTo];
        return rate * convertAmount;
    },
);

export const getCurenciesThunk = createAsyncThunk(
    'convert/getCurenciesThunk',
    async (_, thunkAPI) => {
        const { convert } = thunkAPI.getState();
        const { convertFrom} = convert;
        const newRates = await getLatestRates(convertFrom);
        return Object.keys(newRates);
    },
)

const convertSlice = createSlice({
    name: 'convert',
    initialState,
    reducers: {
        convertFromChange(state, action) {
            state.convertResult = null;
            state.convertFrom = action.payload;
        },
        convertToChange(state, action) {
            state.convertResult = null;
            state.convertTo = action.payload;
        },
        convertAmountChange(state, action) {
            state.convertResult = null;
            state.convertAmount = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(convertThunk.fulfilled, (state, action) => {
            state.convertResult = action.payload;
        });
        builder.addCase(getCurenciesThunk.fulfilled, (state, action) => {
            state.curencies = action.payload;
        });
    },
});

export const { convertFromChange, convertToChange,  convertAmountChange } = convertSlice.actions;
export const { reducer: convertReducer  } = convertSlice;