import { Meta, StoryFn } from "@storybook/react";
import ContentCard from "./ContentCard";
import { IContentCard } from "./types";

const meta = {
    title: 'Components/Cards/ContentCard',
    component: ContentCard,
    parameters: {
        layout: 'centered',
        docs: {
            story: {
                inline: true,
                iframeHeight: 400,
            }
        },
    },
    argTypes: {},
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IContentCard> = (args) => <ContentCard {...args} />;

export const ContentCardExample = Template.bind({});

ContentCardExample.args = {
    children: (
        <div>
            <h3>This is the content of the ContentCard</h3>
            <p>Here you can put any content you want to showcase within the card.</p>
        </div>
    ),
};
