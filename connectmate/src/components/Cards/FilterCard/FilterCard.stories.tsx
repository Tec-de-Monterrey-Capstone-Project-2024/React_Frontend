import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';
import FilterCard from './FilterCard';

export default {
    title: 'Components/FilterCard',
    component: FilterCard,
} as Meta;

const Template: ComponentStory<typeof FilterCard> = (args: any) => <FilterCard {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const WithCustomOptions = Template.bind({});
WithCustomOptions.args = {
};
