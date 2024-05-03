/*
import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import InsightDescription from './InsightDescription';

export default {
    title: 'Components/InsightDescription',
    component: InsightDescription,
} as Meta<typeof InsightDescription>;

const Template: StoryFn<typeof InsightDescription> = (args) => <InsightDescription {...args} />;


export const Default = Template.bind({});
Default.args = {
    title: 'Reconfigure virtual floor',
    message: 'Not enough people on the Reimbursements Queue. Consider allocating more agents from the Receipts Queue to the Reimbursements queue.',
};


export const NoTitle = Template.bind({});
NoTitle.args = {
    title: ' ',
    message: ' ',
};

export const LongMessage = Template.bind({});
LongMessage.args = {
    title: 'title',
    message: 'message',
};
*/

import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import InsightDescription from './InsightDescription';

export default {
    title: 'Components/InsightDescription',
    component: InsightDescription,
} as Meta<typeof InsightDescription>;

const Template: StoryFn<typeof InsightDescription> = (args) => <InsightDescription {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Reconfigure virtual floor',
    message1: 'Not enough people on the Reimbursements Queue.',
    message2: 'Consider allocating more agents from the Receipts Queue to the Reimbursements queue.',
    containerStyle: {
        border: '1px solid black',
        padding: '10px',
        borderRadius: '5px',
    },
    titleStyle: {
        color: 'black',
        fontWeight: 'bold',
    },
};