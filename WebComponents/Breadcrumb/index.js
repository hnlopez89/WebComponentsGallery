import {NAME_OF_COMPONENT} from './constants.js'
import {ATTRIBUTES} from './constants.js'
import {STATE_ATTRIBUTE} from './constants.js'
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"
import {setKeys} from "./styles/index.js"
import {COMPONENTS} from "./variants/index.js"
import { DEFAULT_OPTION,ACTIVE_OPTION,HOVER_OPTION } from "./constants.js"

const constructionBreadcrumb = function ()  {
        
    this.dataAttributes = {}
    //INCLUDING DATA TO PRINT IN THE WEBCOMPONENT
    ATTRIBUTES.forEach((ATTRIBUTE)=>{
        const proccessValue = ATTRIBUTE.proccessValue.bind(this)
        const value = proccessValue()
        this.dataAttributes[ATTRIBUTE.attributeName] = value
      })
    const stylesKeys = setKeys(this.dataAttributes)
    this.dataAttributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
    COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]].bind(this) ()
    this.style.display = 'contents'
}

class ComponentBreadcrumb extends HTMLElement {
    constructor()
    {
        super();
        this.shadow = this.attachShadow({mode: 'open',delegatesFocus:true});
        this.dataAttributes = null
        this[DEFAULT_OPTION] = []
        this[ACTIVE_OPTION] = []
        this[HOVER_OPTION] = []
        this.built = false      
    }
    static get observedAttributes() { return [STATE_ATTRIBUTE ]; }
    attributeChangedCallback() 
    {
        const state = this.getAttribute(STATE_ATTRIBUTE)
        
        if (state === DEFAULT_OPTION)
        {
            this[DEFAULT_OPTION].forEach( (style)=>  style())
        }
        else if (state === ACTIVE_OPTION)
        {
            this[ACTIVE_OPTION].forEach( (style)=>  style())
        }
        else if (state === HOVER_OPTION)
        {
            this[HOVER_OPTION].forEach( (style)=>  style())
        } 
    }
    connectedCallback() 
    {
        if (!this.built)
        {
            this.style.display = 'none'
            const construction = constructionBreadcrumb.bind(this)

            if (document.readyState === 'loading') 
            {  // Loading hasn't finished yet
            window.addEventListener('load', construction);
            } else {  // `DOMContentLoaded` has already fired
            construction();
            }
        }
    }
}
if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends ComponentBreadcrumb {});
export const COMPONENT_BREADCRUMB = NAME_OF_COMPONENT;


