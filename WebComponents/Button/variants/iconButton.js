import {ICON_SELECTION_ATTRIBUTE,} from "../constants.js"
import {DEFAULT_EVENT, HOVER_BUTTON_EVENT, FOCUS_BUTTON_EVENT} from "../constants.js"
import {BUTTON_SUBCOMPONENT, ICON_CONTAINER_SUBCOMPONENT, ICON_SUBCOMPONENT} from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"
import {NAME_OF_COMPONENT as ICON} from "../../Icons/constants.js"
import {ICON_SELECTION_ATTRIBUTE as ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT} from "../../Icons/constants.js"
import { ICON_COLOR_ATTRIBUTE, 
         ICON_HEIGHT_ATTRIBUTE,
         ICON_WIDTH_ATTRIBUTE } from "../../Icons/constants.js"
import { STYLE_KEY } from "../../commonMethodsAndConstants/Styles/commonConstants.js"

export const iconButton = function (attributes)
{
    const styleKey = attributes[STYLE_KEY]
    const styles = setStyle(styleKey)
    const button = document.createElement('div')
    button.setAttribute("tabindex", 0)
    const stylesProccessedButton = processStyle(button,styles[BUTTON_SUBCOMPONENT])
    const onMouseOutButtonStyles = stylesProccessedButton[DEFAULT_EVENT]
    const onMouseOverButtonStyles = stylesProccessedButton[HOVER_BUTTON_EVENT]
    const focusButtonStyles = stylesProccessedButton[FOCUS_BUTTON_EVENT]

    const iconParent = document.createElement('div')
    const stylesProccessedIcon = processStyle (iconParent, styles[ICON_CONTAINER_SUBCOMPONENT])
    onMouseOutButtonStyles.push(...stylesProccessedIcon[DEFAULT_EVENT])
    onMouseOverButtonStyles.push(...stylesProccessedIcon[HOVER_BUTTON_EVENT])
    focusButtonStyles.push(...stylesProccessedIcon[FOCUS_BUTTON_EVENT])
    const iconChild = document.createElement(ICON)
    iconChild.setAttribute(ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT, attributes[ICON_SELECTION_ATTRIBUTE])
    iconChild.setAttribute(ICON_COLOR_ATTRIBUTE, styles[ICON_SUBCOMPONENT].color)
    iconChild.setAttribute(ICON_HEIGHT_ATTRIBUTE, styles[ICON_SUBCOMPONENT].height)
    iconChild.setAttribute(ICON_WIDTH_ATTRIBUTE, styles[ICON_SUBCOMPONENT].width)
    
    button.appendChild(iconParent)    
        iconParent.appendChild(iconChild)
    onMouseOutButtonStyles.forEach( (style)=> style())
    button.onmouseover = () => onMouseOverButtonStyles.forEach((style)=> style())
    button.onmouseout = () => onMouseOutButtonStyles.forEach((style)=> style())
    const detectEnterKeyBoard = (e) => {
        if (e.keyCode === 13) 
        {
            button.click()
        }
    }
    const focusStyling = () => {
        focusButtonStyles.forEach((style)=> style())
        document.addEventListener('keydown',detectEnterKeyBoard, false)
        button.removeEventListener('focusin',focusStyling, false)
    }
    const detectFocusKeyboard = (e) => {
        if (e.keyCode === 9) 
        {
            button.removeEventListener('focusin',focusStyling, false)
            button.addEventListener('focusin', focusStyling,false)
        }
    }
    document.addEventListener('keydown',detectFocusKeyboard, false)
    button.addEventListener('mousedown', () => {
        button.removeEventListener('focusin',focusStyling, false)
        onMouseOutButtonStyles.forEach((style)=> style())
    });
    button.onblur = () =>  {
        document.removeEventListener('keydown',detectEnterKeyBoard, false)
        onMouseOutButtonStyles.forEach((style)=> style())}
    return button;
}








