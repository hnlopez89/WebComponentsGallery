import {REGULAR_TOOLTIP_VARIANT, TITLES_TOOLTIP_VARIANT, SINGLE_BUTTON_TOOLTIP_VARIANT, MULTI_BUTTON_TOOLTIP_VARIANT} from "../constants.js";
import {createRegularTooltip} from './regularTooltip.js'
import { createTitlesTooltip } from "./titlesTooltip.js";
import { createSingleButtonTooltip } from "./singleButtonTooltip.js";
import { createMultiButtonTooltip } from "./multiButtonTooltip.js";
const COMPONENTS = [];
COMPONENTS[REGULAR_TOOLTIP_VARIANT] = createRegularTooltip
COMPONENTS[TITLES_TOOLTIP_VARIANT] = createTitlesTooltip
COMPONENTS[SINGLE_BUTTON_TOOLTIP_VARIANT] = createSingleButtonTooltip
COMPONENTS[MULTI_BUTTON_TOOLTIP_VARIANT] = createMultiButtonTooltip

export  {COMPONENTS};