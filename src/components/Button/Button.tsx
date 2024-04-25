// Importing the React library to use JSX and other React features.
import React from 'react';
// Importing the type definition for ButtonProps to ensure the button receives the correct props.
import { ButtonProps } from './types'; 

// Importing CSS styles that will be applied to the button.
import './styles.css';

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', type = 'button', variant, color = 'defaultColor', title = '' , content = '' }) => (
  <button
    className={`button ${variant} ${color} ${className}`.trim()} // ${color} 
    onClick={onClick}
    type={type}
    title={title} 
    content={content} 
  >
    {children}
  </button>
);

// Exporting the Button component to be used in other parts of the application.
export default Button;