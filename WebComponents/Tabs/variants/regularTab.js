import { STYLE_KEY, MAX_WIDTH_SMALL_OPTION } from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { setStyle, processStyle } from "../styles/index.js"
import {TAB_SELECTED_ATTRIBUTE, 
        TAB_CONTENT_ATTRIBUTE,
        BUTTON_TAB_CONTENT_ATTRIBUTE,
        SLOT_LIST_ATTRIBUTE,
        BUTTON_TITLE_LIST, 
        BUTTONS_WRAPPER} from "../constants.js"
import { DEFAULT_EVENT, ACTIVE_TAB_EVENT, HOVER_EVENT } from "../constants.js"

import {
    SLOT_WRAPPER,
    TABS_WRAPPER_COMPONENT,
    BUTTON_FLEXBOX,
    BUTTON_i_COMPONENT,
    CONTENT_WRAPPER,
    TEXT_BUTTON


} from "../constants.js"


const TEMPORARY_ATTRIBUTE = 'temporary-attribute'
const addDragEvent = (element)=>{
    const slider = element
    let mouseDown = false;
    let startX, scrollLeft;

    let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    };
    let stopDragging = function (event) {
    mouseDown = false;
    };

    slider.addEventListener('mousemove', (e) => {
        e.preventDefault();
        if(!mouseDown) { return; }
        const x = (e.pageX - slider.offsetLeft) ;
        const scroll = (x - startX) * 1;
        slider.scrollLeft = scrollLeft - scroll;
    });

    // Add the event listeners
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
}
const removeScrollbar = () => {
    const styleSheet = document.createElement('style')
    styleSheet.innerHTML= `
    * {
        -webkit-tap-highlight-color: transparent;
    }
    *::-webkit-scrollbar {
        display: none;
      }
      
      * {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
    `
    return styleSheet;
}

function getTextWidth(text, font) {
    // re-use canvas object for better performance
    const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }
  
  function getCssStyle(element, prop) {
      return window.getComputedStyle(element, null).getPropertyValue(prop);
  }
  
  function getCanvasFont(el = document.body) {
    const fontWeight = getCssStyle(el, 'font-weight') || 'normal';
    const fontSize = getCssStyle(el, 'font-size') || '16px';
    const fontFamily = getCssStyle(el, 'font-family') || 'Times New Roman';
    
    return `${fontWeight} ${fontSize} ${fontFamily}`;
  }
