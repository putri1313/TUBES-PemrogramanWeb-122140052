import React from 'react';

const FormInput = ({ label, type, placeholder, className }) => {
  return (
    <div>
      <label htmlFor={label} className="block mb-2">{label}</label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        className={`border p-2 w-full ${className}`}
      />
    </div>
  );
};

export default FormInput;