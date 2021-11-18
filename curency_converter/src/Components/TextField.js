import React from "react";

const TextField = ({value, type, onChange, onKeyDown, disabled}) => {
    return (
        <div>
            <input
                type={type}
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