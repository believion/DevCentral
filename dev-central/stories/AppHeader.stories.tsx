import React from "react"
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppHeader from "../components/AppHeader"

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'AppHeader',
    component: AppHeader,
  } as ComponentMeta<typeof AppHeader>;

  const Template: ComponentStory<typeof AppHeader> = (args) => <AppHeader {...args} />;

  export const Primary = Template.bind({});

