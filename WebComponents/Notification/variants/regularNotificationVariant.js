import {CONTAINER_WRAPPER,
    TITLES_NOTIFICATION_CONTAINER,
    TITLE_NOTIFICATION,
    SUBTITLE_NOTIFICATION,
    LINK_SUBTITLE,
    LINK_TITLE} from "../constants.js"
import {setStyle} from "../styles/index.js"
import { DEFAULT_EVENT, HIERARCHY_ATTRIBUTE, AUTODISMISS_LENGTH_ATTRIBUTE } from "../constants.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { TITLE_OPTION, SUBTITLE_OPTION} from "../constants.js"
import { creatingElementG, settleText } from "./constants.js"
// CONTAINER_WRAPPER
// I----------->TITLES_NOTIFICATION_CONTAINER
// I-------------->TITLE_NOTIFICATION
// I-------------->SUBTITLE_NOTIFICATION

export const notificationRegularComponent = function ()
{
    const styles = setStyle(this.dataAttributes[STYLE_KEY])
    if(parseInt(this.dataAttributes[AUTODISMISS_LENGTH_ATTRIBUTE])>0){
        setTimeout(()=> {
            this.remove()
        },parseInt(this.dataAttributes[AUTODISMISS_LENGTH_ATTRIBUTE])* 1000)
    }
    const creatingElement = creatingElementG.bind(this)
    //Creation of Subcomponents
    const wrapper = creatingElement(CONTAINER_WRAPPER, styles)
    const titlesContainer = creatingElement(TITLES_NOTIFICATION_CONTAINER, styles)
    const titleContainer = creatingElement(TITLE_NOTIFICATION, styles)
    const subtitleContainer = creatingElement(SUBTITLE_NOTIFICATION, styles)

    this.shadow.appendChild(wrapper)
        wrapper.appendChild(titlesContainer)
            titlesContainer.appendChild(titleContainer)


    //GETTING DATA FROM CHILD TAGS
    const slots = []

    const titlesTags = this.querySelectorAll(`[${HIERARCHY_ATTRIBUTE}='${TITLE_OPTION}']`)
    const subtitlesTags = this.querySelectorAll(`[${HIERARCHY_ATTRIBUTE}='${SUBTITLE_OPTION}']`)

    if(titlesTags.length>0){
        settleText(titlesTags,titleContainer, styles[LINK_TITLE], this[DEFAULT_EVENT], HIERARCHY_ATTRIBUTE, slots)
    } else{
        const title = document.createTextNode('TITLE BY DEFAULT')
        titleContainer.appendChild(title)
    }
    if(subtitlesTags.length >0){
        settleText(subtitlesTags,subtitleContainer, styles[LINK_SUBTITLE], this[DEFAULT_EVENT], HIERARCHY_ATTRIBUTE, slots)
        titlesContainer.appendChild(subtitleContainer)
    }

    titlesContainer.append(...slots)
    this[DEFAULT_EVENT].forEach( (style)=>  style())

    return
}