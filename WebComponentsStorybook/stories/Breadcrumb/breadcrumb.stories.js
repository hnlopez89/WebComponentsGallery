import {THEME_ATTRIBUTE} from "../../../WebComponents/Breadcrumb/constants.js"
import {DARK_OPTION,LIGHT_OPTION} from "../../../WebComponents/Breadcrumb/constants.js"
import {CONTENT_TO_APPEND} from '../index.js';
import { createComponentBreadcrumb } from './index.js';
import React from 'react';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const argOpt = {}
argOpt[THEME_ATTRIBUTE] = {
control: { type: 'select' },
options: [DARK_OPTION, LIGHT_OPTION],
}

argOpt[CONTENT_TO_APPEND] = {
    control: { type: 'text' },
    }

export default {
title: 'COMPONENTS/Breadcrumb',
// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
argTypes: {...argOpt}
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
var defaultArgs = {}
defaultArgs[THEME_ATTRIBUTE] = LIGHT_OPTION
defaultArgs[CONTENT_TO_APPEND] = `
<a href="https://www.google.com/" target="_blank">Click</a>
<a href="https://www.google.com/" target="_blank">Click</a>
<a href="https://www.google.com/" target="_blank">Click</a>
<a href="https://www.google.com/" target="_blank">Click</a>
`

const Template = ({...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    if (!args.hasOwnProperty(THEME_ATTRIBUTE)) args[THEME_ATTRIBUTE] = defaultArgs[THEME_ATTRIBUTE]
    if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]
    
    return createComponentBreadcrumb({ ...args });
    };

export const Breadcrumb = Template.bind({});
Breadcrumb.args= {...defaultArgs}
