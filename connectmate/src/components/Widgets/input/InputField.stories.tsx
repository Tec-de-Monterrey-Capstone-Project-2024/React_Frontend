import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import InputField from './InputField';
import { useState } from 'react';

export default {
  title: 'Example/InputField',
  component: InputField,
} as Meta;

const Template: StoryFn = (args) => {
  const [value, setValue] = useState('');
  return <InputField label={''} {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Type something...',
  variant: '1',
};

export const Default2 = Template.bind({});
Default2.args = {
  label: 'Label',
  placeholder: 'Type something...',
  variant: '2',
};
