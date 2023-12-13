export const CUSTOM_ELEMENT_NAME = "component-loaderlogo"

//VARIANT NAMES
export const LOGO_LOADER_VARIANT = "component logo loader"

// attributeNames
export const TYPE_LOADER_ATTRIBUTE = "data-type-loader";
export const THEME_ATTRIBUTE = "data-theme";
export const SIZE_ATTRIBUTE = "data-size";
export const TYPE_DETAIL_ATTRIBUTE = "data-detail-type";
export const PROGRESS_STATE_ATTRIBUTE = "data-progress-state";

export const SVG_ATTRIBUTES = "svg attributes"
export const SVG_STYLES = "svg styles"
export const SVG_TYPE = "svg type"

//color options
export const DARK_OPTION = "dark"
export const LIGHT_OPTION = "light"

export const SMALL_OPTION = "small"
export const MEDIUM_OPTION = "medium"
export const LARGE_OPTION = "large"

export const DEFAULT_OPTION= "default"

// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// CONTAINER_WRAPPER
// I----------->ICON_SUBCOMPONENT
// I--------------->SVG_SUBCOMPONENT
// I------------------->PATH_SUBCOMPONENT


const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue : LARGE_OPTION,
    proccessValue: function ()  
    {
        return LARGE_OPTION
    }
})

export {ATTRIBUTES};
export const COMPONENT_WRAPPER = "component wrapper"
export const ICON_SUBCOMPONENT = 'image'
export const SVG_SUBCOMPONENT = "svg component"
export const PATH_SUBCOMPONENT_01 = "path component_01"
export const PATH_SUBCOMPONENT_02 = "path component_02"
export const PATH_SUBCOMPONENT_03 = "path component_03"
export const PATH_SUBCOMPONENT_04 = "path component_04"
export const PATH_SUBCOMPONENT_05 = "path component_05"
export const PATH_SUBCOMPONENT_06 = "path component_06"
export const PATH_SUBCOMPONENT_07 = "path component_07"
export const PATH_SUBCOMPONENT_08 = "path component_08"
export const PATH_SUBCOMPONENT_09 = "path component_09"
export const PATH_SUBCOMPONENT_10 = "path component_10"
export const PATH_SUBCOMPONENT_11 = "path component_11"
export const PATH_SUBCOMPONENT_12 = "path component_12"
export const PATH_SUBCOMPONENT_13 = "path component_13"
export const PATH_SUBCOMPONENT_14 = "path component_14"
export const PATH_SUBCOMPONENT_15 = "path component_15"
export const PATH_SUBCOMPONENT_16 = "path component_16"
export const PATH_SUBCOMPONENT_17 = "path component_17"
export const PATH_SUBCOMPONENT_18 = "path component_18"
export const PATH_SUBCOMPONENT_19 = "path component_19"
export const PATH_SUBCOMPONENT_20 = "path component_20"
export const PATH_SUBCOMPONENT_21 = "path component_21"
export const PATH_SUBCOMPONENT_22 = "path component_22"
export const PATH_SUBCOMPONENT_23 = "path component_23"
export const PATH_SUBCOMPONENT_24 = "path component_24"
export const PATH_SUBCOMPONENT_25 = "path component_25"
//  Defining constants for events 
export const DEFAULT_EVENT= "default event"

//array of events
const EVENTS_OF_COMPONENT = []
EVENTS_OF_COMPONENT.push(DEFAULT_EVENT)
export {EVENTS_OF_COMPONENT}

