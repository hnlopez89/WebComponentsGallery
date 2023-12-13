import {PATH_STYLE,
    STYLE_OBJECT,
    COMPONENT_VARIANT_KEY,
    BRAND_BONE_2} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {SIZE_ATTRIBUTE,
    COLOR_ATTRIBUTE,
    STATE_ATTRIBUTE,
    ICON_ATTRIBUTE,
    CLOSE_ATTRIBUTE,
    } from "../constants.js"
import {ICON_CLOSE_NOTIFICATION_VARIANT} from "../constants.js"
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
import {CLOSE_ON_OPTION, ICON_ON_OPTION} from "../constants.js"
import {WHITE_OPTION, BLACK_OPTION} from "../constants.js"
import {SVG_ATTRIBUTES, SVG_STYLES, SVG_TYPE} from "../constants.js"
import {CONTAINER_WRAPPER,
    TITLES_ICONS_NOTIFICATION_CONTAINER,
    TITLES_NOTIFICATION_CONTAINER,
    TITLE_NOTIFICATION,
    CLOSE_ICON_SUBCOMPONENT,
    ICON_SELECTION_NOTIFICATION_CONTAINER,
    SUBTITLE_NOTIFICATION,
    ICON_SUBCOMPONENT,
    SVG_SUBCOMPONENT,
    PATH_SUBCOMPONENT,
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
// I----------->ICON_CLOSE_NOTIFICATION_CONTAINER
// I-------------->ICON_CLOSE_NOTIFICATION

const fullNotificationStyles = []

const Style1 = {}
Style1[CONTAINER_WRAPPER] = {
    margin: "0px auto",
    cursor: "default",
    backgroundColor: DARK_GREY,
    paddingLeft: "16px",
    overflow: "auto",
    width: "border-box",
}
Style1[TITLES_ICONS_NOTIFICATION_CONTAINER] = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: BACKGROUND_01,
    justifyContent: "space-between",
    padding: "16px 24px",
    overflow: "auto"
}

Style1[TITLES_NOTIFICATION_CONTAINER] = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    color: TYPOGRAPHY_03,
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

Style1[ICON_SELECTION_NOTIFICATION_CONTAINER] = {
    backgroundColor: DARK_GREY,
    minWidth: "32px",
    height: "32px",
    borderRadius: "32px 32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "24px",
}

Style1[ICON_SUBCOMPONENT] = {
    color: BACKGROUND_01,
    width: "24px",
    height: "24px",
    }
Style1[CLOSE_ICON_SUBCOMPONENT] = {
    width: "32px",
    height: "32px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    cursor: "pointer"
    }
Style1[SVG_SUBCOMPONENT] = {
}

Style1[SVG_SUBCOMPONENT][SVG_ATTRIBUTES] = {
    width:"17",
    height:"16",
    viewBox:"0 0 17 16",
    fill:"none"
    }
Style1[SVG_SUBCOMPONENT][SVG_ATTRIBUTES][SVG_TYPE] = "svg"
Style1[SVG_SUBCOMPONENT][SVG_STYLES] = {}

Style1[PATH_SUBCOMPONENT] = {}

Style1[PATH_SUBCOMPONENT][SVG_ATTRIBUTES] = {
    fillRule:"evenodd",
    clipRule:"evenodd",
    d:`M1.96077 0.398602L0.900113 1.45926L7.48165 8.04079L0.940907 14.5815L1.91998
    15.5606L8.46072 9.01987L15.0422 15.6014L16.1029 14.5407L9.52138 7.95921L16.0621
    1.41847L15.083 0.439397L8.54231 6.98013L1.96077 0.398602Z`,
    fill: BACKGROUND_02,
}
Style1[PATH_SUBCOMPONENT][SVG_ATTRIBUTES][SVG_TYPE] = "path"
Style1[PATH_SUBCOMPONENT][SVG_STYLES] = {}

const Style1Path = {}
Style1Path[SIZE_ATTRIBUTE] = EXTRA_LARGE_OPTION;
Style1Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style1Path[STATE_ATTRIBUTE] = DEFAULT_OPTION;
Style1Path[CLOSE_ATTRIBUTE] = CLOSE_ON_OPTION;
Style1Path[ICON_ATTRIBUTE] = ICON_ON_OPTION;
const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = ICON_CLOSE_NOTIFICATION_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
fullNotificationStyles.push(style1Wrapper)


