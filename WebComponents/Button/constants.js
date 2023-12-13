import {BLACK, MAX_WIDTH_MEDIUM_OPTION, MAX_WIDTH_SMALL_OPTION} from '../commonMethodsAndConstants/Styles/commonConstants.js'
// attributeNames
export const HIERARCHY_ATTRIBUTE = "data-hierarchy";
export const SIZE_ATTRIBUTE = "data-size";
export const COLOR_ATTRIBUTE = "data-color";
export const STATE_ATTRIBUTE = "data-state";
export const LINE_ATTRIBUTE = "data-line";
export const ICON_ATTRIBUTE = "data-icon";
export const THEME_ATTRIBUTE = "data-theme"
export const ICON_SELECTION_ATTRIBUTE = "data-icon-selection";
export const CHILDREN_ATTRIBUTE = "data-children";
export const WIDTH_ATTRIBUTE = "data-size-width";
// hierarchy options
export const PRIMARY_OPTION = "primary";
export const SECONDARY_OPTION = "secondary";
export const TERTIARY_OPTION = "tertiary";
export const HYPERLINK_OPTION = "hyperlink";
export const ROUNDED_SOLID_OPTION = "rounded-solid";
export const ROUNDED_OUTLINED_OPTION = "rounded-outlined";
export const DESTRUCTIVE_OPTION = "destructive"
export const ICON_HIERARCHY_OPTION = "icon"
//device options 
export const EXTRA_LARGE_OPTION = "XL";
export const LARGE_OPTION = "L";
export const MEDIUM_OPTION = "M";
export const SMALL_OPTION = "S";
// color options
export const DARK_OPTION = "dark";
export const LIGHT_OPTION = "light";
//state options
export const ACTIVE_OPTION = "active";
export const HOVER_OPTION = "hover";
export const FOCUS_OPTION = "focus";
export const PRESS_OPTION = "press";
export const INACTIVE_OPTION = "inactive";
//line options
export const TITLE_OPTION = "title";
export const PARAGRAPH_OPTION = "paragraph"
// icon option
export const ON_OPTION = "on";
export const OFF_OPTION = "off";

//data-size-width options
export const FULL_OPTION = "full"
export const FIT_CONTENT_OPTION = "fit-content"
// children default value
export const CHILDREN_DEFAULT_OPTION = "Call to action";
//icon selection default value
export const ICON_DEFAULT = "nothing"

