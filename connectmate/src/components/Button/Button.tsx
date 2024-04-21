import React from 'react';
import './Button.css';
// Importing the ButtonProps interface from the types file
import ButtonProps from './types';

// Defining the Button component with React.FC type and destructuring the props
export const Button: React.FC<ButtonProps> = ({
  children, // The content of the button
  onClick, // The function to be called when the button is clicked
  variant, // The variant of the button
  size, // The size of the button
  index, // The index of the button
}) => {
  // Returning a button element with the specified classes, onClick function, and children
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${variant} ${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Exporting the Button component as the default export
export default Button;