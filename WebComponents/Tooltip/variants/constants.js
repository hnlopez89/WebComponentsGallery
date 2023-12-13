import {DEFAULT_EVENT } from "../constants.js"
import { SVG_ATTRIBUTES, SVG_TYPE, SVG_STYLES } from "../constants.js";
import { processStyle } from "../styles/index.js"

export function creatingElementG (NAME_OF_SUBCOMPONENT, style) 
{
    const subComponent = document.createElement('div')
    const stylesProccessed= processStyle(subComponent,style[NAME_OF_SUBCOMPONENT])
    this[DEFAULT_EVENT].push(...stylesProccessed[DEFAULT_EVENT])
    return subComponent;
}

export function createSvgElementG (svgSubComponent, style)  {
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
    this[DEFAULT_EVENT].push(...stylesSVG[DEFAULT_EVENT])
    return svgElem;
} 

