import {SIZE_ATTRIBUTE,
        ID_YOUTUBE_VIDEO} from "../../../WebComponents/VideoPlayer/constants.js"

import {LARGE_OPTION, MEDIUM_OPTION, SMALL_OPTION} from "../../../WebComponents/VideoPlayer/constants.js"
import { createComponentVideoplayer } from './index.js';
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
const idVideo = "idVideo"
const argOpt = {}

argOpt[SIZE_ATTRIBUTE] = {
control: { type: 'select' },
options: [LARGE_OPTION,MEDIUM_OPTION,SMALL_OPTION],
}

argOpt[ID_YOUTUBE_VIDEO] = {
control: { type: 'text' },
}

export default {
title: 'COMPONENTS/VideoPlayer',
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
defaultArgs[SIZE_ATTRIBUTE] = LARGE_OPTION
defaultArgs[ID_YOUTUBE_VIDEO] = "S1ULLO9-ta0"

const Template = ({...args }) => {

// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;
if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
if (!args.hasOwnProperty(ID_YOUTUBE_VIDEO)) args[ID_YOUTUBE_VIDEO] = defaultArgs[ID_YOUTUBE_VIDEO]

return createComponentVideoplayer({ ...args });
};

export const VideoPlayer = Template.bind({});
VideoPlayer.args= {...defaultArgs}

// More on args: https://storybook.js.org/docs/html/writing-stories/args


