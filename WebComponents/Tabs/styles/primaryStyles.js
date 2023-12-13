import {BUTTONS_WRAPPER, BUTTON_FLEXBOX, BUTTON_i_COMPONENT, CONTENT_WRAPPER, REGULAR_TAB_COMPONENT, SLOT_WRAPPER, TABS_WRAPPER_COMPONENT, TEXT_BUTTON} from "../constants.js"
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
    // import {HOVER_BUTTON_EVENT} from "../constants.js"
import {ACTIVE_TAB_EVENT,HOVER_EVENT} from "../constants.js"
import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY, TYPOGRAPHY_01, TYPOGRAPHY_03, TYPOGRAPHY_04, GREY, PRIMARY_BUTTON_DARK_ACTIVE, SECONDARY_BUTTON_LIGHT_ACTIVE} from "../../commonMethodsAndConstants/Styles/commonConstants.js"

const Styles = []
//*----------------STYLING TABS ------------------------*/
//SubCOmponents
// SHADOW DOM
// I----------->WRAPPER COMPONENT
//                  I----------->LIST COMPONENT
//                  I                  I----------->LIST ITEM COMPONENT
//                  I                                   I----------->BUTTON SUBCOMPONENT
//                  I                                                       I----------->TEXT_BUTTON
//                  I----------->CONTENT COMPONENT

//*----------------NEW TABS ------------------------*/

const Style1 = {}

 
Style1 [SLOT_WRAPPER] = {
     display: "none", 
}
Style1 [TABS_WRAPPER_COMPONENT] = {
    fontFamily: "Roboto, Sans-Serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0px",
    boxSizing: "border-box",
    width: "100%",
}
Style1 [BUTTONS_WRAPPER] = {
    width: "100%",
    overflowX: "scroll",

}
Style1 [BUTTON_FLEXBOX] = {
    height: "29px",
    minWidth: "fit-content",
    display: "flex",  
    flexWrap: "nowrap",
    

}
Style1 [BUTTON_i_COMPONENT] = {
    border: "none",
    height: "100%",
    position: "relative",
    boxSizing: "border-box",
    background: "none",
	color: "inherit",
	padding: "4px 16px 5px",
	cursor: "pointer",
	outline: "inherit",
    backgroundColor: 'none',
    textAlign: "center",
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: 'normal',
    fontWeight: '350',
    fontSize: '16px',
    lineHeight: '20px',
    color:GREY,
    whiteSpace: "nowrap",
    borderBottom: "0px solid transparent",
    transition: "0.2s all ease-in-out",
    

}
Style1 [BUTTON_i_COMPONENT][ACTIVE_TAB_EVENT] = {
    
    padding: "4px 16px",
    fontFamily: 'Roboto, Sans-Serif',
    fontWeight: "400",
    color: TYPOGRAPHY_01,
    borderBottom: `1px solid ${PRIMARY_BUTTON_DARK_ACTIVE}`,
}
Style1 [BUTTON_i_COMPONENT][HOVER_EVENT] = {
    padding: "4px 16px 5px",
    fontFamily: 'Roboto, Sans-Serif',
    fontWeight: '400',
    fontSize: '16px',
}

Style1 [TEXT_BUTTON] = {
    width: "fit-content",
    maxWidth: "calc(100% - 32px)",
    overflow: "hidden",
    position: "absolute",
    top: "4px",
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
    fontSize: '16px',
    lineHeight: '20px',
    color: GREY,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    //transition: "0.2s all ease-in-out",
    

}
Style1 [TEXT_BUTTON][ACTIVE_TAB_EVENT] = {
    
    fontFamily: 'Roboto, Sans-Serif',
    fontWeight: "400",
    color: TYPOGRAPHY_01,
}
Style1 [TEXT_BUTTON][HOVER_EVENT] = {
    maxWidth: "calc(100% - 30px)",
    fontFamily: 'Roboto, Sans-Serif',
    fontWeight: '400',
    fontSize: '16px',
}

