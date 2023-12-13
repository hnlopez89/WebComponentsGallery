import { STYLE_KEY, MAX_WIDTH_SMALL_OPTION } from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { setStyle, processStyle } from "../styles/index.js"
import {BUTTONS_GROUP_SELECTED_ATTRIBUTE, 
        BUTTONS_GROUP_CONTENT_ATTRIBUTE,
        BUTTON_BUTTONS_GROUP_CONTENT_ATTRIBUTE,
        SLOT_LIST_ATTRIBUTE,
        BUTTON_TITLE_LIST, 
        BUTTONS_WRAPPER,
        BUTTON_SLOT,
        TEXT_BUTTON} from "../constants.js"
import { DEFAULT_EVENT, ACTIVE_BUTTONS_GROUP_EVENT, HOVER_EVENT } from "../constants.js"

import {
    SLOT_WRAPPER,
    BUTTONS_GROUP_WRAPPER_COMPONENT,
    BUTTON_FLEXBOX,
    BUTTON_i_COMPONENT,
    CONTENT_WRAPPER


} from "../constants.js"


const TEMPORARY_ATTRIBUTE = 'temporary-attribute'

const removePredefinedStyles = () => {
    const styleSheet = document.createElement('style')
    styleSheet.innerHTML= `
    * {
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
      }
    `
    return styleSheet;
}
class vanillaRegularButtonsGroup extends HTMLElement {
    constructor() {
        super();
        this.customAttributes = null
        this.styles = null
        this.defaultStyles = []
        this.buttonListButtonsGroup = {}
        this.defaultButtonStyles = {}
        this.hoverButtonStyles = {}
        this.activeButtonStyles = {}
        this.widthStyle = null
        this.shadow = this.attachShadow({ mode: 'open' });

    }
    static get observedAttributes() { return [BUTTONS_GROUP_SELECTED_ATTRIBUTE]; }
    attributeChangedCallback(name, oldValue, newValue) {

       
        const WebComponentVariant = this

        if (name === BUTTONS_GROUP_SELECTED_ATTRIBUTE && oldValue!==newValue)
        {
            
            WebComponentVariant.customAttributes[SLOT_LIST_ATTRIBUTE].forEach(slotName => {
                
                WebComponentVariant.buttonListButtonsGroup[slotName].removeEventListener('mouseover',WebComponentVariant.hoverButtonStyles[slotName])
                WebComponentVariant.buttonListButtonsGroup[slotName].removeEventListener('mouseout',WebComponentVariant.defaultButtonStyles[slotName])
                if (slotName!==newValue) 
                {
                    WebComponentVariant.buttonListButtonsGroup[slotName].addEventListener('mouseout',WebComponentVariant.defaultButtonStyles[slotName])
                    WebComponentVariant.buttonListButtonsGroup[slotName].addEventListener('mouseover',WebComponentVariant.hoverButtonStyles[slotName])  
                    WebComponentVariant.defaultButtonStyles[slotName]()
                }
                else
                {
                    WebComponentVariant.defaultButtonStyles[slotName]()
                    WebComponentVariant.activeButtonStyles[slotName]()
                }
            })
            const buttonsToTrigger = WebComponentVariant.shadow.querySelectorAll(`slot`)[0].assignedElements().filter(element => {return element.getAttribute(BUTTON_BUTTONS_GROUP_CONTENT_ATTRIBUTE)===newValue})
            if(oldValue) buttonsToTrigger.forEach(button => button.click())
        }
    }

