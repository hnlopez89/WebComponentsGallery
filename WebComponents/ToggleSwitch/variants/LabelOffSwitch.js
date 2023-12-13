import {setStyle, processStyle} from "../styles/index.js"
import { STYLE_KEY } from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {DEFAULT_EVENT, CLICK_TOGGLE} from "../constants.js"
import {STATE_ATTRIBUTE, ANIMATION_DURATION_ATTRIBUTE} from "../constants.js"
import {STATE_ON_OPTION, STATE_OFF_OPTION} from "../constants.js"
import {SLOT_CONTAINER,
        SLOT_SELECTOR,
        SVG_WRAPPER,
        SVG_SUBCOMPONENT,
        CIRCLE_ON_SUBCOMPONENT,
        CIRCLE_OFF_SUBCOMPONENT,
        LINE_OFF_SUBCOMPONENT,
        LINE_ON_SUBCOMPONENT,
        ANIMATE_LINE_OFF_1_SUBCOMPONENT,
        ANIMATE_LINE_OFF_2_SUBCOMPONENT,
        ANIMATE_LINE_ON_SUBCOMPONENT,
        ANIMATE_CIRCLE_OFF,
        ANIMATE_CIRCLE_ON} from "../constants.js"
import {CIRCLE_ID,
        RECT_ID} from "../constants.js"
import { clickToggle, creationSVGElementsG, createComponentG, handleResize } from "./constants.js"
const TEMPORARY_ATTRIBUTE = 'temporary-attribute'


