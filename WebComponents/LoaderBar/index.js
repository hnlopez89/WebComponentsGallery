import { COMPONENT_VARIANT_KEY, STYLE_KEY } from "../commonMethodsAndConstants/Styles/commonConstants.js";
import { ATTRIBUTES, DEFAULT_OPTION, PROGRESS_STATE_ATTRIBUTE, SIZE_ATTRIBUTE, SMALL_OPTION, widthBar, heightSmallSize, heightLargeSize } from "./constants.js";
import { setKeys } from "./styles/index.js";
import { COMPONENTS } from "./variants/index.js";
import { CUSTOM_ELEMENT_NAME } from "./constants.js";

function constructionLoaderBar() 
{
    this.dataAttributes = {}
    ATTRIBUTES.forEach((ATTRIBUTE)=>{
        const proccessValue = ATTRIBUTE.proccessValue.bind(this)
        const value = proccessValue()
        this.dataAttributes[ATTRIBUTE.attributeName] = value
    })
    const stylesKeys = setKeys(this.keysAttributes)
    this.dataAttributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
    COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]].bind(this) ()
    this.style.display = 'contents'
}


class ComponentLoaderBar extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open',delegatesFocus:true});
        this.dataAttributes = null
        this.keysAttributes = null
        this[DEFAULT_OPTION] = []
        this.built = false      
    }
    static get observedAttributes() { return [PROGRESS_STATE_ATTRIBUTE]; }
    attributeChangedCallback(att, oldv, newv) 
    {
        const newValue = newv > 100 ? 100 : (newv < 0 ? 0 : newv)
        const oldValue = oldv > 100 ? 100 : (oldv < 0 ? 0 : oldv)
        const progressFrom = parseInt(oldValue)/100*widthBar ? parseInt(oldValue)/100*widthBar : 0
        const progressState = parseInt(newValue)/100*widthBar ? parseInt(newValue)/100*widthBar : 0
        const size = this.getAttribute(SIZE_ATTRIBUTE)? this.getAttribute(SIZE_ATTRIBUTE) : SMALL_OPTION
        const sizePx = size === SMALL_OPTION ? heightSmallSize : heightLargeSize
        const svgProgress = this.shadow.getElementById('svgProgress');
        const pathProgress = this.shadow.getElementById('pathProgress');

        if(svgProgress && pathProgress) {
            const originalSvgWidth = progressFrom ? progressFrom : svgProgress.getAttribute('width')
            svgProgress.animate([
                {'width': originalSvgWidth+"px", 'viewBox': `0 0 ${originalSvgWidth} ${sizePx}`},
                {'width': progressState+"px", 'viewBox': `0 0 ${progressState} ${sizePx}` },
            ], {
                duration: 1000,
                fill: "forwards"
            })
            pathProgress.animate([
                {'width': originalSvgWidth+"px"},
                {'width': progressState+"px", 'x':-progressState/2 }
            ], {
                duration: 1000,
                fill: "forwards"
            })
        }
    }

    connectedCallback() {
        const loader = constructionLoaderBar.bind(this)
        if (document.readyState === 'loading') {  // Loading hasn't finished yet
            window.addEventListener('load', loader);
        } else {  // `DOMContentLoaded` has already fired
            loader();
        }
    }
}

if (customElements.get(CUSTOM_ELEMENT_NAME) === undefined) customElements.define(CUSTOM_ELEMENT_NAME, class extends ComponentLoaderBar { });
export const COMPONENT_LOADERBAR = CUSTOM_ELEMENT_NAME;