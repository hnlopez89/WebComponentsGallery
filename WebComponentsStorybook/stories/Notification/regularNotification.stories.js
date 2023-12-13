import {SIZE_ATTRIBUTE, 
    COLOR_ATTRIBUTE,
    STATE_ATTRIBUTE,
    AUTODISMISS_LENGTH_ATTRIBUTE
  } from "../../../WebComponents/Notification/constants.js"
  import {EXTRA_LARGE_OPTION,
      LARGE_OPTION,
      MEDIUM_OPTION,
      SMALL_OPTION,
      TOAST_OPTION
  } from "../../../WebComponents/Notification/constants.js"
  import { CONTENT_TO_APPEND } from "../index.js";
  import {WHITE_OPTION, BLACK_OPTION} from "../../../WebComponents/Notification/constants.js"
  import {SUCCESS_OPTION, WARNING_OPTION, ERROR_OPTION, DEFAULT_OPTION} from "../../../WebComponents/Notification/constants.js"
  import { createComponentNotification } from './index.js';
  
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
  options: [EXTRA_LARGE_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    TOAST_OPTION],
  }
  
  argOpt[COLOR_ATTRIBUTE] = {
  control: { type: 'select' },
  options: [WHITE_OPTION, BLACK_OPTION],
  }
    
  argOpt[CONTENT_TO_APPEND] = {
    control: { type: 'text' },
    }
  argOpt[AUTODISMISS_LENGTH_ATTRIBUTE] = {
    control: { type: 'text' },
    }
  
  argOpt[STATE_ATTRIBUTE] = {
  control: { type: 'select' },
  options: [ERROR_OPTION, SUCCESS_OPTION,DEFAULT_OPTION, WARNING_OPTION],
  }
  
  export default {
  title: 'COMPONENTS/Notifications',
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
  defaultArgs[SIZE_ATTRIBUTE] = EXTRA_LARGE_OPTION
  defaultArgs[COLOR_ATTRIBUTE] = BLACK_OPTION
  defaultArgs[CONTENT_TO_APPEND] = `
  <p data-text-hierarchy="title">Hello Title</p>
  <p data-text-hierarchy="subtitle">Hello Subtitle</p>
`
defaultArgs[STATE_ATTRIBUTE] = DEFAULT_OPTION
defaultArgs[AUTODISMISS_LENGTH_ATTRIBUTE] = null
  
  
  const Template = ({...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  
  if (!args.hasOwnProperty(SIZE_ATTRIBUTE)) args[SIZE_ATTRIBUTE] = defaultArgs[SIZE_ATTRIBUTE]
  if (!args.hasOwnProperty(COLOR_ATTRIBUTE)) args[COLOR_ATTRIBUTE] = defaultArgs[COLOR_ATTRIBUTE]
  if (!args.hasOwnProperty(CONTENT_TO_APPEND)) args[CONTENT_TO_APPEND] = defaultArgs[CONTENT_TO_APPEND]
  if (!args.hasOwnProperty(STATE_ATTRIBUTE)) args[STATE_ATTRIBUTE] = defaultArgs[STATE_ATTRIBUTE]
  if (!args.hasOwnProperty(AUTODISMISS_LENGTH_ATTRIBUTE)) args[AUTODISMISS_LENGTH_ATTRIBUTE] = defaultArgs[AUTODISMISS_LENGTH_ATTRIBUTE]
  return createComponentNotification({ ...args });
  };
  
  export const regularNotification = Template.bind({});
  regularNotification.args= {...defaultArgs}
  
  // More on args: https://storybook.js.org/docs/html/writing-stories/args
  