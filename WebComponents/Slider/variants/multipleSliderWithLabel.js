import {CONTAINER_SLOT_WRAPPER,
        WRAPPER_COMPONENT,
        SLIDER_WRAPPER_COMPONENT,
        SLIDER_N_WRAPPER_COMPONENT,
        SLIDER_COMPONENT,
        RANGE_THUMB, 
        SELECTED_TRACK_COLOR,
        NOT_SELECTED_TRACK_COLOR,
        HOVER_EVENT,
        BUBBLE_LABEL,
        LABEL_1_MULTIPLE,
        LABEL_2_MULTIPLE, 
        LABEL_WRAPPER_COMPONENT, 
        MIN_VALUE_LABEL, 
        MAX_VALUE_LABEL} from "../constants.js"
import { setStyle,objectDestructuredEvent, } from "../styles/index.js"
import { DEFAULT_EVENT, UNIT_ATTRIBUTE, MIN_LABEL_ATTRIBUTE, MAX_LABEL_ATTRIBUTE } from "../constants.js"
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

// This function examines how to positionate the bubble labels in the slider. First examines if slider 1 is being outside the left border, then if the slider 2 is outside the right border of the whole slider. Finally it compares if the two bubble labels are intersected, and if nothing of this happens positionate them normally.
function updatePositionBubbleLabel () 
{
    const widthComponent = this.sliderWrapper1.parentElement.offsetWidth

    const valPercent1 = (this.slider1.valueAsNumber  - (this.slider1.min)) / ((this.slider1.max) - (this.slider1.min));
    const valPercent2 = (this.slider2.valueAsNumber - (this.slider2.min)) / ((this.slider2.max) - (this.slider2.min));

    const bubbleLabel1Width = this.bubbleLabel1.offsetWidth
    const bubbleLabel2Width = this.bubbleLabel2.offsetWidth
    if (!this.bubble1LeftBorder) this.bubble1LeftBorder = valPercent1 * this.sliderWrapper1.offsetWidth - bubbleLabel1Width * valPercent1
    if (!this.bubble1RightBorder) this.bubble1RightBorder = this.bubble1LeftBorder + bubbleLabel1Width
    if (!this.bubble2LeftBorder) this.bubble2LeftBorder = valPercent2 * this.sliderWrapper2.offsetWidth - bubbleLabel2Width * valPercent2 + this.sliderWrapper1.offsetWidth
    if (!this.bubble2RightBorder) this.bubble2RightBorder = this.bubble2LeftBorder + bubbleLabel2Width

    const bubble1LeftBorder = valPercent1 * this.sliderWrapper1.offsetWidth - bubbleLabel1Width * valPercent1
    const bubble1RightBorder = bubble1LeftBorder + bubbleLabel1Width
    const bubble2LeftBorder = valPercent2 * this.sliderWrapper2.offsetWidth - bubbleLabel2Width * valPercent2 + this.sliderWrapper1.offsetWidth
    const bubble2RightBorder = bubble2LeftBorder + bubbleLabel2Width


    if (bubble1LeftBorder<0)
    {
        this.bubbleLabel1.style.transform= `translateX(0%)`
        this.bubbleLabel1.style.left = `0px`;
        this.bubble1LeftBorder = 0
        this.bubble1RightBorder = bubbleLabel1Width
        if (this.bubble1RightBorder>bubble2LeftBorder)
        {
            this.bubbleLabel2.style.transform= `translateX(0%)`
            this.bubbleLabel2.style.left = `${-this.sliderWrapper1.offsetWidth+this.bubble1RightBorder}px`;
        }
        else 
        {
            this.bubbleLabel2.style.transform= `translateX(-${valPercent2*100}%)`
            this.bubbleLabel2.style.left = `${valPercent2*100}%`;
        }
    }
    else if (bubble2RightBorder > widthComponent)
    {
        this.bubbleLabel2.style.transform= `translateX(-100%)`
        this.bubbleLabel2.style.left = `100%`;
        this.bubble2LeftBorder = widthComponent - bubbleLabel2Width
        this.bubble2RightBorder = widthComponent

        if (bubble1RightBorder>this.bubble2LeftBorder)
        {
            this.bubbleLabel1.style.transform= `translateX(-100%)`
            this.bubbleLabel1.style.left = `${widthComponent - bubbleLabel2Width}px`;
        }
        else
        {
            this.bubbleLabel1.style.transform= `translateX(-${valPercent1*100}%)`
            this.bubbleLabel1.style.left = `${valPercent1*100}%`;
        }
    }
    else if (bubble1RightBorder>bubble2LeftBorder)
    {
        if (bubble1LeftBorder === 0)
        {
            this.bubbleLabel2.style.transform= `translateX(0%)`
            this.bubbleLabel2.style.left = `${-this.sliderWrapper1.offsetWidth+this.bubble1RightBorder}px`;
        }
        else if (bubble2RightBorder === widthComponent)
        {
            this.bubbleLabel1.style.transform= `translateX(-100%)`
            this.bubbleLabel1.style.left = `${widthComponent - bubbleLabel2Width}px`;
        }
    }
    else{
        this.bubbleLabel1.style.transform= `translateX(-${valPercent1*100}%)`
        this.bubbleLabel1.style.left = `${valPercent1*100}%`;
        this.bubbleLabel2.style.transform= `translateX(-${valPercent2*100}%)`
        this.bubbleLabel2.style.left = `${valPercent2*100}%`;

        this.bubble1LeftBorder = valPercent1 * this.sliderWrapper1.offsetWidth - bubbleLabel1Width * valPercent1
        this.bubble1RightBorder = this.bubble1LeftBorder + bubbleLabel1Width
        this.bubble2LeftBorder = valPercent2 * this.sliderWrapper2.offsetWidth - bubbleLabel2Width * valPercent2 + this.sliderWrapper1.offsetWidth
        this.bubble2RightBorder = this.bubble2LeftBorder + bubbleLabel2Width

        
    }
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
        updatePositionBubbleLabel.bind(this)()
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
        updatePositionBubbleLabel.bind(this)()       
    }
}

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
    updatePositionBubbleLabel.bind(this)()
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
    updatePositionBubbleLabel.bind(this)()
    modifyClassRangeThumb.bind(this)()
    this.slider1.setAttribute("value",event.target.value)
    this.bubbleLabel1.innerText = `${event.target.value}${this.unitLabel}`
    this.querySelector('input[type=range]').setAttribute("value",event.target.value)
    this.querySelector('input[type=range]').setAttribute("data-value-1",event.target.value)
}
function mouseDownListenerSlider1 (event) {
    extendSlider1.bind(this)()
    modifyClassRangeThumb.bind(this)()
}
function listenerInputSlider2(event)  {
    var valueToDisplay = Number(event.target.value)
    if(event.target.value === this.slider1.value) 
    {
        valueToDisplay = Number(event.target.value) + this.step
        this.slider2.value = valueToDisplay
    }
    extendSlider2.bind(this)()
    updateColor.bind(this)(LABEL_2_MULTIPLE)
    updatePositionBubbleLabel.bind(this)()
    modifyClassRangeThumb.bind(this)()
    this.slider2.setAttribute("value",valueToDisplay)
    this.bubbleLabel2.innerText = `${valueToDisplay}${this.unitLabel}`
    this.querySelector('input[type=range]').setAttribute("data-value-2",valueToDisplay)
}
function mouseDownListenerSlider2 (event) {
    extendSlider2.bind(this)()
    modifyClassRangeThumb.bind(this)()
}

