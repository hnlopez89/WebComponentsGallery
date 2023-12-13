// attributeNames
export const LABEL_ATTRIBUTE = "data-label";
export const COLOR_ATTRIBUTE = "data-color";
export const STATE_ATTRIBUTE = "data-state";
export const WIDTH_ATTRIBUTE = "data-size-width";
export const LABEL_ON_TEXT_ATTRIBUTE = "data-label-on-text"
export const LABEL_OFF_TEXT_ATTRIBUTE = "data-label-off-text"
export const ANIMATION_DURATION_ATTRIBUTE = "data-animation-duration"
// color options
export const DARK_OPTION = "dark";
export const LIGHT_OPTION = "light";
// label options
export const LABEL_ON_OPTION = "label_on"
export const LABEL_OFF_OPTION = "label_off"
// state options
export const STATE_ON_OPTION = 'state_on'
export const STATE_OFF_OPTION = 'state_off'
//width options
export const FIT_CONTENT_OPTION = "fit"
export const FULL_OPTION = "full"
export const TEMPORARY_ATTRIBUTE = "data-temporary-attribute"
const ATTRIBUTES = [];


ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue : DARK_OPTION,
    proccessValue: function ()  {
        const value = this.getAttribute(COLOR_ATTRIBUTE) ?  this.getAttribute(COLOR_ATTRIBUTE) : DARK_OPTION
        return   value
    }

})
ATTRIBUTES.push({
    attributeName: STATE_ATTRIBUTE,
    defaultValue : STATE_OFF_OPTION,
    proccessValue: function()  {
        const value = this.getAttribute(STATE_ATTRIBUTE) ?  this.getAttribute(STATE_ATTRIBUTE) : STATE_OFF_OPTION
        return   value
    }

})
ATTRIBUTES.push({
    attributeName: WIDTH_ATTRIBUTE,
    defaultValue : STATE_OFF_OPTION,
    proccessValue: function()  {
        const value = this.getAttribute(WIDTH_ATTRIBUTE) ?  this.getAttribute(WIDTH_ATTRIBUTE) : FIT_CONTENT_OPTION
        return   value
    }

})
ATTRIBUTES.push({
    attributeName: LABEL_ATTRIBUTE,
    defaultValue : LABEL_OFF_OPTION,
    proccessValue: function ()  {
        if (this.querySelector('select') && this.querySelector('select>option').innerText.length>0)
        {
            this.dataAttributes[LABEL_OFF_TEXT_ATTRIBUTE] = this.querySelectorAll('select>option')[0].innerText
            this.dataAttributes[LABEL_ON_TEXT_ATTRIBUTE] = this.querySelectorAll('select>option')[1].innerText
        }
        const value = (this.querySelector('select') && this.querySelector('select>option').innerText.length>0) ? LABEL_ON_OPTION : LABEL_OFF_OPTION
        
        return   value}

})
ATTRIBUTES.push({
    attributeName: ANIMATION_DURATION_ATTRIBUTE,
    defaultValue : "0.1",
    proccessValue: function()  {
        const value = this.getAttribute(ANIMATION_DURATION_ATTRIBUTE) ?  this.getAttribute(ANIMATION_DURATION_ATTRIBUTE) : "0.1"
        return   value
    }

})


export {ATTRIBUTES};

//  Defining constants for events 
export const DEFAULT_EVENT = 'default'
//array of events
const EVENTS_OF_COMPONENT = []
export const CLICK_TOGGLE = 'click-toggle'

EVENTS_OF_COMPONENT.push(CLICK_TOGGLE)
export {EVENTS_OF_COMPONENT}
//Definining names of subcomponents of component. This is used to identify the style or attributes to assign that subcomponent
//SubCOmponents LABEL OFF VARIANT
// SHADOW DOM
// I----------->SLOT_CONTAINER
// I                I----------->SLOT_SELECTOR
// I----------->SVG_WRAPPER
//                  I----------->SVG_SUBCOMPONENT
//                                     I----------->LINE_X_SUBCOMPONENT
//                                     I                I----------->ANIMATE_LINE_X_Ni_SUBCOMPONENT
//                                     I----------->CIRCLE_X_SUBCOMPONENT
//                                                      I----------->ANIMATE_CIRCLE_Y
//             


//SubCOmponents LABEL ON VARIANT
// SHADOW DOM
// I----------->WRAPPER_CONTAINER
//                     I----------->SLOT_CONTAINER
//                     I                I----------->SLOT_SELECTOR
//                     I 
//                     I----------->LABEL_OFF
//                     I 
//                     I----------->SVG_WRAPPER
//                     I                I----------->SVG_SUBCOMPONENT
//                     I                                   I----------->LINE_X_SUBCOMPONENT
//                     I                                   I                I----------->ANIMATE_LINE_X_Ni_SUBCOMPONENT
//                     I                                   I----------->CIRCLE_X_SUBCOMPONENT
//                     I                                                    I----------->ANIMATE_CIRCLE_Y
//                     I    
//                     I----------->LABEL_ON
//HTML ELEMENTS
export const WRAPPER_CONTAINER = "wrapper_container"
export const SLOT_CONTAINER = 'slot_container'
export const SLOT_SELECTOR = 'slot_selector'
export const LABEL_OFF_CONTAINER = 'label_off_container'
export const SVG_WRAPPER = 'svg_wrapper'
export const LABEL_ON_CONTAINER = 'label_on_container'
//SVG ELEMENTS
export const SVG_SUBCOMPONENT= 'svg_element'
export const CIRCLE_ON_SUBCOMPONENT = 'circle_on'
export const CIRCLE_OFF_SUBCOMPONENT = 'circle_off'
export const LINE_OFF_SUBCOMPONENT = 'line_off'
export const LINE_ON_SUBCOMPONENT = 'line_on'

//ANIMATE SVG ELEMENTS
export const ANIMATE_CIRCLE_ON= 'circle_on_animate'
export const ANIMATE_CIRCLE_OFF= 'circle_off_animate'
export const ANIMATE_LINE_OFF_1_SUBCOMPONENT = 'line_off_animate_1'
export const ANIMATE_LINE_OFF_2_SUBCOMPONENT = 'line_off_animate_2'
export const ANIMATE_LINE_ON_SUBCOMPONENT = 'line_on_animate'
// components variants of buttons
export const TOGGLE_OFF_LABEL_VARIANT = 'toggle off label'
export const TOGGLE_ON_LABEL_VARIANT = 'toggle on label'


export const NAME_OF_COMPONENT = 'component-toggle-switch'

//Defining IDS to select svg elements
export const CIRCLE_ID = 'circle-toggle'
export const RECT_ID = 'rect-toggle'
