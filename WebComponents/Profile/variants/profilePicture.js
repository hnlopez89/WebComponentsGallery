import {CONTAINER_SUB_WRAPPER,
        PICTURE_SUBCOMPONENT,
        PICTURE_ATTRIBUTE
        } from "../constants.js"
import {setStyle} from "../styles/index.js"
import { DEFAULT_OPTION } from "../constants.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { creatingElementG } from "./constants.js"
// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// CONTAINER_SUB_WRAPPER
// I------------------------>PICTURE_SUBCOMPONENT
export const profilePictureComponent = function ()
{ 
    const styles = setStyle(this.dataAttributes[STYLE_KEY])

    const creatingElement = creatingElementG.bind(this)

    const picture = this.getElementsByTagName('img')[0]
    this.dataAttributes[PICTURE_ATTRIBUTE] = picture.src

    //Creation of all Subcomponents
    const slot = document.createElement('slot')
    slot.style.display = 'none'
    const wrapper = creatingElement(CONTAINER_SUB_WRAPPER, styles)
    const pictureElement = creatingElement(PICTURE_SUBCOMPONENT, styles,'img')
    pictureElement.src=this.dataAttributes[PICTURE_ATTRIBUTE]

    //Appending subcomponents with its respective parent
    this.shadow.appendChild(slot)
    this.shadow.appendChild(wrapper)
        wrapper.appendChild(pictureElement)

    //customProfileComponent.appendChild(picture)
    this[DEFAULT_OPTION].forEach( (style)=>  style())
    return;
}