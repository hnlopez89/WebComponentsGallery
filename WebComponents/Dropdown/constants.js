import { MAX_WIDTH_MEDIUM_OPTION} from "../commonMethodsAndConstants/Styles/commonConstants.js"
export const NAME_OF_COMPONENT = 'component-dropdown'


//Attributes names
export const TEMPORARY_ATTRIBUTE = "data-temporary-attribute"
export const COLOR_ATTRIBUTE = "data-color"
export const DROPDOWN_WIDTH_ATTRIBUTE = "data-dropdown-width"
export const DROPDOWN_VALUE_ATTRIBUTE = "data-dropdown-value"
export const OPTION_VALUE_ATTRIBUTE = "data-option-value"
export const SIZE_ATTRIBUTE = "data-size"
export const STATE_ATTRIBUTE = "data-state"
export const TITLE_ATTRIBUTE = "data-title"
export const OPTIONS_ATTRIBUTE = "data-options"
export const OPTIONS_VALUE_SUBATTRIBUTE = "value subAttribute"
export const OPTIONS_TEXT_SUBATTRIBUTE = "text subAttribute"
export const REQUIRED_ATTRIBUTE = "required"

export const ERROR_MESSAGE_ATTRIBUTE = "data-error-message"
export const ERROR_MESSAGE_DEFAULT = "Error message"

//Options names
export const DARK_OPTION = 'dark'
export const LIGHT_OPTION = 'light'
export const LARGE_OPTION = "L"
export const MEDIUM_OPTION = "M"
export const NORMAL_OPTION = "normal"
export const UNSELECTED_OPTION = "unselected"
export const SELECTED_OPTION = "selected"
export const INACTIVE_OPTION = "inactive"
export const OPEN_OPTION = "open"
export const ERROR_OPTION = "error"
export const REQUIRED_OPTION = "*"


export const SIZE_FUNCTION_PARSING = () => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    if ( vw < MAX_WIDTH_MEDIUM_OPTION)
    {
       return MEDIUM_OPTION;
    }
    else if (vw >= MAX_WIDTH_MEDIUM_OPTION)
    {
       return LARGE_OPTION;
    }
}

const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue: DARK_OPTION,
    proccessValue: function ()  {
        const value = this.getAttribute(COLOR_ATTRIBUTE) ? this.getAttribute(COLOR_ATTRIBUTE) : DARK_OPTION
        return   value    
    }
})
ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue: LARGE_OPTION,
    proccessValue: function ()  {
        const value = this.getAttribute(SIZE_ATTRIBUTE) ? this.getAttribute(SIZE_ATTRIBUTE) : SIZE_FUNCTION_PARSING()
        return   value    
    }
})
ATTRIBUTES.push({
    attributeName: STATE_ATTRIBUTE,
    defaultValue: NORMAL_OPTION,
    proccessValue: function ()  {
        const value = this.getAttribute(STATE_ATTRIBUTE) ? this.getAttribute(STATE_ATTRIBUTE) : NORMAL_OPTION
        return   value    
    }
})
ATTRIBUTES.push({
    attributeName: DROPDOWN_VALUE_ATTRIBUTE,
    defaultValue: "",
    proccessValue: function ()  {
        const value = this.getAttribute(DROPDOWN_VALUE_ATTRIBUTE) ? this.getAttribute(DROPDOWN_VALUE_ATTRIBUTE) : ""
        return   value    
    }
})

ATTRIBUTES.push({
    attributeName: TITLE_ATTRIBUTE,
    defaultValue: "Dropdown Title",
    proccessValue: function ()  {
        const value = this.getAttribute(TITLE_ATTRIBUTE) ? this.getAttribute(TITLE_ATTRIBUTE) : "Dropdown Title"
        return   value    
    }
})
ATTRIBUTES.push({
    attributeName: REQUIRED_ATTRIBUTE,
    defaultValue: "",
    proccessValue: function ()  {
        const value = this.getAttribute(REQUIRED_ATTRIBUTE) ? this.getAttribute(REQUIRED_ATTRIBUTE) : ""
        return   value    
    }
})
ATTRIBUTES.push({
    attributeName: ERROR_MESSAGE_ATTRIBUTE,
    defaultValue: "Required",
    proccessValue: function ()  {
        const value = this.getAttribute(ERROR_MESSAGE_ATTRIBUTE) ? this.getAttribute(ERROR_MESSAGE_ATTRIBUTE) : "Required"
        return   value    
    }
})


