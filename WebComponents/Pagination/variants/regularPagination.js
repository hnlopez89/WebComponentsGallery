// SHADOW DOM
// I----------->CONTAINER_SLOT_WRAPPER
// I                I----------->SLOT_COMPONENT                                                   
// I
// I
// I----------->WRAPPER_COMPONENT
// I                I----------->ARROW_ICON_COMPONENT
// I                I
// I                I----------->WRAPPER_LINKS_COMPONENT 
// I                I               I----------->LINK_i_COMPONENT
// I                I
// I                I----------->ARROW_ICON_COMPONENT 

import {WRAPPER_COMPONENT_id,
        WRAPPER_COMPONENT,
        CONTAINER_SLOT_WRAPPER,
        SLOT_COMPONENT,
        ARROW_ICON_COMPONENT,
        WRAPPER_LINKS_COMPONENT,
        LINK_i_COMPONENT} from "../constants.js"
import {MAX_NUMBER_OF_LINKS} from "../constants.js"
import {TEMPORARY_ATTRIBUTE, LINK_INDEX_ACTIVE} from "../constants.js"
import { DEFAULT_EVENT, ACTIVE_EVENT } from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"
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
const iconsIndex = (direction, length, indexCurrentActive) => {
    if (direction === ARROW_LEFT_ICON_OPTION)
    {
        if (indexCurrentActive>0) return indexCurrentActive - 1
        else return 0;
    }
    else if (direction===ARROW_RIGHT_ICON_OPTION)
    {
        if(indexCurrentActive<(length - 1)) return indexCurrentActive + 1
        else return (length - 1)
    }
}
const simplePagination = (WebComponentVariant,attributes) => {
    const paginationLinks = []
    
    for (var i=0; i< attributes[NUMBER_LINKS]; i++)
    {
        const indexCopy = solvingClosure(i)()
        if (indexCopy === attributes[LINK_INDEX_ACTIVE]) WebComponentVariant.customAttributes[INDEX_OF_ACTIVE_SHOWED_LINKS] = indexCopy
        const link = document.createElement('div')
        const stylesProccessedLink= processStyle(link,WebComponentVariant.styles[LINK_i_COMPONENT])
        WebComponentVariant.baseStylesLinks.push(...stylesProccessedLink[DEFAULT_EVENT])
        WebComponentVariant.linkStylesActive.push(stylesProccessedLink[ACTIVE_EVENT])
        link.innerText = indexCopy + 1 
        link.onclick = () => {
            WebComponentVariant.getElementsByTagName('a')[indexCopy].click()
            WebComponentVariant.setAttribute(LINK_INDEX_ACTIVE,indexCopy)
            
        }
        paginationLinks.push(link)
    }
    return [paginationLinks,WebComponentVariant.customAttributes[INDEX_OF_ACTIVE_SHOWED_LINKS]];
}
const complexPaginationLeft = (WebComponentVariant,attributes) => {
    const paginationLinks = []
    for (var i=0; i<(MAX_NUMBER_OF_LINKS); i++)
    {
        const link = document.createElement('div')
        const stylesProccessedLink= processStyle(link,WebComponentVariant.styles[LINK_i_COMPONENT])
        WebComponentVariant.baseStylesLinks.push(...stylesProccessedLink[DEFAULT_EVENT])
        WebComponentVariant.linkStylesActive.push(stylesProccessedLink[ACTIVE_EVENT])
        paginationLinks.push(link)
    }
    //FIRST NUMBERED LINKS
    for (var i=0; i<(MAX_NUMBER_OF_LINKS-2); i++)
    {
        const indexCopy = solvingClosure(i)()
        paginationLinks[indexCopy].innerText = indexCopy + 1
        const clickLink = indexCopy

        if (clickLink === attributes[LINK_INDEX_ACTIVE]) WebComponentVariant.customAttributes[INDEX_OF_ACTIVE_SHOWED_LINKS] = indexCopy
        paginationLinks[indexCopy].onclick = () => {
            
            WebComponentVariant.getElementsByTagName('a')[clickLink].click()
            WebComponentVariant.setAttribute(LINK_INDEX_ACTIVE,clickLink)
        }
    }
    //MIDDLE ... LINK
    paginationLinks[MAX_NUMBER_OF_LINKS-2].innerText = "..."
    paginationLinks[MAX_NUMBER_OF_LINKS-2].onclick = () => {
        const clickLink = MAX_NUMBER_OF_LINKS-2
        WebComponentVariant.getElementsByTagName('a')[clickLink].click()
        WebComponentVariant.setAttribute(LINK_INDEX_ACTIVE,clickLink)
    }
    //LAST LINK
    paginationLinks[MAX_NUMBER_OF_LINKS-1].innerText = attributes[NUMBER_LINKS]
    paginationLinks[MAX_NUMBER_OF_LINKS-1].onclick = () => {
        WebComponentVariant.getElementsByTagName('a')[attributes[NUMBER_LINKS] - 1].click()
        WebComponentVariant.setAttribute(LINK_INDEX_ACTIVE,attributes[NUMBER_LINKS] - 1)
    }
    return [paginationLinks,WebComponentVariant.customAttributes[INDEX_OF_ACTIVE_SHOWED_LINKS]];
}
const complexPaginationMiddle = (WebComponentVariant,attributes) => {
    const paginationLinks = []
    for (var i=0; i<(MAX_NUMBER_OF_LINKS); i++)
    {
        const link = document.createElement('div')
        const stylesProccessedLink= processStyle(link,WebComponentVariant.styles[LINK_i_COMPONENT])
        WebComponentVariant.baseStylesLinks.push(...stylesProccessedLink[DEFAULT_EVENT])
        WebComponentVariant.linkStylesActive.push(stylesProccessedLink[ACTIVE_EVENT])
        paginationLinks.push(link)
    }
    //FIRST LINK
    paginationLinks[0].innerText = 1
    paginationLinks[0].onclick = () => {
        WebComponentVariant.getElementsByTagName('a')[0].click()
        WebComponentVariant.setAttribute(LINK_INDEX_ACTIVE,0)
    }
    //MIDDLE ... LINK
    paginationLinks[1].innerText = "..."
    paginationLinks[1].onclick = () => {
        const clickLink = attributes[LINK_INDEX_ACTIVE] - Math.floor((MAX_NUMBER_OF_LINKS - 4 - 1)/2) - 1
        WebComponentVariant.getElementsByTagName('a')[clickLink].click()
        WebComponentVariant.setAttribute(LINK_INDEX_ACTIVE,clickLink)
    }
    //MIDDLE NUMBERED LINKS
    for (var i=0; i<(MAX_NUMBER_OF_LINKS-4); i++)
    {
        const indexCopy = solvingClosure(i)()
        paginationLinks[indexCopy + 2].innerText = parseInt(attributes[LINK_INDEX_ACTIVE]) + 1 - Math.floor((MAX_NUMBER_OF_LINKS - 4 - 1)/2) + indexCopy
        const clickLink = parseInt(attributes[LINK_INDEX_ACTIVE]) - Math.floor((MAX_NUMBER_OF_LINKS - 4 - 1)/2) + indexCopy
        if (clickLink === attributes[LINK_INDEX_ACTIVE]) WebComponentVariant.customAttributes[INDEX_OF_ACTIVE_SHOWED_LINKS] = indexCopy+2
        paginationLinks[indexCopy + 2].onclick = () => {
            WebComponentVariant.getElementsByTagName('a')[clickLink].click()
            WebComponentVariant.setAttribute(LINK_INDEX_ACTIVE,clickLink)
        }
    }
    //MIDDLE ... LINK
    paginationLinks[MAX_NUMBER_OF_LINKS-2].innerText = "..."
    paginationLinks[MAX_NUMBER_OF_LINKS-2].onclick = () => {
        const clickLink = attributes[LINK_INDEX_ACTIVE] + Math.floor((MAX_NUMBER_OF_LINKS - 4 - 1)/2) + 1
        WebComponentVariant.getElementsByTagName('a')[clickLink].click()
        WebComponentVariant.setAttribute(LINK_INDEX_ACTIVE,clickLink)
    }
    //LAST LINK
    paginationLinks[MAX_NUMBER_OF_LINKS-1].innerText = attributes[NUMBER_LINKS]
    paginationLinks[MAX_NUMBER_OF_LINKS-1].onclick = () => {
        WebComponentVariant.getElementsByTagName('a')[attributes[NUMBER_LINKS] - 1].click()
        WebComponentVariant.setAttribute(LINK_INDEX_ACTIVE,attributes[NUMBER_LINKS] - 1)
    }
    return [paginationLinks,WebComponentVariant.customAttributes[INDEX_OF_ACTIVE_SHOWED_LINKS]];
}
const complexPaginationRight = (WebComponentVariant,attributes) => {
    const paginationLinks = []
    for (var i=0; i<(MAX_NUMBER_OF_LINKS); i++)
    {
        const link = document.createElement('div')
        const stylesProccessedLink= processStyle(link,WebComponentVariant.styles[LINK_i_COMPONENT])
        WebComponentVariant.baseStylesLinks.push(...stylesProccessedLink[DEFAULT_EVENT])
        WebComponentVariant.linkStylesActive.push(stylesProccessedLink[ACTIVE_EVENT])
        paginationLinks.push(link)
    }
    //FIRST LINK
    paginationLinks[0].innerText = 1
    paginationLinks[0].onclick = () => {
        WebComponentVariant.getElementsByTagName('a')[0].click()
        WebComponentVariant.setAttribute(LINK_INDEX_ACTIVE,0)
    }
    //MIDDLE ... LINK
    paginationLinks[1].innerText = "..."
    paginationLinks[1].onclick = () => {
        const clickLink = attributes[NUMBER_LINKS] - 6
        WebComponentVariant.getElementsByTagName('a')[clickLink].click()
        WebComponentVariant.setAttribute(LINK_INDEX_ACTIVE,clickLink)
    }
    //LAST LINKS
    for (var i=0; i<(MAX_NUMBER_OF_LINKS-2); i++)
    {
        const indexCopy = solvingClosure(i)()
        paginationLinks[indexCopy + 2].innerText =  attributes[NUMBER_LINKS] - 4 + indexCopy
        const clickLink = attributes[NUMBER_LINKS] - 5 + indexCopy
        if (clickLink === attributes[LINK_INDEX_ACTIVE]) WebComponentVariant.customAttributes[INDEX_OF_ACTIVE_SHOWED_LINKS] = indexCopy+2
        paginationLinks[indexCopy + 2].onclick = () => {
            
            WebComponentVariant.getElementsByTagName('a')[clickLink].click()
            WebComponentVariant.setAttribute(LINK_INDEX_ACTIVE,clickLink)
        }
    }

    return [paginationLinks,WebComponentVariant.customAttributes[INDEX_OF_ACTIVE_SHOWED_LINKS]];
}
const fullConstructionLinks = (WebComponentVariant,attributes) => {
    const numberLinks = attributes[NUMBER_LINKS]
    const currentIndex = attributes[LINK_INDEX_ACTIVE]
    const linksBuild = []
    if (numberLinks <= MAX_NUMBER_OF_LINKS) linksBuild.push(...simplePagination(WebComponentVariant,attributes))
    else if (numberLinks>= MAX_NUMBER_OF_LINKS) 
    {
        if (currentIndex <= 4) linksBuild.push(...complexPaginationLeft(WebComponentVariant,attributes))
        else if (currentIndex >= (numberLinks - 5)) linksBuild.push(...complexPaginationRight(WebComponentVariant,attributes))
        else linksBuild.push(...complexPaginationMiddle(WebComponentVariant,attributes))

        
    }
    return linksBuild
}
const constructionIcons = (icon, indexLink, WebComponentVariant) => {
    const iconComponent = document.createElement(ICON)
    iconComponent.setAttribute(ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT,icon)
    iconComponent.setAttribute(ICON_COLOR_ATTRIBUTE,WebComponentVariant.styles[ARROW_ICON_COMPONENT].color)
    iconComponent.setAttribute(ICON_HEIGHT_ATTRIBUTE,WebComponentVariant.styles[ARROW_ICON_COMPONENT].height)
    iconComponent.setAttribute(ICON_WIDTH_ATTRIBUTE,WebComponentVariant.styles[ARROW_ICON_COMPONENT].width)

    const indexIcon = iconsIndex(icon, WebComponentVariant.customAttributes[NUMBER_LINKS], indexLink)
    iconComponent.onclick = () => {
        WebComponentVariant.getElementsByTagName('a')[indexIcon].click()
        WebComponentVariant.setAttribute(LINK_INDEX_ACTIVE,indexIcon)
    }
    return iconComponent;
}
class regPagination extends HTMLElement {
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
            WebComponentVariant.customAttributes[LINK_INDEX_ACTIVE] = parseInt(newValue)
            const wrapper =  WebComponentVariant.shadow.getElementById(WRAPPER_COMPONENT_id)
            while(wrapper.firstChild)
            {
                wrapper.removeChild(wrapper.firstChild)
            }
            WebComponentVariant.baseStylesLinks = []
            WebComponentVariant.linkStylesActive = []
            const iconLeft = constructionIcons(ARROW_LEFT_ICON_OPTION, WebComponentVariant.customAttributes[LINK_INDEX_ACTIVE], WebComponentVariant)

