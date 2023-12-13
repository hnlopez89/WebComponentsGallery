import {REGULAR_TAGS_VARIANT} from "../constants.js"
import { regularTag } from "./regularTags.js"
import { REGULAR_TAGS_ICON_RIGHT_VARIANT } from "../constants.js"
import { regularTagsIconRight } from "./regularTagsIconRight.js"
import { REGULAR_TAGS_ICON_LEFT_VARIANT } from "../constants.js"
import { regularTagsIconLeft } from "./regularTagsIconLeft.js"
import { REGULAR_TAGS_CLOSE_VARIANT } from "../constants.js"
import { regularTagsClose } from "./regularTagsClose.js"
const COMPONENTS = []
COMPONENTS[REGULAR_TAGS_VARIANT] = regularTag
COMPONENTS[REGULAR_TAGS_ICON_RIGHT_VARIANT] = regularTagsIconRight
COMPONENTS[REGULAR_TAGS_ICON_LEFT_VARIANT] = regularTagsIconLeft
COMPONENTS[REGULAR_TAGS_CLOSE_VARIANT] = regularTagsClose
export {COMPONENTS}
