import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY,} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {PROGRESS_BAR_LOADER_VARIANT} from "../constants.js"
import { THEME_ATTRIBUTE, SIZE_ATTRIBUTE,TYPE_DETAIL_ATTRIBUTE } from "../constants.js"
import {LARGE_OPTION,SMALL_OPTION } from "../constants.js"
import {DARK_OPTION, LIGHT_OPTION} from "../constants.js"
import {DETERMINATED_OPTION, INDETERMINATED_OPTION} from "../constants.js"
import {
    COMPONENT_WRAPPER,
    PROGRESSION_COMPONENT,
    ICON_SUBCOMPONENT,
    SVG_SUBCOMPONENT,
    PATH_SUBCOMPONENT,
    SVG_SUBCOMPONENT_BAR,
    PATH_SUBCOMPONENT_BAR
} from "../constants.js"
import { SVG_ATTRIBUTES, SVG_TYPE, SVG_STYLES } from "../constants.js";
import { BACKGROUND_03, TYPOGRAPHY_01 } from "../../commonMethodsAndConstants/Styles/commonConstants.js";
import { widthProgressBar, widthBar, heightSmallSize, heightLargeSize } from "../constants.js"
// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// CONTAINER_WRAPPER
// I----------->ICON_SUBCOMPONENT
// I--------------->SVG_SUBCOMPONENT
// I------------------->PATH_SUBCOMPONENT
// I----------->PROGRESSION_COMPONENT
// I--------------->SVG_SUBCOMPONENT_BAR
// I------------------->PATH_SUBCOMPONENT_BAR

const progressBarLoaderStyles = []

const Style1 = {}

Style1[COMPONENT_WRAPPER] = {
    width: "border-box",
    height: "border-box",
    borderRadius: "16px", 
    position: "relative"
}

Style1[PROGRESSION_COMPONENT] = {
    width: "border-box",
    height: "border-box",
    position: "absolute",
    zIndex: 0
}

Style1[SVG_SUBCOMPONENT_BAR] = {}

Style1[SVG_SUBCOMPONENT_BAR][SVG_ATTRIBUTES] = {
    width:"0",
    height:heightLargeSize,
    viewBox:"0 0 0 "+ heightLargeSize,
    shapeRendering:"geometricPrecision",
    textRendering:"geometricPrecision"
}
Style1[SVG_SUBCOMPONENT_BAR][SVG_ATTRIBUTES][SVG_TYPE] = "svg"
Style1[SVG_SUBCOMPONENT_BAR][SVG_STYLES] = {}

Style1[PATH_SUBCOMPONENT_BAR] = {}
  
Style1[PATH_SUBCOMPONENT_BAR][SVG_ATTRIBUTES] = {
    width:"0",
    height:heightLargeSize,
    x:"0",
    y:"0",
    fill: TYPOGRAPHY_01,
}

Style1[PATH_SUBCOMPONENT_BAR][SVG_ATTRIBUTES][SVG_TYPE] = "rect"
Style1[PATH_SUBCOMPONENT_BAR][SVG_STYLES] = {}


Style1[ICON_SUBCOMPONENT] = {
    width: "border-box",
    height: "border-box",
    position: "absolute",
    zIndex: 1
}
Style1[SVG_SUBCOMPONENT] = {}

Style1[SVG_SUBCOMPONENT][SVG_ATTRIBUTES] = {
    width:widthBar,
    height:heightLargeSize,
    viewBox:"0 0 " +widthBar+" " + heightLargeSize,
    shapeRendering:"geometricPrecision",
    textRendering:"geometricPrecision"
}
Style1[SVG_SUBCOMPONENT][SVG_ATTRIBUTES][SVG_TYPE] = "svg"
Style1[SVG_SUBCOMPONENT][SVG_STYLES] = {}

Style1[PATH_SUBCOMPONENT] = {}
  
