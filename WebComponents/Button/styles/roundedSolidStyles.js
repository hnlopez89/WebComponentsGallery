
import {HIERARCHY_ATTRIBUTE, 
    SIZE_ATTRIBUTE, 
    COLOR_ATTRIBUTE,
    STATE_ATTRIBUTE,
    ICON_ATTRIBUTE,
    WIDTH_ATTRIBUTE} from "../constants.js"
import {ROUNDED_SOLID_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    DARK_OPTION,
    LIGHT_OPTION,
    ACTIVE_OPTION,
    INACTIVE_OPTION,
    ON_OPTION,
    OFF_OPTION,
    FULL_OPTION,
    FIT_CONTENT_OPTION} from "../constants.js"
import {BUTTON_SUBCOMPONENT,
    ICON_SUBCOMPONENT,
    ICON_CONTAINER_SUBCOMPONENT,
    TEXT_SUBCOMPONENT } from "../constants.js"
import {HOVER_BUTTON_EVENT, FOCUS_BUTTON_EVENT} from "../constants.js"
import {REGULAR_BUTTON_ICON_VARIANT, REGULAR_BUTTON_VARIANT} from "../constants.js"
import { SIZE_STYLES } from "./commonStyles.js"
import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY, TYPOGRAPHY_01, BACKGROUND_01, TYPOGRAPHY_03, TYPOGRAPHY_04, DARK_GREY, MEDIUM_GREY, BRAND_CLAY_2, VALIDATED_COLOR} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
const roundedSolidStyles = []

const Style1 = {}
Style1 [BUTTON_SUBCOMPONENT] = {
transition: "0s all ease-in-out",
background: BACKGROUND_01,
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
borderRadius: "24px",

}
Style1[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    boxShadow: "none",
transition: "0.2s all ease-in-out",
background: DARK_GREY,
}

Style1 [BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
    transition: "0.2s all ease-in-out",
    background: DARK_GREY,
    boxShadow: `0 0 0 4px ${VALIDATED_COLOR}`,

    }
