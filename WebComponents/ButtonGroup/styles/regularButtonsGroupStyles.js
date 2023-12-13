import {BUTTONS_WRAPPER, BUTTON_FLEXBOX, BUTTON_i_COMPONENT, TEXT_BUTTON, CONTENT_WRAPPER, REGULAR_BUTTONS_GROUP_COMPONENT, SLOT_WRAPPER, BUTTONS_GROUP_WRAPPER_COMPONENT} from "../constants.js"
import {
        COLOR_ATTRIBUTE,
        SIZE_ATTRIBUTE,
        CONTAINER_ATTRIBUTE
    } from "../constants.js"
import {DARK_OPTION, 
        LIGHT_OPTION, 
        LARGE_OPTION, 
        SMALL_OPTION,
        BOXED_OPTION,
        FLUID_OPTION
    } from "../constants.js"

    import {WRAPPER_COMPONENT,
    } from "../constants.js"
import {ACTIVE_BUTTONS_GROUP_EVENT,HOVER_EVENT} from "../constants.js"
import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { TYPOGRAPHY_01, TYPOGRAPHY_02, TYPOGRAPHY_03 } from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { PRIMARY_BUTTON_DARK_ACTIVE, PRIMARY_BUTTON_LIGHT_ACTIVE} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { BLACK, WHITE } from "../../commonMethodsAndConstants/Styles/commonConstants.js"

const Styles = []
//*----------------STYLING BUTTONS_GROUP ------------------------*/
//SubCOmponents
// SHADOW DOM
// I----------->WRAPPER COMPONENT
//                  I----------->LIST COMPONENT
//                  I                  I----------->LIST ITEM COMPONENT
//                  I                                   I----------->BUTTON SUBCOMPONENT
//                  I----------->CONTENT COMPONENT

//*----------------NEW BUTTONS_GROUP ------------------------*/

const Style1 = {}

 
Style1 [SLOT_WRAPPER] = {
     display: "none", 
}
Style1 [BUTTONS_GROUP_WRAPPER_COMPONENT] = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0px",
    boxSizing: "border-box",
    margin: "0px",
    width: "100%",
}
Style1 [BUTTONS_WRAPPER] = {
    boxSizing: "border-box",
    borderRadius: "100px",
    padding: "3px",
    border: "1px solid",
    borderColor: BLACK,
    height: "40px",
    width: "100%",

}
Style1 [BUTTON_FLEXBOX] = {
    boxSizing: "border-box",
    minWidth: "fit-content",
    display: "flex",  
    flexWrap: "nowrap",
    height: "100%",
}
Style1 [BUTTON_i_COMPONENT] = {
    appearance: "none",
    transition: "200ms all ease-in-out",
    boxSizing: "border-box",
    position: "relative",
    border: "inherit",
	padding: "8px 16px",
	cursor: "pointer",
	outline: "inherit",
    textAlign: "center",
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: 'normal',
    fontWeight: '350',
    fontSize: '14px',
    lineHeight: '16px',
    color: TYPOGRAPHY_02,
    backgroundColor: "transparent",
    whiteSpace: "nowrap",
    borderRadius: "100px",
    height: "100%",
    width: "auto",
    flexBasis: "100%",

}
Style1 [BUTTON_i_COMPONENT][ACTIVE_BUTTONS_GROUP_EVENT] = {
    fontFamily: 'Roboto, Sans-Serif',
    fontWeight: "400",
    color: TYPOGRAPHY_03,
    backgroundColor: PRIMARY_BUTTON_DARK_ACTIVE
}
Style1 [BUTTON_i_COMPONENT][HOVER_EVENT] = {
    fontFamily: 'Roboto, Sans-Serif',
    fontWeight: '400',
}
Style1 [TEXT_BUTTON] = {
    width: "fit-content",
    maxWidth: "calc(100% - 36px)",
    overflow: "hidden",
    position: "absolute",
    top: "8px",
    left: "50%",
    transform: "translateX(-50%)",
    border: "none",   
    boxSizing: "border-box",
    background: "none",
	color: "inherit",
	cursor: "pointer",
	outline: "inherit",
    backgroundColor: 'none',
    textAlign: "center",
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: 'normal',
    fontWeight: '350',
    fontSize: '14px',
    lineHeight: '16px',
    color: TYPOGRAPHY_02,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",  
}
Style1 [TEXT_BUTTON][ACTIVE_BUTTONS_GROUP_EVENT] = {
    
    fontFamily: 'Roboto, Sans-Serif',
    fontWeight: "400",
    color: TYPOGRAPHY_03,
}
Style1 [TEXT_BUTTON][HOVER_EVENT] = {
    maxWidth: "calc(100% - 28px)",
    fontFamily: 'Roboto, Sans-Serif',
    fontWeight: '400',
    color: TYPOGRAPHY_01
}
Style1 [CONTENT_WRAPPER] = {
    width: "100%",
    height: "fit-content",
}
const Style1Path = {}
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style1Path[COLOR_ATTRIBUTE] = LIGHT_OPTION

