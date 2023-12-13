import { DEFAULT_EVENT } from "../constants.js"
import { processStyle } from "../styles/index.js"
export const COPY_ATTRIBUTES_SIMPLE_LABEL = function (sliderElement) {
    this.querySelector('input[type=range]').hasAttribute("value") && sliderElement.setAttribute("value",this.querySelector('input[type=range]').getAttribute("value"))
    this.querySelector('input[type=range]').hasAttribute("min") && sliderElement.setAttribute("min",this.querySelector('input[type=range]').getAttribute("min"))
    this.querySelector('input[type=range]').hasAttribute("max") && sliderElement.setAttribute("max",this.querySelector('input[type=range]').getAttribute("max"))
    this.querySelector('input[type=range]').hasAttribute("step") && sliderElement.setAttribute("step",this.querySelector('input[type=range]').getAttribute("step"))
    sliderElement.setAttribute("type","range")
    sliderElement.setAttribute("class","slider")
}

export const CALCULUS_TWO_SLIDERS = function ()
{
    
    this.minAbs = this.querySelector('input[type=range]').hasAttribute("min") ? Number(this.querySelector('input[type=range]').getAttribute("min")): 0;
    this.maxAbs =  this.querySelector('input[type=range]').hasAttribute("max") ? Number(this.querySelector('input[type=range]').getAttribute("max")): 100;
    this.step = this.querySelector('input[type=range]').hasAttribute("step")? Number(this.querySelector('input[type=range]').getAttribute("step")): 1;
    const Nsteps = Math.floor((this.maxAbs - this.minAbs)/this.step) - 1
    
    var min1Slider, max1Slider, min2Slider, max2Slider
    if (Nsteps%2 === 0)
    {
  

        min1Slider = this.minAbs
        max1Slider = this.minAbs + (Math.floor(Nsteps/2) + 1)* this.step
        min2Slider = max1Slider 
        max2Slider = max1Slider +  Math.floor(Nsteps/2) *  this.step
    }
    else
    {

        min1Slider = this.minAbs
        max1Slider = this.minAbs + (Math.floor(Nsteps/2) + 1) * this.step
        min2Slider = max1Slider 
        max2Slider = max1Slider + this.step +(Math.floor(Nsteps/2)) *  this.step
    }
    this.slider1 = document.createElement('input')
    this.slider1.setAttribute("type","range")
    this.slider1.setAttribute("class","slider slider1")
    this.slider1.setAttribute("min",min1Slider)
    this.slider1.setAttribute("max",max1Slider)
    this.slider1.setAttribute("step",this.step)
    this.slider1.setAttribute("value",min1Slider)

    this.slider2 = document.createElement('input')
    this.slider2.setAttribute("type","range")
    this.slider2.setAttribute("class","slider slider2")
    this.slider2.setAttribute("min",min2Slider)
    this.slider2.setAttribute("max",max2Slider)
    this.slider2.setAttribute("step",this.step)
    this.slider2.setAttribute("value",max2Slider)


    return;
}

export const AssignWidthSlider = function () {
    
    const longSlider1 = this.slider1.max - this.slider1.min
    const longSlider2 = this.slider2.max - this.slider2.min
    const longAbs =(longSlider1 + longSlider2)
    this.sliderWrapper1.style.width = `${100*(longSlider1/longAbs)}%`
    this.sliderWrapper2.style.width = `${100*(longSlider2/longAbs)}%`
    

}
export function createComponentG (nameElement) 
{
    const element = document.createElement('div')
    processStyle(element,this.styles[nameElement])[DEFAULT_EVENT].forEach(element => element());
    return element
}