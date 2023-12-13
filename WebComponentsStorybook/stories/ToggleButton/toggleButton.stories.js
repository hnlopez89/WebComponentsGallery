

import {SIZE_ATTRIBUTE, 
        COLOR_ATTRIBUTE, 
        STATE_ATTRIBUTE, 
        ICON_SELECTION_ATTRIBUTE_OFF,
        ICON_SELECTION_ATTRIBUTE_ON} from "../../../WebComponents/ToggleButton/constants.js"

import {LARGE_OPTION,
        MEDIUM_OPTION,
        DARK_OPTION,
        LIGHT_OPTION,
        STATE_ON_OPTION,
        STATE_OFF_OPTION} from "../../../WebComponents/ToggleButton/constants.js"
import {CONTENT_TO_APPEND} from '../index.js';
import { createComponentToggleButton } from './index.js';
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
argOpt[SIZE_ATTRIBUTE] = {
control: { type: 'select' },
options: [LARGE_OPTION, MEDIUM_OPTION],
}
argOpt[COLOR_ATTRIBUTE] = {
control: { type: 'select' },
options: [DARK_OPTION, LIGHT_OPTION],
}
argOpt[STATE_ATTRIBUTE] = {
control: { type: 'select' },
options: [STATE_ON_OPTION, STATE_OFF_OPTION],
}

argOpt[ICON_SELECTION_ATTRIBUTE_OFF] = {
control: { type: 'select' },
options: Object.keys(Icons),
}
argOpt[ICON_SELECTION_ATTRIBUTE_ON] = {
    control: { type: 'select' },
    options: Object.keys(Icons),
    }
argOpt[CONTENT_TO_APPEND] = {
control: { type: 'text' },
}
export default {
title: 'COMPONENTS/Toggle',
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
defaultArgs[SIZE_ATTRIBUTE] = LARGE_OPTION
defaultArgs[COLOR_ATTRIBUTE] = LIGHT_OPTION
defaultArgs[STATE_ATTRIBUTE] = STATE_OFF_OPTION
defaultArgs[CONTENT_TO_APPEND] = `<button  onclick="alert('Hi!')">Click Me!</button>`

const Template = ({...args }) => {
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;
if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
if (!args.hasOwnProperty(STATE_ATTRIBUTE)) args[STATE_ATTRIBUTE] = defaultArgs[STATE_ATTRIBUTE]
if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]

return createComponentToggleButton({ ...args });
};

export const ToggleButton = Template.bind({});
ToggleButton.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


