import {CONTAINER_SUB_WRAPPER,
        PROFILE_CONTAINER_SUBCOMPONENT, 
        PROFILE_SUBCOMPONENT, 
        BADGE_CONTAINER_SUBCOMPONENT,
        BADGE_SUBCOMPONENT,
        BADGE_STATE_ATTRIBUTE} from "../constants.js"
import {TITLE_ATTRIBUTE, BADGE_NUMBER_ATTRIBUTE} from "../constants.js"
import {setStyle} from "../styles/index.js"
import { DEFAULT_OPTION } from "../constants.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {creatingElementG} from "./constants.js"
// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// CONTAINER_SUB_WRAPPER
// I----------->PROFILE_CONTAINER_SUBCOMPONENT
// I---------------->PROFILE_SUBCOMPONENT
// I----------->BADGE_CONTAINER_SUBCOMPONENT
// I---------------->BADGE_SUBCOMPONENT     

const profileInitialsBadge  = 'profile-initials-badge'
export const profileInitialsBadgeComponent = function ()
{
    const creatingElement = creatingElementG.bind(this)
    const styles = setStyle(this.dataAttributes[STYLE_KEY])
    
    const customProfileComponent = document.createElement(profileInitialsBadge)
    //Creation of all Subcomponents
    const slot = document.createElement('slot')
    slot.style.display = 'none'
    const wrapper = creatingElement(CONTAINER_SUB_WRAPPER, styles)
    const profileContainerSubcomponent = creatingElement(PROFILE_CONTAINER_SUBCOMPONENT, styles)
    const profileSubcomponent = creatingElement(PROFILE_SUBCOMPONENT, styles)
    const initials = document.createTextNode(this.dataAttributes[TITLE_ATTRIBUTE])
    const badgeContainerSubcomponent = creatingElement(BADGE_CONTAINER_SUBCOMPONENT, styles)
    const badgeSubcomponent = creatingElement(BADGE_SUBCOMPONENT, styles)
    const badgeNumber = document.createTextNode(this.dataAttributes[BADGE_NUMBER_ATTRIBUTE])

    //Appending subcomponents with its respective parent
    this.shadow.appendChild(slot)
    this.shadow.appendChild(wrapper)
        wrapper.appendChild(profileContainerSubcomponent)
            profileContainerSubcomponent.appendChild(profileSubcomponent)
                profileSubcomponent.appendChild(initials)
        wrapper.appendChild(badgeContainerSubcomponent)
            badgeContainerSubcomponent.appendChild(badgeSubcomponent)
                badgeSubcomponent.appendChild(badgeNumber)

    //Adding some behaviour to the component
    this[DEFAULT_OPTION].forEach( (style)=>  style())
    this[this.dataAttributes[BADGE_STATE_ATTRIBUTE]].forEach( (style)=>  style())

    return customProfileComponent;
}