
import {WINDOW_VARIANT} from "../constants.js"
import {MODE_ATTRIBUTE} from "../constants.js"
import {WINDOW_OPTION} from "../constants.js"
import {BACKGROUND_COMPONENT,WRAPPER_COMPONENT, MODAL_WRAPPER_COMPONENT, ICON_CLOSE_COMPONENT,ICON_CLOSE_WEB_COMPONENT} from "../constants.js"
import {ICON_SIZE_ATTRIBUTE, ICON_COLOR_ATTRIBUTE,ICON_SELECTION_ATTRIBUTE, CLOSE_ICON_OPTION} from '../../Icons/constants.js'
import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY, TYPOGRAPHY_01, TYPOGRAPHY_03, BLACK} from "../../commonMethodsAndConstants/Styles/commonConstants.js"

const windowModalStyles = []


//* DESTRUCTIVE DESKTOP LIGHT MODE NORMAL OFFICON */
const Style1 = {}
Style1[BACKGROUND_COMPONENT] = {
        position: "fixed",
        top:"0",
        left: "0",
        zIndex: "2147483646",
        width: "100vw",
        height: "100vh",
        backgroundColor: TYPOGRAPHY_01,
        opacity: "0.8",
}
Style1[WRAPPER_COMPONENT] = {
        fontFamily: "Roboto, Sans-Serif",
        position: "fixed",
        top:"0",
        left: "0",
        zIndex: "2147483647",
        width: "100vw",
        height: "100vh",
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
}
Style1[MODAL_WRAPPER_COMPONENT] = {
        width: "300px",
        height: "fit-content",
        maxHeight: "100vh",
        overflowY: "scroll",
        backgroundColor: TYPOGRAPHY_03,
        boxSizing: "border-box",
        padding: "48px",
        position:"relative"
}
Style1[ICON_CLOSE_COMPONENT] = {
        position: "absolute",
        zIndex: "1",
        right: "24px",
        top: "24px",
        width: "32px",
        height: "32px",
        boxSizing: "border-box",
        backgroundColor: BLACK,
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
}
Style1[ICON_CLOSE_WEB_COMPONENT] = {}
Style1[ICON_CLOSE_WEB_COMPONENT][ICON_SELECTION_ATTRIBUTE] = CLOSE_ICON_OPTION
Style1[ICON_CLOSE_WEB_COMPONENT][ICON_SIZE_ATTRIBUTE] = "100%"
Style1[ICON_CLOSE_WEB_COMPONENT][ICON_COLOR_ATTRIBUTE] = TYPOGRAPHY_03

const Style1Path = {}
Style1Path[MODE_ATTRIBUTE] = WINDOW_OPTION

const styleWrapper1 = {}
styleWrapper1[STYLE_OBJECT] = {...Style1}
styleWrapper1[COMPONENT_VARIANT_KEY] = WINDOW_VARIANT
styleWrapper1[PATH_STYLE] = Style1Path
windowModalStyles.push(styleWrapper1)



export {windowModalStyles}