export const multipleSliderWithLabel = function ()
{
    //Appending methods to class
    const createComponent = createComponentG.bind(this)
    this.styles = setStyle(this.dataAttributes[STYLE_KEY])
    this.unitLabel = (this.hasAttribute(UNIT_ATTRIBUTE)?` ${this.getAttribute(UNIT_ATTRIBUTE)}`:"")
    //Creation of html elements
    this.stylesheet = document.createElement('style')

    const slotWrapper = createComponent(CONTAINER_SLOT_WRAPPER)
    const slot = document.createElement('slot')
    const wrapper = createComponent(WRAPPER_COMPONENT)
    const sliderWrapper = createComponent(SLIDER_WRAPPER_COMPONENT)
    this.sliderWrapper1 = createComponent(SLIDER_N_WRAPPER_COMPONENT)
    this.sliderWrapper2 = createComponent(SLIDER_N_WRAPPER_COMPONENT)
    CALCULUS_TWO_SLIDERS.bind(this)()
    AssignWidthSlider.bind(this)()
    this.bubbleLabel1 = createComponent(BUBBLE_LABEL)
    this.bubbleLabel1.innerText = this.slider1.valueAsNumber + this.unitLabel
    this.bubbleLabel2 = createComponent(BUBBLE_LABEL)
    this.bubbleLabel2.innerText = this.slider2.valueAsNumber + this.unitLabel
    const labelWrapper = createComponent(LABEL_WRAPPER_COMPONENT)
    const minLabelElement = createComponent(MIN_VALUE_LABEL)
    minLabelElement.innerText = this.getAttribute(MIN_LABEL_ATTRIBUTE)
    const maxLabelElement = createComponent(MAX_VALUE_LABEL)
    maxLabelElement.innerText = this.getAttribute(MAX_LABEL_ATTRIBUTE)
    //Adding behavior
    onVisible(wrapper, onVisibleWrapperCallback.bind(this))
    this.slider1.addEventListener('input', listenerInputSlider1.bind(this));
    this.slider1.addEventListener('mousedown', mouseDownListenerSlider1.bind(this))
    this.slider2.addEventListener('input', listenerInputSlider2.bind(this));
    this.slider2.addEventListener('mousedown', mouseDownListenerSlider2.bind(this))
    window.addEventListener("resize", onVisibleWrapperCallback.bind(this));

    //Building HTML tree
    this.shadow.appendChild(this.stylesheet)
    this.shadow.appendChild(slotWrapper)
        slotWrapper.appendChild(slot)
    this.shadow.appendChild(wrapper)
        wrapper.appendChild(sliderWrapper)
            sliderWrapper.appendChild(this.sliderWrapper1)
                this.sliderWrapper1.appendChild(this.bubbleLabel1)
                this.sliderWrapper1.appendChild(this.slider1)
            sliderWrapper.appendChild(this.sliderWrapper2)
                this.sliderWrapper2.appendChild(this.bubbleLabel2)
                this.sliderWrapper2.appendChild(this.slider2)
        wrapper.appendChild(labelWrapper)
            labelWrapper.appendChild(minLabelElement)
            labelWrapper.appendChild(maxLabelElement)
                
    }


