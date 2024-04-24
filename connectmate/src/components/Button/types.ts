// types.ts

import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string; // The text to be displayed on the button
  variant?: 'ignore' | 'done' | 'solve' | 'custom'; // The variant type of the button
  rounded?: boolean; // Determines if the button should have rounded corners
  size?: 'small' | 'medium' | 'large'; // Size of the button
  action?: 'modify' | 'delete' | 'none'; // Specifies if the button has a special action
  onClick?: () => void; // Optional click handler
  children?: ReactNode; // Content within the button
}

export interface ButtonVariant {
  backgroundColor: string; // Background color of the button
  textColor: string; // Text color of the button
  borderColor?: string; // Border color of the button
  hoverBackgroundColor?: string; // Background color on hover state
  hoverTextColor?: string; // Text color on hover state
  borderRadius?: string; // Border-radius for rounded corners
}

// This map will contain styles for different variants.
// You can easily extend this map with new variants in the future.
export const buttonVariants: Record<string, ButtonVariant> = {
  ignore: {
    backgroundColor: 'bg-gray-400',
    textColor: 'text-white',
    hoverBackgroundColor: 'bg-gray-500',
  },
  done: {
    backgroundColor: 'bg-green-500',
    textColor: 'text-white',
    hoverBackgroundColor: 'bg-green-600',
  },
  solve: {
    backgroundColor: 'bg-blue-500',
    textColor: 'text-white',
    hoverBackgroundColor: 'bg-blue-600',
  },
  // Add more variants as needed
};

// Utility function to get styles for a variant
export const getVariantStyles = (variant: string): ButtonVariant => {
  return buttonVariants[variant] || buttonVariants['default'];
};
