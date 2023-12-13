import { CUSTOM_ELEMENT_NAME, DEFAULT_EVENT } from "./constants.js";
import { ATTRIBUTES } from "./constants.js";
import { COMPONENT_VARIANT_KEY, STYLE_KEY } from "../commonMethodsAndConstants/Styles/commonConstants.js";
import { setKeys } from "./styles/index.js";
import { COMPONENTS } from "./variants/index.js";

const constructionTooltip = function(){
    this.dataAttributes = {}
        ATTRIBUTES.forEach((ATTRIBUTE)=>{
            const proccessValue = ATTRIBUTE.proccessValue.bind(this)
            const value = proccessValue()
            if(value) this.dataAttributes[ATTRIBUTE.attributeName]= value
        })
        this.styleAttributes = { ...this.dataAttributes}
        const keys = setKeys(this.styleAttributes)
        this.dataAttributes[STYLE_KEY] = keys[STYLE_KEY]
        COMPONENTS[keys[COMPONENT_VARIANT_KEY]].bind(this)()
        this.style.display = 'contents' 
} 
class VanillaTooltip extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open',delegatesFocus:true});
        this.dataAttributes = null
        this.styleAttributes = null
        this[DEFAULT_EVENT] = []
    }
    connectedCallback() {
            this.style.display = 'none'
            const tooltip = constructionTooltip.bind(this)
            if (document.readyState === 'loading') {  // Loading hasn't finished yet
                window.addEventListener('load', tooltip);
            } else {  // `DOMContentLoaded` has already fired
                tooltip();
            }
    }
}

if (customElements.get(CUSTOM_ELEMENT_NAME) === undefined) customElements.define(CUSTOM_ELEMENT_NAME, class extends VanillaTooltip { });
export const COMPONENT_TOOLTIP = CUSTOM_ELEMENT_NAME;