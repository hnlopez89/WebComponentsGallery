import {MAX_WIDTH_MEDIUM_OPTION, MAX_WIDTH_SMALL_OPTION} from '../commonMethodsAndConstants/Styles/commonConstants.js'

export const CUSTOM_ELEMENT_NAME = "component-buttons-group"
export const REGULAR_BUTTONS_GROUP_COMPONENT = 'regular buttons-group'

// attributeNames
export const COLOR_ATTRIBUTE = "data-color";
export const SIZE_ATTRIBUTE = "data-size";
export const CONTAINER_ATTRIBUTE = "data-container";
export const BUTTONS_GROUP_SELECTED_ATTRIBUTE = "data-selected-buttons-group";
export const BUTTON_BUTTONS_GROUP_CONTENT_ATTRIBUTE = "data-buttons-group-controller";
export const BUTTONS_GROUP_CONTENT_ATTRIBUTE = "data-buttons-group-content";
export const WIDTH_ATTRIBUTE= "data-width"
export const SLOT_LIST_ATTRIBUTE = "data-list-slots"
export const BUTTON_TITLE_LIST = "data-button-list"
// color options
export const DARK_OPTION = "dark";
export const LIGHT_OPTION = "light";
//size options
export const LARGE_OPTION = "L";
export const SMALL_OPTION = "S";
// container options
export const BOXED_OPTION = "boxed";
export const FLUID_OPTION = "fluid";

export const BUTTON_SLOT = []
BUTTON_SLOT.push('BUTTON_1')
BUTTON_SLOT.push('BUTTON_2')
BUTTON_SLOT.push('BUTTON_3')
BUTTON_SLOT.push('BUTTON_4')
BUTTON_SLOT.push('BUTTON_5')

const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue : DARK_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: BUTTONS_GROUP_SELECTED_ATTRIBUTE,
    defaultValue : 0,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue : (() => {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        if (vw < MAX_WIDTH_MEDIUM_OPTION)
        {
           return SMALL_OPTION;
        }
        else if (vw >= MAX_WIDTH_MEDIUM_OPTION)
        {
           return LARGE_OPTION;
        }
    }) (),
    proccessValue: (value) => {return   value}
})
ATTRIBUTES.push({
    attributeName: CONTAINER_ATTRIBUTE,
    defaultValue : BOXED_OPTION,
    proccessValue: (value) => {return   value}
})

ATTRIBUTES.push({
    attributeName: WIDTH_ATTRIBUTE,
    defaultValue : "100%",
    proccessValue: (value) => {return   value}

})
export {ATTRIBUTES};
//SubCOmponents
// SHADOW DOM
// I----------->WRAPPER_COMPONENT
//                  I----------->SLOT_WRAPPER
//                  I                  I----------->SLOT_COMPONENT
//                  I----------->BUTTONS_GROUPS_WRAPPER
//                  I                  I----------->BUTTON_i_COMPONENT
//                  I----------->CONTENT_WRAPPER
//                                     I----------->SLOT_CONTENT


//Definining names of subcomponents of component. This is used to identify the style to assign that subcomponent
export const WRAPPER_COMPONENT = 'wrapper'
export const SLOT_WRAPPER = 'slot wrapper'
export const SLOT_COMPONENT = 'slot component'
export const BUTTONS_GROUP_WRAPPER_COMPONENT = 'buttons-groups wrapper component'
export const BUTTONS_WRAPPER = 'button wrapper'
export const BUTTON_FLEXBOX = 'button flexbox'
export const BUTTON_i_COMPONENT = 'button i component'
export const TEXT_BUTTON = "text button"
export const CONTENT_WRAPPER = 'content wrapper'

//  Defining constants for events 
export const DEFAULT_EVENT = 'default'
export const ACTIVE_BUTTONS_GROUP_EVENT = 'active'
export const HOVER_EVENT = 'hover'


//array of events
const EVENTS_OF_COMPONENT = []

EVENTS_OF_COMPONENT.push(ACTIVE_BUTTONS_GROUP_EVENT)
EVENTS_OF_COMPONENT.push(HOVER_EVENT)

export {EVENTS_OF_COMPONENT}