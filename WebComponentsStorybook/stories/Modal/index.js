
import {ATTRIBUTES,
        MODE_ATTRIBUTE} from "../../../WebComponents/Modal/constants.js"
import {CONTENT_TO_APPEND, 
        COMPONENT_MODAL} from '../index.js';
import React from 'react'
export const createComponentModal = (props) => {
    const [output, setOutput] = React.useState(<></>) 
    
    React.useEffect(()=>{
      const ModalElement = document.createElement(COMPONENT_MODAL)
    ModalElement.innerHTML = props[CONTENT_TO_APPEND]
    ATTRIBUTES.forEach((ATTRIBUTE)=> {
      if (props.hasOwnProperty(ATTRIBUTE.attributeName)) ModalElement.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
    })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${ModalElement.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[CONTENT_TO_APPEND],
       props[MODE_ATTRIBUTE]])
       return <>{output}
                <h1 style={{fontFamily: "Roboto, Sans-Serif"}}>Hello! This is what you see once modal is closed</h1>
              </>;
}