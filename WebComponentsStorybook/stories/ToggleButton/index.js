import { CONTENT_TO_APPEND, COMPONENT_TOGGLE_BUTTON } from "../index.js";
import { ATTRIBUTES,
        SIZE_ATTRIBUTE, 
        COLOR_ATTRIBUTE, 
        STATE_ATTRIBUTE, 
        ICON_SELECTION_ATTRIBUTE_OFF,
        ICON_SELECTION_ATTRIBUTE_ON } from "../../../WebComponents/ToggleButton/constants.js";
import React from 'react'
export const createComponentToggleButton = (props) => {
    const [output, setOutput] = React.useState(<></>) 

    React.useEffect(()=>{
      const toggleButton= document.createElement(COMPONENT_TOGGLE_BUTTON);
      const parser = new DOMParser();
      const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
      const children = [...doc.body.children]
      toggleButton.appendChild(children[0])
      ATTRIBUTES.forEach((ATTRIBUTE)=> {
        if (props.hasOwnProperty(ATTRIBUTE.attributeName)) toggleButton.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
        
      })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${toggleButton.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[CONTENT_TO_APPEND],
       props[COLOR_ATTRIBUTE],
       props[SIZE_ATTRIBUTE],
       props[STATE_ATTRIBUTE],
       props[ICON_SELECTION_ATTRIBUTE_OFF],
       props[ICON_SELECTION_ATTRIBUTE_ON],])
       return <>{output}</>;
  }