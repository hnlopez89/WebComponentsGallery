

import {ICON_SELECTION_ATTRIBUTE_OFF,
        ICON_SELECTION_ATTRIBUTE_ON,
        CHILDREN_ATTRIBUTE,
        STATE_ATTRIBUTE,
        COLOR_ATTRIBUTE
        } from "../constants.js"
import {STATE_OFF_OPTION,
        STATE_ON_OPTION
    } from "../constants.js"
import {DEFAULT_EVENT,HOVER, CLICK_TOGGLE, CLICK_TOGGLE_HOVER} from "../constants.js"
import {BUTTON_SUBCOMPONENT, TEXT_SUBCOMPONENT, ICON_CONTAINER_SUBCOMPONENT, ICON_SUBCOMPONENT, ICON_ID} from "../constants.js"
import {setStyle, processStyle, processIconStyle} from "../styles/index.js"
import {NAME_OF_COMPONENT as ICON} from "../../Icons/constants.js"
import {ICON_SELECTION_ATTRIBUTE as ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT} from "../../Icons/constants.js"
import { STYLE_KEY } from "../../commonMethodsAndConstants/Styles/commonConstants.js"
const TEMPORARY_ATTRIBUTE = 'temporary-attribute'



class vanillaToggleButton extends HTMLElement 
{
    constructor()
    {
        super();
        this.button = null
        this.styles = null
        this.on = []
        this.onHover = []
        this.off = []
        this.offHover = [] 
        this.onIcon = null
        this.offIcon = null      
        this.disable = false
        this.shadow = this.attachShadow({mode: 'open'});
        
    }
    static get observedAttributes() { return [STATE_ATTRIBUTE]; }
    attributeChangedCallback(name,oldValue,newValue) 
    {       
        if (name === STATE_ATTRIBUTE && oldValue !== newValue)
        {
            
            const state = newValue
            if (state === STATE_OFF_OPTION) 
            {
                this.shadow.getElementById(ICON_ID).parentElement.replaceChild(this.offIcon,this.shadow.getElementById(ICON_ID))
                this.off.forEach((style)=> style()) 
                this.button.onmouseover = () => this.offHover.forEach((style)=> style())
                this.button.onmouseout = () => this.off.forEach((style)=> style()) 
                this.disable= false
            }
            else if (state === STATE_ON_OPTION) 
            {
                this.shadow.getElementById(ICON_ID).parentElement.replaceChild(this.onIcon,this.shadow.getElementById(ICON_ID))
                this.on.forEach((style)=> style()) 
                this.button.onmouseover = () => this.onHover.forEach((style)=> style())
                this.button.onmouseout = () => this.on.forEach((style)=> style()) 
                this.disable= false
            }
        }
    }
    connectedCallback() 
    {
        //Define attributes of component
        const attributes = JSON.parse(this.getAttribute(TEMPORARY_ATTRIBUTE))
        this.removeAttribute(TEMPORARY_ATTRIBUTE)
        this.styles = setStyle(attributes[STYLE_KEY])
        this.styles[ICON_SUBCOMPONENT][ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT] = attributes[ICON_SELECTION_ATTRIBUTE_OFF]
        this.styles[ICON_SUBCOMPONENT][CLICK_TOGGLE][ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT] = attributes[ICON_SELECTION_ATTRIBUTE_ON]
        //html elements
        this.button = document.createElement('div')
        const stylesProccessedButton = processStyle(this.button,this.styles[BUTTON_SUBCOMPONENT])
        this.off.push(...stylesProccessedButton[DEFAULT_EVENT])
        this.offHover.push(...stylesProccessedButton[HOVER])
        this.on.push(...stylesProccessedButton[CLICK_TOGGLE])
        this.onHover.push(...stylesProccessedButton[CLICK_TOGGLE_HOVER])
    
        const slotContainer = document.createElement('div')
        slotContainer.style.display = 'none'
        const slotSubComponent = document.createElement('slot')

        const iconParent = document.createElement('div')
        const stylesProccessedIcon = processStyle (iconParent, this.styles[ICON_CONTAINER_SUBCOMPONENT])
        this.off.push(...stylesProccessedIcon[DEFAULT_EVENT])
        this.offHover.push(...stylesProccessedIcon[HOVER])
        this.on.push(...stylesProccessedIcon[CLICK_TOGGLE])
        this.onHover.push(...stylesProccessedIcon[CLICK_TOGGLE_HOVER])

        this.offIcon = document.createElement(ICON)
        const stylesProccessedIconChildOff = processIconStyle(this.offIcon,this.styles[ICON_SUBCOMPONENT] )
        stylesProccessedIconChildOff[DEFAULT_EVENT].forEach(style=>style())
    
        this.onIcon = document.createElement(ICON)
        const stylesProccessedIconChildOn = processIconStyle(this.onIcon,this.styles[ICON_SUBCOMPONENT] )
        stylesProccessedIconChildOn[CLICK_TOGGLE].forEach(style=>style())

        const textNode = document.createTextNode(attributes[CHILDREN_ATTRIBUTE])
        const textButton = document.createElement('div')
        const stylesProccessedText = processStyle(textButton,this.styles[TEXT_SUBCOMPONENT])
        this.off.push(...stylesProccessedText[DEFAULT_EVENT])
        this.offHover.push(...stylesProccessedText[HOVER])
        this.on.push(...stylesProccessedText[CLICK_TOGGLE])
        this.onHover.push(...stylesProccessedText[CLICK_TOGGLE_HOVER])
                
        //Add behavior
        const clickToggle = (event) => {
            event.preventDefault()
            if (!this.disable)
            {
                
                this.disable = true
                const state = this.getAttribute(STATE_ATTRIBUTE)
                if(this.querySelector('button')) this.querySelector('button').click() 
                if (state === STATE_ON_OPTION)
                {
                    this.setAttribute(STATE_ATTRIBUTE,STATE_OFF_OPTION)

                    return;
                }
                else if (state !== STATE_ON_OPTION)
                {
                    this.setAttribute(STATE_ATTRIBUTE,STATE_ON_OPTION)
                    return;
                }
            }                        
        }

        this.button.onclick = clickToggle

       
        //Appending childs respectively
        var child = this.shadow.lastElementChild; 
        while (child) 
        {
            this.removeChild(child);
            child = this.lastElementChild;
        }
        this.shadow.appendChild(this.button)
            this.button.appendChild(slotContainer)
                slotContainer.appendChild(slotSubComponent)
            this.button.appendChild(iconParent)    
                iconParent.appendChild(this.offIcon)
            this.button.appendChild(textButton)
                textButton.appendChild(textNode)

        //Appending initial state in web component
        this.style.display = 'contents'
        //Establish default styling
        this.off.forEach((style) =>  style())
        this.button.onmouseover = () => this.offHover.forEach((style)=> style())
        this.button.onmouseout = () => this.off.forEach((style)=> style()) 
        this.setAttribute(STATE_ATTRIBUTE,attributes[STATE_ATTRIBUTE])

    }
}
const regularToggleButtonCustomComponent = 'component-regular-button-toggle'
if (customElements.get(regularToggleButtonCustomComponent) === undefined) customElements.define(regularToggleButtonCustomComponent, class extends vanillaToggleButton {});

export const createButtonToggle = function ()
{
    const regularToggleButton = document.createElement(regularToggleButtonCustomComponent)
    regularToggleButton.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(this.dataAttributes))
    if (this.querySelector('button')) regularToggleButton.appendChild(this.querySelector('button'))  
    return regularToggleButton;
}








