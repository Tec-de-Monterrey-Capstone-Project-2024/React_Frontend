import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

const Template: StoryFn<any> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'large',
  index: 0,
  children: 'Primary Button',
  onClick: () => console.log('Button clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'small',
  index: 1,
  children: 'Secondary Button',
  onClick: () => console.log('Button clicked'),
};