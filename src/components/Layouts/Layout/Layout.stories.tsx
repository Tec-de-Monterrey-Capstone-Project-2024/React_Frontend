import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from "./Layout";
import { ILayout } from "./types";


const meta = {
    title: 'Components/Layouts/Layout',
    component: Layout,
    parameters: {
        layout: 'fullscreen',
        docs: {
            story: {
                inline: false,
                height: '500px',
            }
        },
    },
    argTypes: {},
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<ILayout> = (args) => (
    <Router>
        <Layout {...args} />
    </Router>
);

export const LayoutExample = Template.bind({});

LayoutExample.args = {
    children: (
        <section className='container'>
            <h3>This is the content of the Layout</h3>
            <p>Here you can put any content you want to showcase within the card.</p>
        </section>
    ),
};
