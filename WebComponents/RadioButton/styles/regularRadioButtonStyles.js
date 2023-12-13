import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY, TYPOGRAPHY_01, TYPOGRAPHY_03, TYPOGRAPHY_02, TYPOGRAPHY_04, DARK_GREY, MEDIUM_GREY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {COLOR_ATTRIBUTE, SIZE_ATTRIBUTE, ENABLE_ATTRIBUTE, OFF_OPTION, SELECTED_EVENT, SVG_TYPE, STATE_ATTRIBUTE, NORMAL_OPTION, SELECTED_OPTION, SMALL_OPTION, MEDIUM_OPTION, WHITE_OPTION} from "../constants.js"
import {SVG_ATTRIBUTES, SVG_STYLES} from "../constants.js"
import { BLACK_OPTION, LARGE_OPTION, ON_OPTION } from "../constants.js"
import { REGULAR_RADIO_BUTTON_VARIANT } from "../constants.js"
import {CONTAINER_SLOT_WRAPPER,WRAPPER_SUBCOMPONENT,SVG_SUBCOMPONENT, CIRCLE_FILL_SUBCOMPONENT, CIRCLE_STROKE_SUBCOMPONENT, LABEL_SUBCOMPONENT} from "../constants.js"
const radioButtonStyles = []
const Style1 = {}

Style1[WRAPPER_SUBCOMPONENT] = {
    padding: "0px",
    backgroundColor: "transparent",
    boxSizing: "border-box",
    width: "fit-content", 
    height: "24px",
    display: "grid",
    gridTemplateColumns: "20px auto",
    gridColumnGap: "12px",
    overflow: "hidden",
    cursor: "pointer"
}
Style1[CONTAINER_SLOT_WRAPPER] = {
    display: "none",
}
Style1[LABEL_SUBCOMPONENT] = {
    height: "100%",
    width: "100%",
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: "normal",
    fontWeight: "350",
    fontSize: "16px",
    lineHeight: "24px",
    color: TYPOGRAPHY_02,
    overflow: "hidden"
}
Style1[SVG_SUBCOMPONENT] = {
    padding: "2px"
}

Style1[SVG_SUBCOMPONENT][SVG_ATTRIBUTES] = {
    viewBox: "-2 -2 24 24",
    width: "24px",
    height: "24px",
}
Style1[SVG_SUBCOMPONENT][SVG_ATTRIBUTES][SVG_TYPE] = "svg"
Style1[SVG_SUBCOMPONENT][SVG_STYLES] = {
    display: "flex",
    allignItems: "center"
}

Style1[CIRCLE_STROKE_SUBCOMPONENT] = {}

Style1[CIRCLE_STROKE_SUBCOMPONENT][SVG_ATTRIBUTES] = {
    cx: "10",
    cy: "10",
    r: "9.5",
    stroke: DARK_GREY,
    fill: "transparent" 
}
Style1[CIRCLE_STROKE_SUBCOMPONENT][SVG_ATTRIBUTES][SVG_TYPE] = "circle"
Style1[CIRCLE_STROKE_SUBCOMPONENT][SVG_ATTRIBUTES]['stroke-width'] = 1
Style1[CIRCLE_STROKE_SUBCOMPONENT][SVG_STYLES] = {}

Style1[CIRCLE_FILL_SUBCOMPONENT] = {}

Style1[CIRCLE_FILL_SUBCOMPONENT][SVG_ATTRIBUTES] = {
    cx: "10",
    cy: "10",
    r: "4",
    fill: TYPOGRAPHY_01
}
Style1[CIRCLE_FILL_SUBCOMPONENT][SVG_ATTRIBUTES][SVG_TYPE] = "circle"
Style1[CIRCLE_FILL_SUBCOMPONENT][SVG_STYLES] = {
    transform: "scale(0)",
    transition: "transform 0.3s",
    transformOrigin: "50% 50%",
    //transitionTimingFunction: "cubic-bezier(0.57, 0.21, 0.69, 3.25)",
}
Style1[CIRCLE_FILL_SUBCOMPONENT][SVG_STYLES][SELECTED_EVENT] = {
    transform: "scale(1)",
}
const Style1Path = {}
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style1Path[ENABLE_ATTRIBUTE] = ON_OPTION
Style1Path[STATE_ATTRIBUTE] = NORMAL_OPTION

