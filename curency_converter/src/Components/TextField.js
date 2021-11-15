import React from "react";

const TextField = ({text}) => {
     const defValue = 1;
    return (
        <div>
            <input
                type='text'
                value={defValue}
                id='curencyInput'

            ></input>
            <label for='curencyInput'>{text}</label>
        </div>
    );
};

export default TextField;