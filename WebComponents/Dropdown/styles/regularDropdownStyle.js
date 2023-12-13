// SHADOW DOM
// I----------->CONTAINER_SLOT_WRAPPER
// I                I----------->SLOT
// I
// I----------->CONTAINER_SUPER_WRAPPER
//                  I----------->CONTAINER_WRAPPER
//                  I                  I----------->CONTAINER_SUBWRAPPER
//                  I                  I                I----------->TITLE_PLUS_OPTION__SELECTED_SUBCOMPONENT
//                  I                  I                I               I----------->TITLE_SUBCOMPONENT
//                  I                  I                I               I                   I----------->TITLE_ITEM
//                  I                  I                I               I                                   I----------->TITLE_TEXT_NODE
//                  I                  I                I               I----------->OPTION_SELECTED_SUBCOMPONENT
//                  I                  I                I                                   I----------->OPTION_TEXT_NODE
//                  I                  I                I
//                  I                  I                I
//                  I                  I                I----------->ARROW_ICON_SUBCOMPONENT
//                  I                  I                                I----------->ARROW_ICON_CONTAINER
//                  I                  I                                                    I----------->ARROW_ICON_ITEM
//                  I                  I
//                  I                  I----------->OPTION_WRAPPER
//                  I                                   I----------->OPTION_Ni_SUBCOMPONENT
//                  I                                                   I----------->OPTION_Ni_ITEM
//                  I                                                                       I----------->OPTION_TEXT_NODE
//                  I----------->ERROR_WRAPPER
//                                     I----------->ERROR_TEXT_NODE
import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {COLOR_ATTRIBUTE, INACTIVE_OPTION, NORMAL_OPTION, SELECTED_OPTION, SIZE_ATTRIBUTE, STATE_ATTRIBUTE, UNSELECTED_OPTION, OPEN_OPTION} from "../constants.js"
import {DARK_OPTION, 
        LIGHT_OPTION,
        LARGE_OPTION,
        MEDIUM_OPTION } from "../constants.js"
import {REGULAR_DROPDOWN_VARIANT} from "../constants.js"
import {SELECTION_EVENT,
        ERROR_EVENT,
        DEFAULT_EVENT,
        OPEN_EVENT,
        INACTIVE_EVENT,
        HOVER_EVENT} from "../constants.js"
import {CONTAINER_SUPER_WRAPPER,
        CONTAINER_WRAPPER,
        CONTAINER_SLOT_WRAPPER,
        CONTAINER_SUBWRAPPER, 
        TITLE_PLUS_OPTION__SELECTED_SUBCOMPONENT,
        TITLE_SUBCOMPONENT, 
        TITLE_ITEM, 
        OPTION_SELECTED_SUBCOMPONENT, 
        ARROW_ICON_SUBCOMPONENT, 
        ARROW_ICON_CONTAINER, 
        ARROW_ICON_ITEM,
        OPTION_WRAPPER,
        OPTION_Ni_SUBCOMPONENT,
        OPTION_Ni_ITEM,
        ERROR_WRAPPER } from "../constants.js"
import {
        ICON_SELECTION_ATTRIBUTE as ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT, 
        ICON_COLOR_ATTRIBUTE, 
        ICON_HEIGHT_ATTRIBUTE,
        ICON_WIDTH_ATTRIBUTE} from "../../Icons/constants.js"
    import { TYPOGRAPHY_01,
    TYPOGRAPHY_02,
    DARK_GREY,
    MEDIUM_GREY,
    LIGHT_GREY,
    ALERT_GREEN_10,
    TYPOGRAPHY_03,
    TYPOGRAPHY_04,
    WHITE,
    BLACK,
    BACKGROUND_01,
    DANGER_LIGHT_THEME,
    DANGER_DARK_THEME,
    PRIMARY_BUTTON_DARK_INACTIVE,

} from "../../commonMethodsAndConstants/Styles/commonConstants.js"

const regularDropdownStyle = []
const Style1 = {}
Style1[CONTAINER_SUPER_WRAPPER] = {
    position: "relative",
    boxSizing: "border-box",
    width: "100%",
    height: "49px",
    padding: "20px 0px 0px",
}

