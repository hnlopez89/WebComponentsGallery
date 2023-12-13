import {CONTAINER_SLOT_WRAPPER,
        WRAPPER_COMPONENT,
        SLIDER_COMPONENT,
        RANGE_THUMB, 
        SELECTED_TRACK_COLOR,
        NOT_SELECTED_TRACK_COLOR,
        HOVER_EVENT} from "../constants.js"
import { processStyle, setStyle,objectDestructuredEvent, } from "../styles/index.js"
import { DEFAULT_EVENT, EVENTS_OF_COMPONENT } from "../constants.js"
import { COPY_ATTRIBUTES_SIMPLE_LABEL } from "./constants.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {convertObjectToStyleString} from "../../commonMethodsAndConstants/Styles/commonMethods.js"

//This function updates the color of the track of the range slider based on the value selected
function updateColor ()
{           
    const valPercent = (this.sliderElement.valueAsNumber  - (!!this.sliderElement.min ? parseInt(this.sliderElement.min): 0)) / 
                        ((!!this.sliderElement.max ? parseInt(this.sliderElement.max): 100) - (!!this.sliderElement.min ? parseInt(this.sliderElement.min): 0));
      this.sliderElement.style.backgroundImage = `linear-gradient(to right,${this.styles[SELECTED_TRACK_COLOR]} 0% ${100 * valPercent}%,${this.styles[NOT_SELECTED_TRACK_COLOR]} ${100 * valPercent}%)`;
};

//Input listener to add. Updates color, and sets value for the input in the shadow Web Component and in the used slot for tracking events.
function inputChangesListener (event)  {
    updateColor.bind(this)()
    this.sliderElement.setAttribute("value",event.target.value)
    this.querySelector('input[type=range]').setAttribute("value",event.target.value)
}
export const simpleSliderNoLabel = function ()
{
    this.styles = setStyle(this.dataAttributes[STYLE_KEY])

    //Creation of all components
    const stylesheet = document.createElement('style')
    const stylesProccessedSlider = objectDestructuredEvent(this.styles[SLIDER_COMPONENT])
    const stylesProccessedRange = objectDestructuredEvent(this.styles[RANGE_THUMB])
    const classSlider = `* {-webkit-tap-highlight-color: transparent;-webkit-appearance: none;}\n.slider {\n${convertObjectToStyleString(stylesProccessedSlider[DEFAULT_EVENT])}\n}\n.slider:hover {\n${convertObjectToStyleString(stylesProccessedSlider[HOVER_EVENT])}\n}\n.slider::-webkit-slider-thumb {\n${convertObjectToStyleString(stylesProccessedRange[DEFAULT_EVENT])}\n}` 

    const slotWrapper = document.createElement('div')
    const stylesProccessedSlot = processStyle(slotWrapper,this.styles[CONTAINER_SLOT_WRAPPER])
   
    const slot = document.createElement('slot')

    const wrapper = document.createElement('div')
    const stylesProccessedWrapper = processStyle(wrapper,this.styles[WRAPPER_COMPONENT])

    this.sliderElement = document.createElement('input')
    COPY_ATTRIBUTES_SIMPLE_LABEL.bind(this)(this.sliderElement)
 
    //Adding some behaviour 
    this.sliderElement.addEventListener('input',inputChangesListener.bind(this) );

    //Establishing structure    
    this.shadow.appendChild(stylesheet)
        stylesheet.appendChild(document.createTextNode(classSlider));
    this.shadow.appendChild(slotWrapper)
            slotWrapper.appendChild(slot)
    this.shadow.appendChild(wrapper)
            wrapper.appendChild(this.sliderElement)

    //Adding default styles for the html elements 
    stylesProccessedSlot[DEFAULT_EVENT].forEach(element => element());
    stylesProccessedWrapper[DEFAULT_EVENT].forEach(element => element());
    updateColor.bind(this)();
}


