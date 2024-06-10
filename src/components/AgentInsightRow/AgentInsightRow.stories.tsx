import { Meta, StoryFn } from "@storybook/react";
import AgentInsightRow from "./AgentInsightRow";
import { IAgentInsightRow } from "./types";
import { BrowserRouter as Router } from "react-router-dom";
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

const Template: StoryFn<IAgentInsightRow> = (args) =>
    <Router>
        <AgentInsightRow {...args} />;
    </Router>

export const Default = Template.bind({});
Default.args = {
    id: "1",
    firstName: 'John',
    lastName: 'Doe',
    color: 'gray',
};
