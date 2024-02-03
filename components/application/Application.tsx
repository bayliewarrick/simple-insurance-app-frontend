import React, { useState, useEffect } from "react";
import ApplicationInput from "./ApplicationInput";

const applicationFields: { label: string; field: string }[] = [
  { label: "First Name", field: "first-name" },
  { label: "Last Name", field: "last-name" },
  { label: "Phone Number", field: "phone-number" },
  { label: "Company Name", field: "company-name" },
];

const policyTypes: { label: string; field: string }[] = [
  { label: "Auto Liability", field: "auto-liability" },
  { label: "General Liability", field: "general-liability" },
  { label: "Employee Liability", field: "employee-liability" },
];

type ApplicationProps = {
  email: string;
  cancel: () => void;
};

const Application: React.FC<ApplicationProps> = ({ email, cancel }) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({email: email});

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  return (
    <div>
      <h1>Get your FREE Insurance Quote!</h1>
      <h2>Enter your information below:</h2>
      <p>
        <b>Email:</b> {email}
      </p>
      {applicationFields.map((item, index) => {
        return (
          <ApplicationInput
            key={index}
            label={item.label}
            field={item.field}
            onInputChange={onInputChange}
          />
        );
      })}
      <h2>Select the type of insurance you are interested in:</h2>
      <select name="insuranceType" onChange={onSelectChange}>
        {policyTypes.map((type, index) => (
          <option key={index} value={type.field}>{type.label}</option>
        ))}
      </select>
      <button onClick={cancel}>Cancel</button>
    </div>
  );
};

export default Application;