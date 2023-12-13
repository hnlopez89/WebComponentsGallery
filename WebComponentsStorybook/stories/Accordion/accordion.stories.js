

import {COLOR_ATTRIBUTE,
    SIZE_ATTRIBUTE, 
    OPEN_ATTRIBUTE,
    TITLE_ATTRIBUTE} from "../../../WebComponents/Accordion/constants.js"

import {DARK_OPTION,
    LIGHT_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    OPENED_OPTION,
    CLOSED_OPTION,
    TITLE_DEFAULT} from "../../../WebComponents/Accordion/constants.js"
import {CONTENT_TO_APPEND} from '../index.js';
import { createComponentAccordion } from "./index.js";
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
options: [LARGE_OPTION, MEDIUM_OPTION, SMALL_OPTION],
}
argOpt[OPEN_ATTRIBUTE] = {
control: { type: 'select' },
options: [OPENED_OPTION, CLOSED_OPTION],
}
argOpt[TITLE_ATTRIBUTE] = {
control: { type: 'text' },
}
argOpt[CONTENT_TO_APPEND] = {
control: { type: 'text' },
}

export default {
title: 'COMPONENTS/Accordion',
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
defaultArgs[SIZE_ATTRIBUTE] = LARGE_OPTION
defaultArgs[OPEN_ATTRIBUTE] = CLOSED_OPTION
defaultArgs[TITLE_ATTRIBUTE] = TITLE_DEFAULT
defaultArgs[CONTENT_TO_APPEND] = '<h1>Some generic content</h1>'
const Template = ({...args }) => {
//if (!args.hasOwnProperty(HIERARCHY_ATTRIBUTE)) args[HIERARCHY_ATTRIBUTE] = defaultArgs[HIERARCHY_ATTRIBUTE]
//if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
//if (!args.hasOwnProperty(STATE_ATTRIBUTE)) args[STATE_ATTRIBUTE] = defaultArgs[STATE_ATTRIBUTE]
//if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
//if (!args.hasOwnProperty(ICON_ATTRIBUTE)) args[ICON_ATTRIBUTE] = defaultArgs[ICON_ATTRIBUTE]
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;
return createComponentAccordion({ ...args });
};

export const Accordion = Template.bind({});
Accordion.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


