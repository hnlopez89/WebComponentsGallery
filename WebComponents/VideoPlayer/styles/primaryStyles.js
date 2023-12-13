import {LARGE_OPTION, SMALL_OPTION ,MEDIUM_OPTION, WRAPPER_COMPONENT, CLOSE_ICON_WRAPPER_COMPONENT,CLOSE_ICON_COMPONENT, PLAYER_WRAPPER, PLAYER_COMPONENT} from "../constants.js"
import {SIZE_ATTRIBUTE} from "../constants.js"
import {MAX_WIDTH_SMALL_OPTION,MAX_WIDTH_MEDIUM_OPTION, BACKGROUND_01} from '../../commonMethodsAndConstants/Styles/commonConstants.js'
import {REGULAR_VIDEOPLAYER_COMPONENT} from "../constants.js"
import {PLAY_EVENT,DEFAULT_EVENT} from "../constants.js"
import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"

import {ICON_SELECTION_ATTRIBUTE as ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT} from "../../Icons/constants.js"
import { ICON_COLOR_ATTRIBUTE, 
         ICON_HEIGHT_ATTRIBUTE,
         ICON_WIDTH_ATTRIBUTE } from "../../Icons/constants.js"
import {CLOSE_ICON_OPTION} from  "../../Icons/constants.js"
import { WIDTH_ATTRIBUTE } from "../../Button/constants.js"
const Styles = []
//*----------------STYLING TABS ------------------------*/
//SubCOmponents
// SHADOW DOM
// I----------->WRAPPER COMPONENT
//                  I----------->LIST COMPONENT
//                  I                  I----------->LIST ITEM COMPONENT
//                  I                                   I----------->BUTTON SUBCOMPONENT
//                  I----------->CONTENT COMPONENT

//*----------------NEW TABS ------------------------*/


const Style1 = {}

 
Style1 [WRAPPER_COMPONENT] = {
     display: "contents", 
     position: "static",
     height: "100%",
     width: "100%"
}
Style1[WRAPPER_COMPONENT][PLAY_EVENT] = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "0px",
    left:"0px",
    backgroundColor: BACKGROUND_01,
    zIndex: "10",
    width: "100vw",
    height: "100vh",


}
Style1 [PLAYER_WRAPPER] = {
    display: "initial"
}
Style1[PLAYER_WRAPPER][PLAY_EVENT] = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
}
Style1 [PLAYER_COMPONENT] = {
    padding: "0px",
    width: "100%",
    height: "100%"
}
Style1[PLAYER_COMPONENT][PLAY_EVENT] = {
    maxWidth: "calc(100vw - 32px)",
    maxHeight: "calc(100vh - 252px)"
}


Style1[CLOSE_ICON_WRAPPER_COMPONENT] = {
    display:"none"
}
Style1[CLOSE_ICON_WRAPPER_COMPONENT][PLAY_EVENT] = {
    position: "fixed",
    top: "32px",
    right: "32px",
    cursor: "pointer",
    display: "block",
    width: "40px",
    height: "40px",
    backgroundColor: "white",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
   
}
Style1[CLOSE_ICON_COMPONENT] = {}
Style1[CLOSE_ICON_COMPONENT][PLAY_EVENT] = {}
Style1[CLOSE_ICON_COMPONENT][PLAY_EVENT][ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT] = CLOSE_ICON_OPTION

const Style1Path = {}
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION

const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_VIDEOPLAYER_COMPONENT
style1Wrapper[PATH_STYLE] = Style1Path

Styles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))

const Style2Path = {}
Style2Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION

const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_VIDEOPLAYER_COMPONENT
style2Wrapper[PATH_STYLE] = Style2Path

Styles.push(style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[CLOSE_ICON_WRAPPER_COMPONENT][PLAY_EVENT].top = "16px"
Style3[CLOSE_ICON_WRAPPER_COMPONENT][PLAY_EVENT].right = "16px"
const Style3Path = {}
Style3Path[SIZE_ATTRIBUTE] = SMALL_OPTION

const style3Wrapper = {}
style3Wrapper[STYLE_OBJECT] = {...Style3}
style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_VIDEOPLAYER_COMPONENT
style3Wrapper[PATH_STYLE] = Style3Path

Styles.push(style3Wrapper)
export {Styles};