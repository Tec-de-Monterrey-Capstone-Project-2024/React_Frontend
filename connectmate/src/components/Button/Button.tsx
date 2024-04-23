// Import React from the 'react' package
import React from 'react';

// Define the props interface for the Button component
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string; // Label text for the button
  variant: 'ignore' | 'done' | 'solve'; // Variant prop to determine the styling of the button
}

// Define the Button component using function component syntax with ButtonProps as its type
export const Button: React.FC<ButtonProps> = ({ label, variant, ...props }) => {
  // Base styles applied to all variants of the button
  const baseStyles = 'px-4 py-2 rounded font-semibold text-white focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out';
  
  // Variant-specific styles to modify appearance based on the variant prop
  const variantStyles = {
    ignore: 'bg-gray-400 hover:bg-gray-500', // Styles for 'ignore' variant
    done: 'bg-green-500 hover:bg-green-600', // Styles for 'done' variant
    solve: 'bg-blue-500 hover:bg-blue-600',  // Styles for 'solve' variant
  };

  // Render the button with combined base and variant-specific styles, and spread the rest of the props
  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {label} // Display the label text inside the button
    </button>
  );
};

// Export the Button component as the default export of this module
export default Button;
