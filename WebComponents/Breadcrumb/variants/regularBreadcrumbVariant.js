import {CONTAINER_SLOT_WRAPPER,LABEL_CONTAINER,LABEL_SUBCOMPONENT, SVG_ATTRIBUTES, SVG_TYPE, SVG_STYLES} from "../constants.js"
import {ICON_SUBCOMPONENT,SVG_SUBCOMPONENT,PATH_SUBCOMPONENT} from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { DEFAULT_OPTION, ACTIVE_OPTION, HOVER_OPTION } from "../constants.js"
import { DEFAULT_EVENT, ACTIVE_EVENT, HOVER_EVENT } from "../constants.js"

// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// LABEL_SUBCOMPONENT
// I----------->ICON_SUBCOMPONENT
// I--------------->SVG_SUBCOMPONENT
// I------------------->PATH_SUBCOMPONENT

export function creatingElementG (NAME_OF_SUBCOMPONENT, style, htmlEl='div') {
    const subComponent = document.createElement(htmlEl)
    const stylesProccessed= processStyle(subComponent,style[NAME_OF_SUBCOMPONENT])
    this[DEFAULT_OPTION].push(...stylesProccessed[DEFAULT_EVENT])
    this[ACTIVE_OPTION].push(...stylesProccessed[ACTIVE_EVENT])
    this[HOVER_OPTION].push(...stylesProccessed[HOVER_EVENT])
    return subComponent;
    }

function createSvgElementG (svgSubComponent,style){
    const svgType = style[svgSubComponent][SVG_ATTRIBUTES][SVG_TYPE]
    const svgAttributes = {...style[svgSubComponent][SVG_ATTRIBUTES]}
    delete svgAttributes[SVG_TYPE]
    const keysAttributes = Object.keys(svgAttributes)
    const xmlns = "http://www.w3.org/2000/svg";
    const svgElem = document.createElementNS(xmlns, svgType);
    keysAttributes.forEach(key=> {
        svgElem.setAttributeNS(null, key, svgAttributes[key]);
    })
    const stylesSVG = processStyle(svgElem,style[svgSubComponent][SVG_STYLES])
    stylesSVG[DEFAULT_EVENT].forEach(element => element());
    return svgElem;
    }
    
    
    export const breadcrumbComponent = function (){
    const styles = setStyle(this.dataAttributes[STYLE_KEY])
    const creatingElement = creatingElementG.bind(this)
    const createSvgElement = createSvgElementG.bind(this)
    
    const slotsArray = []
    const slotWrapper = creatingElement(CONTAINER_SLOT_WRAPPER, styles)
    const linksToAppend = creatingElement(LABEL_CONTAINER, styles)
    const linksList = this.querySelectorAll('a')
    if(linksList){
        linksList.forEach((link, index) => {
            const slot = document.createElement('slot')
            slot.setAttribute('name', link.tagName)
            slot.style.display = 'none'
            slotsArray.push(slot)
            slotWrapper.appendChild(slot)
            const labelCloned=link.cloneNode(true)
            if(labelCloned.innerText < 1){
                labelCloned.innerText === 'link by default'
            } else if (labelCloned.innerText.length > 20){
                labelCloned.innerText = labelCloned.innerText.slice(0,20) + '...'
            }
            const linkStyleProccessed= processStyle(labelCloned, styles[LABEL_SUBCOMPONENT])
            labelCloned.className = ''
            if(linksList.length-1 !== index){
                //Creation of all Subcomponents
                const iconComponent = creatingElement(ICON_SUBCOMPONENT, styles)
                const svgComponent = createSvgElement(SVG_SUBCOMPONENT, styles)
                const pathComponent = createSvgElement(PATH_SUBCOMPONENT, styles)
                this[DEFAULT_OPTION].push(...linkStyleProccessed[DEFAULT_EVENT])
                labelCloned.addEventListener('mouseover', ()=>{
                    processStyle(labelCloned,styles[LABEL_SUBCOMPONENT])[HOVER_EVENT].forEach(style=> style())
                })
                labelCloned.addEventListener('mouseout', ()=>{
                    processStyle(labelCloned,styles[LABEL_SUBCOMPONENT])[DEFAULT_EVENT].forEach(style=> style())
                })
                linksToAppend.appendChild(labelCloned)
                linksToAppend.appendChild(iconComponent)
                iconComponent.appendChild(svgComponent)
                    svgComponent.appendChild(pathComponent)
            }
            else {
                labelCloned.removeAttribute('href')
                linksToAppend.appendChild(labelCloned)
                this[ACTIVE_OPTION].push(...linkStyleProccessed[ACTIVE_EVENT])
                this[ACTIVE_EVENT].forEach(element => element());
            }
            const linksUser = this.querySelectorAll('a');
            linksUser.forEach(linkToDelete => {
                this.removeChild(linkToDelete)
            })
        })
        //Appending subcomponents with its respective parent
        this.shadow.appendChild(slotWrapper)
        this.shadow.appendChild(linksToAppend)
            
        this[DEFAULT_OPTION].forEach(element => element());
    }
    return ;
}