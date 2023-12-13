import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY, TYPOGRAPHY_01, TYPOGRAPHY_03, TYPOGRAPHY_02, TYPOGRAPHY_04, DARK_GREY, MEDIUM_GREY, LIGHT_GREY, ALERT_RED_11, VALIDATED_COLOR, ALERT_RED_4} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {SIZE_ATTRIBUTE,COLOR_ATTRIBUTE,STATE_ATTRIBUTE,DESCRIPTOR_ON_ATTRIBUTE,ICON_ON_ATTRIBUTE, CONTAINER_WRAPPER} from "../constants.js"
import { LARGE_OPTION,
         MEDIUM_OPTION,
         BLACK_OPTION,
         WHITE_OPTION,
         ICON_ON_OPTION, 
         ICON_OFF_OPTION, 
         DESCRIPTOR_ON_OPTION, 
         DESCRIPTOR_OFF_OPTION,
         NORMAL_OPTION,
         INACTIVE_OPTION } from "../constants.js"
import {INPUT_EVENT, VALIDATED_EVENT, ERROR_EVENT} from "../constants.js"
import {REGULAR_TEXT_INPUT_DESCRIPTOR_VARIANT } from "../constants.js"
import {CONTAINER_SLOT_WRAPPER,
        CONTAINER_SUB_WRAPPER,
        TEXT_INPUT_CONTAINER_SUBCOMPONENT,
        TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT,
        TITLE_SUBCOMPONENT,
        TEXT_SUBCOMPONENT,
        ERROR_CONTAINER_SUBCOMPONENT,
        DESCRIPTOR_SUBCOMPONENT
    } from "../constants.js"
// CONTAINER_SUB_WRAPPER
// I----------->TEXT_INPUT_CONTAINER_SUBCOMPONENT
// I                I----------->TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT
// I                I                   I
// I                I                   I----------->TITLE_SUBCOMPONENT
// I                I                   I----------->TEXT_SUBCOMPONENT
// I----------->DESCRIPTOR_SUBCOMPONENT
const regularTextInputDescriptorStyles = []
const Style1 = {}
Style1[CONTAINER_SLOT_WRAPPER] = {
    display: "none",
}
Style1[CONTAINER_WRAPPER] = {
    margin: "0px",
    minWidth: "456px",
    width: "260px",
    cursor: "default"

}
Style1[CONTAINER_SUB_WRAPPER] = {
    transition: "0.2s all ease-in-out",
    margin: "0px",
    minWidth: "456px",
    width: "260px",
    height: "69px", 
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    cursor: "default"

}

Style1[TEXT_INPUT_CONTAINER_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    width: "100%",
    backgroundColor: "transparent",
    borderBottom: `1px solid ${DARK_GREY}`,
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "flex-start",
    paddingBottom: "9px",
    paddingTop: "18px",
}

Style1[CONTAINER_SUB_WRAPPER][ERROR_EVENT] = {
    height: "89px", 
}

Style1[TEXT_INPUT_CONTAINER_SUBCOMPONENT][INPUT_EVENT] = {
    paddingTop: "0px",
    borderColor: TYPOGRAPHY_01,
    paddingBottom: "5px"
}
Style1[TEXT_INPUT_CONTAINER_SUBCOMPONENT][ERROR_EVENT] = {
    borderColor: ALERT_RED_11,
}
Style1[TEXT_INPUT_CONTAINER_SUBCOMPONENT][VALIDATED_EVENT] = {
    borderColor: VALIDATED_COLOR,
}
Style1[TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT] = {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    overflow: "hidden",
    whiteSpace: "nowrap",
}
Style1[TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT][VALIDATED_EVENT] = {
    width: "calc(100% - 32px)",
}
Style1[TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT][INPUT_EVENT] = {
    paddingTop: "0px",
    width: "100%",
}
Style1[TITLE_SUBCOMPONENT] ={
    transition: "0.2s all ease-in-out",
    width: "100%",
    height: "100%",
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    color: TYPOGRAPHY_02,
    userSelect: "none"

}
Style1[TITLE_SUBCOMPONENT][INPUT_EVENT] ={
    height: "20px",
    lineHeight: "20px",
    fontSize: "12px"
}
Style1[TEXT_SUBCOMPONENT] = {
    padding: "2px 0px 0px 0px",
	background: "none",
	border: "none",
	borderRadius: "0",
	outline: "none",
	appearance: "none",
    fontWeight: "350",
    transition: "0.2s all ease-in-out",
    height: "0px",
    width: "calc(100%-2px)",
    backgroundColor: "transparent",
    color: TYPOGRAPHY_01,
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: "normal",
    fontSize: "16px",
    
}
Style1[TEXT_SUBCOMPONENT][INPUT_EVENT] ={
    height: "22px",
    lineHeight:"100%",
}

