import React from 'react';
import general from './general.css';

export default function SelectInput({
  label,
  options,
  className,
  value,
  setValue,
}) {
  const handleSelect = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={general.selectInput}>
      <label htmlFor={label}>{label}</label>
      <select
        className={className}
        value={value}
        onChange={handleSelect}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
