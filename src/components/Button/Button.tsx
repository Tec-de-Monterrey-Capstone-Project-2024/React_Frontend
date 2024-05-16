import React from 'react';
import './styles.css';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ onClick, variant, title, color, className, type, content, children }) => (
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