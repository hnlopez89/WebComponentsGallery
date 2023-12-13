
import { SVG_ATTRIBUTES, SVG_TYPE, SVG_STYLES} from "../constants.js"
import { DEFAULT_EVENT, DEFAULT_OPTION } from "../constants.js"
import {processStyle} from "../styles/index.js"


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
export function creatingElementG (NAME_OF_SUBCOMPONENT, style, htmlEl='div') {
    const subComponent = document.createElement(htmlEl)
    const stylesProccessed= processStyle(subComponent,style[NAME_OF_SUBCOMPONENT])
    this[DEFAULT_OPTION].push(...stylesProccessed[DEFAULT_EVENT])
    return subComponent;
    }