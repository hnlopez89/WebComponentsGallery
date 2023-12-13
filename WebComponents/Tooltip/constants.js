export const CUSTOM_ELEMENT_NAME = "component-tooltip"
export const REGULAR_TOOLTIP_VARIANT = "component regular tooltip"
export const TITLES_TOOLTIP_VARIANT = "component titles tooltip"
export const SINGLE_BUTTON_TOOLTIP_VARIANT = "component single button tooltip"
export const MULTI_BUTTON_TOOLTIP_VARIANT = "component multi button tooltip"

// attributeNames
export const COLOR_ATTRIBUTE = "data-color";
export const LINES_ATTRIBUTE = "data-lines";
export const POSITION_ATTRIBUTE = "data-position"
export const ALIGNMENT_ATTRIBUTE = "data-alignment"
export const BUTTON_NUMBER_ATTRIBUTE = "data-number-attribute"
export const HIERARCHY_ATTRIBUTE = "data-text-hierarchy";
export const TITLE_ATTRIBUTE = "data-title"
export const SUBTITLE_ATTRIBUTE = "data-subtitle";
export const STATE_ATTRIBUTE = "data-state"
export const SHOW_SIMPLE_OR_COMPLEX = "data-show-lines-or-buttons"

export const SVG_ATTRIBUTES = "svg attributes"
export const SVG_STYLES = "svg styles"
export const SVG_TYPE = "svg type"
//color options
export const DARK_OPTION = "dark"
export const LIGHT_OPTION = "light"

//line options
export const MULTI_LINE_OPTION = "2to4-line"
export const SINGLE_LINE_OPTION = "1-line"

//position options
export const ARROW_BOTTOM = "arrow-bottom"
export const ARROW_TOP= "arrow-top"
export const ARROW_LEFT = "arrow-left"
export const ARROW_RIGHT = "arrow-right"

//alignment options
export const START_OPTION = "start"
export const MIDDLE_OPTION = "middle"
export const END_OPTION = "end"

//alignment options
export const SIMPLE_OPTION = "lines"
export const COMPLEX_OPTION = "buttons"

//alignment options
export const MULTI_BUTTON_OPTION = "2"
export const SINGLE_BUTTON_OPTION = "1"
export const ZERO_BUTTON_OPTION = "0"
const ATTRIBUTES = [];

ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue : LIGHT_OPTION,
    proccessValue: function ()  
    {
        const value = this.getAttribute(COLOR_ATTRIBUTE) ? this.getAttribute(COLOR_ATTRIBUTE) : LIGHT_OPTION
        return   value
    }
})
ATTRIBUTES.push({
    attributeName: ALIGNMENT_ATTRIBUTE,
    defaultValue : END_OPTION,
    proccessValue: function ()  
    {
        const valueLines = this.getAttribute(LINES_ATTRIBUTE)
        const valuePosition = this.getAttribute(POSITION_ATTRIBUTE) ? this.getAttribute(POSITION_ATTRIBUTE) : ARROW_BOTTOM
        const value = this.getAttribute(ALIGNMENT_ATTRIBUTE) ? this.getAttribute(ALIGNMENT_ATTRIBUTE) : END_OPTION

        if ((valueLines === SINGLE_LINE_OPTION) && (valuePosition===ARROW_RIGHT || valuePosition===ARROW_LEFT)) {
            return START_OPTION;
        }
        else return value;

    }
})

ATTRIBUTES.push({
    attributeName: POSITION_ATTRIBUTE,
    defaultValue : ARROW_BOTTOM,
    proccessValue: function ()  
    {
        const value = this.getAttribute(POSITION_ATTRIBUTE) ? this.getAttribute(POSITION_ATTRIBUTE) : ARROW_BOTTOM
        return   value
    }
})

ATTRIBUTES.push({
    attributeName: SHOW_SIMPLE_OR_COMPLEX,
    defaultValue : SIMPLE_OPTION,
    proccessValue: function ()  
    {
        const buttons = this.querySelector('button')
        const title = this.querySelector('h1')
        const subtitle = this.querySelector('p')
        if(buttons || (title && subtitle)) {
            return COMPLEX_OPTION
        } 
        else {
            return SIMPLE_OPTION
        }
    }
})
ATTRIBUTES.push({
    attributeName: LINES_ATTRIBUTE,
    defaultValue : MULTI_LINE_OPTION,
    proccessValue: function ()  
    {
        const value = this.getAttribute(LINES_ATTRIBUTE) ? this.getAttribute(LINES_ATTRIBUTE) : MULTI_LINE_OPTION
        const buttons = this.querySelector('button')
        const title = this.querySelector('h1')
        const subtitle = this.querySelector('p')
        if(!buttons && !(title && subtitle)) {
            return value
        }
        else return null;
    }
})


ATTRIBUTES.push({
    attributeName: BUTTON_NUMBER_ATTRIBUTE,
    defaultValue : SINGLE_BUTTON_OPTION,
    proccessValue: function ()  
    {
        const buttons = this.querySelectorAll('button')
        const title = this.querySelector('h1')
        const subtitle = this.querySelector('p')
        if(buttons.length === 1) {
            return SINGLE_BUTTON_OPTION
        } else if (buttons.length > 1) {
            return MULTI_BUTTON_OPTION
        } else if (title && subtitle){
            return ZERO_BUTTON_OPTION
        } 
        else return null
    }
})
export {ATTRIBUTES};
//SubCOmponents
// SHADOW DOM
// I----------->SLOT_WRAPPER
// I                I----------->SLOT_COMPONENT
// I
// I----------->WRAPPER_COMPONENT
//                  I----------->ICON_COMPONENT
//                  I                   I----------->SVG_SUBCOMPONENT
//                  I                                       I----------->PATH_SUBCOMPONENT
//                  I----------->CONTENT_WRAPPER
//                                      I----------->CONTENT_COMPONENT
//                                            I----------->TITLE_COMPONENT
//                                            I----------->SUBTITLE_COMPONENT
//                                      I----------->CONTAINER_BUTTON_WRAPPER
//                                            I----------->BUTTON_CONFIRMATION
//                                            I----------->BUTTON_CANCELATION

//Definining names of subcomponents of component. This is used to identify the style to assign that subcomponent
export const WRAPPER_COMPONENT = "wrapper"
export const ICON_COMPONENT = "icon component"
export const ICON_CONTAINER = "icon container"
export const CONTENT_COMPONENT = "content component"
export const CONTENT_WRAPPER = "content wrapper"
export const CONTAINER_SLOT_WRAPPER = "slot wrapper"
export const CONTAINER_BUTTON_WRAPPER = "button wrapper"
export const BUTTON_CONFIRMATION = "button confirmation"
export const BUTTON_CANCELATION = "button cancelation"
export const TITLE_COMPONENT = "title component"
export const SUBTITLE_COMPONENT = "subtitle component"
export const SLOT_COMPONENT = "slot component"
export const SVG_SUBCOMPONENT = "svg component"
export const PATH_SUBCOMPONENT = "path component"
export const DEFAULT_EVENT ="default event"

//array of events
const EVENTS_OF_COMPONENT = []

EVENTS_OF_COMPONENT.push(DEFAULT_EVENT)

export {EVENTS_OF_COMPONENT}