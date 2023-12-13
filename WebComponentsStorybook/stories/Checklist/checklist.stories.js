import {COLOR_ATTRIBUTE,
        SIZE_ATTRIBUTE,
        STATE_ATTRIBUTE,
        ENABLE_ATTRIBUTE,
        LABEL_ATTRIBUTE,
        ERROR_MESSAGE_ATTRIBUTE
        } from "../../../WebComponents/Checkbox/constants.js"

import {BLACK_OPTION,
        WHITE_OPTION,
        LARGE_OPTION,
        MEDIUM_OPTION,
        NORMAL_OPTION,
        SELECTED_OPTION,
        INDETERMINATED_OPTION,
        ERROR_OPTION,
        ON_OPTION,
        OFF_OPTION
    } from "../../../WebComponents/Checkbox/constants.js"

import { CONTENT_TO_APPEND } from '../index.js';
import {createComponentCheckBox} from './index.js'
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
    options: [NORMAL_OPTION, SELECTED_OPTION, INDETERMINATED_OPTION, ERROR_OPTION],
    }
argOpt[ENABLE_ATTRIBUTE] = {
    control: { type: 'select' },
    options: [ON_OPTION, OFF_OPTION],
    }
argOpt[CONTENT_TO_APPEND] = {
    control: { type: 'text' },
    }
argOpt[ERROR_MESSAGE_ATTRIBUTE] = {
    control: { type: 'text' },
    }
argOpt[LABEL_ATTRIBUTE] = {
    control: { type: 'text' },
    }
export default {
title: 'COMPONENTS/Checkbox',
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
defaultArgs[ERROR_MESSAGE_ATTRIBUTE] = 'Error Message'
defaultArgs[CONTENT_TO_APPEND] = `
<input type="checkbox" id="htmlcheckbox" value="ComponentCheckbox" disabled="false">
<label for="htmlcheckbox">Checkbox label</label>
`

const Template = ({...args }) => {
    if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
    if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
    if (!args.hasOwnProperty(STATE_ATTRIBUTE)) args[STATE_ATTRIBUTE] = defaultArgs[STATE_ATTRIBUTE]
    if (!args.hasOwnProperty(ENABLE_ATTRIBUTE)) args[ENABLE_ATTRIBUTE] = defaultArgs[ENABLE_ATTRIBUTE]

    
    if (!args.hasOwnProperty(ERROR_MESSAGE_ATTRIBUTE)) args[ERROR_MESSAGE_ATTRIBUTE] = defaultArgs[ERROR_MESSAGE_ATTRIBUTE]
    //if (!args.hasOwnProperty(FORM_WIDTH_ATTRIBUTE)) args[FORM_WIDTH_ATTRIBUTE] = defaultArgs[FOR]
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]
    if (args[ENABLE_ATTRIBUTE] === OFF_OPTION) {
        args[CONTENT_TO_APPEND] = args[CONTENT_TO_APPEND].replace("false", "true");
    }
    delete args[ENABLE_ATTRIBUTE]
    defaultArgs[CONTENT_TO_APPEND] = args[CONTENT_TO_APPEND]
    return createComponentCheckBox({ ...args });
    };
    
    export const Checkbox = Template.bind({});
    Checkbox.args= {...defaultArgs}