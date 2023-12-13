export const NAME_OF_COMPONENT = 'component-profile'
// components variants of text Inputs
export const LOGOUT_PROFILE_VARIANT = 'logout profile'
export const LOG_IN_INITIALS_PROFILE_VARIANT = 'log in initals profile'
export const LOG_IN_PICTURE_PROFILE_VARIANT = 'log in image profile'
export const LOG_IN_INITIALS_BADGE_PROFILE_VARIANT = 'log in initials badge profile'
export const LOG_IN_PICTURE_BADGE_PROFILE_VARIANT = 'log in image badge profile'
// attributeNames
export const SIZE_ATTRIBUTE = "data-size";
export const THEME_ATTRIBUTE = "data-theme";
export const STATE_ATTRIBUTE = "data-state";
export const SHOW_TITLE_OR_PICTURE_ATTRIBUTE = 'data-show-title-or-picture'
export const SHOW_BADGE_ATTRIBUTE = 'data-show-badge'
export const BADGE_STATE_ATTRIBUTE = "data-badge-state";
export const BADGE_NUMBER_ATTRIBUTE = "data-badge-number";
export const TEMPORARY_ATTRIBUTE = 'data-temporary'
export const TITLE_ATTRIBUTE = "data-title"
export const PICTURE_ATTRIBUTE = "data-picture"

export const KEYS_ATRRIBUTE = "keysAttributes"

//size options 
export const DOUBLE_EXTRA_LARGE_OPTION = "XXL";
export const EXTRA_LARGE_OPTION = "XL";
export const LARGE_OPTION = "L";
export const MEDIUM_OPTION = "M";
export const SMALL_OPTION = "S";
export const EXTRA_SMALL_OPTION = "XS";
// color options
export const LIGHT_OPTION = "light";
export const DARK_OPTION = "dark";
//state options
export const LOGOUT_OPTION = "logout";
export const LOG_IN_OPTION = "login";
//descriptor default value
export const SUCCESS_OPTION= "success"
export const WARNING_OPTION= "warning"
export const ERROR_OPTION= "error"
export const DEFAULT_OPTION= "default"

export const SVG_ATTRIBUTES = "svg attributes"
export const SVG_STYLES = "svg styles"
export const SVG_TYPE = "svg type"

//show title options
export const SHOW_TITLE_OPTION = "yes-title"
export const SHOW_PICTURE_OPTION = "yes-picture"
//show badge options
export const SHOW_BADGE_OPTION = "yes"
export const HIDE_BADGE_OPTION = "no"

const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: TITLE_ATTRIBUTE,
    defaultValue : null,
    proccessValue: function()
    {
        const value = this.getAttribute(TITLE_ATTRIBUTE)
        if(value && value.length >= 2)
        {
            return value.substring(0,2).toUpperCase().toString()
        } else 
        {
            return null
        }
    }
})
ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue : DOUBLE_EXTRA_LARGE_OPTION,
    proccessValue: function() {
        const value = this.getAttribute(SIZE_ATTRIBUTE) ? this.getAttribute(SIZE_ATTRIBUTE) : DOUBLE_EXTRA_LARGE_OPTION
        return value
    }
})
ATTRIBUTES.push({
    attributeName: THEME_ATTRIBUTE,
    defaultValue : DARK_OPTION,
    proccessValue: function ()  
    {
        const value = this.getAttribute(THEME_ATTRIBUTE) ? this.getAttribute(THEME_ATTRIBUTE) : DARK_OPTION
        return value
    }
})

