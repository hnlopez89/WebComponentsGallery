import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { BACKGROUND_02, TYPOGRAPHY_02, BACKGROUND_01, TYPOGRAPHY_04 } from '../../commonMethodsAndConstants/Styles/commonConstants.js';
import { COLOR_ATTRIBUTE, LINES_ATTRIBUTE,POSITION_ATTRIBUTE, ALIGNMENT_ATTRIBUTE, SHOW_SIMPLE_OR_COMPLEX, SIMPLE_OPTION } from "../constants.js";
import { DARK_OPTION, LIGHT_OPTION } from "../constants.js";
import { MULTI_LINE_OPTION, SINGLE_LINE_OPTION } from "../constants.js";
import { ARROW_BOTTOM, ARROW_LEFT, ARROW_RIGHT, ARROW_TOP } from "../constants.js";
import { START_OPTION, MIDDLE_OPTION, END_OPTION } from "../constants.js";
import { REGULAR_TOOLTIP_VARIANT } from "../constants.js";
import { WRAPPER_COMPONENT, SLOT_COMPONENT, CONTAINER_SLOT_WRAPPER, ICON_COMPONENT, CONTENT_COMPONENT, CONTENT_WRAPPER,
        SVG_SUBCOMPONENT, PATH_SUBCOMPONENT } from "../constants.js";
import { SVG_ATTRIBUTES, SVG_TYPE, SVG_STYLES } from "../constants.js";

//SubCOmponents
// SHADOW DOM
// I----------->SLOT_WRAPPER
// I                I----------->SLOT_COMPONENT
// I
// I----------->WRAPPER_COMPONENT
//                  I----------->ICON_COMPONENT
//                  I                   I----------->SVG_SUBCOMPONENT
//                  I                                       I----------->PATH_SUBCOMPONENT
//                  I----------->CONTENT_WRAPPER
//                                      I----------->CONTENT_COMPONENT

const regularTooltipStyles = []
const Style1 = {}
Style1[WRAPPER_COMPONENT] = {
    boxSizing: "border-box",
    width:"fit-content",
    overflow:'hidden',
    whitespace: "nowrap",
    textOverflow: "clip"

}
Style1[CONTAINER_SLOT_WRAPPER] = {
    display: "none"
}
Style1[SLOT_COMPONENT] = {
    display: "none"
}
Style1[ICON_COMPONENT] = {
    background: BACKGROUND_02,
}
Style1[CONTENT_WRAPPER] = {
    background: BACKGROUND_02,
    padding: "8px",
    height: "100%",
    maxWidth: "252px",
}

Style1[CONTENT_COMPONENT] = {
    display: "block",
    background: BACKGROUND_02,
    color: TYPOGRAPHY_02,
    boxSizing: "border-box",
    fontSize: "12px",
    lineHight: "16px",
    fontFamily: "Roboto, Sans-Serif",
    fontWeight: "400",
    overflow:'hidden',
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    boxSizing: "border-box"
}
Style1[ICON_COMPONENT] = {
    display: "flex",
    padding: "0px 8px"
}
Style1[SVG_SUBCOMPONENT] = {}

Style1[SVG_SUBCOMPONENT][SVG_ATTRIBUTES] = {
    width:"12px",
    height:"5px",
    viewBox:"0 0 12 5",
    fill:"none"
}
Style1[SVG_SUBCOMPONENT][SVG_ATTRIBUTES][SVG_TYPE] = "svg"
Style1[SVG_SUBCOMPONENT][SVG_STYLES] = {}

Style1[PATH_SUBCOMPONENT] = {}
  
Style1[PATH_SUBCOMPONENT][SVG_ATTRIBUTES] = {
    fillRule:"evenodd",
    clipRule:"evenodd",
    d:"M6.02894 0L0 4.99961L0.971591 5L11.0497 4.99962H12L6.02894 0Z",
    fill: BACKGROUND_02,
}


