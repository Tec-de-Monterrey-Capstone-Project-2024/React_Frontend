import { Meta, StoryFn } from "@storybook/react";
import GaugeChart from "./GaugeChart";
import { IGaugeChart } from "./types";
import React from 'react';

const meta = {
    title: 'Components/DataDisplay/GaugeChart',
    component: GaugeChart,
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

const Template: StoryFn<IGaugeChart> = (args) => <GaugeChart {...args} />;

export const GaugeChartExample = Template.bind({});

GaugeChartExample.args = {
    min: 0,
    max: 100,
    value: 10
};
