import { COMPONENT_VARIANT_KEY, STYLE_KEY } from "../commonMethodsAndConstants/Styles/commonConstants.js";
import { ATTRIBUTES, DEFAULT_OPTION } from "./constants.js";
import { setKeys } from "./styles/index.js";
import { COMPONENTS } from "./variants/index.js";
import { CUSTOM_ELEMENT_NAME } from "./constants.js";

function constructionLoaderLogo() 
{
    this.dataAttributes = {}
    ATTRIBUTES.forEach((ATTRIBUTE)=>{
        const proccessValue = ATTRIBUTE.proccessValue.bind(this)
        const value = proccessValue()
        if (value) this.dataAttributes[ATTRIBUTE.attributeName] = value
    })
    const stylesKeys = setKeys(this.dataAttributes)
    this.dataAttributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
    COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]].bind(this) ()
    this.style.display = 'contents'
}


class ComponentLoaderLogo extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open',delegatesFocus:true});
        this.dataAttributes = null
        this[DEFAULT_OPTION] = []
        this.built = false      
    }
    connectedCallback() {
        const loader = constructionLoaderLogo.bind(this)
        if (document.readyState === 'loading') {  // Loading hasn't finished yet
            window.addEventListener('load', loader);
        } else {  // `DOMContentLoaded` has already fired
            loader();
        }
    }
}

if (customElements.get(CUSTOM_ELEMENT_NAME) === undefined) customElements.define(CUSTOM_ELEMENT_NAME, class extends ComponentLoaderLogo { });
export const COMPONENT_LOADER_LOGO = CUSTOM_ELEMENT_NAME;