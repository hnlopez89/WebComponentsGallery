
import {UNIT_ATTRIBUTE,
    CONTAINER_SLOT_WRAPPER,
    SLOT_COMPONENT,
    WRAPPER_COMPONENT,
    SLIDER_WRAPPER_COMPONENT,
    SLIDER_COMPONENT,
    RANGE_THUMB, 
    BUBBLE_LABEL,
    SELECTED_TRACK_COLOR,
    NOT_SELECTED_TRACK_COLOR,
    HOVER_EVENT,
    LABEL_WRAPPER_COMPONENT,
    MIN_VALUE_LABEL,
    MAX_VALUE_LABEL,
    MIN_LABEL_ATTRIBUTE,
    MAX_LABEL_ATTRIBUTE} from "../constants.js"
import { setStyle,objectDestructuredEvent, } from "../styles/index.js"
import { DEFAULT_EVENT } from "../constants.js"
import {  COPY_ATTRIBUTES_SIMPLE_LABEL, createComponentG} from "./constants.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {convertObjectToStyleString} from "../../commonMethodsAndConstants/Styles/commonMethods.js"
function updateColor ()
{   
    const valDecimal = (this.sliderElement.valueAsNumber  - (!!this.sliderElement.min ? parseInt(this.sliderElement.min): 0)) / 
                      ((!!this.sliderElement.max ? parseInt(this.sliderElement.max): 100) - (!!this.sliderElement.min ? parseInt(this.sliderElement.min): 0));
    this.sliderElement.style.backgroundImage = `linear-gradient(to right,${this.styles[SELECTED_TRACK_COLOR]} 0% ${100 * valDecimal}%,${this.styles[NOT_SELECTED_TRACK_COLOR]} ${100 * valDecimal}%)`;
    const valPercent = 100 * valDecimal
    this.bubbleLabel.style.transform= `translateX(-${valPercent}%)`
    this.bubbleLabel.style.left = `${valPercent}%`;
};
function inputSliderListener (event)  {
  updateColor.bind(this)()
  this.bubbleLabel.innerText = `${event.target.value}${this.unitLabel}`
  this.sliderElement.setAttribute("value",event.target.value)
  this.querySelector('input[type=range]').setAttribute("value",event.target.value)
}

export const simpleSliderWithLabel = function ()
{
  const createComponent = createComponentG.bind(this)
  this.styles = setStyle(this.dataAttributes[STYLE_KEY])
  this.unitLabel = (this.hasAttribute(UNIT_ATTRIBUTE)?` ${this.getAttribute(UNIT_ATTRIBUTE)}`:"")

  //Creation of all components
  const stylesProccessedSlider = objectDestructuredEvent(this.styles[SLIDER_COMPONENT])
  const stylesProccessedRange = objectDestructuredEvent(this.styles[RANGE_THUMB])
  const classSlider = `* {-webkit-tap-highlight-color: transparent;-webkit-appearance: none;}\n.slider {${convertObjectToStyleString(stylesProccessedSlider[DEFAULT_EVENT])}\n}\n.slider:hover {\n${convertObjectToStyleString(stylesProccessedSlider[HOVER_EVENT])}\n}\n.slider::-webkit-slider-thumb {\n${convertObjectToStyleString(stylesProccessedRange[DEFAULT_EVENT])}\n}` 
  const stylesheet = document.createElement('style')

  const slotWrapper = createComponent(CONTAINER_SLOT_WRAPPER)
  const slot = document.createElement('slot')
  const wrapper = createComponent(WRAPPER_COMPONENT)
  const sliderWrapper = createComponent(SLIDER_WRAPPER_COMPONENT)
  this.bubbleLabel = createComponent(BUBBLE_LABEL)
  this.bubbleLabel.innerText = this.querySelector('input[type=range]').value+this.unitLabel
  this.sliderElement = document.createElement('input')
  COPY_ATTRIBUTES_SIMPLE_LABEL.bind(this)(this.sliderElement)
  const labelWrapper = createComponent(LABEL_WRAPPER_COMPONENT)
  const minLabelElement = createComponent(MIN_VALUE_LABEL)
  minLabelElement.innerText = this.getAttribute(MIN_LABEL_ATTRIBUTE)
  const maxLabelElement = createComponent(MAX_VALUE_LABEL)
  maxLabelElement.innerText = this.getAttribute(MAX_LABEL_ATTRIBUTE)

  //Add some behaviour
  updateColor.bind(this)();
  this.sliderElement.addEventListener('input', inputSliderListener.bind(this));
  //Buil tree structure
  this.shadow.appendChild(stylesheet)
    stylesheet.appendChild(document.createTextNode(classSlider));
  this.shadow.appendChild(slotWrapper)
      slotWrapper.appendChild(slot)
  this.shadow.appendChild(wrapper)
      wrapper.appendChild(sliderWrapper)
        sliderWrapper.appendChild(this.bubbleLabel)
        sliderWrapper.appendChild(this.sliderElement)
      wrapper.appendChild(labelWrapper)
        labelWrapper.appendChild(minLabelElement)
        labelWrapper.appendChild(maxLabelElement)
}


