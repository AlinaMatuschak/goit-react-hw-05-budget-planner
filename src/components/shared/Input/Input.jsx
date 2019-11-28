import React from 'react';
import './Input.module.css';

const Input = ({
  type = ' text',
  value = '',
  onChange = () => null,
  name = '',
}) => <input type={type} value={value} onChange={onChange} name={name} />;

export default Input;
