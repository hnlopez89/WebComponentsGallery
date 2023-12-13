import {DEFAULT_EVENT, NAME_OF_COMPONENT} from './constants.js'
import {ATTRIBUTES} from './constants.js'
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"
import {setKeys} from "./styles/index.js"
import {COMPONENTS} from "./variants/index.js"

const constructionNotification = function ()  {
        
    this.dataAttributes = {}
    //INCLUDING DATA TO FIND ATTRIBUTE IN THE TREE
    ATTRIBUTES.forEach((ATTRIBUTE)=>{
        const proccessValue = ATTRIBUTE.proccessValue.bind(this)
        const value = proccessValue()
        if (value) {
            this.dataAttributes[ATTRIBUTE.attributeName] = value
        }
    })
    const stylesKeys = setKeys(this.keysAttributes)
    this.dataAttributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
    COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]].bind(this) ()
    this.built = true
    this.style.display = 'contents'
}

class ComponentNotification extends HTMLElement {
    constructor()
    {
        super();
        this.shadow = this.attachShadow({mode: 'open',delegatesFocus:true});
        this.keysAttributes = null
        this.dataAttributes = null
        this[DEFAULT_EVENT] = []
        this.built = false
    }
    connectedCallback() {
        this.style.display = 'none'
        const construction = constructionNotification.bind(this)
        if (!this.built)
        {
          if (document.readyState === 'loading') 
          {  // Loading hasn't finished yet
            window.addEventListener('load', construction);
          } else {  // `DOMContentLoaded` has already fired
            construction();
          }
        }
      }
}
if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends ComponentNotification {});
export const COMPONENT_NOTIFICATION = NAME_OF_COMPONENT;
