import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

// Define a template for the Button component stories
const Template: StoryFn<any> = (args) => <Button {...args} />;

// Primary button story
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary', // Set the variant of the button to 'primary'
  size: 'large', // Set the size of the button to 'large'
  index: 0, // Set the index of the button to 0
  children: 'Primary Button', // Set the text of the button to 'Primary Button'
  onClick: () => console.log('Button clicked'), // Set the onClick handler to log a message to the console
};

// Secondary button story
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary', // Set the variant of the button to 'secondary'
  size: 'small', // Set the size of the button to 'small'
  index: 1, // Set the index of the button to 1
  children: 'Secondary Button', // Set the text of the button to 'Secondary Button'
  onClick: () => console.log('Button clicked'), // Set the onClick handler to log a message to the console
};