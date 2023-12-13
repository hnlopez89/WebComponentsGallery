import {REGULAR_TEXT_INPUT_VARIANT,
        REGULAR_TEXT_INPUT_DESCRIPTOR_VARIANT,
        ICON_TEXT_INPUT_VARIANT, 
        ICON_TEXT_INPUT_DESCRIPTOR_VARIANT } from "../constants.js"
import { regularTextInputComponent } from "./regularTextInput.js"
import {regularTextInputDescriptorComponent} from "./regularTextInputDescriptor.js"
import {iconTextInputComponent} from "./iconTextInput.js"
import {iconTextInputDescriptorComponent} from "./iconTextInputDescriptor.js"
const COMPONENTS = []
COMPONENTS[REGULAR_TEXT_INPUT_VARIANT] = regularTextInputComponent
COMPONENTS[REGULAR_TEXT_INPUT_DESCRIPTOR_VARIANT] = regularTextInputDescriptorComponent
COMPONENTS[ICON_TEXT_INPUT_VARIANT] = iconTextInputComponent
COMPONENTS[ICON_TEXT_INPUT_DESCRIPTOR_VARIANT] = iconTextInputDescriptorComponent

export {COMPONENTS}
