import {regularButton} from "./regularButton.js";
import {regularButtonIcon} from "./regularButtonIcon.js";
import {arrowButton} from "./ArrowButton.js";
import {arrowButtonIcon} from "./ArrowButtonIcon.js";
import { iconButton } from "./iconButton.js";
import { REGULAR_BUTTON_VARIANT,
         REGULAR_BUTTON_ICON_VARIANT,
         ARROW_BUTTON_VARIANT,
         ARROW_BUTTON_ICON_VARIANT,
        ICON_BUTTON_VARIANT } from "../constants.js";
const COMPONENTS = {};

COMPONENTS[REGULAR_BUTTON_VARIANT] = regularButton;
COMPONENTS[REGULAR_BUTTON_ICON_VARIANT] = regularButtonIcon;
COMPONENTS[ARROW_BUTTON_VARIANT] = arrowButton;
COMPONENTS[ARROW_BUTTON_ICON_VARIANT] = arrowButtonIcon;
COMPONENTS[ICON_BUTTON_VARIANT] = iconButton;
export  {COMPONENTS};