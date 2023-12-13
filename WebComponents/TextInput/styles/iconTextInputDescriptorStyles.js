import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY, TYPOGRAPHY_01, TYPOGRAPHY_03, TYPOGRAPHY_02, TYPOGRAPHY_04, DARK_GREY, MEDIUM_GREY, LIGHT_GREY, ALERT_RED_11, VALIDATED_COLOR, ALERT_RED_4} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {SIZE_ATTRIBUTE,COLOR_ATTRIBUTE,STATE_ATTRIBUTE,DESCRIPTOR_ON_ATTRIBUTE,ICON_ON_ATTRIBUTE, CONTAINER_WRAPPER, ICON_TEXT_INPUT_DESCRIPTOR_VARIANT} from "../constants.js"
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
import {ICON_TEXT_INPUT_VARIANT } from "../constants.js"
import {CONTAINER_SLOT_WRAPPER,
        CONTAINER_SUB_WRAPPER,
        TEXT_INPUT_CONTAINER_SUBCOMPONENT,
        TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT,
        TITLE_SUBCOMPONENT,
        TEXT_SUBCOMPONENT,
        DESCRIPTOR_SUBCOMPONENT,
        ERROR_CONTAINER_SUBCOMPONENT,
        ALL_ICONS_CONTAINER,
        ICON_CONTAINER_SUBCOMPONENT,
        ICON_SUBCOMPONENT
    } from "../constants.js"
import {ICON_COLOR_ATTRIBUTE, 
        ICON_HEIGHT_ATTRIBUTE,
        ICON_WIDTH_ATTRIBUTE } from "../../Icons/constants.js"
// CONTAINER_SUB_WRAPPER
// I----------->TEXT_INPUT_CONTAINER_SUBCOMPONENT
// I                I----------->TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT
// I                I                   I
// I                I                   I----------->TITLE_SUBCOMPONENT
// I                I                   I----------->TEXT_SUBCOMPONENT
// I                I
// I                I----------->ALL_ICONS_CONTAINER
// I                                I
// I                                I----------->ICON_CONTAINER_SUBCOMPONENT
// I                                I               I
// I                                I               I----------->ICON_SUBCOMPONENT
// I                                I               
// I
// I----------->DESCRIPTOR_SUBCOMPONENT
// I
// I----------->ERROR_CONTAINER_SUBCOMPONENT
//                  I----------->ERROR_SUBCOMPONENT
const iconTextInputDescriptorStyles = []
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
    margin: "0px",
    minWidth: "456px",
    width: "260px",
    height: "69px", 
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    cursor: "default"

}

Style1[CONTAINER_SUB_WRAPPER][ERROR_EVENT] = {
    height: "89px", 
}


Style1[TEXT_INPUT_CONTAINER_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    width: "100%",
    backgroundColor: "transparent",
    borderBottom: `1px solid ${DARK_GREY}`,
    boxSizing: "border-box",
    paddingBottom: "8px",
    paddingTop: "18px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
}

Style1[TEXT_INPUT_CONTAINER_SUBCOMPONENT][INPUT_EVENT] = {
    paddingTop: "0px",
    borderColor: TYPOGRAPHY_01,
    paddingBottom: "8px"
}

Style1[TEXT_INPUT_CONTAINER_SUBCOMPONENT][ERROR_EVENT] = {
    borderColor: ALERT_RED_11,
}
Style1[TEXT_INPUT_CONTAINER_SUBCOMPONENT][VALIDATED_EVENT] = {
    borderColor: VALIDATED_COLOR,
}
Style1[TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    display: "flex",
    width: "calc(100% - 32px)",
    flexDirection: "column",
    overflow: "hidden",
    whiteSpace: "nowrap",
}
Style1[TITLE_PLUS_TEXT_CONTAINER_SUBCOMPONENT][INPUT_EVENT] = {
    paddingTop: "0px",
}
Style1[TITLE_SUBCOMPONENT] ={
    transition: "0.2s all ease-in-out",
    width: "100%",
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
    fontSize: "12px",
    lineHeight: "20px",
}
Style1[TEXT_SUBCOMPONENT] = {
	background: "none",
	border: "none",
	borderRadius: "0",
	outline: "none",
	appearance: "none",
    transition: "0.2s all ease-in-out",
    height: "0px",
    width: "calc(100%-2px)",
    backgroundColor: "transparent",
    color: TYPOGRAPHY_01,
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: "normal",
    fontSize: "16px",
    paddingTop: "1px",
    paddingBottom: "1px",
    
}
Style1[TEXT_SUBCOMPONENT][INPUT_EVENT] ={
    height: "20px",
    lineHeight:"20px",
    paddingTop: "1px",
    paddingBottom: "1px",
}
Style1[ALL_ICONS_CONTAINER] = {
    width: "24px",
    height: "24px", 
    padding: "0px 0px 0px 8px",
    margin: "0px",
    border: "none",
    cursor: "default",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
    transition: "0.2s all ease-in-out",

}
Style1[ALL_ICONS_CONTAINER][ERROR_EVENT] = {
    width: "24px",
}
Style1[ALL_ICONS_CONTAINER][INPUT_EVENT] = {
    width: "24px",
    color: TYPOGRAPHY_01,
    height: "42px"
}

