import {PATH_STYLE,
    STYLE_OBJECT,
    COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {CLOSE_ATTRIBUTE, COLOR_ATTRIBUTE, ICON_ATTRIBUTE, POSITION_ICON_ATTRIBUTE, RIGHT_ICON_POSITION_OPTION} from "../constants.js"
import {ON_ICON_OPTION, NO_CLOSE_OPTION} from "../constants.js"
import {TEXT_CONTAINER, CONTAINER_SLOT_WRAPPER, ICON_SUBCOMPONENT} from "../constants.js"
import {REGULAR_TAGS_ICON_RIGHT_VARIANT} from "../constants.js"
import {ICON_COLOR_ATTRIBUTE, 
        ICON_HEIGHT_ATTRIBUTE,
        ICON_WIDTH_ATTRIBUTE} from "../../Icons/constants.js"
import {CONTAINER_BUTTON_PILL} from "../constants.js"
import {COLOR_ORANGE, COLOR_ATLANTIC, COLOR_CLAY,  COLOR_GREY, COLOR_DESSERT, COLOR_WHITE, COLOR_BLACK } from "../constants.js"
import {ALERT_ORANGE_7 as ORANGE,
    BRAND_CLAY_10,
    BRAND_ATLANTIC_10,
    BRAND_BONE_10,
    DARK_GREY,
    BLACK, WHITE
    } from "../../commonMethodsAndConstants/Styles/commonConstants.js"


const regularTagsIconRightStyles = []
const Style1 = {}
Style1[CONTAINER_SLOT_WRAPPER] = {
    display: "none"
}
Style1[CONTAINER_BUTTON_PILL] = {
display:"flex",
alignItems: "flex-start",
boxSizing: "border-box",
padding: "4px 8px",
height: "24px",
width:"fit-content",
background: BLACK,
borderRadius: "2px",
}



Style1[TEXT_CONTAINER] = {
    height:"100%",
    boxSizing: "border-box",
    width:"fit-content",
    fontFamily: 'Roboto, Sans-Serif',
    fontStyle: "normal",
    fontWeight: "350",
    fontSize: "14px",
    lineHeight: "16px",
    color: WHITE,
    marginRight: "4px",
    userSelect: "none"
}

Style1[ICON_SUBCOMPONENT] = {}
Style1[ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE]=WHITE
Style1[ICON_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE]="16px"
Style1[ICON_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE]="16px"
const Style1Path = {}

Style1Path[COLOR_ATTRIBUTE] = COLOR_BLACK;
Style1Path[ICON_ATTRIBUTE] = ON_ICON_OPTION;
Style1Path[CLOSE_ATTRIBUTE] = NO_CLOSE_OPTION;
Style1Path[POSITION_ICON_ATTRIBUTE] = RIGHT_ICON_POSITION_OPTION;


const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TAGS_ICON_RIGHT_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
regularTagsIconRightStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[CONTAINER_BUTTON_PILL].background = WHITE
Style2[TEXT_CONTAINER].color = BLACK
Style2[ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE]=BLACK


const Style2Path = {}
Style2Path[COLOR_ATTRIBUTE] = COLOR_WHITE;
Style2Path[ICON_ATTRIBUTE] = ON_ICON_OPTION;
Style2Path[CLOSE_ATTRIBUTE] = NO_CLOSE_OPTION;
Style2Path[POSITION_ICON_ATTRIBUTE] = RIGHT_ICON_POSITION_OPTION;


const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TAGS_ICON_RIGHT_VARIANT
style2Wrapper[PATH_STYLE] = Style2Path
regularTagsIconRightStyles.push(style2Wrapper)


const Style3 = JSON.parse(JSON.stringify(Style2))
Style3[CONTAINER_BUTTON_PILL].background = BRAND_BONE_10

const Style3Path = {}
Style3Path[COLOR_ATTRIBUTE] = COLOR_DESSERT;
Style3Path[ICON_ATTRIBUTE] = ON_ICON_OPTION;
Style3Path[CLOSE_ATTRIBUTE] = NO_CLOSE_OPTION;
Style3Path[POSITION_ICON_ATTRIBUTE] = RIGHT_ICON_POSITION_OPTION;

const Style3Wrapper = {}
Style3Wrapper[STYLE_OBJECT] = {...Style3}
Style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TAGS_ICON_RIGHT_VARIANT
Style3Wrapper[PATH_STYLE] = Style3Path
regularTagsIconRightStyles.push(Style3Wrapper)

const Style4 = JSON.parse(JSON.stringify(Style1))
Style4[CONTAINER_BUTTON_PILL].background = BRAND_ATLANTIC_10

const Style4Path = {}
Style4Path[COLOR_ATTRIBUTE] = COLOR_ATLANTIC;
Style4Path[ICON_ATTRIBUTE] = ON_ICON_OPTION;
Style4Path[CLOSE_ATTRIBUTE] = NO_CLOSE_OPTION;
Style4Path[POSITION_ICON_ATTRIBUTE] = RIGHT_ICON_POSITION_OPTION;

const Style4Wrapper = {}
Style4Wrapper[STYLE_OBJECT] = {...Style4}
Style4Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TAGS_ICON_RIGHT_VARIANT
Style4Wrapper[PATH_STYLE] = Style4Path
regularTagsIconRightStyles.push(Style4Wrapper)

const Style5 = JSON.parse(JSON.stringify(Style1))
Style5[CONTAINER_BUTTON_PILL].background = BRAND_CLAY_10

const Style5Path = {}
Style5Path[COLOR_ATTRIBUTE] = COLOR_CLAY;
Style5Path[ICON_ATTRIBUTE] = ON_ICON_OPTION;
Style5Path[CLOSE_ATTRIBUTE] = NO_CLOSE_OPTION;
Style5Path[POSITION_ICON_ATTRIBUTE] = RIGHT_ICON_POSITION_OPTION;

const Style5Wrapper = {}
Style5Wrapper[STYLE_OBJECT] = {...Style5}
Style5Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TAGS_ICON_RIGHT_VARIANT
Style5Wrapper[PATH_STYLE] = Style5Path
regularTagsIconRightStyles.push(Style5Wrapper)

const Style6 = JSON.parse(JSON.stringify(Style1))
Style6[CONTAINER_BUTTON_PILL].background = DARK_GREY

const Style6Path = {}
Style6Path[COLOR_ATTRIBUTE] = COLOR_GREY;
Style6Path[ICON_ATTRIBUTE] = ON_ICON_OPTION;
Style6Path[CLOSE_ATTRIBUTE] = NO_CLOSE_OPTION;
Style6Path[POSITION_ICON_ATTRIBUTE] = RIGHT_ICON_POSITION_OPTION;

const Style6Wrapper = {}
Style6Wrapper[STYLE_OBJECT] = {...Style6}
Style6Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TAGS_ICON_RIGHT_VARIANT
Style6Wrapper[PATH_STYLE] = Style6Path
regularTagsIconRightStyles.push(Style6Wrapper)



const Style7 = JSON.parse(JSON.stringify(Style2))
Style7[CONTAINER_BUTTON_PILL].background = ORANGE

const Style7Path = {}
Style7Path[COLOR_ATTRIBUTE] = COLOR_ORANGE;
Style7Path[ICON_ATTRIBUTE] = ON_ICON_OPTION;
Style7Path[CLOSE_ATTRIBUTE] = NO_CLOSE_OPTION;
Style7Path[POSITION_ICON_ATTRIBUTE] = RIGHT_ICON_POSITION_OPTION;

const Style7Wrapper = {}
Style7Wrapper[STYLE_OBJECT] = {...Style7}
Style7Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TAGS_ICON_RIGHT_VARIANT
Style7Wrapper[PATH_STYLE] = Style7Path
regularTagsIconRightStyles.push(Style7Wrapper)



export  {regularTagsIconRightStyles};