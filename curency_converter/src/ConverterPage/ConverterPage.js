import React, { useCallback, useEffect, useState } from "react";
import Curency from "../Components/Curency";
import TextField from '../Components/TextField';
import { connect } from 'react-redux';
import { convertFromChange, convertToChange,  convertAmountChange, convertThunk, getCurenciesThunk } from '../store/convertSlice';

const mapStateToProps = (state) => {
    return {
        convertState: state.convert,
    };
};

const actionCreator = {
    convertFromChange,
    convertToChange,
    convertAmountChange,
    convertThunk,
    getCurenciesThunk,
};

const ConverterPage = ({ 
    convertState,
    convertFromChange,
    convertToChange,
    convertAmountChange,
    convertThunk,
    getCurenciesThunk,

}) => {

    const { convertFrom, convertTo, convertAmount, convertResult, curencies } = convertState;

    useEffect(() => {
        getCurenciesThunk();

        const handler = (e) => {
            if (e.code == 'Enter' && convertAmount) {
                convertThunk();
            }
        }

        window.addEventListener('keydown', handler);

        return () => {
            window.removeEventListener('keydown', handler);
        }
    }, []);

    const onConvertFromChangeHandler = useCallback((e) => {
        convertFromChange(e.target.value);
    }, [convertFromChange]);

    const onConvertToChangeHandler = useCallback((e) => {
        convertToChange(e.target.value);
    }, [convertToChange]);

    const onConvertAmountChangeHandler = useCallback((e) => {
        convertAmountChange(parseFloat(e.target.value));
    }, [convertAmountChange])

    return (
        <div>
            <TextField
                type="number"
                onChange={onConvertAmountChangeHandler}    
                value={convertAmount}   
            />
            <Curency 
                options={curencies} 
                value={convertFrom} 
                onChange={onConvertFromChangeHandler}
            />
            <TextField 
                value={convertResult}
                disabled
            />
            <Curency 
                options={curencies} 
                value={convertTo} 
                onChange={onConvertToChangeHandler}
            />
        </div>
    );
};

export default connect(mapStateToProps, actionCreator)(ConverterPage);