Style1[CONTAINER_SUPER_WRAPPER][SELECTION_EVENT] = {
    padding: "0px",
}
Style1[CONTAINER_SUPER_WRAPPER][INACTIVE_EVENT] = {
    padding: "20px 0px 0px",
}
Style1[CONTAINER_SUPER_WRAPPER][ERROR_EVENT] = {
    padding: "20px 0px 0px",
    height: "69px",
}
Style1[CONTAINER_WRAPPER] = {
    height: "29px",
    boxSizing: "border-box",
    overflow: "hidden",
    transition: "height 0.2s ease-in-out ",
    padding: "0px 0px 8px",
    border: "0px",
    borderBottom: "1px solid",
    borderColor:  DARK_GREY,
    position: "static",
    width: "100%",
    cursor: "pointer"
}
Style1[CONTAINER_WRAPPER][INACTIVE_EVENT] = {
    cursor: "default",
    borderColor : PRIMARY_BUTTON_DARK_INACTIVE
}

Style1[CONTAINER_WRAPPER][OPEN_EVENT] = {
    padding: "0px",
    position: "absolute",
    top: "20px",
    left: "0px",
    height: "600px",
    border: "1px solid",
    borderColor: MEDIUM_GREY,
    backgroundColor: WHITE,
}
Style1[CONTAINER_WRAPPER][ERROR_EVENT] = {
    padding: "0px 0px 8px",
    position: "static",
    height: "29px",
    border: "0px",
    borderBottom: '1px solid',
    borderColor: DANGER_LIGHT_THEME,
}

Style1[CONTAINER_WRAPPER][SELECTION_EVENT] = {
    padding: "0px 0px 8px",
    height: "49px",
    top:    "0px",
    border: "0px",
    borderBottom: '1px solid',
    borderColor: ALERT_GREEN_10,
}

Style1[CONTAINER_SLOT_WRAPPER] = {
    display: "none",
}

Style1[CONTAINER_SUBWRAPPER] = {
    height: "20px",
    padding: "0px",
    boxSizing: "border-box",
    width: "100%", 
    display: "grid",
    gridTemplateColumns: "auto 20px",
    gridColumnGap: "8px",
    transition: "0.2s all ease-in-out",
}

Style1[CONTAINER_SUBWRAPPER][OPEN_EVENT] = {
    height: "39px",
    padding: "7px 7px 12px",
}
Style1[CONTAINER_SUBWRAPPER][ERROR_EVENT] = {
    height: "20px",
    padding: "0px",
}
Style1[CONTAINER_SUBWRAPPER][SELECTION_EVENT] = {
    height: "40px",
    padding: "0px",
}

Style1[TITLE_PLUS_OPTION__SELECTED_SUBCOMPONENT] = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    overflow: "hidden",
    whiteSpace: "nowrap",
}

Style1[TITLE_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    boxSizing: "border-box",
    width: "100%",
    padding: "0px",
    display: "flex",
    alignItems: "center"
}

Style1[TITLE_SUBCOMPONENT][SELECTION_EVENT] = {
    paddingBottom: "4px"
}
Style1[TITLE_SUBCOMPONENT][OPEN_EVENT] = {
    padding: "0px"
}
Style1[TITLE_ITEM] = {
   
    boxSizing: "border-box",
    width: "100%",
    padding: "0px",
    margin: "0px",
    border: "0px",
    fontFamily: 'Roboto, Sans-Serif',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    color: TYPOGRAPHY_02,
    transition: "0.2s all ease-in-out",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
}
Style1[TITLE_ITEM][INACTIVE_EVENT] = {
    color : TYPOGRAPHY_04
}