export const    TEMPORARY_ATTRIBUTE = "data-temporary-attribute"
const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: HIERARCHY_ATTRIBUTE,
    defaultValue: null,
    proccessValue: function ()  
    {
        const value = this.getAttribute(HIERARCHY_ATTRIBUTE) ? this.getAttribute(HIERARCHY_ATTRIBUTE) : null
        return   value;
    }
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
    proccessValue: function ()  
    {
        const value = this.getAttribute(SIZE_ATTRIBUTE) ? this.getAttribute(SIZE_ATTRIBUTE) : (() => {
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
        }) ()
        return   value;
    }

})
ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue : null,
    proccessValue: function ()  
    {
        const value = this.getAttribute(COLOR_ATTRIBUTE) ? this.getAttribute(COLOR_ATTRIBUTE) : null
        return   value;
    }

})
ATTRIBUTES.push({
    attributeName: THEME_ATTRIBUTE,
    defaultValue : null,
    proccessValue: function ()  
    {
        const value = this.getAttribute(THEME_ATTRIBUTE) ? this.getAttribute(THEME_ATTRIBUTE) : null
        return   value;
    }

})
ATTRIBUTES.push({
    attributeName: STATE_ATTRIBUTE,
    defaultValue : ACTIVE_OPTION,
    proccessValue: function ()  
    {
        const value = this.getAttribute(STATE_ATTRIBUTE) ? this.getAttribute(STATE_ATTRIBUTE) : ACTIVE_OPTION
        return   value;
    }

})
ATTRIBUTES.push({
    attributeName: LINE_ATTRIBUTE,
    defaultValue : null,
    proccessValue: function ()  
    {
        const value = this.getAttribute(LINE_ATTRIBUTE) ? this.getAttribute(LINE_ATTRIBUTE) : null
        return   value;
    }

})
ATTRIBUTES.push({
    attributeName: ICON_ATTRIBUTE,
    defaultValue : OFF_OPTION,
    proccessValue: function ()  
    {
        const value = (this.getAttribute(HIERARCHY_ATTRIBUTE)!==TERTIARY_OPTION && this.getAttribute(HIERARCHY_ATTRIBUTE)!==HYPERLINK_OPTION && this.getAttribute(HIERARCHY_ATTRIBUTE)!==ICON_HIERARCHY_OPTION) ? ((this.getAttribute(ICON_SELECTION_ATTRIBUTE)!==ICON_DEFAULT && !!this.getAttribute(ICON_SELECTION_ATTRIBUTE))  ? ON_OPTION : OFF_OPTION): null
        return   value;
    }

})
ATTRIBUTES.push({
    attributeName: ICON_SELECTION_ATTRIBUTE,
    defaultValue : ICON_DEFAULT,
    proccessValue: function ()  
    {
        const value = this.getAttribute(ICON_SELECTION_ATTRIBUTE) ? this.getAttribute(ICON_SELECTION_ATTRIBUTE) : ICON_DEFAULT
        return   value;
    }

})
ATTRIBUTES.push({
    attributeName: CHILDREN_ATTRIBUTE,
    defaultValue : CHILDREN_DEFAULT_OPTION,
    proccessValue: function ()  
    {
        const value = this.getAttribute(CHILDREN_ATTRIBUTE) ? this.getAttribute(CHILDREN_ATTRIBUTE) : CHILDREN_DEFAULT_OPTION
        return   value;
    }

})

ATTRIBUTES.push({
    attributeName: WIDTH_ATTRIBUTE,
    defaultValue: FULL_OPTION,
    proccessValue: function ()  
    {
        const value = (this.getAttribute(HIERARCHY_ATTRIBUTE)!==TERTIARY_OPTION && this.getAttribute(HIERARCHY_ATTRIBUTE)!==HYPERLINK_OPTION && this.getAttribute(HIERARCHY_ATTRIBUTE)!==ICON_HIERARCHY_OPTION) ? (this.getAttribute(WIDTH_ATTRIBUTE) ? this.getAttribute(WIDTH_ATTRIBUTE) : FULL_OPTION): null
        return   value;
    }
})
export {ATTRIBUTES};

//Definining names of subcomponents of component. This is used to identify the style to assign that subcomponent
export const BUTTON_SUBCOMPONENT = 'button'
export const ICON_CONTAINER_SUBCOMPONENT = 'icon container'
export const ICON_SUBCOMPONENT = 'icon'
export const ICONARROW_CONTAINER_SUBCOMPONENT = 'icon Arrow container'
export const ICONARROW_SUBCOMPONENT = 'icon Arrow'
export const TEXT_SUBCOMPONENT = 'textButton'

//  Defining constants for events 
export const DEFAULT_EVENT = 'default'
export const HOVER_BUTTON_EVENT = 'hoverButton'
export const FOCUS_BUTTON_EVENT = 'focusButton'
export const CLICK_BUTTON_EVENT = 'clickButton'

//array of events
const EVENTS_OF_COMPONENT = []

EVENTS_OF_COMPONENT.push(HOVER_BUTTON_EVENT)
EVENTS_OF_COMPONENT.push(FOCUS_BUTTON_EVENT)
EVENTS_OF_COMPONENT.push(CLICK_BUTTON_EVENT)

export {EVENTS_OF_COMPONENT}

// components variants of buttons
export const REGULAR_BUTTON_VARIANT = 'regular button'
export const REGULAR_BUTTON_ICON_VARIANT = 'regular button icon'
export const ARROW_BUTTON_VARIANT = 'arrow button'
export const ARROW_BUTTON_ICON_VARIANT = 'arrow button icon'
export const ICON_BUTTON_VARIANT = 'icon button'

export const NAME_OF_COMPONENT = 'component-button'
