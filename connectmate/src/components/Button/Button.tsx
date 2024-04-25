// Importing the React library to use JSX and other React features.
import React from 'react';
// Importing the type definition for ButtonProps to ensure the button receives the correct props.
import { ButtonProps } from './types'; 

// Importing CSS styles that will be applied to the button.
import './styles.css';

// Defining the Button component as a functional component with types from ButtonProps.
const Button: React.FC<ButtonProps> = ({
  // Destructuring the props to get the ones needed for the button.
  children, // The content to be displayed inside the button.
  onClick, // Function to be called when the button is clicked.
  className = '', // Optional additional CSS classes that can be passed to the button.
  type = 'button', // The type of the button, with a default value of 'button'.
  variant, // The style variant of the button, which will determine its appearance.
}) => {
  // Constructing a string of CSS classes based on the variant and any additional classes provided.
  const buttonClass = `button ${variant} ${className}`.trim();

  // Returning the button element with the applied CSS classes and other properties.
  return (
    <button
      className={buttonClass} // Applying the CSS classes to the button.
      onClick={onClick} // Setting the onClick event handler for the button.
      type={type} // Setting the button type (button, submit, reset).
    >
      {children} // Rendering the children inside the button, which could be text or other elements.
    </button>
  );
};

// Exporting the Button component to be used in other parts of the application.
export default Button;
