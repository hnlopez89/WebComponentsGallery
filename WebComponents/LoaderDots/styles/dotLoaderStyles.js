import {PATH_STYLE, STYLE_OBJECT, COMPONENT_VARIANT_KEY,} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {DOTS_LOADER_VARIANT} from "../constants.js"
import {THEME_ATTRIBUTE, SIZE_ATTRIBUTE,TYPE_DETAIL_ATTRIBUTE } from "../constants.js"
import {LARGE_OPTION,MEDIUM_OPTION,SMALL_OPTION } from "../constants.js"
import {DARK_OPTION, LIGHT_OPTION} from "../constants.js"
import {OFF_OPTION, ON_OPTION} from "../constants.js"
import { SVG_ATTRIBUTES, SVG_TYPE, SVG_STYLES } from "../constants.js";
import {COMPONENT_WRAPPER,ICON_SUBCOMPONENT,SVG_SUBCOMPONENT,PATH_SUBCOMPONENT,} from "../constants.js"
import { BACKGROUND_03, BACKGROUND_01, TYPOGRAPHY_01, TYPOGRAPHY_03 } from "../../commonMethodsAndConstants/Styles/commonConstants.js";

// CONTAINER_SLOT_WRAPPER
// COMPONENT_WRAPPER
// I----------->ICON_SUBCOMPONENT
// I---------------->SVG_SUBCOMPONENT
// I-------------------->PATH_SUBCOMPONENT
// I----------->ICON_SUBCOMPONENT
// I---------------->SVG_SUBCOMPONENT
// I-------------------->PATH_SUBCOMPONENT
// I----------->ICON_SUBCOMPONENT
// I---------------->SVG_SUBCOMPONENT
// I-------------------->PATH_SUBCOMPONENT
const dotLoaderStyles = []

const Style1 = {}


Style1[COMPONENT_WRAPPER] = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "3",
    width: "200px",
    height: "200px",
    backgroundColor: BACKGROUND_03,
    backgroundColor: "rgba(255, 255, 255, 0.85);",
}

Style1[ICON_SUBCOMPONENT] = {
    width: "16px",
    height: "16px",
    borderRadius: "16px 16px",
    margin: "0px 2px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}
Style1[SVG_SUBCOMPONENT] = {}

Style1[SVG_SUBCOMPONENT][SVG_ATTRIBUTES] = {
    width:"16",
    height:"16",
    viewBox:"0 0 16 16",
    shapeRendering:"geometricPrecision",
    textRendering:"geometricPrecision"
}
Style1[SVG_SUBCOMPONENT][SVG_ATTRIBUTES][SVG_TYPE] = "svg"
Style1[SVG_SUBCOMPONENT][SVG_STYLES] = {}

Style1[PATH_SUBCOMPONENT] = {}
  
Style1[PATH_SUBCOMPONENT][SVG_ATTRIBUTES] = {
    cx:"8",
    cy:"8",
    r:"8",
    fill: TYPOGRAPHY_01,
    strokeWidth:"0",
}

Style1[PATH_SUBCOMPONENT][SVG_ATTRIBUTES][SVG_TYPE] = "circle"
Style1[PATH_SUBCOMPONENT][SVG_STYLES] = {}


const Style1Path = {}
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style1Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style1Path[TYPE_DETAIL_ATTRIBUTE] = ON_OPTION;

const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = DOTS_LOADER_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
dotLoaderStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))

Style2[COMPONENT_WRAPPER].width = "160px"
Style2[COMPONENT_WRAPPER].height = "160px"
Style2[ICON_SUBCOMPONENT].width = "12px"
Style2[ICON_SUBCOMPONENT].height = "12px"
Style2[SVG_SUBCOMPONENT][SVG_ATTRIBUTES].width ="12"
Style2[SVG_SUBCOMPONENT][SVG_ATTRIBUTES].height="12"
Style2[SVG_SUBCOMPONENT][SVG_ATTRIBUTES].viewBox="0 0 12 12"
Style2[PATH_SUBCOMPONENT][SVG_ATTRIBUTES].cx="6"
Style2[PATH_SUBCOMPONENT][SVG_ATTRIBUTES].cy="6"
Style2[PATH_SUBCOMPONENT][SVG_ATTRIBUTES].r="6"


const Style2Path = {}
Style2Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style2Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style2Path[TYPE_DETAIL_ATTRIBUTE] = ON_OPTION;

const Style2Wrapper = {}
Style2Wrapper[STYLE_OBJECT] = {...Style2}
Style2Wrapper[COMPONENT_VARIANT_KEY] = DOTS_LOADER_VARIANT
Style2Wrapper[PATH_STYLE] = Style2Path
dotLoaderStyles.push(Style2Wrapper)


const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[COMPONENT_WRAPPER].width = "80px"
Style3[COMPONENT_WRAPPER].height = "80px"
Style3[ICON_SUBCOMPONENT].width = "8px"
Style3[ICON_SUBCOMPONENT].height = "8px"
Style3[ICON_SUBCOMPONENT].margin = "0px 1px"
Style3[SVG_SUBCOMPONENT][SVG_ATTRIBUTES].width ="8"
Style3[SVG_SUBCOMPONENT][SVG_ATTRIBUTES].height="8"
Style3[SVG_SUBCOMPONENT][SVG_ATTRIBUTES].viewBox="0 0 8 8"
Style3[PATH_SUBCOMPONENT][SVG_ATTRIBUTES].cx="4"
Style3[PATH_SUBCOMPONENT][SVG_ATTRIBUTES].cy="4"
Style3[PATH_SUBCOMPONENT][SVG_ATTRIBUTES].r="4"


const Style3Path = {}
Style3Path[SIZE_ATTRIBUTE] = SMALL_OPTION;
Style3Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style3Path[TYPE_DETAIL_ATTRIBUTE] = ON_OPTION;

const Style3Wrapper = {}
Style3Wrapper[STYLE_OBJECT] = {...Style3}
Style3Wrapper[COMPONENT_VARIANT_KEY] = DOTS_LOADER_VARIANT
Style3Wrapper[PATH_STYLE] = Style3Path
dotLoaderStyles.push(Style3Wrapper)

const dotLoaderDarkStyles = []
dotLoaderStyles.forEach((style,index) => {
    dotLoaderDarkStyles.push(JSON.parse(JSON.stringify(style)))
    dotLoaderDarkStyles[index][STYLE_OBJECT][COMPONENT_WRAPPER].backgroundColor = BACKGROUND_01
    dotLoaderDarkStyles[index][STYLE_OBJECT][PATH_SUBCOMPONENT][SVG_ATTRIBUTES].fill = TYPOGRAPHY_03
    dotLoaderDarkStyles[index][PATH_STYLE][THEME_ATTRIBUTE] = DARK_OPTION
})
dotLoaderStyles.push(...dotLoaderDarkStyles)

const dotLoaderBackground = []
dotLoaderStyles.forEach((style,index) => {
    dotLoaderBackground.push(JSON.parse(JSON.stringify(style)))
    dotLoaderBackground[index][STYLE_OBJECT][COMPONENT_WRAPPER].backgroundColor = 'unset'
    dotLoaderBackground[index][STYLE_OBJECT][COMPONENT_WRAPPER].width = 'unset'
    dotLoaderBackground[index][STYLE_OBJECT][COMPONENT_WRAPPER].height = 'unset'
    dotLoaderBackground[index][PATH_STYLE][TYPE_DETAIL_ATTRIBUTE] = OFF_OPTION
})
dotLoaderStyles.push(...dotLoaderBackground)
export  {dotLoaderStyles};