Style1[TITLE_ITEM][SELECTION_EVENT] = {
    fontSize: "12px",
    lineHeight: "16px",
    overflow: "hidden",
    whiteSpace: "nowrap",
}
Style1[TITLE_ITEM][OPEN_EVENT] = {
    fontSize: "16px",
    lineHeight: "20px",
    overflow: "hidden",
    whiteSpace: "nowrap",
}
Style1[OPTION_SELECTED_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    width: "100%",
    height: "0px",
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: "Book",
    fontWeight: "350",
    lineHeight: "20px",
    color: TYPOGRAPHY_01,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
}
Style1[OPTION_SELECTED_SUBCOMPONENT][INACTIVE_EVENT] = {display: "none"}
Style1[OPTION_SELECTED_SUBCOMPONENT][ERROR_EVENT] = {display: "none"}

Style1[OPTION_SELECTED_SUBCOMPONENT][SELECTION_EVENT] = {
    fontSize: "16px",
    color: TYPOGRAPHY_01,
    height: "20px",
    display: "initial"
}
Style1[OPTION_SELECTED_SUBCOMPONENT][OPEN_EVENT] = {
    height: "0px",
    fontSize: "0px",
}
Style1[ARROW_ICON_SUBCOMPONENT] = {
    display: "flex",
    alignItems: "flex-end",
    border: "none"
}
Style1[ARROW_ICON_CONTAINER] = {
    paddingBottom: "0px",    
    height: "20px",
    width: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    transition: "0.2s transform ease-in-out",
    transform: "rotate(0deg)",
    border: "none"
}
Style1[ARROW_ICON_CONTAINER][ERROR_EVENT] = {
    transform: "rotate(0deg)",
}

Style1[ARROW_ICON_CONTAINER][SELECTION_EVENT] = {
    transform: "rotate(0deg)",
    border: "none"
}
Style1[ARROW_ICON_CONTAINER][OPEN_EVENT] = {
    paddingTop: "0px",
    transform: "rotate(180deg)",
    border: "none"
}
Style1[ARROW_ICON_ITEM]={}
Style1[ARROW_ICON_ITEM][ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT] = "arrow-down"
Style1[ARROW_ICON_ITEM][ICON_COLOR_ATTRIBUTE]=DARK_GREY
Style1[ARROW_ICON_ITEM][ICON_HEIGHT_ATTRIBUTE]="20px"
Style1[ARROW_ICON_ITEM][ICON_WIDTH_ATTRIBUTE]="20px"
Style1[ARROW_ICON_ITEM][INACTIVE_EVENT]={}
Style1[ARROW_ICON_ITEM][INACTIVE_EVENT][ICON_COLOR_ATTRIBUTE]=DARK_GREY
Style1[ARROW_ICON_ITEM][OPEN_EVENT]={}
Style1[ARROW_ICON_ITEM][OPEN_EVENT][ICON_COLOR_ATTRIBUTE]=DARK_GREY
Style1[ARROW_ICON_ITEM][SELECTION_EVENT]={}
Style1[ARROW_ICON_ITEM][SELECTION_EVENT][ICON_COLOR_ATTRIBUTE]=DARK_GREY



Style1[OPTION_WRAPPER] = {
    display: "none"
}
Style1[OPTION_WRAPPER][ERROR_EVENT]= {
    display: "none"
}
Style1[OPTION_WRAPPER][OPEN_EVENT] = {
    display: "contents"
}
Style1[OPTION_WRAPPER][SELECTION_EVENT] = {
    display: "none"
}
Style1[OPTION_WRAPPER][INACTIVE_EVENT]= {
    display: "none"
}

Style1[OPTION_Ni_SUBCOMPONENT] = {
    width: "100%",
    height: "36px",
    padding: "8px 7px",
    boxSizing: "border-box",
    backgroundColor: WHITE,
}
Style1[OPTION_Ni_SUBCOMPONENT][HOVER_EVENT] = {
    backgroundColor: LIGHT_GREY
}
Style1[OPTION_Ni_ITEM] = {
    width: "100%",
    height: "100%",
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    color: TYPOGRAPHY_01,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
}
Style1[ERROR_WRAPPER] = {
    display: "none",
    width: "100%",
    height: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
}
Style1[ERROR_WRAPPER][ERROR_EVENT] = {
    display: "block",
    height: "18px",
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: "Book",
    fontWeight: "350",
    fontSize: "12px",
    lineHeight: "16px",
    color: DANGER_LIGHT_THEME,
    paddingTop: "4px",
    transition: "0.2s all ease-in-out",
}
Style1[ERROR_WRAPPER][OPEN_EVENT] = {
    display: "none",
    height: "0px",
}
const Style1Path = {}
Style1Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION

