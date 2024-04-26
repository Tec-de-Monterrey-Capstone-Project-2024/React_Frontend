import React from "react";
import './InputField.css'
import {InputFieldProps} from './type'

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, value, onChange, variant }) => {
  const variantClass = variant ? `variant${variant}` : '';
  return (
    <div className={`input-field-container ${variantClass}`}>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;