import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import LoginForm from './LoginForm';

const meta = {
  title: 'Components/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: true,
        iframeHeight: 400,
      }
    },
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    metricUnit: { control: 'text' },
  },
  tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<{}> = (args) => <LoginForm {...args} />;

export const LoginFormExample = Template.bind({});
LoginFormExample.args = {
  title: 'Title',
  subtitle: 'subtitle',
  metricUnit: 'n',
};