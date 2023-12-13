import {CONTAINER_WRAPPER,
    TITLES_ICONS_NOTIFICATION_CONTAINER,
    ICON_SELECTION_NOTIFICATION_CONTAINER,
    ICON_SUBCOMPONENT,
    TITLES_NOTIFICATION_CONTAINER,
    TITLE_NOTIFICATION,
    SUBTITLE_NOTIFICATION,
    SVG_SUBCOMPONENT,
    PATH_SUBCOMPONENT,
    LINK_SUBTITLE,
    LINK_TITLE,
    CLOSE_ICON_SUBCOMPONENT
} from "../constants.js"
import {setStyle} from "../styles/index.js"
import { DEFAULT_EVENT, AUTODISMISS_LENGTH_ATTRIBUTE, ICON_SELECTION_ATTRIBUTE, HIERARCHY_ATTRIBUTE } from "../constants.js"
import { TITLE_OPTION, SUBTITLE_OPTION} from "../constants.js"
import { creatingElementG, createSvgElementG, settleText } from "./constants.js"
import { NAME_OF_COMPONENT as ICON, ICON_COLOR_ATTRIBUTE, 
         ICON_HEIGHT_ATTRIBUTE,
         ICON_WIDTH_ATTRIBUTE } from "../../Icons/constants.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"

// CONTAINER_WRAPPER
// I----->TITLES_ICONS_NOTIFICATION_CONTAINER
// I----------->ICON_SELECTION_NOTIFICATION_CONTAINER
// I-------------->ICON_SELECTION_NOTIFICATION
// I----------->TITLES_NOTIFICATION_CONTAINER
// I-------------->TITLE_NOTIFICATION
// I-------------->SUBTITLE_NOTIFICATION
// I----------->ICON_CLOSE_NOTIFICATION_CONTAINER
// I-------------->ICON_CLOSE_NOTIFICATION



export const notificationFullComponent = function ()
{
    const styles = setStyle(this.dataAttributes[STYLE_KEY])
    if(parseInt(this.dataAttributes[AUTODISMISS_LENGTH_ATTRIBUTE])>0){
        setTimeout(()=> {
            this.remove()
        },parseInt(this.dataAttributes[AUTODISMISS_LENGTH_ATTRIBUTE])* 1000)
    }
    
    const createSvgElement = createSvgElementG.bind(this)
    const creatingElement = creatingElementG.bind(this)

    //Creation of all Subcomponents
    const wrapper = creatingElement(CONTAINER_WRAPPER, styles)
    const titlesIconsContainer = creatingElement(TITLES_ICONS_NOTIFICATION_CONTAINER, styles)
    const iconSelectionContainer = creatingElement(ICON_SELECTION_NOTIFICATION_CONTAINER, styles)
    const titlesContainer = creatingElement(TITLES_NOTIFICATION_CONTAINER, styles)
    const titleContainer = creatingElement(TITLE_NOTIFICATION, styles)
    const subtitleContainer = creatingElement(SUBTITLE_NOTIFICATION, styles)
    const iconChild = document.createElement(ICON)
    iconChild.setAttribute(ICON_SELECTION_ATTRIBUTE, this.dataAttributes[ICON_SELECTION_ATTRIBUTE])
    iconChild.setAttribute(ICON_COLOR_ATTRIBUTE, styles[ICON_SUBCOMPONENT].color)
    iconChild.setAttribute(ICON_HEIGHT_ATTRIBUTE, styles[ICON_SUBCOMPONENT].height)
    iconChild.setAttribute(ICON_WIDTH_ATTRIBUTE, styles[ICON_SUBCOMPONENT].width)
    const iconComponent = creatingElement(CLOSE_ICON_SUBCOMPONENT, styles)
    iconComponent.onclick = () => {this.remove()}
    const svgComponent = createSvgElement(SVG_SUBCOMPONENT, styles)
    const pathComponent = createSvgElement(PATH_SUBCOMPONENT, styles)

    //Appending subcomponents with its respective parent
    this.shadow.appendChild(wrapper)
        wrapper.appendChild(titlesIconsContainer)
            titlesIconsContainer.appendChild(iconSelectionContainer)
                iconSelectionContainer.appendChild(iconChild)
            titlesIconsContainer.appendChild(titlesContainer)
                titlesContainer.appendChild(titleContainer)
            titlesIconsContainer.appendChild(iconComponent)
                iconComponent.appendChild(svgComponent)
                    svgComponent.appendChild(pathComponent)

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