const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[ICON_SELECTION_NOTIFICATION_CONTAINER].marginRight = "16px"
Style2[TITLES_ICONS_NOTIFICATION_CONTAINER].padding="16px 20px"
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
Style2Path[CLOSE_ATTRIBUTE] = CLOSE_ON_OPTION;
Style2Path[ICON_ATTRIBUTE] = ICON_ON_OPTION;

const Style2Wrapper = {}
Style2Wrapper[STYLE_OBJECT] = {...Style2}
Style2Wrapper[COMPONENT_VARIANT_KEY] = ICON_CLOSE_NOTIFICATION_VARIANT
Style2Wrapper[PATH_STYLE] = Style2Path
fullNotificationStyles.push(Style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[CONTAINER_WRAPPER].paddingLeft= "8px"
Style3[TITLES_ICONS_NOTIFICATION_CONTAINER].padding="8px 12px"
Style3[TITLE_NOTIFICATION].fontSize = "16px"
Style3[SUBTITLE_NOTIFICATION].fontSize = "14px"
Style3[SUBTITLE_NOTIFICATION].lineHeight = "20px"
Style3[LINK_SUBTITLE].fontSize = "14px"
Style3[LINK_SUBTITLE].lineHeight = "20px"
Style3[LINK_TITLE].fontSize = "14px"
Style3[LINK_TITLE].lineHeight = "20px"

Style3[ICON_SELECTION_NOTIFICATION_CONTAINER].minWidth= "20px"
Style3[ICON_SELECTION_NOTIFICATION_CONTAINER].height= "20px"
Style3[ICON_SELECTION_NOTIFICATION_CONTAINER].marginRight = "12px"
Style3[CLOSE_ICON_SUBCOMPONENT].width = "20px"
Style3[CLOSE_ICON_SUBCOMPONENT].height = "20px"
Style3[SVG_SUBCOMPONENT][SVG_ATTRIBUTES].width ="11"
Style3[SVG_SUBCOMPONENT][SVG_ATTRIBUTES].height ="10"
Style3[SVG_SUBCOMPONENT][SVG_ATTRIBUTES].viewBox ="0 0 11 10"
Style3[PATH_SUBCOMPONENT][SVG_ATTRIBUTES].d="M1.22353 0.249126L0.560617 0.912039L4.67407 5.0255L0.586114 9.11346L1.19803 9.72538L5.28599 5.63742L9.39945 9.75087L10.0624 9.08796L5.94891 4.9745L10.0369 0.886543L9.42495 0.274623L5.33699 4.36258L1.22353 0.249126Z"
Style3[ICON_SUBCOMPONENT].width = "15px"
Style3[ICON_SUBCOMPONENT].height = "15px"

const Style3Path = {}
Style3Path[SIZE_ATTRIBUTE] = SMALL_OPTION;
Style3Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style3Path[STATE_ATTRIBUTE] = DEFAULT_OPTION;
Style3Path[CLOSE_ATTRIBUTE] = CLOSE_ON_OPTION;
Style3Path[ICON_ATTRIBUTE] = ICON_ON_OPTION;
const Style3Wrapper = {}
Style3Wrapper[STYLE_OBJECT] = {...Style3}
Style3Wrapper[COMPONENT_VARIANT_KEY] = ICON_CLOSE_NOTIFICATION_VARIANT
Style3Wrapper[PATH_STYLE] = Style3Path
fullNotificationStyles.push(Style3Wrapper)

const Style4 = JSON.parse(JSON.stringify(Style3))
Style4[CONTAINER_WRAPPER].maxWidth= "312px"


const Style4Path = {}
Style4Path[SIZE_ATTRIBUTE] = TOAST_OPTION;
Style4Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style4Path[STATE_ATTRIBUTE] = DEFAULT_OPTION;
Style4Path[CLOSE_ATTRIBUTE] = CLOSE_ON_OPTION;
Style4Path[ICON_ATTRIBUTE] = ICON_ON_OPTION;

const Style4Wrapper = {}
Style4Wrapper[STYLE_OBJECT] = {...Style4}
Style4Wrapper[COMPONENT_VARIANT_KEY] = ICON_CLOSE_NOTIFICATION_VARIANT
Style4Wrapper[PATH_STYLE] = Style4Path
fullNotificationStyles.push(Style4Wrapper)


const fullNotificationDarkStyles = []
fullNotificationStyles.forEach((style,index) => {
    fullNotificationDarkStyles.push(JSON.parse(JSON.stringify(style)))
    fullNotificationDarkStyles[index][STYLE_OBJECT][ICON_SUBCOMPONENT].color = BRAND_BONE_2
    fullNotificationDarkStyles[index][STYLE_OBJECT][ICON_SELECTION_NOTIFICATION_CONTAINER].backgroundColor = DARK_GREY
    fullNotificationDarkStyles[index][STYLE_OBJECT][PATH_SUBCOMPONENT][SVG_ATTRIBUTES].fill = BACKGROUND_01
    fullNotificationDarkStyles[index][STYLE_OBJECT][TITLES_ICONS_NOTIFICATION_CONTAINER].backgroundColor = BACKGROUND_02
    fullNotificationDarkStyles[index][STYLE_OBJECT][TITLES_NOTIFICATION_CONTAINER].color = TYPOGRAPHY_01
    fullNotificationDarkStyles[index][STYLE_OBJECT][LINK_SUBTITLE].color = TYPOGRAPHY_01    
    fullNotificationDarkStyles[index][STYLE_OBJECT][LINK_TITLE].color = TYPOGRAPHY_01    
    fullNotificationDarkStyles[index][PATH_STYLE][COLOR_ATTRIBUTE] = BLACK_OPTION
})
fullNotificationStyles.push(...fullNotificationDarkStyles)



const fullNotificationSuccessStyles = []
fullNotificationStyles.forEach((style,index) => {
    fullNotificationSuccessStyles.push(JSON.parse(JSON.stringify(style)))
    fullNotificationSuccessStyles[index][STYLE_OBJECT][CONTAINER_WRAPPER].backgroundColor = ALERT_SUCCESS
    fullNotificationSuccessStyles[index][PATH_STYLE][STATE_ATTRIBUTE] = SUCCESS_OPTION
    fullNotificationSuccessStyles[index][STYLE_OBJECT][ICON_SELECTION_NOTIFICATION_CONTAINER].backgroundColor = ALERT_SUCCESS

})
const fullNotificationErrorStyles = []
fullNotificationStyles.forEach((style,index) => {
    fullNotificationErrorStyles.push(JSON.parse(JSON.stringify(style)))
    if(fullNotificationErrorStyles[index][PATH_STYLE][COLOR_ATTRIBUTE] === WHITE_OPTION){
        fullNotificationErrorStyles[index][STYLE_OBJECT][CONTAINER_WRAPPER].backgroundColor = DANGER_LIGHT_THEME
        fullNotificationErrorStyles[index][STYLE_OBJECT][ICON_SELECTION_NOTIFICATION_CONTAINER].backgroundColor = DANGER_LIGHT_THEME

    } else {
        fullNotificationErrorStyles[index][STYLE_OBJECT][CONTAINER_WRAPPER].backgroundColor = DANGER_DARK_THEME
        fullNotificationErrorStyles[index][STYLE_OBJECT][ICON_SUBCOMPONENT].color = BRAND_BONE_2
        fullNotificationErrorStyles[index][STYLE_OBJECT][ICON_SELECTION_NOTIFICATION_CONTAINER].backgroundColor = DANGER_DARK_THEME
        fullNotificationErrorStyles[index][PATH_STYLE][COLOR_ATTRIBUTE] = BLACK_OPTION
    }
    fullNotificationErrorStyles[index][PATH_STYLE][STATE_ATTRIBUTE] = ERROR_OPTION
})
const fullNotificationWarningStyles = []
fullNotificationStyles.forEach((style,index) => {
    fullNotificationWarningStyles.push(JSON.parse(JSON.stringify(style)))
    fullNotificationWarningStyles[index][STYLE_OBJECT][CONTAINER_WRAPPER].backgroundColor = ALERT_WARNING
    fullNotificationWarningStyles[index][PATH_STYLE][STATE_ATTRIBUTE] = WARNING_OPTION
    fullNotificationWarningStyles[index][STYLE_OBJECT][ICON_SELECTION_NOTIFICATION_CONTAINER].backgroundColor = ALERT_WARNING

})
fullNotificationStyles.push(...fullNotificationErrorStyles)
fullNotificationStyles.push(...fullNotificationWarningStyles)
fullNotificationStyles.push(...fullNotificationSuccessStyles)


export  {fullNotificationStyles};