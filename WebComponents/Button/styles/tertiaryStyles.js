import {HIERARCHY_ATTRIBUTE, 
    SIZE_ATTRIBUTE, 
    COLOR_ATTRIBUTE,
    STATE_ATTRIBUTE,
    } from "../constants.js"
import {TERTIARY_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    DARK_OPTION,
    LIGHT_OPTION,
    ACTIVE_OPTION,
    INACTIVE_OPTION} from "../constants.js"
import {BUTTON_SUBCOMPONENT,
    ICON_SUBCOMPONENT,
    ICON_CONTAINER_SUBCOMPONENT,
    ICONARROW_CONTAINER_SUBCOMPONENT,
    ICONARROW_SUBCOMPONENT,
    TEXT_SUBCOMPONENT } from "../constants.js"
import {HOVER_BUTTON_EVENT,FOCUS_BUTTON_EVENT} from "../constants.js"
import {ARROW_BUTTON_VARIANT} from "../constants.js"
import {PATH_STYLE,
    STYLE_OBJECT,
    COMPONENT_VARIANT_KEY,
    TYPOGRAPHY_01,
    TYPOGRAPHY_03,
    TYPOGRAPHY_02,
    TYPOGRAPHY_04,
    GREY,
    VALIDATED_COLOR} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { SIZE_STYLES } from "./commonStyles.js"

const tertiaryStyles = []

