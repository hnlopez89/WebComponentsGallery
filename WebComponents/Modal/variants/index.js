
import {WINDOW_VARIANT, FULLSCREEN_VARIANT} from "../constants.js";
import { fullscreenVariant } from "./fullscreenVariant.js";  
import { windowVariant } from "./windowVariant.js"; 

const COMPONENTS = {};
COMPONENTS[WINDOW_VARIANT] = windowVariant
COMPONENTS[FULLSCREEN_VARIANT] = fullscreenVariant

export  {COMPONENTS};