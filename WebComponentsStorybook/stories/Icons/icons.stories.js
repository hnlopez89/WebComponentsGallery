

import {ICON_SIZE_ATTRIBUTE, ICON_COLOR_ATTRIBUTE, ICON_SELECTION_ATTRIBUTE} from "../../../WebComponents/Icons/constants.js"
import { createComponentIcon } from './index.js';
import Icons from "../../../WebComponents/Icons/allIcons.js"
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
import { BLACK } from "../../../WebComponents/commonMethodsAndConstants/Styles/commonConstants.js";
// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const argOpt = {}
argOpt[ICON_SIZE_ATTRIBUTE] = {
control: { type: 'text' },
}

argOpt[ICON_SELECTION_ATTRIBUTE] = {
control: { type: 'select' },
options: Object.keys(Icons),
}
argOpt[ICON_COLOR_ATTRIBUTE] = {
control: { type: 'color' },
}
export default {
title: 'COMPONENTS/Icon Selection',
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
defaultArgs[ICON_SIZE_ATTRIBUTE] = "32px"
defaultArgs[ICON_COLOR_ATTRIBUTE] = BLACK
defaultArgs[ICON_SELECTION_ATTRIBUTE] = "360"

const Template = ({...args }) => {
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;
if (!args.hasOwnProperty(ICON_SIZE_ATTRIBUTE)) args[ICON_SIZE_ATTRIBUTE] = defaultArgs[ICON_SIZE_ATTRIBUTE]
if (!args.hasOwnProperty(ICON_COLOR_ATTRIBUTE)) args[ICON_COLOR_ATTRIBUTE] = defaultArgs[ICON_COLOR_ATTRIBUTE]
if (!args.hasOwnProperty(ICON_SELECTION_ATTRIBUTE)) args[ICON_SELECTION_ATTRIBUTE] = defaultArgs[ICON_SELECTION_ATTRIBUTE]

return createComponentIcon({ ...args });
};

export const IconSelection = Template.bind({});
IconSelection.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


