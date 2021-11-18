import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { convert } from '../api/api';

const initialState = {
    convertFrom: null,
    convertTo: null,
    convertAmount: null,
    convertResult: null,
};

export const convertCurensy = createAsyncThunk(
    'convert/convertCurensy',
    async (_, thunkAPI) => {
        const { convert } = thunkAPI.getState();
        const { convertFrom, convertTo, convertAmount } = convert;
        return await convert(convertFrom, convertTo, convertAmount );
    },
);

const convertSlice = createSlice({
    name: 'convert',
    initialState,
    reducer: {
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
    }
});

export const { convertFromChange, convertToChange, convertAmountChange } = convertSlice.actions;
export const { reducer: convertReducer  } = convertSlice;