Style1[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_03,
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style1Path = {}
Style1Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style1Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style1Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style1Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style1Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper1 = {}
styleWrapper1[STYLE_OBJECT] = {...Style1}
styleWrapper1[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper1[PATH_STYLE] = Style1Path
roundedSolidStyles.push(styleWrapper1)

const Style3 = {}
Style3 [BUTTON_SUBCOMPONENT] = {
background: MEDIUM_GREY,
borderRadius: "24px",

...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
}
Style3[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style3Path = {}
Style3Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style3Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style3Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style3Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style3Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper3 = {}
styleWrapper3[STYLE_OBJECT] = {...Style3}
styleWrapper3[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper3[PATH_STYLE] = Style3Path
roundedSolidStyles.push(styleWrapper3)


const Style4 = {}

Style4 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
background: BACKGROUND_01,
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
borderRadius: "24px",
}
Style4[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    background: DARK_GREY,
    }
Style4[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_03,
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style4[ICON_CONTAINER_SUBCOMPONENT] ={
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
color: TYPOGRAPHY_03,
}
Style4[ICON_SUBCOMPONENT] = {
color: TYPOGRAPHY_03,
width: "20px",
height: "20px",
}

Style4 [BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
    transition: "0.2s all ease-in-out",
    background: DARK_GREY,
    boxShadow: `0 0 0 4px ${VALIDATED_COLOR}`,

}

const Style4Path = {}
Style4Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style4Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style4Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style4Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style4Path[ICON_ATTRIBUTE] = ON_OPTION 
Style4Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper4 = {}
styleWrapper4[STYLE_OBJECT] = {...Style4}
styleWrapper4[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper4[PATH_STYLE] = Style4Path
roundedSolidStyles.push(styleWrapper4)

const Style6 = {}

Style6 [BUTTON_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    background: MEDIUM_GREY,
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
    cursor: "default",
    borderRadius: "24px",
    }

Style6[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style6[ICON_CONTAINER_SUBCOMPONENT] ={
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
color: TYPOGRAPHY_04,
}
Style6[ICON_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
width: "20px",
height: "20px",
}
const Style6Path = {}
Style6Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style6Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style6Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style6Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style6Path[ICON_ATTRIBUTE] = ON_OPTION 
Style6Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper6 = {}
styleWrapper6[STYLE_OBJECT] = {...Style6}
styleWrapper6[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper6[PATH_STYLE] = Style6Path
roundedSolidStyles.push(styleWrapper6)


const Style7 = {}
Style7 [BUTTON_SUBCOMPONENT] = {
transition: "0s all ease-in-out",
background: BACKGROUND_01,
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
borderRadius: "24px",
}
Style7[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    transition: "0.2s all ease-in-out",
    background: DARK_GREY,
}

Style7[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_03,
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style7 [BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
    transition: "0.2s all ease-in-out",
    background: DARK_GREY,
    boxShadow: `0 0 0 4px ${VALIDATED_COLOR}`,

    }


const Style7Path = {}
Style7Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style7Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style7Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style7Path[STATE_ATTRIBUTE] = ACTIVE_OPTION
Style7Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style7Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper7 = {}
styleWrapper7[STYLE_OBJECT] = {...Style7}
styleWrapper7[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper7[PATH_STYLE] = Style7Path
roundedSolidStyles.push(styleWrapper7)

const Style9 = {}
Style9 [BUTTON_SUBCOMPONENT] = {
background: MEDIUM_GREY,

...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
borderRadius: "24px",
}
Style9[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style9Path = {}
Style9Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style9Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style9Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style9Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style9Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style9Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper9 = {}
styleWrapper9[STYLE_OBJECT] = {...Style9}
styleWrapper9[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper9[PATH_STYLE] = Style9Path
roundedSolidStyles.push(styleWrapper9)


const Style10 = {}

Style10 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
background: BACKGROUND_01,
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
borderRadius: "24px",
}
Style10[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    background: DARK_GREY,
    }
Style10[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_03,
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style10[ICON_CONTAINER_SUBCOMPONENT] ={
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
color: TYPOGRAPHY_03,
}
Style10[ICON_SUBCOMPONENT] = {
color: TYPOGRAPHY_03,
width: "20px",
height: "20px",
}

Style10 [BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
    transition: "0.2s all ease-in-out",
    background: DARK_GREY,
    boxShadow: `0 0 0 4px ${VALIDATED_COLOR}`,

    }

const Style10Path = {}
Style10Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style10Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style10Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style10Path[STATE_ATTRIBUTE] = ACTIVE_OPTION
Style10Path[ICON_ATTRIBUTE] = ON_OPTION 
Style10Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper10 = {}
styleWrapper10[STYLE_OBJECT] = {...Style10}
styleWrapper10[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper10[PATH_STYLE] = Style10Path
roundedSolidStyles.push(styleWrapper10)

const Style12 = {}

Style12 [BUTTON_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    background: MEDIUM_GREY,
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
    cursor: "default",
    borderRadius: "24px",
    }

Style12[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style12[ICON_CONTAINER_SUBCOMPONENT] ={
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
color: TYPOGRAPHY_04,
}
Style12[ICON_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
width: "20px",
height: "20px",
}
const Style12Path = {}
Style12Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style12Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style12Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style12Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style12Path[ICON_ATTRIBUTE] = ON_OPTION 
Style12Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper12 = {}
styleWrapper12[STYLE_OBJECT] = {...Style12}
styleWrapper12[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper12[PATH_STYLE] = Style12Path
roundedSolidStyles.push(styleWrapper12)

const Style13 = {}
Style13 [BUTTON_SUBCOMPONENT] = {
transition: "0s all ease-in-out",
background: BACKGROUND_01,
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
borderRadius: "24px",

}
Style13[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    transition: "0.2s all ease-in-out",
    background: DARK_GREY,
}

Style13[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_03,
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style13[BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
    transition: "0.2s all ease-in-out",
    background: DARK_GREY,
    boxShadow: `0 0 0 4px ${VALIDATED_COLOR}`,

    }

const Style13Path = {}
Style13Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style13Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style13Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style13Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style13Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style13Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper13 = {}
styleWrapper13[STYLE_OBJECT] = {...Style13}
styleWrapper13[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper13[PATH_STYLE] = Style13Path
roundedSolidStyles.push(styleWrapper13)

const Style15 = {}
Style15 [BUTTON_SUBCOMPONENT] = {
background: MEDIUM_GREY,

...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
borderRadius: "24px",
}
Style15[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style15Path = {}
Style15Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style15Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style15Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style15Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style15Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style15Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper15 = {}
styleWrapper15[STYLE_OBJECT] = {...Style15}
styleWrapper15[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper15[PATH_STYLE] = Style15Path
roundedSolidStyles.push(styleWrapper15)


const Style16 = {}

Style16 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
background: BACKGROUND_01,
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
borderRadius: "24px",
}
Style16[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    background: DARK_GREY,
    }
Style16[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_03,
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style16[ICON_CONTAINER_SUBCOMPONENT] ={
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
color: TYPOGRAPHY_03,
}
Style16[ICON_SUBCOMPONENT] = {
color: TYPOGRAPHY_03,
width: "20px",
height: "20px",
}

Style16[BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
    transition: "0.2s all ease-in-out",
    background: DARK_GREY,
    boxShadow: `0 0 0 4px ${VALIDATED_COLOR}`,
    }

const Style16Path = {}
Style16Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style16Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style16Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style16Path[STATE_ATTRIBUTE] = ACTIVE_OPTION
Style16Path[ICON_ATTRIBUTE] = ON_OPTION 
Style16Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper16 = {}
styleWrapper16[STYLE_OBJECT] = {...Style16}
styleWrapper16[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper16[PATH_STYLE] = Style16Path
roundedSolidStyles.push(styleWrapper16)

const Style18 = {}

Style18 [BUTTON_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    background: MEDIUM_GREY,
    ...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
    cursor: "default",
    borderRadius: "24px",
    }

Style18[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style18[ICON_CONTAINER_SUBCOMPONENT] ={
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
color: TYPOGRAPHY_04,
}
Style18[ICON_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
width: "20px",
height: "20px",
}
const Style18Path = {}
Style18Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style18Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style18Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style18Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style18Path[ICON_ATTRIBUTE] = ON_OPTION 
Style18Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper18 = {}
styleWrapper18[STYLE_OBJECT] = {...Style18}
styleWrapper18[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper18[PATH_STYLE] = Style18Path
roundedSolidStyles.push(styleWrapper18)


const Style19 = {}
Style19 [BUTTON_SUBCOMPONENT] = {
transition: "0s all ease-in-out",
background: BRAND_CLAY_2,
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
borderRadius: "24px",

}
Style19[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
transition: "0.2s all ease-in-out",
background: TYPOGRAPHY_03,
}

Style19[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_01,
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style19[BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
    transition: "0.2s all ease-in-out",
    background: TYPOGRAPHY_03,
    boxShadow: `0 0 0 4px ${VALIDATED_COLOR}`,

    }

const Style19Path = {}
Style19Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style19Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style19Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style19Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style19Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style19Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper19 = {}
styleWrapper19[STYLE_OBJECT] = {...Style19}
styleWrapper19[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper19[PATH_STYLE] = Style19Path
roundedSolidStyles.push(styleWrapper19)

const Style21 = {}
Style21 [BUTTON_SUBCOMPONENT] = {
background: DARK_GREY,

...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
borderRadius: "24px",
}
Style21[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style21Path = {}
Style21Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style21Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style21Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style21Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style21Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style21Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper21 = {}
styleWrapper21[STYLE_OBJECT] = {...Style21}
styleWrapper21[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper21[PATH_STYLE] = Style21Path
roundedSolidStyles.push(styleWrapper21)


const Style22 = {}

Style22 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
background: BRAND_CLAY_2,
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
borderRadius: "24px",
}
Style22[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    background: TYPOGRAPHY_03,
    }
Style22[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_01,
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style22[ICON_CONTAINER_SUBCOMPONENT] ={
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
color: TYPOGRAPHY_01,
}
Style22[ICON_SUBCOMPONENT] = {
color: TYPOGRAPHY_01,
width: "20px",
height: "20px",
}

Style22[BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
    transition: "0.2s all ease-in-out",
    background: TYPOGRAPHY_03,
    boxShadow: `0 0 0 4px ${VALIDATED_COLOR}`,
}

const Style22Path = {}
Style22Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style22Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style22Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style22Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style22Path[ICON_ATTRIBUTE] = ON_OPTION 
Style22Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper22 = {}
styleWrapper22[STYLE_OBJECT] = {...Style22}
styleWrapper22[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper22[PATH_STYLE] = Style22Path
roundedSolidStyles.push(styleWrapper22)

const Style24 = {}

Style24 [BUTTON_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    background: DARK_GREY,
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
    cursor: "default",
    borderRadius: "24px",
    }

Style24[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style24[ICON_CONTAINER_SUBCOMPONENT] ={
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
color: TYPOGRAPHY_04,
}
Style24[ICON_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
width: "20px",
height: "20px",
}
const Style24Path = {}
Style24Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style24Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style24Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style24Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style24Path[ICON_ATTRIBUTE] = ON_OPTION 
Style24Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper24 = {}
styleWrapper24[STYLE_OBJECT] = {...Style24}
styleWrapper24[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper24[PATH_STYLE] = Style24Path
roundedSolidStyles.push(styleWrapper24)


const Style25 = {}
Style25 [BUTTON_SUBCOMPONENT] = {
transition: "0s all ease-in-out",
background: BRAND_CLAY_2,
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
borderRadius: "24px",

}
Style25[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
transition: "0.2s all ease-in-out",
background: TYPOGRAPHY_03,
}

Style25[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_01,
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style25[BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
    transition: "0.2s all ease-in-out",
    background: TYPOGRAPHY_03,
    boxShadow: `0 0 0 4px ${VALIDATED_COLOR}`,
}

const Style25Path = {}
Style25Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style25Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style25Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style25Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style25Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style25Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper25 = {}
styleWrapper25[STYLE_OBJECT] = {...Style25}
styleWrapper25[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper25[PATH_STYLE] = Style25Path
roundedSolidStyles.push(styleWrapper25)

const Style27 = {}
Style27 [BUTTON_SUBCOMPONENT] = {
background: DARK_GREY,

...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
borderRadius: "24px",
}
Style27[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style27Path = {}
Style27Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style27Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style27Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style27Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style27Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style27Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper27 = {}
styleWrapper27[STYLE_OBJECT] = {...Style27}
styleWrapper27[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper27[PATH_STYLE] = Style27Path
roundedSolidStyles.push(styleWrapper27)


const Style28 = {}

Style28 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
background: BRAND_CLAY_2,
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
borderRadius: "24px",
}
Style28[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    background: TYPOGRAPHY_03,
    }
Style28[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_01,
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style28[ICON_CONTAINER_SUBCOMPONENT] ={
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
color: TYPOGRAPHY_01,
}
Style28[ICON_SUBCOMPONENT] = {
color: TYPOGRAPHY_01,
width: "20px",
height: "20px",
}
Style28[BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
    transition: "0.2s all ease-in-out",
    background: TYPOGRAPHY_03,
    boxShadow: `0 0 0 4px ${VALIDATED_COLOR}`,
}

const Style28Path = {}
Style28Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style28Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style28Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style28Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style28Path[ICON_ATTRIBUTE] = ON_OPTION 
Style28Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper28 = {}
styleWrapper28[STYLE_OBJECT] = {...Style28}
styleWrapper28[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper28[PATH_STYLE] = Style28Path
roundedSolidStyles.push(styleWrapper28)

const Style30 = {}

Style30 [BUTTON_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    background: DARK_GREY,
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
    cursor: "default",
    borderRadius: "24px",
    }

Style30[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style30[ICON_CONTAINER_SUBCOMPONENT] ={
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
color: TYPOGRAPHY_04,
}
Style30[ICON_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
width: "20px",
height: "20px",
}
const Style30Path = {}
Style30Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style30Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style30Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style30Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style30Path[ICON_ATTRIBUTE] = ON_OPTION 
Style30Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper30 = {}
styleWrapper30[STYLE_OBJECT] = {...Style30}
styleWrapper30[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper30[PATH_STYLE] = Style30Path
roundedSolidStyles.push(styleWrapper30)

const Style31 = {}
Style31 [BUTTON_SUBCOMPONENT] = {
transition: "0s all ease-in-out",
background: BRAND_CLAY_2,
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
borderRadius: "24px",

}
Style31[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
transition: "0.2s all ease-in-out",
background: TYPOGRAPHY_03,
}

Style31[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_01,
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style31[BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
    transition: "0.2s all ease-in-out",
    background: TYPOGRAPHY_03,
    boxShadow: `0 0 0 4px ${VALIDATED_COLOR}`,
}

const Style31Path = {}
Style31Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style31Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style31Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style31Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style31Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style31Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper31 = {}
styleWrapper31[STYLE_OBJECT] = {...Style31}
styleWrapper31[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper31[PATH_STYLE] = Style31Path
roundedSolidStyles.push(styleWrapper31)

const Style33 = {}
Style33 [BUTTON_SUBCOMPONENT] = {
background: DARK_GREY,

...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
borderRadius: "24px",
}
Style33[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style33Path = {}
Style33Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style33Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style33Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style33Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style33Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style33Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper33 = {}
styleWrapper33[STYLE_OBJECT] = {...Style33}
styleWrapper33[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper33[PATH_STYLE] = Style33Path
roundedSolidStyles.push(styleWrapper33)


const Style34 = {}

Style34 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
background: BRAND_CLAY_2,
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
borderRadius: "24px",
}
Style34[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    background: TYPOGRAPHY_03,
    }
Style34[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_01,
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style34[ICON_CONTAINER_SUBCOMPONENT] ={
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
color: TYPOGRAPHY_01,
}
Style34[ICON_SUBCOMPONENT] = {
color: TYPOGRAPHY_01,
width: "20px",
height: "20px",
}
Style34[BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
    transition: "0.2s all ease-in-out",
    background: TYPOGRAPHY_03,
    boxShadow: `0 0 0 4px ${VALIDATED_COLOR}`,
}

const Style34Path = {}
Style34Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style34Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style34Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style34Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style34Path[ICON_ATTRIBUTE] = ON_OPTION 
Style34Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper34 = {}
styleWrapper34[STYLE_OBJECT] = {...Style34}
styleWrapper34[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper34[PATH_STYLE] = Style34Path
roundedSolidStyles.push(styleWrapper34)

const Style36 = {}

Style36 [BUTTON_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    background: DARK_GREY,
    ...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
    cursor: "default",
    borderRadius: "24px",
    }

Style36[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style36[ICON_CONTAINER_SUBCOMPONENT] ={
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
color: TYPOGRAPHY_04,
}
Style36[ICON_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
width: "20px",
height: "20px",
}
const Style36Path = {}
Style36Path[HIERARCHY_ATTRIBUTE] = ROUNDED_SOLID_OPTION
Style36Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style36Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style36Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style36Path[ICON_ATTRIBUTE] = ON_OPTION 
Style36Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper36 = {}
styleWrapper36[STYLE_OBJECT] = {...Style36}
styleWrapper36[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper36[PATH_STYLE] = Style36Path
roundedSolidStyles.push(styleWrapper36)

const copyRoundedSolidStyles = []
roundedSolidStyles.forEach((style,index) => {
    copyRoundedSolidStyles.push(JSON.parse(JSON.stringify(style)))
    copyRoundedSolidStyles[index][STYLE_OBJECT][BUTTON_SUBCOMPONENT].width = "100%"
    copyRoundedSolidStyles[index][PATH_STYLE][WIDTH_ATTRIBUTE] = FULL_OPTION
})
roundedSolidStyles.push(...copyRoundedSolidStyles)

export {roundedSolidStyles}