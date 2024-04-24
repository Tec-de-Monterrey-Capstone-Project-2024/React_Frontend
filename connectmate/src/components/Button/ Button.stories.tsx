import React from 'react';
import { StoryFn, Meta } from '@storybook/react/types-6-0';
import Button from './Button';
import { ButtonProps } from './types';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: 'Light Button',
  variant: 'light',
  onClick: () => {},
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Dark Button',
  variant: 'dark',
  onClick: () => {},
};
