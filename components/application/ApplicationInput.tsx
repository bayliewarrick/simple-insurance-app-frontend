import React, { useState } from "react";

type ApplicationInputProps = {
    field: string;
    label: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ApplicationInput: React.FC<ApplicationInputProps> = ({ field, label, onInputChange }) => {
    return (
        <div className="application-input-item">
            <label>{label}</label>
            <input type="text" name={field} onChange={onInputChange} />
        </div>
    )
}

export default ApplicationInput;