import {CONTAINER_SLOT_WRAPPER,
        WRAPPER_COMPONENT,
        SLIDER_WRAPPER_COMPONENT,
        SLIDER_N_WRAPPER_COMPONENT,
        SLIDER_COMPONENT,
        RANGE_THUMB, 
        SELECTED_TRACK_COLOR,
        NOT_SELECTED_TRACK_COLOR,
        LABEL_1_MULTIPLE,
        LABEL_2_MULTIPLE} from "../constants.js"
import {setStyle,objectDestructuredEvent, } from "../styles/index.js"
import { DEFAULT_EVENT,HOVER_EVENT } from "../constants.js"
import { CALCULUS_TWO_SLIDERS, AssignWidthSlider, createComponentG } from "./constants.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {convertObjectToStyleString} from "../../commonMethodsAndConstants/Styles/commonMethods.js"



//Updates the slider's color track that is being changed. 
function updateColor (sliderName)
{           
    const widthComponent = this.sliderWrapper1.parentElement.offsetWidth
    const leftPositionThumb1 = widthComponent * this.slider1.valueAsNumber / (this.maxAbs - this.minAbs)  
    const leftPositionThumb2 =  (widthComponent * this.slider2.valueAsNumber) / (this.maxAbs - this.minAbs)   - this.sliderWrapper1.offsetWidth

    if (sliderName === LABEL_1_MULTIPLE)
    {
                
        this.slider1.style.backgroundImage = `linear-gradient(to right,${this.styles[NOT_SELECTED_TRACK_COLOR]} 0% ${leftPositionThumb1}px,${this.styles[SELECTED_TRACK_COLOR]} ${leftPositionThumb1}px)`;

    }
    else if (sliderName === LABEL_2_MULTIPLE)
    {
        this.slider2.style.backgroundImage = `linear-gradient(to right,${this.styles[SELECTED_TRACK_COLOR]} 0% ${leftPositionThumb2}px,${this.styles[NOT_SELECTED_TRACK_COLOR]} ${leftPositionThumb2}px)`;
    }

};

//This function calculates how the slider thumb (the ball)  has to be positionated based on the whole width. Also calculates how to modify the origin X coordinates value. Also when these slider's thumb are intersected changes its z-index value so one of them is possible to drag across the track. 
function modifyClassRangeThumb () 
{
    const widthComponent = this.sliderWrapper1.parentElement.offsetWidth
    const OriginXThumb1 = - 100 * this.slider1.valueAsNumber / (this.maxAbs - this.minAbs) 
    const OriginXThumb2 = - 100 * this.slider2.valueAsNumber / (this.maxAbs - this.minAbs)
    const leftPositionThumb1 = widthComponent * this.slider1.valueAsNumber / (this.maxAbs - this.minAbs)  
    const leftPositionThumb2 =  (widthComponent * this.slider2.valueAsNumber) / (this.maxAbs - this.minAbs)   - this.sliderWrapper1.offsetWidth

    const Thumb1Style = {}
    Thumb1Style.transform = `translateX(${OriginXThumb1}%)`
    Thumb1Style.left = `${leftPositionThumb1}px`

    const Thumb2Style = {}
    Thumb2Style.transform = `translateX(${OriginXThumb2}%)`
    Thumb2Style.left = `${leftPositionThumb2}px`

    Thumb1Style.zIndex = 1
    Thumb2Style.zIndex = 1
    if((leftPositionThumb2 + this.sliderWrapper1.offsetWidth)-leftPositionThumb1<20 && (leftPositionThumb2 + this.sliderWrapper1.offsetWidth)-leftPositionThumb1>0)
    {
        Thumb1Style.zIndex = 2
        Thumb2Style.zIndex = 1
    }

    if(leftPositionThumb1 === 0)
    {
        Thumb1Style.zIndex = 1
        Thumb2Style.zIndex = 2
    }

    const stylesProccessedSlider = objectDestructuredEvent(this.styles[SLIDER_COMPONENT])
    const stylesProccessedRange = objectDestructuredEvent(this.styles[RANGE_THUMB])
    const stylesProccesedThumb1 = objectDestructuredEvent(Thumb1Style)
    const stylesProccesedThumb2 = objectDestructuredEvent(Thumb2Style)

    const classSlider = `* {-webkit-tap-highlight-color: transparent;-webkit-appearance: none;}\n.slider1::-webkit-slider-thumb {\n${convertObjectToStyleString(stylesProccesedThumb1[DEFAULT_EVENT])}\n}\n.slider2::-webkit-slider-thumb {\n${convertObjectToStyleString(stylesProccesedThumb2[DEFAULT_EVENT])}\n} .slider {\n${convertObjectToStyleString(stylesProccessedSlider[DEFAULT_EVENT])}\n}\n.slider:hover {\n${convertObjectToStyleString(stylesProccessedSlider[HOVER_EVENT])}\n}\n.slider::-webkit-slider-thumb {\n${convertObjectToStyleString(stylesProccessedRange[DEFAULT_EVENT])}\n}`

    while (this.stylesheet.firstChild) {this.stylesheet.removeChild(this.stylesheet.firstChild);}
    this.stylesheet.appendChild(document.createTextNode(classSlider));


}

