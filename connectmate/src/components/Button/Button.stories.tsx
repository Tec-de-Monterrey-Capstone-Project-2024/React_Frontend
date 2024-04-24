// Button.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { CustomButtonProps } from './types'; // Adjust the import path as necessary

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['ignore', 'done', 'solve'], // Add your variants here
    },
    // You can define argTypes for other properties as needed
  },
} as Meta<CustomButtonProps>;

// Template for creating stories using the correct Story type
const Template: StoryFn<CustomButtonProps> = (args) => <Button {...args} />;

// Story for the 'Ignore' variant of the Button
export const Ignore = Template.bind({});
Ignore.args = {
  label: 'Ignore',
  variant: 'ignore',
  // Add other default args for this story if necessary
};

// Story for the 'Done' variant of the Button
export const Done = Template.bind({});
Done.args = {
  label: 'Done',
  variant: 'done',
  // Add other default args for this story if necessary
};

// Story for the 'Solve' variant of the Button
export const Solve = Template.bind({});
Solve.args = {
  label: 'Solve',
  variant: 'solve',
  // Add other default args for this story if necessary
};

// Continue to add more stories for each variant you support
