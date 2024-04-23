import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import LoginForm from './LoginForm';

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
} as Meta;

interface LoginFormProps {
  name: string;
  password: string;
}

const Template: Story<LoginFormProps> = (args) => (
  <Router>
    <LoginForm {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  name: '',
  password: '',
};

// Custom styles for Storybook preview
const storybookStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f7fafc', // Background color similar to the actual application
};

const containerStyles: React.CSSProperties = {
  width: '400px', // Adjust width as needed
};

// Style the container to visually represent the LoginForm component
Default.decorators = [
  (Story) => (
    <div style={storybookStyles}>
      <div style={containerStyles}>
        <Story />
      </div>
    </div>
  ),
];