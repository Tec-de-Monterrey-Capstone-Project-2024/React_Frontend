import { Meta, StoryFn } from "@storybook/react";
import Sidebar from "./Sidebar";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const meta = {
    title: 'Components/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
        docs: {
            story: {
                inline: true,
                iframeHeight: 400,
            }
        },
    },
    argTypes: {
        color: {
            options: ['black', 'red', 'green', 'yellow', 'gray'],
            control: { type: 'select' },
        },
        title: { control: 'text' },
        content: { control: 'text' },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn = (args) => <BrowserRouter><Sidebar {...args} /></BrowserRouter>;

export const SidebarExample = Template.bind({});
