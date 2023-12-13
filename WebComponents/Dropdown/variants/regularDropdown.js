import {CONTAINER_SLOT_WRAPPER,
        CONTAINER_SUPER_WRAPPER,
        CONTAINER_WRAPPER,
        CONTAINER_SUBWRAPPER,
        TITLE_PLUS_OPTION__SELECTED_SUBCOMPONENT,
        TITLE_SUBCOMPONENT, 
        TITLE_ITEM, 
        OPTION_SELECTED_SUBCOMPONENT, 
        ARROW_ICON_SUBCOMPONENT, 
        ARROW_ICON_CONTAINER, 
        ARROW_ICON_ITEM,
        OPTION_WRAPPER,
        OPTION_Ni_SUBCOMPONENT,
        OPTION_Ni_ITEM ,
        ERROR_WRAPPER} from "../constants.js"
import {TEMPORARY_ATTRIBUTE,
        STATE_ATTRIBUTE,
        OPTION_VALUE_ATTRIBUTE,
        DROPDOWN_VALUE_ATTRIBUTE,
        TITLE_ATTRIBUTE,
        OPTIONS_ATTRIBUTE,
        OPTIONS_VALUE_SUBATTRIBUTE,
        OPTIONS_TEXT_SUBATTRIBUTE,
        ERROR_MESSAGE_ATTRIBUTE } from "../constants.js"
import {NORMAL_OPTION,
        SELECTED_OPTION,
        OPEN_OPTION,
        ERROR_OPTION,
        INACTIVE_OPTION,
        REQUIRED_OPTION} from "../constants.js"
import {DEFAULT_EVENT,
        SELECTION_EVENT, 
        OPEN_EVENT,
        ERROR_EVENT,
        INACTIVE_EVENT,
        HOVER_EVENT} from "../constants.js"
import {setStyle, processStyle, processIconStyle} from "../styles/index.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {NAME_OF_COMPONENT as ICON} from "../../Icons/constants.js"
//import {NAV_ARROW_ICON_OPTION} from "../../Icons/constants.js"
// SHADOW DOM
// I----------->CONTAINER_SLOT_WRAPPER
// I                I----------->SLOT
// I
// I----------->CONTAINER_SUPER_WRAPPER
//                  I----------->CONTAINER_WRAPPER
//                  I                  I----------->CONTAINER_SUBWRAPPER
//                  I                  I                I----------->TITLE_PLUS_OPTION__SELECTED_SUBCOMPONENT
//                  I                  I                I               I----------->TITLE_SUBCOMPONENT
//                  I                  I                I               I                   I----------->TITLE_ITEM
//                  I                  I                I               I                                   I----------->TITLE_TEXT_NODE
//                  I                  I                I               I----------->OPTION_SELECTED_SUBCOMPONENT
//                  I                  I                I                                   I----------->OPTION_TEXT_NODE
//                  I                  I                I
//                  I                  I                I
//                  I                  I                I----------->ARROW_ICON_SUBCOMPONENT
//                  I                  I                                I----------->ARROW_ICON_CONTAINER
//                  I                  I                                                    I----------->ARROW_ICON_ITEM
//                  I                  I
//                  I                  I----------->OPTION_WRAPPER
//                  I                                   I----------->OPTION_Ni_SUBCOMPONENT
//                  I                                                   I----------->OPTION_Ni_ITEM
//                  I                                                                       I----------->OPTION_TEXT_NODE
//                  I----------->ERROR_WRAPPER
//                                     I----------->ERROR_TEXT_NODE

function parsingOptions (options){
    const optionsObject = []
    for (var i=0; i<options.length; i++)
    {
        const optObj = {}
        optObj[OPTIONS_VALUE_SUBATTRIBUTE] = options[i].getAttribute('value')
        optObj[OPTIONS_TEXT_SUBATTRIBUTE] = options[i].textContent
        optionsObject.push({...optObj})
    }
    return optionsObject
}

function observeDropdown (element) 
{

    const mutationCallback = (mutationsList) => {
        for (const mutation of mutationsList) 
        {
            if (mutation.type !== "attributes" || mutation.attributeName !== DROPDOWN_VALUE_ATTRIBUTE) return
          const dropdownValue =  mutation.target.getAttribute(DROPDOWN_VALUE_ATTRIBUTE)
          element.getElementsByTagName('select')[0].setAttribute('value',dropdownValue)
        }
    }
    return new MutationObserver(mutationCallback);
}

