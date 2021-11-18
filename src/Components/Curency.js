import React from 'react';
import classes from './Curency.module.css';

const Curency = ({ options, value, onChange }) => {
    return (
        <select 
            value={value} 
            onChange={onChange}
            className={classes.Curency}
        >
            {options.map((option) => (
                <option 
                    key={option} 
                    value={option} 
                >
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Curency;