Style1[ICON_CONTAINER_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    padding: "0px",
    cursor: "default",
    display: "flex",
    alignItems: "center",
    height: "24px", 
    margin: "0px",
    border: "none",

}
Style1[ICON_CONTAINER_SUBCOMPONENT][INPUT_EVENT] = {
    paddingTop: "18px",
    justifyContent: "end",
}

Style1[ICON_SUBCOMPONENT] = {}
Style1[ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE]=DARK_GREY
Style1[ICON_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE]="20px"
Style1[ICON_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE]="20px"

Style1[ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE]=DARK_GREY


Style1[DESCRIPTOR_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    height: "11px", 
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: "normal",
    fontWeight: "350",
    fontSize: "12px",
    lineHeight: "12px",
    backgroundColor: "transparent",
    color: TYPOGRAPHY_02,
    width: "calc(100% - 16px)",
    paddingTop:"1px",
    paddingBottom:"1px",
    overflow: "hidden",
    whiteSpace: "nowrap",
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
Style1Path[ICON_ON_ATTRIBUTE] = ICON_ON_OPTION;
Style1Path[STATE_ATTRIBUTE] = NORMAL_OPTION;

const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = ICON_TEXT_INPUT_DESCRIPTOR_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
iconTextInputDescriptorStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[TITLE_SUBCOMPONENT].color = TYPOGRAPHY_04
Style2[DESCRIPTOR_SUBCOMPONENT].color = TYPOGRAPHY_04
Style2[TEXT_SUBCOMPONENT].color = TYPOGRAPHY_03
Style2[TEXT_INPUT_CONTAINER_SUBCOMPONENT].borderBottom = `1px solid ${MEDIUM_GREY}`
Style2[TEXT_INPUT_CONTAINER_SUBCOMPONENT][INPUT_EVENT].borderColor = LIGHT_GREY
Style2[TEXT_INPUT_CONTAINER_SUBCOMPONENT][ERROR_EVENT].borderColor = ALERT_RED_4
Style2[ERROR_CONTAINER_SUBCOMPONENT][ERROR_EVENT].color = ALERT_RED_4
Style2[ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE]=MEDIUM_GREY
const Style2Path = {}
Style2Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style2Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style2Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION;
Style2Path[ICON_ON_ATTRIBUTE] = ICON_ON_OPTION;
Style2Path[STATE_ATTRIBUTE] = NORMAL_OPTION;
const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = ICON_TEXT_INPUT_DESCRIPTOR_VARIANT
style2Wrapper[PATH_STYLE] = Style2Path
iconTextInputDescriptorStyles.push(style2Wrapper)

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
Style3[ICON_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE]="16px"
Style3[ICON_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE]="16px"


const Style3Path = {}

Style3Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style3Path[COLOR_ATTRIBUTE] = BLACK_OPTION;
Style3Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION;
Style3Path[ICON_ON_ATTRIBUTE] = ICON_ON_OPTION;
Style3Path[STATE_ATTRIBUTE] = NORMAL_OPTION;


const style3Wrapper = {}
style3Wrapper[STYLE_OBJECT] = {...Style3}
style3Wrapper[COMPONENT_VARIANT_KEY] = ICON_TEXT_INPUT_DESCRIPTOR_VARIANT
style3Wrapper[PATH_STYLE] = Style3Path
iconTextInputDescriptorStyles.push(style3Wrapper)

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
Style4[ICON_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE]="16px"
Style4[ICON_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE]="16px"

const Style4Path = {}
Style4Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style4Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style4Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION;
Style4Path[ICON_ON_ATTRIBUTE] = ICON_ON_OPTION;
Style4Path[STATE_ATTRIBUTE] = NORMAL_OPTION;

const style4Wrapper = {}
style4Wrapper[STYLE_OBJECT] = {...Style4}
style4Wrapper[COMPONENT_VARIANT_KEY] = ICON_TEXT_INPUT_DESCRIPTOR_VARIANT
style4Wrapper[PATH_STYLE] = Style4Path
iconTextInputDescriptorStyles.push(style4Wrapper)

const Style5 = JSON.parse(JSON.stringify(Style1))
Style5[TEXT_INPUT_CONTAINER_SUBCOMPONENT].borderColor = TYPOGRAPHY_04
Style5[TITLE_SUBCOMPONENT].color = TYPOGRAPHY_04

const Style5Path = {}

Style5Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style5Path[COLOR_ATTRIBUTE] = BLACK_OPTION;
Style5Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION;
Style5Path[ICON_ON_ATTRIBUTE] = ICON_ON_OPTION;
Style5Path[STATE_ATTRIBUTE] = INACTIVE_OPTION;


const Style5Wrapper = {}
Style5Wrapper[STYLE_OBJECT] = {...Style5}
Style5Wrapper[COMPONENT_VARIANT_KEY] = ICON_TEXT_INPUT_DESCRIPTOR_VARIANT
Style5Wrapper[PATH_STYLE] = Style5Path
iconTextInputDescriptorStyles.push(Style5Wrapper)

const Style6 = JSON.parse(JSON.stringify(Style2))
Style6[TEXT_INPUT_CONTAINER_SUBCOMPONENT].borderColor = DARK_GREY
Style6[TITLE_SUBCOMPONENT].color = TYPOGRAPHY_02
Style6[DESCRIPTOR_SUBCOMPONENT].color = TYPOGRAPHY_02

const Style6Path = {}

Style6Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style6Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style6Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION;
Style6Path[ICON_ON_ATTRIBUTE] = ICON_ON_OPTION;
Style6Path[STATE_ATTRIBUTE] = INACTIVE_OPTION;

const Style6Wrapper = {}
Style6Wrapper[STYLE_OBJECT] = {...Style6}
Style5Wrapper[COMPONENT_VARIANT_KEY] = ICON_TEXT_INPUT_DESCRIPTOR_VARIANT
Style6Wrapper[PATH_STYLE] = Style6Path
iconTextInputDescriptorStyles.push(Style6Wrapper)

const Style7 = JSON.parse(JSON.stringify(Style3))
Style7[TEXT_INPUT_CONTAINER_SUBCOMPONENT].borderColor = MEDIUM_GREY
Style7[TITLE_SUBCOMPONENT].color = TYPOGRAPHY_04
Style7[DESCRIPTOR_SUBCOMPONENT].color = TYPOGRAPHY_04

const Style7Path = {}

Style7Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style7Path[COLOR_ATTRIBUTE] = BLACK_OPTION;
Style7Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION;
Style7Path[ICON_ON_ATTRIBUTE] = ICON_ON_OPTION;
Style7Path[STATE_ATTRIBUTE] = INACTIVE_OPTION;


const Style7Wrapper = {}
Style7Wrapper[STYLE_OBJECT] = {...Style7}
Style5Wrapper[COMPONENT_VARIANT_KEY] = ICON_TEXT_INPUT_DESCRIPTOR_VARIANT
Style7Wrapper[PATH_STYLE] = Style7Path
iconTextInputDescriptorStyles.push(Style7Wrapper)


const Style8 = JSON.parse(JSON.stringify(Style4))
Style8[TEXT_INPUT_CONTAINER_SUBCOMPONENT].borderColor = DARK_GREY
Style8[TITLE_SUBCOMPONENT].color = TYPOGRAPHY_02
Style8[DESCRIPTOR_SUBCOMPONENT].color = TYPOGRAPHY_02

const Style8Path = {}

Style8Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style8Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style8Path[DESCRIPTOR_ON_ATTRIBUTE] = DESCRIPTOR_ON_OPTION;
Style8Path[ICON_ON_ATTRIBUTE] = ICON_ON_OPTION;
Style8Path[STATE_ATTRIBUTE] = INACTIVE_OPTION;


const Style8Wrapper = {}
Style8Wrapper[STYLE_OBJECT] = {...Style8}
Style5Wrapper[COMPONENT_VARIANT_KEY] = ICON_TEXT_INPUT_DESCRIPTOR_VARIANT
Style8Wrapper[PATH_STYLE] = Style8Path
iconTextInputDescriptorStyles.push(Style8Wrapper)



export  {iconTextInputDescriptorStyles};