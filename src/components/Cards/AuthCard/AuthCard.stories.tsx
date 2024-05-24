import React from 'react';
import { Meta, StoryFn } from "@storybook/react";

import AuthCard from "./AuthCard";
import { IAuthCard } from "./types";


const meta = {
    title: 'Components/Cards/AuthCard',
    component: AuthCard,
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

const Template: StoryFn<IAuthCard> = (args) => <AuthCard {...args} />;

export const AuthCardExample = Template.bind({});

AuthCardExample.args = {
    children: (
        <div>
            <h3>This is the content of the Auth Card</h3>
            <p>Here you can put any content you want to showcase within the card.</p>
        </div>
    ),
};
