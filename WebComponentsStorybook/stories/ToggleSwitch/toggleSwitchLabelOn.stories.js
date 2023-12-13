

import {COLOR_ATTRIBUTE, 
        STATE_ATTRIBUTE,
        WIDTH_ATTRIBUTE,
        ANIMATION_DURATION_ATTRIBUTE } from "../../../WebComponents/ToggleSwitch/constants.js"

import {DARK_OPTION,
        LIGHT_OPTION,
        STATE_ON_OPTION,
        STATE_OFF_OPTION,
        FIT_CONTENT_OPTION,
        FULL_OPTION
    } from "../../../WebComponents/ToggleSwitch/constants.js"
import {CONTENT_TO_APPEND} from '../index.js';
import { createComponentToggleSwitch } from './index.js';
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

argOpt[CONTENT_TO_APPEND] = {
control: { type: 'text' },
}
argOpt[ANIMATION_DURATION_ATTRIBUTE] = {
  control: { type: 'text' },
  }
argOpt[STATE_ATTRIBUTE] = {
    control: { type: 'select' },
    options: [STATE_ON_OPTION, STATE_OFF_OPTION],
    }
argOpt[WIDTH_ATTRIBUTE] = {
  control: { type: 'select' },
  options: [FIT_CONTENT_OPTION, FULL_OPTION],
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
defaultArgs[STATE_ATTRIBUTE] = STATE_ON_OPTION
defaultArgs[COLOR_ATTRIBUTE] = DARK_OPTION
defaultArgs[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION
defaultArgs[ANIMATION_DURATION_ATTRIBUTE] = "0.1"
defaultArgs[CONTENT_TO_APPEND] = `<select  id="cars">
<option value="off_option">COMPRAR</option>
<option value="on_option">ALQUILAR</option>
</select>`

const Template = ({...args }) => {
    
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;
if (!args.hasOwnProperty(STATE_ATTRIBUTE)) args[STATE_ATTRIBUTE] = defaultArgs[STATE_ATTRIBUTE]
if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
if (!args.hasOwnProperty(WIDTH_ATTRIBUTE)) args[WIDTH_ATTRIBUTE] = defaultArgs[WIDTH_ATTRIBUTE]
if (!args.hasOwnProperty(ANIMATION_DURATION_ATTRIBUTE)) args[ANIMATION_DURATION_ATTRIBUTE] = defaultArgs[ANIMATION_DURATION_ATTRIBUTE]
if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]

return createComponentToggleSwitch({ ...args });
};

export const ToggleSwitchLabelOn = Template.bind({});
ToggleSwitchLabelOn.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


