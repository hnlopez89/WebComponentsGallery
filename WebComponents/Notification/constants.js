import { MAX_WIDTH_MEDIUM_OPTION, MAX_WIDTH_SMALL_OPTION} from '../commonMethodsAndConstants/Styles/commonConstants.js'
export const NAME_OF_COMPONENT = "component-notification"
// components variants of text Inputs
export const ICON_NOTIFICATION_VARIANT = "icon notification"
export const REGULAR_NOTIFICATION_VARIANT = "regular notification"
export const ICON_CLOSE_NOTIFICATION_VARIANT = "close notification"
export const REGULAR_CLOSE_NOTIFICATION_VARIANT = "regular close notification"
// attributeNames
export const SIZE_ATTRIBUTE = "data-size";
export const COLOR_ATTRIBUTE = "data-color";
export const STATE_ATTRIBUTE = "data-state";
export const CLOSE_ATTRIBUTE = "data-close";
export const ICON_ATTRIBUTE = "data-icon";
export const ICON_SELECTION_ATTRIBUTE = "data-icon-selection";
export const TITLE_ATTRIBUTE = "data-title";
export const SUBTITLE_ATTRIBUTE = "data-subtitle";
export const AUTODISMISS_LENGTH_ATTRIBUTE = "data-autodismiss";
export const HIERARCHY_ATTRIBUTE = "data-text-hierarchy";
export const KEYS_ATRRIBUTE = "keysAttributes"
//size options 
export const EXTRA_LARGE_OPTION = "XL";
export const LARGE_OPTION = "L";
export const MEDIUM_OPTION = "M";
export const SMALL_OPTION = "S";
export const TOAST_OPTION = "toast";
// color options
export const WHITE_OPTION = "white";
export const BLACK_OPTION = "black";
//descriptor default value
export const SUCCESS_OPTION= "success"
export const WARNING_OPTION= "warning"
export const ERROR_OPTION= "error"
export const DEFAULT_OPTION= "default"

export const SVG_ATTRIBUTES = "svg attributes"
export const SVG_STYLES = "svg styles"
export const SVG_TYPE = "svg type"

export const TITLE_OPTION = 'title'
export const SUBTITLE_OPTION = 'subtitle'

//show options
export const CLOSE_ON_OPTION = "close on"
export const CLOSE_OFF_OPTION = "close off"
//show options
export const ICON_ON_OPTION = "icon on"
export const ICON_OFF_OPTION = "icon off"

