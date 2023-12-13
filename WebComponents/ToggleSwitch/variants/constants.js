import { STATE_ATTRIBUTE, STATE_ON_OPTION, STATE_OFF_OPTION } from "../constants.js"
import { DEFAULT_EVENT, CLICK_TOGGLE, RECT_ID, CIRCLE_ID } from "../constants.js"
import {processStyle} from "../styles/index.js"
export const clickToggle = function (event)  {
    event.preventDefault()
    if (!this.disable)
    {
        this.disable = true
        const state = this.getAttribute(STATE_ATTRIBUTE)
        if (state === STATE_ON_OPTION)
        {
            this.setAttribute(STATE_ATTRIBUTE,STATE_OFF_OPTION)
            return;
        }
        else if (state !== STATE_ON_OPTION)
        {
            this.setAttribute(STATE_ATTRIBUTE,STATE_ON_OPTION)
            return;
        }
    }                        
}

export const creationSVGElementsG = function (svgElement, nameOfComponent) {
    const xmlns = "http://www.w3.org/2000/svg";
    const element = document.createElementNS(xmlns, svgElement);
    Object.keys(this.styles[nameOfComponent]).forEach((key)=>{
        element.setAttributeNS(null, key,this.styles[nameOfComponent][key] );
    })
    return element
}

export const  createComponentG = function (nameOfComponent) {
    const element = document.createElement('div')
    const stylesProccessedElement = processStyle(element,this.styles[nameOfComponent])
    this.off.push(...stylesProccessedElement[DEFAULT_EVENT])
    this.on.push(...stylesProccessedElement[CLICK_TOGGLE])   
    return element
}

export const handleResize = function () {
    const widthRect = this.shadow.getElementById(RECT_ID).getAttribute("width")
    this.shadow.getElementById(RECT_ID).setAttributeNS(null, "width",widthRect );
    const cxPosition = this.shadow.getElementById(CIRCLE_ID).getAttribute("cx")
    this.shadow.getElementById(CIRCLE_ID).setAttributeNS(null, "cx",cxPosition );
}