ATTRIBUTES.push({
    attributeName: STATE_ATTRIBUTE,
    defaultValue : LOGOUT_OPTION,
    proccessValue: function() {
        const value = this.getAttribute(TITLE_ATTRIBUTE)
        let status;
        if((value && value.length > 0 )|| this.getElementsByTagName('img').length>0)
        {
            status = LOG_IN_OPTION
        } else 
        {
            status = LOGOUT_OPTION
        }
        return status
    }

})
ATTRIBUTES.push({
    attributeName: SHOW_TITLE_OR_PICTURE_ATTRIBUTE,
    defaultValue : SHOW_TITLE_OPTION,
    proccessValue: function ()  
    {
        if (this.dataAttributes[STATE_ATTRIBUTE] === LOG_IN_OPTION)
        {
            const value = this.getAttribute(TITLE_ATTRIBUTE)
            if(this.getElementsByTagName('img').length>0)
            {
                return SHOW_PICTURE_OPTION
            }
            else if (value && value.length > 0)
            {
                return SHOW_TITLE_OPTION
            }
        }
        else return null;
    }
})
ATTRIBUTES.push({
    attributeName: BADGE_STATE_ATTRIBUTE,
    defaultValue : DEFAULT_OPTION,
    proccessValue: function ()
    {
        const value = this.getAttribute(BADGE_STATE_ATTRIBUTE) ? this.getAttribute(BADGE_STATE_ATTRIBUTE) : DEFAULT_OPTION
        return   value
    }
})
ATTRIBUTES.push({
    attributeName: BADGE_NUMBER_ATTRIBUTE,
    defaultValue : null,
    proccessValue: function ()
    {
        const value = Number(String(this.getAttribute(BADGE_NUMBER_ATTRIBUTE)));
        if(value) return value
        return null
    }
})
ATTRIBUTES.push({
    attributeName: SHOW_BADGE_ATTRIBUTE,
    defaultValue : null,
    proccessValue: function ()  
    {
        if (this.dataAttributes[STATE_ATTRIBUTE] === LOG_IN_OPTION)
        {
            const value = this.getAttribute(BADGE_NUMBER_ATTRIBUTE) ? SHOW_BADGE_OPTION : HIDE_BADGE_OPTION
            return value;
        }
        else return null;
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
        this.keysAttributes[STATE_ATTRIBUTE] = this.dataAttributes[STATE_ATTRIBUTE]
        this.keysAttributes[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = this.dataAttributes[SHOW_TITLE_OR_PICTURE_ATTRIBUTE]
        this.keysAttributes[SHOW_BADGE_ATTRIBUTE] = this.dataAttributes[SHOW_BADGE_ATTRIBUTE]
    }
})


export {ATTRIBUTES};

//Definining names of subcomponents of component. This is used to identify the style to assign that subcomponent
// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// CONTAINER_SUB_WRAPPER
// I------------------------>PROFILE_CONTAINER_SUBCOMPONENT
// I                              I----------->PROFILE_SUBCOMPONENT
// I ----------------------->BADGE_CONTAINER_SUBCOMPONENT
// I                              I----------->BADGE_SUBCOMPONENT

export const CONTAINER_SLOT_WRAPPER = 'slot wrapper'
export const INPUT_SLOT = 'input slot'
export const CONTAINER_SUB_WRAPPER = 'container sub wrapper'
export const PROFILE_CONTAINER_SUBCOMPONENT = 'profile container'
export const PROFILE_SUBCOMPONENT = 'initials picture'
export const BADGE_CONTAINER_SUBCOMPONENT = 'badge container'
export const BADGE_SUBCOMPONENT = 'notifications number'
export const PICTURE_SUBCOMPONENT = 'image'
export const ICON_SUBCOMPONENT = 'image'
export const SVG_SUBCOMPONENT = "svg component"
export const PATH_SUBCOMPONENT = "path component"
//  Defining constants for events 
export const DEFAULT_EVENT= "default event"
export const SUCCESS_EVENT= "success event"
export const WARNING_EVENT= "warning event"
export const ERROR_EVENT= "error event"
export const LOGOUT_EVENT = "logout event";
export const LOG_IN_EVENT = "login event";

//array of events
const EVENTS_OF_COMPONENT = []
EVENTS_OF_COMPONENT.push(DEFAULT_EVENT)
EVENTS_OF_COMPONENT.push(SUCCESS_EVENT)
EVENTS_OF_COMPONENT.push(WARNING_EVENT)
EVENTS_OF_COMPONENT.push(ERROR_EVENT)
EVENTS_OF_COMPONENT.push(LOGOUT_EVENT)
EVENTS_OF_COMPONENT.push(LOG_IN_EVENT)

export {EVENTS_OF_COMPONENT}




