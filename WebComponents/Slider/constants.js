// attributeNames
export const TEMPLATE_ATTRIBUTE = "data-template";
export const LABEL_ATTRIBUTE = "data-label";
export const COLOR_ATTRIBUTE = "data-color";
export const WIDTH_ATTRIBUTE = "data-size-width";
export const UNIT_ATTRIBUTE = "data-unit-label"
export const MIN_LABEL_ATTRIBUTE = "data-min-label"
export const MAX_LABEL_ATTRIBUTE = "data-max-label"


// color options
export const DARK_OPTION = "dark";
export const LIGHT_OPTION = "light";
// template options
export const SIMPLE_OPTION = "simple";
export const MULTIPLE_OPTION = "multiple";
// label options
export const ON_LABEL_OPTION = "on";
export const OFF_LABEL_OPTION = "off";


//data-size-width options
export const FULL_OPTION = "full"
export const FIT_CONTENT_OPTION = "fit-content"

export const    TEMPORARY_ATTRIBUTE = "data-temporary-attribute"
const ATTRIBUTES = [];


ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue : DARK_OPTION,
    proccessValue: function ()  
    {

        const value = this.getAttribute(COLOR_ATTRIBUTE) ? this.getAttribute(COLOR_ATTRIBUTE) : DARK_OPTION
        return   value
    }

})
ATTRIBUTES.push({
    attributeName: LABEL_ATTRIBUTE,
    defaultValue : OFF_LABEL_OPTION,
    proccessValue: function ()  
    {
        const value =  (this.hasAttribute(MAX_LABEL_ATTRIBUTE) && this.hasAttribute(MIN_LABEL_ATTRIBUTE)) ? ON_LABEL_OPTION : OFF_LABEL_OPTION
        return value;
    }

})
ATTRIBUTES.push({
    attributeName: TEMPLATE_ATTRIBUTE,
    defaultValue : SIMPLE_OPTION,
    proccessValue: function ()  
    {
        const value = this.getAttribute(TEMPLATE_ATTRIBUTE) ? this.getAttribute(TEMPLATE_ATTRIBUTE) : SIMPLE_OPTION
        return   value;
    }

})

export {ATTRIBUTES};

//Definining names of subcomponents of component. This is used to identify the style to assign that subcomponent
export const CONTAINER_SLOT_WRAPPER = "container slot"
export const SLOT_COMPONENT = "slot component"
export const WRAPPER_COMPONENT = "wrapper component"
export const SLIDER_WRAPPER_COMPONENT = "slider wrapper component"
export const SLIDER_COMPONENT = "slider component"
export const RANGE_THUMB = "range thumb"
export const BUBBLE_LABEL = "bubble label"
export const LABEL_WRAPPER_COMPONENT = "label wrapper component"
export const MIN_VALUE_LABEL = "min label"
export const MAX_VALUE_LABEL = "max label"
export const LABEL_1_MULTIPLE = "label 1 multiple sliders"
export const LABEL_2_MULTIPLE = "label 2 multiple sliders"
export const SLIDER_N_WRAPPER_COMPONENT = "slider Ni wrapper"

export const SELECTED_TRACK_COLOR = "selected track color"
export const NOT_SELECTED_TRACK_COLOR = "not selected track color"
//SLIDER COMPONENT
// SHADOW DOM
// I----------->CONTAINER_SLOT_WRAPPER
// I                I----------->SLOT_COMPONENT                                                   
// I
// I
// I----------->WRAPPER_COMPONENT
//                  I----------->SLIDER_COMPONENT
//                                      I----------->RANGE_THUMB



//  Defining constants for events 


//array of events
const EVENTS_OF_COMPONENT = []

export const DEFAULT_EVENT = 'default'
export const HOVER_EVENT = "hover"

EVENTS_OF_COMPONENT.push(HOVER_EVENT)

export {EVENTS_OF_COMPONENT}

// components variants of buttons
export const SIMPLE_SLIDER_NO_LABEL_VARIANT = 'simple slider no label'
export const SIMPLE_SLIDER_LABEL_VARIANT = 'simple slider with label'
export const MULTIPLE_SLIDER_NO_LABEL_VARIANT = 'multiple slider no label'
export const MULTIPLE_SLIDER_LABEL_VARIANT = 'multiple slider with label'

export const NAME_OF_COMPONENT = 'component-slider'
