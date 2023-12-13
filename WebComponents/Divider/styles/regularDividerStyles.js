import {PATH_STYLE,
    STYLE_OBJECT,
    COMPONENT_VARIANT_KEY,
    BRAND_BONE_13} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {THEME_ATTRIBUTE,
    COLOR_ATTRIBUTE,
    } from "../constants.js"
import {REGULAR_DIVIDER_VARIANT} from "../constants.js"
//import {DEFAULT_OPTION} from "../constants.js"
import {WHITE_OPTION, GREY_OPTION, BLACK_OPTION} from "../constants.js"
import {LIGHT_OPTION, DARK_OPTION} from "../constants.js"
import {DIVIDER} from "../constants.js"
import { BACKGROUND_01, DARK_GREY,WHITE, 
    } from "../../commonMethodsAndConstants/Styles/commonConstants.js"

// CONTAINER_WRAPPER

const regularDividerStyles = []
const Style1 = {}

Style1[DIVIDER] = {
    margin: "5px 20px",
    cursor: "default",
    overflow: "auto",
    backgroundColor: WHITE,
    width: "border-box",
    height: "1px"
}


const Style1Path = {}
Style1Path[THEME_ATTRIBUTE] = DARK_OPTION;
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION;
const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_DIVIDER_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
regularDividerStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[DIVIDER].backgroundColor=BRAND_BONE_13
const Style2Path = {}
Style2Path[THEME_ATTRIBUTE] = DARK_OPTION;
Style2Path[COLOR_ATTRIBUTE] = GREY_OPTION;
const Style2Wrapper = {}
Style2Wrapper[STYLE_OBJECT] = {...Style2}
Style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_DIVIDER_VARIANT
Style2Wrapper[PATH_STYLE] = Style2Path
regularDividerStyles.push(Style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[DIVIDER].backgroundColor=BACKGROUND_01
const Style3Path = {}
Style3Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style3Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
const Style3Wrapper = {}
Style3Wrapper[STYLE_OBJECT] = {...Style3}
Style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_DIVIDER_VARIANT
Style3Wrapper[PATH_STYLE] = Style3Path
regularDividerStyles.push(Style3Wrapper)

const Style4 = JSON.parse(JSON.stringify(Style2))
Style4[DIVIDER].backgroundColor=DARK_GREY
const Style4Path = {}
Style4Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style4Path[COLOR_ATTRIBUTE] = GREY_OPTION;

const Style4Wrapper = {}
Style4Wrapper[STYLE_OBJECT] = {...Style4}
Style4Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_DIVIDER_VARIANT
Style4Wrapper[PATH_STYLE] = Style4Path
regularDividerStyles.push(Style4Wrapper)



export {regularDividerStyles}