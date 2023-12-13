

import {HIERARCHY_ATTRIBUTE,
    SIZE_ATTRIBUTE, 
    COLOR_ATTRIBUTE, 
    THEME_ATTRIBUTE,
    STATE_ATTRIBUTE, 
    LINE_ATTRIBUTE,
    ICON_SELECTION_ATTRIBUTE,
    WIDTH_ATTRIBUTE } from "../../../WebComponents/Button/constants.js"

import {PRIMARY_OPTION,
    SECONDARY_OPTION,
    HYPERLINK_OPTION,
    DESTRUCTIVE_OPTION,
    ROUNDED_OUTLINED_OPTION,
    ROUNDED_SOLID_OPTION,
    TERTIARY_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    DARK_OPTION,
    LIGHT_OPTION,
    ACTIVE_OPTION,
    INACTIVE_OPTION,
    FOCUS_OPTION,
    FIT_CONTENT_OPTION,
    FULL_OPTION,
    HOVER_OPTION,
    TITLE_OPTION,
    PARAGRAPH_OPTION} from "../../../WebComponents/Button/constants.js"
import {CONTENT_TO_APPEND} from '../index.js';
import { createComponentButton } from './index.js';
import Icons from "../../../WebComponents/Icons/allIcons.js"
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
argOpt[HIERARCHY_ATTRIBUTE] = {
control: { type: 'select' },
options: [PRIMARY_OPTION,
          SECONDARY_OPTION,
          HYPERLINK_OPTION,
          DESTRUCTIVE_OPTION,
          ROUNDED_OUTLINED_OPTION,
          ROUNDED_SOLID_OPTION,
          TERTIARY_OPTION],
}
argOpt[SIZE_ATTRIBUTE] = {
control: { type: 'select' },
options: [LARGE_OPTION, MEDIUM_OPTION, SMALL_OPTION],
}
argOpt[WIDTH_ATTRIBUTE] = {
control: { type: 'select' },
options: [FULL_OPTION, FIT_CONTENT_OPTION],
}
argOpt[COLOR_ATTRIBUTE] = {
control: { type: 'select' },
options: [DARK_OPTION, LIGHT_OPTION],
if: { arg: HIERARCHY_ATTRIBUTE, neq: DESTRUCTIVE_OPTION },
}
argOpt[THEME_ATTRIBUTE] = {
    control: { type: 'select' },
    options: [DARK_OPTION, LIGHT_OPTION],
    if: { arg: HIERARCHY_ATTRIBUTE, eq: DESTRUCTIVE_OPTION },
    }
argOpt[STATE_ATTRIBUTE] = {
control: { type: 'select' },
options: [ACTIVE_OPTION, INACTIVE_OPTION],
if: { arg: HIERARCHY_ATTRIBUTE, neq: HYPERLINK_OPTION },
}
argOpt[LINE_ATTRIBUTE] = {
    control: { type: 'select' },
    options: [PARAGRAPH_OPTION, TITLE_OPTION],
    if: { arg: HIERARCHY_ATTRIBUTE, eq: HYPERLINK_OPTION },
    }
argOpt[ICON_SELECTION_ATTRIBUTE] = {
control: { type: 'select' },
options: Object.keys(Icons),

}
argOpt[CONTENT_TO_APPEND] = {
control: { type: 'text' },
}
export default {
title: 'COMPONENTS/Buttons',
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
defaultArgs[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
// defaultArgs[SIZE_ATTRIBUTE] = null
// defaultArgs[WIDTH_ATTRIBUTE] = null
 defaultArgs[COLOR_ATTRIBUTE] = LIGHT_OPTION
 defaultArgs[THEME_ATTRIBUTE] = LIGHT_OPTION
 defaultArgs[LINE_ATTRIBUTE] = PARAGRAPH_OPTION
// defaultArgs[STATE_ATTRIBUTE] = null
defaultArgs[CONTENT_TO_APPEND] = `<button  onClick="alert('Hi!')">Click Me!</button>`

const Template = ({...args }) => {
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;

if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]
if (args[HIERARCHY_ATTRIBUTE] === TERTIARY_OPTION || args[HIERARCHY_ATTRIBUTE] === HYPERLINK_OPTION) delete args[ICON_SELECTION_ATTRIBUTE]

return createComponentButton({ ...args });
};

export const AllButtons = Template.bind({});
AllButtons.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


