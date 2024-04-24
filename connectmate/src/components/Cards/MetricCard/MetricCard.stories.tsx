import { Meta, StoryFn } from "@storybook/react";
import MetricCard from "./MetricCard";
import { IMetricCard } from "./types";

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
        color: {
            options: ['black', 'red', 'green', 'yellow', 'gray'],
            control: { type: 'select' },
        },
        title: { control: 'text' },
        content: { control: 'text' },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IMetricCard> = (args) => <MetricCard {...args} />;

export const MetricCardExample = Template.bind({});
MetricCardExample.args = {
    title: 'Title',
    subtitle: 'subtitle',
    metricUnit: 0,
};
