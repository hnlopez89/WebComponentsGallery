// SHADOW DOM
// I----------->CONTAINER_SLOT_WRAPPER
// I                I----------->SLOT_COMPONENT                                                   
// I
// I
// I----------->WRAPPER_COMPONENT
//                  I----------->WRAPPER_LINKS_COMPONENT 
//                                  I----------->LINK_i_COMPONENT
import {WRAPPER_COMPONENT_id,
        WRAPPER_COMPONENT,
        CONTAINER_SLOT_WRAPPER,
        SLOT_COMPONENT,
        WRAPPER_LINKS_COMPONENT,
        LINK_i_COMPONENT,
        BULLET_COMPONENT} from "../constants.js"
import {MAX_NUMBER_OF_LINKS} from "../constants.js"
import {TEMPORARY_ATTRIBUTE, LINK_INDEX_ACTIVE} from "../constants.js"
import { DEFAULT_EVENT, ACTIVE_EVENT } from "../constants.js"
import {setStyle, processStyle, processIconStyle} from "../styles/index.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {ICON_SELECTION_ATTRIBUTE as ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT,
        ICON_COLOR_ATTRIBUTE, 
        ICON_HEIGHT_ATTRIBUTE,
        ICON_WIDTH_ATTRIBUTE} from "../../Icons/constants.js"
import {NAME_OF_COMPONENT as ICON} from "../../Icons/constants.js" 
import {ARROW_LEFT_ICON_OPTION, ARROW_RIGHT_ICON_OPTION} from "../../Icons/constants.js"

const NUMBER_LINKS = 'numberLinks'
const INDEX_OF_ACTIVE_SHOWED_LINKS = 'activeShowedLinks'

const solvingClosure = (i) =>
{
const indexCopy = i
return () => {return indexCopy};
}
const constructionBullet = (WebComponentVariant) => {
    const elemStyles = WebComponentVariant.styles[BULLET_COMPONENT]
    const xmlns = "http://www.w3.org/2000/svg";
    const svgElem = document.createElementNS(xmlns, "svg");
    const stylesProccessedSvgElem = processIconStyle(svgElem,elemStyles['svg'])
    WebComponentVariant.baseStylesLinks.push(...stylesProccessedSvgElem[DEFAULT_EVENT])

    const rect = document.createElementNS(xmlns, "rect");
    const stylesProccessedRect = processIconStyle(rect,elemStyles['rect'])
    WebComponentVariant.baseStylesLinks.push(...stylesProccessedRect[DEFAULT_EVENT])



    svgElem.appendChild(rect)
    WebComponentVariant.linkStylesActive.push([...stylesProccessedSvgElem[ACTIVE_EVENT],...stylesProccessedRect[ACTIVE_EVENT]])
    return svgElem;
}
const simplePagination = (WebComponentVariant,attributes) => {
    const paginationLinks = []
    var numberBullets = 0
    if (attributes[NUMBER_LINKS]>MAX_NUMBER_OF_LINKS) numberBullets = MAX_NUMBER_OF_LINKS
    else numberBullets = attributes[NUMBER_LINKS]
    for (var i=0; i< numberBullets; i++)
    {
        const indexCopy = solvingClosure(i)()
        if (indexCopy === attributes[LINK_INDEX_ACTIVE]) WebComponentVariant.customAttributes[INDEX_OF_ACTIVE_SHOWED_LINKS] = indexCopy
        const link = document.createElement('div')
        const stylesProccessedLink = processStyle(link,WebComponentVariant.styles[LINK_i_COMPONENT])
        WebComponentVariant.baseStylesLinks.push(...stylesProccessedLink[DEFAULT_EVENT])
        const bullet = constructionBullet(WebComponentVariant)
        link.appendChild(bullet)
        link.onclick = () => {
            WebComponentVariant.getElementsByTagName('a')[indexCopy].click()
            WebComponentVariant.setAttribute(LINK_INDEX_ACTIVE,indexCopy)
        }
        paginationLinks.push(link)
    }
    return [paginationLinks,WebComponentVariant.customAttributes[INDEX_OF_ACTIVE_SHOWED_LINKS]];
}




