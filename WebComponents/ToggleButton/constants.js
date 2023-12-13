import {MAX_WIDTH_MEDIUM_OPTION} from '../commonMethodsAndConstants/Styles/commonConstants.js'
import { PLUS_ICON_OPTION,CHECK_ICON_OPTION } from '../Icons/constants.js'; 
// attributeNames
export const COLOR_ATTRIBUTE = "data-color";
export const STATE_ATTRIBUTE = "data-state";
export const SIZE_ATTRIBUTE = "data-size";
export const ICON_SELECTION_ATTRIBUTE_OFF = "data-icon-selection-off";
export const ICON_SELECTION_ATTRIBUTE_ON = "data-icon-selection-on";
export const CHILDREN_ATTRIBUTE = "data-children"
// color options
export const DARK_OPTION = "dark";
export const LIGHT_OPTION = "light";
// state options
export const STATE_ON_OPTION = 'state_on'
export const STATE_OFF_OPTION = 'state_off'
//device options 
export const LARGE_OPTION = "L";
export const MEDIUM_OPTION = "M";
export const TEMPORARY_ATTRIBUTE = "data-temporary-attribute"
const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue : (() => {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        
        if (vw < MAX_WIDTH_MEDIUM_OPTION)
        {
           return MEDIUM_OPTION;
        }
        else if (vw >= MAX_WIDTH_MEDIUM_OPTION)
        {
           return LARGE_OPTION;
        }
    }) (),
    proccessValue: function () {
        const value = this.getAttribute(SIZE_ATTRIBUTE) ? this.getAttribute(SIZE_ATTRIBUTE) : (() => {
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
     
            if (vw < MAX_WIDTH_MEDIUM_OPTION)
            {
               return MEDIUM_OPTION;
            }
            else if (vw >= MAX_WIDTH_MEDIUM_OPTION)
            {
               return LARGE_OPTION;
            }
        }) ()
        return value
    }

})

ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue : DARK_OPTION,
    proccessValue: function ()  {
        const value = this.getAttribute(COLOR_ATTRIBUTE) ? this.getAttribute(COLOR_ATTRIBUTE):DARK_OPTION
        return   value
    }

})
ATTRIBUTES.push({
    attributeName: STATE_ATTRIBUTE,
    defaultValue : STATE_OFF_OPTION,
    proccessValue: function ()  {
        const value = this.getAttribute(STATE_ATTRIBUTE) ? this.getAttribute(STATE_ATTRIBUTE):STATE_OFF_OPTION
        return   value
    }

})
ATTRIBUTES.push({
    attributeName: CHILDREN_ATTRIBUTE,
    defaultValue : "Call to Action",
    proccessValue: function ()  {
        const value = this.querySelector('button') ? this.querySelector('button').innerText: "Call to Action"
        return   value
    }

})
ATTRIBUTES.push({
    attributeName: ICON_SELECTION_ATTRIBUTE_OFF,
    defaultValue : PLUS_ICON_OPTION,
    proccessValue: function ()  {
        const value = this.getAttribute(ICON_SELECTION_ATTRIBUTE_OFF) ? this.getAttribute(ICON_SELECTION_ATTRIBUTE_OFF):PLUS_ICON_OPTION
        return   value
    }

})
ATTRIBUTES.push({
    attributeName: ICON_SELECTION_ATTRIBUTE_ON,
    defaultValue : PLUS_ICON_OPTION,
    proccessValue: function ()  {
        const value = this.getAttribute(ICON_SELECTION_ATTRIBUTE_ON) ? this.getAttribute(ICON_SELECTION_ATTRIBUTE_ON):PLUS_ICON_OPTION
        return   value
    }
})
export {ATTRIBUTES};

//  Defining constants for events 
export const DEFAULT_EVENT = 'default'
//array of events
const EVENTS_OF_COMPONENT = []
export const HOVER = 'hover-toggle'
export const CLICK_TOGGLE = 'click-toggle'
export const CLICK_TOGGLE_HOVER = 'click-toggle-hover'
EVENTS_OF_COMPONENT.push(HOVER)
EVENTS_OF_COMPONENT.push(CLICK_TOGGLE)
EVENTS_OF_COMPONENT.push(CLICK_TOGGLE_HOVER)
export {EVENTS_OF_COMPONENT}
//ID of icon subcomponent
export const ICON_ID = "icon_id_subcomponent"
//Definining names of subcomponents of component. This is used to identify the style or attributes to assign that subcomponent
export const BUTTON_SUBCOMPONENT = 'button'
export const ICON_CONTAINER_SUBCOMPONENT = 'icon container'
export const ICON_SUBCOMPONENT = 'icon'
export const TEXT_SUBCOMPONENT = 'textButton'

// components variants of buttons
export const REGULAR_BUTTON_ICON_VARIANT = 'regular button toggle'

export const NAME_OF_COMPONENT = 'component-toggle-button'