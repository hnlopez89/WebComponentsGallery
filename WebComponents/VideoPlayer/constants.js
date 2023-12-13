import {MAX_WIDTH_MEDIUM_OPTION, MAX_WIDTH_SMALL_OPTION} from '../commonMethodsAndConstants/Styles/commonConstants.js'

export const CUSTOM_ELEMENT_NAME = "component-videoplayer"
export const REGULAR_VIDEOPLAYER_COMPONENT = 'regular videoplayer'


// attributeNames
export const SIZE_ATTRIBUTE = "data-size";
export const ID_YOUTUBE_VIDEO = "data-id-yt"
export const STATE_ATTRIBUTE= "data-state"
//size options
export const LARGE_OPTION = "L";
export const MEDIUM_OPTION = "M";
export const SMALL_OPTION = "S";
//state options
export const PLAY_OPTION = "play"
export const STOP_OPTION = "stop"

const ATTRIBUTES = [];

ATTRIBUTES.push({
    attributeName: STATE_ATTRIBUTE,
    defaultValue : STOP_OPTION,
    proccessValue: function ()  
    {
        const value = this.getAttribute(STATE_ATTRIBUTE) ? this.getAttribute(STATE_ATTRIBUTE) : STOP_OPTION
        return   value;
    }

})
ATTRIBUTES.push({
    attributeName: ID_YOUTUBE_VIDEO,
    defaultValue : null,
    proccessValue: function ()  
    {
        const value = this.getAttribute(ID_YOUTUBE_VIDEO) ? this.getAttribute(ID_YOUTUBE_VIDEO) : null
        return   value;
    }

})
ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue : (() => {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        if (vw < MAX_WIDTH_SMALL_OPTION)
        {
           return SMALL_OPTION;
        }
        else if (vw >= MAX_WIDTH_SMALL_OPTION && vw < MAX_WIDTH_MEDIUM_OPTION)
        {
           return MEDIUM_OPTION;
        }
        else if (vw >= MAX_WIDTH_MEDIUM_OPTION)
        {
           return LARGE_OPTION;
        }
    }) (),
    proccessValue: function ()  
    {
        const value = this.getAttribute(SIZE_ATTRIBUTE) ? this.getAttribute(SIZE_ATTRIBUTE) : (() => {
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
            if (vw < MAX_WIDTH_SMALL_OPTION)
            {
               return SMALL_OPTION;
            }
            else if (vw >= MAX_WIDTH_SMALL_OPTION && vw < MAX_WIDTH_MEDIUM_OPTION)
            {
               return MEDIUM_OPTION;
            }
            else if (vw >= MAX_WIDTH_MEDIUM_OPTION)
            {
               return LARGE_OPTION;
            }
        }) ()
        return   value;
    }

})

export {ATTRIBUTES};
//SubCOmponents
// SHADOW DOM
// I----------->WRAPPER_COMPONENT
//                  I----------->SLOT_WRAPPER
//                  I                  I----------->SLOT_COMPONENT
//                  I----------->TABS_WRAPPER
//                  I                  I----------->BUTTON_i_COMPONENT
//                  I----------->CONTENT_WRAPPER
//                                     I----------->SLOT_CONTENT


//Definining names of subcomponents of component. This is used to identify the style to assign that subcomponent
export const WRAPPER_COMPONENT = 'wrapper'
export const PLAYER_WRAPPER = 'player wrapper'
export const PLAYER_COMPONENT = 'player component'
export const CLOSE_ICON_WRAPPER_COMPONENT = 'close icon wrapper component'
export const CLOSE_ICON_COMPONENT = 'close icon component'


//  Defining constants for events 
export const DEFAULT_EVENT = 'default'
export const PLAY_EVENT = 'play'


//array of events
const EVENTS_OF_COMPONENT = []

EVENTS_OF_COMPONENT.push(PLAY_EVENT)

export {EVENTS_OF_COMPONENT}