const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_DROPDOWN_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
regularDropdownStyle.push(style1Wrapper)


const Style2 = JSON.parse(JSON.stringify(Style1))

const mediumHeight = "25px"
Style2[CONTAINER_SUPER_WRAPPER].height = "45px"
Style2[CONTAINER_SUPER_WRAPPER][ERROR_EVENT] = {
    height: "65px",
}
Style2[CONTAINER_WRAPPER].height = mediumHeight
Style2[CONTAINER_WRAPPER][INACTIVE_EVENT].height = mediumHeight
Style2[CONTAINER_WRAPPER][SELECTION_EVENT].height = "45px"
Style2[CONTAINER_WRAPPER][ERROR_EVENT].height = mediumHeight
Style2[CONTAINER_SUBWRAPPER][OPEN_EVENT] = {
    height: "35px",
    padding: "7px 7px 12px"
}
Style2[CONTAINER_SUBWRAPPER][SELECTION_EVENT].height = "36px",

Style2[CONTAINER_SUBWRAPPER][ERROR_EVENT].height = "16px"
Style2[CONTAINER_SUBWRAPPER].height = "16px"
Style2[CONTAINER_SUBWRAPPER].gridTemplateColumns =  "auto 16px",

Style2[TITLE_ITEM].fontSize = "14px"
Style2[TITLE_ITEM].lineHeight = "16px"
Style2[TITLE_ITEM][INACTIVE_EVENT].fontSize = "14px"
Style2[TITLE_ITEM][INACTIVE_EVENT].lineHeight = "16px"
Style2[TITLE_ITEM][INACTIVE_EVENT].height = "16px"

Style2[TITLE_ITEM][OPEN_EVENT].fontSize = "14px"
Style2[TITLE_ITEM][OPEN_EVENT].lineHeight = "16px"
Style2[TITLE_ITEM][OPEN_EVENT].height = "16px"

Style2[OPTION_SELECTED_SUBCOMPONENT].lineHeight = "16px"
Style2[OPTION_SELECTED_SUBCOMPONENT][SELECTION_EVENT].fontSize = "14px"
Style2[OPTION_SELECTED_SUBCOMPONENT][SELECTION_EVENT].height = "16px"
Style2[OPTION_Ni_ITEM].fontSize = "14px"
Style2[OPTION_Ni_ITEM].lineHeight = "16px"
Style2[OPTION_Ni_SUBCOMPONENT].height = "32px"

Style2[ARROW_ICON_CONTAINER].width = "16px"
Style2[ARROW_ICON_CONTAINER].height = "16px"
Style2[ARROW_ICON_ITEM][ICON_HEIGHT_ATTRIBUTE]="16px"
Style2[ARROW_ICON_ITEM][ICON_WIDTH_ATTRIBUTE]="16px"
const Style2Path = {}
Style2Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style2Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION

const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_DROPDOWN_VARIANT
style2Wrapper[PATH_STYLE] = Style2Path
regularDropdownStyle.push(style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))

Style3[TITLE_ITEM].color = TYPOGRAPHY_04
Style3[TITLE_ITEM].backgroundColor = 'inherit'
Style3[TITLE_ITEM][INACTIVE_EVENT].color = TYPOGRAPHY_02

Style3[ARROW_ICON_ITEM][ICON_COLOR_ATTRIBUTE]=LIGHT_GREY
Style3[ARROW_ICON_ITEM][OPEN_EVENT][ICON_COLOR_ATTRIBUTE]=LIGHT_GREY
Style3[ARROW_ICON_ITEM][SELECTION_EVENT][ICON_COLOR_ATTRIBUTE]=LIGHT_GREY


Style3[CONTAINER_WRAPPER].borderColor = MEDIUM_GREY
Style3[OPTION_SELECTED_SUBCOMPONENT].color = TYPOGRAPHY_03
Style3[ERROR_WRAPPER][ERROR_EVENT].color = DANGER_DARK_THEME