class regPaginationBullet extends HTMLElement {
constructor()
{
    super();      
    this.styles = null
    this.customAttributes = null
    this.baseStyles = []
    this.baseStylesLinks = []
    this.linkStylesActive = []
    this.shadow = this.attachShadow({mode: 'open'});

}
static get observedAttributes() { return [LINK_INDEX_ACTIVE]; }
attributeChangedCallback(name,oldValue,newValue) 
{       
  const WebComponentVariant = this
  if (name === LINK_INDEX_ACTIVE && oldValue!==newValue)
  {
        WebComponentVariant.baseStylesLinks.forEach(style => style())
        WebComponentVariant.linkStylesActive[newValue].forEach(style => style())
  }

}

connectedCallback() {
        const WebComponentVariant = this
        WebComponentVariant.customAttributes = JSON.parse(WebComponentVariant.getAttribute(TEMPORARY_ATTRIBUTE))
        WebComponentVariant.removeAttribute(TEMPORARY_ATTRIBUTE)
        //Obtain an independent copy of the style Object selected
        WebComponentVariant.styles = JSON.parse(JSON.stringify(setStyle(WebComponentVariant.customAttributes[STYLE_KEY])))
        //Creation of all Subcomponents
        const slotWrapper = document.createElement('div')
        const stylesProccessedSlotWrapper= processStyle(slotWrapper,WebComponentVariant.styles[CONTAINER_SLOT_WRAPPER])
        WebComponentVariant.baseStyles.push(...stylesProccessedSlotWrapper[DEFAULT_EVENT])
        const slotComponent = document.createElement('slot')

        const componentWrapper = document.createElement('div')
        const stylesProccessedComponentWrapper= processStyle(componentWrapper,WebComponentVariant.styles[WRAPPER_COMPONENT])
        WebComponentVariant.baseStyles.push(...stylesProccessedComponentWrapper[DEFAULT_EVENT])
    

        const componentWrapperLinks = document.createElement('div')
        const stylesProccessedComponentWrapperLinks= processStyle(componentWrapperLinks,WebComponentVariant.styles[WRAPPER_LINKS_COMPONENT])
        WebComponentVariant.baseStylesLinks.push(...stylesProccessedComponentWrapperLinks[DEFAULT_EVENT])
        const [paginationLinks,activeLink] = simplePagination(WebComponentVariant,WebComponentVariant.customAttributes)


        //Appending subcomponents with its respective parent
        WebComponentVariant.shadow.appendChild(slotWrapper) 
            slotWrapper.appendChild(slotComponent) 
        WebComponentVariant.shadow.appendChild(componentWrapper) 
            componentWrapper.appendChild(componentWrapperLinks)
                paginationLinks.forEach(pag => {componentWrapperLinks.appendChild(pag)})
        
                
        // Stating initial attributes for the component
        WebComponentVariant.baseStyles.forEach(style => style())
        WebComponentVariant.baseStylesLinks.forEach(style => style())
        WebComponentVariant.linkStylesActive[activeLink].forEach(style => style())
        WebComponentVariant.style.display = 'contents'
    }
}

const regularPaginationBullet  = 'regular-bullet-counter'
if (customElements.get(regularPaginationBullet) === undefined) customElements.define(regularPaginationBullet, class extends regPaginationBullet {});

export const regularPaginationBulletComponent = function (attributes, parentElement)
{
    const contentToAppend = []
    if (parentElement.getElementsByTagName('a').length>0)  contentToAppend.push(...parentElement.getElementsByTagName('a'))

    const hrefLinks = contentToAppend.map(link => {
        const url = link.getAttribute('href')
        if (!url)   return ("not")
        else if (url[0] === "#" ) return (window.location.origin +'/'+ url)
        else if (url[0]==="/")return (window.location.origin + url)
        else return(url)})

    const possibleLinks = hrefLinks.filter(link => {return window.location.href.includes(link)})

    if(possibleLinks.length>0) attributes[LINK_INDEX_ACTIVE]=hrefLinks.indexOf(possibleLinks[0])
    else attributes[LINK_INDEX_ACTIVE] = 0
    attributes[NUMBER_LINKS] = contentToAppend.length
    const customPagination = document.createElement(regularPaginationBullet)
    customPagination.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(attributes))
    customPagination.append(...contentToAppend)
    return customPagination;
}


