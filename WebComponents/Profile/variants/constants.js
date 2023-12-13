import {processStyle} from "../styles/index.js"
import { SUCCESS_OPTION,WARNING_OPTION,ERROR_OPTION, DEFAULT_OPTION } from "../constants.js"
import { SUCCESS_EVENT,WARNING_EVENT,ERROR_EVENT, DEFAULT_EVENT } from "../constants.js"
export function creatingElementG (NAME_OF_SUBCOMPONENT, style, htmlEl='div') {
    const subComponent = document.createElement(htmlEl)
    const stylesProccessed= processStyle(subComponent,style[NAME_OF_SUBCOMPONENT])
    this[DEFAULT_OPTION].push(...stylesProccessed[DEFAULT_EVENT])
    this[ERROR_OPTION].push(...stylesProccessed[ERROR_EVENT])
    this[WARNING_OPTION].push(...stylesProccessed[WARNING_EVENT])
    this[SUCCESS_OPTION].push(...stylesProccessed[SUCCESS_EVENT])
    return subComponent;
    }