class vanillaToggleSwitch extends HTMLElement 
{
    constructor()
    {
        super();
        this.styles = null
        this.dur = null
        this.on = []
        this.off = []
        this.svg = null
        this.rectOn = null
        this.rectOff = null
        this.circleOff = null
        this.circleOn = null
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
                this.svg.replaceChild(this.rectOff.cloneNode(true),this.shadow.getElementById(RECT_ID))
                this.shadow.getElementById(CIRCLE_ID).dispatchEvent(new Event('click'));
                this.shadow.getElementById(RECT_ID).dispatchEvent(new Event('click'));
                this.off.forEach( (style)=>  style())
                setTimeout(()=>{
                    this.svg.replaceChild(this.circleOff.cloneNode(true),this.shadow.getElementById(CIRCLE_ID))
                    if(this.querySelector('select')) this.querySelector('select').setAttribute("value", this.querySelectorAll('select>option')[0].value)
                    while(this.shadow.getElementById(RECT_ID).firstChild)
                    {
                        this.shadow.getElementById(RECT_ID).removeChild(this.shadow.getElementById(RECT_ID).firstChild);
                    }
                    this.disable = false
                },this.dur * 1000)
            }
            else if (state === STATE_ON_OPTION) 
            {
                this.svg.replaceChild(this.rectOn.cloneNode(true),this.shadow.getElementById(RECT_ID))
                this.shadow.getElementById(CIRCLE_ID).dispatchEvent(new Event('click'));
                this.shadow.getElementById(RECT_ID).dispatchEvent(new Event('click'));
                this.on.forEach( (style)=>  style())
                setTimeout(()=>{
                    this.svg.replaceChild(this.circleOn.cloneNode(true),this.shadow.getElementById(CIRCLE_ID))
                    if(this.querySelector('select')) this.querySelector('select').setAttribute("value",this.querySelectorAll('select>option')[1].value)
                    while(this.shadow.getElementById(RECT_ID).firstChild)
                    {
                        this.shadow.getElementById(RECT_ID).removeChild(this.shadow.getElementById(RECT_ID).firstChild);
                    }
                    this.disable = false
                },this.dur * 1000)
            }
        }
    }
    connectedCallback() 
    {
        //Define attributes of component
        const creationSVGElements = creationSVGElementsG.bind(this)
        const createComponent = createComponentG.bind(this)
        const attributes = JSON.parse(this.getAttribute(TEMPORARY_ATTRIBUTE))
        this.removeAttribute(TEMPORARY_ATTRIBUTE)
        this.styles = setStyle(attributes[STYLE_KEY])
        this.dur = attributes[ANIMATION_DURATION_ATTRIBUTE] ? parseFloat(attributes[ANIMATION_DURATION_ATTRIBUTE]) : 0.1

        const slotContainer = createComponent(SLOT_CONTAINER)
        const slot_selector = document.createElement('slot')
        const svgWrapper = createComponent(SVG_WRAPPER) 
        
        //svg elements
        this.svg = creationSVGElements("svg",SVG_SUBCOMPONENT)
        this.rectOn = creationSVGElements("rect",LINE_ON_SUBCOMPONENT)  
        this.rectOff = creationSVGElements("rect",LINE_OFF_SUBCOMPONENT)  
        this.circleOn = creationSVGElements("circle",CIRCLE_ON_SUBCOMPONENT)
        this.circleOff = creationSVGElements("circle",CIRCLE_OFF_SUBCOMPONENT)
        //Animated elements
        const animationRectOn = creationSVGElements("animate",ANIMATE_LINE_ON_SUBCOMPONENT)
        animationRectOn.setAttributeNS(null, 'dur', `${this.dur}`);
        const animationRectOff1 = creationSVGElements("animate",ANIMATE_LINE_OFF_1_SUBCOMPONENT)
        animationRectOff1.setAttributeNS(null, 'dur', `${this.dur}`);
        const animationRectOff2 = creationSVGElements("animate",ANIMATE_LINE_OFF_2_SUBCOMPONENT)
        animationRectOff2.setAttributeNS(null, 'dur', `${this.dur}`);
        const animationCircleOff = creationSVGElements("animate",ANIMATE_CIRCLE_OFF)
        animationCircleOff.setAttributeNS(null, 'dur', `${this.dur}`);
        const animationCircleOn = creationSVGElements("animate",ANIMATE_CIRCLE_ON)
        animationCircleOn.setAttributeNS(null, 'dur', `${this.dur}`);
        
        svgWrapper.addEventListener('click',clickToggle.bind(this))
        svgWrapper.addEventListener('drag',clickToggle.bind(this))
        window.addEventListener("resize",handleResize.bind(this));
       
        //Appending childs respectively
        var child = this.shadow.lastElementChild; 
        while (child) 
        {
            this.removeChild(child);
            child = this.lastElementChild;
        }
        //Building nodes that will switch in respective state
        this.circleOn.appendChild(animationCircleOff)
        this.circleOff.appendChild(animationCircleOn)
        this.rectOn.appendChild(animationRectOn)
        this.rectOff.appendChild(animationRectOff1)
        this.rectOff.appendChild(animationRectOff2)

        //Appending initial state in web component
        this.shadow.appendChild(slotContainer)
            slotContainer.appendChild(slot_selector)
        this.shadow.appendChild(svgWrapper)
            svgWrapper.appendChild(this.svg)
                this.svg.appendChild(this.rectOff)
                this.svg.appendChild(this.circleOff)

        
        this.style.display = 'contents'
        //Establish default styling
        this.off.forEach((style) =>  style())
        if(attributes[STATE_ATTRIBUTE] === STATE_ON_OPTION) svgWrapper.click()
    }
}
const regularToggleSwitchOffCustomComponent = 'component-regular-switch-label-off'
if (customElements.get(regularToggleSwitchOffCustomComponent) === undefined) customElements.define(regularToggleSwitchOffCustomComponent, class extends vanillaToggleSwitch {});

export const createLabelOffSwitch = function ()
{
    const regularToggleSwitch = document.createElement(regularToggleSwitchOffCustomComponent)
    regularToggleSwitch.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(this.dataAttributes))
    if (this.querySelector('select')) regularToggleSwitch.appendChild(this.querySelector('select'))


  
    return regularToggleSwitch;
}








