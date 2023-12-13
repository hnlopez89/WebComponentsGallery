// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// I----------->LABEL_SLOT

// WRAPPER_SUBCOMPONENT
// I----------->CHECKBOX_SUBCOMPONENT
// I                I----------->CHECK_SUBCOMPONENT
// I                I                   I----------->CHECK_BCKGR_SUBCOMPONENT
// I                I                                       I----------->ICON_CONTAINER_SUBCOMPONENT
// I                I                                                               I----------->ICON_SUBCOMPONENT
// I                I                                                                               I----------->SUCCESS_ICON_SUBCOMPONENT
// I                I                                                                                       |
// I                I                                                                                       |--->MINUS_ICON_SUBCOMPONENT
// I                I----------->LABEL_SUBCOMPONENT                                                         
// I
// I----------->ERROR_SUBCOMPONENT
//                  I----------->ERROR_LABEL

import {CONTAINER_SLOT_WRAPPER,
        LABEL_SLOT,
        INPUT_SLOT,
        WRAPPER_SUBCOMPONENT,
        CHECKBOX_SUBCOMPONENT,
        CHECK_SUBCOMPONENT,
        CHECK_BCKGR_SUBCOMPONENT,
        ICON_CONTAINER_SUBCOMPONENT,
        ICON_SUBCOMPONENT,
        SUCCESS_ICON_SUBCOMPONENT,
        MINUS_ICON_SUBCOMPONENT,
        LABEL_SUBCOMPONENT,
        ERROR_SUBCOMPONENT,
        ERROR_LABEL,
        ERROR_EVENT,
        INDETERMINATED_EVENT,
        ERROR_MESSAGE_ATTRIBUTE} from "../constants.js"

import {STATE_SLOT_ATTRIBUTE,
        STATE_ATTRIBUTE, 
        LABEL_ATTRIBUTE,
        ENABLE_ATTRIBUTE,
        TEMPORARY_ATTRIBUTE} from "../constants.js"
import {NORMAL_OPTION,
        SELECTED_OPTION,
        ERROR_OPTION,
        INDETERMINATED_OPTION,
        ON_OPTION,} from "../constants.js"
import { DEFAULT_EVENT, SELECTED_EVENT } from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {ICON_SELECTION_ATTRIBUTE as ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT,
        ICON_COLOR_ATTRIBUTE, 
        ICON_HEIGHT_ATTRIBUTE,
        ICON_WIDTH_ATTRIBUTE} from "../../Icons/constants.js"
import {NAME_OF_COMPONENT as ICON} from "../../Icons/constants.js" 
import {SUCCESS_ICON_ANIMATED_ICON_OPTION,
        CHECK_ICON_OPTION,
        APPROVAL_CHECK_ICON_OPTION,
        MINUS_ICON_OPTION} from "../../Icons/constants.js"


