import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from '../Button';
import { ButtonProps } from '@mui/material/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  index: 1,
  styles: '',
};
