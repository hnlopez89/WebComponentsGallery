import {ATTRIBUTES, 
        NAME_OF_COMPONENT, 
        STATE_ATTRIBUTE,
        LABEL_OFF_TEXT_ATTRIBUTE,
        LABEL_ON_TEXT_ATTRIBUTE,
        LABEL_ATTRIBUTE,
        LABEL_ON_OPTION,
        COLOR_ATTRIBUTE,
        WIDTH_ATTRIBUTE} from './constants.js'
import {COMPONENTS} from './variants/index.js';
import {STYLE_KEY, COMPONENT_VARIANT_KEY} from '../commonMethodsAndConstants/Styles/commonConstants.js'
import {setKeys} from './styles/index.js'

const constructionSwitch = function ()  {
  this.dataAttributes = {}
  ATTRIBUTES.forEach((ATTRIBUTE)=>{
    const proccessValue = ATTRIBUTE.proccessValue.bind(this)
    this.dataAttributes[ATTRIBUTE.attributeName] = proccessValue()
  })
  this.keysAttributes = {}
  this.keysAttributes[COLOR_ATTRIBUTE] = this.dataAttributes[COLOR_ATTRIBUTE]
  this.keysAttributes[LABEL_ATTRIBUTE] = this.dataAttributes[LABEL_ATTRIBUTE]
  this.keysAttributes[WIDTH_ATTRIBUTE] = this.dataAttributes[WIDTH_ATTRIBUTE]
  const stylesKeys = setKeys(this.keysAttributes)
  this.dataAttributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
  const toggle = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]].bind(this) ()
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
class toggleSwitch extends HTMLElement {

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
        if (document.readyState === 'loading') { window.addEventListener('load', constructionSwitch.bind(this));} 
        else {constructionSwitch.bind(this)()}
      }
    }
    
}

if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends toggleSwitch {});
export const COMPONENT_TOGGLE = NAME_OF_COMPONENT;

