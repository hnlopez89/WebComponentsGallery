import {NAME_OF_COMPONENT, OFF_OPTION, ON_OPTION} from './constants.js'
import {ATTRIBUTES,
        COLOR_ATTRIBUTE,
        SIZE_ATTRIBUTE,
        STATE_ATTRIBUTE,
        ENABLE_ATTRIBUTE} from './constants.js'
import {setKeys} from './styles/index.js'
import {COMPONENTS} from './variants/index.js'
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"

const constructionCheckbox = function ()  {
    const WebComponent = this
    const attributes = {}
    ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
        if (this.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(this.getAttribute(ATTRIBUTE.attributeName))
        else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                    })
    const keysAttributes = {}
    keysAttributes[COLOR_ATTRIBUTE] = attributes[COLOR_ATTRIBUTE]
    keysAttributes[SIZE_ATTRIBUTE] = attributes[SIZE_ATTRIBUTE]
    keysAttributes[ENABLE_ATTRIBUTE] = attributes[ENABLE_ATTRIBUTE]
     
    if (this.getElementsByTagName('input').length>0)
    {
        if (this.getElementsByTagName('input')[0].getAttribute('disabled') === 'true') 
        {
            keysAttributes[ENABLE_ATTRIBUTE] = OFF_OPTION
            attributes[ENABLE_ATTRIBUTE] = OFF_OPTION
        }
        else 
        {
            keysAttributes[ENABLE_ATTRIBUTE] = ON_OPTION
            attributes[ENABLE_ATTRIBUTE] = ON_OPTION
        }
    }
    const stylesKeys = setKeys(keysAttributes)
    attributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
    const checkboxComponent = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (attributes, WebComponent)
    this.appendChild(checkboxComponent)
    this.built = true
    this.style.display = 'contents'

}
    class componentCheckbox extends HTMLElement {
    constructor()
    {
        super();        
    }
    static get observedAttributes() { return [STATE_ATTRIBUTE]; }
    attributeChangedCallback() 
    {
        const state = this.getAttribute(STATE_ATTRIBUTE)
        if (this.children.length>0) this.children[0].setAttribute(STATE_ATTRIBUTE,state)
    }
    connectedCallback() {
        this.style.display = 'none'
        const construction = constructionCheckbox.bind(this)
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

if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends componentCheckbox {});
export const COMPONENT_CHECKBOX = NAME_OF_COMPONENT;