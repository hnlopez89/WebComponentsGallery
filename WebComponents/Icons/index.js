import { ICON_ATTRIBUTES, 
         ICON_SELECTION_ATTRIBUTE} from './constants.js';
import {ICON_WIDTH_ATTRIBUTE,ICON_HEIGHT_ATTRIBUTE,ICON_SIZE_ATTRIBUTE, ICON_COLOR_ATTRIBUTE} from "./constants.js"
import { PARTICULAR_ICON_COMPONENT_ATTRIBUTE } from './constants.js';
import {NAME_OF_COMPONENT} from './constants.js'
import components from './variants/index.js'
import icons from './allIcons.js'
const construction =  (WebComponent) =>
{
    const attributes = {}
    ICON_ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
    if (WebComponent.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(WebComponent.getAttribute(ATTRIBUTE.attributeName))
    else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
    })
    if (attributes[ICON_SIZE_ATTRIBUTE])
    {
        attributes[ICON_HEIGHT_ATTRIBUTE] = attributes[ICON_SIZE_ATTRIBUTE]
        attributes[ICON_WIDTH_ATTRIBUTE] = attributes[ICON_SIZE_ATTRIBUTE]
    }
    const iconSelected = attributes[ICON_SELECTION_ATTRIBUTE]
    attributes[ICON_SELECTION_ATTRIBUTE] = icons[iconSelected]
    const functionComponent = attributes[ICON_SELECTION_ATTRIBUTE][PARTICULAR_ICON_COMPONENT_ATTRIBUTE] 
    const svgEl = components[functionComponent](attributes)
    //svgEl.style.display = 'contents'
    const div = document.createElement('div')
    div.style.display = 'flex'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'

    div.appendChild(svgEl)
    return div.outerHTML
}
export  class SvgIcon extends HTMLElement {
    constructor() 
    {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }
    static get observedAttributes() { return [ICON_COLOR_ATTRIBUTE,ICON_SIZE_ATTRIBUTE, ICON_HEIGHT_ATTRIBUTE, ICON_WIDTH_ATTRIBUTE,ICON_SELECTION_ATTRIBUTE]; }
    attributeChangedCallback(name,oldValue,newValue) 
    {
        
        if (newValue!== null && oldValue!== newValue) {
            this.shadow.innerHTML = construction(this)}
            
    }
    connectedCallback() 
    {
        this.shadow.innerHTML = construction(this)

        
        
    }
}
if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends SvgIcon {});
export const ICON = NAME_OF_COMPONENT;

