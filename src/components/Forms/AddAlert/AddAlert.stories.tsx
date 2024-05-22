import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import AddAlert from './AddAlert';

export default {
  title: 'Example/AddAlert',
  component: AddAlert,
} as Meta<typeof AddAlert>;

const Template: StoryFn<typeof AddAlert> = (args) => <AddAlert {...args} />;

export const Default = Template.bind({});
Default.args = {
};

