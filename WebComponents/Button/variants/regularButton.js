
import { STYLE_KEY } from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {CHILDREN_ATTRIBUTE, FOCUS_BUTTON_EVENT} from "../constants.js"
import {DEFAULT_EVENT, HOVER_BUTTON_EVENT} from "../constants.js"
import {BUTTON_SUBCOMPONENT, TEXT_SUBCOMPONENT} from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"

export const regularButton = function (attributes)
{
    const styleKey = attributes[STYLE_KEY]
    const styles = setStyle(styleKey)
    const button = document.createElement('div')
    button.setAttribute("tabindex", 0)
    const stylesProccessedButton = processStyle(button,styles[BUTTON_SUBCOMPONENT])
    const onMouseOutButtonStyles = stylesProccessedButton[DEFAULT_EVENT]
    const onMouseOverButtonStyles = stylesProccessedButton[HOVER_BUTTON_EVENT]
    const focusButtonStyles = stylesProccessedButton[FOCUS_BUTTON_EVENT]
    const textNode = document.createTextNode(attributes[CHILDREN_ATTRIBUTE])
    const textButton = document.createElement('div')
    const stylesProccessedText = processStyle(textButton,styles[TEXT_SUBCOMPONENT])
    onMouseOutButtonStyles.push(...stylesProccessedText[DEFAULT_EVENT])
    onMouseOverButtonStyles.push(...stylesProccessedText[HOVER_BUTTON_EVENT])
    focusButtonStyles.push(...stylesProccessedText[FOCUS_BUTTON_EVENT])
    
    button.appendChild(textButton)
        textButton.appendChild(textNode)

    //Initial styling
    onMouseOutButtonStyles.forEach( (style)=> style())

    // Add some behaviour to the Web Component
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


