import {processStyle} from "../styles/index.js"
import {  DEFAULT_EVENT } from "../constants.js"
import { SVG_ATTRIBUTES, SVG_TYPE, SVG_STYLES} from "../constants.js"

export function creatingElementG (NAME_OF_SUBCOMPONENT, style, htmlEl='div') {
    const subComponent = document.createElement(htmlEl)
    const stylesProccessed= processStyle(subComponent,style[NAME_OF_SUBCOMPONENT])
    this[DEFAULT_EVENT].push(...stylesProccessed[DEFAULT_EVENT])
    return subComponent;
    }

export function createSvgElementG (svgSubComponent,style){
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

export  function settleText(textArray, textContainer, styleElement, event, attribute, slotsArray){
    const slot = document.createElement('slot');
    textArray.forEach(child=>{
        slot.setAttribute('name', child.getAttribute(attribute))
        slot.style.display = 'none'
        slotsArray.push(slot)

        if(child.getAttribute('href')){
            const cloneElement = child.cloneNode(true)
            const linkStyleProccessed= processStyle(cloneElement,styleElement)
            event.push(...linkStyleProccessed[DEFAULT_EVENT])
            cloneElement.className= ""
            textContainer.append(cloneElement)
        } else {
            const titleText = child.innerText + ' '
            const title = document.createTextNode(titleText)
            textContainer.appendChild(title)
        }
    })    
}