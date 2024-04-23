import { Meta, StoryFn } from "@storybook/react";
import LoginForgot from "./LoginForgot";
import { title } from "process";
import Layout from "../../Layouts/Layout";

const meta: Meta = {
    title: 'Components/LoginForgot',
    component: LoginForgot,
    parameters: {
        layout: 'centered',
        docs: {
            storyDescription: 'A login/forgot password component.',
            inline: true,
            iframeHeight: 400,
        }
    }
};

export default meta;

const Template: StoryFn = () => <LoginForgot />;

export const Default = Template.bind({});
Default.storyName = 'Default';