    connectedCallback() {
        const webComponent = this
        //Define attributes of component
        webComponent.customAttributes = JSON.parse(webComponent.getAttribute(TEMPORARY_ATTRIBUTE))
        webComponent.removeAttribute(TEMPORARY_ATTRIBUTE)
        webComponent.styles = JSON.parse(JSON.stringify(setStyle(webComponent.customAttributes[STYLE_KEY])))

        const slotComponent = document.createElement('slot')
        const stylesProccessedSlotWrapper= processStyle(slotComponent,webComponent.styles[SLOT_WRAPPER])
        webComponent.defaultStyles.push(...stylesProccessedSlotWrapper[DEFAULT_EVENT])

        const buttonsGroupWrapper = document.createElement('div')
        const stylesProccessedButtonsGroupWrapper= processStyle(buttonsGroupWrapper,webComponent.styles[BUTTONS_GROUP_WRAPPER_COMPONENT])
        webComponent.defaultStyles.push(...stylesProccessedButtonsGroupWrapper[DEFAULT_EVENT])

        const buttonsWrapperComponent = document.createElement('div')
        const stylesProccessedButtonsWrapperComponent= processStyle(buttonsWrapperComponent,webComponent.styles[BUTTONS_WRAPPER])
        webComponent.defaultStyles.push(...stylesProccessedButtonsWrapperComponent[DEFAULT_EVENT])

        const buttonsFlexboxComponent = document.createElement('div')
        const stylesProccessedButtonsFlexboxComponent= processStyle(buttonsFlexboxComponent,webComponent.styles[BUTTON_FLEXBOX])
        webComponent.defaultStyles.push(...stylesProccessedButtonsFlexboxComponent[DEFAULT_EVENT])
        
        const BUTTONS_CONTROLLERS = []

        const contentWrapperComponent = document.createElement('div')
        const stylesProccessedContentWrapperComponent= processStyle(contentWrapperComponent,webComponent.styles[CONTENT_WRAPPER])
        webComponent.defaultStyles.push(...stylesProccessedContentWrapperComponent[DEFAULT_EVENT])

        webComponent.customAttributes[SLOT_LIST_ATTRIBUTE].forEach(slotElement => {
            const oneButton = document.createElement('button')             
            const oneDivText = document.createElement('div')
            oneButton.appendChild(oneDivText)
            oneDivText.innerText = webComponent.querySelectorAll(`[${BUTTON_BUTTONS_GROUP_CONTENT_ATTRIBUTE}=${slotElement}]`)[0].innerText
            const stylesProccessedOneDivText= processStyle(oneDivText,webComponent.styles[TEXT_BUTTON])

            const stylesProccessedOneButton= processStyle(oneButton,webComponent.styles[BUTTON_i_COMPONENT])
           
            webComponent.buttonListButtonsGroup[slotElement] = oneButton
            webComponent.activeButtonStyles[slotElement] =() => {
                stylesProccessedOneButton[ACTIVE_BUTTONS_GROUP_EVENT].forEach(style => style())
                stylesProccessedOneDivText[ACTIVE_BUTTONS_GROUP_EVENT].forEach(style => style())
            }
            webComponent.hoverButtonStyles[slotElement] = () => {
                stylesProccessedOneButton[HOVER_EVENT].forEach(style => style())
                stylesProccessedOneDivText[HOVER_EVENT].forEach(style => style())
            }
            webComponent.defaultButtonStyles[slotElement] = () => {
                stylesProccessedOneButton[DEFAULT_EVENT].forEach(style => style())
                stylesProccessedOneDivText[DEFAULT_EVENT].forEach(style => style())
            }
            webComponent.defaultButtonStyles[slotElement]()
            oneButton.onclick = () => {
                webComponent.setAttribute(BUTTONS_GROUP_SELECTED_ATTRIBUTE, slotElement)
            }
            
            BUTTONS_CONTROLLERS.push(oneButton)
        })
        
        webComponent.shadow.appendChild(removePredefinedStyles())
        webComponent.shadow.appendChild(slotComponent)
        webComponent.shadow.appendChild(buttonsGroupWrapper)
            buttonsGroupWrapper.appendChild(buttonsWrapperComponent)
                buttonsWrapperComponent.appendChild(buttonsFlexboxComponent)
                    buttonsFlexboxComponent.append(...BUTTONS_CONTROLLERS)
        
        webComponent.defaultStyles.forEach(style => style())
        if (webComponent.customAttributes[SLOT_LIST_ATTRIBUTE].includes(webComponent.customAttributes[BUTTONS_GROUP_SELECTED_ATTRIBUTE]))  webComponent.setAttribute(BUTTONS_GROUP_SELECTED_ATTRIBUTE, webComponent.customAttributes[BUTTONS_GROUP_SELECTED_ATTRIBUTE])
        else webComponent.setAttribute(BUTTONS_GROUP_SELECTED_ATTRIBUTE, webComponent.customAttributes[SLOT_LIST_ATTRIBUTE][0])
    }
}

const regularButtonsGroupCustomComponent = 'component-regular-buttons-group'
if (customElements.get(regularButtonsGroupCustomComponent) === undefined) customElements.define(regularButtonsGroupCustomComponent, class extends vanillaRegularButtonsGroup { });

export const createRegularButtonsGroup = (attributes, parentElement) => {

    var indexButtons = 0
    const SLOT_LIST = []
    const customButtonGroup = document.createElement(regularButtonsGroupCustomComponent)
   

    if (parentElement.getElementsByTagName('button').length>0)  
    {
            while(parentElement.getElementsByTagName('button').length > 0 && indexButtons<5)
            {  
                parentElement.getElementsByTagName('button')[0].setAttribute(BUTTON_BUTTONS_GROUP_CONTENT_ATTRIBUTE,BUTTON_SLOT[indexButtons])
                SLOT_LIST.push(BUTTON_SLOT[indexButtons])
                customButtonGroup.appendChild(parentElement.getElementsByTagName('button')[0])
                indexButtons = indexButtons + 1
            }       
    }
    while (parentElement.hasChildNodes()) 
    {
        parentElement.removeChild(parentElement.firstChild);
    }
    attributes[SLOT_LIST_ATTRIBUTE] =Array.from(new Set(SLOT_LIST))
    customButtonGroup.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(attributes))
    return customButtonGroup;
}