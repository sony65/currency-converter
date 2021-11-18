import React from "react";

const TextField = ({value, onChange, onKeyDown, disabled}) => {
    return (
        <div>
            <input
                value={value}
                placeholder='1'
                onChange={onChange}
                onKeyDown={onKeyDown}
                disabled={disabled}
            ></input>
        </div>
    );
};

export default TextField;