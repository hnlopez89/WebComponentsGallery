import {ATTRIBUTES, 
        COLOR_ATTRIBUTE, 
        NAME_OF_COMPONENT, 
        SIZE_ATTRIBUTE} from './constants.js'
import {COMPONENTS} from './variants/index.js';
import {STYLE_KEY, COMPONENT_VARIANT_KEY} from '../commonMethodsAndConstants/Styles/commonConstants.js'
import {setKeys} from './styles/index.js'
const constructionToggle =  function()  
{
  this.dataAttributes = {}
  ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
      const proccessValue = ATTRIBUTE.proccessValue.bind(this)
      this.dataAttributes[ATTRIBUTE.attributeName] = proccessValue()
    })
  this.keysAttributes = {}
  this.keysAttributes[COLOR_ATTRIBUTE] = this.dataAttributes[COLOR_ATTRIBUTE]
  this.keysAttributes[SIZE_ATTRIBUTE] = this.dataAttributes[SIZE_ATTRIBUTE]
  const stylesKeys = setKeys(this.keysAttributes)
  this.dataAttributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
  const toggle = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]].bind(this)()
  var child = this.lastElementChild; 
  while (child) 
  {
    this.removeChild(child);
    child = this.lastElementChild;
  }
  this.appendChild(toggle) 
  this.style.display = 'contents'
  this.built = true
}
class toggleButton extends HTMLElement {
    constructor()
    {
        super();
        this.keysAttributes = null
        this.dataAttributes = null
        this.built = false
    }

    connectedCallback() 
    {
      if (!this.built)
      {
        this.style.display = 'none'
        if (document.readyState === 'loading') {  // Loading hasn't finished yet
          window.addEventListener('load', constructionToggle.bind(this));
        } else {  // `DOMContentLoaded` has already fired
          constructionToggle.bind(this)();
        }
      }
    }
    
}

if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends toggleButton {});
export const COMPONENT_TOGGLE_BUTTON = NAME_OF_COMPONENT;