class regCheckbox extends HTMLElement {
    constructor()
    {
        super();      
        this[NORMAL_OPTION] = []
        this[SELECTED_OPTION] = []
        this[ERROR_OPTION] = []
        this[INDETERMINATED_OPTION] = []
        this.styles = null
        this.shadow = this.attachShadow({mode: 'open'});
    
    }
    static get observedAttributes() { return [STATE_ATTRIBUTE]; }
    attributeChangedCallback() 
    {       
        const state = this.getAttribute(STATE_ATTRIBUTE)
        if (state === NORMAL_OPTION)
        {
            this[NORMAL_OPTION].forEach( (style)=>  style())
        }
        else if (state === SELECTED_OPTION)
        {
            this[SELECTED_OPTION].forEach( (style)=>  style())
        }
        else if (state === ERROR_OPTION)
        {
            this[ERROR_OPTION].forEach( (style)=>  style())
        }
        else if (state === INDETERMINATED_OPTION)
        {
            this[INDETERMINATED_OPTION].forEach( (style)=>  style())
        }
    }
    pushingEvents (stylesProcessed) {
            this[NORMAL_OPTION].push(...stylesProcessed[DEFAULT_EVENT])
            this[SELECTED_OPTION].push(...stylesProcessed[SELECTED_EVENT])
            this[ERROR_OPTION].push(...stylesProcessed[ERROR_EVENT])
            this[INDETERMINATED_OPTION].push(...stylesProcessed[INDETERMINATED_EVENT])
    }
    creatingElement (NAME_OF_SUBCOMPONENT) 
    {
        const subComponent = document.createElement('div')
        const stylesProccessed= processStyle(subComponent,this.styles[NAME_OF_SUBCOMPONENT])
        this.pushingEvents(stylesProccessed)
        return subComponent;
    }
    connectedCallback() {
        const thisComponent = this
        const attributes = JSON.parse(this.getAttribute(TEMPORARY_ATTRIBUTE))
        this.removeAttribute(TEMPORARY_ATTRIBUTE)
        //Obtain an independent copy of the style Object selected
        this.styles = JSON.parse(JSON.stringify(setStyle(attributes[STYLE_KEY])))
        //Creation of all Subcomponents
        const slotWrapper = this.creatingElement(CONTAINER_SLOT_WRAPPER)
        const inputSlot = document.createElement('slot')
        inputSlot.setAttribute('name',INPUT_SLOT)
        const labelSlot = document.createElement('slot')
        labelSlot.setAttribute('name',LABEL_SLOT)
        const wrapper = this.creatingElement(WRAPPER_SUBCOMPONENT)
        const checkbox = this.creatingElement(CHECKBOX_SUBCOMPONENT)
        const check = this.creatingElement(CHECK_SUBCOMPONENT)
        const checkBckgr = this.creatingElement(CHECK_BCKGR_SUBCOMPONENT)
        const iconContainer = this.creatingElement(ICON_CONTAINER_SUBCOMPONENT)

        const icon = document.createElement(ICON)
        const stylesProccessedIcon= processStyle(icon,this.styles[ICON_SUBCOMPONENT])
        this.pushingEvents(stylesProccessedIcon)

        this[SELECTED_OPTION].push(()=> icon.setAttribute(ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT, CHECK_ICON_OPTION))
        this[SELECTED_OPTION].push(()=> icon.setAttribute(ICON_COLOR_ATTRIBUTE, this.styles[SUCCESS_ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE]))
        this[SELECTED_OPTION].push(()=> icon.setAttribute(ICON_HEIGHT_ATTRIBUTE, this.styles[SUCCESS_ICON_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE]))
        this[SELECTED_OPTION].push(()=> icon.setAttribute(ICON_WIDTH_ATTRIBUTE, this.styles[SUCCESS_ICON_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE]))


        this[INDETERMINATED_OPTION].push(()=> icon.setAttribute(ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT, MINUS_ICON_OPTION))
        this[INDETERMINATED_OPTION].push(()=> icon.setAttribute(ICON_COLOR_ATTRIBUTE, this.styles[MINUS_ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE]))
        this[INDETERMINATED_OPTION].push(()=> icon.setAttribute(ICON_HEIGHT_ATTRIBUTE, this.styles[MINUS_ICON_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE]))
        this[INDETERMINATED_OPTION].push(()=> icon.setAttribute(ICON_WIDTH_ATTRIBUTE, this.styles[MINUS_ICON_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE]))

        
        

        const label = this.creatingElement(LABEL_SUBCOMPONENT)
        const textNodeLabel = document.createTextNode(attributes[LABEL_ATTRIBUTE])
        const error = this.creatingElement(ERROR_SUBCOMPONENT)
        const errorLabel = this.creatingElement(ERROR_LABEL)
        const errorNodeLabel = document.createTextNode(attributes[ERROR_MESSAGE_ATTRIBUTE])
        //Appending subcomponents with its respective parent
        this.shadow.appendChild(slotWrapper) 
            slotWrapper.appendChild(labelSlot)
            slotWrapper.appendChild(inputSlot) 
        this.shadow.appendChild(wrapper) 
            wrapper.appendChild(checkbox)
                checkbox.appendChild(check)
                        check.appendChild(checkBckgr)
                            checkBckgr.appendChild(iconContainer)
                                iconContainer.appendChild(icon)
                checkbox.appendChild(label)
                    label.appendChild(textNodeLabel)
            wrapper.appendChild(error)
                error.appendChild(errorLabel)
                    errorLabel.appendChild(errorNodeLabel)
                
        // Stating initial attributes for the component
        if (attributes[ENABLE_ATTRIBUTE]=== ON_OPTION) document.addEventListener('click', function(event) {
            const isClickInsideElement = thisComponent.contains(event.target);
            if (isClickInsideElement) 
            {
                if (thisComponent.getAttribute(STATE_ATTRIBUTE) === SELECTED_OPTION) thisComponent.setAttribute(STATE_ATTRIBUTE, NORMAL_OPTION)
                else thisComponent.setAttribute(STATE_ATTRIBUTE, SELECTED_OPTION)
                 
            }
        });

        this[NORMAL_OPTION].forEach( (style)=>  style())

        this.style.display = 'contents'
        thisComponent.setAttribute(STATE_ATTRIBUTE, attributes[STATE_ATTRIBUTE])
    }
    }
    
