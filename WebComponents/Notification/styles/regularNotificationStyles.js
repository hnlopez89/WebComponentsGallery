import {PATH_STYLE,
    STYLE_OBJECT,
    COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {SIZE_ATTRIBUTE,
    COLOR_ATTRIBUTE,
    STATE_ATTRIBUTE,
    CLOSE_ATTRIBUTE,
    ICON_ATTRIBUTE
    } from "../constants.js"
import {REGULAR_NOTIFICATION_VARIANT} from "../constants.js"
import {EXTRA_LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    TOAST_OPTION,
} from "../constants.js"
import {SUCCESS_OPTION,
    WARNING_OPTION,
    ERROR_OPTION,
    DEFAULT_OPTION,
} from "../constants.js"
import {CLOSE_OFF_OPTION, ICON_OFF_OPTION} from "../constants.js"
import {WHITE_OPTION, BLACK_OPTION} from "../constants.js"
import {CONTAINER_WRAPPER,
    TITLES_NOTIFICATION_CONTAINER,
    TITLE_NOTIFICATION,
    SUBTITLE_NOTIFICATION,
    LINK_SUBTITLE,
    LINK_TITLE
} from "../constants.js"
import { BACKGROUND_02, BACKGROUND_01,TYPOGRAPHY_03, TYPOGRAPHY_01, DARK_GREY,
    ALERT_SUCCESS, ALERT_WARNING, DANGER_LIGHT_THEME, DANGER_DARK_THEME,
    } from "../../commonMethodsAndConstants/Styles/commonConstants.js"

// CONTAINER_WRAPPER
// I----->TITLES_ICONS_NOTIFICATION_CONTAINER
// I----------->TITLES_NOTIFICATION_CONTAINER
// I-------------->TITLE_NOTIFICATION
// I-------------->SUBTITLE_NOTIFICATION

const regularNotificationStyles = []
const Style1 = {}

Style1[CONTAINER_WRAPPER] = {
    margin: "0px auto",
    cursor: "default",
    overflow: "auto",
    backgroundColor: DARK_GREY,
    paddingLeft: "16px",
    width: "border-box",

}
Style1[TITLES_NOTIFICATION_CONTAINER] = {
    padding: "16px 24px",
    backgroundColor: BACKGROUND_01,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    color: TYPOGRAPHY_03,
    overflow: "auto"
}
Style1[TITLE_NOTIFICATION] = {
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: "Medium",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "24px",

}
Style1[SUBTITLE_NOTIFICATION] = {
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: "Regular",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
}
Style1[LINK_SUBTITLE] = {
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: "Regular",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    color: TYPOGRAPHY_03,
    cursor: "pointer",
    textDecoration: "underline",
    paddingRight: "3px",

}
Style1[LINK_TITLE] = {
    fontfamily: "Roboto, Sans-Serif",
    fontStyle: "Medium",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "24px",
    color: TYPOGRAPHY_03,
    cursor: "pointer",
    textDecoration: "underline",
    paddingRight: "3px",

}


const Style1Path = {}
Style1Path[SIZE_ATTRIBUTE] = EXTRA_LARGE_OPTION;
Style1Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style1Path[STATE_ATTRIBUTE] = DEFAULT_OPTION;
Style1Path[CLOSE_ATTRIBUTE] = CLOSE_OFF_OPTION;
Style1Path[ICON_ATTRIBUTE] = ICON_OFF_OPTION;
const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_NOTIFICATION_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
regularNotificationStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[TITLES_NOTIFICATION_CONTAINER].padding="16px 20px"
Style2[SUBTITLE_NOTIFICATION].fontSize = "14px"
Style2[SUBTITLE_NOTIFICATION].lineHeight = "20px"
Style2[LINK_SUBTITLE].fontSize = "14px"
Style2[LINK_SUBTITLE].lineHeight = "20px"
Style2[LINK_TITLE].fontSize = "14px"
Style2[LINK_TITLE].lineHeight = "20px"

const Style2Path = {}
Style2Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style2Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style2Path[STATE_ATTRIBUTE] = DEFAULT_OPTION;
Style2Path[CLOSE_ATTRIBUTE] = CLOSE_OFF_OPTION;
Style2Path[ICON_ATTRIBUTE] = ICON_OFF_OPTION;

const Style2Wrapper = {}
Style2Wrapper[STYLE_OBJECT] = {...Style2}
Style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_NOTIFICATION_VARIANT
Style2Wrapper[PATH_STYLE] = Style2Path
regularNotificationStyles.push(Style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[CONTAINER_WRAPPER].paddingLeft= "8px"
Style3[TITLES_NOTIFICATION_CONTAINER].padding="8px 12px"
Style3[TITLE_NOTIFICATION].fontSize = "16px"
Style3[SUBTITLE_NOTIFICATION].fontSize = "14px"
Style3[SUBTITLE_NOTIFICATION].lineHeight = "20px"
Style3[LINK_SUBTITLE].fontSize = "14px"
Style3[LINK_SUBTITLE].lineHeight = "20px"
Style3[LINK_TITLE].fontSize = "14px"
Style3[LINK_TITLE].lineHeight = "20px"

const Style3Path = {}
Style3Path[SIZE_ATTRIBUTE] = SMALL_OPTION;
Style3Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style3Path[STATE_ATTRIBUTE] = DEFAULT_OPTION;
Style3Path[CLOSE_ATTRIBUTE] = CLOSE_OFF_OPTION;
Style3Path[ICON_ATTRIBUTE] = ICON_OFF_OPTION;

const Style3Wrapper = {}
Style3Wrapper[STYLE_OBJECT] = {...Style3}
Style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_NOTIFICATION_VARIANT
Style3Wrapper[PATH_STYLE] = Style3Path
regularNotificationStyles.push(Style3Wrapper)

const Style4 = JSON.parse(JSON.stringify(Style3))
Style4[CONTAINER_WRAPPER].maxWidth= "312px"

const Style4Path = {}
Style4Path[SIZE_ATTRIBUTE] = TOAST_OPTION;
Style4Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style4Path[STATE_ATTRIBUTE] = DEFAULT_OPTION;
Style4Path[CLOSE_ATTRIBUTE] = CLOSE_OFF_OPTION;
Style4Path[ICON_ATTRIBUTE] = ICON_OFF_OPTION;

const Style4Wrapper = {}
Style4Wrapper[STYLE_OBJECT] = {...Style4}
Style4Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_NOTIFICATION_VARIANT
Style4Wrapper[PATH_STYLE] = Style4Path
regularNotificationStyles.push(Style4Wrapper)


const regularNotificationDarkStyles = []
regularNotificationStyles.forEach((style,index) => {
    regularNotificationDarkStyles.push(JSON.parse(JSON.stringify(style)))
    regularNotificationDarkStyles[index][STYLE_OBJECT][TITLES_NOTIFICATION_CONTAINER].backgroundColor = BACKGROUND_02
    regularNotificationDarkStyles[index][STYLE_OBJECT][TITLES_NOTIFICATION_CONTAINER].color = TYPOGRAPHY_01
    regularNotificationDarkStyles[index][STYLE_OBJECT][LINK_TITLE].color = TYPOGRAPHY_01
    regularNotificationDarkStyles[index][STYLE_OBJECT][LINK_SUBTITLE].color = TYPOGRAPHY_01
    regularNotificationDarkStyles[index][PATH_STYLE][COLOR_ATTRIBUTE] = BLACK_OPTION
})
regularNotificationStyles.push(...regularNotificationDarkStyles)



const regularNotificationSuccessStyles = []
regularNotificationStyles.forEach((style,index) => {
    regularNotificationSuccessStyles.push(JSON.parse(JSON.stringify(style)))
    regularNotificationSuccessStyles[index][STYLE_OBJECT][CONTAINER_WRAPPER].backgroundColor = ALERT_SUCCESS
    regularNotificationSuccessStyles[index][PATH_STYLE][STATE_ATTRIBUTE] = SUCCESS_OPTION
})
const regularNotificationErrorStyles = []
regularNotificationStyles.forEach((style,index) => {
    regularNotificationErrorStyles.push(JSON.parse(JSON.stringify(style)))
    if(regularNotificationErrorStyles[index][PATH_STYLE][COLOR_ATTRIBUTE] === WHITE_OPTION){
        regularNotificationErrorStyles[index][STYLE_OBJECT][CONTAINER_WRAPPER].backgroundColor = DANGER_LIGHT_THEME
    } else {
        regularNotificationErrorStyles[index][STYLE_OBJECT][CONTAINER_WRAPPER].backgroundColor = DANGER_DARK_THEME
        regularNotificationErrorStyles[index][PATH_STYLE][COLOR_ATTRIBUTE] = BLACK_OPTION
    }
    regularNotificationErrorStyles[index][PATH_STYLE][STATE_ATTRIBUTE] = ERROR_OPTION
})
const regularNotificationWarningStyles = []
regularNotificationStyles.forEach((style,index) => {
    regularNotificationWarningStyles.push(JSON.parse(JSON.stringify(style)))
    regularNotificationWarningStyles[index][STYLE_OBJECT][CONTAINER_WRAPPER].backgroundColor = ALERT_WARNING
    regularNotificationWarningStyles[index][PATH_STYLE][STATE_ATTRIBUTE] = WARNING_OPTION
})
regularNotificationStyles.push(...regularNotificationErrorStyles)
regularNotificationStyles.push(...regularNotificationWarningStyles)
regularNotificationStyles.push(...regularNotificationSuccessStyles)

export  {regularNotificationStyles};