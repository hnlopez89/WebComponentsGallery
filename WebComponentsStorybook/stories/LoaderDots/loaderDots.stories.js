import {THEME_ATTRIBUTE,
    SIZE_ATTRIBUTE, 
    TYPE_DETAIL_ATTRIBUTE} from "../../../WebComponents/LoaderDots/constants.js"

import {DARK_OPTION,
    LIGHT_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    ON_OPTION,
    OFF_OPTION,
    } from "../../../WebComponents/LoaderDots/constants.js"
import { createComponentLoaderDots } from "./index.js";
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
argOpt[THEME_ATTRIBUTE] = {
control: { type: 'select' },
options: [DARK_OPTION, LIGHT_OPTION],
}
argOpt[SIZE_ATTRIBUTE] = {
control: { type: 'select' },
options: [LARGE_OPTION, MEDIUM_OPTION, SMALL_OPTION],
}
argOpt[TYPE_DETAIL_ATTRIBUTE] = {
    control: { type: 'select' },
    options: [ON_OPTION, OFF_OPTION],
}

export default {
    title: 'COMPONENTS/Loader Dots',
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
defaultArgs[THEME_ATTRIBUTE] = DARK_OPTION
defaultArgs[SIZE_ATTRIBUTE] = LARGE_OPTION
defaultArgs[TYPE_DETAIL_ATTRIBUTE] = ON_OPTION
//defaultArgs[LABEL_ATTRIBUTE] = 'Testing'
const Template = ({...args }) => {
    if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
    if (!args.hasOwnProperty(THEME_ATTRIBUTE)) args[THEME_ATTRIBUTE] = defaultArgs[THEME_ATTRIBUTE]
    if (!args.hasOwnProperty(TYPE_DETAIL_ATTRIBUTE)) args[TYPE_DETAIL_ATTRIBUTE] = defaultArgs[TYPE_DETAIL_ATTRIBUTE]
return createComponentLoaderDots({ ...args });
};

export const LoaderDots = Template.bind({});
LoaderDots.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args