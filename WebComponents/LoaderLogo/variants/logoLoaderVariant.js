import {COMPONENT_WRAPPER, ICON_SUBCOMPONENT,SVG_SUBCOMPONENT,
    PATH_SUBCOMPONENT_01,
    PATH_SUBCOMPONENT_02,
    PATH_SUBCOMPONENT_03,
    PATH_SUBCOMPONENT_04,
    PATH_SUBCOMPONENT_05,
    PATH_SUBCOMPONENT_06,
    PATH_SUBCOMPONENT_07,
    PATH_SUBCOMPONENT_08,
    PATH_SUBCOMPONENT_09,
    PATH_SUBCOMPONENT_10,
    PATH_SUBCOMPONENT_11,
    PATH_SUBCOMPONENT_12,
    PATH_SUBCOMPONENT_13,
    PATH_SUBCOMPONENT_14,
    PATH_SUBCOMPONENT_15,
    PATH_SUBCOMPONENT_16,
    PATH_SUBCOMPONENT_17,
    PATH_SUBCOMPONENT_18,
    PATH_SUBCOMPONENT_19,
    PATH_SUBCOMPONENT_20,
    PATH_SUBCOMPONENT_21,
    PATH_SUBCOMPONENT_22,
    PATH_SUBCOMPONENT_23,
 } from "../constants.js"
import {setStyle} from "../styles/index.js"
import { DEFAULT_OPTION } from "../constants.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {creatingElementG, createSvgElementG} from "./constants.js"
// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// CONTAINER_WRAPPER
// I----------->ICON_SUBCOMPONENT
// I--------------->SVG_SUBCOMPONENT
// I------------------->PATH_SUBCOMPONENT

export const logoLoaderComponent = function ()
{
    const styles = setStyle(this.dataAttributes[STYLE_KEY])

    const creatingElement = creatingElementG.bind(this)
    const createSvgElement = createSvgElementG.bind(this)
    //Creation of all Subcomponents
    const slotWrapper = document.createElement('slot')
    slotWrapper.style.display = 'none'
    const wrapper = creatingElement(COMPONENT_WRAPPER, styles)
    //Creation of all Subcomponents
    const iconComponent = creatingElement(ICON_SUBCOMPONENT, styles)
    const svgComponent = createSvgElement(SVG_SUBCOMPONENT, styles)
    const pathComponent_01 = createSvgElement(PATH_SUBCOMPONENT_01, styles)
    const pathComponent_02 = createSvgElement(PATH_SUBCOMPONENT_02, styles)
    const pathComponent_03 = createSvgElement(PATH_SUBCOMPONENT_03, styles)
    const pathComponent_04 = createSvgElement(PATH_SUBCOMPONENT_04, styles)
    const pathComponent_05 = createSvgElement(PATH_SUBCOMPONENT_05, styles)
    const pathComponent_06 = createSvgElement(PATH_SUBCOMPONENT_06, styles)
    const pathComponent_07 = createSvgElement(PATH_SUBCOMPONENT_07, styles)
    const pathComponent_08 = createSvgElement(PATH_SUBCOMPONENT_08, styles)
    const pathComponent_09 = createSvgElement(PATH_SUBCOMPONENT_09, styles)
    const pathComponent_10 = createSvgElement(PATH_SUBCOMPONENT_10, styles)
    const pathComponent_11 = createSvgElement(PATH_SUBCOMPONENT_11, styles)
    const pathComponent_12 = createSvgElement(PATH_SUBCOMPONENT_12, styles)
    const pathComponent_13 = createSvgElement(PATH_SUBCOMPONENT_13, styles)
    const pathComponent_14 = createSvgElement(PATH_SUBCOMPONENT_14, styles)
    const pathComponent_15 = createSvgElement(PATH_SUBCOMPONENT_15, styles)
    const pathComponent_16 = createSvgElement(PATH_SUBCOMPONENT_16, styles)
    const pathComponent_17 = createSvgElement(PATH_SUBCOMPONENT_17, styles)
    const pathComponent_18 = createSvgElement(PATH_SUBCOMPONENT_18, styles)
    const pathComponent_19 = createSvgElement(PATH_SUBCOMPONENT_19, styles)
    const pathComponent_20 = createSvgElement(PATH_SUBCOMPONENT_20, styles)
    const pathComponent_21 = createSvgElement(PATH_SUBCOMPONENT_21, styles)
    const pathComponent_22 = createSvgElement(PATH_SUBCOMPONENT_22, styles)
    const pathComponent_23 = createSvgElement(PATH_SUBCOMPONENT_23, styles)

    svgComponent.animate([
        {"transform": "rotateY(0deg)"},
        {"transform": "rotateY(360deg)"},
        {"transform": "rotateY(360deg)"},
        {"transform": "rotateY(360deg)"},
    ], {
        duration: 2000,
        iterations: Infinity,
    })


    //Appending subcomponents with its respective parent
    this.shadow.appendChild(slotWrapper)
    this.shadow.appendChild(wrapper)
        wrapper.appendChild(iconComponent)
            iconComponent.appendChild(svgComponent)
                svgComponent.appendChild(pathComponent_01)
                svgComponent.appendChild(pathComponent_02)
                svgComponent.appendChild(pathComponent_03)
                svgComponent.appendChild(pathComponent_04)
                svgComponent.appendChild(pathComponent_05)
                svgComponent.appendChild(pathComponent_06)
                svgComponent.appendChild(pathComponent_07)
                svgComponent.appendChild(pathComponent_08)
                svgComponent.appendChild(pathComponent_09)
                svgComponent.appendChild(pathComponent_10)
                svgComponent.appendChild(pathComponent_11)
                svgComponent.appendChild(pathComponent_12)
                svgComponent.appendChild(pathComponent_13)
                svgComponent.appendChild(pathComponent_14)
                svgComponent.appendChild(pathComponent_15)
                svgComponent.appendChild(pathComponent_16)
                svgComponent.appendChild(pathComponent_17)
                svgComponent.appendChild(pathComponent_18)
                svgComponent.appendChild(pathComponent_19)
                svgComponent.appendChild(pathComponent_20)
                svgComponent.appendChild(pathComponent_21)
                svgComponent.appendChild(pathComponent_22)
                svgComponent.appendChild(pathComponent_23)
    this[DEFAULT_OPTION].forEach(element => element());
    return;
}