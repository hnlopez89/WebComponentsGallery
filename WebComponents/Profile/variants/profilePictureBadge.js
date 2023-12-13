import {CONTAINER_SUB_WRAPPER,
        PICTURE_SUBCOMPONENT,
        PICTURE_ATTRIBUTE,
        BADGE_CONTAINER_SUBCOMPONENT,
        BADGE_SUBCOMPONENT,
        } from "../constants.js"
import {BADGE_STATE_ATTRIBUTE, BADGE_NUMBER_ATTRIBUTE} from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"
import { SUCCESS_OPTION,WARNING_OPTION,ERROR_OPTION, DEFAULT_OPTION } from "../constants.js"
import { SUCCESS_EVENT,WARNING_EVENT,ERROR_EVENT, DEFAULT_EVENT } from "../constants.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { creatingElementG } from "./constants.js"
// CONTAINER_SLOT_WRAPPER
//              I----------->INPUT_SLOT
// CONTAINER_SUB_WRAPPER
//              I------------------------>PICTURE_SUBCOMPONENT

export const profilePictureBadgeComponent = function ()
{
    const creatingElement = creatingElementG.bind(this)
    const styles = setStyle(this.dataAttributes[STYLE_KEY])
    const picture = this.getElementsByTagName('img')[0]
    this.dataAttributes[PICTURE_ATTRIBUTE] = picture.src

    //Creation of all Subcomponents
    const slot = document.createElement('slot')
    slot.style.display = 'none'
    const wrapper = creatingElement(CONTAINER_SUB_WRAPPER, styles)
    const pictureElement = creatingElement(PICTURE_SUBCOMPONENT, styles, 'img')
    pictureElement.src=this.dataAttributes[PICTURE_ATTRIBUTE]
    const badgeContainerSubcomponent = creatingElement(BADGE_CONTAINER_SUBCOMPONENT, styles)
    const badgeSubcomponent = creatingElement(BADGE_SUBCOMPONENT, styles)
    const badgeNumber = document.createTextNode(this.dataAttributes[BADGE_NUMBER_ATTRIBUTE])

    //Appending subcomponents with its respective parent
    this.shadow.appendChild(slot)
    this.shadow.appendChild(wrapper)
        wrapper.appendChild(pictureElement)
        wrapper.appendChild(badgeContainerSubcomponent)
            badgeContainerSubcomponent.appendChild(badgeSubcomponent)
                badgeSubcomponent.appendChild(badgeNumber)

    this[DEFAULT_OPTION].forEach( (style)=>  style())
    this[this.dataAttributes[BADGE_STATE_ATTRIBUTE]].forEach( (style)=>  style())
    return;
}