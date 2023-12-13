import {createLabelOffSwitch} from "./LabelOffSwitch.js";
import {createLabelOnSwitch} from "./LabelOnSwitch.js";

import {TOGGLE_OFF_LABEL_VARIANT,
        TOGGLE_ON_LABEL_VARIANT} from "../constants.js";
const COMPONENTS = {};

COMPONENTS[TOGGLE_OFF_LABEL_VARIANT] = createLabelOffSwitch;
COMPONENTS[TOGGLE_ON_LABEL_VARIANT] = createLabelOnSwitch;

export  {COMPONENTS};