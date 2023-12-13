import { CONTENT_TO_APPEND, COMPONENT_TEXT_AREA } from "../index.js";
import { ATTRIBUTES, FORM_VALUE_ATTRIBUTE, STATE_ATTRIBUTE, COLOR_ATTRIBUTE,
          SIZE_ATTRIBUTE, 
          DESCRIPTOR_ATTRIBUTE,
          TITLE_ATTRIBUTE,
          FORM_WIDTH_ATTRIBUTE, 
          COMPLETED_OPTION} from "../../../WebComponents/Textarea/constants";
import React from 'react'
 const idTextArea = "textAreaComponentId"
 const mutationCallback = (mutationsList) => {
      for (const mutation of mutationsList) {
        
        if (
          mutation.type !== "attributes" ||
          mutation.attributeName !== FORM_VALUE_ATTRIBUTE
        ) {
          return
        }
        var value = mutation.target.getAttribute(FORM_VALUE_ATTRIBUTE)
        var state = mutation.target.getAttribute(STATE_ATTRIBUTE)
        if (value==="validated" || value==="yes"|| value==="nop" ) mutation.target.setAttribute(STATE_ATTRIBUTE,"completed")
        else if (state !== null)  mutation.target.setAttribute(STATE_ATTRIBUTE,"active")
      }
      }
export const createComponentTextArea = (props) => {
    const [output, setOutput] = React.useState(<></>)    
    React.useEffect(()=>{

          const textArea = document.createElement(COMPONENT_TEXT_AREA)
          textArea.setAttribute("id",idTextArea)   
          const parser = new DOMParser();
          const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
          const children = [...doc.body.children]
          textArea.appendChild(children[0])
          ATTRIBUTES.forEach((ATTRIBUTE)=> {
            if (props.hasOwnProperty(ATTRIBUTE.attributeName)) textArea.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
          })
          setOutput(<div dangerouslySetInnerHTML={{__html: `${textArea.outerHTML}`}} style={{display:"contents"}}></div>)
      
    },[props[CONTENT_TO_APPEND],
       props[COLOR_ATTRIBUTE],
       props[SIZE_ATTRIBUTE],
       props[DESCRIPTOR_ATTRIBUTE],
       props[TITLE_ATTRIBUTE],
       props[FORM_WIDTH_ATTRIBUTE],
       props[STATE_ATTRIBUTE]
      ])
      React.useEffect(()=>{
        const observer = new MutationObserver(mutationCallback)
        document.getElementById(idTextArea) && observer.observe(document.getElementById(idTextArea), { attributes: true })
      },[output])
       return <>{output}</>;
}