import {SIZE_ATTRIBUTE,} from "../../../WebComponents/LoaderLogo/constants.js"
import {
    LARGE_OPTION,
    } from "../../../WebComponents/LoaderLogo/constants.js"
import { createComponentLoaderLogo } from "./index.js";
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
options: [LARGE_OPTION],
}
export default {
    title: 'COMPONENTS/Loader Logo',
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {...argOpt},
    parameters: {
        docs: {
          page: () => (
            <>
              <Subtitle />
              <Description />
              <ArgsTable story={PRIMARY_STORY} />
              <Primary />
              <Stories />
            </>
          ),
        },
      },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
var defaultArgs = {}
defaultArgs[SIZE_ATTRIBUTE] = LARGE_OPTION
const Template = ({...args }) => {
    if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
return createComponentLoaderLogo({ ...args });
};

export const LoaderLogo = Template.bind({});
LoaderLogo.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args