Style1 [CONTENT_WRAPPER] = {
    width: "100%",
    height: "fit-content",
    overflow: "hidden"
}
const Style1Path = {}
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style1Path[COLOR_ATTRIBUTE] = DARK_OPTION

const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TAB_COMPONENT
style1Wrapper[PATH_STYLE] = Style1Path

Styles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[BUTTON_FLEXBOX].height = "25px"
Style2 [BUTTON_i_COMPONENT]['fontSize'] = "14px"
Style2 [BUTTON_i_COMPONENT]['lineHeight'] = "16px"
Style2 [BUTTON_i_COMPONENT][HOVER_EVENT]['fontSize'] = "14px"
Style2 [TEXT_BUTTON]['fontSize'] = "14px"
Style2 [TEXT_BUTTON]['lineHeight'] = "16px"
Style2 [TEXT_BUTTON][HOVER_EVENT]['fontSize'] = "14px"

const Style2Path = {}
Style2Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style2Path[COLOR_ATTRIBUTE] = DARK_OPTION

const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TAB_COMPONENT
style2Wrapper[PATH_STYLE] = Style2Path

Styles.push(style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[BUTTON_i_COMPONENT].color = TYPOGRAPHY_04
Style3[BUTTON_i_COMPONENT][ACTIVE_TAB_EVENT].color =  TYPOGRAPHY_03
Style3[BUTTON_i_COMPONENT][ACTIVE_TAB_EVENT].borderBottom = `1px solid ${SECONDARY_BUTTON_LIGHT_ACTIVE}`
Style3[BUTTON_i_COMPONENT][HOVER_EVENT].color =  TYPOGRAPHY_03
Style3[TEXT_BUTTON].color = TYPOGRAPHY_04
Style3[TEXT_BUTTON][ACTIVE_TAB_EVENT].color =  TYPOGRAPHY_03
Style3[TEXT_BUTTON][HOVER_EVENT].color =  TYPOGRAPHY_03

const Style3Path = {}
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style3Path[COLOR_ATTRIBUTE] = LIGHT_OPTION

const style3Wrapper = {}
style3Wrapper[STYLE_OBJECT] = {...Style3}
style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TAB_COMPONENT
style3Wrapper[PATH_STYLE] = Style3Path

Styles.push(style3Wrapper)

const Style4 = JSON.parse(JSON.stringify(Style2))
Style4[BUTTON_i_COMPONENT].color = TYPOGRAPHY_04
Style4[BUTTON_i_COMPONENT].fontSize = "14px"
Style4[BUTTON_i_COMPONENT].lineHeight = "16px"
Style4[BUTTON_i_COMPONENT][HOVER_EVENT]['fontSize'] = "14px"
Style4[BUTTON_i_COMPONENT][ACTIVE_TAB_EVENT].color =  TYPOGRAPHY_03
Style4[BUTTON_i_COMPONENT][ACTIVE_TAB_EVENT].borderBottom = `1px solid ${SECONDARY_BUTTON_LIGHT_ACTIVE}`
Style4[BUTTON_i_COMPONENT][HOVER_EVENT].color =  TYPOGRAPHY_03

Style4[TEXT_BUTTON]['fontSize'] = "14px"
Style4[TEXT_BUTTON]['lineHeight'] = "16px"
Style4[TEXT_BUTTON][HOVER_EVENT]['fontSize'] = "14px"
Style4[TEXT_BUTTON].color = TYPOGRAPHY_04
Style4[TEXT_BUTTON][ACTIVE_TAB_EVENT].color =  TYPOGRAPHY_03
Style4[TEXT_BUTTON][HOVER_EVENT].color =  TYPOGRAPHY_03

const Style4Path = {}
Style4Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style4Path[COLOR_ATTRIBUTE] = LIGHT_OPTION

const style4Wrapper = {}
style4Wrapper[STYLE_OBJECT] = {...Style4}
style4Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TAB_COMPONENT
style4Wrapper[PATH_STYLE] = Style4Path

Styles.push(style4Wrapper)
export {Styles};