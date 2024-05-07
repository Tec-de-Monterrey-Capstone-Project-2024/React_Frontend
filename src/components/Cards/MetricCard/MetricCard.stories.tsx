import { Meta, StoryFn } from "@storybook/react";
import MetricCard from "./MetricCard";
import { IMetricCard } from "./types";
import React from 'react';

const meta = {
    title: 'Components/Cards/MetricCard',
    component: MetricCard,
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
        title: { control: 'text' },
        unit: {
            options: [null, '%', 's'],
            control: { type: 'select' },
        },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IMetricCard> = (args) => <MetricCard {...args} />;

export const MetricCardExample = Template.bind({});
MetricCardExample.args = {
    title: 'Title',
    subtitle: 'This is the subtitle',
    minValue: 0,
    maxValue: 100,
    value: 58,
    unit: '%',
    positive_upside: true
};
