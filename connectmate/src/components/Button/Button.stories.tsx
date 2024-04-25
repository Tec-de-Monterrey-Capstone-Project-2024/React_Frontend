import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ButtonProps } from './types';
import Button from './Button';

//import agentIcon from '../../assets/icons/agent.svg';

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


export const Green = Template.bind({});
Green.args = {
  children: 'Green Button',
  variant: 'light',
  className: 'green',
  onClick: () => {},
};

export const Light = Template.bind({});
Light.args = {
  children: 'Light Button',
  variant: 'light',
  onClick: () => {},
  // Asegúrate de que `variant` coincida con una clase en `styles.css`
};


export const Grey = Template.bind({});
Grey.args = {
  children: 'Grey Button',
  variant: 'grey',
  onClick: () => {},
};

export const Pink = Template.bind({});
Pink.args = {
  children: 'Pink Button',
  variant: 'pink',
  onClick: () => {},
};

export const LightGreen = Template.bind({});
LightGreen.args = {
  children: 'Light Green Button',
  variant: 'lightgreen',
  onClick: () => {},
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Dark  Button',
  variant: 'dark',
  onClick: () => {},
};

export const DarkBlue = Template.bind({});
DarkBlue.args = {
  children: 'DarkBlue  Button',
  variant: 'darkblue',
  onClick: () => {},
};

export const Yellow = Template.bind({});
Yellow.args = {
  children: 'Yellow  Button',
  variant: 'yellow',
  onClick: () => {},
};

export const DarkGreen = Template.bind({});
DarkGreen.args = {
  children: 'DarkGreen  Button',
  variant: 'darkgreen',
  onClick: () => {},
};
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Botones del figma
export const IgnoreButton = Template.bind({});
IgnoreButton.args = {
  children: 'Ignore',
  variant: 'grey', // Asumiendo que grey es para el botón Ignore
  onClick: () => alert('Ignore Button clicked'),
};

export const DoneButton = Template.bind({});
DoneButton.args = {
  children: 'Done',
  variant: 'green', // Asumiendo que green es para el botón Done
  onClick: () => alert('Done Button clicked'),
};

export const SolveButton = Template.bind({});
SolveButton.args = {
  children: 'Solve',
  variant: 'darkblue', // Asumiendo que darkblue es para el botón Solve
  onClick: () => alert('Solve Button clicked'),
};
