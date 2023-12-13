import { DIVIDER } from "../constants.js";
import {setStyle} from "../styles/index.js"
import { DEFAULT_EVENT } from "../constants.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { creatingElementG } from "./constants.js"

export const dividerRegularComponent = function ()
{
    const creatingElement = creatingElementG.bind(this)
    const styles = setStyle(this.dataAttributes[STYLE_KEY])
    //Creation of Subcomponents
    const divider = creatingElement(DIVIDER, styles)

    this.shadow.appendChild(divider)
    this[DEFAULT_EVENT].forEach( (style)=>  style())

    return
}