import {LARGE_OPTION,
        MEDIUM_OPTION,
        REGULAR_BUTTON_ICON_VARIANT,
        BUTTON_SUBCOMPONENT,
        TEXT_SUBCOMPONENT,
        ICON_CONTAINER_SUBCOMPONENT,
        ICON_SUBCOMPONENT} from "../constants.js"
const SIZE_STYLES = {}

SIZE_STYLES[LARGE_OPTION] = {}

//REGULAR BUTTON ICON VARIANT
SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT] = {}

SIZE_STYLES [LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] = {
    textDecoration: "none",
    padding: "13px 16px 15px",
    maxWidth: "670px",
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

SIZE_STYLES[MEDIUM_OPTION] = {}

SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT] = {}

SIZE_STYLES [MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] = {
    textDecoration: "none",
    padding: "10px 16px",
    maxWidth: "951px",
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


export  {SIZE_STYLES};