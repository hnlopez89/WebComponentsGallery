import {HIERARCHY_ATTRIBUTE, 
    SIZE_ATTRIBUTE, 
    STATE_ATTRIBUTE,
    THEME_ATTRIBUTE,
    } from "../constants.js"
import {ICON_HIERARCHY_OPTION,
    EXTRA_LARGE_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    DARK_OPTION,
    LIGHT_OPTION,
    ACTIVE_OPTION,
    INACTIVE_OPTION,
    } from "../constants.js"
import { BACKGROUND_01, ICON_02,
    MEDIUM_GREY, ICON_04, DARK_GREY,
    INTERFACE_06, ICON_01,
    WHITE,
    VALIDATED_COLOR} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {BUTTON_SUBCOMPONENT, ICON_SUBCOMPONENT, ICON_CONTAINER_SUBCOMPONENT} from "../constants.js"
import {HOVER_BUTTON_EVENT,FOCUS_BUTTON_EVENT} from "../constants.js"
import {ICON_BUTTON_VARIANT} from "../constants.js"
import { SIZE_STYLES } from "./commonStyles.js"
import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
const iconButtonStyles = []

// EXTRA-LARGE LIGHT THEME ACTIVE
const Style1 = {}
Style1 [BUTTON_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    ...SIZE_STYLES[LARGE_OPTION][ICON_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
    width: "56px",
    height: "56px",
    borderRadius: "100px",

}


Style1[ICON_CONTAINER_SUBCOMPONENT] = {
    ...SIZE_STYLES[LARGE_OPTION][ICON_BUTTON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    borderRadius: "100px",
    width: "56px",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.2s all ease-in-out",
    boxShadow: `0 0 0 0px ${VALIDATED_COLOR}`,
    backgroundColor: BACKGROUND_01,
}

Style1[ICON_SUBCOMPONENT] = {
    backgroundColor: BACKGROUND_01,
    width: "40px",
    height: "40px",
    transition: "0.2s all ease-in-out",
    color: ICON_02,
}

Style1[ICON_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    backgroundColor: DARK_GREY,
}

Style1[ICON_CONTAINER_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
    transition: "0.2s all ease-in-out",
    backgroundColor: DARK_GREY,
    boxShadow: `0 0 0 4px ${VALIDATED_COLOR}`,
}


const Style1Path = {}
Style1Path[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
Style1Path[SIZE_ATTRIBUTE] = EXTRA_LARGE_OPTION
Style1Path[THEME_ATTRIBUTE] = LIGHT_OPTION
Style1Path[STATE_ATTRIBUTE] = ACTIVE_OPTION

const styleWrapper1 = {}
styleWrapper1[STYLE_OBJECT] = {...Style1}
styleWrapper1[COMPONENT_VARIANT_KEY] = ICON_BUTTON_VARIANT
styleWrapper1[PATH_STYLE] = Style1Path

iconButtonStyles.push(styleWrapper1)

// LARGE LIGHT THEME ACTIVE
const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[BUTTON_SUBCOMPONENT].width = "48px";
Style2[BUTTON_SUBCOMPONENT].height = "48px";
Style2[ICON_CONTAINER_SUBCOMPONENT].width = "48px";
Style2[ICON_CONTAINER_SUBCOMPONENT].height = "48px";
Style2[ICON_SUBCOMPONENT].width="32px";
Style2[ICON_SUBCOMPONENT].height="32px";

const Style2Path = {}
Style2Path[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
Style2Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style2Path[THEME_ATTRIBUTE] = LIGHT_OPTION
Style2Path[STATE_ATTRIBUTE] = ACTIVE_OPTION

const styleWrapper2 = {}
styleWrapper2[STYLE_OBJECT] = {...Style2}
styleWrapper2[COMPONENT_VARIANT_KEY] = ICON_BUTTON_VARIANT
styleWrapper2[PATH_STYLE] = Style2Path

iconButtonStyles.push(styleWrapper2)

// MEDIUM LIGHT THEME ACTIVE
const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[BUTTON_SUBCOMPONENT].width = "40px";
Style3[BUTTON_SUBCOMPONENT].height = "40px";
Style3[ICON_CONTAINER_SUBCOMPONENT].width = "40px";
Style3[ICON_CONTAINER_SUBCOMPONENT].height = "40px";
Style3[ICON_SUBCOMPONENT].width="24px";
Style3[ICON_SUBCOMPONENT].height="24px";

const Style3Path = {}
Style3Path[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
Style3Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style3Path[THEME_ATTRIBUTE] = LIGHT_OPTION
Style3Path[STATE_ATTRIBUTE] = ACTIVE_OPTION

const styleWrapper3 = {}
styleWrapper3[STYLE_OBJECT] = {...Style3}
styleWrapper3[COMPONENT_VARIANT_KEY] = ICON_BUTTON_VARIANT
styleWrapper3[PATH_STYLE] = Style3Path

iconButtonStyles.push(styleWrapper3)

// SMALL LIGHT THEME ACTIVE
const Style4 = JSON.parse(JSON.stringify(Style1))
Style4[BUTTON_SUBCOMPONENT].width = "32px";
Style4[BUTTON_SUBCOMPONENT].height = "32px";
Style4[ICON_CONTAINER_SUBCOMPONENT].width = "32px";
Style4[ICON_CONTAINER_SUBCOMPONENT].height = "32px";
Style4[ICON_SUBCOMPONENT].width="20px";
Style4[ICON_SUBCOMPONENT].height="20px";

const Style4Path = {}
Style4Path[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
Style4Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style4Path[THEME_ATTRIBUTE] = LIGHT_OPTION
Style4Path[STATE_ATTRIBUTE] = ACTIVE_OPTION

const styleWrapper4 = {}
styleWrapper4[STYLE_OBJECT] = {...Style4}
styleWrapper4[COMPONENT_VARIANT_KEY] = ICON_BUTTON_VARIANT
styleWrapper4[PATH_STYLE] = Style4Path

iconButtonStyles.push(styleWrapper4)

// EXTRA LARGE LIGHT THEME INACTIVE
const Style5 = JSON.parse(JSON.stringify(Style1))
Style5[ICON_CONTAINER_SUBCOMPONENT].backgroundColor = MEDIUM_GREY;
Style5[ICON_SUBCOMPONENT].color= ICON_04;
delete Style5[ICON_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT]
delete Style5[ICON_CONTAINER_SUBCOMPONENT][FOCUS_BUTTON_EVENT]



const Style5Path = {}
Style5Path[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
Style5Path[SIZE_ATTRIBUTE] = EXTRA_LARGE_OPTION
Style5Path[THEME_ATTRIBUTE] = LIGHT_OPTION
Style5Path[STATE_ATTRIBUTE] = INACTIVE_OPTION

const styleWrapper5 = {}
styleWrapper5[STYLE_OBJECT] = {...Style5}
styleWrapper5[COMPONENT_VARIANT_KEY] = ICON_BUTTON_VARIANT
styleWrapper5[PATH_STYLE] = Style5Path

iconButtonStyles.push(styleWrapper5)

// LARGE LIGHT THEME INACTIVE
const Style6 = JSON.parse(JSON.stringify(Style2))
Style6[ICON_CONTAINER_SUBCOMPONENT].backgroundColor = MEDIUM_GREY;
Style6[ICON_SUBCOMPONENT].color= ICON_04;
delete Style6[ICON_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT]
delete Style6[ICON_CONTAINER_SUBCOMPONENT][FOCUS_BUTTON_EVENT]
const Style6Path = {}
Style6Path[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
Style6Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style6Path[THEME_ATTRIBUTE] = LIGHT_OPTION
Style6Path[STATE_ATTRIBUTE] = INACTIVE_OPTION

const styleWrapper6 = {}
styleWrapper6[STYLE_OBJECT] = {...Style6}
styleWrapper6[COMPONENT_VARIANT_KEY] = ICON_BUTTON_VARIANT
styleWrapper6[PATH_STYLE] = Style6Path

iconButtonStyles.push(styleWrapper6)

// MEDIUM LIGHT THEME INACTIVE
const Style7 = JSON.parse(JSON.stringify(Style3))
Style7[ICON_CONTAINER_SUBCOMPONENT].backgroundColor = MEDIUM_GREY;
Style7[ICON_SUBCOMPONENT].color= ICON_04;
delete Style7[ICON_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT]
delete Style7[ICON_CONTAINER_SUBCOMPONENT][FOCUS_BUTTON_EVENT]
const Style7Path = {}
Style7Path[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
Style7Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style7Path[THEME_ATTRIBUTE] = LIGHT_OPTION
Style7Path[STATE_ATTRIBUTE] = INACTIVE_OPTION

const styleWrapper7 = {}
styleWrapper7[STYLE_OBJECT] = {...Style7}
styleWrapper7[COMPONENT_VARIANT_KEY] = ICON_BUTTON_VARIANT
styleWrapper7[PATH_STYLE] = Style7Path

iconButtonStyles.push(styleWrapper7)

// SMALL LIGHT THEME INACTIVE
const Style8 = JSON.parse(JSON.stringify(Style4))
Style8[ICON_CONTAINER_SUBCOMPONENT].backgroundColor = MEDIUM_GREY;
Style8[ICON_SUBCOMPONENT].color= ICON_04;
delete Style8[ICON_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT]
delete Style8[ICON_CONTAINER_SUBCOMPONENT][FOCUS_BUTTON_EVENT]

const Style8Path = {}
Style8Path[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
Style8Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style8Path[THEME_ATTRIBUTE] = LIGHT_OPTION
Style8Path[STATE_ATTRIBUTE] = INACTIVE_OPTION


const styleWrapper8 = {}
styleWrapper8[STYLE_OBJECT] = {...Style8}
styleWrapper8[COMPONENT_VARIANT_KEY] = ICON_BUTTON_VARIANT
styleWrapper8[PATH_STYLE] = Style8Path

iconButtonStyles.push(styleWrapper8)

// LARGE DARK THEME ACTIVE
const Style9 = JSON.parse(JSON.stringify(Style1))

const Style9Path = {}
Style9[ICON_CONTAINER_SUBCOMPONENT].backgroundColor = INTERFACE_06
Style9[ICON_SUBCOMPONENT].color = ICON_01
Style9[ICON_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    backgroundColor: WHITE,
}
Style9[ICON_CONTAINER_SUBCOMPONENT][FOCUS_BUTTON_EVENT].backgroundColor = WHITE;

Style9Path[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
Style9Path[SIZE_ATTRIBUTE] = EXTRA_LARGE_OPTION
Style9Path[THEME_ATTRIBUTE] = DARK_OPTION
Style9Path[STATE_ATTRIBUTE] = ACTIVE_OPTION


const styleWrapper9 = {}
styleWrapper9[STYLE_OBJECT] = {...Style9}
styleWrapper9[COMPONENT_VARIANT_KEY] = ICON_BUTTON_VARIANT
styleWrapper9[PATH_STYLE] = Style9Path

iconButtonStyles.push(styleWrapper9)

// LARGE DARK THEME ACTIVE
const Style10 = JSON.parse(JSON.stringify(Style2))
Style10[ICON_CONTAINER_SUBCOMPONENT].backgroundColor = INTERFACE_06
Style10[ICON_SUBCOMPONENT].color = ICON_01
Style10[ICON_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    backgroundColor: WHITE,
}
Style10[ICON_CONTAINER_SUBCOMPONENT][FOCUS_BUTTON_EVENT].backgroundColor = WHITE;
const Style10Path = {}
Style10Path[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
Style10Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style10Path[THEME_ATTRIBUTE] = DARK_OPTION
Style10Path[STATE_ATTRIBUTE] = ACTIVE_OPTION

const styleWrapper10 = {}
styleWrapper10[STYLE_OBJECT] = {...Style10}
styleWrapper10[COMPONENT_VARIANT_KEY] = ICON_BUTTON_VARIANT
styleWrapper10[PATH_STYLE] = Style10Path

iconButtonStyles.push(styleWrapper10)

// MEDIUM DARK THEME ACTIVE
const Style11 = JSON.parse(JSON.stringify(Style3))
Style11[ICON_CONTAINER_SUBCOMPONENT].backgroundColor = INTERFACE_06
Style11[ICON_SUBCOMPONENT].color = ICON_01
Style11[ICON_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    backgroundColor: WHITE,
}
Style11[ICON_CONTAINER_SUBCOMPONENT][FOCUS_BUTTON_EVENT].backgroundColor = WHITE;

const Style11Path = {}
Style11Path[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
Style11Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style11Path[THEME_ATTRIBUTE] = DARK_OPTION
Style11Path[STATE_ATTRIBUTE] = ACTIVE_OPTION

const styleWrapper11 = {}
styleWrapper11[STYLE_OBJECT] = {...Style11}
styleWrapper11[COMPONENT_VARIANT_KEY] = ICON_BUTTON_VARIANT
styleWrapper11[PATH_STYLE] = Style11Path

iconButtonStyles.push(styleWrapper11)

// SMALL DARK THEME ACTIVE
const Style12 = JSON.parse(JSON.stringify(Style4))
Style12[ICON_CONTAINER_SUBCOMPONENT].backgroundColor = INTERFACE_06
Style12[ICON_SUBCOMPONENT].color = ICON_01
Style12[ICON_CONTAINER_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    backgroundColor: WHITE,
}
Style12[ICON_CONTAINER_SUBCOMPONENT][FOCUS_BUTTON_EVENT].backgroundColor = WHITE;
const Style12Path = {}
Style12Path[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
Style12Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style12Path[THEME_ATTRIBUTE] = DARK_OPTION
Style12Path[STATE_ATTRIBUTE] = ACTIVE_OPTION

const styleWrapper12 = {}
styleWrapper12[STYLE_OBJECT] = {...Style12}
styleWrapper12[COMPONENT_VARIANT_KEY] = ICON_BUTTON_VARIANT
styleWrapper12[PATH_STYLE] = Style12Path

iconButtonStyles.push(styleWrapper12)

// EXTRA LARGE DARK THEME INACTIVE
const Style13 = JSON.parse(JSON.stringify(Style5))
Style13[ICON_CONTAINER_SUBCOMPONENT].backgroundColor = DARK_GREY
Style13[ICON_SUBCOMPONENT].color = ICON_04

const Style13Path = {}
Style13Path[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
Style13Path[SIZE_ATTRIBUTE] = EXTRA_LARGE_OPTION
Style13Path[THEME_ATTRIBUTE] = DARK_OPTION
Style13Path[STATE_ATTRIBUTE] = INACTIVE_OPTION

const styleWrapper13 = {}
styleWrapper13[STYLE_OBJECT] = {...Style13}
styleWrapper13[COMPONENT_VARIANT_KEY] = ICON_BUTTON_VARIANT
styleWrapper13[PATH_STYLE] = Style13Path

iconButtonStyles.push(styleWrapper13)

// LARGE DARK THEME INACTIVE
const Style14 = JSON.parse(JSON.stringify(Style6))
Style14[ICON_CONTAINER_SUBCOMPONENT].backgroundColor = DARK_GREY;
Style14[ICON_SUBCOMPONENT].color= ICON_04;

const Style14Path = {}
Style14Path[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
Style14Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style14Path[THEME_ATTRIBUTE] = DARK_OPTION
Style14Path[STATE_ATTRIBUTE] = INACTIVE_OPTION


const styleWrapper14 = {}
styleWrapper14[STYLE_OBJECT] = {...Style14}
styleWrapper14[COMPONENT_VARIANT_KEY] = ICON_BUTTON_VARIANT
styleWrapper14[PATH_STYLE] = Style14Path

iconButtonStyles.push(styleWrapper14)

// MEDIUM DARK THEME INACTIVE
const Style15 = JSON.parse(JSON.stringify(Style7))
Style15[ICON_CONTAINER_SUBCOMPONENT].backgroundColor = DARK_GREY;
Style15[ICON_SUBCOMPONENT].color= ICON_04;

const Style15Path = {}
Style15Path[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
Style15Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style15Path[THEME_ATTRIBUTE] = DARK_OPTION
Style15Path[STATE_ATTRIBUTE] = INACTIVE_OPTION

const styleWrapper15 = {}
styleWrapper15[STYLE_OBJECT] = {...Style15}
styleWrapper15[COMPONENT_VARIANT_KEY] = ICON_BUTTON_VARIANT
styleWrapper15[PATH_STYLE] = Style15Path

iconButtonStyles.push(styleWrapper15)

// SMALL DARK THEME INACTIVE
const Style16 = JSON.parse(JSON.stringify(Style8))
Style16[ICON_CONTAINER_SUBCOMPONENT].backgroundColor = DARK_GREY;
Style16[ICON_SUBCOMPONENT].color= ICON_04;

const Style16Path = {}
Style16Path[HIERARCHY_ATTRIBUTE] = ICON_HIERARCHY_OPTION
Style16Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style16Path[THEME_ATTRIBUTE] = DARK_OPTION
Style16Path[STATE_ATTRIBUTE] = INACTIVE_OPTION

const styleWrapper16 = {}
styleWrapper16[STYLE_OBJECT] = {...Style16}
styleWrapper16[COMPONENT_VARIANT_KEY] = ICON_BUTTON_VARIANT
styleWrapper16[PATH_STYLE] = Style16Path

iconButtonStyles.push(styleWrapper16)


export {iconButtonStyles}