const regularCB  = 'regular-checkbox'
if (customElements.get(regularCB) === undefined) customElements.define(regularCB, class extends regCheckbox {});

export const regularCheckboxComponent = function (attributes, parentElement)
{
    const contentToAppend = {}
    const labelElement = 'labelElement'
    const inputElement = 'inputElement'
    if (parentElement.getElementsByTagName('label').length>0)  contentToAppend[labelElement] = parentElement.getElementsByTagName('label')[0]
    if (parentElement.getElementsByTagName('input').length>0)  contentToAppend[inputElement] = parentElement.getElementsByTagName('input')[0]
    
    attributes[LABEL_ATTRIBUTE] = contentToAppend[labelElement].textContent
    const customCheckbox = document.createElement(regularCB)
    customCheckbox.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(attributes))
    contentToAppend[inputElement].setAttribute('slot',INPUT_SLOT)
    customCheckbox.appendChild(contentToAppend[inputElement])
    contentToAppend[labelElement].setAttribute('slot',LABEL_SLOT)
    customCheckbox.appendChild(contentToAppend[labelElement])
    const mutationCallbackWebcomponent = (mutationsList) => {
        
        for (const mutation of mutationsList) 
        {
          if (mutation.type !== "attributes" || mutation.attributeName !== STATE_ATTRIBUTE) return
          const state =  mutation.target.getAttribute(STATE_ATTRIBUTE)
          if (state !== contentToAppend[inputElement].getAttribute(STATE_SLOT_ATTRIBUTE)) contentToAppend[inputElement].removeAttribute(STATE_SLOT_ATTRIBUTE)
          if (state === SELECTED_OPTION) contentToAppend[inputElement].checked = true
          else if (state !== SELECTED_OPTION) contentToAppend[inputElement].checked = false
        }
    }
    const observerWebcomponent = new MutationObserver(mutationCallbackWebcomponent)
    observerWebcomponent.observe(customCheckbox, { attributes: true })

    const mutationCallbackCheckSlot = (mutationsList) => {
        for (const mutation of mutationsList) 
        {
          if (mutation.type !== "attributes" || mutation.attributeName !== STATE_SLOT_ATTRIBUTE) return
          const state =  mutation.target.getAttribute(STATE_SLOT_ATTRIBUTE)
          if (state === SELECTED_OPTION) customCheckbox.setAttribute(STATE_ATTRIBUTE,SELECTED_OPTION)
          else if (state === NORMAL_OPTION) customCheckbox.setAttribute(STATE_ATTRIBUTE,NORMAL_OPTION)
          else if (state === ERROR_OPTION) customCheckbox.setAttribute(STATE_ATTRIBUTE,ERROR_OPTION)
          else if (state === INDETERMINATED_OPTION) customCheckbox.setAttribute(STATE_ATTRIBUTE,INDETERMINATED_OPTION)
        }
    }
    const observerInputSlot = new MutationObserver(mutationCallbackCheckSlot)
    observerInputSlot.observe(contentToAppend[inputElement], { attributes: true })

    return customCheckbox;
}


