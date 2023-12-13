import { CONTENT_TO_APPEND, COMPONENT_TOGGLE } from "../index.js";
import { ATTRIBUTES,
          STATE_ATTRIBUTE,
         COLOR_ATTRIBUTE,
         ANIMATION_DURATION_ATTRIBUTE,
          WIDTH_ATTRIBUTE } from "../../../WebComponents/ToggleSwitch/constants.js";
import React from 'react'
export const createComponentToggleSwitch = (props) => {
    const [output, setOutput] = React.useState(<></>) 
    
    


    React.useEffect(()=>{
      const toggleSwitch = document.createElement(COMPONENT_TOGGLE);
      const parser = new DOMParser();
      const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
      const children = [...doc.body.children]
      toggleSwitch.appendChild(children[0])
      ATTRIBUTES.forEach((ATTRIBUTE)=> {
        if (props.hasOwnProperty(ATTRIBUTE.attributeName)) toggleSwitch.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
        
      })
        setOutput(<div dangerouslySetInnerHTML={{__html: `${toggleSwitch.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[CONTENT_TO_APPEND],
       props[COLOR_ATTRIBUTE],
       props[STATE_ATTRIBUTE],
       props[WIDTH_ATTRIBUTE],
       props[ANIMATION_DURATION_ATTRIBUTE],])
       return <>{output}</>;
  }