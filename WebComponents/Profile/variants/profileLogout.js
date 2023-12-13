import {CONTAINER_SUB_WRAPPER,ICON_SUBCOMPONENT,SVG_SUBCOMPONENT,PATH_SUBCOMPONENT, DEFAULT_OPTION} from "../constants.js"
import { SVG_ATTRIBUTES, SVG_TYPE, SVG_STYLES} from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"
import { DEFAULT_EVENT } from "../constants.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {creatingElementG} from "./constants.js"
// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// CONTAINER_SUB_WRAPPER
// I----------->ICON_SUBCOMPONENT
// I--------------->SVG_SUBCOMPONENT
// I------------------->PATH_SUBCOMPONENT

function createSvgElementG (svgSubComponent,style){
    const svgType = style[svgSubComponent][SVG_ATTRIBUTES][SVG_TYPE]
    const svgAttributes = {...style[svgSubComponent][SVG_ATTRIBUTES]}
    delete svgAttributes[SVG_TYPE]
    const keysAttributes = Object.keys(svgAttributes)
    const xmlns = "http://www.w3.org/2000/svg";
    const svgElem = document.createElementNS(xmlns, svgType);
    keysAttributes.forEach(key=> {
        svgElem.setAttributeNS(null, key, svgAttributes[key]);
    })
    const stylesSVG = processStyle(svgElem,style[svgSubComponent][SVG_STYLES])
    stylesSVG[DEFAULT_EVENT].forEach(element => element());
    return svgElem;
    }

export const profileLogoutComponent = function ()
{
    const styles = setStyle(this.dataAttributes[STYLE_KEY])
    const slotWrapper = document.createElement('slot')
    slotWrapper.style.display = 'none'
    const creatingElement = creatingElementG.bind(this)
    const createSvgElement = createSvgElementG.bind(this)
    const wrapper = creatingElement(CONTAINER_SUB_WRAPPER, styles)

    //Creation of all Subcomponents
    const iconComponent = creatingElement(ICON_SUBCOMPONENT, styles)
    const svgComponent = createSvgElement(SVG_SUBCOMPONENT, styles)
    const pathComponent = createSvgElement(PATH_SUBCOMPONENT, styles)
    //Appending subcomponents with its respective parent
    this.shadow.appendChild(slotWrapper)
    this.shadow.appendChild(wrapper)
        wrapper.appendChild(iconComponent)
            iconComponent.appendChild(svgComponent)
                svgComponent.appendChild(pathComponent)
    
    this[DEFAULT_OPTION].forEach(element => element());
    return ;
}