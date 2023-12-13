import {NAME_OF_COMPONENT} from './constants.js'
import {ATTRIBUTES} from './constants.js'
import {COLOR_ATTRIBUTE, CLOSE_ATTRIBUTE, ICON_SELECTION_ATTRIBUTE, ICON_ATTRIBUTE, POSITION_ICON_ATTRIBUTE} from './constants.js'
import { ON_ICON_OPTION, OFF_ICON_OPTION } from './constants.js'
import {ICON_DEFAULT} from './constants.js'
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"
import {setKeys} from "./styles/index.js"
import {COMPONENTS} from "./variants/index.js"


class ComponentTags extends HTMLElement {
    constructor()
    {
        super();
        
    }
        
    connectedCallback() {
        const WebComponent = this
        WebComponent.style.display = 'none'
        const constructionTag =  () => {
            const attributes = {}
            ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
                if (WebComponent.getAttribute(ATTRIBUTE.attributeName)) {
                    attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(WebComponent.getAttribute(ATTRIBUTE.attributeName))
                }
                else {
                    attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                }
            })
            const keysAttributes = {}
            keysAttributes[COLOR_ATTRIBUTE] = attributes[COLOR_ATTRIBUTE]
            if (attributes[ICON_SELECTION_ATTRIBUTE] === ICON_DEFAULT) {keysAttributes[ICON_ATTRIBUTE] = OFF_ICON_OPTION}
            else
            { 
                keysAttributes[ICON_ATTRIBUTE] = ON_ICON_OPTION
                keysAttributes[POSITION_ICON_ATTRIBUTE] = attributes[POSITION_ICON_ATTRIBUTE]
            }
            keysAttributes[CLOSE_ATTRIBUTE] = attributes[CLOSE_ATTRIBUTE]
            const stylesKeys = setKeys(keysAttributes) 
            attributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
            const container = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (attributes, WebComponent)
            WebComponent.appendChild(container)
            WebComponent.style.display = 'contents' 
        }
        if (document.readyState === 'loading') {  // Loading hasn't finished yet
            window.addEventListener('load', constructionTag);
          } else {  // `DOMContentLoaded` has already fired
            constructionTag();
          }
      }
}
if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends ComponentTags {});
export const COMPONENT_TAGS = NAME_OF_COMPONENT;

