import { CONTENT_TO_APPEND } from "../index.js"
import {ATTRIBUTES,
        COLOR_ATTRIBUTE,
        SIZE_ATTRIBUTE,
        STATE_ATTRIBUTE,
        ENABLE_ATTRIBUTE,
        LABEL_ATTRIBUTE,
        ERROR_MESSAGE_ATTRIBUTE} from "../../../WebComponents/Checkbox/constants.js"
import {COMPONENT_CHECKBOX} from "../index.js"
import React from 'react'
export const createComponentCheckBox = (props) => {
  const [output, setOutput] = React.useState(<></>)  
    React.useEffect(()=>{
      const checklistElement = document.createElement(COMPONENT_CHECKBOX)

    const parser = new DOMParser();
	  const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
    const children = [...doc.body.children]
    checklistElement.appendChild(children[0])
    checklistElement.appendChild(children[1])

    ATTRIBUTES.forEach((ATTRIBUTE)=> {
      if (props.hasOwnProperty(ATTRIBUTE.attributeName)) checklistElement.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
    })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${checklistElement.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[CONTENT_TO_APPEND],
       props[STATE_ATTRIBUTE],
       props[SIZE_ATTRIBUTE], 
       props[COLOR_ATTRIBUTE], 
       props[ENABLE_ATTRIBUTE],
       props[LABEL_ATTRIBUTE],
       props[ERROR_MESSAGE_ATTRIBUTE],])
    return <>{output}</>;
}
