export const NAME_OF_COMPONENT = 'component-breadcrumb'
//Variants keys
export const REGULAR_BREADCRUMB = 'regular breadcrumb'

//Attributes names
export const THEME_ATTRIBUTE = "data-theme"
export const STATE_ATTRIBUTE = "data-state"

export const SVG_ATTRIBUTES = "svg attributes"
export const SVG_STYLES = "svg styles"
export const SVG_TYPE = "svg type"

export const TEMPORARY_ATTRIBUTE = "data-temporary"
//COLOR OPTIONS
export const DARK_OPTION = 'dark'
export const LIGHT_OPTION = 'light'
//STATE OPTIONS
export const DEFAULT_OPTION = 'normal'
export const ACTIVE_OPTION = 'active'
export const HOVER_OPTION = 'hover'
const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: THEME_ATTRIBUTE,
    defaultValue: DARK_OPTION,
    proccessValue: function(){
        return this.getAttribute(THEME_ATTRIBUTE) ? this.getAttribute(THEME_ATTRIBUTE) : DARK_OPTION
    }
})
/*ATTRIBUTES.push({
    attributeName: STATE_ATTRIBUTE,
    defaultValue: DEFAULT_OPTION,
    proccessValue: (value) => {return   value}
})*/
export {ATTRIBUTES}
// WRAPPER_SUBCOMPONENT
// I----------->LABEL_SUBCOMPONENT
// I----------->ICON_SUBCOMPONENT
// I                I----------->ARROW_SUBCOMPONENT
// I
// subcomponents of component
export const CONTAINER_SLOT_WRAPPER = 'slot wrapper'
export const WRAPPER_SUBCOMPONENT = 'wrapper'
export const LABEL_CONTAINER = 'label container'
export const LABEL_SUBCOMPONENT = 'label'
export const ICON_SUBCOMPONENT = 'SVG subcomponent'
export const ARROW_SUBCOMPONENT = 'arrow subcomponent'
export const SVG_SUBCOMPONENT = "svg component"
export const PATH_SUBCOMPONENT = "path component"

export const DEFAULT_EVENT = 'default'
export const ACTIVE_EVENT = 'active'
export const HOVER_EVENT = 'hover'

const EVENTS_OF_COMPONENT = []
EVENTS_OF_COMPONENT.push(DEFAULT_EVENT)
EVENTS_OF_COMPONENT.push(ACTIVE_EVENT)
EVENTS_OF_COMPONENT.push(HOVER_EVENT)


export {EVENTS_OF_COMPONENT}