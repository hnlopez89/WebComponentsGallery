import {ICON_ATTRIBUTE,
        ICON_SELECTION_ATTRIBUTE,
        CHILDREN_ATTRIBUTE,
        SIZE_ATTRIBUTE,
        STATE_ATTRIBUTE,
        INACTIVE_OPTION
        } from "./constants.js"
import {ON_OPTION,
        OFF_OPTION,
        ICON_DEFAULT } from "./constants.js"
import {ATTRIBUTES} from "./constants.js"
import {setKeys} from "./styles/index.js"
import {COMPONENTS} from "./variants/index.js"
import {NAME_OF_COMPONENT} from "./constants.js"
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"

class vanillaButton extends HTMLElement {
    constructor()
    {
        super();
        this.shadow = this.attachShadow({mode: 'open',delegatesFocus:true});
        this.buttonOrAnchor = []
        this.keysAttributes = null
        this.dataAttributes = null
        
    }
    static get observedAttributes() { return [STATE_ATTRIBUTE]; }

    attributeChangedCallback() 
    {       
        const state = this.getAttribute(STATE_ATTRIBUTE)
        if (this.dataAttributes!== null)
        {
          if (state !== this.dataAttributes[STATE_ATTRIBUTE]  )
          {
            this.dataAttributes[STATE_ATTRIBUTE] = state
            this.keysAttributes[STATE_ATTRIBUTE] = state
            const stylesKeys = setKeys(this.keysAttributes)
        
            this.dataAttributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
            const button = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (this.dataAttributes)
            if (this.dataAttributes[STATE_ATTRIBUTE]!== INACTIVE_OPTION) button.onclick = () => {this.buttonOrAnchor[0].click()}

            this.shadow.removeChild(this.shadow.children[1])
            this.shadow.appendChild(button)
          }
        }
    }
        connectedCallback() {
        const WebComponent = this

        WebComponent.style.display = 'none'
        const constructionButton =  () => {
        
          //CREATION OF A DEFAULT BUTTON IF NOTHING IS APPENDED 
          const buttonDefault = document.createElement('button')
          const textNode = document.createTextNode('Call to action')
          buttonDefault.appendChild(textNode)
          buttonDefault.onclick = () => {alert('Call to action')}
          WebComponent.buttonOrAnchor.push(buttonDefault)
          if (WebComponent.getElementsByTagName('button').length>0) 
          {
              WebComponent.buttonOrAnchor.pop()
              WebComponent.buttonOrAnchor.push(WebComponent.getElementsByTagName('button')[0])
          }
          else if (WebComponent.getElementsByTagName('a').length>0) 
          {
              WebComponent.buttonOrAnchor.pop()
              WebComponent.buttonOrAnchor.push(WebComponent.getElementsByTagName('a')[0])
          }
          const slotContainer = document.createElement('div')
          slotContainer.style.display = 'none'
          const slotSubComponent = document.createElement('slot')
          
          WebComponent.dataAttributes = {}
          ATTRIBUTES.forEach((ATTRIBUTE)=>{
            const proccessValue = ATTRIBUTE.proccessValue.bind(WebComponent)
            this.dataAttributes[ATTRIBUTE.attributeName] = proccessValue()
          })
          WebComponent.keysAttributes = {...WebComponent.dataAttributes}
          delete WebComponent.keysAttributes[CHILDREN_ATTRIBUTE];
          delete WebComponent.keysAttributes[ICON_SELECTION_ATTRIBUTE];

          const stylesKeys = setKeys(WebComponent.keysAttributes)
          WebComponent.dataAttributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
          WebComponent.dataAttributes[CHILDREN_ATTRIBUTE] = WebComponent.buttonOrAnchor[0].textContent
          const button = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (WebComponent.dataAttributes)
          if (WebComponent.dataAttributes[STATE_ATTRIBUTE]!== INACTIVE_OPTION) button.onclick = () => 
          {
            setTimeout(()=>WebComponent.buttonOrAnchor[0].click(),200)
          }
          if (WebComponent.shadow.children.length === 0) {
            WebComponent.shadow.appendChild(slotContainer)
                slotContainer.appendChild(slotSubComponent)
                            //slotSubComponent.appendChild(WebComponent.buttonOrAnchor[0])
            WebComponent.shadow.appendChild(button) 
          }
          WebComponent.style.display = 'contents'
        }
        if (document.readyState === 'loading') {  // Loading hasn't finished yet
          window.addEventListener('load', constructionButton);
        } else {  // `DOMContentLoaded` has already fired
          constructionButton();
        }
      }
      
}

if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends vanillaButton {});
export const COMPONENT_BUTTON = NAME_OF_COMPONENT;

