import {CONTAINER_SUB_WRAPPER} from "../constants.js"
import {TITLE_ATTRIBUTE,} from "../constants.js"
import {setStyle} from "../styles/index.js"
import { DEFAULT_OPTION } from "../constants.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {creatingElementG} from "./constants.js"
// CONTAINER_SLOT_WRAPPER
// CONTAINER_SUB_WRAPPER
// I----------->PROFILE_CONTAINER_SUBCOMPONENT
// I---------------->PROFILE_SUBCOMPONENT

export const profileInitialsComponent = function ()
{
    const styles = setStyle(this.dataAttributes[STYLE_KEY])

    const creatingElement = creatingElementG.bind(this)
    //Creation of all Subcomponents
    const slotWrapper = document.createElement('slot')
    slotWrapper.style.display = 'none'
    const wrapper = creatingElement(CONTAINER_SUB_WRAPPER, styles)
    const initials = document.createTextNode(this.dataAttributes[TITLE_ATTRIBUTE])

    //Appending subcomponents with its respective parent
    this.shadow.appendChild(slotWrapper)
    this.shadow.appendChild(wrapper)
        wrapper.appendChild(initials)
    this[DEFAULT_OPTION].forEach(element => element());
    return;
}