Style1[PATH_SUBCOMPONENT][SVG_ATTRIBUTES] = {
    width:widthBar,
    height:heightLargeSize,
    rx:"0",
    ry:"0",
    fill: "rgba(27,27,27,0.4)",
    strokeWidth:"0",
}

Style1[PATH_SUBCOMPONENT][SVG_ATTRIBUTES][SVG_TYPE] = "rect"
Style1[PATH_SUBCOMPONENT][SVG_STYLES] = {}


const Style1Path = {}
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style1Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style1Path[TYPE_DETAIL_ATTRIBUTE] = DETERMINATED_OPTION;

const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = PROGRESS_BAR_LOADER_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
progressBarLoaderStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))

Style2[SVG_SUBCOMPONENT][SVG_ATTRIBUTES].viewBox="0 0 " +widthBar+ " " + heightSmallSize
Style2[SVG_SUBCOMPONENT][SVG_ATTRIBUTES].height=heightSmallSize
Style2[SVG_SUBCOMPONENT_BAR][SVG_ATTRIBUTES].viewBox="0 0 "+widthProgressBar+ " " + heightSmallSize
Style2[SVG_SUBCOMPONENT_BAR][SVG_ATTRIBUTES].height=heightSmallSize
Style2[PATH_SUBCOMPONENT][SVG_ATTRIBUTES].height=heightSmallSize
Style2[PATH_SUBCOMPONENT_BAR][SVG_ATTRIBUTES].height =heightSmallSize
const Style2Path = {}
Style2Path[SIZE_ATTRIBUTE] = SMALL_OPTION;
Style2Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style2Path[TYPE_DETAIL_ATTRIBUTE] = DETERMINATED_OPTION;

const Style2Wrapper = {}
Style2Wrapper[STYLE_OBJECT] = {...Style2}
Style2Wrapper[COMPONENT_VARIANT_KEY] = PROGRESS_BAR_LOADER_VARIANT
Style2Wrapper[PATH_STYLE] = Style2Path
progressBarLoaderStyles.push(Style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))

const Style3Path = {}
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style3Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style3Path[TYPE_DETAIL_ATTRIBUTE] = INDETERMINATED_OPTION;

const Style3Wrapper = {}
Style3Wrapper[STYLE_OBJECT] = {...Style3}
Style3Wrapper[COMPONENT_VARIANT_KEY] = PROGRESS_BAR_LOADER_VARIANT
Style3Wrapper[PATH_STYLE] = Style3Path
progressBarLoaderStyles.push(Style3Wrapper)


const Style4 = JSON.parse(JSON.stringify(Style2))
const Style4Path = {}
Style4Path[SIZE_ATTRIBUTE] = SMALL_OPTION;
Style4Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style4Path[TYPE_DETAIL_ATTRIBUTE] = INDETERMINATED_OPTION;

const Style4Wrapper = {}
Style4Wrapper[STYLE_OBJECT] = {...Style4}
Style4Wrapper[COMPONENT_VARIANT_KEY] = PROGRESS_BAR_LOADER_VARIANT
Style4Wrapper[PATH_STYLE] = Style4Path
progressBarLoaderStyles.push(Style4Wrapper)

const dotLoaderDarkStyles = []
progressBarLoaderStyles.forEach((style,index) => {
    dotLoaderDarkStyles.push(JSON.parse(JSON.stringify(style)))
    dotLoaderDarkStyles[index][STYLE_OBJECT][PATH_SUBCOMPONENT][SVG_ATTRIBUTES].fill = "rgba(255,255,255,0.4)"
    dotLoaderDarkStyles[index][STYLE_OBJECT][PATH_SUBCOMPONENT_BAR][SVG_ATTRIBUTES].fill = BACKGROUND_03
    dotLoaderDarkStyles[index][PATH_STYLE][THEME_ATTRIBUTE] = DARK_OPTION
})
progressBarLoaderStyles.push(...dotLoaderDarkStyles)
export  {progressBarLoaderStyles};