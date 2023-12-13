
import {SIMPLE_SLIDER_LABEL_VARIANT} from "../constants.js"
import {TEMPLATE_ATTRIBUTE,
        LABEL_ATTRIBUTE,
        COLOR_ATTRIBUTE,} from "../constants.js"
import {DARK_OPTION,
        LIGHT_OPTION,
        SIMPLE_OPTION,
        ON_LABEL_OPTION} from "../constants.js"
import {WRAPPER_COMPONENT,
        SLIDER_WRAPPER_COMPONENT,
        CONTAINER_SLOT_WRAPPER,
        BUBBLE_LABEL, 
        SLIDER_COMPONENT,
        RANGE_THUMB, 
        SELECTED_TRACK_COLOR, 
        NOT_SELECTED_TRACK_COLOR,
        LABEL_WRAPPER_COMPONENT,
        MIN_VALUE_LABEL,
        MAX_VALUE_LABEL} from "../constants.js"
import {HOVER_EVENT} from "../constants.js"
import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY, TYPOGRAPHY_01, TYPOGRAPHY_03, TYPOGRAPHY_02, TYPOGRAPHY_04, DARK_GREY, MEDIUM_GREY, BRAND_CLAY_2} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
const simpleSliderLabel = []
//*----------------STYLING BUTTONS ------------------------*/

//*----------------NEW BUTTON ------------------------*/

//* DESTRUCTIVE DESKTOP LIGHT MODE NORMAL OFFICON */
const Style1 = {}
Style1[CONTAINER_SLOT_WRAPPER] = {
        display: "none",
    }
Style1[WRAPPER_COMPONENT] = {
    cursor: "pointer",
    boxSizing: "border-box",
    padding: "0px",
    display: "flex",
    flexDirection: "column",
    gap:"4px"
}
Style1[SLIDER_WRAPPER_COMPONENT] = {
    position: "relative",
    height: "40px",
    cursor: "pointer",
}
Style1[SLIDER_COMPONENT] = {
    position: "absolute",
    top: "28px",
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
   
    appearance: "none",
    boxShadow: "none",
    width: "20px", 
    height: "20px", 
    background: TYPOGRAPHY_01, 
    cursor: "pointer", 
    borderRadius: "50%",
}
Style1[BUBBLE_LABEL] = {
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "72px",
    height: "20px",
    top: "0",
    background: "transparent",
    color: TYPOGRAPHY_01,
    padding: "0px 0px 4px 0px",
    position: "absolute",
    borderRadius: "4px",
    left: "50%",
    transform: "translateX(-50%)",
    fontfamily: "Roboto, Sans-Serif",
    fontSize: "12px",
    lineHeight: "16px",
    alignText: "center",
}
Style1[SELECTED_TRACK_COLOR] = TYPOGRAPHY_01
Style1[NOT_SELECTED_TRACK_COLOR] = MEDIUM_GREY
Style1[LABEL_WRAPPER_COMPONENT] = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}
Style1[MIN_VALUE_LABEL] = {
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "12px",
    lineHeight: "16px",
    color: TYPOGRAPHY_02
}
Style1[MAX_VALUE_LABEL] = {
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "12px",
    lineHeight: "16px",
    color: TYPOGRAPHY_02
}
const Style1Path = {}
Style1Path[TEMPLATE_ATTRIBUTE] = SIMPLE_OPTION
Style1Path[LABEL_ATTRIBUTE] = ON_LABEL_OPTION
Style1Path[COLOR_ATTRIBUTE] = DARK_OPTION

const styleWrapper1 = {}
styleWrapper1[STYLE_OBJECT] = {...Style1}
styleWrapper1[COMPONENT_VARIANT_KEY] = SIMPLE_SLIDER_LABEL_VARIANT
styleWrapper1[PATH_STYLE] = Style1Path
simpleSliderLabel.push(styleWrapper1)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[SELECTED_TRACK_COLOR] = BRAND_CLAY_2
Style2[NOT_SELECTED_TRACK_COLOR] = DARK_GREY
Style2[RANGE_THUMB].background = BRAND_CLAY_2
Style2[BUBBLE_LABEL].color = TYPOGRAPHY_03
Style2[MIN_VALUE_LABEL].color = TYPOGRAPHY_04
Style2[MAX_VALUE_LABEL].color = TYPOGRAPHY_04

const Style2Path = {}
Style2Path[TEMPLATE_ATTRIBUTE] = SIMPLE_OPTION
Style2Path[LABEL_ATTRIBUTE] = ON_LABEL_OPTION
Style2Path[COLOR_ATTRIBUTE] = LIGHT_OPTION

const styleWrapper2 = {}
styleWrapper2[STYLE_OBJECT] = {...Style2}
styleWrapper2[COMPONENT_VARIANT_KEY] = SIMPLE_SLIDER_LABEL_VARIANT
styleWrapper2[PATH_STYLE] = Style2Path
simpleSliderLabel.push(styleWrapper2)

export {simpleSliderLabel}