import React from "react";
import Curency from "../Components/Curency";
import TextField from '../Components/TextField';

const ConverterPage = () => {
    return (
        <div>
            <TextField defValue='1'/>
            <Curency/>
        </div>
    );
};

export default ConverterPage;