import { Meta, StoryFn } from "@storybook/react";
import AlertsTable from './AlertsTable';

const meta = {
    title: 'Components/AlertsTable',
    component: AlertsTable,
    parameters: {
        layout: 'centered',
        docs: {
            story: {
                inline: true,
                iframeHeight: 400,
            }
        },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn = () => <AlertsTable />;

export const Default = Template.bind({});

