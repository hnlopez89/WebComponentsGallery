import {NAME_OF_COMPONENT} from './constants.js'
import {ATTRIBUTES} from './constants.js'
import {STATE_ATTRIBUTE, BADGE_STATE_ATTRIBUTE} from './constants.js'
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"
import {setKeys} from "./styles/index.js"
import {COMPONENTS} from "./variants/index.js"
import { SUCCESS_OPTION,WARNING_OPTION,ERROR_OPTION, DEFAULT_OPTION } from "./constants.js"

const constructionProfile = function ()  {
        
    this.dataAttributes = {}
    //INCLUDING DATA TO PRINT IN THE WEBCOMPONENT
    ATTRIBUTES.forEach((ATTRIBUTE)=>{
        const proccessValue = ATTRIBUTE.proccessValue.bind(this)
        const value = proccessValue()
        this.dataAttributes[ATTRIBUTE.attributeName] = value
      })
    const stylesKeys = setKeys(this.keysAttributes)
    this.dataAttributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
    COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]].bind(this) ()
    this.style.display = 'contents'

    //DELETING PICTURE IF EXISTS
    const urlPicture = this.getElementsByTagName('img')[0];
    this.built = true
}

class ComponentProfile extends HTMLElement {
    constructor()
    {
        super();
        this.shadow = this.attachShadow({mode: 'open',delegatesFocus:true});
        this.keysAttributes = null
        this.dataAttributes = null
        this[SUCCESS_OPTION] = []
        this[WARNING_OPTION] = []
        this[ERROR_OPTION] = []
        this[DEFAULT_OPTION] = []
        this.built = false      
    }
    static get observedAttributes() { return [BADGE_STATE_ATTRIBUTE ]; }
    attributeChangedCallback() 
    {
        const state = this.getAttribute(BADGE_STATE_ATTRIBUTE)
        
        if (state === SUCCESS_OPTION)
        {
            this[SUCCESS_OPTION].forEach( (style)=>  style())
        }
        else if (state === WARNING_OPTION)
        {
            this[WARNING_OPTION].forEach( (style)=>  style())
        }
        else if (state === ERROR_OPTION)
        {
            this[ERROR_OPTION].forEach( (style)=>  style())
        } 
        else if (state === DEFAULT_OPTION)
        {
            this[DEFAULT_OPTION].forEach( (style)=>  style())
        }
    }
    connectedCallback() 
    {
        if (!this.built)
        {
            this.style.display = 'none'
            const construction = constructionProfile.bind(this)

            if (document.readyState === 'loading') 
            {  // Loading hasn't finished yet
            window.addEventListener('load', construction);
            } else {  // `DOMContentLoaded` has already fired
            construction();
            }
        }
    }
}
if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends ComponentProfile {});
export const COMPONENT_PROFILE = NAME_OF_COMPONENT;


