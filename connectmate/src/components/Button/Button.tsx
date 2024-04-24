import React from 'react';

import { ButtonProps } from './types';

<<<<<<< HEAD
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
=======
import './styles.css';

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', type = 'button', variant }) => (
  <button className={`button ${variant} ${className}`.trim()} onClick={onClick} type={type}>
>>>>>>> 518b638b15fd0505539efbacb0eef87f06e02df1
    {children}
  </button>
);

<<<<<<< HEAD
export default Button;
=======
export default Button;
>>>>>>> 518b638b15fd0505539efbacb0eef87f06e02df1
