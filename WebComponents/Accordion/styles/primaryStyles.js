
import {REGULAR_ACCORDION_COMPONENT} from "../constants.js"
import {COLOR_ATTRIBUTE,
        SIZE_ATTRIBUTE} from "../constants.js"
import {DARK_OPTION, 
        LIGHT_OPTION, 
        LARGE_OPTION, 
        MEDIUM_OPTION, 
        SMALL_OPTION} from "../constants.js"
import {CONTAINER_SUBCOMPONENT,
        TITLE_SUBCOMPONENT,
        TEXT_TITLE_SUBCOMPONENT,
        ICON_WRAPPER_SUBCOMPONENT,
        ICON_PARENT_TITLE_SUBCOMPONENT, 
        ICON_CHILD_SUBCOMPONENT,
        CONTENT_SUBCOMPONENT} from "../constants.js"
import {OPEN_ACCORDION_EVENT} from "../constants.js"
import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY, TYPOGRAPHY_01, TYPOGRAPHY_03, DARK_GREY, LIGHT_GREY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
const Styles = []
//*----------------STYLING ACCORDIONS ------------------------*/
//SubCOmponents
// SHADOW DOM
// I----------->CONTAINER_SUBCOMPONENT
//                  I----------->TITLE_SUBCOMPONENT
//                  I                  I----------->TEXT_TITLE_SUBCOMPONENT
//                  I                                   I----------->ICON_PARENT_TITLE_SUBCOMPONENT
//                  I                                                   I----------->ICON_CHILD_SUBCOMPONENT
//                  I----------->CONTENT_SUBCOMPONENT
//*----------------NEW ACCORDION ------------------------*/

//*BLACK  BIG*/
const Style1 = {}
Style1 [CONTAINER_SUBCOMPONENT] = {
    margin: "0px",
    padding: "0px",
    borderStyle: "none",
    display: "contents",
  
}

Style1[TITLE_SUBCOMPONENT] = {
    boxSizing: "border-box",
    cursor: "pointer",
    borderStyle: "none",
    borderTopStyle: "solid",
    borderTopColor: DARK_GREY,
    borderTopWidth: "1px",
    margin: "0px",
    padding: "22px 0px",
    width: "100%",
    display: "flex",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "32px",
    backgroundColor: "transparent",
}
Style1[TEXT_TITLE_SUBCOMPONENT] = {
    color: TYPOGRAPHY_01,
    fontFamily: "Roboto, Sans-Serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "24px",
    lineHeight: "28px",
    width: "calc(100% - 64px)",
    overflow: "hidden",
    textAlign: "left"
}
Style1[ICON_WRAPPER_SUBCOMPONENT] = {
    height: "32px",
    width: "32px",
}
Style1[ICON_PARENT_TITLE_SUBCOMPONENT] = {
    color: TYPOGRAPHY_01,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "32px",
    width: "32px",
    transition: "transform 1s",
    transform: "rotate(90deg)",
}
Style1[ICON_PARENT_TITLE_SUBCOMPONENT][OPEN_ACCORDION_EVENT] = {
    transform: "rotate(0deg)",
    
}
Style1[CONTENT_SUBCOMPONENT] = {
    border: "none",
    margin:"none",
    height: "0px",
    transition: "height 1s",
    overflow: "hidden"
}
Style1[CONTENT_SUBCOMPONENT][OPEN_ACCORDION_EVENT] = {

}
Style1[ICON_CHILD_SUBCOMPONENT] = {
    height: "32px",
    width: "32px",
}
const Style1Path = {}
Style1Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style1Path [SIZE_ATTRIBUTE] = LARGE_OPTION

const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_ACCORDION_COMPONENT
style1Wrapper[PATH_STYLE] = Style1Path

Styles.push(style1Wrapper)

//*----------------NEW ACCORDION ------------------------*/

//*BLACK  SMALL*/
const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[TITLE_SUBCOMPONENT].padding =  "20px 0px"
Style2[TEXT_TITLE_SUBCOMPONENT].fontSize = "20px"
Style2[TEXT_TITLE_SUBCOMPONENT].lineHeight = "24px"

const Style2Path = {}
Style2Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style2Path [SIZE_ATTRIBUTE] = MEDIUM_OPTION

const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_ACCORDION_COMPONENT
style2Wrapper[PATH_STYLE] = Style2Path

Styles.push(style2Wrapper)

//*----------------NEW ACCORDION ------------------------*/

//*BLACK  SMALLEST*/
const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[TITLE_SUBCOMPONENT].padding =  "18px 0px"
Style3[TEXT_TITLE_SUBCOMPONENT].fontSize = "16px"
Style3[TEXT_TITLE_SUBCOMPONENT].lineHeight = "20px"

const Style3Path = {}
Style3Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style3Path [SIZE_ATTRIBUTE] = SMALL_OPTION

const style3Wrapper = {}
style3Wrapper[STYLE_OBJECT] = {...Style3}
style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_ACCORDION_COMPONENT
style3Wrapper[PATH_STYLE] = Style3Path

Styles.push(style3Wrapper)
//*----------------NEW ACCORDION ------------------------*/


//*WHITE  BIG*/
const Style4 = JSON.parse(JSON.stringify(Style1))
Style4[TITLE_SUBCOMPONENT].borderTopColor = LIGHT_GREY
Style4[TEXT_TITLE_SUBCOMPONENT].color = TYPOGRAPHY_03
Style4[ICON_PARENT_TITLE_SUBCOMPONENT].color = TYPOGRAPHY_03

const Style4Path = {}
Style4Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style4Path [SIZE_ATTRIBUTE] = LARGE_OPTION

const style4Wrapper = {}
style4Wrapper[STYLE_OBJECT] = {...Style4}
style4Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_ACCORDION_COMPONENT
style4Wrapper[PATH_STYLE] = Style4Path

Styles.push(style4Wrapper)
//*----------------NEW ACCORDION ------------------------*/

//*WHITE  SMALL*/
const Style5 = JSON.parse(JSON.stringify(Style2))
Style5[TITLE_SUBCOMPONENT].borderTopColor = LIGHT_GREY
Style5[TEXT_TITLE_SUBCOMPONENT].color = TYPOGRAPHY_03
Style5[ICON_PARENT_TITLE_SUBCOMPONENT].color = TYPOGRAPHY_03

const Style5Path = {}
Style5Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style5Path [SIZE_ATTRIBUTE] = MEDIUM_OPTION

const style5Wrapper = {}
style5Wrapper[STYLE_OBJECT] = {...Style5}
style5Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_ACCORDION_COMPONENT
style5Wrapper[PATH_STYLE] = Style5Path

Styles.push(style5Wrapper)

//*----------------NEW ACCORDION ------------------------*/

//*WHITE  SMALLEST*/
const Style6 = JSON.parse(JSON.stringify(Style3))
Style6[TITLE_SUBCOMPONENT].borderTopColor = LIGHT_GREY
Style6[TEXT_TITLE_SUBCOMPONENT].color = TYPOGRAPHY_03
Style6[ICON_PARENT_TITLE_SUBCOMPONENT].color = TYPOGRAPHY_03

const Style6Path = {}
Style6Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style6Path [SIZE_ATTRIBUTE] = SMALL_OPTION

const style6Wrapper = {}
style6Wrapper[STYLE_OBJECT] = {...Style6}
style6Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_ACCORDION_COMPONENT
style6Wrapper[PATH_STYLE] = Style6Path

Styles.push(style6Wrapper)

export {Styles};