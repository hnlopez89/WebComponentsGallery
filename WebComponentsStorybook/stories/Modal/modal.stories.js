import {MODE_ATTRIBUTE} from "../../../WebComponents/Modal/constants.js"
import {FULLSCREEN_OPTION,
        WINDOW_OPTION} from "../../../WebComponents/Modal/constants.js"
import {CONTENT_TO_APPEND} from '../index.js';
import { createComponentModal } from "./index.js";
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
argOpt[MODE_ATTRIBUTE] = {
control: { type: 'select' },
options: [FULLSCREEN_OPTION, WINDOW_OPTION],
}

export default {
    title: 'COMPONENTS/Modal',
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
defaultArgs[MODE_ATTRIBUTE] = WINDOW_OPTION
defaultArgs[CONTENT_TO_APPEND] =`

<h1 style="margin: 0px;">This is a modal</h1>
`
//defaultArgs[LABEL_ATTRIBUTE] = 'Testing'
const Template = ({...args }) => {

    if (!args.hasOwnProperty(MODE_ATTRIBUTE)) args[MODE_ATTRIBUTE] = defaultArgs[MODE_ATTRIBUTE]
    if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]
return createComponentModal({ ...args });
};

export const Modal = Template.bind({});
Modal.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


