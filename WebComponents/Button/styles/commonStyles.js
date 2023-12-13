import {LARGE_OPTION,
    SMALL_OPTION,
    MEDIUM_OPTION,
    REGULAR_BUTTON_VARIANT,
    REGULAR_BUTTON_ICON_VARIANT,
    ARROW_BUTTON_VARIANT,
    ICON_BUTTON_VARIANT,
    BUTTON_SUBCOMPONENT,
    TEXT_SUBCOMPONENT,
    ICON_CONTAINER_SUBCOMPONENT,
    ICONARROW_CONTAINER_SUBCOMPONENT} from "../constants.js"
const SIZE_STYLES = {}

SIZE_STYLES[LARGE_OPTION] = {}

SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT] = {}
SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT] = {
outline: "none",
display: "flex",
justifyContent: "center",
alignItems: "center",
textDecoration: "none",
padding: "13px 16px 15px",
minWidth: "214px",
width: "fit-content",
height: "48px",
boxSizing: "border-box",
border: "none",
boxShadow: "none",
cursor: "pointer",

}
SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT] = {
fontFamily: "Roboto, Sans-Serif",
fontStyle: "normal",
fontWeight: "400",
fontSize: "16px",
height: "20px",
maxWidth: "638px",
width: "fit-content",
overflow: "hidden",
lineHeight: "20px",
whiteSpace: "nowrap",
userSelect: "none",
}

SIZE_STYLES[MEDIUM_OPTION] = {}

SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT] = {}
SIZE_STYLES [MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT] = {
outline: "none",
display: "flex",
justifyContent: "center",
alignItems: "center",
textDecoration: "none",
padding: "11px 16px 13px",
minWidth: "212px",
width: "fit-content",
boxSizing: "border-box",
height: "40px",
border: "none",
boxShadow: "none",
cursor: "pointer",
}
SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT] = {
fontFamily: "Roboto, Sans-Serif",
fontStyle: "normal",
fontWeight: "400",
fontSize: "14px",
height: "16px",
maxWidth: "919px",
width: "fit-content",
overflow: "hidden",
lineHeight: "16px",
whiteSpace: "nowrap",
userSelect: "none",

}

SIZE_STYLES[SMALL_OPTION] = {}

SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT] = {}
SIZE_STYLES [SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT] = {
outline: "none",
textDecoration: "none",
padding: "7px 16px 9px",
minWidth: "136px",
width: "fit-content",
boxSizing: "border-box",
cursor: "pointer",
height: "32px",
display: "flex",
justifyContent: "center",
alignItems: "center",
border: "none",
boxShadow: "none",
cursor: "pointer",
}
SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT] = {
fontFamily: "Roboto, Sans-Serif",
fontStyle: "normal",
fontWeight: "400",
fontSize: "14px",
height: "16px",
maxWidth: "699px",
overflow: "hidden",
lineHeight: "16px",
whiteSpace: "nowrap",
userSelect: "none",
}

//REGULAR BUTTON ICON VARIANT
SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT] = {}

SIZE_STYLES [LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] = {
outline: "none",
textDecoration: "none",
padding: "13px 16px 15px",
minWidth: "214px",
width: "fit-content",
boxSizing: "border-box",
cursor: "pointer",
height: "48px",
display: "flex",
justifyContent: "center",
alignItems: "center",
border: "none",
boxShadow: "none",
}
SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] = {
fontFamily: "Roboto, Sans-Serif",
fontStyle: "normal",
fontWeight: "400",
fontSize: "16px",
height: "20px",
maxWidth: "614px",
overflow: "hidden",
lineHeight: "20px",
whiteSpace: "nowrap",
userSelect: "none",
}
SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT] = {
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",   
    margin: "0px 8px 0px 0px"
}


SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT] = {}

SIZE_STYLES [MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] = {
outline: "none",
textDecoration: "none",
padding: "10px 16px",
minWidth: "212px",
width: "fit-content",
boxSizing: "border-box",
cursor: "pointer",
height: "40px",
display: "flex",
justifyContent: "center",
alignItems: "center",
border: "none",
boxShadow: "none",
cursor: "pointer",
}
SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] = {
fontSize: "14px",
fontFamily: "Roboto, Sans-Serif",
fontStyle: "normal",
fontWeight: "400",
height: "16px",
maxWidth: "899px",
overflow: "hidden",
whiteSpace: "nowrap",
lineHeight: "16px",
userSelect: "none",
}
SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT] = {
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",  
    margin: "0px 8px 0px 0px" 
}

SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT] = {}

SIZE_STYLES [SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] = {
outline: "none",
textDecoration: "none",
padding: "6px 16px",
minWidth: "136px",
width: "fit-content",
boxSizing: "border-box",
cursor: "pointer",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "32px",
border: "none",
boxShadow: "none", 
cursor: "pointer",
}
SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] = {
fontSize: "14px",
fontFamily: "Roboto, Sans-Serif",
fontStyle: "normal",
fontWeight: "400",
height: "16px",
maxWidth: "679px",
overflow: "hidden",
whiteSpace: "nowrap",
lineHeight: "16px",
userSelect: "none",
}
SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT] = {
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",   
    margin: "0px 8px 0px 0px"
}


//ARROW BUTTON VARIANT
SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT] = {}
SIZE_STYLES [LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT] = {
outline: "none",
textDecoration: "none",
display: "flex",
alignItems: "center",
justifyContent: "flex-start",
padding: "0px",
margin: "0px",
width: "fit-content",
height: "20px",
boxSizing: "border-box",
background: "transparent",
border: "0px",
boxShadow: "none",
cursor: "pointer",
}
SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT] = {
fontFamily: "Roboto, Sans-Serif",
fontStyle: "normal",
fontWeight: "400",
fontSize: "16px",
height: "20px",
overflow: "hidden",
whiteSpace: "nowrap",
lineHeight: "20px",
userSelect: "none",

}

SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT] = {
    width: "20px",
    height: "20px",
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0px 0px 0px 4px",
}

SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT] = {}

SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT] = {
outline: "none",
textDecoration: "none",
display: "flex",
alignItems: "center",
justifyContent: "flex-start",
padding: "0px",
margin: "0px",
width: "fit-content",
height: "20px",
boxSizing: "border-box",
background: "transparent",
border: "none",
boxShadow: "none",
cursor: "pointer",
}
SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT] = {
fontFamily: "Roboto, Sans-Serif",
fontStyle: "normal",
fontWeight: "400",
fontSize: "14px",
height: "16px",
overflow: "hidden",
whiteSpace: "nowrap",
lineHeight: "16px",
userSelect: "none",
}
SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT] = {
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 0px 0px 4px",
}


//
SIZE_STYLES[LARGE_OPTION][ICON_BUTTON_VARIANT] = {}
SIZE_STYLES[LARGE_OPTION][ICON_BUTTON_VARIANT][BUTTON_SUBCOMPONENT] = {
outline: "none",
textDecoration: "none",
display: "flex",
alignItems: "center",
justifyContent: "center",
padding: "0px",
margin: "0px",
width: "fit-content",
boxSizing: "border-box",
background: "transparent",
border: "0px",
boxShadow: "none",
cursor: "pointer",
}


export  {SIZE_STYLES};