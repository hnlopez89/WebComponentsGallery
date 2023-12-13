
import {COLOR_ATTRIBUTE, 
        SIZE_ATTRIBUTE} from "../../../WebComponents/Tabs/constants.js"
import {DARK_OPTION,
        LIGHT_OPTION,
        LARGE_OPTION,
        SMALL_OPTION} from "../../../WebComponents/Tabs/constants.js"
import {CONTENT_TO_APPEND} from '../index.js';
import { createComponentTabs } from './index.js';

import React from 'react';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const argOpt = {}

argOpt[COLOR_ATTRIBUTE] = {
control: { type: 'select' },
options: [DARK_OPTION, LIGHT_OPTION],
}
argOpt[SIZE_ATTRIBUTE] = {
control: { type: 'select' },
options: [LARGE_OPTION, SMALL_OPTION],
}
argOpt[CONTENT_TO_APPEND] = {
control: { type: 'text' },
}
export default {
title: 'COMPONENTS/Tabs',
// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
argTypes: {...argOpt},
parameters: {
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
var defaultArgs = {}
defaultArgs[COLOR_ATTRIBUTE] = DARK_OPTION
defaultArgs[CONTENT_TO_APPEND] = `<button data-tab-controller="pointer1" >TAB-1</button>
<button data-tab-controller="pointer2" >TAB-2</button>
<button data-tab-controller="pointer3">TAB-3</button>
<button data-tab-controller="pointer4" >TAB-4</button>

<h1 style={color: "red"} data-tab-content="pointer1">
    content 1 tab
</h1>
<h1 data-tab-content="pointer2">
    content 2 tab
</h1>
<h1 data-tab-content="pointer3">
    content 3 tab
</h1>
<h1 data-tab-content="pointer4">
    content 4 tab
</h1>`

const Template = ({...args }) => {
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;

if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]

return createComponentTabs({ ...args });
};

export const tabs = Template.bind({});
tabs.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