const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_BUTTONS_GROUP_COMPONENT
style1Wrapper[PATH_STYLE] = Style1Path

Styles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2 [BUTTON_i_COMPONENT].fontSize = "12px"
Style2 [BUTTON_i_COMPONENT].lineHeight = "16px"
Style2 [TEXT_BUTTON].fontSize = "12px"
Style2 [TEXT_BUTTON].lineHeight = "16px"

const Style2Path = {}
Style2Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style2Path[COLOR_ATTRIBUTE] = LIGHT_OPTION

const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_BUTTONS_GROUP_COMPONENT
style2Wrapper[PATH_STYLE] = Style2Path

Styles.push(style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))

Style3[BUTTONS_WRAPPER].borderColor = WHITE
Style3[BUTTON_i_COMPONENT].color = TYPOGRAPHY_03
Style3[BUTTON_i_COMPONENT][ACTIVE_BUTTONS_GROUP_EVENT].backgroundColor =  PRIMARY_BUTTON_LIGHT_ACTIVE
Style3[BUTTON_i_COMPONENT][ACTIVE_BUTTONS_GROUP_EVENT].color =  TYPOGRAPHY_01
Style3[BUTTON_i_COMPONENT][HOVER_EVENT].color =  TYPOGRAPHY_03

Style3[TEXT_BUTTON].color = TYPOGRAPHY_03
Style3[TEXT_BUTTON][ACTIVE_BUTTONS_GROUP_EVENT].color =  TYPOGRAPHY_01
Style3[TEXT_BUTTON][HOVER_EVENT].color =  TYPOGRAPHY_03

const Style3Path = {}
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style3Path[COLOR_ATTRIBUTE] = DARK_OPTION

const style3Wrapper = {}
style3Wrapper[STYLE_OBJECT] = {...Style3}
style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_BUTTONS_GROUP_COMPONENT
style3Wrapper[PATH_STYLE] = Style3Path

Styles.push(style3Wrapper)

const Style4 = JSON.parse(JSON.stringify(Style2))

Style4[BUTTONS_WRAPPER].borderColor = WHITE
Style4[BUTTON_i_COMPONENT].color = TYPOGRAPHY_03
Style4[BUTTON_i_COMPONENT][ACTIVE_BUTTONS_GROUP_EVENT].backgroundColor =  PRIMARY_BUTTON_LIGHT_ACTIVE
Style4[BUTTON_i_COMPONENT][ACTIVE_BUTTONS_GROUP_EVENT].color =  TYPOGRAPHY_01
Style4[BUTTON_i_COMPONENT][HOVER_EVENT].color =  TYPOGRAPHY_03
Style4[TEXT_BUTTON].color = TYPOGRAPHY_03
Style4[TEXT_BUTTON][ACTIVE_BUTTONS_GROUP_EVENT].color =  TYPOGRAPHY_01
Style4[TEXT_BUTTON][HOVER_EVENT].color =  TYPOGRAPHY_03

const Style4Path = {}
Style4Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style4Path[COLOR_ATTRIBUTE] = DARK_OPTION

const style4Wrapper = {}
style4Wrapper[STYLE_OBJECT] = {...Style4}
style4Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_BUTTONS_GROUP_COMPONENT
style4Wrapper[PATH_STYLE] = Style4Path

Styles.push(style4Wrapper)
export {Styles};