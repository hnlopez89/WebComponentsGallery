import {SIZE_ATTRIBUTE, 
  THEME_ATTRIBUTE} from "../../../WebComponents/Profile/constants.js"
import {DOUBLE_EXTRA_LARGE_OPTION, 
    EXTRA_LARGE_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    EXTRA_SMALL_OPTION
} from "../../../WebComponents/Profile/constants.js"
import {LIGHT_OPTION,DARK_OPTION} from "../../../WebComponents/Profile/constants.js"
import {CONTENT_TO_APPEND} from '../index.js';
import { createComponentProfile } from './index.js';

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
options: [DOUBLE_EXTRA_LARGE_OPTION, 
  EXTRA_LARGE_OPTION,
  LARGE_OPTION,
  MEDIUM_OPTION,
  SMALL_OPTION,
  EXTRA_SMALL_OPTION],
}

argOpt[THEME_ATTRIBUTE] = {
control: { type: 'select' },
options: [DARK_OPTION, LIGHT_OPTION],
}

export default {
title: 'COMPONENTS/Profile',
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
defaultArgs[SIZE_ATTRIBUTE] = DOUBLE_EXTRA_LARGE_OPTION
defaultArgs[THEME_ATTRIBUTE] = DARK_OPTION

const Template = ({...args }) => {
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;

if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
if (!args.hasOwnProperty(THEME_ATTRIBUTE)) args[THEME_ATTRIBUTE] = defaultArgs[THEME_ATTRIBUTE]

return createComponentProfile({ ...args });
};

export const logoutProfile = Template.bind({});
logoutProfile.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