const Style1 = {}
Style1 [BUTTON_SUBCOMPONENT] = {
transition: "0.2s all ease-in-out",

...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style1 [BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
  
    boxShadow: `0 0 0 2px ${VALIDATED_COLOR}`,
}
Style1[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_01,
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style1[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: GREY,
}
Style1[TEXT_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
    color: GREY,
}
Style1[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: TYPOGRAPHY_01,
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],


}

Style1[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: TYPOGRAPHY_01,
    width: "20",
    height: "20",
    
    }
Style1[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: GREY,
}
Style1[ICONARROW_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
    color: GREY,
}



const Style1Path = {}
Style1Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style1Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style1Path [STATE_ATTRIBUTE] = ACTIVE_OPTION

const styleWrapper1 = {}
styleWrapper1[STYLE_OBJECT] = {...Style1}
styleWrapper1[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper1[PATH_STYLE] = Style1Path
tertiaryStyles.push(styleWrapper1)

const Style3 = {}
Style3 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
}


Style3[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style3[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: TYPOGRAPHY_04,
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],
}

Style3[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: TYPOGRAPHY_04,
    width: "20",
    height: "20",
    
    }


const Style3Path = {}
Style3Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style3Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style3Path [STATE_ATTRIBUTE] = INACTIVE_OPTION

const styleWrapper3 = {}
styleWrapper3[STYLE_OBJECT] = {...Style3}
styleWrapper3[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper3[PATH_STYLE] = Style3Path
tertiaryStyles.push(styleWrapper3)

const Style4 = {}
Style4 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style4[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_01,
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style4 [BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
  
    boxShadow: `0 0 0 2px ${VALIDATED_COLOR}`,
}


Style4[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: GREY,
}

Style4[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: TYPOGRAPHY_01,
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],


}

Style4 [BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
  
    boxShadow: `0 0 0 2px ${VALIDATED_COLOR}`,
}


Style4[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: TYPOGRAPHY_01,
    width: "20",
    height: "20",
    
    }
Style4[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: GREY,
}

const Style4Path = {}
Style4Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style4Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style4Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style4Path [STATE_ATTRIBUTE] = ACTIVE_OPTION

const styleWrapper4 = {}
styleWrapper4[STYLE_OBJECT] = {...Style4}
styleWrapper4[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper4[PATH_STYLE] = Style4Path
tertiaryStyles.push(styleWrapper4)

const Style6 = {}
Style6 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
}
Style6[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_04,
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style6[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: TYPOGRAPHY_04,
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],
}

Style6[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: TYPOGRAPHY_04,
    width: "20",
    height: "20",
    
    }


const Style6Path = {}
Style6Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style6Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style6Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style6Path [STATE_ATTRIBUTE] = INACTIVE_OPTION

const styleWrapper6 = {}
styleWrapper6[STYLE_OBJECT] = {...Style6}
styleWrapper6[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper6[PATH_STYLE] = Style6Path
tertiaryStyles.push(styleWrapper6)


const Style7 = {}
Style7 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style7[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_03,
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style7[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: TYPOGRAPHY_04,
}

Style7 [BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
  
    boxShadow: `0 0 0 2px ${VALIDATED_COLOR}`,
}


Style7[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: TYPOGRAPHY_03,
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],


}

Style7[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: TYPOGRAPHY_03,
    width: "20",
    height: "20",
    
    }
Style7[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: TYPOGRAPHY_04,
}




const Style7Path = {}
Style7Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style7Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style7Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style7Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
const styleWrapper7 = {}
styleWrapper7[STYLE_OBJECT] = {...Style7}
styleWrapper7[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper7[PATH_STYLE] = Style7Path
tertiaryStyles.push(styleWrapper7)

const Style9 = {}
Style9 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
}
Style9[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_02,
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style9[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: TYPOGRAPHY_02,
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],
}

Style9[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: TYPOGRAPHY_02,
    width: "20",
    height: "20",
    
    }


const Style9Path = {}
Style9Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style9Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style9Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style9Path [STATE_ATTRIBUTE] = INACTIVE_OPTION

const styleWrapper9 = {}
styleWrapper9[STYLE_OBJECT] = {...Style9}
styleWrapper9[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper9[PATH_STYLE] = Style9Path
tertiaryStyles.push(styleWrapper9)

const Style10 = {}
Style10 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style10[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_03,
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style10[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: TYPOGRAPHY_04,
}

Style10[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: TYPOGRAPHY_03,
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],


}

Style10 [BUTTON_SUBCOMPONENT][FOCUS_BUTTON_EVENT] = {
  
    boxShadow: `0 0 0 2px ${VALIDATED_COLOR}`,
}


Style10[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: TYPOGRAPHY_03,
    width: "20",
    height: "20",
    
    }
Style10[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: TYPOGRAPHY_04,
}




const Style10Path = {}
Style10Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style10Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style10Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style10Path [STATE_ATTRIBUTE] = ACTIVE_OPTION

const styleWrapper10 = {}
styleWrapper10[STYLE_OBJECT] = {...Style10}
styleWrapper10[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper10[PATH_STYLE] = Style10Path
tertiaryStyles.push(styleWrapper10)

const Style12 = {}
Style12 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
}
Style12[TEXT_SUBCOMPONENT] = {
color: TYPOGRAPHY_02,
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style12[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: TYPOGRAPHY_02,
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],
}

Style12[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: TYPOGRAPHY_02,
    width: "20",
    height: "20",
    
    }


const Style12Path = {}
Style12Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style12Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style12Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style12Path [STATE_ATTRIBUTE] = INACTIVE_OPTION

const styleWrapper12 = {}
styleWrapper12[STYLE_OBJECT] = {...Style12}
styleWrapper12[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper12[PATH_STYLE] = Style12Path
tertiaryStyles.push(styleWrapper12)


const styleWrapper13 = JSON.parse(JSON.stringify(styleWrapper4))
styleWrapper13[PATH_STYLE][SIZE_ATTRIBUTE] = SMALL_OPTION
tertiaryStyles.push(styleWrapper13)


const styleWrapper15 = JSON.parse(JSON.stringify(styleWrapper6))
styleWrapper15[PATH_STYLE][SIZE_ATTRIBUTE] = SMALL_OPTION
tertiaryStyles.push(styleWrapper15)

const styleWrapper16 = JSON.parse(JSON.stringify(styleWrapper10))
styleWrapper16[PATH_STYLE][SIZE_ATTRIBUTE] = SMALL_OPTION
tertiaryStyles.push(styleWrapper16)



const styleWrapper18 = JSON.parse(JSON.stringify(styleWrapper12))
styleWrapper18[PATH_STYLE][SIZE_ATTRIBUTE] = SMALL_OPTION
tertiaryStyles.push(styleWrapper18)



// new boton
export  {tertiaryStyles};