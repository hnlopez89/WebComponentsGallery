export const NAME_OF_COMPONENT = "component-divider"
// components variants of text Inputs
export const REGULAR_DIVIDER_VARIANT = "icon notification"

// attributeNames
export const THEME_ATTRIBUTE = "data-theme";
export const COLOR_ATTRIBUTE = "data-color";

// color options
export const WHITE_OPTION = "white";
export const BLACK_OPTION = "black";
export const GREY_OPTION = "grey";

export const LIGHT_OPTION = "light";
export const DARK_OPTION = "dark";

const ATTRIBUTES = [];

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
    attributeName: COLOR_ATTRIBUTE,
    defaultValue : GREY_OPTION,
    proccessValue: function ()  
    {
        let value
        if(this.getAttribute(THEME_ATTRIBUTE) === DARK_OPTION){
            value = this.getAttribute(COLOR_ATTRIBUTE) === GREY_OPTION ? GREY_OPTION : BLACK_OPTION
        } else {
            value = this.getAttribute(COLOR_ATTRIBUTE) === GREY_OPTION ? GREY_OPTION : WHITE_OPTION
        }
        return value
    }
})

export {ATTRIBUTES};

export const DIVIDER = "divider component"

//  Defining constants for events 
export const DEFAULT_EVENT= "default event"

//array of events
const EVENTS_OF_COMPONENT = []

EVENTS_OF_COMPONENT.push(DEFAULT_EVENT)

export {EVENTS_OF_COMPONENT}
