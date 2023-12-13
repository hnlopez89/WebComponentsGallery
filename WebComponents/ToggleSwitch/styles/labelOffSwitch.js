
import {COLOR_ATTRIBUTE,
        STATE_ATTRIBUTE,
        LABEL_ATTRIBUTE,
        WIDTH_ATTRIBUTE} from "../constants.js"
import {TOGGLE_OFF_LABEL_VARIANT} from "../constants.js"
import {DARK_OPTION,
        LIGHT_OPTION,
        LABEL_OFF_OPTION,
        CLICK_TOGGLE,
        FIT_CONTENT_OPTION,
        FULL_OPTION} from "../constants.js"
import {RECT_ID,
        CIRCLE_ID} from "../constants.js"
import {SLOT_CONTAINER,
        SVG_WRAPPER,
        SVG_SUBCOMPONENT,
        CIRCLE_ON_SUBCOMPONENT, 
        CIRCLE_OFF_SUBCOMPONENT,
        LINE_ON_SUBCOMPONENT, 
        LINE_OFF_SUBCOMPONENT,
        ANIMATE_CIRCLE_OFF,
        ANIMATE_CIRCLE_ON,
        ANIMATE_LINE_OFF_1_SUBCOMPONENT,
        ANIMATE_LINE_OFF_2_SUBCOMPONENT,
        ANIMATE_LINE_ON_SUBCOMPONENT } from "../constants.js"
import {PATH_STYLE,
        STYLE_OBJECT,
        COMPONENT_VARIANT_KEY,
        TYPOGRAPHY_01,
        DARK_GREY,
        MEDIUM_GREY,
        BRAND_CLAY_2} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { SIZE_STYLES } from "./commonStyles.js"
const toggleOffStyles = []
//*----------------STYLING BUTTONS ------------------------*/

//*----------------NEW BUTTON ------------------------*/

//* PRIMARY DESKTOP BLACK NORMAL OFFICON */
const Style1 = {}
Style1[SLOT_CONTAINER] = {
        display:        'none',
}
Style1[SVG_WRAPPER] = {
        cursor:         'pointer',
        display:        'flex',
        alignItems:     'center',
        position:       'relative',
        boxSizing:      'border-box',
        width:          '56px',
        height:         '20px',
        backgroundColor:'transparent',
}
Style1[SVG_SUBCOMPONENT] = {
        viewBox:        "0 0 56 20",
        width:          "100%",
        height:         "100%"
}
Style1[CIRCLE_ON_SUBCOMPONENT] = {
        cx:             "46",
        cy:             "10",
        r:              "10",
        fill:           TYPOGRAPHY_01,
        fillRule:       "evenodd",
        id:             CIRCLE_ID
}
Style1[ANIMATE_CIRCLE_ON] = {
        attributeName:  "cx",
        from:           "10",
        to:             "46",
        begin:          "click",
        repeatcount:    "1",
        fill:           "freeze",
        restart:        "whenNotActive"
}
Style1[CIRCLE_OFF_SUBCOMPONENT] = {
        cx:             "10",
        cy:             "10",
        r:              "10",
        fill:           TYPOGRAPHY_01,
        fillRule:       "evenodd",
        id:             CIRCLE_ID
}
Style1[ANIMATE_CIRCLE_OFF] = {
        attributeName:  "cx",
        from:           "46",
        to:             "10",
        begin:          "click",
        repeatcount:    "1",
        fill:           "freeze",
        restart:        "whenNotActive"
}
Style1[LINE_ON_SUBCOMPONENT] = {
        x:              "0",
        y:              "8",
        height:         "4",
        width:          "36",
        fill:           TYPOGRAPHY_01,
        fillRule:       "evenodd",
        id:             RECT_ID
}
Style1[ANIMATE_LINE_ON_SUBCOMPONENT] = {
        attributeName:  "width",
        from:           "20",
        to:             "36",
        begin:          "click",
        repeatcount:    "1",
        fill:           "freeze",
        restart:        "whenNotActive"
}
Style1[LINE_OFF_SUBCOMPONENT] = {
        x:              "20",
        y:              "8",
        height:         "4",
        width:          "36",
        fill:           MEDIUM_GREY,
        fillRule:       "evenodd",
        id:             RECT_ID
}
Style1[ANIMATE_LINE_OFF_1_SUBCOMPONENT] = {
        attributeName:  "width",
        from:           "20",
        to:             "36",
        begin:          "click",
        repeatcount:    "1",
        fill:           "freeze",
        restart:        "whenNotActive"
}
Style1[ANIMATE_LINE_OFF_2_SUBCOMPONENT] = {
        attributeName:  "x",
        from:           "36",
        to:             "20",
        begin:          "click",
        repeatcount:    "1",
        fill:           "freeze",
        restart:        "whenNotActive"
}

