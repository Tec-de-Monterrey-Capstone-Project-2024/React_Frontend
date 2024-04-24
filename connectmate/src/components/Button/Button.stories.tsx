import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { ButtonProps } from './types';
import Button from './Button';

import agentIcon from '../../assets/icons/agent.svg';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
  children: 'Text',
  variant: 'light',
  onClick: () => {},
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Dark Button',
  variant: 'dark',
  onClick: () => {},
};

export const Green = Template.bind({});
Green.args = {
  children: 'Green Button',
  variant: 'light',
  className: 'green',
  onClick: () => {},
};

// export const Red = Template.bind({});
// Red.args = {
//   children: 'Green Button',
//   variant: 'light',
//   className: 'green',
//   onClick: () => {},
// };

export const Icon = Template.bind({});
Icon.args = {
  children: <img src={agentIcon} alt="Agent icon" />,
  variant: 'light',
  className: 'green icon',
  onClick: () => {},
};
