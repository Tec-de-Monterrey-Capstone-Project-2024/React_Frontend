import { Meta, StoryFn } from "@storybook/react";
import React from 'react';
import InsightRow from "./InsightRow";
import { IInsightRow } from "./types";

const meta = {
    title: 'InsightRow',
    component: InsightRow,
    parameters: {
        layout: 'centered',
        docs: {
            story: {
                inline: true,
                iframeHeight: 200,
            }
        },
    },
    argTypes: {
        title: { control: 'text'},
        color: { control: 'text'},
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IInsightRow> = (args) => <InsightRow {...args} />;

export const InsightRowExample = Template.bind({});
InsightRowExample.args = {
    title: 'Assign more agents to Reimbursements Queue',
    color: 'white',
}