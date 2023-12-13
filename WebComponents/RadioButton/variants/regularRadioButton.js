import {ENABLE_ATTRIBUTE, ON_OPTION, SMALL_OPTION, TEMPORARY_ATTRIBUTE} from "../constants.js"
import {CONTAINER_SLOT_WRAPPER,WRAPPER_SUBCOMPONENT, LABEL_SUBCOMPONENT, SVG_SUBCOMPONENT, CIRCLE_STROKE_SUBCOMPONENT, CIRCLE_FILL_SUBCOMPONENT, LABEL_SLOT, INPUT_SLOT} from "../constants.js"
import {SVG_ATTRIBUTES, SVG_STYLES, SVG_TYPE} from "../constants.js"
import {STATE_ATTRIBUTE, LABEL_ATTRIBUTE,SIZE_ATTRIBUTE} from "../constants.js"
import {NORMAL_OPTION,SELECTED_OPTION} from "../constants.js"
import { DEFAULT_EVENT, SELECTED_EVENT } from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"

function pushingEventsG (stylesProcessed) {
    this[NORMAL_OPTION].push(...stylesProcessed[DEFAULT_EVENT])
    this[SELECTED_OPTION].push(...stylesProcessed[SELECTED_EVENT])
}
function creatingElementG (NAME_OF_SUBCOMPONENT) 
{
    const pushingEvents = pushingEventsG.bind(this)
    const subComponent = document.createElement('div')
    const stylesProccessed= processStyle(subComponent,this.styles[NAME_OF_SUBCOMPONENT])
    pushingEvents(stylesProccessed)
    return subComponent;
}
function createSvgElementG (svgSubComponent)  {
    const pushingEvents = pushingEventsG.bind(this)
    const svgType = this.styles[svgSubComponent][SVG_ATTRIBUTES][SVG_TYPE]
    const svgAttributes = {...this.styles[svgSubComponent][SVG_ATTRIBUTES]}
    delete svgAttributes[SVG_TYPE]
    const keysAttributes = Object.keys(svgAttributes)
    const xmlns = "http://www.w3.org/2000/svg";
    const svgElem = document.createElementNS(xmlns, svgType);
    keysAttributes.forEach(key=> {
        svgElem.setAttributeNS(null, key, svgAttributes[key]);
    })
    const stylesSVG = processStyle(svgElem,this.styles[svgSubComponent][SVG_STYLES])
    pushingEvents(stylesSVG)
    return svgElem;
} 

class regRButton extends HTMLElement {
    constructor()
    {
        super();      
        this[NORMAL_OPTION] = []
        this[SELECTED_OPTION] = []
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
    }
 
    connectedCallback() {
        const thisComponent = this
        const creatingElement = creatingElementG.bind(this)
        const createSvgElement = createSvgElementG.bind(this)

        const attributes = JSON.parse(this.getAttribute(TEMPORARY_ATTRIBUTE))
        this.removeAttribute(TEMPORARY_ATTRIBUTE)
        //Obtain an independent copy of the style Object selected
        this.styles = JSON.parse(JSON.stringify(setStyle(attributes[STYLE_KEY])))
        //Creation of all Subcomponents
        const slotWrapper = creatingElement(CONTAINER_SLOT_WRAPPER)
        const inputSlot = document.createElement('slot')
        inputSlot.setAttribute('name',INPUT_SLOT)
        const labelSlot = document.createElement('slot')
        labelSlot.setAttribute('name',LABEL_SLOT)
        const wrapper = creatingElement(WRAPPER_SUBCOMPONENT)
        const label = creatingElement(LABEL_SUBCOMPONENT)
        const textNodeLabel = document.createTextNode(attributes[LABEL_ATTRIBUTE])
        const svg = createSvgElement(SVG_SUBCOMPONENT)
        const circleStroke = createSvgElement(CIRCLE_STROKE_SUBCOMPONENT)
        const circleFill = createSvgElement(CIRCLE_FILL_SUBCOMPONENT)
        //Appending subcomponents with its respective parent
        this.shadow.appendChild(slotWrapper) 
            slotWrapper.appendChild(labelSlot)
            slotWrapper.appendChild(inputSlot) 
        this.shadow.appendChild(wrapper) 
            wrapper.appendChild(svg)
                svg.appendChild(circleStroke)
                svg.appendChild(circleFill)
            wrapper.appendChild(label)
                label.appendChild(textNodeLabel)
        //Adding some behaviour to the component
        if (attributes[ENABLE_ATTRIBUTE]=== ON_OPTION) wrapper.onclick = ()=> {
            thisComponent.setAttribute(STATE_ATTRIBUTE,SELECTED_OPTION)
        }
        if (attributes[ENABLE_ATTRIBUTE]=== ON_OPTION) document.addEventListener('click', function(event) {
            const isClickInsideElement = thisComponent.contains(event.target);
            if (!isClickInsideElement) 
            {
                if(!inputSlot.assignedElements()[0].checked) thisComponent.setAttribute(STATE_ATTRIBUTE,NORMAL_OPTION)
            }
        });
        
        // Stating initial attributes for the component

        this[NORMAL_OPTION].forEach( (style)=>  style())
    }
    }
    
const regularRB  = 'regular-radio-button'
if (customElements.get(regularRB) === undefined) customElements.define(regularRB, class extends regRButton {});

export const regularRadioButtonComponent = function (attributes, parentElement)
{
    const contentToAppend = {}
    const labelElement = 'labelElement'
    const inputElement = 'inputElement'
    if (parentElement.getElementsByTagName('label').length>0)  contentToAppend[labelElement] = parentElement.getElementsByTagName('label')[0].cloneNode(true)
    if (parentElement.getElementsByTagName('input').length>0)  contentToAppend[inputElement] = parentElement.getElementsByTagName('input')[0].cloneNode(true)
    while (parentElement.hasChildNodes()) 
    {
            parentElement.removeChild(parentElement.firstChild);
    }
    attributes[LABEL_ATTRIBUTE] = contentToAppend[labelElement].textContent
    const customRadioButton = document.createElement(regularRB)
    customRadioButton.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(attributes))
    contentToAppend[inputElement].setAttribute('slot',INPUT_SLOT)
    customRadioButton.appendChild(contentToAppend[inputElement])
    contentToAppend[labelElement].setAttribute('slot',LABEL_SLOT)
    customRadioButton.appendChild(contentToAppend[labelElement])


    const mutationCallback = (mutationsList) => {
        for (const mutation of mutationsList) 
        {
          if (mutation.type !== "attributes" || mutation.attributeName !== STATE_ATTRIBUTE) return
          const state =  mutation.target.getAttribute(STATE_ATTRIBUTE)
          if (state === SELECTED_OPTION) contentToAppend[inputElement].click()
        }
    }

    const observerRadioButton = new MutationObserver(mutationCallback)
    observerRadioButton.observe(customRadioButton, { attributes: true })

    return customRadioButton;
}


