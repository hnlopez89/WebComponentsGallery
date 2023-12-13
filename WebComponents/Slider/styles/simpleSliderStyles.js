
import {SIMPLE_SLIDER_NO_LABEL_VARIANT} from "../constants.js"
import {TEMPLATE_ATTRIBUTE,
        LABEL_ATTRIBUTE,
        COLOR_ATTRIBUTE} from "../constants.js"
import {DARK_OPTION,
        LIGHT_OPTION,
        SIMPLE_OPTION,
        ON_LABEL_OPTION,
        OFF_LABEL_OPTION} from "../constants.js"
import {WRAPPER_COMPONENT, CONTAINER_SLOT_WRAPPER, SLIDER_COMPONENT, RANGE_THUMB, SELECTED_TRACK_COLOR, NOT_SELECTED_TRACK_COLOR} from "../constants.js"
import {HOVER_EVENT} from "../constants.js"
import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY, TYPOGRAPHY_01, DARK_GREY, MEDIUM_GREY, BRAND_CLAY_2} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
const simpleSlider = []
//*----------------STYLING BUTTONS ------------------------*/

//*----------------NEW BUTTON ------------------------*/

//* DESTRUCTIVE DESKTOP LIGHT MODE NORMAL OFFICON */
const Style1 = {}
Style1[CONTAINER_SLOT_WRAPPER] = {
        display: "none",
    }
Style1[WRAPPER_COMPONENT] = {
    outline: "none",
    display: "flex",
    alignItems: "center",
    height: "20px",
    cursor: "pointer",
}
Style1[SLIDER_COMPONENT] = {
    outline: "none",
    appearance: "none",
    borderRadius: "0",
    cursor: "pointer",
    margin: "0px",
    boxSizing: "border-box",
    width: "100%",
    height: "4px",
    outline: "none", 
    opacity: "1", 
    transition: "opacity .2s",

}
Style1[SLIDER_COMPONENT][HOVER_EVENT]= {

}
Style1[RANGE_THUMB] = {
    outline: "none",
    appearance: "none",
    boxShadow: "none",
    width: "20px", 
    height: "20px", 
    background: TYPOGRAPHY_01, 
    cursor: "pointer", 
    borderRadius: "50%",
}
Style1[SELECTED_TRACK_COLOR] = TYPOGRAPHY_01
Style1[NOT_SELECTED_TRACK_COLOR] = MEDIUM_GREY
const Style1Path = {}
Style1Path[TEMPLATE_ATTRIBUTE] = SIMPLE_OPTION
Style1Path[LABEL_ATTRIBUTE] = OFF_LABEL_OPTION
Style1Path[COLOR_ATTRIBUTE] = DARK_OPTION

const styleWrapper1 = {}
styleWrapper1[STYLE_OBJECT] = {...Style1}
styleWrapper1[COMPONENT_VARIANT_KEY] = SIMPLE_SLIDER_NO_LABEL_VARIANT
styleWrapper1[PATH_STYLE] = Style1Path
simpleSlider.push(styleWrapper1)


const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[SELECTED_TRACK_COLOR] = BRAND_CLAY_2
Style2[NOT_SELECTED_TRACK_COLOR] = DARK_GREY
Style2[RANGE_THUMB].background = BRAND_CLAY_2

const Style2Path = {}
Style2Path[TEMPLATE_ATTRIBUTE] = SIMPLE_OPTION
Style2Path[LABEL_ATTRIBUTE] = OFF_LABEL_OPTION
Style2Path[COLOR_ATTRIBUTE] = LIGHT_OPTION

const styleWrapper2 = {}
styleWrapper2[STYLE_OBJECT] = {...Style2}
styleWrapper2[COMPONENT_VARIANT_KEY] = SIMPLE_SLIDER_NO_LABEL_VARIANT
styleWrapper2[PATH_STYLE] = Style2Path
simpleSlider.push(styleWrapper2)
export {simpleSlider}