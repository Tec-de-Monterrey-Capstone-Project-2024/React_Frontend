import React from 'react';
import './styles.css';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', type = 'button', variant ,color = 'defaultColor', title = '' , content = '' }) => (
  <button
    className={`button ${variant} ${color} ${className}`.trim()} // ${color} 
    onClick={onClick}
    type={type}
    title={title} // Cambio
    content={content} // Cambio
  >
    {children}
  </button>
);

export default Button;