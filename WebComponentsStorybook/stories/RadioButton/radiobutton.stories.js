

import {COLOR_ATTRIBUTE,
    SIZE_ATTRIBUTE, 
    STATE_ATTRIBUTE,
    ENABLE_ATTRIBUTE} from "../../../WebComponents/RadioButton/constants.js"

import {BLACK_OPTION,
    WHITE_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    NORMAL_OPTION,
    SELECTED_OPTION,
    ON_OPTION,
    OFF_OPTION,
    } from "../../../WebComponents/RadioButton/constants.js"
import {CONTENT_TO_APPEND} from '../index.js';
import { createComponentRadioButton } from "./index.js";
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
    options: [NORMAL_OPTION, SELECTED_OPTION],
}
argOpt[ENABLE_ATTRIBUTE] = {
    control: { type: 'select' },
    options: [ON_OPTION, OFF_OPTION],
}
argOpt[CONTENT_TO_APPEND] = {
    control: { type: 'text' },
    }



export default {
    title: 'COMPONENTS/Radio Button',
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
defaultArgs[STATE_ATTRIBUTE] = NORMAL_OPTION
defaultArgs[ENABLE_ATTRIBUTE] = ON_OPTION
defaultArgs[CONTENT_TO_APPEND] = `
<input type="radio" id="ComponentRB" name="FIELD_SELECTION" value="radioButton">
<label for="ComponentRB">Component Radio Button</label>
`
//defaultArgs[LABEL_ATTRIBUTE] = 'Testing'
const Template = ({...args }) => {
    if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
    if (!args.hasOwnProperty(STATE_ATTRIBUTE)) args[STATE_ATTRIBUTE] = defaultArgs[STATE_ATTRIBUTE]
    if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
    if (!args.hasOwnProperty(ENABLE_ATTRIBUTE)) args[ENABLE_ATTRIBUTE] = defaultArgs[ENABLE_ATTRIBUTE]
    if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]
return createComponentRadioButton({ ...args });
};

export const RadioButton = Template.bind({});
RadioButton.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


