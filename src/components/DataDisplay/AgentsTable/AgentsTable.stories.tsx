import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import AgentsTable from "./AgentsTable";
import { IAgentsTable } from "./types";


const meta = {
    title: 'Components/DataDisplay/AgentsTable',
    component: AgentsTable,
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

const Template: StoryFn<IAgentsTable> = (args) => <AgentsTable {...args} />;

export const AgentsTableExample = Template.bind({});

// AgentsTableExample.args = {
//     agents: []
// };
