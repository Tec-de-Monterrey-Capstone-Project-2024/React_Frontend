import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InsightDescription from './InsightDescription';

export default {
    title: 'Components/InsightDescription',
    component: InsightDescription,
} as ComponentMeta<typeof InsightDescription>;

const Template: ComponentStory<typeof InsightDescription> = (args) => <InsightDescription {...args} />;


/*talcual del figma */
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