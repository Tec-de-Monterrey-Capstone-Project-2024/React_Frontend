import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ForgotPassword from './ForgotPassword';

const meta = {
  title: 'Components/ForgotPassword',
  component: ForgotPassword,
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

const Template: StoryFn<{}> = (args) => <ForgotPassword {...args} />;

export const ForgotPasswordExample = Template.bind({});
ForgotPasswordExample.args = {
  title: 'Title',
  subtitle: 'subtitle',
  metricUnit: 'n',
};