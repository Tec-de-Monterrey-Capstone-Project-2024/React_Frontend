import React from 'react';
import './styles.css';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  variant,
  color = 'defaultColor', // Cambio
  title = '' , // Cambio
  content = '',   //Cambio
}) => (
  <button
    className={`button ${variant} ${color} ${className}`.trim()} // ${color} 
    onClick={onClick}
    type={type as "button" | "submit" | "reset" | undefined} // Fix: Update type prop
    title={title} // Cambio
    content={content} // Cambio
  >
    {children}
  </button>
);

export default Button;