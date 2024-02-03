import React, { useState } from "react";

type ApplicationInputProps = {
    text: string;
    label: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ApplicationInput: React.FC<ApplicationInputProps> = ({ text, label, onInputChange }) => {
    return (
        <div className="application-input-item">
            <label>{label}</label>
            <input type="text" name={label} onChange={onInputChange} />
        </div>
    )
}

export default ApplicationInput;