const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
radioButtonStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[LABEL_SUBCOMPONENT].opacity = "0.4"
Style2[CIRCLE_STROKE_SUBCOMPONENT][SVG_ATTRIBUTES]['stroke-opacity']= "0.4"
const Style2Path = {}
Style2Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style2Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style2Path[ENABLE_ATTRIBUTE] = OFF_OPTION
Style2Path[STATE_ATTRIBUTE] = NORMAL_OPTION

const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
style2Wrapper[PATH_STYLE] = Style2Path
radioButtonStyles.push(style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style2))
Style3[CIRCLE_FILL_SUBCOMPONENT][SVG_ATTRIBUTES]['fill-opacity']= "0.4"
Style3[CIRCLE_FILL_SUBCOMPONENT][SVG_STYLES].transform = "scale(1)"
const Style3Path = {}
Style3Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style3Path[ENABLE_ATTRIBUTE] = OFF_OPTION
Style3Path[STATE_ATTRIBUTE] = SELECTED_OPTION

const style3Wrapper = {}
style3Wrapper[STYLE_OBJECT] = {...Style3}
style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
style3Wrapper[PATH_STYLE] = Style3Path
radioButtonStyles.push(style3Wrapper)

const Style4 = JSON.parse(JSON.stringify(Style1))
Style4[LABEL_SUBCOMPONENT].fontSize = "14px"
Style4[LABEL_SUBCOMPONENT].lineHeight = "20px"
Style4[LABEL_SUBCOMPONENT].paddingTop = "3px"
const Style4Path = {}
Style4Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style4Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style4Path[ENABLE_ATTRIBUTE] = ON_OPTION
Style4Path[STATE_ATTRIBUTE] = NORMAL_OPTION

const style4Wrapper = {}
style4Wrapper[STYLE_OBJECT] = {...Style4}
style4Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
style4Wrapper[PATH_STYLE] = Style4Path
radioButtonStyles.push(style4Wrapper)

const Style5 = JSON.parse(JSON.stringify(Style2))
Style5[LABEL_SUBCOMPONENT].fontSize = "14px"
Style5[LABEL_SUBCOMPONENT].lineHeight = "20px"
Style5[LABEL_SUBCOMPONENT].paddingTop = "3px"
const Style5Path = {}
Style5Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style5Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style5Path[ENABLE_ATTRIBUTE] = OFF_OPTION
Style5Path[STATE_ATTRIBUTE] = NORMAL_OPTION

const style5Wrapper = {}
style5Wrapper[STYLE_OBJECT] = {...Style5}
style5Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
style5Wrapper[PATH_STYLE] = Style5Path
radioButtonStyles.push(style5Wrapper)

const Style6 = JSON.parse(JSON.stringify(Style3))
Style6[LABEL_SUBCOMPONENT].fontSize = "14px"
Style6[LABEL_SUBCOMPONENT].lineHeight = "20px"
Style6[LABEL_SUBCOMPONENT].paddingTop = "3px"
const Style6Path = {}
Style6Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style6Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style6Path[ENABLE_ATTRIBUTE] = OFF_OPTION
Style6Path[STATE_ATTRIBUTE] = SELECTED_OPTION

const style6Wrapper = {}
style6Wrapper[STYLE_OBJECT] = {...Style6}
style6Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
style6Wrapper[PATH_STYLE] = Style6Path
radioButtonStyles.push(style6Wrapper)

// WHITE OPTION
const Style7 = JSON.parse(JSON.stringify(Style1))
Style7[LABEL_SUBCOMPONENT].color = TYPOGRAPHY_04
Style7[CIRCLE_STROKE_SUBCOMPONENT][SVG_ATTRIBUTES].stroke= MEDIUM_GREY
Style7[CIRCLE_FILL_SUBCOMPONENT][SVG_ATTRIBUTES].fill = TYPOGRAPHY_03