Style3[CONTAINER_WRAPPER].backgroundColor = "inherit"
Style3[CONTAINER_WRAPPER][OPEN_EVENT].backgroundColor = BACKGROUND_01
Style3[CONTAINER_WRAPPER][SELECTION_EVENT].backgroundColor = "inherit"
Style3[CONTAINER_WRAPPER][OPEN_EVENT].borderColor = DARK_GREY
Style3[CONTAINER_WRAPPER][ERROR_EVENT].borderColor = DANGER_DARK_THEME
Style3[CONTAINER_WRAPPER][ERROR_EVENT].backgroundColor = "inherit"
Style3[CONTAINER_WRAPPER][INACTIVE_EVENT].borderColor = DARK_GREY
Style3[CONTAINER_WRAPPER][INACTIVE_EVENT].backgroundColor = "inherit"
Style3[OPTION_SELECTED_SUBCOMPONENT][SELECTION_EVENT].color = TYPOGRAPHY_03

Style3[OPTION_Ni_ITEM].color = TYPOGRAPHY_03
Style3[OPTION_Ni_SUBCOMPONENT].backgroundColor = BACKGROUND_01
Style3[OPTION_Ni_SUBCOMPONENT][HOVER_EVENT].backgroundColor = DARK_GREY

const Style3Path = {}
Style3Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION

const style3Wrapper = {}
style3Wrapper[STYLE_OBJECT] = {...Style3}
style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_DROPDOWN_VARIANT
style3Wrapper[PATH_STYLE] = Style3Path
regularDropdownStyle.push(style3Wrapper)

const Style4= JSON.parse(JSON.stringify(Style2))

Style4[TITLE_ITEM].color = TYPOGRAPHY_04
Style4[TITLE_ITEM][INACTIVE_EVENT].color = TYPOGRAPHY_02
Style4[CONTAINER_WRAPPER].borderColor = MEDIUM_GREY
Style4[OPTION_SELECTED_SUBCOMPONENT].color = TYPOGRAPHY_03

Style4[CONTAINER_WRAPPER][OPEN_EVENT].backgroundColor = BACKGROUND_01
Style4[CONTAINER_WRAPPER].backgroundColor = "inherit"
Style4[CONTAINER_WRAPPER][SELECTION_EVENT].backgroundColor = "inherit"
Style4[CONTAINER_WRAPPER][ERROR_EVENT].backgroundColor = "inherit"
Style4[CONTAINER_WRAPPER][OPEN_EVENT].borderColor = DARK_GREY
Style4[CONTAINER_WRAPPER][INACTIVE_EVENT].borderColor = DARK_GREY
Style4[CONTAINER_WRAPPER][ERROR_EVENT].borderColor = DANGER_DARK_THEME
Style4[ERROR_WRAPPER][ERROR_EVENT].color = DANGER_DARK_THEME
Style4[OPTION_SELECTED_SUBCOMPONENT][SELECTION_EVENT].color = TYPOGRAPHY_03

Style4[ARROW_ICON_ITEM][OPEN_EVENT][ICON_COLOR_ATTRIBUTE]=LIGHT_GREY
Style4[ARROW_ICON_ITEM][SELECTION_EVENT][ICON_COLOR_ATTRIBUTE]=LIGHT_GREY
Style4[ARROW_ICON_ITEM][ICON_COLOR_ATTRIBUTE]=LIGHT_GREY

Style4[OPTION_Ni_SUBCOMPONENT].backgroundColor = BACKGROUND_01
Style4[OPTION_Ni_ITEM].color = TYPOGRAPHY_03
Style4[OPTION_Ni_SUBCOMPONENT][HOVER_EVENT].backgroundColor = DARK_GREY

const Style4Path = {}
Style4Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style4Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION

const style4Wrapper = {}
style4Wrapper[STYLE_OBJECT] = {...Style4}
style4Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_DROPDOWN_VARIANT
style4Wrapper[PATH_STYLE] = Style4Path
regularDropdownStyle.push(style4Wrapper)

export  {regularDropdownStyle};