import React from 'react';
import './styles.css';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ id, testid, onClick, variant, title, color, className, type, content, children }) => (
  <button
    id={id}
    data-testid={testid}
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