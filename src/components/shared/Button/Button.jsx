import React from 'react';
import './Button.module.css';

const Button = ({ type = 'button', label = '', onClick = () => null }) => (
  <button type={type} onClick={onClick}>
    {label}
  </button>
);

export default Button;
