import { CONTENT_TO_APPEND, COMPONENT_TEXT_INPUT } from "../index.js";
import { ATTRIBUTES,
         COLOR_ATTRIBUTE,
         SIZE_ATTRIBUTE, 
         ICON_SELECTION_ATTRIBUTE,
         ERROR_MESSAGE_ATTRIBUTE,
         DESCRIPTOR_ATTRIBUTE,
         TITLE_ATTRIBUTE,
         FORM_WIDTH_ATTRIBUTE } from "../../../WebComponents/TextInput/constants.js";
import { FORM_VALUE_ATTRIBUTE, STATE_ATTRIBUTE } from "../../../WebComponents/TextInput/constants";
import React from 'react'

const idTextInput = "textInputComponentId"
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
    if (value === "error" || value==="no") mutation.target.setAttribute(STATE_ATTRIBUTE,"error")
    else if (value==="validated" || value==="yes"|| value==="nop" ) mutation.target.setAttribute(STATE_ATTRIBUTE,"validated")
    else if (state !== null)  mutation.target.setAttribute(STATE_ATTRIBUTE,"active")
  }
  }

export const createComponentTextInput = (props) => {
    const [output, setOutput] = React.useState(<></>)    
    React.useEffect(()=>{
      const textInput = document.createElement(COMPONENT_TEXT_INPUT)
      textInput.setAttribute("id",idTextInput)
      const parser = new DOMParser();
      const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
      const children = [...doc.body.children]
      textInput.appendChild(children[0])
  
      ATTRIBUTES.forEach((ATTRIBUTE)=> {
        if (props.hasOwnProperty(ATTRIBUTE.attributeName)) textInput.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
      })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${textInput.outerHTML}`}} style={{display:"contents"}}></div>)
      
    },[props[CONTENT_TO_APPEND],
       props[COLOR_ATTRIBUTE],
       props[SIZE_ATTRIBUTE],
       props[ICON_SELECTION_ATTRIBUTE],
       props[ERROR_MESSAGE_ATTRIBUTE],
       props[DESCRIPTOR_ATTRIBUTE],
       props[TITLE_ATTRIBUTE],
       props[FORM_WIDTH_ATTRIBUTE],
       props[STATE_ATTRIBUTE],
      ])
    
      React.useEffect(()=>{
        const observer = new MutationObserver(mutationCallback)
        document.getElementById(idTextInput) && observer.observe(document.getElementById(idTextInput), { attributes: true })
      },[output])

        
    return <>{output}</>;
}