function  pushingEventsG (stylesProcessed) {
    this[NORMAL_OPTION].push(...stylesProcessed[DEFAULT_EVENT])
    this[SELECTED_OPTION].push(...stylesProcessed[SELECTION_EVENT])
    this[OPEN_OPTION].push(...stylesProcessed[OPEN_EVENT])
    this[ERROR_OPTION].push(...stylesProcessed[ERROR_EVENT])
    this[INACTIVE_OPTION].push(...stylesProcessed[INACTIVE_EVENT])
}

function creatingElementG (NAME_OF_SUBCOMPONENT) 
{
    const  pushingEvents =  pushingEventsG.bind(this)
    const subComponent = document.createElement('div')
    const stylesProccessed= processStyle(subComponent,this.styles[NAME_OF_SUBCOMPONENT])

    pushingEvents(stylesProccessed)
    return subComponent;
}
function creatingElementIconG (NAME_OF_SUBCOMPONENT) 
{
    const  pushingEvents =  pushingEventsG.bind(this)
    const subComponent = document.createElement(ICON)

    const stylesProccessed= processIconStyle(subComponent,this.styles[NAME_OF_SUBCOMPONENT])
    pushingEvents(stylesProccessed)
    return subComponent;
}
const solvingClosure = (i) =>
{
    const indexCopy = i
    return () => {return indexCopy};
}
function creationOfEachOptionG () {
    for (var i=0; i<this.dataAttributes[OPTIONS_ATTRIBUTE].length;i++)
    {
        //Creation of all Subcomponents options
        const indexCopy = solvingClosure(i)()
        this.OneOptionArray.push(this.creatingElement(OPTION_Ni_SUBCOMPONENT))
        const oneOptItem = this.creatingElement(OPTION_Ni_ITEM)
        const textNodeOneOptItem = document.createTextNode(this.dataAttributes[OPTIONS_ATTRIBUTE][indexCopy][OPTIONS_TEXT_SUBATTRIBUTE])

        //Appending subcomponents with its respective parent 
        this.optionsWrapper.appendChild(this.OneOptionArray[indexCopy])
        this.OneOptionArray[indexCopy].appendChild(oneOptItem)
        oneOptItem.appendChild(textNodeOneOptItem)

        //Adding some behaviour to the component
        this.OneOptionArray[indexCopy].onmouseover = () => {
            processStyle(this.OneOptionArray[indexCopy],this.styles[OPTION_Ni_SUBCOMPONENT])[HOVER_EVENT].forEach(style=> style())
        };
        this.OneOptionArray[indexCopy].onmouseout = () => {
            processStyle(this.OneOptionArray[indexCopy],this.styles[OPTION_Ni_SUBCOMPONENT])[DEFAULT_EVENT].forEach(style=> style())
        };

        this.OneOptionArray[indexCopy].onclick = (e) => {
            e.preventDefault();
            if (this.getAttribute(DROPDOWN_VALUE_ATTRIBUTE) !== this.OneOptionArray[indexCopy].getAttribute(OPTION_VALUE_ATTRIBUTE)) 
            {
                this.setAttribute(DROPDOWN_VALUE_ATTRIBUTE, this.OneOptionArray[indexCopy].getAttribute(OPTION_VALUE_ATTRIBUTE))
                this.setAttribute(STATE_ATTRIBUTE, SELECTED_OPTION)
                this.textNodeOptionSelected.nodeValue = this.dataAttributes[OPTIONS_ATTRIBUTE][indexCopy][OPTIONS_TEXT_SUBATTRIBUTE]
            }
            else if (this.getAttribute(DROPDOWN_VALUE_ATTRIBUTE) === this.OneOptionArray[indexCopy].getAttribute(OPTION_VALUE_ATTRIBUTE)) this.setAttribute(DROPDOWN_VALUE_ATTRIBUTE,this.dataAttributes[DROPDOWN_VALUE_ATTRIBUTE])
        }
        // Stating value this.dataAttributes for the option-i-component
        this.OneOptionArray[indexCopy].setAttribute(OPTION_VALUE_ATTRIBUTE, this.dataAttributes[OPTIONS_ATTRIBUTE][indexCopy][OPTIONS_VALUE_SUBATTRIBUTE])
        
    }
}
function ClickOutsideDropdown(event) {
    const isClickInsideElement = this.contains(event.target);
    if (!isClickInsideElement && this.getAttribute(STATE_ATTRIBUTE)===OPEN_OPTION ) 
    {

            this.setAttribute(STATE_ATTRIBUTE, NORMAL_OPTION)
    }
}
function subWrapperClickEvent ()  {
    if (this.getAttribute(STATE_ATTRIBUTE)!==INACTIVE_OPTION) 
    {
        if (this.getAttribute(STATE_ATTRIBUTE) === NORMAL_OPTION || this.getAttribute(STATE_ATTRIBUTE) === ERROR_OPTION) 
        {
            this.setAttribute(STATE_ATTRIBUTE, OPEN_OPTION)
        }
        else if (this.getAttribute(STATE_ATTRIBUTE) === OPEN_OPTION) 
        {
            this.setAttribute(STATE_ATTRIBUTE, NORMAL_OPTION)
        }
        else if (this.getAttribute(STATE_ATTRIBUTE) === SELECTED_OPTION) 
        {
            this.textNodeOptionSelected.nodeValue = " "
            this.setAttribute(DROPDOWN_VALUE_ATTRIBUTE,this.dataAttributes[DROPDOWN_VALUE_ATTRIBUTE])
            this.setAttribute(STATE_ATTRIBUTE, OPEN_OPTION)
        }
    }
}
function  resizeObserverG () { 
    return new ResizeObserver(entries => {
    for (let entry of entries) {
      if(entry.contentBoxSize) {
        
        const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
        if (contentBoxSize.blockSize=== (parseInt(this.styles[CONTAINER_WRAPPER].height.slice(0, -2))-2)) this.wrapper.style.zIndex = "initial"
        else if (contentBoxSize.blockSize===(this.totalHeight - 2)) this.wrapper.style.zIndex = "1"
      }
    }
  })
}
class regDropdown extends HTMLElement {
constructor()
{
    super();      
    this[NORMAL_OPTION] = []
    this[SELECTED_OPTION] = []
    this[INACTIVE_OPTION] = []
    this[OPEN_OPTION] = []
    this[ERROR_OPTION] = []
    this.styles = null
    this.shadow = this.attachShadow({mode: 'open'});

}
static get observedAttributes() { return [STATE_ATTRIBUTE]; }
attributeChangedCallback(name, oldValue, newValue) 
{
    const state = this.getAttribute(STATE_ATTRIBUTE)
    if (state === NORMAL_OPTION)
    {
        this[NORMAL_OPTION].forEach( (style)=>  style())
    }
    else if (state === SELECTED_OPTION)
    {
        this[SELECTED_OPTION].forEach( (style)=>  style())
    }
    else if (state === OPEN_OPTION)
    {
        this[OPEN_OPTION].forEach( (style)=>  style())
    }
    else if (state === INACTIVE_OPTION)
    {
        this[INACTIVE_OPTION].forEach( (style)=>  style())
    }
    else if (state === ERROR_OPTION)
    {
        this[ERROR_OPTION].forEach( (style)=>  style())
    }
    if (!!oldValue && oldValue === OPEN_OPTION && newValue===NORMAL_OPTION && this.titleRequired === REQUIRED_OPTION) 
    {
        //this[ERROR_OPTION].forEach( (style)=>  style())
        this.setAttribute(STATE_ATTRIBUTE,ERROR_OPTION)
    }
    

}


connectedCallback() {
    this.dataAttributes = JSON.parse(this.getAttribute(TEMPORARY_ATTRIBUTE))
    this.titleRequired = REQUIRED_OPTION === this.dataAttributes[TITLE_ATTRIBUTE][this.dataAttributes[TITLE_ATTRIBUTE].length-1] ? REQUIRED_OPTION:null;
    this.creatingElement = creatingElementG.bind(this)
    const creatingElementIcon = creatingElementIconG.bind(this)
    const creationOfEachOption = creationOfEachOptionG.bind(this)
    this.removeAttribute(TEMPORARY_ATTRIBUTE)
    //Obtain an independent copy of the style Object selected
    this.styles = JSON.parse(JSON.stringify(setStyle(this.dataAttributes[STYLE_KEY])))
    //Calculate the height neccesary to deploy dropdown when it's open. We add 2px at the total height because the border width of the container
    const containerWrapperHeight = parseInt(this.styles[CONTAINER_SUBWRAPPER][OPEN_EVENT].height.slice(0, -2))
    const optionHeight = parseInt(this.styles[OPTION_Ni_SUBCOMPONENT].height.slice(0, -2))
    this.totalHeight = containerWrapperHeight + optionHeight * this.dataAttributes[OPTIONS_ATTRIBUTE].length  + 2
    // Establishing the height calculated when the dropdown is opened
    this.styles[CONTAINER_WRAPPER][OPEN_EVENT].height = `${this.totalHeight}px`

   

    //Component width dimensions and display
    this.style.width = this.styles[CONTAINER_WRAPPER].width
    this.style.display = 'block' 
    //Creation of all Subcomponents
    const slotWrapper = this.creatingElement(CONTAINER_SLOT_WRAPPER)
    const slotElement = document.createElement('slot')
    const superWrapper = this.creatingElement(CONTAINER_SUPER_WRAPPER)
    this.wrapper = this.creatingElement(CONTAINER_WRAPPER)
    const subwrapper = this.creatingElement(CONTAINER_SUBWRAPPER)
    const titleplusOptionSubcomponent = this.creatingElement(TITLE_PLUS_OPTION__SELECTED_SUBCOMPONENT)
    const titleSubcomponent = this.creatingElement(TITLE_SUBCOMPONENT)
    const titleItem = this.creatingElement(TITLE_ITEM)
    const textNodeTitleSubcomponent = document.createTextNode(this.dataAttributes[TITLE_ATTRIBUTE])
    const optionSelectedSubcomponent = this.creatingElement(OPTION_SELECTED_SUBCOMPONENT)
    this.textNodeOptionSelected = document.createTextNode(" ")
    const arrowIconSubcomponent = this.creatingElement(ARROW_ICON_SUBCOMPONENT)
    const arrowIconContainer = this.creatingElement(ARROW_ICON_CONTAINER)
    const arrowIcon = creatingElementIcon(ARROW_ICON_ITEM)
    const errorWrapper = this.creatingElement(ERROR_WRAPPER)
    const errorTextNode = document.createTextNode((this.dataAttributes[ERROR_MESSAGE_ATTRIBUTE]))
    //  OPTIONS 
    this.optionsWrapper = this.creatingElement(OPTION_WRAPPER)
    this.OneOptionArray = []
    creationOfEachOption()
    
    //Appending subcomponents with its respective parent 
    this.shadow.appendChild(slotWrapper)
        slotWrapper.appendChild(slotElement)
    this.shadow.appendChild(superWrapper)
        superWrapper.appendChild(this.wrapper)
            this.wrapper.appendChild(subwrapper)
                subwrapper.appendChild(titleplusOptionSubcomponent)
                    titleplusOptionSubcomponent.appendChild(titleSubcomponent)
                        titleSubcomponent.appendChild(titleItem)
                            titleItem.appendChild(textNodeTitleSubcomponent)
                    titleplusOptionSubcomponent.appendChild(optionSelectedSubcomponent)
                        optionSelectedSubcomponent.appendChild(this.textNodeOptionSelected)
                subwrapper.appendChild(arrowIconSubcomponent)
                    arrowIconSubcomponent.appendChild(arrowIconContainer)
                        arrowIconContainer.appendChild(arrowIcon)
            this.wrapper.appendChild(this.optionsWrapper)
        superWrapper.appendChild(errorWrapper)
            errorWrapper.appendChild(errorTextNode)


   //Adding some behaviour to the component
    subwrapper.addEventListener('click',subWrapperClickEvent.bind(this))
    document.addEventListener('click', ClickOutsideDropdown.bind(this));
    const resizeObserver = resizeObserverG.bind(this)()
    resizeObserver.observe(this.wrapper);

    // Stating initial attributes for the component
    this.setAttribute(DROPDOWN_VALUE_ATTRIBUTE, this.dataAttributes[DROPDOWN_VALUE_ATTRIBUTE])
    this[NORMAL_OPTION].forEach( (style)=>  style())
    this.setAttribute(STATE_ATTRIBUTE, this.dataAttributes[STATE_ATTRIBUTE])
}
}

const regularDropdown  = 'regular-dropdown'
if (customElements.get(regularDropdown) === undefined) customElements.define(regularDropdown, class extends regDropdown {});

export const regularDropdownComponent = function ()
{
    if (!this.getElementsByTagName('select').length>0)  console.log("WARNING FOR THIS COMPONENT AT LEAST ONE CHILD NODE SHOULD HAVE SELECT TAG")

    //Parsing Options List
    const options = this.getElementsByTagName('select')[0].getElementsByTagName('option')
    const optionsObject = parsingOptions(options)
    if (this.getElementsByTagName('select')[0].hasAttribute('name')) this.dataAttributes[TITLE_ATTRIBUTE] = this.getElementsByTagName('select')[0].getAttribute('name')
    this.dataAttributes[OPTIONS_ATTRIBUTE] = optionsObject

    const customDropdown = document.createElement(regularDropdown)
    customDropdown.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(this.dataAttributes))
    customDropdown.appendChild(this.getElementsByTagName('select')[0])
   
    const observerDropdown = observeDropdown(customDropdown)
    observerDropdown.observe(customDropdown, { attributes: true })
    while (this.hasChildNodes()) 
    {
            this.removeChild(this.firstChild);
    }
    return customDropdown;
}


