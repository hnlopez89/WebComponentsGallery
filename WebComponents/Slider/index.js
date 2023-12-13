
import {ATTRIBUTES} from "./constants.js"
import {setKeys} from "./styles/index.js"
import {COMPONENTS} from "./variants/index.js"
import {NAME_OF_COMPONENT} from "./constants.js"
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"
const constructionSlider = function ()  {
        
      this.dataAttributes = {}
      ATTRIBUTES.forEach((ATTRIBUTE)=>{
        const proccessValue = ATTRIBUTE.proccessValue.bind(this)
        this.dataAttributes[ATTRIBUTE.attributeName] = proccessValue()
      })
      this.keysAttributes = {...this.dataAttributes}
      const stylesKeys = setKeys(this.keysAttributes)
      this.dataAttributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
      COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]].bind(this) ()
      this.style.display = 'contents'
      this.built = true
}
class vanillaSlider extends HTMLElement {
    constructor()
    {
        super();
        this.shadow = this.attachShadow({mode: 'open',delegatesFocus:true});
        this.keysAttributes = null
        this.dataAttributes = null
        this.built = false
        
    }

    
        connectedCallback() {
        if (!this.built)
        {
          this.style.display = 'none'
          const construction = constructionSlider.bind(this)
          if (document.readyState === 'loading') 
          {  // Loading hasn't finished yet
            window.addEventListener('load', construction);
          } else {  // `DOMContentLoaded` has already fired
            construction();
          }
        }
      }
      
}

if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends vanillaSlider {});
export const COMPONENT_SLIDER = NAME_OF_COMPONENT;

