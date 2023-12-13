import {SIZE_ATTRIBUTE, 
        COLOR_ATTRIBUTE,
        WIDTH_ATTRIBUTE
    } from "../../../WebComponents/ButtonGroup/constants.js"

import {
    DARK_OPTION,
    LIGHT_OPTION,
    LARGE_OPTION,
    SMALL_OPTION} from "../../../WebComponents/ButtonGroup/constants.js"
import { CONTENT_TO_APPEND } from '../index.js';
import { createComponentGroupButton } from "./index.js";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const argOpt = {}

argOpt[SIZE_ATTRIBUTE] = {
control: { type: 'select' },
options: [LARGE_OPTION, SMALL_OPTION],
}
argOpt[COLOR_ATTRIBUTE] = {
control: { type: 'select' },
options: [DARK_OPTION, LIGHT_OPTION],
}
argOpt[WIDTH_ATTRIBUTE] = {
    control: { type: 'text' },
    }
argOpt[CONTENT_TO_APPEND] = {
    control: { type: 'text' },
    }

export default {
title: 'COMPONENTS/Button Group',
// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
argTypes: {...argOpt}
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
var defaultArgs = {}

defaultArgs[SIZE_ATTRIBUTE] = LARGE_OPTION
defaultArgs[COLOR_ATTRIBUTE] = LIGHT_OPTION
defaultArgs[WIDTH_ATTRIBUTE] = "300px"
defaultArgs[CONTENT_TO_APPEND] = `
    <button  >BUTTON 1</button>
    <button  >BUTTON 2</button>
    <button onclick="alert('Button 3!')" >BUTTON 3</button>
    <button onclick="alert('Button 4!')" >BUTTON 4</button>

`

const Template = ({...args }) => {


if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
if (!args.hasOwnProperty(WIDTH_ATTRIBUTE)) args[WIDTH_ATTRIBUTE] = defaultArgs[WIDTH_ATTRIBUTE]
if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]
return createComponentGroupButton({ ...args });
};

export const ButtonGroup = Template.bind({});
ButtonGroup.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


