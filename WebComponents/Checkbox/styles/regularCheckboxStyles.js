// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// I----------->LABEL_SLOT

// WRAPPER_SUBCOMPONENT
// I----------->CHECKBOX_SUBCOMPONENT
// I                I----------->CHECK_SUBCOMPONENT
// I                I                   I----------->CHECK_BCKGR_SUBCOMPONENT
// I                I                                       I----------->ICON_CONTAINER_SUBCOMPONENT
// I                I                                                               I----------->ICON_SUBCOMPONENT
// I                I                                                                               I----------->SUCCESS_ICON_SUBCOMPONENT
// I                I                                                                                       |
// I                I                                                                                       |--->MINUS_ICON_SUBCOMPONENT
// I                I----------->LABEL_SUBCOMPONENT                                                         
// I
// I----------->ERROR_SUBCOMPONENT
//                  I----------->ERROR_LABEL
import {INDETERMINATED_EVENT, REGULAR_CHECKBOX_VARIANT} from "../constants.js"
import {PATH_STYLE,
        STYLE_OBJECT,
        COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {COLOR_ATTRIBUTE,
        SIZE_ATTRIBUTE, 
        STATE_ATTRIBUTE,
        ENABLE_ATTRIBUTE,  
        } from "../constants.js"
import {BLACK_OPTION, 
        WHITE_OPTION,
        LARGE_OPTION,
        MEDIUM_OPTION,
        NORMAL_OPTION,
        SELECTED_OPTION,
        ON_OPTION,
        OFF_OPTION} from "../constants.js"
import {CONTAINER_SLOT_WRAPPER,
        WRAPPER_SUBCOMPONENT,
        CHECKBOX_SUBCOMPONENT,
        CHECK_SUBCOMPONENT,
        CHECK_BCKGR_SUBCOMPONENT,
        ICON_CONTAINER_SUBCOMPONENT,
        ICON_SUBCOMPONENT,
        SUCCESS_ICON_SUBCOMPONENT,
        MINUS_ICON_SUBCOMPONENT,
        LABEL_SUBCOMPONENT,
        ERROR_SUBCOMPONENT,
        ERROR_LABEL} from "../constants.js"
import {SELECTED_EVENT, ERROR_EVENT} from "../constants.js"
import {ICON_COLOR_ATTRIBUTE, 
        ICON_HEIGHT_ATTRIBUTE,
        ICON_WIDTH_ATTRIBUTE} from "../../Icons/constants.js"

import {
    BLACK,
    DARK_GREY,
    DANGER_LIGHT_THEME,
    DANGER_DARK_THEME,
    WHITE,
    GREY,
    OFF_WHITE,
    MEDIUM_GREY
} from "../../commonMethodsAndConstants/Styles/commonConstants.js"

const checboxStyles = []
const Style1 = {}
Style1[CONTAINER_SLOT_WRAPPER] = {
    display: "none",
}
Style1[WRAPPER_SUBCOMPONENT] = {
    display: "flex",
    padding: "0px",
    margin: "0px",
    boxSizing: "border-box",
    height: "24px",
    width: "fit-content",
    transition: "0.2s all ease-in-out",
    flexDirection: "column",
    gap: "4px",
    opacity: "1"
}
Style1[WRAPPER_SUBCOMPONENT][ERROR_EVENT] = {
    height: "44px"
}
Style1[WRAPPER_SUBCOMPONENT][SELECTED_EVENT] = {
    height: "24px"
}
Style1[WRAPPER_SUBCOMPONENT][INDETERMINATED_EVENT] = {
    height: "24px"
}
Style1[CHECKBOX_SUBCOMPONENT] = {
    padding: "0px",
    backgroundColor: "transparent",
    boxSizing: "border-box",
    width: "100%", 
    height: "24px",
    display: "flex",
    justifyContent: "flex-start",
    gap: "12px",
    alignItems: "center",
    overflow: "hidden",
    cursor: "pointer"
}
Style1[CHECK_SUBCOMPONENT] = {
    display: "flex",
    alignItems: "center",
    justifyContent : "center",
    border: "1px solid",
    borderColor: DARK_GREY,
    boxSizing: "border-box",
    borderRadius: "2px",
    overflow: "hidden",
    height: "20px",
    width: "20px",

}
Style1[CHECK_SUBCOMPONENT][SELECTED_EVENT] = {
    border: "none",
}
Style1[CHECK_SUBCOMPONENT][INDETERMINATED_EVENT] = {
    border: "none",
}
Style1[CHECK_SUBCOMPONENT][ERROR_EVENT] = {
    border: "1px solid",
    borderColor: DANGER_LIGHT_THEME,
}
Style1[CHECK_BCKGR_SUBCOMPONENT] = {
    width: "0px",
    height: "0px",
    backgroundColor: BLACK,
    transition: "0.15s all ease-in-out",
    border: "none",

}
Style1[CHECK_BCKGR_SUBCOMPONENT][SELECTED_EVENT] = {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    border: "1px solid ",
    borderColor: BLACK,
    borderRadius: "2px",
}
Style1[CHECK_BCKGR_SUBCOMPONENT][INDETERMINATED_EVENT] = {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    border: "1px solid ",
    borderColor: BLACK,
    borderRadius: "2px",
}
Style1[CHECK_BCKGR_SUBCOMPONENT][ERROR_EVENT] = {
    width: "0px",
    height: "0px",
    transition: "0.15s all ease-in-out",
    border: "none",
    //borderColor: DANGER_LIGHT_THEME,
}
Style1[ICON_CONTAINER_SUBCOMPONENT] = {
    margin: "0px",
    width: "0px",
    height: "0px", 
    padding: "0px",
    cursor: "default",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
Style1[ICON_CONTAINER_SUBCOMPONENT][SELECTED_EVENT] = {
    width: "100%",
    height: "100%", 
}
Style1[ICON_CONTAINER_SUBCOMPONENT][INDETERMINATED_EVENT] = {
    width: "100%",
    height: "100%", 
}
Style1[ICON_CONTAINER_SUBCOMPONENT][ERROR_EVENT] = {
    width: "0px",
    height: "0px",  
}
Style1[ICON_SUBCOMPONENT] = {}
Style1[ICON_SUBCOMPONENT]= {
    display: "none",
}
Style1[ICON_SUBCOMPONENT][SELECTED_EVENT] = {
    display: "initial",
}
Style1[ICON_SUBCOMPONENT][INDETERMINATED_EVENT] = {
    display: "initial",
}
Style1[ICON_SUBCOMPONENT][ERROR_EVENT] = {
    display: "none",
}
Style1[SUCCESS_ICON_SUBCOMPONENT] = {}
Style1[SUCCESS_ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE]=WHITE
Style1[SUCCESS_ICON_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE]="20px"
Style1[SUCCESS_ICON_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE]="20px"

Style1[MINUS_ICON_SUBCOMPONENT] = {}
Style1[MINUS_ICON_SUBCOMPONENT]['fill']=WHITE
Style1[MINUS_ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE]=WHITE
Style1[MINUS_ICON_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE]="20px"
Style1[MINUS_ICON_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE]="20px"

Style1[LABEL_SUBCOMPONENT] = {
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: "normal",
    fontWeight: "350",
    fontSize: "16px",
    lineHeight: "24px",
    color: GREY,
}
Style1[ERROR_SUBCOMPONENT] = {
    height: "0px",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "20px auto",
    gridColumnGap: "12px",
    overflow: "hidden",
    transition: "0.2s all ease-in-out",
}
Style1[ERROR_SUBCOMPONENT][ERROR_EVENT] = {
    height: "16px",
}
Style1[ERROR_SUBCOMPONENT][SELECTED_EVENT] = {
    height: "0px",
}
Style1[ERROR_LABEL] = {
    color: DANGER_LIGHT_THEME,
    gridColumnStart: "2",
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: "normal",
    fontWeight: "350",
    fontSize: "12px",
    lineHeight: "16px",
}

const Style1Path = {}
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style1Path[ENABLE_ATTRIBUTE] = ON_OPTION

const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_CHECKBOX_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
checboxStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))

