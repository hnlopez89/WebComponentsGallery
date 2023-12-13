// SHADOW DOM
// I----------->CONTAINER_SLOT_WRAPPER
// I                I----------->SLOT_COMPONENT                                                   
// I
// I
// I----------->WRAPPER_COMPONENT
// I                I----------->ARROW_ICON_COMPONENT
// I                I
// I                I----------->WRAPPER_LINKS_COMPONENT 
// I                I               I----------->LINK_i_COMPONENT
// I                I
// I                I----------->ARROW_ICON_COMPONENT 
import {REGULAR_PAGINATION_VARIANT} from "../constants.js"
import {PATH_STYLE,
        STYLE_OBJECT,
        COMPONENT_VARIANT_KEY,
        TYPOGRAPHY_01,
        TYPOGRAPHY_03,
        TYPOGRAPHY_02,
        TYPOGRAPHY_04,
        DARK_GREY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {COLOR_ATTRIBUTE,
        MODE_ATTRIBUTE, 
        } from "../constants.js"
import {DARK_OPTION, 
        LIGHT_OPTION,
        COUNTER_OPTION,
        PAGINATION_OPTION} from "../constants.js"
import {WRAPPER_COMPONENT,
        CONTAINER_SLOT_WRAPPER,
        SLOT_COMPONENT,
        ARROW_ICON_COMPONENT,
        WRAPPER_LINKS_COMPONENT,
        LINK_i_COMPONENT,
        } from "../constants.js"
import {ACTIVE_EVENT} from "../constants.js"
import {ICON_COLOR_ATTRIBUTE, 
        ICON_HEIGHT_ATTRIBUTE,
        ICON_WIDTH_ATTRIBUTE} from "../../Icons/constants.js"

const paginationStyles = []
const Style1 = {}
Style1[WRAPPER_COMPONENT] = {
    cursor:"pointer",
    userSelect: "none",
    display: "flex",

}
Style1[CONTAINER_SLOT_WRAPPER] = {
    display: "none",
}
Style1[ARROW_ICON_COMPONENT] = {
        cursor: "pointer",
        width: "20px",
        height: "20px",
        color: DARK_GREY
}
Style1[WRAPPER_LINKS_COMPONENT] = {
        display: "flex",
        gap: "8px",
    
    }
Style1[LINK_i_COMPONENT] = {
        cursor: "pointer",
        fontFamily: "Roboto, Sans-Serif",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "16px",
        color:TYPOGRAPHY_02,
}
Style1[LINK_i_COMPONENT][ACTIVE_EVENT] = {
        fontFamily: 'Roboto, Sans-Serif',
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "16px",
        color: TYPOGRAPHY_01,
}
const Style1Path = {}
Style1Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style1Path[MODE_ATTRIBUTE] = PAGINATION_OPTION

const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_PAGINATION_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
paginationStyles.push(style1Wrapper)

 const Style2 = JSON.parse(JSON.stringify(Style1))
 Style2[ARROW_ICON_COMPONENT].color =TYPOGRAPHY_04
 Style2[LINK_i_COMPONENT].color = TYPOGRAPHY_04
 Style2[LINK_i_COMPONENT][ACTIVE_EVENT].color = TYPOGRAPHY_03

 const Style2Path = {}
Style2Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style2Path[MODE_ATTRIBUTE] = PAGINATION_OPTION

const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_PAGINATION_VARIANT
style2Wrapper[PATH_STYLE] = Style2Path
paginationStyles.push(style2Wrapper)

export  {paginationStyles};