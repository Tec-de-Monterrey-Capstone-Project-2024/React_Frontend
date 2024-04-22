//import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ContentCard from './ContentCard';
import { ContentCardProps } from './types';

export default {
  title: 'Example/ContentCard',
  component: ContentCard,
} as Meta;

const Template: StoryFn<typeof ContentCard> = (args: ContentCardProps) => <ContentCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a content card with text inside',
};

export const WithTitleAndContent = Template.bind({});
WithTitleAndContent.args = {
  children: (
    <>
      <h2>Title of the Card</h2>
      <p>The content goes here and can include any valid React nodes.</p>
    </>
  ),
};