            const componentWrapperLinks = document.createElement('div')
            const stylesProccessedComponentWrapperLinks= processStyle(componentWrapperLinks,WebComponentVariant.styles[WRAPPER_LINKS_COMPONENT])
            WebComponentVariant.baseStylesLinks.push(...stylesProccessedComponentWrapperLinks[DEFAULT_EVENT])

            const [paginationLinks,activeLink] = fullConstructionLinks(WebComponentVariant,WebComponentVariant.customAttributes)
            const iconRight = constructionIcons(ARROW_RIGHT_ICON_OPTION, WebComponentVariant.customAttributes[LINK_INDEX_ACTIVE], WebComponentVariant)

            wrapper.appendChild(iconLeft)
            wrapper.appendChild(componentWrapperLinks)
                paginationLinks.forEach(pag => {componentWrapperLinks.appendChild(pag)})
            wrapper.appendChild(iconRight)
            WebComponentVariant.baseStylesLinks.forEach(style => style())
            WebComponentVariant.linkStylesActive[activeLink].forEach(style => style())
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
        componentWrapper.setAttribute('id',WRAPPER_COMPONENT_id)
        const stylesProccessedComponentWrapper= processStyle(componentWrapper,WebComponentVariant.styles[WRAPPER_COMPONENT])
        WebComponentVariant.baseStyles.push(...stylesProccessedComponentWrapper[DEFAULT_EVENT])
       
