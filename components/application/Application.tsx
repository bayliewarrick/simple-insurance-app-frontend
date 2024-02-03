import React, { useState, useEffect } from "react";

import ApplicationInput from "./ApplicationInput";

const applicationFields: string[] = ["name", "email", "phone", "address"];

const Application: React.FC = () => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value);
    }
    
    return (
        <div>
            <h1>Application</h1>
            {applicationFields.map((field, index) => {
                return <ApplicationInput key={index} text={field} label={field} onInputChange={onChange}/>
            })} 
        </div>
    )
}

export default Application;