import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './types';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

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
