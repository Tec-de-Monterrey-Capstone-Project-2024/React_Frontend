import React from 'react';
import './Button.css';

import { ButtonProps } from './ButtonProps';

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  size,
  index,
}) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${variant} ${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;