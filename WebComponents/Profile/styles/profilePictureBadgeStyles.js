import {PATH_STYLE,
    STYLE_OBJECT,
    COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {SIZE_ATTRIBUTE,
    THEME_ATTRIBUTE,
    STATE_ATTRIBUTE,
    SHOW_TITLE_OR_PICTURE_ATTRIBUTE,
    SHOW_BADGE_ATTRIBUTE
    } from "../constants.js"
import {DOUBLE_EXTRA_LARGE_OPTION,
    EXTRA_LARGE_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    EXTRA_SMALL_OPTION
    } from "../constants.js"
import {DARK_OPTION, LIGHT_OPTION} from "../constants.js"
import { LOG_IN_OPTION} from "../constants.js"
import {  SHOW_BADGE_OPTION, SHOW_PICTURE_OPTION,} from "../constants.js"
import {LOG_IN_PICTURE_BADGE_PROFILE_VARIANT} from "../constants.js"
import {CONTAINER_SLOT_WRAPPER,
    INPUT_SLOT,
    CONTAINER_SUB_WRAPPER,
    PICTURE_SUBCOMPONENT,
    BADGE_CONTAINER_SUBCOMPONENT,
    BADGE_SUBCOMPONENT,
    } from "../constants.js"

import { WARNING_EVENT, ERROR_EVENT, SUCCESS_EVENT } from "../constants.js"
import {TYPOGRAPHY_03, TYPOGRAPHY_01, ALERT_SUCCESS, ALERT_WARNING,
    DANGER_LIGHT_THEME, DANGER_DARK_THEME, DARK_GREY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"

// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// CONTAINER_SUB_WRAPPER
// I----------->TEXT_INPUT_CONTAINER_SUBCOMPONENT
//                  I----------->TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT
//                                      I
//                                      I----------->TITLE_SUBCOMPONENT
//                                      I----------->TEXT_SUBCOMPONENT              

const profilePictureBadgeStyles = []
const Style1 = {}
Style1[CONTAINER_SLOT_WRAPPER] = {
display: "none",
}
Style1[INPUT_SLOT] = {
display: "none",
}
Style1[CONTAINER_SUB_WRAPPER] = {
margin: "0px",
width: "64px",
height: "64px",
display: "flex",
flexDirection: "column",
cursor: "default",
}
Style1[PICTURE_SUBCOMPONENT] = {
    width: "64px",
    height: "64px",
    borderRadius: "64px 64px",
    zIndex: "0",
    position: "absolute",


}

Style1[BADGE_CONTAINER_SUBCOMPONENT] = {
color: TYPOGRAPHY_01,
width: "100%",
height: "100%",
display: "flex",
flexDirection: "row-reverse",
alignItems: "end",
zIndex: "1"   
}

Style1[BADGE_SUBCOMPONENT ] = {
backgroundColor: DARK_GREY,
color: TYPOGRAPHY_03,
width: "16px",
height: "16px",
fontFamily: "Roboto, Sans-Serif",
fontSize: "12px",
lineHeight: "16px",
textAlign: "center",
fontWeight: "400",
borderRadius: "16px",
}

Style1[BADGE_SUBCOMPONENT][WARNING_EVENT] = {
backgroundColor: ALERT_WARNING
}
Style1[BADGE_SUBCOMPONENT][SUCCESS_EVENT] = {
backgroundColor: ALERT_SUCCESS
}
Style1[BADGE_SUBCOMPONENT][ERROR_EVENT] = {
backgroundColor: DANGER_LIGHT_THEME
}


const Style1Path = {}
Style1Path[SIZE_ATTRIBUTE] = DOUBLE_EXTRA_LARGE_OPTION;
Style1Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style1Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style1Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style1Path[SHOW_BADGE_ATTRIBUTE] = SHOW_BADGE_OPTION;
const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_BADGE_PROFILE_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
profilePictureBadgeStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[CONTAINER_SUB_WRAPPER].width = "56px"
Style2[CONTAINER_SUB_WRAPPER].height = "56px"
Style2[PICTURE_SUBCOMPONENT].width = "56px"
Style2[PICTURE_SUBCOMPONENT].height = "56px"

const Style2Path = {}
Style2Path[SIZE_ATTRIBUTE] = EXTRA_LARGE_OPTION;
Style2Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style2Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style2Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style2Path[SHOW_BADGE_ATTRIBUTE] = SHOW_BADGE_OPTION;
const Style2Wrapper = {}
Style2Wrapper[STYLE_OBJECT] = {...Style2}
Style2Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_BADGE_PROFILE_VARIANT
Style2Wrapper[PATH_STYLE] = Style2Path
profilePictureBadgeStyles.push(Style2Wrapper)


const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[CONTAINER_SUB_WRAPPER].width = "48px"
Style3[CONTAINER_SUB_WRAPPER].height = "48px"
Style3[PICTURE_SUBCOMPONENT].width = "48px"
Style3[PICTURE_SUBCOMPONENT].height = "48px"

const Style3Path = {}
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style3Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style3Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style3Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style3Path[SHOW_BADGE_ATTRIBUTE] = SHOW_BADGE_OPTION;
const Style3Wrapper = {}
Style3Wrapper[STYLE_OBJECT] = {...Style3}
Style3Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_BADGE_PROFILE_VARIANT
Style3Wrapper[PATH_STYLE] = Style3Path
profilePictureBadgeStyles.push(Style3Wrapper)

const Style4 = JSON.parse(JSON.stringify(Style1))
Style4[CONTAINER_SUB_WRAPPER].width = "40px"
Style4[CONTAINER_SUB_WRAPPER].height = "40px"
Style4[PICTURE_SUBCOMPONENT].width = "40px"
Style4[PICTURE_SUBCOMPONENT].height = "40px"
const Style4Path = {}
Style4Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style4Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style4Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style4Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style4Path[SHOW_BADGE_ATTRIBUTE] = SHOW_BADGE_OPTION;
const Style4Wrapper = {}
Style4Wrapper[STYLE_OBJECT] = {...Style4}
Style4Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_BADGE_PROFILE_VARIANT
Style4Wrapper[PATH_STYLE] = Style4Path
profilePictureBadgeStyles.push(Style4Wrapper)

const Style5 = JSON.parse(JSON.stringify(Style1))

Style5[CONTAINER_SUB_WRAPPER].width = "32px"
Style5[CONTAINER_SUB_WRAPPER].height = "32px"
Style5[BADGE_SUBCOMPONENT].width = "12px"
Style5[BADGE_SUBCOMPONENT].height = "12px"
Style5[BADGE_SUBCOMPONENT ].fontSize = "8px"
Style5[BADGE_SUBCOMPONENT ].lineHeight = "10px"
Style5[PICTURE_SUBCOMPONENT].width = "32px"
Style5[PICTURE_SUBCOMPONENT].height = "32px"
const Style5Path = {}
Style5Path[SIZE_ATTRIBUTE] = SMALL_OPTION;
Style5Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style5Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style5Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style5Path[SHOW_BADGE_ATTRIBUTE] = SHOW_BADGE_OPTION;
const Style5Wrapper = {}
Style5Wrapper[STYLE_OBJECT] = {...Style5}
Style5Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_BADGE_PROFILE_VARIANT
Style5Wrapper[PATH_STYLE] = Style5Path
profilePictureBadgeStyles.push(Style5Wrapper)

const Style6 = JSON.parse(JSON.stringify(Style5))
Style6[CONTAINER_SUB_WRAPPER].width = "24px"
Style6[CONTAINER_SUB_WRAPPER].height = "24px"
Style6[PICTURE_SUBCOMPONENT].width = "24px"
Style6[PICTURE_SUBCOMPONENT].height = "24px"

const Style6Path = {}
Style6Path[SIZE_ATTRIBUTE] = EXTRA_SMALL_OPTION;
Style6Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style6Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style6Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style6Path[SHOW_BADGE_ATTRIBUTE] = SHOW_BADGE_OPTION;
const Style6Wrapper = {}
Style6Wrapper[STYLE_OBJECT] = {...Style6}
Style6Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_BADGE_PROFILE_VARIANT
Style6Wrapper[PATH_STYLE] = Style6Path
profilePictureBadgeStyles.push(Style6Wrapper)


const Style7 = JSON.parse(JSON.stringify(Style1))

Style7[BADGE_SUBCOMPONENT][WARNING_EVENT] = {
backgroundColor: ALERT_WARNING,
color: TYPOGRAPHY_01
}
Style7[BADGE_SUBCOMPONENT][SUCCESS_EVENT] = {
backgroundColor: ALERT_SUCCESS,
color: TYPOGRAPHY_01
}
Style7[BADGE_SUBCOMPONENT][ERROR_EVENT] = {
backgroundColor: DANGER_DARK_THEME,
color: TYPOGRAPHY_01
}


const Style7Path = {}
Style7Path[SIZE_ATTRIBUTE] = DOUBLE_EXTRA_LARGE_OPTION;
Style7Path[THEME_ATTRIBUTE] = DARK_OPTION;
Style7Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style7Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style7Path[SHOW_BADGE_ATTRIBUTE] = SHOW_BADGE_OPTION;

const Style7Wrapper = {}
Style7Wrapper[STYLE_OBJECT] = {...Style7}
Style7Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_BADGE_PROFILE_VARIANT
Style7Wrapper[PATH_STYLE] = Style7Path
profilePictureBadgeStyles.push(Style7Wrapper)

const Style8 = JSON.parse(JSON.stringify(Style7))
Style8[CONTAINER_SUB_WRAPPER].width = "56px"
Style8[CONTAINER_SUB_WRAPPER].height = "56px"
Style8[PICTURE_SUBCOMPONENT].width = "56px"
Style8[PICTURE_SUBCOMPONENT].height = "56px"

const Style8Path = {}
Style8Path[SIZE_ATTRIBUTE] = EXTRA_LARGE_OPTION;
Style8Path[THEME_ATTRIBUTE] = DARK_OPTION;
Style8Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style8Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style8Path[SHOW_BADGE_ATTRIBUTE] = SHOW_BADGE_OPTION;
const Style8Wrapper = {}
Style8Wrapper[STYLE_OBJECT] = {...Style8}
Style8Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_BADGE_PROFILE_VARIANT
Style8Wrapper[PATH_STYLE] = Style8Path
profilePictureBadgeStyles.push(Style8Wrapper)


const Style9 = JSON.parse(JSON.stringify(Style7))
Style9[CONTAINER_SUB_WRAPPER].width = "48px"
Style9[CONTAINER_SUB_WRAPPER].height = "48px"
Style9[PICTURE_SUBCOMPONENT].width = "48px"
Style9[PICTURE_SUBCOMPONENT].height = "48px"

const Style9Path = {}
Style9Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style9Path[THEME_ATTRIBUTE] = DARK_OPTION;
Style9Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style9Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style9Path[SHOW_BADGE_ATTRIBUTE] = SHOW_BADGE_OPTION;

const Style9Wrapper = {}
Style9Wrapper[STYLE_OBJECT] = {...Style9}
Style9Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_BADGE_PROFILE_VARIANT
Style9Wrapper[PATH_STYLE] = Style9Path
profilePictureBadgeStyles.push(Style9Wrapper)

const Style10 = JSON.parse(JSON.stringify(Style7))
Style10[CONTAINER_SUB_WRAPPER].width = "40px"
Style10[CONTAINER_SUB_WRAPPER].height = "40px"
Style10[PICTURE_SUBCOMPONENT].width = "40px"
Style10[PICTURE_SUBCOMPONENT].height = "40px"
const Style10Path = {}
Style10Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style10Path[THEME_ATTRIBUTE] = DARK_OPTION;
Style10Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style10Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style10Path[SHOW_BADGE_ATTRIBUTE] = SHOW_BADGE_OPTION;
const Style10Wrapper = {}
Style10Wrapper[STYLE_OBJECT] = {...Style10}
Style10Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_BADGE_PROFILE_VARIANT
Style10Wrapper[PATH_STYLE] = Style10Path
profilePictureBadgeStyles.push(Style10Wrapper)

const Style11 = JSON.parse(JSON.stringify(Style7))

Style11[CONTAINER_SUB_WRAPPER].width = "32px"
Style11[CONTAINER_SUB_WRAPPER].height = "32px"
Style11[BADGE_SUBCOMPONENT].width = "12px"
Style11[BADGE_SUBCOMPONENT].height = "12px"
Style11[BADGE_SUBCOMPONENT ].fontSize = "8px"
Style11[BADGE_SUBCOMPONENT ].lineHeight = "10px"
Style11[PICTURE_SUBCOMPONENT].width = "32px"
Style11[PICTURE_SUBCOMPONENT].height = "32px"
const Style11Path = {}
Style11Path[SIZE_ATTRIBUTE] = SMALL_OPTION;
Style11Path[THEME_ATTRIBUTE] = DARK_OPTION;
Style11Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style11Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style11Path[SHOW_BADGE_ATTRIBUTE] = SHOW_BADGE_OPTION;

const Style11Wrapper = {}
Style11Wrapper[STYLE_OBJECT] = {...Style11}
Style11Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_BADGE_PROFILE_VARIANT
Style11Wrapper[PATH_STYLE] = Style11Path
profilePictureBadgeStyles.push(Style11Wrapper)

const Style12 = JSON.parse(JSON.stringify(Style11))
Style12[CONTAINER_SUB_WRAPPER].width = "24px"
Style12[CONTAINER_SUB_WRAPPER].height = "24px"
Style12[PICTURE_SUBCOMPONENT].width = "24px"
Style12[PICTURE_SUBCOMPONENT].height = "24px"

const Style12Path = {}
Style12Path[SIZE_ATTRIBUTE] = EXTRA_SMALL_OPTION;
Style12Path[THEME_ATTRIBUTE] = DARK_OPTION;
Style12Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style12Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style12Path[SHOW_BADGE_ATTRIBUTE] = SHOW_BADGE_OPTION;
const Style12Wrapper = {}
Style12Wrapper[STYLE_OBJECT] = {...Style12}
Style12Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_BADGE_PROFILE_VARIANT
Style12Wrapper[PATH_STYLE] = Style12Path
profilePictureBadgeStyles.push(Style12Wrapper)

export  {profilePictureBadgeStyles};