// Importing necessary modules from React and Storybook.
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
// Importing the ButtonProps type definition from the local 'types' file.
import { ButtonProps } from './types';
// Importing the Button component from the local file.
import Button from './Button';

// Default export for the Storybook configuration for the Button component.
export default {
  title: 'Components/Button', // The title that will appear in the Storybook sidebar.
  component: Button, // The actual component that these stories will represent.
} as Meta;

// A template function for creating stories with different props.
const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// Binding the template to create individual stories.

// A story for a Button with text 'Text' and the 'light' style variant.
export const Text = Template.bind({});
Text.args = {
  children: 'Text', // The text that will appear inside the button.
  variant: 'light', // The style variant that will be applied to the button.
  onClick: () => {}, // The onClick handler for the button (noop in this case).
};

// A story for a Button with text 'Green Button' and additional className.
export const Green = Template.bind({});
Green.args = {
  children: 'Green Button',
  variant: 'light',
  className: 'green', // Additional CSS class to apply custom styles.
  onClick: () => {},
};

// Further stories for Buttons with various text and style variants.
export const Light = Template.bind({});
Light.args = {
  children: 'Light Button',
  variant: 'light',
  onClick: () => {},
  // Make sure the 'variant' matches a class in 'styles.css'
};

export const Grey = Template.bind({});
Grey.args = {
  children: 'Grey Button',
  variant: 'grey',
  onClick: () => {},
};

export const Pink = Template.bind({});
Pink.args = {
  children: 'Pink Button',
  variant: 'pink',
  onClick: () => {},
};

export const LightGreen = Template.bind({});
LightGreen.args = {
  children: 'Light Green Button',
  variant: 'lightgreen',
  onClick: () => {},
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Dark Button',
  variant: 'dark',
  onClick: () => {},
};

export const DarkBlue = Template.bind({});
DarkBlue.args = {
  children: 'DarkBlue Button',
  variant: 'darkblue',
  onClick: () => {},
};

export const Yellow = Template.bind({});
Yellow.args = {
  children: 'Yellow Button',
  variant: 'yellow',
  onClick: () => {},
};

export const DarkGreen = Template.bind({});
DarkGreen.args = {
  children: 'DarkGreen Button',
  variant: 'darkgreen',
  onClick: () => {},
};

// Each story above allows you to see different button variants in Storybook.