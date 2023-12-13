import {  COLOR_ATTRIBUTE, ICON_ATTRIBUTE, CLOSE_ATTRIBUTE} from "../../../WebComponents/Tags/constants.js"
import {COLOR_ORANGE, COLOR_ATLANTIC, COLOR_CLAY, COLOR_GREY, COLOR_DESSERT, COLOR_WHITE, COLOR_BLACK
} from "../../../WebComponents/Tags/constants.js"
       
import Icons from "../../../WebComponents/Icons/allIcons.js"
import {YES_CLOSE_OPTION, NO_CLOSE_OPTION, ON_ICON_OPTION, OFF_ICON_OPTION} from "../../../WebComponents/Tags/constants.js"
import { CONTENT_TO_APPEND } from '../index.js';
import { createComponentTags } from "./index.js";
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
    options: [COLOR_ORANGE, COLOR_ATLANTIC, COLOR_CLAY, COLOR_GREY, COLOR_DESSERT, COLOR_WHITE, COLOR_BLACK]
}

argOpt[CLOSE_ATTRIBUTE] = {
control: { type: 'select' },    
options: [YES_CLOSE_OPTION, NO_CLOSE_OPTION],
}
argOpt[CONTENT_TO_APPEND] = {
    control: { type: 'text' },
    }
export default {
title: 'COMPONENTS/Tags',
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

defaultArgs[COLOR_ATTRIBUTE] = COLOR_BLACK
defaultArgs[CLOSE_ATTRIBUTE] = YES_CLOSE_OPTION
defaultArgs[CONTENT_TO_APPEND] = `<span>Hello!</span>`

const Template = ({...args }) => {
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;
if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
if (!args.hasOwnProperty(CLOSE_ATTRIBUTE)) args[CLOSE_ATTRIBUTE] = defaultArgs[CLOSE_ATTRIBUTE]
if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]

return createComponentTags({ ...args });
};

export const TagClose = Template.bind({});
TagClose.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


