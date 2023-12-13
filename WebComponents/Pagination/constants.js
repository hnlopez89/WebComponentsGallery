import {MAX_WIDTH_MEDIUM_OPTION} from '../commonMethodsAndConstants/Styles/commonConstants.js'
export const NAME_OF_COMPONENT = 'component-pagination'
//Variants keys
export const REGULAR_PAGINATION_VARIANT = 'regular pagination'
export const REGULAR_COUNTER_VARIANT = 'regular counter'
//Attribute for slot 


//Attributes names
export const COLOR_ATTRIBUTE = "data-color"
export const MODE_ATTRIBUTE = "data-mode"
export const ACTIVE_LINK_ATTRIBUTE = "data-active-link"
export const LINK_INDEX_ACTIVE = "data-index-link"

export const TEMPORARY_ATTRIBUTE = "data-temporary"
//COLOR OPTIONS
export const DARK_OPTION = 'black'
export const LIGHT_OPTION = 'white'
//MODE OPTIONS
export const COUNTER_OPTION = 'counter'
export const PAGINATION_OPTION = 'pagination'

export const MAX_NUMBER_OF_LINKS = 7
const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue: DARK_OPTION,
    proccessValue: (value) => {return   value}
})
ATTRIBUTES.push({
    attributeName: MODE_ATTRIBUTE,
    defaultValue: PAGINATION_OPTION,
    proccessValue: (value) => {return   value}
})
ATTRIBUTES.push({
    attributeName: ACTIVE_LINK_ATTRIBUTE,
    defaultValue: null,
    proccessValue: (value) => {return   value - 1}
})
export {ATTRIBUTES}


// SHADOW DOM
// I----------->CONTAINER_SLOT_WRAPPER
// I                I----------->SLOT_COMPONENT                                                   
// I
// I
// I----------->WRAPPER_COMPONENT
// I                I-----x------>ARROW_ICON_COMPONENT
// I                I
// I                I----------->WRAPPER_LINKS_COMPONENT 
// I                I               I----------->LINK_i_COMPONENT
// I                I                               I-----x------>BULLET_COMPONENT
// I                I
// I                I-----x------>ARROW_ICON_COMPONENT 

// subcomponents of component
export const CONTAINER_SLOT_WRAPPER = 'slot wrapper'
export const SLOT_COMPONENT = 'slot component'
export const WRAPPER_COMPONENT = 'wrapper component'
export const WRAPPER_LINKS_COMPONENT = 'wrapper links component'
export const LINK_i_COMPONENT = 'link_i'
export const BULLET_COMPONENT = 'bullet component'
export const ARROW_ICON_COMPONENT = 'arrow icon'

//ID OF COMPONENTS
export const WRAPPER_COMPONENT_id = 'wpContainerLinksComponentLinks'
//Events
export const DEFAULT_EVENT = 'default'
export const ACTIVE_EVENT = 'selection'

const EVENTS_OF_COMPONENT = []
EVENTS_OF_COMPONENT.push(ACTIVE_EVENT)



export {EVENTS_OF_COMPONENT}