const ATTRIBUTES = [];
const keyAttributes = []
ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue : TOAST_OPTION,
    proccessValue: function() {
        
        let value
        if (!this.getAttribute(SIZE_ATTRIBUTE))
        {
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
            if (vw < MAX_WIDTH_SMALL_OPTION)
            {
                value = SMALL_OPTION;
            }
            else if (vw >= MAX_WIDTH_SMALL_OPTION && vw < MAX_WIDTH_MEDIUM_OPTION)
            {
                value = MEDIUM_OPTION;
            }
            else if (vw >= MAX_WIDTH_MEDIUM_OPTION)
            {
                value = LARGE_OPTION;
            }
        }

        else if(this.getAttribute(SIZE_ATTRIBUTE)) 
        {
            value = this.getAttribute(SIZE_ATTRIBUTE) === LARGE_OPTION ? EXTRA_LARGE_OPTION : this.getAttribute(SIZE_ATTRIBUTE)
        }
        return value
    }
})
ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue : BLACK_OPTION,
    proccessValue: function ()  
    {
        const value = this.getAttribute(COLOR_ATTRIBUTE) ? this.getAttribute(COLOR_ATTRIBUTE) : BLACK_OPTION
        return value
    }
})
ATTRIBUTES.push({
    attributeName: CLOSE_ATTRIBUTE,
    defaultValue : CLOSE_ON_OPTION,
    proccessValue: function() {
        let value
        this.getAttribute(CLOSE_ATTRIBUTE) === CLOSE_ON_OPTION ? value= CLOSE_ON_OPTION : value = CLOSE_OFF_OPTION
        return value
    }
})
ATTRIBUTES.push({
    attributeName: STATE_ATTRIBUTE,
    defaultValue : DEFAULT_OPTION,
    proccessValue: function() {
        const value = this.getAttribute(STATE_ATTRIBUTE) ? this.getAttribute(STATE_ATTRIBUTE) : DEFAULT_OPTION
        return value
    }
})
ATTRIBUTES.push({
    attributeName: ICON_ATTRIBUTE,
    defaultValue : null,
    proccessValue: function() {
        const value = this.getAttribute(ICON_SELECTION_ATTRIBUTE) ? ICON_ON_OPTION :  ICON_OFF_OPTION
        return value
    }
})
ATTRIBUTES.push({
    attributeName: ICON_SELECTION_ATTRIBUTE,
    defaultValue : null,
    proccessValue: function() {
        const value = this.getAttribute(ICON_SELECTION_ATTRIBUTE) ? this.getAttribute(ICON_SELECTION_ATTRIBUTE) : null
        return value
    }
})
ATTRIBUTES.push({
    attributeName: AUTODISMISS_LENGTH_ATTRIBUTE,
    defaultValue : null,
    proccessValue: function() {
        const value = this.getAttribute(AUTODISMISS_LENGTH_ATTRIBUTE) ? this.getAttribute(AUTODISMISS_LENGTH_ATTRIBUTE) : null
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
        this.keysAttributes[COLOR_ATTRIBUTE] = this.dataAttributes[COLOR_ATTRIBUTE]
        this.keysAttributes[STATE_ATTRIBUTE] = this.dataAttributes[STATE_ATTRIBUTE]
        this.keysAttributes[CLOSE_ATTRIBUTE] = this.dataAttributes[CLOSE_ATTRIBUTE]
        this.keysAttributes[ICON_ATTRIBUTE] = this.dataAttributes[ICON_ATTRIBUTE]
    }
})

export {ATTRIBUTES};

//Definining names of subcomponents of component. This is used to identify the style to assign that subcomponent
// CONTAINER_WRAPPER
// I----->TITLES_ICONS_NOTIFICATION_CONTAINER
// I----------->ICON_SELECTION_NOTIFICATION_CONTAINER
// I-------------->ICON_SELECTION_NOTIFICATION
// I----------->TITLES_NOTIFICATION_CONTAINER
// I-------------->TITLE_NOTIFICATION
// I-------------->SUBTITLE_NOTIFICATION
// I----------->ICON_CLOSE_NOTIFICATION_CONTAINER
// I-------------->ICON_CLOSE_NOTIFICATION

export const CONTAINER_WRAPPER = "container wrapper"
export const TITLES_ICONS_NOTIFICATION_CONTAINER = "title icons notification container"
export const ICON_SELECTION_NOTIFICATION_CONTAINER = "icon selection notification container"
export const ICON_SELECTION_NOTIFICATION = "icon selection notification"
export const ICON_CLOSE_NOTIFICATION_CONTAINER = "icon close notification container"
export const ICON_CLOSE_NOTIFICATION = "icon close notification"
export const TITLES_NOTIFICATION_CONTAINER = "titles notification container"
export const TITLE_NOTIFICATION = "title notification"
export const LINK_SUBTITLE = "link subtitle"
export const LINK_TITLE = "link title"
export const SUBTITLE_NOTIFICATION = "subtitle notification"
export const ICON_SUBCOMPONENT = "icon subcomponent"
export const CLOSE_ICON_SUBCOMPONENT = "close icon subcomponent"
export const SVG_SUBCOMPONENT = "svg component"
export const PATH_SUBCOMPONENT = "path component"

//  Defining constants for events 
export const SUCCESS_EVENT= "success event"
export const WARNING_EVENT= "warning event"
export const ERROR_EVENT= "error event"
export const DEFAULT_EVENT= "default event"

//array of events
const EVENTS_OF_COMPONENT = []

EVENTS_OF_COMPONENT.push(DEFAULT_EVENT)

export {EVENTS_OF_COMPONENT}

