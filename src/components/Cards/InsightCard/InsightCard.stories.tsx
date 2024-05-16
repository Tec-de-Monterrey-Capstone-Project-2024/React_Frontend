import { Meta, StoryFn } from "@storybook/react";
import React from 'react';
import InsightCard from "./InsightCard";
import { IInsightCard } from "./types";

const meta = {
    title: 'Components/Cards/InsightCard',
    component: InsightCard,
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
        borderColor: {
            options: ['green', 'red', 'yellow'],
            control: { type: 'select'},
        },
        color: {
            options: ['white',  'gray'],
            control: { type: 'select'},
        },
        title: { control: 'text'},
        description: { control: 'text'}
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IInsightCard> = (args) => <InsightCard {...args} />;

export const InsightCardExample = Template.bind({});
InsightCardExample.args = {
    title: 'Reassignment',
    description1: 'Assign more agents to Reimbursements Queue',
    description2: 'More clients than agents',
    color: 'gray',
    borderColor: "green",
    showBoxBorder: true
}