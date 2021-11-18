import React from "react";

const RatesList = ({ ratesList }) => {
    return (
        <ul>
        {Object.keys(ratesList).map((currency) => (
            <li key={currency}>{ratesList[currency]} {currency}</li>
        ))}
    </ul>
    );
};

export default RatesList;