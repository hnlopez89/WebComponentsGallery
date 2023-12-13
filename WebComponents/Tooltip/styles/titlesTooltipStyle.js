import {PATH_STYLE,
    STYLE_OBJECT,
    COMPONENT_VARIANT_KEY,
    TYPOGRAPHY_03} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { BACKGROUND_02, TYPOGRAPHY_02, TYPOGRAPHY_01, BACKGROUND_01, TYPOGRAPHY_04 } from '../../commonMethodsAndConstants/Styles/commonConstants.js';
import { COLOR_ATTRIBUTE,POSITION_ATTRIBUTE, ALIGNMENT_ATTRIBUTE, SHOW_SIMPLE_OR_COMPLEX, BUTTON_NUMBER_ATTRIBUTE } from "../constants.js";
import { DARK_OPTION, LIGHT_OPTION } from "../constants.js";
import { ZERO_BUTTON_OPTION} from "../constants.js";
import { ARROW_BOTTOM, ARROW_LEFT, ARROW_RIGHT, ARROW_TOP } from "../constants.js";
import { START_OPTION, MIDDLE_OPTION, END_OPTION, COMPLEX_OPTION } from "../constants.js";
import { TITLES_TOOLTIP_VARIANT } from "../constants.js";
import { WRAPPER_COMPONENT,  SLOT_COMPONENT, CONTAINER_SLOT_WRAPPER, ICON_COMPONENT, CONTENT_COMPONENT, CONTENT_WRAPPER,
        SVG_SUBCOMPONENT, PATH_SUBCOMPONENT, SUBTITLE_COMPONENT, TITLE_COMPONENT } from "../constants.js";
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
//                                            I----------->TITLE_COMPONENT
//                                            I----------->SUBTITLE_COMPONENT

const titlesTooltipStyles = []
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
    background: BACKGROUND_02,
    color: TYPOGRAPHY_02,
    height: "auto",
    fontSize: "12px",
    lineHight: "16px",
    fontFamily: "Roboto, Sans-Serif",
    fontWeight: "400",
}

