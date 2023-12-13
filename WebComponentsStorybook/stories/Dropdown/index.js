import { COMPONENT_DROPDOWN, CONTENT_TO_APPEND } from "../index.js";
import { ATTRIBUTES, COLOR_ATTRIBUTE , SIZE_ATTRIBUTE, TITLE_ATTRIBUTE, STATE_ATTRIBUTE, ERROR_MESSAGE_ATTRIBUTE} from "../../../WebComponents/Dropdown/constants.js";
import React from 'react'


export const createComponentDropdown = (props) => {
    const [output, setOutput] = React.useState(<></>)
    React.useEffect(()=>{ 
    const dropdownElement = document.createElement(COMPONENT_DROPDOWN)
      const parser = new DOMParser();
      const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
      const children = [...doc.body.children]
      dropdownElement.appendChild(children[0])
    ATTRIBUTES.forEach((ATTRIBUTE)=> {
      if (props.hasOwnProperty(ATTRIBUTE.attributeName)) dropdownElement.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
    })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${dropdownElement.outerHTML}`}} style={{display:"contents"}}></div>)
  },[props[COLOR_ATTRIBUTE],
      props[SIZE_ATTRIBUTE],
      props[TITLE_ATTRIBUTE],
      props[STATE_ATTRIBUTE],
      props[CONTENT_TO_APPEND],
      props[ERROR_MESSAGE_ATTRIBUTE]])
        
    return <>{output}</>;
}