import React from "react";
import classes from './TextField.module.css';

const TextField = ({value, onChange, onKeyDown, disabled}) => {
    return (
            <input
                className={classes.TextField}
                value={value}
                placeholder='1'
                onChange={onChange}
                onKeyDown={onKeyDown}
                disabled={disabled}
            ></input>
    );
};

export default TextField;