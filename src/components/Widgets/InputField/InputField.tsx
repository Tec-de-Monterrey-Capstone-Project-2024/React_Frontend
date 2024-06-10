import React from "react";
import './InputField.css'
import {InputFieldProps} from './type';

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, value, onChange, variant }) => {
  const variantClass = variant ? `variant${variant}` : '';
  return (
    <div className={`input-field-container ${variantClass}`}>
      <label>{label}</label>
      <input
        data-testid="input-field"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;