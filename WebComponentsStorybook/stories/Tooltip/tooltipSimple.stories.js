

import {COLOR_ATTRIBUTE,
    LINES_ATTRIBUTE,
    POSITION_ATTRIBUTE,
    ALIGNMENT_ATTRIBUTE,
    TITLE_ATTRIBUTE,
    DEFAULT_EVENT} from "../../../WebComponents/Tooltip/constants.js"

import {DARK_OPTION,
    LIGHT_OPTION,
    MULTI_LINE_OPTION,
    SINGLE_LINE_OPTION,
    NORMAL_OPTION,
    ARROW_BOTTOM,
    ARROW_TOP,
    ARROW_LEFT,
    ARROW_RIGHT,
    START_OPTION,
    MIDDLE_OPTION,
    END_OPTION,
    } from "../../../WebComponents/Tooltip/constants.js"
import {CONTENT_TO_APPEND} from '../index.js';
import { createComponentTooltipButton } from "./index.js";
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
argOpt[LINES_ATTRIBUTE] = {
control: { type: 'select' },
options: [MULTI_LINE_OPTION, SINGLE_LINE_OPTION],
}
argOpt[POSITION_ATTRIBUTE] = {
    control: { type: 'select' },
    options: [ARROW_BOTTOM, ARROW_LEFT, ARROW_RIGHT, ARROW_TOP],
}
argOpt[ALIGNMENT_ATTRIBUTE] = {
    control: { type: 'select' },
    options: [START_OPTION, END_OPTION, MIDDLE_OPTION],
}
argOpt[CONTENT_TO_APPEND] = {
    control: { type: 'text' },
    }



export default {
    title: 'COMPONENTS/Tooltip',
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
defaultArgs[LINES_ATTRIBUTE] = SINGLE_LINE_OPTION
defaultArgs[POSITION_ATTRIBUTE] = ARROW_BOTTOM
defaultArgs[ALIGNMENT_ATTRIBUTE] = START_OPTION
defaultArgs[CONTENT_TO_APPEND] = `
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat non illum cumque praesentium magnam repellat eum vero quae optiofdsajklfd sajklf dsklajlk fdjsaklj fdaslkj lkñadskldjf ds fjdsla</p>
`
//defaultArgs[LABEL_ATTRIBUTE] = 'Testing'
const Template = ({...args }) => {
    if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
    if (!args.hasOwnProperty(LINES_ATTRIBUTE)) args[LINES_ATTRIBUTE] = defaultArgs[LINES_ATTRIBUTE]
    if (!args.hasOwnProperty(POSITION_ATTRIBUTE)) args[POSITION_ATTRIBUTE] = defaultArgs[POSITION_ATTRIBUTE]
    if (!args.hasOwnProperty(ALIGNMENT_ATTRIBUTE)) args[ALIGNMENT_ATTRIBUTE] = defaultArgs[ALIGNMENT_ATTRIBUTE]
    if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]
return createComponentTooltipButton({ ...args });
};

export const TooltipSimple = Template.bind({});
TooltipSimple.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


