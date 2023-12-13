import {processStyle} from "../styles/index.js"
import {  DEFAULT_EVENT } from "../constants.js"


export function creatingElementG (NAME_OF_SUBCOMPONENT, style, htmlEl='div') {
    const subComponent = document.createElement(htmlEl)
    const stylesProccessed= processStyle(subComponent,style[NAME_OF_SUBCOMPONENT])
    this[DEFAULT_EVENT].push(...stylesProccessed[DEFAULT_EVENT])
    return subComponent;
    }

