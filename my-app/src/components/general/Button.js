import React from 'react';
import general from './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button({
  label,
  className,
  onClick,
  icon,
}) {
  return (
    <button type="button" className={general.button + ' ' + className} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
    </button>
  );
}