delete Style2[WRAPPER_SUBCOMPONENT][ERROR_EVENT];
delete Style2[CHECK_SUBCOMPONENT][ERROR_EVENT]
delete Style2[CHECK_BCKGR_SUBCOMPONENT][ERROR_EVENT]
delete Style2[ICON_CONTAINER_SUBCOMPONENT][ERROR_EVENT]
delete Style2[ICON_SUBCOMPONENT][ERROR_EVENT]
delete Style2[ERROR_SUBCOMPONENT][ERROR_EVENT]

const Style2Path = {}
Style2Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style2Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style2Path[ENABLE_ATTRIBUTE] = OFF_OPTION

const style2Wrapper = {}
Style2[WRAPPER_SUBCOMPONENT].opacity = "0.4"
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_CHECKBOX_VARIANT
style2Wrapper[PATH_STYLE] = Style2Path
checboxStyles.push(style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[LABEL_SUBCOMPONENT].fontSize = "14px"

const Style3Path = {}
Style3Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style3Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style3Path[ENABLE_ATTRIBUTE] = ON_OPTION

const style3Wrapper = {}
style3Wrapper[STYLE_OBJECT] = {...Style3}
style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_CHECKBOX_VARIANT
style3Wrapper[PATH_STYLE] = Style3Path
checboxStyles.push(style3Wrapper)

const Style4 = JSON.parse(JSON.stringify(Style2))
Style4[LABEL_SUBCOMPONENT].fontSize = "14px"

const Style4Path = {}
Style4Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style4Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style4Path[ENABLE_ATTRIBUTE] = OFF_OPTION

const style4Wrapper = {}
style4Wrapper[STYLE_OBJECT] = {...Style4}
style4Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_CHECKBOX_VARIANT
style4Wrapper[PATH_STYLE] = Style4Path
checboxStyles.push(style4Wrapper)


const Style5 = JSON.parse(JSON.stringify(Style1))

Style5[LABEL_SUBCOMPONENT].color = OFF_WHITE
Style5[CHECK_SUBCOMPONENT].border = "1px solid"
Style5[CHECK_SUBCOMPONENT].borderColor = MEDIUM_GREY
Style5[CHECK_BCKGR_SUBCOMPONENT].backgroundColor = WHITE
Style5[CHECK_BCKGR_SUBCOMPONENT][SELECTED_EVENT].border = "1px solid"
Style5[CHECK_BCKGR_SUBCOMPONENT][INDETERMINATED_EVENT].border = "1px solid"
Style5[CHECK_BCKGR_SUBCOMPONENT][SELECTED_EVENT].borderColor = WHITE
Style5[CHECK_BCKGR_SUBCOMPONENT][INDETERMINATED_EVENT].borderColor = WHITE
Style5[CHECK_SUBCOMPONENT][ERROR_EVENT].borderColor = DANGER_DARK_THEME
Style5[SUCCESS_ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE]=BLACK
Style5[MINUS_ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE]=BLACK

Style5[ERROR_LABEL].color = DANGER_DARK_THEME

const Style5Path = {}
Style5Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style5Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style5Path[ENABLE_ATTRIBUTE] = ON_OPTION

const style5Wrapper = {}
style5Wrapper[STYLE_OBJECT] = {...Style5}
style5Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_CHECKBOX_VARIANT
style5Wrapper[PATH_STYLE] = Style5Path
checboxStyles.push(style5Wrapper)

const Style6 = JSON.parse(JSON.stringify(Style5))

Style6[WRAPPER_SUBCOMPONENT]['opacity'] = "0.4"

delete Style6[WRAPPER_SUBCOMPONENT][ERROR_EVENT];
delete Style6[CHECK_SUBCOMPONENT][ERROR_EVENT]
delete Style6[CHECK_BCKGR_SUBCOMPONENT][ERROR_EVENT]
delete Style6[ICON_CONTAINER_SUBCOMPONENT][ERROR_EVENT]
delete Style6[ICON_SUBCOMPONENT][ERROR_EVENT]
delete Style6[ERROR_SUBCOMPONENT][ERROR_EVENT]


const Style6Path = {}
Style6Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style6Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style6Path[ENABLE_ATTRIBUTE] = OFF_OPTION

const style6Wrapper = {}
style6Wrapper[STYLE_OBJECT] = {...Style6}
style6Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_CHECKBOX_VARIANT
style6Wrapper[PATH_STYLE] = Style6Path
checboxStyles.push(style6Wrapper)


const Style7 = JSON.parse(JSON.stringify(Style5))

Style7[LABEL_SUBCOMPONENT].fontSize = "14px"

const Style7Path = {}
Style7Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style7Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style7Path[ENABLE_ATTRIBUTE] = ON_OPTION

const style7Wrapper = {}
style7Wrapper[STYLE_OBJECT] = {...Style7}
style7Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_CHECKBOX_VARIANT
style7Wrapper[PATH_STYLE] = Style7Path
checboxStyles.push(style7Wrapper)


const Style8 = JSON.parse(JSON.stringify(Style6))
Style8[LABEL_SUBCOMPONENT].fontSize = "14px"

const Style8Path = {}
Style8Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style8Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style8Path[ENABLE_ATTRIBUTE] = OFF_OPTION

const style8Wrapper = {}
style8Wrapper[STYLE_OBJECT] = {...Style8}
style8Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_CHECKBOX_VARIANT
style8Wrapper[PATH_STYLE] = Style8Path
checboxStyles.push(style8Wrapper)

export  {checboxStyles};