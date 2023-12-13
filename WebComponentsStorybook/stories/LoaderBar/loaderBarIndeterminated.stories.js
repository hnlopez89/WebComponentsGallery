import {THEME_ATTRIBUTE,SIZE_ATTRIBUTE,} from "../../../WebComponents/LoaderBar/constants.js"
import {DARK_OPTION,
    LIGHT_OPTION,
    LARGE_OPTION,
    SMALL_OPTION,
    } from "../../../WebComponents/LoaderBar/constants.js"
import { createComponentLoaderBar } from "./index.js";
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
options: [LARGE_OPTION, SMALL_OPTION],
}


export default {
    title: 'COMPONENTS/Loader Bar',
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
defaultArgs[THEME_ATTRIBUTE] = LIGHT_OPTION
defaultArgs[SIZE_ATTRIBUTE] = LARGE_OPTION
const Template = ({...args }) => {
    if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
    if (!args.hasOwnProperty(THEME_ATTRIBUTE)) args[THEME_ATTRIBUTE] = defaultArgs[THEME_ATTRIBUTE]
return createComponentLoaderBar({ ...args });
};

export const LoaderBarIndeterminated = Template.bind({});
LoaderBarIndeterminated.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args