Style1[PATH_SUBCOMPONENT][SVG_ATTRIBUTES][SVG_TYPE] = "path"
Style1[PATH_SUBCOMPONENT][SVG_STYLES] = {}
const Style1Path = {}

Style1Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style1Path[POSITION_ATTRIBUTE] = ARROW_TOP;
Style1Path[ALIGNMENT_ATTRIBUTE] = START_OPTION;
Style1Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style1Path[LINES_ATTRIBUTE] = SINGLE_LINE_OPTION;

const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
regularTooltipStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[ICON_COMPONENT].flexDirection = "row-reverse"

const Style2Path = {}

Style2Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style2Path[POSITION_ATTRIBUTE] = ARROW_TOP;
Style2Path[ALIGNMENT_ATTRIBUTE] = END_OPTION;
Style2Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style2Path[LINES_ATTRIBUTE] = SINGLE_LINE_OPTION;

const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
style2Wrapper[PATH_STYLE] = Style2Path
regularTooltipStyles.push(style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[ICON_COMPONENT].justifyContent = "center"

const Style3Path = {}

Style3Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style3Path[POSITION_ATTRIBUTE] = ARROW_TOP;
Style3Path[ALIGNMENT_ATTRIBUTE] = MIDDLE_OPTION;
Style3Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style3Path[LINES_ATTRIBUTE] = SINGLE_LINE_OPTION;

const Style3Wrapper = {}
Style3Wrapper[STYLE_OBJECT] = {...Style3}
Style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style3Wrapper[PATH_STYLE] = Style3Path
regularTooltipStyles.push(Style3Wrapper)

const Style4 = JSON.parse(JSON.stringify(Style1))
Style4[WRAPPER_COMPONENT].display = 'flex'
Style4[WRAPPER_COMPONENT].flexDirection = 'column-reverse'
Style4[ICON_COMPONENT].transform = "rotate(180deg)"

const Style4Path = {}

Style4Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style4Path[POSITION_ATTRIBUTE] = ARROW_BOTTOM;
Style4Path[ALIGNMENT_ATTRIBUTE] = END_OPTION;
Style4Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style4Path[LINES_ATTRIBUTE] = SINGLE_LINE_OPTION;

const Style4Wrapper = {}
Style4Wrapper[STYLE_OBJECT] = {...Style4}
Style4Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style4Wrapper[PATH_STYLE] = Style4Path
regularTooltipStyles.push(Style4Wrapper)

const Style5 = JSON.parse(JSON.stringify(Style4))
Style5[ICON_COMPONENT].flexDirection = "row-reverse"

const Style5Path = {}

Style5Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style5Path[POSITION_ATTRIBUTE] = ARROW_BOTTOM;
Style5Path[ALIGNMENT_ATTRIBUTE] = START_OPTION;
Style5Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style5Path[LINES_ATTRIBUTE] = SINGLE_LINE_OPTION;

const Style5Wrapper = {}
Style5Wrapper[STYLE_OBJECT] = {...Style5}
Style5Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style5Wrapper[PATH_STYLE] = Style5Path
regularTooltipStyles.push(Style5Wrapper)

const Style6 = JSON.parse(JSON.stringify(Style4))
Style6[ICON_COMPONENT].justifyContent = "center"

const Style6Path = {}

Style6Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style6Path[POSITION_ATTRIBUTE] = ARROW_BOTTOM;
Style6Path[ALIGNMENT_ATTRIBUTE] = MIDDLE_OPTION;
Style6Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style6Path[LINES_ATTRIBUTE] = SINGLE_LINE_OPTION;

const Style6Wrapper = {}
Style6Wrapper[STYLE_OBJECT] = {...Style6}
Style6Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style6Wrapper[PATH_STYLE] = Style6Path
regularTooltipStyles.push(Style6Wrapper)

const Style7 = JSON.parse(JSON.stringify(Style4))
Style7[WRAPPER_COMPONENT].flexDirection = 'row-reverse'
Style7[WRAPPER_COMPONENT].alignItems = 'center'
Style7[ICON_COMPONENT].transform = "rotate(90deg)"
Style7[ICON_COMPONENT].padding = "0px"
Style7[ICON_COMPONENT].display = "unset"
Style7[ICON_COMPONENT].height = "16px"
const Style7Path = {}

Style7Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style7Path[POSITION_ATTRIBUTE] = ARROW_RIGHT;
Style7Path[ALIGNMENT_ATTRIBUTE] = START_OPTION;
Style7Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style7Path[LINES_ATTRIBUTE] = SINGLE_LINE_OPTION;

const Style7Wrapper = {}
Style7Wrapper[STYLE_OBJECT] = {...Style7}
Style7Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style7Wrapper[PATH_STYLE] = Style7Path
regularTooltipStyles.push(Style7Wrapper)


const Style8 = JSON.parse(JSON.stringify(Style7))
Style8[WRAPPER_COMPONENT].flexDirection = 'row'
Style8[ICON_COMPONENT].transform = "rotate(270deg)"

const Style8Path = {}

Style8Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style8Path[POSITION_ATTRIBUTE] = ARROW_LEFT;
Style8Path[ALIGNMENT_ATTRIBUTE] = START_OPTION;
Style8Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style8Path[LINES_ATTRIBUTE] = SINGLE_LINE_OPTION;

const Style8Wrapper = {}
Style8Wrapper[STYLE_OBJECT] = {...Style8}
Style8Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style8Wrapper[PATH_STYLE] = Style8Path
regularTooltipStyles.push(Style8Wrapper)

const Style9= JSON.parse(JSON.stringify(Style1))
Style9[CONTENT_COMPONENT].height = "auto"
Style9[CONTENT_COMPONENT] = {
    display: "-webkit-box",
    background: BACKGROUND_02,
    color: TYPOGRAPHY_02,
    height: "auto",
    fontSize: "12px",
    lineHight: "16px",
    fontFamily: "Roboto, Sans-Serif",
    fontWeight: "400",
    overflow:'hidden',
    whiteSpace: "initial",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": "4",
    "line-clamp": "4",
    "-webkit-box-orient": "vertical",
}


const Style9Path = {}

Style9Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style9Path[POSITION_ATTRIBUTE] = ARROW_TOP;
Style9Path[ALIGNMENT_ATTRIBUTE] = START_OPTION;
Style9Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style9Path[LINES_ATTRIBUTE] = MULTI_LINE_OPTION;

const Style9Wrapper = {}
Style9Wrapper[STYLE_OBJECT] = {...Style9}
Style9Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style9Wrapper[PATH_STYLE] = Style9Path
regularTooltipStyles.push(Style9Wrapper)

const Style10 = JSON.parse(JSON.stringify(Style9))
Style10[ICON_COMPONENT].flexDirection = "row-reverse"

const Style10Path = {}

Style10Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style10Path[POSITION_ATTRIBUTE] = ARROW_TOP;
Style10Path[ALIGNMENT_ATTRIBUTE] = END_OPTION;
Style10Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style10Path[LINES_ATTRIBUTE] = MULTI_LINE_OPTION;

const Style10Wrapper = {}
Style10Wrapper[STYLE_OBJECT] = {...Style10}
Style10Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style10Wrapper[PATH_STYLE] = Style10Path
regularTooltipStyles.push(Style10Wrapper)

const Style11 = JSON.parse(JSON.stringify(Style9))
Style11[ICON_COMPONENT].justifyContent = "center"

const Style11Path = {}

Style11Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style11Path[POSITION_ATTRIBUTE] = ARROW_TOP;
Style11Path[ALIGNMENT_ATTRIBUTE] = MIDDLE_OPTION;
Style11Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style11Path[LINES_ATTRIBUTE] = MULTI_LINE_OPTION;

const Style11Wrapper = {}
Style11Wrapper[STYLE_OBJECT] = {...Style11}
Style11Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style11Wrapper[PATH_STYLE] = Style11Path
regularTooltipStyles.push(Style11Wrapper)

const Style12 = JSON.parse(JSON.stringify(Style9))
Style12[WRAPPER_COMPONENT].display = 'flex'
Style12[WRAPPER_COMPONENT].flexDirection = 'column-reverse'
Style12[ICON_COMPONENT].transform = "rotate(180deg)"

const Style12Path = {}

Style12Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style12Path[POSITION_ATTRIBUTE] = ARROW_BOTTOM;
Style12Path[ALIGNMENT_ATTRIBUTE] = END_OPTION;
Style12Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style12Path[LINES_ATTRIBUTE] = MULTI_LINE_OPTION;

const Style12Wrapper = {}
Style12Wrapper[STYLE_OBJECT] = {...Style12}
Style12Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style12Wrapper[PATH_STYLE] = Style12Path
regularTooltipStyles.push(Style12Wrapper)

const Style13 = JSON.parse(JSON.stringify(Style12))
Style13[ICON_COMPONENT].flexDirection = "row-reverse"

const Style13Path = {}

Style13Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style13Path[POSITION_ATTRIBUTE] = ARROW_BOTTOM;
Style13Path[ALIGNMENT_ATTRIBUTE] = START_OPTION;
Style13Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style13Path[LINES_ATTRIBUTE] = MULTI_LINE_OPTION;

const Style13Wrapper = {}
Style13Wrapper[STYLE_OBJECT] = {...Style13}
Style13Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style13Wrapper[PATH_STYLE] = Style13Path
regularTooltipStyles.push(Style13Wrapper)

const Style14 = JSON.parse(JSON.stringify(Style12))
Style14[ICON_COMPONENT].justifyContent = "center"

const Style14Path = {}

Style14Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style14Path[POSITION_ATTRIBUTE] = ARROW_BOTTOM;
Style14Path[ALIGNMENT_ATTRIBUTE] = MIDDLE_OPTION;
Style14Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style14Path[LINES_ATTRIBUTE] = MULTI_LINE_OPTION;

const Style14Wrapper = {}
Style14Wrapper[STYLE_OBJECT] = {...Style14}
Style14Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style14Wrapper[PATH_STYLE] = Style14Path
regularTooltipStyles.push(Style14Wrapper)

const Style15 = JSON.parse(JSON.stringify(Style12))
Style15[WRAPPER_COMPONENT].flexDirection = 'row-reverse'
Style15[WRAPPER_COMPONENT].alignItems = 'center'
Style15[ICON_COMPONENT].transform = "rotate(90deg)"
Style15[ICON_COMPONENT].padding = "8px 0px"
Style15[ICON_COMPONENT].display = "unset"
Style15[ICON_COMPONENT].height = "16px"
const Style15Path = {}

Style15Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style15Path[POSITION_ATTRIBUTE] = ARROW_RIGHT;
Style15Path[ALIGNMENT_ATTRIBUTE] = MIDDLE_OPTION;
Style15Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style15Path[LINES_ATTRIBUTE] = MULTI_LINE_OPTION;

const Style15Wrapper = {}
Style15Wrapper[STYLE_OBJECT] = {...Style15}
Style15Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style15Wrapper[PATH_STYLE] = Style15Path
regularTooltipStyles.push(Style15Wrapper)

const Style16 = JSON.parse(JSON.stringify(Style15))
Style16[WRAPPER_COMPONENT].alignItems = 'end'
const Style16Path = {}

Style16Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style16Path[POSITION_ATTRIBUTE] = ARROW_RIGHT;
Style16Path[ALIGNMENT_ATTRIBUTE] = END_OPTION;
Style16Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style16Path[LINES_ATTRIBUTE] = MULTI_LINE_OPTION;

const Style16Wrapper = {}
Style16Wrapper[STYLE_OBJECT] = {...Style16}
Style16Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style16Wrapper[PATH_STYLE] = Style16Path
regularTooltipStyles.push(Style16Wrapper)

const Style17 = JSON.parse(JSON.stringify(Style15))
Style17[WRAPPER_COMPONENT].alignItems = 'start'
const Style17Path = {}

Style17Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style17Path[POSITION_ATTRIBUTE] = ARROW_RIGHT;
Style17Path[ALIGNMENT_ATTRIBUTE] = START_OPTION;
Style17Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style17Path[LINES_ATTRIBUTE] = MULTI_LINE_OPTION;

const Style17Wrapper = {}
Style17Wrapper[STYLE_OBJECT] = {...Style17}
Style17Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style17Wrapper[PATH_STYLE] = Style17Path
regularTooltipStyles.push(Style17Wrapper)


const Style18 = JSON.parse(JSON.stringify(Style15))
Style18[ICON_COMPONENT].transform = "rotate(270deg)"
Style18[ICON_COMPONENT].padding = "8px 0px"
Style18[WRAPPER_COMPONENT].flexDirection = 'row'

const Style18Path = {}

Style18Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style18Path[POSITION_ATTRIBUTE] = ARROW_LEFT;
Style18Path[ALIGNMENT_ATTRIBUTE] = MIDDLE_OPTION;
Style18Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style18Path[LINES_ATTRIBUTE] = MULTI_LINE_OPTION;

const Style18Wrapper = {}
Style18Wrapper[STYLE_OBJECT] = {...Style18}
Style18Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style18Wrapper[PATH_STYLE] = Style18Path
regularTooltipStyles.push(Style18Wrapper)

const Style19 = JSON.parse(JSON.stringify(Style18))
Style19[WRAPPER_COMPONENT].alignItems = 'start'

const Style19Path = {}

Style19Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style19Path[POSITION_ATTRIBUTE] = ARROW_LEFT;
Style19Path[ALIGNMENT_ATTRIBUTE] = START_OPTION;
Style19Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style19Path[LINES_ATTRIBUTE] = MULTI_LINE_OPTION;

const Style19Wrapper = {}
Style19Wrapper[STYLE_OBJECT] = {...Style19}
Style19Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style19Wrapper[PATH_STYLE] = Style19Path
regularTooltipStyles.push(Style19Wrapper)

const Style20 = JSON.parse(JSON.stringify(Style18))
Style20[WRAPPER_COMPONENT].alignItems = 'end'

const Style20Path = {}

Style20Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style20Path[POSITION_ATTRIBUTE] = ARROW_LEFT;
Style20Path[ALIGNMENT_ATTRIBUTE] = END_OPTION;
Style20Path[SHOW_SIMPLE_OR_COMPLEX] = SIMPLE_OPTION;
Style20Path[LINES_ATTRIBUTE] = MULTI_LINE_OPTION;

const Style20Wrapper = {}
Style20Wrapper[STYLE_OBJECT] = {...Style20}
Style20Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TOOLTIP_VARIANT
Style20Wrapper[PATH_STYLE] = Style20Path
regularTooltipStyles.push(Style20Wrapper)


const regularTooltipDarkStyles = []
regularTooltipStyles.forEach((style, index)=> {
    regularTooltipDarkStyles.push(JSON.parse(JSON.stringify(style)))
    regularTooltipDarkStyles[index][STYLE_OBJECT][CONTENT_WRAPPER].backgroundColor = BACKGROUND_01
    regularTooltipDarkStyles[index][STYLE_OBJECT][CONTENT_COMPONENT].backgroundColor = BACKGROUND_01
    regularTooltipDarkStyles[index][STYLE_OBJECT][CONTENT_COMPONENT].color = TYPOGRAPHY_04
    regularTooltipDarkStyles[index][STYLE_OBJECT][PATH_SUBCOMPONENT][SVG_ATTRIBUTES].fill = BACKGROUND_01
    regularTooltipDarkStyles[index][PATH_STYLE][COLOR_ATTRIBUTE] = LIGHT_OPTION
    
})

regularTooltipStyles.push(...regularTooltipDarkStyles)


export  {regularTooltipStyles};

