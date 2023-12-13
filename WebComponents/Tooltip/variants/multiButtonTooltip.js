import {WRAPPER_COMPONENT,
        ICON_COMPONENT,
        PATH_SUBCOMPONENT,
        CONTENT_WRAPPER,
        CONTENT_COMPONENT,
        TITLE_COMPONENT,
        SUBTITLE_COMPONENT,
        CONTAINER_BUTTON_WRAPPER,
        BUTTON_CONFIRMATION,
        BUTTON_CANCELATION} from '../constants.js'
import { setStyle, processStyle } from "../styles/index.js"
import {DEFAULT_EVENT} from "../constants.js"
import { STYLE_KEY } from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { SVG_SUBCOMPONENT} from "../constants.js";
import {creatingElementG, createSvgElementG} from "./constants.js"

export const createMultiButtonTooltip = function() {
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
        const buttonAccept = creatingElement(BUTTON_CONFIRMATION, style)
        const buttonCancel = creatingElement(BUTTON_CANCELATION, style)
        
        this.shadow.appendChild(wrapperComponent)
            wrapperComponent.appendChild(iconComponent)
                iconComponent.appendChild(svgComponent)
                    svgComponent.appendChild(pathComponent)
            wrapperComponent.appendChild(contentWrapper)
                contentWrapper.appendChild(contentComponent)
                contentWrapper.appendChild(buttonWrapper)
        
        
        const slots = []

        //setting title
        const titleTag = this.querySelector('h1') ? this.querySelector('h1') : document.createElement('h1')
        if(titleTag.innerText.length < 1) titleTag.innerText = 'Title by default'
        const slotTitle = document.createElement('slot')
        slotTitle.setAttribute('name', titleTag.tagName)
        titleComponent.append(titleTag.innerText)


        //setting subtitle
        const subtitleTag = this.querySelector('p') ? this.querySelector('p') : document.createElement('p')
        if(subtitleTag.innerText.length < 1) subtitleTag.innerText = 'subtitle by default'
        const slotSubtitle = document.createElement('slot')
        slotSubtitle.setAttribute('name', subtitleTag.tagName)
        subtitleComponent.append(subtitleTag.innerText)

        const buttons = this.querySelectorAll('button')
        //setting button confirm
        const buttonConfirmStyleProcessed = processStyle(buttons[0], style[BUTTON_CONFIRMATION])
        this[DEFAULT_EVENT].push(...buttonConfirmStyleProcessed[DEFAULT_EVENT])
        buttons[0].innerText.length > 1 ? buttonAccept.innerText = buttons[0].innerText : buttonAccept.innerText = 'Click'
        buttons[0].className = ''
        if(buttons[0].onclick){
            buttonAccept.addEventListener('click',()=>buttons[0].onclick())
        }
        const slotButtonConfirm = document.createElement('slot')
        slotButtonConfirm.setAttribute('name', BUTTON_CONFIRMATION)


        //setting button cancel
        const buttonCancelStyleProcessed = processStyle(buttons[1], style[BUTTON_CANCELATION])
        this[DEFAULT_EVENT].push(...buttonCancelStyleProcessed[DEFAULT_EVENT])
        buttons[1].innerText.length > 1 ? buttonCancel.innerText = buttons[1].innerText : buttonCancel.innerText = 'Click'
        buttons[1].className = ''
        if(buttons[1].onclick){
            buttonCancel.addEventListener('click',()=>buttons[1].onclick())
        }
        const slotButtonCancel = document.createElement('slot')
        slotButtonCancel.setAttribute('name', BUTTON_CANCELATION)

        slots.push(slotTitle)   
        slots.push(slotSubtitle)   
        slots.push(slotButtonConfirm)   
        slots.push(slotButtonCancel)
        slots.forEach(slot=>slot.style.display = 'none')
        
        contentComponent.appendChild(titleComponent)
        contentComponent.appendChild(subtitleComponent)
        buttonWrapper.appendChild(buttonAccept)
        buttonWrapper.appendChild(buttonCancel)
        wrapperComponent.append(...slots)
            
        this[DEFAULT_EVENT].forEach( (style)=> style())
        return
}