class vanillaRegularTab extends HTMLElement {
    constructor() {
        super();
        this.customAttributes = null
        this.styles = null
        this.defaultStyles = []
        this.buttonListTabs = {}
        this.defaultButtonStyles = {}
        this.hoverButtonStyles = {}
        this.activeButtonStyles = {}
        this.widthStyle = null
        this.shadow = this.attachShadow({ mode: 'open' });

    }
    static get observedAttributes() { return [TAB_SELECTED_ATTRIBUTE]; }
    attributeChangedCallback(name, oldValue, newValue) {

       
        const WebComponentVariant = this

        if (name === TAB_SELECTED_ATTRIBUTE && oldValue!==newValue)
        {
            
            WebComponentVariant.customAttributes[SLOT_LIST_ATTRIBUTE].forEach(slotName => {
                
                WebComponentVariant.buttonListTabs[slotName].removeEventListener('mouseover',WebComponentVariant.hoverButtonStyles[slotName])
                WebComponentVariant.buttonListTabs[slotName].removeEventListener('mouseout',WebComponentVariant.defaultButtonStyles[slotName])
                if (slotName!==newValue) 
                {
                    WebComponentVariant.buttonListTabs[slotName].addEventListener('mouseout',WebComponentVariant.defaultButtonStyles[slotName])
                    WebComponentVariant.buttonListTabs[slotName].addEventListener('mouseover',WebComponentVariant.hoverButtonStyles[slotName])  
                    WebComponentVariant.defaultButtonStyles[slotName]()
                }
                else
                {
                    WebComponentVariant.defaultButtonStyles[slotName]()
                    WebComponentVariant.activeButtonStyles[slotName]()
                }
            })
            const buttonsToTrigger = WebComponentVariant.shadow.querySelectorAll(`slot`)[0].assignedElements().filter(element => {return element.getAttribute(BUTTON_TAB_CONTENT_ATTRIBUTE)===newValue})
            buttonsToTrigger.forEach(button => button.click())
            const allSlots = WebComponentVariant.shadow.querySelectorAll(`slot[name]`)
            allSlots.forEach(slot=>slot.style.display='none')
            WebComponentVariant.shadow.querySelectorAll(`slot[name=${newValue}]`)[0].style.display = 'block'
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

        const tabsWrapper = document.createElement('div')
        const stylesProccessedTabsWrapper= processStyle(tabsWrapper,webComponent.styles[TABS_WRAPPER_COMPONENT])
        webComponent.defaultStyles.push(...stylesProccessedTabsWrapper[DEFAULT_EVENT])

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
        const SLOTS = []

        webComponent.customAttributes[SLOT_LIST_ATTRIBUTE].forEach(slotElement => {
            const oneButton = document.createElement('button')     
            const oneDivText = document.createElement('div')
            oneButton.appendChild(oneDivText)
            oneDivText.innerText = webComponent.customAttributes[BUTTON_TITLE_LIST][slotElement]    
            const stylesProccessedOneDivText= processStyle(oneDivText,webComponent.styles[TEXT_BUTTON])

            const stylesProccessedOneButton= processStyle(oneButton,webComponent.styles[BUTTON_i_COMPONENT])
           
            webComponent.buttonListTabs[slotElement] = oneButton
            webComponent.activeButtonStyles[slotElement] =() => {
                stylesProccessedOneButton[ACTIVE_TAB_EVENT].forEach(style => style())
                stylesProccessedOneDivText[ACTIVE_TAB_EVENT].forEach(style => style())
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
            oneButton.onclick = () => {webComponent.setAttribute(TAB_SELECTED_ATTRIBUTE, slotElement)}

            const oneSlot = document.createElement('slot')
            oneSlot.setAttribute('name', slotElement)
            oneSlot.style.display = 'none'
            
            BUTTONS_CONTROLLERS.push(oneButton)
            SLOTS.push(oneSlot)
        })
        addDragEvent(buttonsWrapperComponent)
        const widthOneButton = []
        var widthTabControllers = 0
        BUTTONS_CONTROLLERS.forEach(button=> {
            const text = button.innerText
            const fontSize = webComponent.styles[BUTTON_i_COMPONENT][HOVER_EVENT].fontSize
            const fontWeight = webComponent.styles[BUTTON_i_COMPONENT][HOVER_EVENT].fontWeight
            const fontFamily = webComponent.styles[BUTTON_i_COMPONENT][HOVER_EVENT].fontFamily
            const textWidth = getTextWidth(text, `${fontWeight} ${fontSize} ${fontFamily}`)
            widthOneButton.push(32 + textWidth * 1.2)
            widthTabControllers = 32 + textWidth * 1.2 + widthTabControllers
        })
        webComponent.widthStyle = ()=>{

            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
            if (vw>=widthTabControllers && vw>=buttonsFlexboxComponent.scrollWidth ) 
            {
                BUTTONS_CONTROLLERS.forEach(button=> {
                    button.style.width = "auto"
                    button.style.flexBasis = "100%"
                })
                
            }
            else
            {
                BUTTONS_CONTROLLERS.forEach((button,index)=> {
                    button.style.width = `${widthOneButton[index]}px`
                    button.style.removeProperty('flex-basis')
                })
                
            }
            
        }
        window.addEventListener("resize", webComponent.widthStyle)
   
       const styleSheet = removeScrollbar()
        webComponent.shadow.appendChild(styleSheet)
        webComponent.shadow.appendChild(slotComponent)
        webComponent.shadow.appendChild(tabsWrapper)
            tabsWrapper.appendChild(buttonsWrapperComponent)
                buttonsWrapperComponent.appendChild(buttonsFlexboxComponent)
                    buttonsFlexboxComponent.append(...BUTTONS_CONTROLLERS)
            tabsWrapper.appendChild(contentWrapperComponent)
                contentWrapperComponent.append(...SLOTS)
        
        webComponent.defaultStyles.forEach(style => style())
        webComponent.widthStyle()
        if (webComponent.customAttributes[SLOT_LIST_ATTRIBUTE].includes(webComponent.customAttributes[TAB_SELECTED_ATTRIBUTE]))  webComponent.setAttribute(TAB_SELECTED_ATTRIBUTE, webComponent.customAttributes[TAB_SELECTED_ATTRIBUTE])
        else webComponent.setAttribute(TAB_SELECTED_ATTRIBUTE, webComponent.customAttributes[SLOT_LIST_ATTRIBUTE][0])
    }
}

const regularTabCustomComponent = 'component-regular-tab'
if (customElements.get(regularTabCustomComponent) === undefined) customElements.define(regularTabCustomComponent, class extends vanillaRegularTab { });

export const createRegularTab = (attributes, parentElement) => {
    const controllers = parentElement.querySelectorAll(`[${BUTTON_TAB_CONTENT_ATTRIBUTE}]`)
    const SLOT_LIST = []
    const BUTTON_TITLE= {}
    controllers.forEach(controller => {
        SLOT_LIST.push(controller.getAttribute(BUTTON_TAB_CONTENT_ATTRIBUTE))
       if (!BUTTON_TITLE.hasOwnProperty(controller.getAttribute(BUTTON_TAB_CONTENT_ATTRIBUTE))) BUTTON_TITLE[controller.getAttribute(BUTTON_TAB_CONTENT_ATTRIBUTE)] = controller.innerText
    })
    attributes[BUTTON_TITLE_LIST] = BUTTON_TITLE
    attributes[SLOT_LIST_ATTRIBUTE] =Array.from(new Set(SLOT_LIST))
    
    const contentMatchingController = parentElement.querySelectorAll(`[${TAB_CONTENT_ATTRIBUTE}]`)
    contentMatchingController.forEach(content => {content.setAttribute('slot',content.getAttribute(TAB_CONTENT_ATTRIBUTE) )})
    const regularTabCustomElement = document.createElement(regularTabCustomComponent);
    regularTabCustomElement.setAttribute(TEMPORARY_ATTRIBUTE, JSON.stringify(attributes))
    regularTabCustomElement.append(...parentElement.children)

    return regularTabCustomElement;
}