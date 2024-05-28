import React from 'react';
import { Meta, StoryFn } from "@storybook/react";

import AuthLayout from "./AuthLayout";
import { IAuthLayout } from "./types";


const meta = {
    title: 'Components/Cards/AuthLayout',
    component: AuthLayout,
    parameters: {
        layout: 'centered',
        docs: {
            story: {
                inline: true,
                iframeHeight: 800,
            }
        },
    },
    argTypes: {},
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IAuthLayout> = (args) => <AuthLayout {...args} />;

export const AuthLayoutExample = Template.bind({});

AuthLayoutExample.args = {
    children: (
        <div>
            <h3>This is the content of the Auth Layout</h3>
            <p>Here you can put any content you want to showcase within the card.</p>
        </div>
    ),
};