export {ATTRIBUTES}

export const ERROR_CONTAINER_SUBCOMPONENT = 'error container'
export const INITIAL_EVENT = 'initial'
export const DEFAULT_EVENT = 'default'
export const SELECTION_EVENT = 'selection'
export const OPEN_EVENT = "open"
export const HOVER_EVENT = "hover"
export const ERROR_EVENT = "error"
export const INACTIVE_EVENT = "inactive"

const EVENTS_OF_COMPONENT = []
EVENTS_OF_COMPONENT.push(DEFAULT_EVENT)
EVENTS_OF_COMPONENT.push(OPEN_EVENT)
EVENTS_OF_COMPONENT.push(INITIAL_EVENT)
EVENTS_OF_COMPONENT.push(SELECTION_EVENT)
EVENTS_OF_COMPONENT.push(HOVER_EVENT)
EVENTS_OF_COMPONENT.push(ERROR_EVENT)
EVENTS_OF_COMPONENT.push(INACTIVE_EVENT)

export {EVENTS_OF_COMPONENT}

//SubCOmponents
// SHADOW DOM
// I----------->CONTAINER_SLOT_WRAPPER
// I                I----------->SLOT
// I
// I----------->CONTAINER_SUPER_WRAPPER
//                  I----------->CONTAINER_WRAPPER
//                                     I----------->CONTAINER_SUBWRAPPER
//                                     I                I----------->TITLE_PLUS_OPTION__SELECTED_SUBCOMPONENT
//                                     I                I               I----------->TITLE_SUBCOMPONENT
//                                     I                I               I                   I----------->TITLE_ITEM
//                                     I                I               I                                   I----------->TITLE_TEXT_NODE
//                                     I                I               I----------->OPTION_SELECTED_SUBCOMPONENT
//                                     I                I                                   I----------->OPTION_TEXT_NODE
//                                     I                I
//                                     I                I
//                                     I                I----------->ARROW_ICON_SUBCOMPONENT
//                                     I                                I----------->ARROW_ICON_CONTAINER
//                                     I                                                    I----------->ARROW_ICON_ITEM
//                                     I
//                                     I----------->OPTION_WRAPPER
//                                                      I----------->OPTION_Ni_SUBCOMPONENT
//                                                                      I----------->OPTION_Ni_ITEM
//                                                                                          I----------->OPTION_TEXT_NODE
//                                     I----------->ERROR_WRAPPER
//                                                      I----------->ERROR_TEXT_NODE
export const CONTAINER_SLOT_WRAPPER = 'container slot wrapper'
export const CONTAINER_SUPER_WRAPPER = 'CONTAINER SUPER WRAPPER'
export const CONTAINER_WRAPPER = 'container wrapper'
export const CONTAINER_SUBWRAPPER = 'container subwrapper'
export const TITLE_PLUS_OPTION__SELECTED_SUBCOMPONENT = "title + option selected"
export const TITLE_SUBCOMPONENT = "title subcomponent"
export const TITLE_ITEM = "title item"
export const OPTION_SELECTED_SUBCOMPONENT = "option selected"
export const ARROW_ICON_SUBCOMPONENT = "arrow icon subcomponent"
export const ARROW_ICON_CONTAINER = "arrow icon container"
export const ARROW_ICON_ITEM = "arrow icon item"
export const OPTION_WRAPPER = "option wrapper"
export const OPTION_Ni_SUBCOMPONENT = 'option Ni'
export const OPTION_Ni_ITEM = 'option Ni item'
export const ERROR_WRAPPER = "error wrapper"
export const ERROR_TEXT_NODE = "error text node"
//Variants keys
export const REGULAR_DROPDOWN_VARIANT = 'regular-dropdown-variant'