Style1[TITLE_COMPONENT]= {
height: "auto",
fontFamily: "Roboto, Sans-Serif",
fontWeight: "500",
color: TYPOGRAPHY_01,
display: "-webkit-box",
overflow:'hidden',
whiteSpace: "initial",
textOverflow: "ellipsis",
"-webkit-line-clamp": "2",
"line-clamp": "2",
"-webkit-box-orient": "vertical",

}
Style1[SUBTITLE_COMPONENT]= {
    paddingTop: "4px",
    display: "-webkit-box",
overflow:'hidden',
whiteSpace: "initial",
textOverflow: "ellipsis",
"-webkit-line-clamp": "4",
"line-clamp": "4",
"-webkit-box-orient": "vertical",

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
Style1Path[SHOW_SIMPLE_OR_COMPLEX] = COMPLEX_OPTION;
Style1Path[POSITION_ATTRIBUTE] = ARROW_TOP;
Style1Path[ALIGNMENT_ATTRIBUTE] = START_OPTION;
Style1Path[BUTTON_NUMBER_ATTRIBUTE] = ZERO_BUTTON_OPTION;

const Style1Wrapper = {}
Style1Wrapper[STYLE_OBJECT] = {...Style1}
Style1Wrapper[COMPONENT_VARIANT_KEY] = TITLES_TOOLTIP_VARIANT
Style1Wrapper[PATH_STYLE] = Style1Path
titlesTooltipStyles.push(Style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[ICON_COMPONENT].flexDirection = "row-reverse"

const Style2Path = {}

Style2Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style2Path[SHOW_SIMPLE_OR_COMPLEX] = COMPLEX_OPTION;
Style2Path[POSITION_ATTRIBUTE] = ARROW_TOP;
Style2Path[ALIGNMENT_ATTRIBUTE] = END_OPTION;
Style2Path[BUTTON_NUMBER_ATTRIBUTE] = ZERO_BUTTON_OPTION;

const Style2Wrapper = {}
Style2Wrapper[STYLE_OBJECT] = {...Style2}
Style2Wrapper[COMPONENT_VARIANT_KEY] = TITLES_TOOLTIP_VARIANT
Style2Wrapper[PATH_STYLE] = Style2Path
titlesTooltipStyles.push(Style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[ICON_COMPONENT].justifyContent = "center"

const Style3Path = {}

Style3Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style3Path[SHOW_SIMPLE_OR_COMPLEX] = COMPLEX_OPTION;
Style3Path[POSITION_ATTRIBUTE] = ARROW_TOP;
Style3Path[ALIGNMENT_ATTRIBUTE] = MIDDLE_OPTION;
Style3Path[BUTTON_NUMBER_ATTRIBUTE] = ZERO_BUTTON_OPTION;
const Style3Wrapper = {}
Style3Wrapper[STYLE_OBJECT] = {...Style3}
Style3Wrapper[COMPONENT_VARIANT_KEY] = TITLES_TOOLTIP_VARIANT
Style3Wrapper[PATH_STYLE] = Style3Path
titlesTooltipStyles.push(Style3Wrapper)

const Style4 = JSON.parse(JSON.stringify(Style1))
Style4[WRAPPER_COMPONENT].display = 'flex'
Style4[WRAPPER_COMPONENT].flexDirection = 'column-reverse'
Style4[ICON_COMPONENT].transform = "rotate(180deg)"

const Style4Path = {}

Style4Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style4Path[SHOW_SIMPLE_OR_COMPLEX] = COMPLEX_OPTION;
Style4Path[POSITION_ATTRIBUTE] = ARROW_BOTTOM;
Style4Path[ALIGNMENT_ATTRIBUTE] = END_OPTION;
Style4Path[BUTTON_NUMBER_ATTRIBUTE] = ZERO_BUTTON_OPTION;

const Style4Wrapper = {}
Style4Wrapper[STYLE_OBJECT] = {...Style4}
Style4Wrapper[COMPONENT_VARIANT_KEY] = TITLES_TOOLTIP_VARIANT
Style4Wrapper[PATH_STYLE] = Style4Path
titlesTooltipStyles.push(Style4Wrapper)

const Style5 = JSON.parse(JSON.stringify(Style4))
Style5[ICON_COMPONENT].flexDirection = "row-reverse"

const Style5Path = {}

Style5Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style5Path[SHOW_SIMPLE_OR_COMPLEX] = COMPLEX_OPTION;
Style5Path[POSITION_ATTRIBUTE] = ARROW_BOTTOM;
Style5Path[ALIGNMENT_ATTRIBUTE] = START_OPTION;
Style5Path[BUTTON_NUMBER_ATTRIBUTE] = ZERO_BUTTON_OPTION;
const Style5Wrapper = {}
Style5Wrapper[STYLE_OBJECT] = {...Style5}
Style5Wrapper[COMPONENT_VARIANT_KEY] = TITLES_TOOLTIP_VARIANT
Style5Wrapper[PATH_STYLE] = Style5Path
titlesTooltipStyles.push(Style5Wrapper)

const Style6 = JSON.parse(JSON.stringify(Style4))
Style6[ICON_COMPONENT].justifyContent = "center"

const Style6Path = {}

Style6Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style6Path[SHOW_SIMPLE_OR_COMPLEX] = COMPLEX_OPTION;
Style6Path[POSITION_ATTRIBUTE] = ARROW_BOTTOM;
Style6Path[ALIGNMENT_ATTRIBUTE] = MIDDLE_OPTION;
Style6Path[BUTTON_NUMBER_ATTRIBUTE] = ZERO_BUTTON_OPTION;

const Style6Wrapper = {}
Style6Wrapper[STYLE_OBJECT] = {...Style6}
Style6Wrapper[COMPONENT_VARIANT_KEY] = TITLES_TOOLTIP_VARIANT
Style6Wrapper[PATH_STYLE] = Style6Path
titlesTooltipStyles.push(Style6Wrapper)

const Style7 = JSON.parse(JSON.stringify(Style4))
Style7[WRAPPER_COMPONENT].flexDirection = 'row-reverse'
Style7[WRAPPER_COMPONENT].alignItems = 'center'
Style7[ICON_COMPONENT].transform = "rotate(90deg)"
Style7[ICON_COMPONENT].padding = "8px 0px"
Style7[ICON_COMPONENT].display = "unset"
Style7[ICON_COMPONENT].height = "16px"
const Style7Path = {}

Style7Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style7Path[SHOW_SIMPLE_OR_COMPLEX] = COMPLEX_OPTION;
Style7Path[POSITION_ATTRIBUTE] = ARROW_RIGHT;
Style7Path[ALIGNMENT_ATTRIBUTE] = MIDDLE_OPTION;
Style7Path[BUTTON_NUMBER_ATTRIBUTE] = ZERO_BUTTON_OPTION;

const Style7Wrapper = {}
Style7Wrapper[STYLE_OBJECT] = {...Style7}
Style7Wrapper[COMPONENT_VARIANT_KEY] = TITLES_TOOLTIP_VARIANT
Style7Wrapper[PATH_STYLE] = Style7Path
titlesTooltipStyles.push(Style7Wrapper)

const Style8 = JSON.parse(JSON.stringify(Style7))
Style8[WRAPPER_COMPONENT].alignItems = 'end'
const Style8Path = {}

Style8Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style8Path[SHOW_SIMPLE_OR_COMPLEX] = COMPLEX_OPTION;
Style8Path[POSITION_ATTRIBUTE] = ARROW_RIGHT;
Style8Path[ALIGNMENT_ATTRIBUTE] = END_OPTION;
Style8Path[BUTTON_NUMBER_ATTRIBUTE] = ZERO_BUTTON_OPTION;

const Style8Wrapper = {}
Style8Wrapper[STYLE_OBJECT] = {...Style8}
Style8Wrapper[COMPONENT_VARIANT_KEY] = TITLES_TOOLTIP_VARIANT
Style8Wrapper[PATH_STYLE] = Style8Path
titlesTooltipStyles.push(Style8Wrapper)

const Style9 = JSON.parse(JSON.stringify(Style7))
Style9[WRAPPER_COMPONENT].alignItems = 'start'
const Style9Path = {}

Style9Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style9Path[SHOW_SIMPLE_OR_COMPLEX] = COMPLEX_OPTION;
Style9Path[POSITION_ATTRIBUTE] = ARROW_RIGHT;
Style9Path[ALIGNMENT_ATTRIBUTE] = START_OPTION;
Style9Path[BUTTON_NUMBER_ATTRIBUTE] = ZERO_BUTTON_OPTION;

const Style9Wrapper = {}
Style9Wrapper[STYLE_OBJECT] = {...Style9}
Style9Wrapper[COMPONENT_VARIANT_KEY] = TITLES_TOOLTIP_VARIANT
Style9Wrapper[PATH_STYLE] = Style9Path
titlesTooltipStyles.push(Style9Wrapper)


const Style10 = JSON.parse(JSON.stringify(Style7))
Style10[ICON_COMPONENT].transform = "rotate(270deg)"
Style10[ICON_COMPONENT].padding = "8px 0px"
Style10[WRAPPER_COMPONENT].flexDirection = 'row'

const Style10Path = {}

Style10Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style10Path[SHOW_SIMPLE_OR_COMPLEX] = COMPLEX_OPTION;
Style10Path[POSITION_ATTRIBUTE] = ARROW_LEFT;
Style10Path[ALIGNMENT_ATTRIBUTE] = MIDDLE_OPTION;
Style10Path[BUTTON_NUMBER_ATTRIBUTE] = ZERO_BUTTON_OPTION;

const Style10Wrapper = {}
Style10Wrapper[STYLE_OBJECT] = {...Style10}
Style10Wrapper[COMPONENT_VARIANT_KEY] = TITLES_TOOLTIP_VARIANT
Style10Wrapper[PATH_STYLE] = Style10Path
titlesTooltipStyles.push(Style10Wrapper)

const Style11 = JSON.parse(JSON.stringify(Style10))
Style11[WRAPPER_COMPONENT].alignItems = 'start'

const Style11Path = {}

Style11Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style11Path[SHOW_SIMPLE_OR_COMPLEX] = COMPLEX_OPTION;
Style11Path[POSITION_ATTRIBUTE] = ARROW_LEFT;
Style11Path[ALIGNMENT_ATTRIBUTE] = START_OPTION;
Style11Path[BUTTON_NUMBER_ATTRIBUTE] = ZERO_BUTTON_OPTION;
const Style11Wrapper = {}
Style11Wrapper[STYLE_OBJECT] = {...Style11}
Style11Wrapper[COMPONENT_VARIANT_KEY] = TITLES_TOOLTIP_VARIANT
Style11Wrapper[PATH_STYLE] = Style11Path
titlesTooltipStyles.push(Style11Wrapper)

const Style12 = JSON.parse(JSON.stringify(Style10))
Style12[WRAPPER_COMPONENT].alignItems = 'end'

const Style12Path = {}

Style12Path[COLOR_ATTRIBUTE] = DARK_OPTION;
Style12Path[SHOW_SIMPLE_OR_COMPLEX] = COMPLEX_OPTION;
Style12Path[POSITION_ATTRIBUTE] = ARROW_LEFT;
Style12Path[ALIGNMENT_ATTRIBUTE] = END_OPTION;
Style12Path[BUTTON_NUMBER_ATTRIBUTE] = ZERO_BUTTON_OPTION;
const Style12Wrapper = {}
Style12Wrapper[STYLE_OBJECT] = {...Style12}
Style12Wrapper[COMPONENT_VARIANT_KEY] = TITLES_TOOLTIP_VARIANT
Style12Wrapper[PATH_STYLE] = Style12Path
titlesTooltipStyles.push(Style12Wrapper)

const titlesTooltipDarkStyles = []
titlesTooltipStyles.forEach((style, index)=> {
    titlesTooltipDarkStyles.push(JSON.parse(JSON.stringify(style)))
    titlesTooltipDarkStyles[index][STYLE_OBJECT][TITLE_COMPONENT].color = TYPOGRAPHY_03
    titlesTooltipDarkStyles[index][STYLE_OBJECT][SUBTITLE_COMPONENT].color = TYPOGRAPHY_04
    titlesTooltipDarkStyles[index][STYLE_OBJECT][CONTENT_WRAPPER].backgroundColor = BACKGROUND_01
    titlesTooltipDarkStyles[index][STYLE_OBJECT][CONTENT_COMPONENT].backgroundColor = BACKGROUND_01
    titlesTooltipDarkStyles[index][STYLE_OBJECT][PATH_SUBCOMPONENT][SVG_ATTRIBUTES].fill = BACKGROUND_01
    titlesTooltipDarkStyles[index][PATH_STYLE][COLOR_ATTRIBUTE] = LIGHT_OPTION
})

titlesTooltipStyles.push(...titlesTooltipDarkStyles)

export  {titlesTooltipStyles};