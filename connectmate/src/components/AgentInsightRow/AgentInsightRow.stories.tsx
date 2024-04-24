import { Meta, StoryFn } from "@storybook/react";
import AgentInsightRow from "./AgentInsightRow";
import { IAgentInsightRow } from "./types";
import React from 'react';

const meta = {
    title: 'Components/AgentInsightRow',
    component: AgentInsightRow,
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
            options: ['gray', 'white'],
            control: { type: 'select' },
        },
        title: { control: 'text' }
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IAgentInsightRow> = (args) => <AgentInsightRow {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Title',
    color: 'gray',
};
