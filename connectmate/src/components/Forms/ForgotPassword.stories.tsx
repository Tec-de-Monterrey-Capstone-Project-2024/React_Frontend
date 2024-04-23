import React from 'react';
import { Story, Meta } from '@storybook/react';
import ForgotPassword from './ForgotPassword';

export default {
  title: 'Components/ForgotPassword',
  component: ForgotPassword,
} as Meta;

interface ForgotPasswordProps {
  iamRole: string;
}

const Template: Story<ForgotPasswordProps> = (args) => <ForgotPassword {...args} />;

export const Default = Template.bind({});
Default.args = {
  iamRole: '',
};