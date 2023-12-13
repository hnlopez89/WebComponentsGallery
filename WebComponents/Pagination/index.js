import {NAME_OF_COMPONENT} from './constants.js'
import {ATTRIBUTES, 
        COLOR_ATTRIBUTE,
        MODE_ATTRIBUTE} from './constants.js'
import {setKeys} from './styles/index.js'
import {COMPONENTS} from './variants/index.js'
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"
class componentPagination extends HTMLElement {
    constructor()
    {
        super();        
    }
    connectedCallback() 
    {
        const WebComponent = this
        WebComponent.style.display='none'
        const constructionPagination = () => {
            WebComponent.style.display = 'initial'
            const attributes = {}
            ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
                if (WebComponent.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(WebComponent.getAttribute(ATTRIBUTE.attributeName))
                else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                            })           
           const keysAttributes = {}
           keysAttributes[COLOR_ATTRIBUTE] = attributes[COLOR_ATTRIBUTE]
           keysAttributes[MODE_ATTRIBUTE] = attributes[MODE_ATTRIBUTE] 
           const stylesKeys = setKeys(keysAttributes)
           attributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
           const pagination_component = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (attributes, WebComponent)
           if (WebComponent.children.length === 0) WebComponent.appendChild(pagination_component)
        }

        if (document.readyState === 'loading')  window.addEventListener('load', constructionPagination) 
        else constructionPagination();
   
    }
}

if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends componentPagination {});
export const COMPONENT_PAGINATION = NAME_OF_COMPONENT;