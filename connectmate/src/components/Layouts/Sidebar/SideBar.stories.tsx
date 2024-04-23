import { Meta, StoryFn } from "@storybook/react";
import Sidebar from "./Sidebar";
import React from "react";
import {BrowserRouter} from "react-router-dom";

const meta = {
    title: 'Components/Layouts/Sidebar',
    component: Sidebar,
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
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn = (args) => <BrowserRouter><Sidebar {...args} /></BrowserRouter>;

export const Default = Template.bind({});
Default.args = {};
