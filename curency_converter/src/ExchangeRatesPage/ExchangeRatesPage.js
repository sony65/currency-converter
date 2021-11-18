import React, { useCallback, useEffect } from "react";
import { connect } from 'react-redux';
import { changeBaseCurency, getLatestRatesThunk } from '../store/curencySlice';
import Curency from '../Components/Curency';
import RatesList from "../Components/RatesList";
import { Link } from "react-router-dom";
import classes from './ExchangeRatesPage.module.css';

const mapStateToProps = (state) => {
    return {
        curencyState: state.curency,
    };
};

const actionCreator = {
    changeBaseCurency,
    getLatestRatesThunk,
};

const ExchangeRatesPage = ({ 
    curencyState, 
    changeBaseCurency, 
    getLatestRatesThunk 
}) => {

    const { baseCurency, latestRates } = curencyState;

    useEffect(() => {
        getLatestRatesThunk();
    }, [baseCurency]);

    const onBaseCurencyChangeHandler = useCallback((e) => {
        changeBaseCurency(e.target.value);
    }, [changeBaseCurency]);

    return (
        <div className={classes.ExchangeRatesPage}>
            <Curency 
                options={Object.keys(latestRates)}
                value={baseCurency}
                onChange={onBaseCurencyChangeHandler}
            />
            <RatesList
                ratesList={latestRates}
            />
            <Link 
                to='/ConverterPage'
                className={classes.Link}
            >Конвертер валют</Link>
        </div>
    );
};

export default connect(mapStateToProps, actionCreator)(ExchangeRatesPage);