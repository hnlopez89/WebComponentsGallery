export const CUSTOM_ELEMENT_NAME = "component-loaderbar"

//VARIANT NAMES
export const PROGRESS_BAR_LOADER_VARIANT = "component progress bar loader"

// attributeNames
export const THEME_ATTRIBUTE = "data-theme";
export const SIZE_ATTRIBUTE = "data-size";
export const TYPE_DETAIL_ATTRIBUTE = "data-detail-type";
export const PROGRESS_STATE_ATTRIBUTE = "data-progress-state";

export const KEYS_ATRRIBUTE = "keysAttributes"


export const SVG_ATTRIBUTES = "svg attributes"
export const SVG_STYLES = "svg styles"
export const SVG_TYPE = "svg type"

//color options
export const DARK_OPTION = "dark"
export const LIGHT_OPTION = "light"

export const SMALL_OPTION = "small"
export const MEDIUM_OPTION = "medium"
export const LARGE_OPTION = "large"

export const DETERMINATED_OPTION = "determinated"
export const INDETERMINATED_OPTION = "indeterminated"

export const DEFAULT_OPTION= "default"

export const widthProgressBar = 96
export const widthBar = 296
export const heightSmallSize = 2
export const heightLargeSize = 4

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
    defaultValue :  INDETERMINATED_OPTION,
    proccessValue: function ()  
    {
        const value = parseInt(this.getAttribute(PROGRESS_STATE_ATTRIBUTE))? DETERMINATED_OPTION : INDETERMINATED_OPTION
        return value
    }
})
ATTRIBUTES.push({
    attributeName: PROGRESS_STATE_ATTRIBUTE,
    defaultValue :  INDETERMINATED_OPTION,
    proccessValue: function ()  
    {
        const value = parseInt(this.getAttribute(PROGRESS_STATE_ATTRIBUTE))? parseInt(this.getAttribute(PROGRESS_STATE_ATTRIBUTE)) : null
        return value
    }
})
ATTRIBUTES.push({
    attributeName: KEYS_ATRRIBUTE,
    defaultValue : null,
    proccessValue: function ()  
    {
        this.keysAttributes = {}
        this.keysAttributes[SIZE_ATTRIBUTE] = this.dataAttributes[SIZE_ATTRIBUTE]
        this.keysAttributes[THEME_ATTRIBUTE] = this.dataAttributes[THEME_ATTRIBUTE]
        this.keysAttributes[TYPE_DETAIL_ATTRIBUTE] = this.dataAttributes[TYPE_DETAIL_ATTRIBUTE]
    }
})
// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// CONTAINER_WRAPPER
// I----------->ICON_SUBCOMPONENT
// I--------------->SVG_SUBCOMPONENT
// I------------------->PATH_SUBCOMPONENT
// I----------->PROGRESSION_COMPONENT
// I--------------->SVG_SUBCOMPONENT_BAR
// I------------------->PATH_SUBCOMPONENT_BAR

export {ATTRIBUTES};
export const COMPONENT_WRAPPER = "component wrapper"
export const BACKGROUND_WRAPPER = "background wrapper"
export const PROGRESS_BAR_WRAPPER = "progress bar wrapper"
export const PROGRESSION_COMPONENT = "progression bar wrapper"
export const ICON_SUBCOMPONENT = 'image'
export const SVG_SUBCOMPONENT = "svg component"
export const SVG_SUBCOMPONENT_BAR = "svg component bar"
export const PATH_SUBCOMPONENT = "path component"
export const PATH_SUBCOMPONENT_BAR = "path component bar"

//  Defining constants for events 
export const DEFAULT_EVENT= "default event"

//array of events
const EVENTS_OF_COMPONENT = []
EVENTS_OF_COMPONENT.push(DEFAULT_EVENT)
export {EVENTS_OF_COMPONENT}
