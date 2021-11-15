import React from "react";

const TextField = ({defValue}) => {
    return (
        <div>
            <input
                type='text'
                value={defValue}
                id='curencyInput'

            ></input>
        </div>
    );
};

export default TextField;