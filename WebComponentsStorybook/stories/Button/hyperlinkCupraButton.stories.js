

import {HIERARCHY_ATTRIBUTE,
    SIZE_ATTRIBUTE, 
    COLOR_ATTRIBUTE, 
    LINE_ATTRIBUTE,
    STATE_ATTRIBUTE } from "../../../WebComponents/Button/constants.js"

import {HYPERLINK_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    DARK_OPTION,
    LIGHT_OPTION,
    PARAGRAPH_OPTION,
    TITLE_OPTION,
    ACTIVE_OPTION,
    HOVER_OPTION} from "../../../WebComponents/Button/constants.js"
import {CONTENT_TO_APPEND} from '../index.js';
import { createComponentButton } from './index.js';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const argOpt = {}
argOpt[HIERARCHY_ATTRIBUTE] = {
control: { type: 'select' },
options: [HYPERLINK_OPTION],
}
argOpt[SIZE_ATTRIBUTE] = {
control: { type: 'select' },
options: [LARGE_OPTION, MEDIUM_OPTION, SMALL_OPTION],
}
argOpt[COLOR_ATTRIBUTE] = {
control: { type: 'select' },
options: [DARK_OPTION, LIGHT_OPTION],
}
argOpt[LINE_ATTRIBUTE] = {
control: { type: 'select' },
options: [PARAGRAPH_OPTION, TITLE_OPTION],
}

argOpt[CONTENT_TO_APPEND] = {
control: { type: 'text' },
}
argOpt[STATE_ATTRIBUTE] = {
    control: { type: 'select' },
    options: [HOVER_OPTION, ACTIVE_OPTION],
    }
export default {
title: 'COMPONENTS/Buttons',
// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
argTypes: {...argOpt}
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
var defaultArgs = {}
defaultArgs[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
defaultArgs[STATE_ATTRIBUTE] = ACTIVE_OPTION
defaultArgs[SIZE_ATTRIBUTE] = LARGE_OPTION
defaultArgs[COLOR_ATTRIBUTE] = LIGHT_OPTION
defaultArgs[LINE_ATTRIBUTE] = PARAGRAPH_OPTION
defaultArgs[CONTENT_TO_APPEND] = `<button  onclick="alert('Hi!')">Click Me!</button>`

const Template = ({...args }) => {
    if (args.hasOwnProperty(STATE_ATTRIBUTE))
    {
        if (args[STATE_ATTRIBUTE] === ACTIVE_OPTION)
        {
            delete args[STATE_ATTRIBUTE]
        }
    } 
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;
if (!args.hasOwnProperty(HIERARCHY_ATTRIBUTE)) args[HIERARCHY_ATTRIBUTE] = defaultArgs[HIERARCHY_ATTRIBUTE]
if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
if (!args.hasOwnProperty(LINE_ATTRIBUTE)) args[LINE_ATTRIBUTE] = defaultArgs[LINE_ATTRIBUTE]
if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]

return createComponentButton({ ...args });
};

export const HyperlinkButton = Template.bind({});
HyperlinkButton.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


