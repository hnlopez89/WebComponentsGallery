import {multipleSliderNoLabel} from "./multipleSliderNoLabel.js";
import {simpleSliderWithLabel} from "./simpleSliderWithLabel.js";
import {simpleSliderNoLabel} from "./simpleSliderNoLabel.js";
import {multipleSliderWithLabel} from "./multipleSliderWithLabel.js";
import {SIMPLE_SLIDER_LABEL_VARIANT,
        SIMPLE_SLIDER_NO_LABEL_VARIANT,
        MULTIPLE_SLIDER_LABEL_VARIANT,
        MULTIPLE_SLIDER_NO_LABEL_VARIANT} from "../constants.js";
        
const COMPONENTS = {};

COMPONENTS[SIMPLE_SLIDER_LABEL_VARIANT] = simpleSliderWithLabel;
COMPONENTS[MULTIPLE_SLIDER_NO_LABEL_VARIANT] = multipleSliderNoLabel;
COMPONENTS[SIMPLE_SLIDER_NO_LABEL_VARIANT] = simpleSliderNoLabel;
COMPONENTS[MULTIPLE_SLIDER_LABEL_VARIANT] = multipleSliderWithLabel;

export  {COMPONENTS};