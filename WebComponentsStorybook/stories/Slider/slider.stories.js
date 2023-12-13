

import {COLOR_ATTRIBUTE,
        MAX_LABEL_ATTRIBUTE,
        MIN_LABEL_ATTRIBUTE,
        TEMPLATE_ATTRIBUTE,
        UNIT_ATTRIBUTE
        } from "../../../WebComponents/Slider/constants.js"

import {DARK_OPTION,
        LIGHT_OPTION,
        SIMPLE_OPTION,
        MULTIPLE_OPTION} from "../../../WebComponents/Slider/constants.js"
import {CONTENT_TO_APPEND} from '../index.js';
import { createComponentSlider } from "./index.js";
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


argOpt[TEMPLATE_ATTRIBUTE] = {
    control: { type: 'select' },
    options: [SIMPLE_OPTION, MULTIPLE_OPTION],
}
argOpt[CONTENT_TO_APPEND] = {
    control: { type: 'text' },
    }

argOpt[MIN_LABEL_ATTRIBUTE] = {
      control: { type: 'text' },
      }
argOpt[MAX_LABEL_ATTRIBUTE] = {
      control: { type: 'text' },
      }
argOpt[UNIT_ATTRIBUTE] = {
      control: { type: 'text' },
      }
export default {
    title: 'COMPONENTS/Slider',
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
defaultArgs[TEMPLATE_ATTRIBUTE] = SIMPLE_OPTION
defaultArgs[MIN_LABEL_ATTRIBUTE] = ""
defaultArgs[MAX_LABEL_ATTRIBUTE] = ""
defaultArgs[UNIT_ATTRIBUTE] = ""
defaultArgs[CONTENT_TO_APPEND] = `
<input type="range"  min="0" max="1000" step="1">
`
//defaultArgs[LABEL_ATTRIBUTE] = 'Testing'
const Template = ({...args }) => {

    if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
    if (!args.hasOwnProperty(MIN_LABEL_ATTRIBUTE)) args[MIN_LABEL_ATTRIBUTE] = defaultArgs[MIN_LABEL_ATTRIBUTE]
    if (!args.hasOwnProperty(MAX_LABEL_ATTRIBUTE)) args[MAX_LABEL_ATTRIBUTE] = defaultArgs[MAX_LABEL_ATTRIBUTE]
    if (!args.hasOwnProperty(UNIT_ATTRIBUTE)) args[UNIT_ATTRIBUTE] = defaultArgs[UNIT_ATTRIBUTE]
    if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]
return createComponentSlider({ ...args });
};

export const Slider = Template.bind({});
Slider.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


