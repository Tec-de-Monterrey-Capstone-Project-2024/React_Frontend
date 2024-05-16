import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FilterCard from './FilterCard';
import { FilterCardProps } from './types'; // Importing types

export default {
    title: 'Components/Cards/FilterCard',
    component: FilterCard,
    argTypes: {
        priorityOptions: {
            control: 'object',
            description: 'Array of priority options with name and color'
        },
        kpiOptions: {
            control: 'object',
            description: 'Array of KPI strings'
        }
    },
} as Meta;

const Template: StoryFn<typeof FilterCard> = (args: FilterCardProps) => <FilterCard {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithCustomOptions = Template.bind({});
WithCustomOptions.args = {
    priorityOptions: [
        { name: 'Critical', color: 'bg-purple-200' },
        { name: 'Normal', color: 'bg-blue-200' }
    ],
    kpiOptions: [
        'Customer Satisfaction',
        'Average Handling Time'
    ]
};
