import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import InsightDescription from './InsightDescription';

export default {
    title: 'Components/InsightDescription',
    component: InsightDescription,
} as Meta<typeof InsightDescription>;

const Template: StoryFn<typeof InsightDescription> = (args) => <InsightDescription {...args} />;


/*talcual del figma */
export const Default = Template.bind({});
Default.args = {
    title: 'Reconfigure virtual floor',
    message: 'Not enough people on the Reimbursements Queue. Consider allocating more agents from the Receipts Queue to the Reimbursements queue.',
  situationTitle: 'Situation',
  actionTitle: 'Action',
  insightRootCause: 'Sample root cause',
  insightImpact: 'Sample impact',
  insightPrevention: 'Sample prevention',
  insightSeverity: 'LOW',
  insightCategory: 'CRITICAL',
};
