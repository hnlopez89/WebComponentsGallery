import {THEME_ATTRIBUTE,SIZE_ATTRIBUTE,PROGRESS_STATE_ATTRIBUTE} from "../../../WebComponents/LoaderBar/constants.js"
import {DARK_OPTION,
    LIGHT_OPTION,
    LARGE_OPTION,
    SMALL_OPTION,
    } from "../../../WebComponents/LoaderBar/constants.js"
import { createComponentLoaderBar2 } from "./index.js";
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
options: [LARGE_OPTION,  SMALL_OPTION],
}
argOpt[PROGRESS_STATE_ATTRIBUTE] = {
  control: { type: 'text' },
}


export default {
    title: 'COMPONENTS/Loader Progress Bar',
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
defaultArgs[PROGRESS_STATE_ATTRIBUTE] = `10`
//defaultArgs[LABEL_ATTRIBUTE] = 'Testing'
const Template = ({...args }) => {
    if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
    if (!args.hasOwnProperty(THEME_ATTRIBUTE)) args[THEME_ATTRIBUTE] = defaultArgs[THEME_ATTRIBUTE]
    if (!args.hasOwnProperty(PROGRESS_STATE_ATTRIBUTE)) args[PROGRESS_STATE_ATTRIBUTE] = defaultArgs[PROGRESS_STATE_ATTRIBUTE]
return createComponentLoaderBar2({ ...args });
};

export const LoaderProgressBar = Template.bind({});
LoaderProgressBar.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args