const Style1Path = {}
Style1Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style1Path[LABEL_ATTRIBUTE] = LABEL_OFF_OPTION
Style1Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper1 = {}
styleWrapper1[STYLE_OBJECT] = {...Style1}
styleWrapper1[COMPONENT_VARIANT_KEY] = TOGGLE_OFF_LABEL_VARIANT
styleWrapper1[PATH_STYLE] = Style1Path


toggleOffStyles.push(styleWrapper1)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[CIRCLE_ON_SUBCOMPONENT].fill = BRAND_CLAY_2
Style2[CIRCLE_OFF_SUBCOMPONENT].fill = BRAND_CLAY_2
Style2[LINE_OFF_SUBCOMPONENT].fill = DARK_GREY
Style2[LINE_ON_SUBCOMPONENT].fill = BRAND_CLAY_2

const Style2Path = {}
Style2Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style2Path[LABEL_ATTRIBUTE] = LABEL_OFF_OPTION
Style2Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper2 = {}
styleWrapper2[STYLE_OBJECT] = {...Style2}
styleWrapper2[COMPONENT_VARIANT_KEY] = TOGGLE_OFF_LABEL_VARIANT
styleWrapper2[PATH_STYLE] = Style2Path

toggleOffStyles.push(styleWrapper2)

const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[SVG_WRAPPER].width = "100%"
delete Style3[SVG_SUBCOMPONENT].viewBox
Style3[CIRCLE_ON_SUBCOMPONENT].cx = "calc(100% - 10px)"
Style3[ANIMATE_CIRCLE_ON].to = "calc(100% - 10px)"
Style3[ANIMATE_CIRCLE_OFF].from = "calc(100% - 10px)"
Style3[LINE_ON_SUBCOMPONENT].width = "calc(100% - 20px)"
Style3[ANIMATE_LINE_ON_SUBCOMPONENT].to = "calc(100% - 20px)"
Style3[LINE_OFF_SUBCOMPONENT].width = "calc(100% - 20px)"
Style3[ANIMATE_LINE_OFF_1_SUBCOMPONENT].to = "calc(100% - 20px)"
Style3[ANIMATE_LINE_OFF_2_SUBCOMPONENT].from = "calc(100% - 20px)"

const Style3Path = {}
Style3Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style3Path[LABEL_ATTRIBUTE] = LABEL_OFF_OPTION
Style3Path[WIDTH_ATTRIBUTE] = FULL_OPTION

const styleWrapper3 = {}
styleWrapper3[STYLE_OBJECT] = {...Style3}
styleWrapper3[COMPONENT_VARIANT_KEY] = TOGGLE_OFF_LABEL_VARIANT
styleWrapper3[PATH_STYLE] = Style3Path

toggleOffStyles.push(styleWrapper3)

const Style4 = JSON.parse(JSON.stringify(Style3))
Style4[CIRCLE_ON_SUBCOMPONENT].fill = BRAND_CLAY_2
Style4[CIRCLE_OFF_SUBCOMPONENT].fill = BRAND_CLAY_2
Style4[LINE_OFF_SUBCOMPONENT].fill = DARK_GREY
Style4[LINE_ON_SUBCOMPONENT].fill = BRAND_CLAY_2

const Style4Path = {}
Style4Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style4Path[LABEL_ATTRIBUTE] = LABEL_OFF_OPTION
Style4Path[WIDTH_ATTRIBUTE] = FULL_OPTION

const styleWrapper4 = {}
styleWrapper4[STYLE_OBJECT] = {...Style4}
styleWrapper4[COMPONENT_VARIANT_KEY] = TOGGLE_OFF_LABEL_VARIANT
styleWrapper4[PATH_STYLE] = Style4Path

toggleOffStyles.push(styleWrapper4)
export  {toggleOffStyles};