Style1[DESCRIPTOR_SUBCOMPONENT] = {
    height: "14px", 
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: "normal",
    fontWeight: "350",
    fontSize: "12px",
    lineHeight: "14px",
    backgroundColor: "transparent",
    color: TYPOGRAPHY_02,
    width: "calc(100% - 16px)",
    overflow: "hidden",
    paddingTop:"2px",
}


Style1[ERROR_CONTAINER_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    height: "0px", 
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    backgroundColor: "transparent",
    color: "transparent",
    padding: "2px 0px 0px px",
    width: "calc(100% - 16px)",
}
Style1[ERROR_CONTAINER_SUBCOMPONENT][ERROR_EVENT] = {
    paddingTop: "4px",
    height: "16px", 
    color: ALERT_RED_11,
}
Style1[ERROR_CONTAINER_SUBCOMPONENT][INPUT_EVENT] = {
    paddingTop: "0px",
    height: "0px",
    color: "transparent",
}
Style1[ERROR_CONTAINER_SUBCOMPONENT][VALIDATED_EVENT] = {
    paddingTop: "0px",
    height: "0px",
    color: "transparent",
}

const Style1Path = {}

Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION;
Style1Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION;
Style1Path[ICON_ON_ATTRIBUTE] = ICON_OFF_OPTION;
Style1Path[STATE_ATTRIBUTE] = NORMAL_OPTION;

const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TEXT_INPUT_DESCRIPTOR_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
regularTextInputDescriptorStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[TITLE_SUBCOMPONENT].color = TYPOGRAPHY_04
Style2[DESCRIPTOR_SUBCOMPONENT].color = TYPOGRAPHY_04
Style2[TEXT_SUBCOMPONENT].color = TYPOGRAPHY_03
Style2[TEXT_INPUT_CONTAINER_SUBCOMPONENT].borderBottom = `1px solid ${MEDIUM_GREY}`
Style2[TEXT_INPUT_CONTAINER_SUBCOMPONENT][INPUT_EVENT].borderColor = LIGHT_GREY
Style2[TEXT_INPUT_CONTAINER_SUBCOMPONENT][ERROR_EVENT].borderColor = ALERT_RED_4
Style2[ERROR_CONTAINER_SUBCOMPONENT][ERROR_EVENT].color = ALERT_RED_4
const Style2Path = {}
Style2Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style2Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style2Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION;
Style2Path[ICON_ON_ATTRIBUTE] = ICON_OFF_OPTION;
Style2Path[STATE_ATTRIBUTE] = NORMAL_OPTION;

