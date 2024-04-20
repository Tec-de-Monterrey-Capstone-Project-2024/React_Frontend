import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Button from './Button';
import { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  index: 1,
  styles: '',
};
