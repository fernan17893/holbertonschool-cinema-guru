import React from 'react';
import general from './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Input({
  label,
  type,
  className,
  value,
  setValue,
  icon,
  inputAttributes = {},
}) {
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={general.input}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        className={className}
        value={value}
        onChange={handleInput}
        {...inputAttributes}
      />
      {icon && <FontAwesomeIcon icon={icon} />}
    </div>
  );
}
