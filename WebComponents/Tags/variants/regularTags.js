import {CONTAINER_SLOT_WRAPPER, CONTAINER_BUTTON_PILL, TEXT_CONTAINER, COLOR_ATTRIBUTE, COLOR_FONT_ATTRIBUTE} from "../constants.js"
import {TEMPORARY_ATTRIBUTE, TITLE_ATTRIBUTE, NORMAL_OPTION} from "../constants.js"
import {DEFAULT_EVENT} from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"  
import {appendButtonVariant,addListener} from "./commonMethods.js"    
function pushingEventsG (stylesProcessed) {

    this[NORMAL_OPTION].push(...stylesProcessed[DEFAULT_EVENT])
    
}
function creatingElementG (NAME_OF_SUBCOMPONENT) 
{
    const pushingEvents = pushingEventsG.bind(this)
    const subComponent = document.createElement('div')
    const stylesProccessed= processStyle(subComponent,this.styles[NAME_OF_SUBCOMPONENT])
    pushingEvents(stylesProccessed)
    return subComponent;
}

class regularTagsClass extends HTMLElement {
    constructor()
    {
        super();      
        this.styles = null
        this.shadow = this.attachShadow({mode: 'open'});
        this[NORMAL_OPTION] = []

    }
   
    connectedCallback() {
        const creatingElement = creatingElementG.bind(this)
        const attributes = JSON.parse(this.getAttribute(TEMPORARY_ATTRIBUTE))
        this.removeAttribute(TEMPORARY_ATTRIBUTE)
        
        this.styles = JSON.parse(JSON.stringify(setStyle(attributes[STYLE_KEY])))

        //Component width dimensions and display
        this.style.display = 'contents' 
       
        //Creation of all Subcomponents
        const slotWrapper = creatingElement(CONTAINER_SLOT_WRAPPER)
        this.container = creatingElement(CONTAINER_BUTTON_PILL)
        const textContainer = creatingElement(TEXT_CONTAINER)
        textContainer.innerText = attributes[TITLE_ATTRIBUTE]
        const spanSlot = document.createElement('slot')

        //Appending subcomponents with its respective parent
        this.shadow.appendChild(slotWrapper)
            slotWrapper.appendChild(spanSlot)  
        this.shadow.appendChild(this.container)  
            this.container.appendChild(textContainer)
           
        this[NORMAL_OPTION].forEach( (style)=>  style())
        addListener.bind(this)()
    }
}

const regularTagsVariant  = 'regular-tags'
if (customElements.get(regularTagsVariant) === undefined) customElements.define(regularTagsVariant, class extends regularTagsClass {});
export const regularTag = function (attributes, parentElement)
{
   
    const customTags = document.createElement(regularTagsVariant)
    appendButtonVariant(parentElement,attributes,customTags)
    customTags.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(attributes))

    while (parentElement.hasChildNodes()) {
        parentElement.removeChild(parentElement.firstChild);
      }
    return customTags;
}