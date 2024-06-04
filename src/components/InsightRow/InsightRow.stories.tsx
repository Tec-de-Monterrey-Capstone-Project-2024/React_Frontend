import { Meta, StoryFn } from "@storybook/react";
import React from 'react';
import InsightRow from "./InsightRow";
import { IInsightRow } from "./types";
import { BrowserRouter as Router } from "react-router-dom";

const meta = {
    title: 'Components/InsightRow',
    component: InsightRow,
    parameters: {
        layout: 'fullscreen',
        docs: {
            story: {
                inline: true,
                iframeHeight: 200,
            }
        },
    },
    argTypes: {
        id: { control: 'number'},
        title: { control: 'text'},
        color: { control: 'text'},
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IInsightRow> = (args) =>
    <Router>
        <InsightRow {...args} />;
    </Router>

export const InsightRowExample = Template.bind({});
InsightRowExample.args = {
    id: 0,
    title: 'Low Service Level',
    color: 'white',
}