const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TEXT_INPUT_DESCRIPTOR_VARIANT
style2Wrapper[PATH_STYLE] = Style2Path
regularTextInputDescriptorStyles.push(style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[CONTAINER_WRAPPER].minWidth = "450px" 
Style3[CONTAINER_SUB_WRAPPER].minWidth = "450px" 
Style3[CONTAINER_SUB_WRAPPER].height = "65px" 

Style3[TEXT_SUBCOMPONENT].fontSize = "16px"
Style3[TITLE_SUBCOMPONENT].lineHeight = "16px"
Style3[TITLE_SUBCOMPONENT].fontSize = "14px"

Style3[TEXT_SUBCOMPONENT][INPUT_EVENT].height = "18px"
Style3[TITLE_SUBCOMPONENT][INPUT_EVENT].fontSize = "12px"
Style3[CONTAINER_SUB_WRAPPER][ERROR_EVENT].height = "85px"

const Style3Path = {}

Style3Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style3Path[COLOR_ATTRIBUTE] = BLACK_OPTION;
Style3Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION;
Style3Path[ICON_ON_ATTRIBUTE] = ICON_OFF_OPTION;
Style3Path[STATE_ATTRIBUTE] = NORMAL_OPTION;


const style3Wrapper = {}
style3Wrapper[STYLE_OBJECT] = {...Style3}
style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TEXT_INPUT_DESCRIPTOR_VARIANT
style3Wrapper[PATH_STYLE] = Style3Path
regularTextInputDescriptorStyles.push(style3Wrapper)

const Style4 = JSON.parse(JSON.stringify(Style2))
Style4[CONTAINER_WRAPPER].minWidth = "450px" 
Style4[CONTAINER_SUB_WRAPPER].minWidth = "450px" 
Style4[CONTAINER_SUB_WRAPPER].height = "65px"
Style4[TEXT_SUBCOMPONENT].fontSize = "16px"
Style4[TITLE_SUBCOMPONENT].lineHeight = "16px"
Style4[TITLE_SUBCOMPONENT].fontSize = "14px"

Style4[TEXT_SUBCOMPONENT][INPUT_EVENT].height = "18px"
Style4[TITLE_SUBCOMPONENT][INPUT_EVENT].fontSize = "12px"
Style4[CONTAINER_SUB_WRAPPER][ERROR_EVENT].height = "85px"
const Style4Path = {}
Style4Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style4Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style4Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION;
Style4Path[ICON_ON_ATTRIBUTE] = ICON_OFF_OPTION;
Style4Path[STATE_ATTRIBUTE] = NORMAL_OPTION;

const style4Wrapper = {}
style4Wrapper[STYLE_OBJECT] = {...Style4}
style4Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TEXT_INPUT_DESCRIPTOR_VARIANT
style4Wrapper[PATH_STYLE] = Style4Path
regularTextInputDescriptorStyles.push(style4Wrapper)

const Style5 = JSON.parse(JSON.stringify(Style1))
Style5[TEXT_INPUT_CONTAINER_SUBCOMPONENT].borderColor = MEDIUM_GREY
Style5[TITLE_SUBCOMPONENT].color = TYPOGRAPHY_04
Style5[DESCRIPTOR_SUBCOMPONENT].color = TYPOGRAPHY_04
const Style5Path = {}
Style5Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style5Path[COLOR_ATTRIBUTE] = BLACK_OPTION;
Style5Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION;
Style5Path[ICON_ON_ATTRIBUTE] = ICON_OFF_OPTION;
Style5Path[STATE_ATTRIBUTE] = INACTIVE_OPTION;


const Style5Wrapper = {}
Style5Wrapper[STYLE_OBJECT] = {...Style5}
Style5Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TEXT_INPUT_DESCRIPTOR_VARIANT
Style5Wrapper[PATH_STYLE] = Style5Path
regularTextInputDescriptorStyles.push(Style5Wrapper)


const Style6 = JSON.parse(JSON.stringify(Style2))
Style6[TEXT_INPUT_CONTAINER_SUBCOMPONENT].borderColor = DARK_GREY
Style6[TITLE_SUBCOMPONENT].color = TYPOGRAPHY_02
Style6[DESCRIPTOR_SUBCOMPONENT].color = TYPOGRAPHY_02

const Style6Path = {}

Style6Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style6Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style6Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_OFF_OPTION;
Style6Path[ICON_ON_ATTRIBUTE] = ICON_OFF_OPTION;
Style6Path[STATE_ATTRIBUTE] = INACTIVE_OPTION;

const Style6Wrapper = {}
Style6Wrapper[STYLE_OBJECT] = {...Style6}
Style5Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TEXT_INPUT_DESCRIPTOR_VARIANT
Style6Wrapper[PATH_STYLE] = Style6Path
regularTextInputDescriptorStyles.push(Style6Wrapper)

const Style7 = JSON.parse(JSON.stringify(Style3))
Style7[TEXT_INPUT_CONTAINER_SUBCOMPONENT].borderColor = MEDIUM_GREY
Style7[TITLE_SUBCOMPONENT].color = TYPOGRAPHY_04
Style7[DESCRIPTOR_SUBCOMPONENT].color = TYPOGRAPHY_04

const Style7Path = {}

Style7Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style7Path[COLOR_ATTRIBUTE] = BLACK_OPTION;
Style7Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_OFF_OPTION;
Style7Path[ICON_ON_ATTRIBUTE] = ICON_OFF_OPTION;
Style7Path[STATE_ATTRIBUTE] = INACTIVE_OPTION;


const Style7Wrapper = {}
Style7Wrapper[STYLE_OBJECT] = {...Style7}
Style5Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TEXT_INPUT_DESCRIPTOR_VARIANT
Style7Wrapper[PATH_STYLE] = Style7Path
regularTextInputDescriptorStyles.push(Style7Wrapper)


const Style8 = JSON.parse(JSON.stringify(Style4))
Style8[TEXT_INPUT_CONTAINER_SUBCOMPONENT].borderColor = DARK_GREY
Style8[TITLE_SUBCOMPONENT].color = TYPOGRAPHY_02
Style8[DESCRIPTOR_SUBCOMPONENT].color = TYPOGRAPHY_02

const Style8Path = {}

Style8Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style8Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style8Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_OFF_OPTION;
Style8Path[ICON_ON_ATTRIBUTE] = ICON_OFF_OPTION;
Style8Path[STATE_ATTRIBUTE] = INACTIVE_OPTION;


const Style8Wrapper = {}
Style8Wrapper[STYLE_OBJECT] = {...Style8}
Style5Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TEXT_INPUT_DESCRIPTOR_VARIANT
Style8Wrapper[PATH_STYLE] = Style8Path
regularTextInputDescriptorStyles.push(Style8Wrapper)


export  {regularTextInputDescriptorStyles};