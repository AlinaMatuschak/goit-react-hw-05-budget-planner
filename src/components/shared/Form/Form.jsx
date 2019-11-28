import React from 'react';
import './Form.module.css';

const Form = ({ onSubmit = () => null, children }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

export default Form;
