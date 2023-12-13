import {MAX_WIDTH_LARGE_OPTION ,MAX_WIDTH_MEDIUM_OPTION, MAX_WIDTH_SMALL_OPTION} from '../commonMethodsAndConstants/Styles/commonConstants.js'
// attributeNames
export const MODE_ATTRIBUTE = "data-mode";
export const SIZE_ATTRIBUTE = "data-size";


// color options
export const WINDOW_OPTION = "window";
export const FULLSCREEN_OPTION = "fullscreen";
// template options
export const XL_OPTION = "XL";
export const L_OPTION = "L";
export const M_OPTION = "M";
export const S_OPTION = "S";



//data-size-width options
export const FULL_OPTION = "full"
export const FIT_CONTENT_OPTION = "fit-content"

export const    TEMPORARY_ATTRIBUTE = "data-temporary-attribute"

export const SIZE_FUNCTION_PARSING = () => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if (vw < MAX_WIDTH_SMALL_OPTION)
    {
       return S_OPTION;
    }
    else if (vw >= MAX_WIDTH_SMALL_OPTION && vw < MAX_WIDTH_MEDIUM_OPTION)
    {
       return M_OPTION;
    }
    else if (vw >= MAX_WIDTH_MEDIUM_OPTION && vw < MAX_WIDTH_LARGE_OPTION)
    {
       return L_OPTION;
    }
    else return XL_OPTION;
}
const ATTRIBUTES = [];


ATTRIBUTES.push({
    attributeName: MODE_ATTRIBUTE,
    defaultValue : FULLSCREEN_OPTION,
    proccessValue: function ()  
    {

        const value = this.getAttribute(MODE_ATTRIBUTE) ? this.getAttribute(MODE_ATTRIBUTE) : FULLSCREEN_OPTION
        return   value
    }

})

export {ATTRIBUTES};

//Definining names of subcomponents of component. This is used to identify the style to assign that subcomponent
export const BACKGROUND_COMPONENT = "background component"
export const WRAPPER_COMPONENT = "wrapper component"
export const MODAL_WRAPPER_COMPONENT = "modal wrapper"
export const ICON_CLOSE_COMPONENT = "icon close"
export const ICON_CLOSE_WEB_COMPONENT = "icon close webC"
export const CONTAINER_SLOT_WRAPPER = "container slot"
//SLIDER COMPONENT
// SHADOW DOM
// I
// I-----------> BACKGROUND_COMPONENT
// I-----------> WRAPPER_COMPONENT
//                      I
//                      I
//                      I-------------------> MODAL_WRAPPER_COMPONENT
//                                                      I
//                                                      I----------->ICON_CLOSE_COMPONENT
//                                                      I                   I----------->ICON_CLOSE_WEB_COMPONENT
//                                                      I
//                                                      I----------->CONTAINER_SLOT_WRAPPER



//  Defining constants for events 


//array of events
const EVENTS_OF_COMPONENT = []

export const DEFAULT_EVENT = 'default'


export {EVENTS_OF_COMPONENT}

// components variants of buttons
export const FULLSCREEN_VARIANT = "fullscreen variant"
export const WINDOW_VARIANT = "window variant"

export const NAME_OF_COMPONENT = 'component-modal'
