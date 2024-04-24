import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";
import { IButton } from "./types";

const meta = {
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
        color: {
            options: ['blue'],
            control: { type: 'select' },
        },
        title: { control: 'text' },
        content: { control: 'text' },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IButton> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Show more',
    color: 'blue',
};