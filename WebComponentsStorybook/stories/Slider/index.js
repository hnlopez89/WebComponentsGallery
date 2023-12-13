
import {ATTRIBUTES,
        COLOR_ATTRIBUTE, 
        TEMPLATE_ATTRIBUTE,
        MIN_LABEL_ATTRIBUTE,
        MAX_LABEL_ATTRIBUTE,
        UNIT_ATTRIBUTE} from "../../../WebComponents/Slider/constants.js"
import {CONTENT_TO_APPEND, 
        COMPONENT_SLIDER} from '../index.js';
import React from 'react'
export const createComponentSlider = (props) => {
    const [output, setOutput] = React.useState(<></>) 
    
    React.useEffect(()=>{
      const sliderElement = document.createElement(COMPONENT_SLIDER)
    var parser = new DOMParser();
	var doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
    var children = [...doc.body.children]
    sliderElement.appendChild(children[0])
    ATTRIBUTES.forEach((ATTRIBUTE)=> {
      if (props.hasOwnProperty(ATTRIBUTE.attributeName)) sliderElement.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
    })
    if (props[MIN_LABEL_ATTRIBUTE]) sliderElement.setAttribute(MIN_LABEL_ATTRIBUTE,props[MIN_LABEL_ATTRIBUTE])
    if (props[MAX_LABEL_ATTRIBUTE]) sliderElement.setAttribute(MAX_LABEL_ATTRIBUTE,props[MAX_LABEL_ATTRIBUTE])
    if (props[UNIT_ATTRIBUTE]) sliderElement.setAttribute(UNIT_ATTRIBUTE,props[UNIT_ATTRIBUTE])
      setOutput(<div dangerouslySetInnerHTML={{__html: `${sliderElement.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[CONTENT_TO_APPEND],
       props[COLOR_ATTRIBUTE],
        props[TEMPLATE_ATTRIBUTE],
        props[MIN_LABEL_ATTRIBUTE],
        props[MAX_LABEL_ATTRIBUTE],
        props[UNIT_ATTRIBUTE]])
       return <>{output}</>;
}