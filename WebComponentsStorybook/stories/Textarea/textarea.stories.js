import {COLOR_ATTRIBUTE,
    SIZE_ATTRIBUTE, 
    DESCRIPTOR_ATTRIBUTE,
    STATE_ATTRIBUTE,
    TITLE_ATTRIBUTE,
    FORM_WIDTH_ATTRIBUTE
    } from "../../../WebComponents/Textarea/constants.js"

import {BLACK_OPTION,
    WHITE_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    INACTIVE_OPTION,
    INITIAL_OPTION,  
    } from "../../../WebComponents/Textarea/constants.js"
import { createComponentTextArea } from './index.js';
import { CONTENT_TO_APPEND } from "../index.js";
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
options: [BLACK_OPTION, WHITE_OPTION],
}
argOpt[SIZE_ATTRIBUTE] = {
control: { type: 'select' },
options: [LARGE_OPTION, MEDIUM_OPTION],
}
argOpt[STATE_ATTRIBUTE] = {
control: { type: 'select' },
options: [INACTIVE_OPTION, INITIAL_OPTION],
}
argOpt[TITLE_ATTRIBUTE] = {
    control: { type: 'text' },
    }
argOpt[DESCRIPTOR_ATTRIBUTE] = {
    control: { type: 'text' },
    }
argOpt[FORM_WIDTH_ATTRIBUTE] = {
    control: { type: 'text' },
    }
argOpt[CONTENT_TO_APPEND] = {
    control: { type: 'text' },
    }
export default {
title: 'COMPONENTS/TextArea',
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
defaultArgs[COLOR_ATTRIBUTE] = BLACK_OPTION
defaultArgs[SIZE_ATTRIBUTE] = LARGE_OPTION
defaultArgs[STATE_ATTRIBUTE] = INITIAL_OPTION
defaultArgs[FORM_WIDTH_ATTRIBUTE] = ""
defaultArgs[CONTENT_TO_APPEND] = `<textarea> </textarea>`
//defaultArgs[FORM_WIDTH_ATTRIBUTE] = ""
const Template = ({...args }) => {
//if (!args.hasOwnProperty(HIERARCHY_ATTRIBUTE)) args[HIERARCHY_ATTRIBUTE] = defaultArgs[HIERARCHY_ATTRIBUTE]
if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
//if (!args.hasOwnProperty(STATE_ATTRIBUTE)) args[STATE_ATTRIBUTE] = defaultArgs[STATE_ATTRIBUTE]
if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
if (!args.hasOwnProperty(STATE_ATTRIBUTE)) args[STATE_ATTRIBUTE] = defaultArgs[STATE_ATTRIBUTE]
//if (!args.hasOwnProperty(FORM_WIDTH_ATTRIBUTE)) args[FORM_WIDTH_ATTRIBUTE] = defaultArgs[FOR]
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;
if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]
return createComponentTextArea({ ...args });
};

export const TextArea = Template.bind({});
TextArea.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


