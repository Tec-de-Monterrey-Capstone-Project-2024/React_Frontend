import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './types';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
  children: 'Text',
  variant: 'grey',
  onClick: () => {},
};

/*
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./types";

const meta: Meta<ButtonProps> = {
    title: 'Components/Button',
    component: Button,
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
        variant: {
            options: ['light', 'dark', 'custom'],  // Variants
            control: { type: 'select' }
        },
        color: {
            options: ['red', 'blue', 'green'], // Ejemplos de colores
            control: { type: 'select' },
        },
        title: { control: 'text' },
        content: { control: 'text' },
    },
    tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'button',
    variant: 'light',
    color: 'blue' // Ejemplo de un color por defecto
};
*/