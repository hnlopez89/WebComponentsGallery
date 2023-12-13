

import {COLOR_ATTRIBUTE, 
        MODE_ATTRIBUTE} from "../../../WebComponents/Pagination/constants.js"

import {DARK_OPTION,
        LIGHT_OPTION,
        PAGINATION_OPTION,
        COUNTER_OPTION} from "../../../WebComponents/Pagination/constants.js"
import {CONTENT_TO_APPEND} from '../index.js';
import { createComponentPagination } from './index.js';

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
argOpt[MODE_ATTRIBUTE] = {
control: { type: 'select' },
options: [PAGINATION_OPTION, COUNTER_OPTION],
}
argOpt[CONTENT_TO_APPEND] = {
control: { type: 'text' },
}
export default {
title: 'COMPONENTS/Pagination',
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
defaultArgs[MODE_ATTRIBUTE] = PAGINATION_OPTION
defaultArgs[CONTENT_TO_APPEND] = `<a  onclick="alert('1!')">Click Me!</a>
<a  onclick="alert('2!')">Click Me!</a>
<a  onclick="alert('3!')">Click Me!</a>
<a  onclick="alert('4!')">Click Me!</a>
<a  onclick="alert('5!')">Click Me!</a>
<a  onclick="alert('6!')">Click Me!</a>
<a  onclick="alert('7!')">Click Me!</a>`

const Template = ({...args }) => {
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;

if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
if (!args.hasOwnProperty(MODE_ATTRIBUTE)) args[MODE_ATTRIBUTE] = defaultArgs[MODE_ATTRIBUTE]
if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]

return createComponentPagination({ ...args });
};

export const simplePagination = Template.bind({});
simplePagination.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