const Style7Path = {}
Style7Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style7Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style7Path[ENABLE_ATTRIBUTE] = ON_OPTION
Style7Path[STATE_ATTRIBUTE] = NORMAL_OPTION

const style7Wrapper = {}
style7Wrapper[STYLE_OBJECT] = {...Style7}
style7Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
style7Wrapper[PATH_STYLE] = Style7Path
radioButtonStyles.push(style7Wrapper)


const Style8 = JSON.parse(JSON.stringify(Style2))
Style8[LABEL_SUBCOMPONENT].color = TYPOGRAPHY_04
Style8[CIRCLE_STROKE_SUBCOMPONENT][SVG_ATTRIBUTES].stroke= MEDIUM_GREY
Style8[CIRCLE_FILL_SUBCOMPONENT][SVG_ATTRIBUTES].fill = TYPOGRAPHY_03

const Style8Path = {}
Style8Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style8Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style8Path[ENABLE_ATTRIBUTE] = OFF_OPTION
Style8Path[STATE_ATTRIBUTE] = NORMAL_OPTION

const style8Wrapper = {}
style8Wrapper[STYLE_OBJECT] = {...Style8}
style8Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
style8Wrapper[PATH_STYLE] = Style8Path
radioButtonStyles.push(style8Wrapper)

const Style9 = JSON.parse(JSON.stringify(Style3))
Style9[LABEL_SUBCOMPONENT].color = TYPOGRAPHY_04
Style9[CIRCLE_STROKE_SUBCOMPONENT][SVG_ATTRIBUTES].stroke= MEDIUM_GREY
Style9[CIRCLE_FILL_SUBCOMPONENT][SVG_ATTRIBUTES].fill = TYPOGRAPHY_03

const Style9Path = {}
Style9Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style9Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style9Path[ENABLE_ATTRIBUTE] = OFF_OPTION
Style9Path[STATE_ATTRIBUTE] = SELECTED_OPTION

const style9Wrapper = {}
style9Wrapper[STYLE_OBJECT] = {...Style9}
style9Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
style9Wrapper[PATH_STYLE] = Style9Path
radioButtonStyles.push(style9Wrapper)

// Medium
const Style10 = JSON.parse(JSON.stringify(Style7))
Style10[LABEL_SUBCOMPONENT].fontSize = "14px"
Style10[LABEL_SUBCOMPONENT].lineHeight = "20px"
Style10[LABEL_SUBCOMPONENT].paddingTop = "3px"
const Style10Path = {}
Style10Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style10Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style10Path[ENABLE_ATTRIBUTE] = ON_OPTION
Style10Path[STATE_ATTRIBUTE] = NORMAL_OPTION

const style10Wrapper = {}
style10Wrapper[STYLE_OBJECT] = {...Style10}
style10Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
style10Wrapper[PATH_STYLE] = Style10Path
radioButtonStyles.push(style10Wrapper)

const Style11 = JSON.parse(JSON.stringify(Style8))
const Style11Path = {}
Style11Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style11Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style11Path[ENABLE_ATTRIBUTE] = OFF_OPTION
Style11Path[STATE_ATTRIBUTE] = NORMAL_OPTION

const style11Wrapper = {}
style11Wrapper[STYLE_OBJECT] = {...Style11}
style11Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
style11Wrapper[PATH_STYLE] = Style11Path
radioButtonStyles.push(style11Wrapper)

const Style12 = JSON.parse(JSON.stringify(Style8))
const Style12Path = {}
Style12Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style12Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style12Path[ENABLE_ATTRIBUTE] = OFF_OPTION
Style12Path[STATE_ATTRIBUTE] = SELECTED_OPTION

const Style12Wrapper = {}
Style12Wrapper[STYLE_OBJECT] = {...Style12}
Style12Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
Style12Wrapper[PATH_STYLE] = Style12Path
radioButtonStyles.push(Style12Wrapper)

