import React from "react";
import classes from './RatesList.module.css'

const RatesList = ({ ratesList }) => {
    return (
        <ul className={classes.RatesList}>
            {Object.keys(ratesList).map((currency) => (
                <li className={classes.Li} key={currency}>
                    {`${ratesList[currency]} ${currency}`}
                </li>
            ))}
        </ul>
    )
};

export default RatesList;