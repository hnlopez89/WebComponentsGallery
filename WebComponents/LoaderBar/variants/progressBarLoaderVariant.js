import {COMPONENT_WRAPPER, PROGRESSION_COMPONENT, ICON_SUBCOMPONENT,SVG_SUBCOMPONENT,
    PATH_SUBCOMPONENT, 
    SVG_SUBCOMPONENT_BAR,
    PATH_SUBCOMPONENT_BAR,
    SIZE_ATTRIBUTE,
    SMALL_OPTION} from "../constants.js"
import {setStyle} from "../styles/index.js"
import { DEFAULT_OPTION, PROGRESS_STATE_ATTRIBUTE, widthBar, widthProgressBar, heightLargeSize, heightSmallSize } from "../constants.js"
import {STYLE_KEY } from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {creatingElementG, createSvgElementG} from "./constants.js"
// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// CONTAINER_WRAPPER
// I----------->ICON_SUBCOMPONENT
// I--------------->SVG_SUBCOMPONENT
// I------------------->PATH_SUBCOMPONENT
// I----------->PROGRESSION_COMPONENT
// I--------------->SVG_SUBCOMPONENT_BAR
// I------------------->PATH_SUBCOMPONENT_BAR

export const progressBarLoaderComponent = function ()
{
    const styles = setStyle(this.dataAttributes[STYLE_KEY])
    const creatingElement = creatingElementG.bind(this)
    const createSvgElement = createSvgElementG.bind(this)
    const barComplete = creatingElement(ICON_SUBCOMPONENT, styles)
    const barProgresion = creatingElement(PROGRESSION_COMPONENT, styles)
    const svgComponent = createSvgElement(SVG_SUBCOMPONENT, styles)
    const pathComponent = createSvgElement(PATH_SUBCOMPONENT, styles)
    const svgComponentProgress = createSvgElement(SVG_SUBCOMPONENT_BAR, styles)
    const pathComponentProgress = createSvgElement(PATH_SUBCOMPONENT_BAR, styles)
    
    //Creation of all Subcomponents
    const slotWrapper = document.createElement('slot')
    slotWrapper.style.display = 'none'
    const wrapper = creatingElement(COMPONENT_WRAPPER, styles)

    const progressState = parseInt(this.getAttribute(PROGRESS_STATE_ATTRIBUTE))
    this.shadow.appendChild(slotWrapper)
    this.shadow.appendChild(wrapper)

    const size = this.dataAttributes[SIZE_ATTRIBUTE] ? this.getAttribute(SIZE_ATTRIBUTE) : SMALL_OPTION
    const sizePx = size === SMALL_OPTION ? heightSmallSize : heightLargeSize 
    if(progressState >=0){
        const pxProgress = progressState/100*widthBar
        pathComponentProgress.setAttribute('width', 1),
        svgComponentProgress.setAttribute('width', 1),
        svgComponentProgress.setAttribute('viewBox', `0 0 1 ${sizePx}`)
        svgComponentProgress.setAttribute('id', 'svgProgress')
        pathComponentProgress.setAttribute('id', 'pathProgress')
        svgComponentProgress.animate([
            {'width': "0px", 'viewBox': `0 0 0 ${sizePx}`},
            {'width': pxProgress+"px", 'viewBox': `0 0 ${pxProgress} ${sizePx}` },
        ], {
            duration: 1000,
            fill: "forwards"
        })
        pathComponentProgress.animate([
            {'width': "0px"},
            {'width': pxProgress+"px", 'x':-pxProgress/2 }
        ], {
            duration: 1000,
            fill: "forwards"
        })
    } else {
        svgComponentProgress.setAttribute('width', widthProgressBar),
        svgComponentProgress.setAttribute('viewBox', `0 0 ${widthProgressBar} ${sizePx}`)
        pathComponentProgress.setAttribute('width', widthProgressBar),
        pathComponentProgress.setAttribute('viewBox', `0 0 ${widthProgressBar} ${sizePx}`)
        svgComponentProgress.animate([
            {marginLeft: "0px"},
            {marginLeft: "5px"},
            {marginLeft: "15px"},
            {marginLeft: "30px"},
            {marginLeft: "50px"},
            {marginLeft: "100px"},
            {marginLeft: "150px"},
            {marginLeft: "200px"},
            {marginLeft: "200px"},
            {marginLeft: "200px"},
            {marginLeft: "195px"},
            {marginLeft: "190px"},
            {marginLeft: "180px"},
            {marginLeft: "150px"},
            {marginLeft: "100px"},
            {marginLeft: "50px"},
            {marginLeft: "0px"},
            {marginLeft: "0px"},
            {marginLeft: "0px"},
        ], {
            duration: 3800,
            iterations: Infinity
        })
    }
        //wrapper.appendChild(progressBar)
        wrapper.appendChild(barComplete)
            barComplete.appendChild(svgComponent)
                svgComponent.appendChild(pathComponent)
        wrapper.appendChild(barProgresion)
            barProgresion.appendChild(svgComponentProgress)
                svgComponentProgress.appendChild(pathComponentProgress)

    //Appending subcomponents with its respective parent
    this[DEFAULT_OPTION].forEach(element => element());
    return;
}