        const iconLeft = constructionIcons(ARROW_LEFT_ICON_OPTION, WebComponentVariant.customAttributes[LINK_INDEX_ACTIVE], WebComponentVariant)

        const componentWrapperLinks = document.createElement('div')
        const stylesProccessedComponentWrapperLinks= processStyle(componentWrapperLinks,WebComponentVariant.styles[WRAPPER_LINKS_COMPONENT])
        WebComponentVariant.baseStylesLinks.push(...stylesProccessedComponentWrapperLinks[DEFAULT_EVENT])
        const [paginationLinks,activeLink] = fullConstructionLinks(WebComponentVariant,WebComponentVariant.customAttributes)

        const iconRight = constructionIcons(ARROW_RIGHT_ICON_OPTION, WebComponentVariant.customAttributes[LINK_INDEX_ACTIVE], WebComponentVariant)

        //Appending subcomponents with its respective parent
        WebComponentVariant.shadow.appendChild(slotWrapper) 
            slotWrapper.appendChild(slotComponent) 
        WebComponentVariant.shadow.appendChild(componentWrapper) 
            componentWrapper.appendChild(iconLeft)
            componentWrapper.appendChild(componentWrapperLinks)
                paginationLinks.forEach(pag => {componentWrapperLinks.appendChild(pag)})
            componentWrapper.appendChild(iconRight)
        
                
        // Stating initial attributes for the component
        WebComponentVariant.baseStyles.forEach(style => style())
        WebComponentVariant.baseStylesLinks.forEach(style => style())
        WebComponentVariant.linkStylesActive[activeLink].forEach(style => style())
        WebComponentVariant.style.display = 'contents'
    }
    }
    
