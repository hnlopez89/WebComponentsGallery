
import {ATTRIBUTES,COLOR_ATTRIBUTE,
        SIZE_ATTRIBUTE, 
        STATE_ATTRIBUTE,
        ENABLE_ATTRIBUTE} from "../../../WebComponents/RadioButton/constants.js"
import {CONTENT_TO_APPEND, 
        COMPONENT_RADIO_BUTTON} from '../index.js';
import React from 'react'
export const createComponentRadioButton = (props) => {
    const [output, setOutput] = React.useState(<></>) 
    
    React.useEffect(()=>{
      const radioButtonElement = document.createElement(COMPONENT_RADIO_BUTTON)
    var parser = new DOMParser();
	var doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
    var children = [...doc.body.children]
    radioButtonElement.appendChild(children[0])
    radioButtonElement.appendChild(children[1])
    ATTRIBUTES.forEach((ATTRIBUTE)=> {
      if (props.hasOwnProperty(ATTRIBUTE.attributeName)) radioButtonElement.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
    })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${radioButtonElement.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[CONTENT_TO_APPEND],
       props[COLOR_ATTRIBUTE],
       props[SIZE_ATTRIBUTE],
       props[STATE_ATTRIBUTE],
       props[ENABLE_ATTRIBUTE]])
       return <>{output}</>;
}