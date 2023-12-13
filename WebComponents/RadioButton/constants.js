export const NAME_OF_COMPONENT = 'component-radio-button'
//Variants keys
export const REGULAR_RADIO_BUTTON_VARIANT = 'regular radio Button'
export const REGULAR_RADIO_BUTTON_DESCRIPTOR_VARIANT = 'regular radio descriptor Button'

//Attributes names
export const COLOR_ATTRIBUTE = "data-color"
export const SIZE_ATTRIBUTE = "data-size"
export const STATE_ATTRIBUTE = "data-selected"
export const ENABLE_ATTRIBUTE = "data-enable"
export const LABEL_ATTRIBUTE = "data-label"

export const SVG_ATTRIBUTES = "svg attributes"
export const SVG_STYLES = "svg styles"
export const SVG_TYPE = "svg type"

export const TEMPORARY_ATTRIBUTE = "data-temporary"
//COLOR OPTIONS
export const BLACK_OPTION = 'black'
export const WHITE_OPTION = 'white'
//SIZE OPTIONS
export const LARGE_OPTION = 'L'
export const MEDIUM_OPTION = 'M'
export const SMALL_OPTION = 'S'
//STATE OPTIONS
export const NORMAL_OPTION = 'normal'
export const SELECTED_OPTION = 'selected'
//ENABLE OPTIONS
export const ON_OPTION = 'on'
export const OFF_OPTION = 'off'
const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue: BLACK_OPTION,
    proccessValue: (value) => {return   value}
})
ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue: LARGE_OPTION,
    proccessValue: (value) => {return   value}
})
ATTRIBUTES.push({
    attributeName: STATE_ATTRIBUTE,
    defaultValue: NORMAL_OPTION,
    proccessValue: (value) => {return   value}
})
ATTRIBUTES.push({
    attributeName: ENABLE_ATTRIBUTE,
    defaultValue: ON_OPTION,
    proccessValue: (value) => {return   value}
})
export {ATTRIBUTES}
// WRAPPER_SUBCOMPONENT
// I----------->SVG_SUBCOMPONENT
// I                I----------->CIRCLE_STROKE_SUBCOMPONENT
// I                I----------->CIRCLE_FILL_SUBCOMPONENT
// I
// I----------->LABEL_SUBCOMPONENT
// subcomponents of component
export const CONTAINER_SLOT_WRAPPER = 'slot wrapper'
export const LABEL_SLOT = 'labelSlot'
export const INPUT_SLOT = 'inputSlot'
export const WRAPPER_SUBCOMPONENT = 'wrapper'
export const SVG_SUBCOMPONENT = 'SVG subcomponent'
export const CIRCLE_FILL_SUBCOMPONENT = 'circle fill subcomponent'
export const CIRCLE_STROKE_SUBCOMPONENT = 'circle stroke subcomponent'
export const LABEL_SUBCOMPONENT = 'label'

export const DEFAULT_EVENT = 'default'
export const SELECTED_EVENT = 'selection'

const EVENTS_OF_COMPONENT = []
EVENTS_OF_COMPONENT.push(SELECTED_EVENT)


export {EVENTS_OF_COMPONENT}