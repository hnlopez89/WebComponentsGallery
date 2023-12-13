export const NAME_OF_COMPONENT = 'component-text-area'
// components variants of text Inputs
export const REGULAR_TEXT_AREA_VARIANT = 'regular text area'
export const REGULAR_TEXT_AREA_DESCRIPTOR_VARIANT = 'regular text area descriptor'
// attributeNames
export const SIZE_ATTRIBUTE = "data-size";
export const COLOR_ATTRIBUTE = "data-color";
export const STATE_ATTRIBUTE = "data-state";
export const DESCRIPTOR_ATTRIBUTE = "data-descriptor";
export const TITLE_ATTRIBUTE = "data-title";
export const FORM_VALUE_ATTRIBUTE = "data-form-value";
export const FORM_WIDTH_ATTRIBUTE = "data-form-width";
export const FORM_MAX_LENGTH = "data-form-max-character";

export const TEMPORARY_ATTRIBUTE = 'data-temporary'
//size options 
export const LARGE_OPTION = "L";
export const MEDIUM_OPTION = "M";
// color options
export const BLACK_OPTION = "black";
export const WHITE_OPTION = "white";
//state options
export const INITIAL_OPTION = "initial";
export const ACTIVE_OPTION = "active";
export const COMPLETED_OPTION = "completed";
export const INACTIVE_OPTION = "inactive";
//icon selection default value
export const ICON_DEFAULT = "";
//descriptor default value
export const DESCRIPTOR_DEFAULT = "";
export const TITLE_DEFAULT = "Title value"

export const DESCRIPTOR_ON_ATTRIBUTE = "descriptorOnAttribute"

export const ICON_ON_OPTION = "on"
export const ICON_OFF_OPTION = "off"

export const DESCRIPTOR_ON_OPTION = "on"
export const DESCRIPTOR_OFF_OPTION = "off"

const ATTRIBUTES = [];

ATTRIBUTES.push({
    attributeName: TITLE_ATTRIBUTE,
    defaultValue : TITLE_DEFAULT,
    proccessValue: (value) => {return   value}

})

ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue : null,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue : null,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: STATE_ATTRIBUTE,
    defaultValue : INITIAL_OPTION,
    proccessValue: (value) => {return   value}

})

ATTRIBUTES.push({
    attributeName: DESCRIPTOR_ATTRIBUTE,
    defaultValue : DESCRIPTOR_DEFAULT,
    proccessValue: (value) => {return   value}

})

ATTRIBUTES.push({
    attributeName: FORM_VALUE_ATTRIBUTE,
    defaultValue : "",
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: FORM_WIDTH_ATTRIBUTE,
    defaultValue : "",
    proccessValue: (value) => {return   value}

})

export {ATTRIBUTES};

//Definining names of subcomponents of component. This is used to identify the style to assign that subcomponent
// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// CONTAINER_SUB_WRAPPER
// I----------->TEXT_INPUT_CONTAINER_SUBCOMPONENT
// I                I----------->TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT
// I                                    I
// I                                    I----------->TITLE_SUBCOMPONENT
// I                                    I----------->TEXT_SUBCOMPONENT
// I                 
// I
// I----------->DESCRIPTOR_SUBCOMPONENT

export const CONTAINER_SLOT_WRAPPER = 'slot wrapper'
export const INPUT_SLOT = 'inputSlot'
export const CONTAINER_SUB_WRAPPER = 'container sub wrapper'
export const TEXT_INPUT_CONTAINER_SUBCOMPONENT = 'textInput container'
export const TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT = "title + text container"
export const TITLE_SUBCOMPONENT = 'title'
export const TEXT_SUBCOMPONENT = 'text'
export const DESCRIPTOR_SUBCOMPONENT = 'descriptor'
//  Defining constants for events 
export const DEFAULT_EVENT = 'default'
export const INPUT_EVENT = 'inputEvent'
export const VALIDATED_EVENT = 'validated'
export const DISABLED_EVENT = 'disabled'

//array of events
const EVENTS_OF_COMPONENT = []

EVENTS_OF_COMPONENT.push(INPUT_EVENT)
EVENTS_OF_COMPONENT.push(VALIDATED_EVENT)
EVENTS_OF_COMPONENT.push(DISABLED_EVENT)

export {EVENTS_OF_COMPONENT}




