import {PATH_STYLE,
    STYLE_OBJECT,
    COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {THEME_ATTRIBUTE} from "../constants.js"
import { REGULAR_BREADCRUMB } from "../constants.js";
import { SVG_ATTRIBUTES, SVG_TYPE, SVG_STYLES } from "../constants.js";
import {DARK_OPTION, LIGHT_OPTION} from "../constants.js"
import {ACTIVE_OPTION, HOVER_OPTION } from "../constants.js"
import {CONTAINER_SLOT_WRAPPER,
    LABEL_CONTAINER,
    LABEL_SUBCOMPONENT,
    ICON_SUBCOMPONENT,
    SVG_SUBCOMPONENT,
    PATH_SUBCOMPONENT
} from "../constants.js"
import { TYPOGRAPHY_01, TYPOGRAPHY_02,TYPOGRAPHY_03, TYPOGRAPHY_04 } from "../../commonMethodsAndConstants/Styles/commonConstants.js";

// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// LABEL_SUBCOMPONENT
// I----------->ICON_SUBCOMPONENT
// I--------------->SVG_SUBCOMPONENT
// I------------------->PATH_SUBCOMPONENT

const regularBreadcrumbStyles = []
const Style1 = {}
Style1[CONTAINER_SLOT_WRAPPER] = {
display: "none",
}

Style1[LABEL_CONTAINER] = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "0px auto",
    cursor: "default",
    overflow: "hidden",
    width: "border-box",
    fontFamily: "Roboto, Sans-Serif",
    
}
Style1[LABEL_SUBCOMPONENT] = {
    fontSize: "14px",
    lineHeight: "16px",
    color: TYPOGRAPHY_02,
    fontWeight: "400",
    textDecoration: "none",
}
Style1[LABEL_SUBCOMPONENT][ ACTIVE_OPTION] = {
    fontSize: "14px",
    lineHeight: "16px",
    cursor: "default",
    color: TYPOGRAPHY_01,
    fontWeight: "400",
    textDecoration: "none"
    
}
Style1[LABEL_SUBCOMPONENT][ HOVER_OPTION] = {
    cursor: "pointer",
    color: TYPOGRAPHY_01,
}
Style1[ICON_SUBCOMPONENT] = {
width: "20px",
height: "20px",
margin: "0px 4px",
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center"
}
Style1[SVG_SUBCOMPONENT] = {}

Style1[SVG_SUBCOMPONENT][SVG_ATTRIBUTES] = {
width:"20",
height:"20",
viewBox:"0 0 32 32",
fill:"none"
}
Style1[SVG_SUBCOMPONENT][SVG_ATTRIBUTES][SVG_TYPE] = "svg"
Style1[SVG_SUBCOMPONENT][SVG_STYLES] = {}

Style1[PATH_SUBCOMPONENT] = {}

Style1[PATH_SUBCOMPONENT][SVG_ATTRIBUTES] = {
fillRule:"evenodd",
clipRule:"evenodd",
d:`M11.8192 26L20 16.1082V15.8918L11.8192 6L11 6.71186L18.3208 16.001L11 25.2881L11.8192 26Z`,
fill: TYPOGRAPHY_02,
}


Style1[PATH_SUBCOMPONENT][SVG_ATTRIBUTES][SVG_TYPE] = "path"
Style1[PATH_SUBCOMPONENT][SVG_STYLES] = {}

const Style1Path = {}
Style1Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_BREADCRUMB
style1Wrapper[PATH_STYLE] = Style1Path
regularBreadcrumbStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))

Style2[LABEL_SUBCOMPONENT].color = TYPOGRAPHY_04
Style2[LABEL_SUBCOMPONENT][ACTIVE_OPTION].color = TYPOGRAPHY_03
Style2[LABEL_SUBCOMPONENT][HOVER_OPTION].color = TYPOGRAPHY_03
Style2[ICON_SUBCOMPONENT].width = "20px"
Style2[ICON_SUBCOMPONENT].height = "20px"
Style2[SVG_SUBCOMPONENT][SVG_ATTRIBUTES].width ="20"
Style2[SVG_SUBCOMPONENT][SVG_ATTRIBUTES].height ="20"
Style2[SVG_SUBCOMPONENT][SVG_ATTRIBUTES].viewBox ="0 0 32 32"
Style2[SVG_SUBCOMPONENT][SVG_ATTRIBUTES].fill = TYPOGRAPHY_04
Style2[PATH_SUBCOMPONENT][SVG_ATTRIBUTES].d="M11.8192 26L20 16.1082V15.8918L11.8192 6L11 6.71186L18.3208 16.001L11 25.2881L11.8192 26Z"


const Style2Path = {}
Style2Path[THEME_ATTRIBUTE] = DARK_OPTION;
const Style2Wrapper = {}
Style2Wrapper[STYLE_OBJECT] = {...Style2}
Style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_BREADCRUMB
Style2Wrapper[PATH_STYLE] = Style2Path
regularBreadcrumbStyles.push(Style2Wrapper)

export  {regularBreadcrumbStyles};