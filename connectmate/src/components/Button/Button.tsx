import React from 'react';

import './styles.css';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  variant
}) => (
  <button
    className={`button ${variant} ${className}`.trim()}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export default Button;