/*
const Style12 = JSON.parse(JSON.stringify(Style9))
const Style12Path = {}
Style12Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style12Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style12Path[ENABLE_ATTRIBUTE] = ON_OPTION
Style12Path[STATE_ATTRIBUTE] = SELECTED_OPTION

const style12Wrapper = {}
style12Wrapper[STYLE_OBJECT] = {...Style12}
style12Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
style12Wrapper[PATH_STYLE] = Style12Path
radioButtonStyles.push(style12Wrapper)



const Style13 = JSON.parse(JSON.stringify(Style1))
const Style13Path = {}
Style13Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style13Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style13Path[ENABLE_ATTRIBUTE] = ON_OPTION
Style13Path[STATE_ATTRIBUTE] = NORMAL_OPTION

const Style13Wrapper = {}
Style13Wrapper[STYLE_OBJECT] = {...Style13}
Style13Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
Style13Wrapper[PATH_STYLE] = Style13Path
radioButtonStyles.push(Style13Wrapper)


const Style14 = JSON.parse(JSON.stringify(Style2))
const Style14Path = {}
Style14Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style14Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style14Path[ENABLE_ATTRIBUTE] = OFF_OPTION
Style14Path[STATE_ATTRIBUTE] = NORMAL_OPTION

const Style14Wrapper = {}
Style14Wrapper[STYLE_OBJECT] = {...Style14}
Style14Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
Style14Wrapper[PATH_STYLE] = Style14Path
radioButtonStyles.push(Style14Wrapper)

const Style15 = JSON.parse(JSON.stringify(Style3))
const Style15Path = {}
Style15Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style15Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style15Path[ENABLE_ATTRIBUTE] = OFF_OPTION
Style15Path[STATE_ATTRIBUTE] = SELECTED_OPTION

const Style15Wrapper = {}
Style15Wrapper[STYLE_OBJECT] = {...Style15}
Style15Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
Style15Wrapper[PATH_STYLE] = Style15Path
radioButtonStyles.push(Style15Wrapper)

const Style16 = JSON.parse(JSON.stringify(Style7))
const Style16Path = {}
Style16Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style16Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style16Path[ENABLE_ATTRIBUTE] = ON_OPTION
Style16Path[STATE_ATTRIBUTE] = NORMAL_OPTION

const Style16Wrapper = {}
Style16Wrapper[STYLE_OBJECT] = {...Style16}
Style16Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
Style16Wrapper[PATH_STYLE] = Style16Path
radioButtonStyles.push(Style16Wrapper)


const Style17 = JSON.parse(JSON.stringify(Style8))
const Style17Path = {}
Style17Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style17Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style17Path[ENABLE_ATTRIBUTE] = OFF_OPTION
Style17Path[STATE_ATTRIBUTE] = NORMAL_OPTION

const Style17Wrapper = {}
Style17Wrapper[STYLE_OBJECT] = {...Style17}
Style17Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
Style17Wrapper[PATH_STYLE] = Style17Path
radioButtonStyles.push(Style17Wrapper)

const Style18 = JSON.parse(JSON.stringify(Style9))
const Style18Path = {}
Style18Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style18Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style18Path[ENABLE_ATTRIBUTE] = OFF_OPTION
Style18Path[STATE_ATTRIBUTE] = SELECTED_OPTION

const Style18Wrapper = {}
Style18Wrapper[STYLE_OBJECT] = {...Style18}
Style18Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_RADIO_BUTTON_VARIANT
Style18Wrapper[PATH_STYLE] = Style18Path
radioButtonStyles.push(Style18Wrapper)*/

const copyStyles = radioButtonStyles.map(el => {return JSON.parse(JSON.stringify(el))}) 

copyStyles.forEach(el => {
    el[STYLE_OBJECT][CIRCLE_FILL_SUBCOMPONENT][SVG_STYLES].transform = "scale(1)"
    delete el[STYLE_OBJECT][CIRCLE_FILL_SUBCOMPONENT][SVG_STYLES][SELECTED_EVENT]
   el[PATH_STYLE][STATE_ATTRIBUTE] = SELECTED_OPTION
})

radioButtonStyles.push(...copyStyles)
export  {radioButtonStyles};