const regularPagination  = 'regular-pagination'
if (customElements.get(regularPagination) === undefined) customElements.define(regularPagination, class extends regPagination {});

export const regularPaginationComponent = function (attributes, parentElement)
{
    
    const contentToAppend = []
    if (parentElement.getElementsByTagName('a').length>0)  contentToAppend.push(...parentElement.getElementsByTagName('a'))
   
    const hrefLinks = contentToAppend.map(link => {
        const url = link.getAttribute('href')
        if (!url)   return ("not")
        else if (url[0] === "#" ) return (window.location.origin +'/'+ url)
        else if (url[0]==="/")return (window.location.origin + url)
        else return(url)})
    const possibleLinks = hrefLinks.filter(link => {return link.includes(window.location.href)})
    if(possibleLinks.length>0 && possibleLinks.length == 1) attributes[LINK_INDEX_ACTIVE]=hrefLinks.indexOf(possibleLinks[0])
    else if (possibleLinks.length > 1)
    {
        const matchExactly = possibleLinks.filter(link => {return link === window.location.href})
        if (matchExactly.length>0) attributes[LINK_INDEX_ACTIVE]=hrefLinks.indexOf(matchExactly[0])
        else attributes[LINK_INDEX_ACTIVE]=hrefLinks.indexOf(possibleLinks[0])
    }
    else attributes[LINK_INDEX_ACTIVE] = 0
    attributes[NUMBER_LINKS] = contentToAppend.length
    const customPagination = document.createElement(regularPagination)
    customPagination.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(attributes))
    customPagination.append(...contentToAppend)
    return customPagination;
}


