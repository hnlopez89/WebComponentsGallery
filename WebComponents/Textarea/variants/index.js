import {REGULAR_TEXT_AREA_VARIANT} from "../constants.js"
import {REGULAR_TEXT_AREA_DESCRIPTOR_VARIANT} from "../constants.js"
import { regularTextareaComponent } from "./regularTextarea.js"
import { regularTextAreaDescriptorComponent } from "./regularTextareaDescriptor.js"
const COMPONENTS = []
COMPONENTS[REGULAR_TEXT_AREA_VARIANT] = regularTextareaComponent
COMPONENTS[REGULAR_TEXT_AREA_DESCRIPTOR_VARIANT] = regularTextAreaDescriptorComponent

export {COMPONENTS}
