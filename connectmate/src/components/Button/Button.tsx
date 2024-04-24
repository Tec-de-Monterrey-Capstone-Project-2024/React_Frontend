// Button.tsx

import React from 'react';
import { CustomButtonProps, getVariantStyles } from './types'; // Adjust the import path as necessary

export const Button: React.FC<CustomButtonProps> = ({
  label,
  variant = 'default', // default variant if none is provided
  size = 'medium',
  rounded = false,
  action = 'none',
  onClick,
  ...props
}) => {
  // Get styles for the specified variant
  const variantStyles = getVariantStyles(variant);

  // Combine the styles
  const buttonClasses = `
    ${variantStyles.backgroundColor} 
    ${variantStyles.textColor} 
    ${rounded ? 'rounded-full' : ''} 
    ... // other styles based on size, etc.
  `;

  // Handle the onClick action
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    // Handle modify/delete actions if necessary
    if (action === 'modify') {
      // perform modify action
    } else if (action === 'delete') {
      // perform delete action
    }
  };

  return (
    <button className={buttonClasses} onClick={handleClick} {...props}>
      {label}
    </button>
  );
};

export default Button;
