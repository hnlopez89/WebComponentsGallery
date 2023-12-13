import { COMPONENT_VARIANT_KEY, STYLE_KEY } from "../commonMethodsAndConstants/Styles/commonConstants.js";
import { BOXED_OPTION, COLOR_ATTRIBUTE, CONTAINER_ATTRIBUTE, CUSTOM_ELEMENT_NAME, DARK_OPTION, SIZE_ATTRIBUTE } from "./constants.js";
import { ATTRIBUTES } from "./constants.js";
import { setKeys } from "./styles/index.js";
import { COMPONENTS } from "./variants/index.js";

const TEMPORARY_ATTRIBUTE = 'temporary-attribute'


class vanillaButtonsGroups extends HTMLElement {

    constructor() {
        super();

    }


    connectedCallback() {

        const WebComponent = this
        WebComponent.style.display = 'none'

        const constructionButtonsGroup = () => {

            WebComponent.style.display = 'block'

            
            const attributes = {}
            ATTRIBUTES.forEach((ATTRIBUTE) => {
                if (WebComponent.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(WebComponent.getAttribute(ATTRIBUTE.attributeName))
                else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
            })
            const styleAttributes = {  }
            styleAttributes[SIZE_ATTRIBUTE] = attributes[SIZE_ATTRIBUTE]
            styleAttributes[COLOR_ATTRIBUTE] = attributes[COLOR_ATTRIBUTE]

            const keys = setKeys(styleAttributes)
            attributes[STYLE_KEY] = keys[STYLE_KEY]
            
            const buttonsGroup = COMPONENTS[keys[COMPONENT_VARIANT_KEY]](attributes, WebComponent)
            
            if (WebComponent.children.length === 0) WebComponent.appendChild(buttonsGroup)
        }

        if (document.readyState === 'loading') {  // Loading hasn't finished yet
            window.addEventListener('load', constructionButtonsGroup);
        } else {  // `DOMContentLoaded` has already fired
            constructionButtonsGroup();
        }

    }

}


if (customElements.get(CUSTOM_ELEMENT_NAME) === undefined) customElements.define(CUSTOM_ELEMENT_NAME, class extends vanillaButtonsGroups { });
export const COMPONENT_BUTTONS_GROUP = CUSTOM_ELEMENT_NAME;