//This function allows to extend the range of selection of Slider 1 by changing its max value attribute and min value attribute of slider 2. In order to mantain the proportions of colors and width are updated. 
function extendSlider1() {

    if (this.slider1.valueAsNumber === Number(this.slider1.max) && ((this.slider2.valueAsNumber - this.step)> this.slider1.valueAsNumber) && ((this.slider1.valueAsNumber + this.step)< Number(this.slider2.max)))
    {
        this.slider1.setAttribute('max',(this.slider2.valueAsNumber - this.step))
        this.slider2.setAttribute('min',(this.slider2.valueAsNumber - this.step))
        AssignWidthSlider.bind(this)()
        
        updateColor.bind(this)(LABEL_2_MULTIPLE)
        updateColor.bind(this)(LABEL_1_MULTIPLE)

    }
}
//This function allows to extend the range of selection of Slider 2 by changing its min value attribute and max value attribute of slider 1. In order to mantain the proportions of colors and width are updated. 
function extendSlider2() {

    if (this.slider2.valueAsNumber === Number(this.slider2.min) && ((this.slider2.valueAsNumber - this.step)> this.slider1.valueAsNumber) && ((this.slider2.valueAsNumber - this.step)> Number(this.slider1.min)))
    {
        this.slider1.setAttribute('max',this.slider1.valueAsNumber + this.step)
        this.slider2.setAttribute('min',this.slider1.valueAsNumber + this.step)
        AssignWidthSlider.bind(this)()

        updateColor.bind(this)(LABEL_2_MULTIPLE)
        updateColor.bind(this)(LABEL_1_MULTIPLE)
    }
}


//Functions for event Listeners
function onVisible(element, callback) {
new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
      callback(element);
      observer.disconnect();
    }
  });
}).observe(element);
}
function onVisibleWrapperCallback() {
    updateColor.bind(this)(LABEL_1_MULTIPLE);
    updateColor.bind(this)(LABEL_2_MULTIPLE);
    modifyClassRangeThumb.bind(this)()
}

function listenerInputSlider1(event)  {
    var valueToDisplay = Number(event.target.value)
    if(event.target.value === this.slider2.value) 
    {
        valueToDisplay = Number(event.target.value) - this.step
        this.slider1.value = valueToDisplay
    }
    extendSlider1.bind(this)()
    updateColor.bind(this)(LABEL_1_MULTIPLE)
    modifyClassRangeThumb.bind(this)()
    this.slider1.setAttribute("value",event.target.value)
    this.querySelector('input[type=range]').setAttribute("value",event.target.value)
    this.querySelector('input[type=range]').setAttribute("data-value-1",event.target.value)
}

function mouseDownListenerSlider1 (event) {
    extendSlider1.bind(this)()
    modifyClassRangeThumb.bind(this)()
}

function listenerInputSlider2 (event)  {
    var valueToDisplay = Number(event.target.value)
    if(event.target.value === this.slider1.value) 
    {
        valueToDisplay = Number(event.target.value) + this.step
        this.slider2.value = valueToDisplay
    }
    extendSlider2.bind(this)()
    updateColor.bind(this)(LABEL_2_MULTIPLE)
    modifyClassRangeThumb.bind(this)()
    this.slider2.setAttribute("value",valueToDisplay)
    this.querySelector('input[type=range]').setAttribute("data-value-2",valueToDisplay)
}

function mouseDownListenerSlider2(event) {
    extendSlider2.bind(this)()
    modifyClassRangeThumb.bind(this)()
}

export const multipleSliderNoLabel = function ()
{
    //Appending methods to class
    const createComponent = createComponentG.bind(this)
    this.styles = setStyle(this.dataAttributes[STYLE_KEY])
    //Creation of html elements
    this.stylesheet = document.createElement('style')

    const slotWrapper = createComponent(CONTAINER_SLOT_WRAPPER)
    const slot = document.createElement('slot')
    const wrapper = createComponent(WRAPPER_COMPONENT)
    const sliderWrapper = createComponent(SLIDER_WRAPPER_COMPONENT)
    this.sliderWrapper1 = createComponent(SLIDER_N_WRAPPER_COMPONENT)
    this.sliderWrapper2 = createComponent(SLIDER_N_WRAPPER_COMPONENT)
    //Creation of two input sliders that will be stored in variables this.slider1 and this.slider2
    CALCULUS_TWO_SLIDERS.bind(this)()
    AssignWidthSlider.bind(this)()
    //Adding behavior
    onVisible(wrapper, onVisibleWrapperCallback.bind(this))
    this.slider1.addEventListener('input', listenerInputSlider1.bind(this));
    this.slider1.addEventListener('mousedown',mouseDownListenerSlider1.bind(this) )
    this.slider2.addEventListener('input', listenerInputSlider2.bind(this));
    this.slider2.addEventListener('mousedown',mouseDownListenerSlider2.bind(this))
    window.addEventListener("resize",onVisibleWrapperCallback.bind(this));

    //Building HTML tree
    this.shadow.appendChild(this.stylesheet)
    this.shadow.appendChild(slotWrapper)
        slotWrapper.appendChild(slot)
    this.shadow.appendChild(wrapper)
        wrapper.appendChild(sliderWrapper)
            sliderWrapper.appendChild(this.sliderWrapper1)
                this.sliderWrapper1.appendChild(this.slider1)
            sliderWrapper.appendChild(this.sliderWrapper2)
                this.sliderWrapper2.appendChild(this.slider2)        
}


