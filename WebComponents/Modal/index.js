
import {ATTRIBUTES, MODE_ATTRIBUTE} from "./constants.js"
import {setKeys} from "./styles/index.js"
import {COMPONENTS} from "./variants/index.js"
import {NAME_OF_COMPONENT} from "./constants.js"
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"
const constructionModal = function ()  {
        
      this.dataAttributes = {}
      ATTRIBUTES.forEach((ATTRIBUTE)=>{
        const proccessValue = ATTRIBUTE.proccessValue.bind(this)
        this.dataAttributes[ATTRIBUTE.attributeName] = proccessValue()
      })
      this.keysAttributes = {}
      this.keysAttributes[MODE_ATTRIBUTE] = this.dataAttributes[MODE_ATTRIBUTE]
      const stylesKeys = setKeys(this.keysAttributes)
      this.dataAttributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
      COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]].bind(this) ()
      this.style.display = 'contents'
}
class vanillaModal extends HTMLElement {
    constructor()
    {
        super();
        this.shadow = this.attachShadow({mode: 'open',delegatesFocus:true});
        this.keysAttributes = null
        this.dataAttributes = null
        
    }    
    connectedCallback() {

        this.style.display = 'none'
        const construction = constructionModal.bind(this)
        if (document.readyState === 'loading') 
        {  // Loading hasn't finished yet
          window.addEventListener('load', construction);
        } else {  // `DOMContentLoaded` has already fired
          construction();
        }
      }
      
}

if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends vanillaModal {});
export const COMPONENT_MODAL = NAME_OF_COMPONENT;

