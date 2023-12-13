import {WRAPPER_COMPONENT,
        ICON_COMPONENT,
        PATH_SUBCOMPONENT,
        CONTENT_WRAPPER,
        CONTENT_COMPONENT,
        TITLE_COMPONENT,
        SUBTITLE_COMPONENT,
        CONTAINER_BUTTON_WRAPPER} from '../constants.js'
import { setStyle } from "../styles/index.js"
import {DEFAULT_EVENT} from "../constants.js"
import { STYLE_KEY } from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { SVG_SUBCOMPONENT } from "../constants.js";
import {creatingElementG, createSvgElementG} from "./constants.js"

export const createSingleButtonTooltip = function() {

        const creatingElement = creatingElementG.bind(this)
        const createSvgElement = createSvgElementG.bind(this)
        const style = setStyle(this.dataAttributes[STYLE_KEY])
        
        const wrapperComponent = creatingElement(WRAPPER_COMPONENT, style)
        const iconComponent = creatingElement(ICON_COMPONENT, style)
        const svgComponent = createSvgElement(SVG_SUBCOMPONENT, style)
        const pathComponent = createSvgElement(PATH_SUBCOMPONENT, style)
        const contentWrapper = creatingElement(CONTENT_WRAPPER, style)
        const contentComponent = creatingElement(CONTENT_COMPONENT, style)
        const titleComponent = creatingElement(TITLE_COMPONENT, style)
        const subtitleComponent = creatingElement(SUBTITLE_COMPONENT, style)
        const buttonWrapper = creatingElement(CONTAINER_BUTTON_WRAPPER, style)
    
        const slots = []

        //setting title
        const titleTag = this.querySelector('h1') ? this.querySelector('h1') : document.createElement('h1')
        titleTag.className = ''
        if(titleTag.innerText.length < 1) titleTag.innerText = 'title by default'
        const slotTitle = document.createElement('slot')
        slotTitle.setAttribute('name', titleTag.tagName)
        titleComponent.append(titleTag.innerText)
        
        //setting subtitle
        const subtitleTag = this.querySelector('p') ? this.querySelector('p') : document.createElement('p')
        subtitleTag.className = ''
        if(subtitleTag.innerText.length < 1) subtitleTag.innerText = 'subtitle by default'
        const slotSubtitle = document.createElement('slot')
        slotSubtitle.setAttribute('name', subtitleTag.tagName)
        subtitleComponent.append(subtitleTag.innerText)
        
        //setting button
        const button = this.querySelector('button')
        button.className = ''
        button.innerText.length > 1 ? buttonWrapper.innerText = button.innerText : buttonWrapper.innerText = 'Click'
        if(button.onclick){
            buttonWrapper.addEventListener('click',()=>button.onclick())
        }
        const slotButtonConfirm = document.createElement('slot')
        slotButtonConfirm.setAttribute('name', button.tagName)
        slotButtonConfirm.append(button)
        
        slots.push(slotTitle)   
        slots.push(slotSubtitle)   
        slots.push(slotButtonConfirm)   
        slots.forEach(slot=>slot.style.display = 'none')

        this.shadow.append(...slots)
        this.shadow.appendChild(wrapperComponent)
            wrapperComponent.appendChild(iconComponent)
                iconComponent.appendChild(svgComponent)
                    svgComponent.appendChild(pathComponent)
            wrapperComponent.appendChild(contentWrapper)
                contentWrapper.appendChild(contentComponent)
                    contentComponent.appendChild(titleComponent)
                    contentComponent.appendChild(subtitleComponent)
                contentWrapper.appendChild(buttonWrapper)
            
        this[DEFAULT_EVENT].forEach( (style)=> style())
        return
}