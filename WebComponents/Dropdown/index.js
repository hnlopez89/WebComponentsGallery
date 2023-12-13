import {NAME_OF_COMPONENT} from './constants.js'
import {ATTRIBUTES} from './constants.js'
// nombre de atributos
import {COLOR_ATTRIBUTE, SIZE_ATTRIBUTE, STATE_ATTRIBUTE} from "./constants.js"
// nombre de options
import {setKeys} from './styles/index.js'
import {COMPONENTS} from './variants/index.js'
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"

const constructionDropdown= function ()  {
    ATTRIBUTES.forEach((ATTRIBUTE)=>{
        const proccessValue = ATTRIBUTE.proccessValue.bind(this)
        this.dataAttributes[ATTRIBUTE.attributeName] = proccessValue()
      })

    this.keysAttributes = {}
    this.keysAttributes[COLOR_ATTRIBUTE] = this.dataAttributes[COLOR_ATTRIBUTE]
    this.keysAttributes[SIZE_ATTRIBUTE] = this.dataAttributes[SIZE_ATTRIBUTE]
    const stylesKeys = setKeys(this.keysAttributes)
    this.dataAttributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
    this.dropdown = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]].bind(this) ()
    this.appendChild(this.dropdown)
    this.style.display = 'contents'
    this.built = true
}
class ComponentDropdown extends HTMLElement {
    constructor()
    {
        super();
        this.keysAttributes = {}
        this.dataAttributes = {}
        this.built = false
    }
    static get observedAttributes() { return [STATE_ATTRIBUTE]; }
    attributeChangedCallback(name, oldValue, newValue) 
    {
      if (!!oldValue && !!this.dropdown) this.dropdown.setAttribute(STATE_ATTRIBUTE, newValue)
    }
    connectedCallback() {
        if (!this.built)
        {
          this.style.display = 'none'
          const construction = constructionDropdown.bind(this)
          if (document.readyState === 'loading') 
          {  // Loading hasn't finished yet
            window.addEventListener('load', construction);
          } else {  // `DOMContentLoaded` has already fired
            construction();
          }
        }        
      }
}
if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends ComponentDropdown {});
export const COMPONENT_DROPDOWN = NAME_OF_COMPONENT;




