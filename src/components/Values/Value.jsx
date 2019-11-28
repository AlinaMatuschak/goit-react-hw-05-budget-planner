import React from 'react';
import { valueIteam, labelValue, amount } from './Values.module.css';

const Value = ({ label, value, isPositive }) => {
  const styleColor = isPositive ? '#388E3C' : '#D32F2F';
  return (
    <div className={valueIteam} style={{ color: styleColor }}>
      <p className={labelValue}>{label}</p>
      <p className={amount}>{value}&nbsp;&#x24;</p>
    </div>
  );
};

export default Value;
