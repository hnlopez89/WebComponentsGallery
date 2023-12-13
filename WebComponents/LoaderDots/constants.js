export const CUSTOM_ELEMENT_NAME = "component-loaderdots"

//VARIANT NAMES
export const DOTS_LOADER_VARIANT = "component dots loader"

// attributeNames
export const THEME_ATTRIBUTE = "data-theme";
export const SIZE_ATTRIBUTE = "data-size";
export const TYPE_DETAIL_ATTRIBUTE = "data-detail-type";

export const SVG_ATTRIBUTES = "svg attributes"
export const SVG_STYLES = "svg styles"
export const SVG_TYPE = "svg type"

//color options
export const DARK_OPTION = "dark"
export const LIGHT_OPTION = "light"

export const SMALL_OPTION = "small"
export const MEDIUM_OPTION = "medium"
export const LARGE_OPTION = "large"

export const OFF_OPTION = "off"
export const ON_OPTION = "on"

export const DEFAULT_OPTION= "default"

const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: THEME_ATTRIBUTE,
    defaultValue : LIGHT_OPTION,
    proccessValue: function ()  
    {
        const value = this.getAttribute(THEME_ATTRIBUTE) ? this.getAttribute(THEME_ATTRIBUTE) : LIGHT_OPTION
        return value
    }
})
ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue : SMALL_OPTION,
    proccessValue: function ()  
    {
        const value = this.getAttribute(SIZE_ATTRIBUTE)? this.getAttribute(SIZE_ATTRIBUTE) : SMALL_OPTION
        return value
    }
})
ATTRIBUTES.push({
    attributeName: TYPE_DETAIL_ATTRIBUTE,
    defaultValue :  null,
    proccessValue: function ()  
    {
        const value = this.getAttribute(TYPE_DETAIL_ATTRIBUTE)? this.getAttribute(TYPE_DETAIL_ATTRIBUTE) : OFF_OPTION
        return value
    }
})

export {ATTRIBUTES};
export const COMPONENT_WRAPPER = "component wrapper"
export const BACKGROUND_WRAPPER = "background wrapper"
export const DOTS_WRAPPER = "dots wrapper"
export const ICON_SUBCOMPONENT = 'image'
export const SVG_SUBCOMPONENT = "svg component"
export const SVG_SUBCOMPONENT_2 = "svg component 2"
export const PATH_SUBCOMPONENT = "path component 1"
export const PATH_SUBCOMPONENT_2 = "path component 2"
export const PATH_SUBCOMPONENT_3 = "path component 3"

//  Defining constants for events 
export const DEFAULT_EVENT= "default event"

//array of events
const EVENTS_OF_COMPONENT = []
EVENTS_OF_COMPONENT.push(DEFAULT_EVENT)
export {EVENTS_OF_COMPONENT}
