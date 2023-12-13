

import {HIERARCHY_ATTRIBUTE,
    SIZE_ATTRIBUTE, 
    STATE_ATTRIBUTE,
    THEME_ATTRIBUTE,
    ICON_SELECTION_ATTRIBUTE,
    WIDTH_ATTRIBUTE } from "../../../WebComponents/Button/constants.js"

import {ICON_HIERARCHY_OPTION,
    EXTRA_LARGE_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    DARK_OPTION,
    LIGHT_OPTION,
    ACTIVE_OPTION,
    INACTIVE_OPTION,
    FOCUS_OPTION,
    HOVER_OPTION,
    FIT_CONTENT_OPTION} from "../../../WebComponents/Button/constants.js"
import {CONTENT_TO_APPEND} from '../index.js';
import { createComponentButton } from './index.js';
import Icons from "../../../WebComponents/Icons/allIcons.js"
import { PLUS_ICON_OPTION } from "../../../WebComponents/Icons/constants.js";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const argOpt = {}
argOpt[HIERARCHY_ATTRIBUTE] = {
control: { type: 'select' },
options: [ICON_HIERARCHY_OPTION],
}
argOpt[SIZE_ATTRIBUTE] = {
control: { type: 'select' },
options: [EXTRA_LARGE_OPTION, LARGE_OPTION, MEDIUM_OPTION, SMALL_OPTION],
}
argOpt[THEME_ATTRIBUTE] = {
control: { type: 'select' },
options: [DARK_OPTION, LIGHT_OPTION],
}
argOpt[STATE_ATTRIBUTE] = {
control: { type: 'select' },
options: [ACTIVE_OPTION, INACTIVE_OPTION, HOVER_OPTION],
}

argOpt[ICON_SELECTION_ATTRIBUTE] = {
    control: { type: 'select' },
    options: Object.keys(Icons),
}
    

argOpt[CONTENT_TO_APPEND] = {
control: { type: 'text' },
}
export default {
title: 'COMPONENTS/Buttons',
// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
argTypes: {...argOpt}
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
var defaultArgs = {}
defaultArgs[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
defaultArgs[SIZE_ATTRIBUTE] = LARGE_OPTION
defaultArgs[THEME_ATTRIBUTE] = LIGHT_OPTION
defaultArgs[STATE_ATTRIBUTE] = ACTIVE_OPTION
defaultArgs[CONTENT_TO_APPEND] = `<button  onclick="alert('Hi!')">Click Me!</button>`
defaultArgs[ICON_SELECTION_ATTRIBUTE] = PLUS_ICON_OPTION
const Template = ({...args }) => {
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;
if (!args.hasOwnProperty(HIERARCHY_ATTRIBUTE)) args[HIERARCHY_ATTRIBUTE] = defaultArgs[HIERARCHY_ATTRIBUTE]
if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
if (!args.hasOwnProperty(STATE_ATTRIBUTE)) args[STATE_ATTRIBUTE] = defaultArgs[STATE_ATTRIBUTE]
if (!args.hasOwnProperty(THEME_ATTRIBUTE)) args[THEME_ATTRIBUTE] = defaultArgs[THEME_ATTRIBUTE]
if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]
if (!args.hasOwnProperty(ICON_SELECTION_ATTRIBUTE)) args[ICON_SELECTION_ATTRIBUTE] = defaultArgs[ICON_SELECTION_ATTRIBUTE]

return createComponentButton({ ...args });
};

export const IconButton = Template.bind({});
IconButton.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


