// Import React from the 'react' package
import React from 'react';
// Import necessary Storybook components for configuration
import { Meta, StoryObj } from '@storybook/react';
// Import the Button component and its props type from the local Button file
import Button, { ButtonProps } from './Button';

// Default export to define Storybook metadata for the Button component
export default {
  title: 'Components/Button', // Title of the component in the Storybook navigator
  component: Button, // Specifies the actual component being documented
} as Meta<typeof Button>; // Casts the export to ensure correct type with the component

// Define a Story object for the 'Ignore' state of the Button component
export const Ignore: StoryObj<ButtonProps> = {
  args: { // Arguments passed to the Button component
    label: 'Ignore', // Label prop for the Button
    variant: 'ignore', // Variant prop to customize the Button styling
  },
};

// Define a Story object for the 'Done' state of the Button component
export const Done: StoryObj<ButtonProps> = {
  args: {
    label: 'Done', // Label prop for the Button
    variant: 'done', // Variant prop to customize the Button styling
  },
};

// Define a Story object for the 'Solve' state of the Button component
export const Solve: StoryObj<ButtonProps> = {
  args: {
    label: 'Solve', // Label prop for the Button
    variant: 'solve', // Variant prop to customize the Button styling
  },
};
