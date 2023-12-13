import {MAX_WIDTH_MEDIUM_OPTION, MAX_WIDTH_SMALL_OPTION} from '../commonMethodsAndConstants/Styles/commonConstants.js'

export const CUSTOM_ELEMENT_NAME = "component-accordion"
//variants
export const REGULAR_ACCORDION_COMPONENT = 'regular accordion'
// attributeNames
export const COLOR_ATTRIBUTE = "data-color";
export const SIZE_ATTRIBUTE = "data-size";
export const OPEN_ATTRIBUTE = "data-open";
export const TITLE_ATTRIBUTE = "data-title";
// color options
export const DARK_OPTION = "dark";
export const LIGHT_OPTION = "light";
//size options
export const LARGE_OPTION = "L";
export const MEDIUM_OPTION = "M";
export const SMALL_OPTION = "S";
// open options
export const OPENED_OPTION = "isOpen";
export const CLOSED_OPTION = "isClosed";
// title default option
export const TITLE_DEFAULT = "Title Accordion"

//total height of content appended
export const TOTAL_HEIGHT_ATTRIBUTE = 'data-total-height'
const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue : DARK_OPTION,
    proccessValue: (value) => {return   value}

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
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: OPEN_ATTRIBUTE,
    defaultValue : CLOSED_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: TITLE_ATTRIBUTE,
    defaultValue : TITLE_DEFAULT,
    proccessValue: (value) => {return   value}

})

export {ATTRIBUTES};

//SubCOmponents
// SHADOW DOM
// I----------->CONTAINER_SUBCOMPONENT
//                  I----------->TITLE_SUBCOMPONENT
//                  I                  I----------->TEXT_TITLE_SUBCOMPONENT
//                  I                                   I----------->ICON_PARENT_WRAPPER_SUBCOMPONENT
//                  I                                                   I----------->ICON_PARENT_TITLE_SUBCOMPONENT
//                  I                                                                       I----------->ICON_CHILD_SUBCOMPONENT
//                  I----------->CONTENT_SUBCOMPONENT


//Definining names of subcomponents of component. This is used to identify the style to assign that subcomponent
 export const CONTAINER_SUBCOMPONENT = 'container'
 export const TITLE_SUBCOMPONENT = 'title'
 export const TEXT_TITLE_SUBCOMPONENT = 'text title'
 export const ICON_WRAPPER_SUBCOMPONENT = 'icon wrapper'
 export const ICON_PARENT_TITLE_SUBCOMPONENT = 'icon parent title'
 export const ICON_CHILD_SUBCOMPONENT = 'icon child'
 export const CONTENT_SUBCOMPONENT = 'content'

//  Defining constants for events 
export const DEFAULT_EVENT = 'default'
export const OPEN_ACCORDION_EVENT = 'open'

//array of events
const EVENTS_OF_COMPONENT = []

EVENTS_OF_COMPONENT.push(OPEN_ACCORDION_EVENT)

export {EVENTS_OF_COMPONENT}