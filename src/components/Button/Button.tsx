import React from 'react';
import './styles.css';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', type = 'button', variant ,color = 'defaultColor', title = '' , content = '' }) => (
  <button
    className={`button ${variant} ${color} ${className}`.trim()}
    onClick={onClick}
    type={type}
    title={title}
    content={content}
  >
    {children}
  </button>
);

export default Button;