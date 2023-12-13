
import {ICON_SELECTION_ATTRIBUTE,
        CHILDREN_ATTRIBUTE} from "../constants.js"
import {DEFAULT_EVENT, HOVER_BUTTON_EVENT} from "../constants.js"
import {BUTTON_SUBCOMPONENT, TEXT_SUBCOMPONENT, ICON_CONTAINER_SUBCOMPONENT, ICON_SUBCOMPONENT,ICONARROW_SUBCOMPONENT, ICONARROW_CONTAINER_SUBCOMPONENT} from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"

import {NAME_OF_COMPONENT as ICON} from "../../Icons/constants.js"
import {ICON_SELECTION_ATTRIBUTE as ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT} from "../../Icons/constants.js"
import { ICON_COLOR_ATTRIBUTE, ICON_WIDTH_ATTRIBUTE, ICON_HEIGHT_ATTRIBUTE } from "../../Icons/constants.js"
import {ARROW_RIGHT_ICON_OPTION} from "../../Icons/constants.js"
import { STYLE_KEY } from "../../commonMethodsAndConstants/Styles/commonConstants.js"

export const arrowButtonIcon = function (attributes)
{
    const styleKey = attributes[STYLE_KEY]
    const styles = setStyle(styleKey)

    const button = document.createElement('div')
    const stylesProccessedButton = processStyle(button,styles[BUTTON_SUBCOMPONENT])
    const onMouseOutButtonStyles = stylesProccessedButton[DEFAULT_EVENT]
    const onMouseOverButtonStyles = stylesProccessedButton[HOVER_BUTTON_EVENT]

    const iconParent = document.createElement('div')
    const stylesProccessedIcon = processStyle (iconParent, styles[ICON_CONTAINER_SUBCOMPONENT])
    onMouseOutButtonStyles.push(...stylesProccessedIcon[DEFAULT_EVENT])
    onMouseOverButtonStyles.push(...stylesProccessedIcon[HOVER_BUTTON_EVENT])

    const iconChild = document.createElement(ICON)
    iconChild.setAttribute(ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT, attributes[ICON_SELECTION_ATTRIBUTE])
    iconChild.setAttribute(ICON_COLOR_ATTRIBUTE, styles[ICON_SUBCOMPONENT].color)
    iconChild.setAttribute(ICON_HEIGHT_ATTRIBUTE, styles[ICON_SUBCOMPONENT].height)
    iconChild.setAttribute(ICON_WIDTH_ATTRIBUTE, styles[ICON_SUBCOMPONENT].width)
    if (styles[ICON_SUBCOMPONENT].hasOwnProperty(HOVER_BUTTON_EVENT))
    {
        onMouseOverButtonStyles.push(()=> iconChild.setAttribute(ICON_COLOR_ATTRIBUTE, styles[ICON_SUBCOMPONENT][HOVER_BUTTON_EVENT].color))
        onMouseOutButtonStyles.push(()=> iconChild.setAttribute(ICON_COLOR_ATTRIBUTE, styles[ICON_SUBCOMPONENT].color))
    }
    
    const textNode = document.createTextNode(attributes[CHILDREN_ATTRIBUTE])
    const textButton = document.createElement('div')
    const stylesProccessedText = processStyle(textButton,styles[TEXT_SUBCOMPONENT])
    onMouseOutButtonStyles.push(...stylesProccessedText[DEFAULT_EVENT])
    onMouseOverButtonStyles.push(...stylesProccessedText[HOVER_BUTTON_EVENT])
    
    const iconArrowParent = document.createElement('div')
    const stylesProccessedIconArrow = processStyle (iconArrowParent, styles[ICONARROW_CONTAINER_SUBCOMPONENT])
    onMouseOutButtonStyles.push(...stylesProccessedIconArrow[DEFAULT_EVENT])
    onMouseOverButtonStyles.push(...stylesProccessedIconArrow[HOVER_BUTTON_EVENT])

    const iconArrowChild = document.createElement(ICON)
    iconArrowChild.setAttribute(ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT, ARROW_RIGHT_ICON_OPTION)
    iconArrowChild.setAttribute(ICON_COLOR_ATTRIBUTE, styles[ICONARROW_SUBCOMPONENT].color)
    iconArrowChild.setAttribute(ICON_HEIGHT_ATTRIBUTE, styles[ICONARROW_SUBCOMPONENT].height)
    iconArrowChild.setAttribute(ICON_WIDTH_ATTRIBUTE, styles[ICONARROW_SUBCOMPONENT].width)
    if (styles[ICONARROW_SUBCOMPONENT].hasOwnProperty(HOVER_BUTTON_EVENT))
    {
        onMouseOverButtonStyles.push(()=> iconArrowChild.setAttribute(ICON_COLOR_ATTRIBUTE, styles[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT].color))
        onMouseOutButtonStyles.push(()=> iconArrowChild.setAttribute(ICON_COLOR_ATTRIBUTE, styles[ICONARROW_SUBCOMPONENT].color))
    }

    button.appendChild(iconParent) 
        iconParent.appendChild(iconChild) 
    button.appendChild(textButton)
        textButton.appendChild(textNode)
    button.appendChild(iconArrowParent)
        iconArrowParent.appendChild(iconArrowChild)

    onMouseOutButtonStyles.forEach( (style)=> style())
    button.onmouseover = () => onMouseOverButtonStyles.forEach((style)=> style())
    button.onmouseout = () => onMouseOutButtonStyles.forEach((style)=> style())
    return button;
}


