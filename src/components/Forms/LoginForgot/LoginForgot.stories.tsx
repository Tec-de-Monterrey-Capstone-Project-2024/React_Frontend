import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import LoginForgot from "./LoginForgot";
import { formProps } from './types';



const meta: Meta = {
    title: 'Components/LoginForgot',
    component: LoginForgot,
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
        title: {
            description: 'Title of the component. It dynamically changes between "Login" and "Forgot Password" based on ShowLoginForgot state ',
            control: { type: 'text' } 
        },
        label: {
            description: 'Label of IAM Role.',
            control: { type: 'text' }
        },
        label2: {
            description: 'Label for password in Login state.',
            control: { type: 'text' }
        },
        button: {
            description: 'Text displayed on the button. It dynamically changes between "Login" and "Send recovery code" based on ShowLoginForgot state.',
            control: { type: 'text' }
        },
        link: {
            description: 'Text displayed on the link.',
            control: { type: 'text' }
        }
    }
} as Meta;

export default meta;

const Template: StoryFn<formProps> = () => <LoginForgot title='Login' label='IAM Role' label2='Password' button='Login' link='Forgot Password' />;

export const Default = Template.bind({});
Default.storyName = 'Login Forgot component';
Default.args = {
    title: 'Login',
    label: 'IAM Role',
    label2: 'Password',
    button: 'Login',
    link: 'Forgot Password',
};

