import { Meta, StoryFn } from "@storybook/react";
import Select from "./Select";
import { ISelect } from "./types";
import React from 'react';

const meta = {
    title: 'Components/Select',
    component: Select,
    parameters: {
        layout: 'fullscreen',
        docs: {
            story: {
                inline: false,
                iframeHeight: 400,
            }
        },
    },
    argTypes: {
        placeholder: { control: 'text' },
        color: {
            options: ['green', 'gray'],
            control: { type: 'select' },
        },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<ISelect> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Filters',
    color: 'green',
};
