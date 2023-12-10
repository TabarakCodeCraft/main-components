import React from "react";
import "./input.css";

const Input = ({ placeholder, value, onChange, ...props }) => {
    return (
        <input
            type="text"
            className="input-text"
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    )

};
export default Input;