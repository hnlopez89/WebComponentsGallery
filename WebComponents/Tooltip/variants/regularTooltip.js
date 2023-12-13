import {WRAPPER_COMPONENT,
        ICON_COMPONENT,
        PATH_SUBCOMPONENT,
        CONTENT_WRAPPER,
        CONTENT_COMPONENT,
        } from '../constants.js'
import { STYLE_KEY } from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { setStyle } from "../styles/index.js"
import {DEFAULT_EVENT} from "../constants.js"
import { SVG_SUBCOMPONENT, SVG_ATTRIBUTES, SVG_TYPE, SVG_STYLES } from "../constants.js";
import {creatingElementG, createSvgElementG} from "./constants.js"


export const createRegularTooltip = function() {

        const creatingElement = creatingElementG.bind(this)
        const createSvgElement = createSvgElementG.bind(this)
        const styles = setStyle(this.dataAttributes[STYLE_KEY])
        
        //Component width dimensions and display
        const slotComponent = document.createElement('slot')  
        slotComponent.style.display = 'none'      
        const wrapperComponent = creatingElement(WRAPPER_COMPONENT, styles)
        const iconComponent = creatingElement(ICON_COMPONENT, styles)
        const svgComponent = createSvgElement(SVG_SUBCOMPONENT, styles)
        const pathComponent = createSvgElement(PATH_SUBCOMPONENT, styles)
        const contentWrapper = creatingElement(CONTENT_WRAPPER, styles)
        const contentComponent = creatingElement(CONTENT_COMPONENT, styles)   
        contentComponent.innerText = this.querySelector('p').innerText;
        
        this.shadow.appendChild(slotComponent)
        this.shadow.appendChild(wrapperComponent)
            wrapperComponent.appendChild(iconComponent)
                iconComponent.appendChild(svgComponent)
                    svgComponent.appendChild(pathComponent)
            wrapperComponent.appendChild(contentWrapper)
                contentWrapper.appendChild(contentComponent)
        this[DEFAULT_EVENT].forEach( (style)=> style())
        return 
}