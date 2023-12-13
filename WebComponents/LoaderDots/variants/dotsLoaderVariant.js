import {COMPONENT_WRAPPER,ICON_SUBCOMPONENT,SVG_SUBCOMPONENT,
    PATH_SUBCOMPONENT} from "../constants.js"
import { DEFAULT_OPTION } from "../constants.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {creatingElementG, createSvgElementG} from "./constants.js"
import {setStyle} from "../styles/index.js"

// CONTAINER_SLOT_WRAPPER
// COMPONENT_WRAPPER
// I----------->ICON_SUBCOMPONENT
// I---------------->SVG_SUBCOMPONENT
// I-------------------->PATH_SUBCOMPONENT
// I----------->ICON_SUBCOMPONENT
// I---------------->SVG_SUBCOMPONENT
// I-------------------->PATH_SUBCOMPONENT
// I----------->ICON_SUBCOMPONENT
// I---------------->SVG_SUBCOMPONENT
// I-------------------->PATH_SUBCOMPONENT



export const dotsLoaderComponent = function ()
{
    const styles = setStyle(this.dataAttributes[STYLE_KEY])
    //const colors = []

    const creatingElement = creatingElementG.bind(this)
    const createSvgElement = createSvgElementG.bind(this)


    const iconComponent1 = creatingElement(ICON_SUBCOMPONENT, styles)
    const iconComponent2 = creatingElement(ICON_SUBCOMPONENT, styles)
    const iconComponent3 = creatingElement(ICON_SUBCOMPONENT, styles)
    const svgComponent = createSvgElement(SVG_SUBCOMPONENT, styles)
    const svgComponent2 = svgComponent.cloneNode(true)
    const svgComponent3 = svgComponent.cloneNode(true)
    const pathComponent1 = createSvgElement(PATH_SUBCOMPONENT, styles)
    const pathComponent2 = pathComponent1.cloneNode(true)
    const pathComponent3 = pathComponent1.cloneNode(true)


    //Creation of all Subcomponents
    const slotWrapper = document.createElement('slot')
    slotWrapper.style.display = 'none'
    const wrapper = creatingElement(COMPONENT_WRAPPER, styles)

    //Creation of all Subcomponents
    pathComponent1.animate([
        { opacity: 1},
        { opacity: 1},
        { opacity: 0.6},
        { opacity: 0.2},
        { opacity: 0.6},
        { opacity: 1},      
      ], {
        duration: 2000,
        iterations: Infinity
      });
      pathComponent2.animate([
        { opacity: 0.6},
        { opacity: 1},
        { opacity: 1},
        { opacity: 0.6},
        { opacity: 0.2},
        { opacity: 0.6},
      ], {
        duration: 2000,
        iterations: Infinity
      });
      pathComponent3.animate([
        { opacity: 0.2},
        { opacity: 0.6},
        { opacity: 1},
        { opacity: 1},
        { opacity: 0.6},
        { opacity: 0.2},

      ], {
        duration: 2000,
        iterations: Infinity
      });
    this.shadow.appendChild(slotWrapper)
    this.shadow.appendChild(wrapper)
        wrapper.appendChild(iconComponent1)
            iconComponent1.appendChild(svgComponent)
                svgComponent.appendChild(pathComponent1)
        wrapper.appendChild(iconComponent2)
            iconComponent2.appendChild(svgComponent2)
                svgComponent2.appendChild(pathComponent2)
        wrapper.appendChild(iconComponent3)
            iconComponent3.appendChild(svgComponent3)
                svgComponent3.appendChild(pathComponent3)


    this[DEFAULT_OPTION].forEach(element => element());
    return;
}