import { COMPONENT_VARIANT_KEY, STYLE_KEY } from "../commonMethodsAndConstants/Styles/commonConstants.js";
import {  CUSTOM_ELEMENT_NAME, SIZE_ATTRIBUTE } from "./constants.js";
import { ATTRIBUTES } from "./constants.js";
import { setKeys } from "./styles/index.js";
import { COMPONENTS } from "./variants/index.js";

const TEMPORARY_ATTRIBUTE = 'temporary-attribute'
const constructionVideoplayerG = function ()  {

    this.style.display = 'block'   
    this.dataAttributes = {}
    ATTRIBUTES.forEach((ATTRIBUTE)=>{
        const proccessValue = ATTRIBUTE.proccessValue.bind(this)
        this.dataAttributes[ATTRIBUTE.attributeName] = proccessValue()
      })
    const styleAttributes = {  }
    styleAttributes[SIZE_ATTRIBUTE] = this.dataAttributes[SIZE_ATTRIBUTE]

    const keys = setKeys(styleAttributes)
    this.dataAttributes[STYLE_KEY] = keys[STYLE_KEY]
    const videoplayer = COMPONENTS[keys[COMPONENT_VARIANT_KEY]].bind(this)()
    this.built = true
    this.appendChild(videoplayer)
    
}

class vanillaVideoplayer extends HTMLElement {

    constructor() {
        super();
        this.dataAttributes = null
        this.built = false

    }


    connectedCallback() {

        this.style.display = 'none'
        const constructionVideoplayer = constructionVideoplayerG.bind(this)
        if (!this.built)
        {
            if (document.readyState === 'loading') {  // Loading hasn't finished yet
                window.addEventListener('load', constructionVideoplayer);
            } else {  // `DOMContentLoaded` has already fired
                constructionVideoplayer();
            }
        }

    }

}


if (customElements.get(CUSTOM_ELEMENT_NAME) === undefined) customElements.define(CUSTOM_ELEMENT_NAME, class extends vanillaVideoplayer { });
export const COMPONENT_VIDEOPLAYER = CUSTOM_ELEMENT_NAME;