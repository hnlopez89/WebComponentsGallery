import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {setStyle, processStyle} from "../styles/index.js"
import {OPENED_OPTION, CLOSED_OPTION, OPEN_ATTRIBUTE, TITLE_ATTRIBUTE, TOTAL_HEIGHT_ATTRIBUTE} from "../constants.js"
import { OPEN_ACCORDION_EVENT, DEFAULT_EVENT } from "../constants.js"
import {CONTAINER_SUBCOMPONENT, TITLE_SUBCOMPONENT, TEXT_TITLE_SUBCOMPONENT, ICON_PARENT_TITLE_SUBCOMPONENT, ICON_CHILD_SUBCOMPONENT , CONTENT_SUBCOMPONENT, ICON_WRAPPER_SUBCOMPONENT} from "../constants.js"

import {PLUS_ICON_OPTION, MINUS_ICON_OPTION} from "../../Icons/constants.js"
import { ICON_COLOR_ATTRIBUTE, ICON_WIDTH_ATTRIBUTE, ICON_HEIGHT_ATTRIBUTE, ICON_SELECTION_ATTRIBUTE } from "../../Icons/constants.js"
import {NAME_OF_COMPONENT as ICON} from "../../Icons/constants.js"

const TEMPORARY_ATTRIBUTE = 'temporary-attribute'
class vanillaRegularAccordion extends HTMLElement {
    constructor()
    {
        super();
        this.styles = null
        this.openStyles = []
        this.closeStyles = []
        this.iconParent = null
        this.iconChild = null       
        this.totalHeight = null
        this.shadow = this.attachShadow({mode: 'open'});

    }
    static get observedAttributes() { return [OPEN_ATTRIBUTE, TOTAL_HEIGHT_ATTRIBUTE]; }
    attributeChangedCallback(name,oldValue,newValue) 
    {
        if (name === OPEN_ATTRIBUTE)
        {
            const state = this.getAttribute(OPEN_ATTRIBUTE)
            if (state === OPENED_OPTION)
            {                
                if (this.iconChild !== null) this.iconParent.removeChild(this.iconChild)
                this.iconChild = document.createElement(ICON)
                this.iconChild.setAttribute(ICON_SELECTION_ATTRIBUTE, MINUS_ICON_OPTION)
                this.iconChild.setAttribute(ICON_COLOR_ATTRIBUTE,this.styles[ICON_PARENT_TITLE_SUBCOMPONENT].color)
                this.iconChild.setAttribute(ICON_HEIGHT_ATTRIBUTE,this.styles[ICON_CHILD_SUBCOMPONENT].height)
                this.iconChild.setAttribute(ICON_WIDTH_ATTRIBUTE,this.styles[ICON_CHILD_SUBCOMPONENT].width)
                this.iconParent.appendChild(this.iconChild)
                this.openStyles.forEach( (style)=>  style())
            }
            else if (state !== OPENED_OPTION)
            {                
                if(this.iconChild) this.iconParent.removeChild(this.iconChild)
                this.iconChild = document.createElement(ICON)
                this.iconChild.setAttribute(ICON_SELECTION_ATTRIBUTE, PLUS_ICON_OPTION)
                this.iconChild.setAttribute(ICON_COLOR_ATTRIBUTE,this.styles[ICON_PARENT_TITLE_SUBCOMPONENT].color)
                this.iconChild.setAttribute(ICON_HEIGHT_ATTRIBUTE,this.styles[ICON_CHILD_SUBCOMPONENT].height)
                this.iconChild.setAttribute(ICON_WIDTH_ATTRIBUTE,this.styles[ICON_CHILD_SUBCOMPONENT].width)
                this.iconParent.appendChild(this.iconChild)
                this.closeStyles.forEach( (style)=>  style())
                return;
            }
        }
        else if (name === TOTAL_HEIGHT_ATTRIBUTE)
        {
            if (oldValue!==newValue)
            {
                this.totalHeight = this.getAttribute(TOTAL_HEIGHT_ATTRIBUTE)
                if (this.getAttribute(OPEN_ATTRIBUTE)=== OPENED_OPTION) this.content.style.height = this.totalHeight
            }
        }

    }
    connectedCallback() {
        const customClass = this
        //Define attributes of component
        const attributes = JSON.parse(this.getAttribute(TEMPORARY_ATTRIBUTE))
        this.removeAttribute(TEMPORARY_ATTRIBUTE)
        this.styles = setStyle(attributes[STYLE_KEY])
        this.totalHeight = this.styles[CONTENT_SUBCOMPONENT][OPEN_ACCORDION_EVENT].height

        //Create elements and assign styling
        const container = document.createElement('div')
        const stylesProccessedContainer = processStyle(container,this.styles[CONTAINER_SUBCOMPONENT])
        this.closeStyles.push(...stylesProccessedContainer[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedContainer[OPEN_ACCORDION_EVENT])
        
        const title = document.createElement('div')
        const stylesProccessedTitle = processStyle(title,this.styles[TITLE_SUBCOMPONENT])
        this.closeStyles.push(...stylesProccessedTitle[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedTitle[OPEN_ACCORDION_EVENT])

        customClass.content = document.createElement('div')    
        
        const stylesProccessedContent = processStyle(customClass.content,customClass.styles[CONTENT_SUBCOMPONENT])
        customClass.closeStyles.push(...stylesProccessedContent[DEFAULT_EVENT])
        customClass.openStyles.push(...stylesProccessedContent[OPEN_ACCORDION_EVENT])
        customClass.openStyles.push(()=> customClass.content.style.height = customClass.totalHeight)
        
            

        const contentToAppend = document.createElement('slot')
        

        const textTitleNode = document.createTextNode(attributes[TITLE_ATTRIBUTE])
        const textTitle= document.createElement('div')
        const stylesProccessedText = processStyle(textTitle,this.styles[TEXT_TITLE_SUBCOMPONENT])
        this.closeStyles.push(...stylesProccessedText[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedText[OPEN_ACCORDION_EVENT])
        
        const iconWrapper = document.createElement('div')
        const stylesProccessedIconWrapper = processStyle(iconWrapper,this.styles[ICON_WRAPPER_SUBCOMPONENT])
        this.closeStyles.push(...stylesProccessedIconWrapper[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedIconWrapper[OPEN_ACCORDION_EVENT])

        this.iconParent = document.createElement('div')
        const stylesProccessedIconParent = processStyle (this.iconParent, this.styles[ICON_PARENT_TITLE_SUBCOMPONENT])
        this.closeStyles.push(...stylesProccessedIconParent[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedIconParent[OPEN_ACCORDION_EVENT])

        this.iconChild = document.createElement(ICON)
        if (attributes[OPEN_ATTRIBUTE] === OPENED_OPTION) this.iconChild.setAttribute(ICON_SELECTION_ATTRIBUTE, MINUS_ICON_OPTION)
        else if (attributes[OPEN_ATTRIBUTE] !== OPENED_OPTION)this.iconChild.setAttribute(ICON_SELECTION_ATTRIBUTE, PLUS_ICON_OPTION)
        this.iconChild.setAttribute(ICON_COLOR_ATTRIBUTE,this.styles[ICON_PARENT_TITLE_SUBCOMPONENT].color)
        this.iconChild.setAttribute(ICON_HEIGHT_ATTRIBUTE,this.styles[ICON_CHILD_SUBCOMPONENT].height)
        this.iconChild.setAttribute(ICON_WIDTH_ATTRIBUTE,this.styles[ICON_CHILD_SUBCOMPONENT].width)
         
        //Add some behaviour
        const clickAccordion = (event) => {
            event.preventDefault()
            const state = customClass.getAttribute(OPEN_ATTRIBUTE)
            if (state === OPENED_OPTION)
            {
                customClass.setAttribute(OPEN_ATTRIBUTE,CLOSED_OPTION)
                return;
            }
            else if (state !== OPENED_OPTION)
            {
                customClass.setAttribute(OPEN_ATTRIBUTE,OPENED_OPTION)
                return;
            }
            
        }
        title.addEventListener('click',clickAccordion)
       
        //Establish how they are related
        container.appendChild(title)
            title.appendChild(textTitle)
                textTitle.appendChild(textTitleNode)
            title.appendChild(iconWrapper)
                iconWrapper.appendChild(this.iconParent)
                    this.iconParent.appendChild(this.iconChild)      
        container.appendChild(customClass.content)
            customClass.content.appendChild(contentToAppend)
        if (this.shadow.children.length === 0)  this.shadow.appendChild(container) 

        //Establish default styling
        customClass.closeStyles.forEach((style) =>  style())
        this.setAttribute(OPEN_ATTRIBUTE,attributes[OPEN_ATTRIBUTE])
        
      }
}

const regularAccordionCustomComponent = 'component-regular-accordion'
if (customElements.get(regularAccordionCustomComponent) === undefined) customElements.define(regularAccordionCustomComponent, class extends vanillaRegularAccordion {});

export const createRegularAccordion =   (attributes, parentElement) => {
    const regularAccordionElement = document.createElement(regularAccordionCustomComponent)
    regularAccordionElement.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(attributes))

    const divWrapper = document.createElement('div')
        const children = [...parentElement.children]
        for (var i=0;i<children.length;i++)
        {
            divWrapper.appendChild(children[i])
        }
    divWrapper.style.padding = "1px"
    regularAccordionElement.appendChild(divWrapper)
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          if(entry.contentBoxSize) {
            const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
            
            regularAccordionElement.setAttribute(TOTAL_HEIGHT_ATTRIBUTE, `${contentBoxSize.blockSize}px`)
          }
          else if (entry.contentRect) {
            regularAccordionElement.setAttribute(TOTAL_HEIGHT_ATTRIBUTE, `${entry.contentRect.height}px`)

              
          }
        }
      });
    resizeObserver.observe(divWrapper);

    return regularAccordionElement;
}