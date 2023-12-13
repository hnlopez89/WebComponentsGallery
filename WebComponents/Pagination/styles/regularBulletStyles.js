// SHADOW DOM
// I----------->CONTAINER_SLOT_WRAPPER
// I                I----------->SLOT_COMPONENT                                                   
// I
// I
// I----------->WRAPPER_COMPONENT
//                  I----------->WRAPPER_LINKS_COMPONENT 
//                                  I----------->LINK_i_COMPONENT
//                                                  I----------->BULLET_COMPONENT

import {REGULAR_COUNTER_VARIANT} from "../constants.js"
import {PATH_STYLE,
        STYLE_OBJECT,
        COMPONENT_VARIANT_KEY,
        TYPOGRAPHY_01,
        TYPOGRAPHY_03,
        DARK_GREY,
        MEDIUM_GREY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {COLOR_ATTRIBUTE,
        MODE_ATTRIBUTE, 
        } from "../constants.js"
import {DARK_OPTION, 
        LIGHT_OPTION,
        COUNTER_OPTION} from "../constants.js"
import {WRAPPER_COMPONENT,
        CONTAINER_SLOT_WRAPPER,
        SLOT_COMPONENT,
        WRAPPER_LINKS_COMPONENT,
        LINK_i_COMPONENT,
        BULLET_COMPONENT,
        } from "../constants.js"
import {ACTIVE_EVENT} from "../constants.js"
import {ICON_COLOR_ATTRIBUTE, 
        ICON_HEIGHT_ATTRIBUTE,
        ICON_WIDTH_ATTRIBUTE} from "../../Icons/constants.js"

const bulletStyles = []
const Style1 = {}
Style1[WRAPPER_COMPONENT] = {
    cursor:"pointer",
    userSelect: "none",
    display: "flex",

}
Style1[CONTAINER_SLOT_WRAPPER] = {
    display: "none",
}

Style1[WRAPPER_LINKS_COMPONENT] = {
        display: "flex",
        gap: "8px",
    
    }
Style1[LINK_i_COMPONENT] = {
        cursor: "pointer",
      
}

Style1[BULLET_COMPONENT] = {}
Style1[BULLET_COMPONENT]['svg'] = {
    viewBox: "0 0 20 2",
    width: "20",
    height: "2",
    fill: "none"
}


Style1[BULLET_COMPONENT]['rect'] = {
    rx: "1",
    width: "20",
    height: "2",
    fill: MEDIUM_GREY
}
Style1[BULLET_COMPONENT]['rect'][ACTIVE_EVENT] = {
    fill: TYPOGRAPHY_01
}
const Style1Path = {}
Style1Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style1Path[MODE_ATTRIBUTE] = COUNTER_OPTION

const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_COUNTER_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
bulletStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[BULLET_COMPONENT]['rect'].fill =DARK_GREY
Style2[BULLET_COMPONENT]['rect'][ACTIVE_EVENT].fill =TYPOGRAPHY_03

const Style2Path = {}
Style2Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style2Path[MODE_ATTRIBUTE] = COUNTER_OPTION

const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_COUNTER_VARIANT
style2Wrapper[PATH_STYLE] = Style2Path
bulletStyles.push(style2Wrapper)


export  {bulletStyles};