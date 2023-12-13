import {PATH_STYLE,
        STYLE_OBJECT,
        COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {SIZE_ATTRIBUTE,
        THEME_ATTRIBUTE,
        STATE_ATTRIBUTE,
        SHOW_TITLE_OR_PICTURE_ATTRIBUTE,
        PICTURE_SUBCOMPONENT,
        LOG_IN_PICTURE_PROFILE_VARIANT,
        SHOW_BADGE_ATTRIBUTE,
        HIDE_BADGE_OPTION
        } from "../constants.js"
import {DOUBLE_EXTRA_LARGE_OPTION,
        EXTRA_LARGE_OPTION,
        LARGE_OPTION,
        MEDIUM_OPTION,
        SMALL_OPTION,
        EXTRA_SMALL_OPTION
        } from "../constants.js"
import {DARK_OPTION, LIGHT_OPTION} from "../constants.js"
import {SHOW_PICTURE_OPTION} from "../constants.js"
import {LOG_IN_OPTION} from "../constants.js"
import {CONTAINER_SLOT_WRAPPER,
        INPUT_SLOT,
        CONTAINER_SUB_WRAPPER,
} from "../constants.js"

// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// CONTAINER_SUB_WRAPPER

const profilePictureStyles = []
const Style1 = {}
Style1[CONTAINER_SLOT_WRAPPER] = {
    display: "none",
}
Style1[INPUT_SLOT] = {
    display: "none",
}
Style1[CONTAINER_SUB_WRAPPER] = {
    margin: "0px auto",
    cursor: "default",
}

Style1[PICTURE_SUBCOMPONENT] = {
    width: "64px",
    height: "64px",
    borderRadius: "64px 64px",
}


const Style1Path = {}
Style1Path[SIZE_ATTRIBUTE] = DOUBLE_EXTRA_LARGE_OPTION;
Style1Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style1Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style1Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style1Path[SHOW_BADGE_ATTRIBUTE] = HIDE_BADGE_OPTION;
const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_PROFILE_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
profilePictureStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[PICTURE_SUBCOMPONENT].width = "56px"
Style2[PICTURE_SUBCOMPONENT].height = "56px"

const Style2Path = {}
Style2Path[SIZE_ATTRIBUTE] = EXTRA_LARGE_OPTION;
Style2Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style2Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style2Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style2Path[SHOW_BADGE_ATTRIBUTE] = HIDE_BADGE_OPTION;
const Style2Wrapper = {}
Style2Wrapper[STYLE_OBJECT] = {...Style2}
Style2Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_PROFILE_VARIANT
Style2Wrapper[PATH_STYLE] = Style2Path
profilePictureStyles.push(Style2Wrapper)


const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[PICTURE_SUBCOMPONENT].width = "48px"
Style3[PICTURE_SUBCOMPONENT].height = "48px"
const Style3Path = {}
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style3Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style3Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style3Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style3Path[SHOW_BADGE_ATTRIBUTE] = HIDE_BADGE_OPTION;
const Style3Wrapper = {}
Style3Wrapper[STYLE_OBJECT] = {...Style3}
Style3Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_PROFILE_VARIANT
Style3Wrapper[PATH_STYLE] = Style3Path
profilePictureStyles.push(Style3Wrapper)

const Style4 = JSON.parse(JSON.stringify(Style1))
Style4[PICTURE_SUBCOMPONENT].width = "40px"
Style4[PICTURE_SUBCOMPONENT].height = "40px"


const Style4Path = {}
Style4Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style4Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style4Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style4Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style4Path[SHOW_BADGE_ATTRIBUTE] = HIDE_BADGE_OPTION;

const Style4Wrapper = {}
Style4Wrapper[STYLE_OBJECT] = {...Style4}
Style4Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_PROFILE_VARIANT
Style4Wrapper[PATH_STYLE] = Style4Path
profilePictureStyles.push(Style4Wrapper)

const Style5 = JSON.parse(JSON.stringify(Style1))

Style5[PICTURE_SUBCOMPONENT].width = "32px"
Style5[PICTURE_SUBCOMPONENT].height = "32px"


const Style5Path = {}
Style5Path[SIZE_ATTRIBUTE] = SMALL_OPTION;
Style5Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style5Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style5Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style5Path[SHOW_BADGE_ATTRIBUTE] = HIDE_BADGE_OPTION;

const Style5Wrapper = {}
Style5Wrapper[STYLE_OBJECT] = {...Style5}
Style5Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_PROFILE_VARIANT
Style5Wrapper[PATH_STYLE] = Style5Path
profilePictureStyles.push(Style5Wrapper)

const Style6 = JSON.parse(JSON.stringify(Style5))
Style6[PICTURE_SUBCOMPONENT].width = "24px"
Style6[PICTURE_SUBCOMPONENT].height = "24px"


const Style6Path = {}
Style6Path[SIZE_ATTRIBUTE] = EXTRA_SMALL_OPTION;
Style6Path[THEME_ATTRIBUTE] = LIGHT_OPTION;
Style6Path[STATE_ATTRIBUTE] = LOG_IN_OPTION;
Style6Path[SHOW_TITLE_OR_PICTURE_ATTRIBUTE] = SHOW_PICTURE_OPTION;
Style6Path[SHOW_BADGE_ATTRIBUTE] = HIDE_BADGE_OPTION;

const Style6Wrapper = {}
Style6Wrapper[STYLE_OBJECT] = {...Style6}
Style6Wrapper[COMPONENT_VARIANT_KEY] = LOG_IN_PICTURE_PROFILE_VARIANT
Style6Wrapper[PATH_STYLE] = Style6Path
profilePictureStyles.push(Style6Wrapper)

const profilePictureDarkStyles = []
profilePictureStyles.forEach((style,index) => {
    profilePictureDarkStyles.push(JSON.parse(JSON.stringify(style)))
    profilePictureDarkStyles[index][PATH_STYLE][THEME_ATTRIBUTE] = DARK_OPTION
})
profilePictureStyles.push(...profilePictureDarkStyles)

export  {profilePictureStyles};