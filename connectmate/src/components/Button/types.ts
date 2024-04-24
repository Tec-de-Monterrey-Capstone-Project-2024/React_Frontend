// Importing the ButtonHTMLAttributes type from the 'react' library
import { ButtonHTMLAttributes } from 'react';

// Defining an interface named 'ButtonProps' that extends the ButtonHTMLAttributes<HTMLButtonElement> type
// This allows us to include all the default attributes of an HTML button element, while also adding our own custom props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // The 'variant' prop is optional and can be one of three string literals: 'primary', 'secondary', or 'tertiary'
  variant?: 'primary' | 'secondary' | 'tertiary';
  // The 'size' prop is optional and can be one of three string literals: 'small', 'medium', or 'large'
  size?: 'small' | 'medium' | 'large';
  // The 'loading' prop is optional and is a boolean that indicates whether the button is in a loading state
  loading?: boolean;
  // The 'disabled' prop is optional and is a boolean that indicates whether the button is disabled
  disabled?: boolean;
  // The 'index' prop is optional and is a number that can be used to identify the button
  index?: number;
  // The 'onClick' prop is optional and is a function that will be called when the button is clicked
  onClick?: () => void;
  // The 'children' prop is optional and is a React node that will be rendered inside the button
  children?: React.ReactNode;
}

// Exporting the 'ButtonProps' interface as the default export
export default ButtonProps;