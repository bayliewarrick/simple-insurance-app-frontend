import React from "react";

type FormCheckboxProps = {
  label: string;
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: { label: string; field: string }[];
};

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  label,
  onCheckboxChange,
  options,
}) => {
  return (
    <div className="application-select-item">
      
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={option.field}
            name={option.field}
            onChange={onCheckboxChange}
          />
          <label htmlFor={option.field}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default FormCheckbox;