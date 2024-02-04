import React, { useState, useEffect } from "react";
import ApplicationInput from "./ApplicationInput";
import FormCheckbox from "./FormCheckbox";

const applicationFields: { label: string; field: string }[] = [
  { label: "First Name", field: "firstname" },
  { label: "Last Name", field: "lastname" },
  { label: "Phone Number", field: "phonenumber" },
  { label: "Company Name", field: "companyname" },
];

const policyTypes: { label: string; field: string }[] = [
  { label: "Auto Liability", field: "autoliability" },
  { label: "General Liability", field: "generalliability" },
  { label: "Employee Liability", field: "employeeliability" },
];

type ApplicationFormProps = {
  email: string;
  formValues: { [key: string]: string | boolean };
  setFormValues: (formValues: { [key: string]: string | boolean }) => void;
};

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  email,
  formValues,
  setFormValues,
}) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.checked
    });
  };

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
      {policyTypes.map((item, index) => {
        return (
          <FormCheckbox
            key={index}
            label={item.label}
            options={[item]}
            onCheckboxChange={onCheckboxChange}
          />
        );
      })}
    </div>
  );
};

export default ApplicationForm;
