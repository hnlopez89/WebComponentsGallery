
import {COLOR_ATTRIBUTE, THEME_ATTRIBUTE} from "../../../WebComponents/Divider/constants.js"
import {DARK_OPTION, LIGHT_OPTION, WHITE_OPTION, GREY_OPTION, BLACK_OPTION} from "../../../WebComponents/Divider/constants.js"
import { createComponentDivider } from "./index.js";
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
  options: [WHITE_OPTION, GREY_OPTION, BLACK_OPTION],
  }
argOpt[THEME_ATTRIBUTE] = {
control: { type: 'select' },
options: [DARK_OPTION, LIGHT_OPTION],
}
  

export default {
    title: 'COMPONENTS/Divider',
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
defaultArgs[THEME_ATTRIBUTE] = LIGHT_OPTION

//defaultArgs[LABEL_ATTRIBUTE] = 'Testing'
const Template = ({...args }) => {
  if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
  if (!args.hasOwnProperty(THEME_ATTRIBUTE)) args[THEME_ATTRIBUTE] = defaultArgs[THEME_ATTRIBUTE]
  return createComponentDivider({ ...args });
};

export const Divider = Template.bind({});
Divider.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


