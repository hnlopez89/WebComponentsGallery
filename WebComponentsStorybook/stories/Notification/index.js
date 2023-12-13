import { CONTENT_TO_APPEND, COMPONENT_NOTIFICATION } from "../index.js";
import { ATTRIBUTES,
         COLOR_ATTRIBUTE,
         SIZE_ATTRIBUTE, 
         STATE_ATTRIBUTE,
        CLOSE_ATTRIBUTE,
        ICON_SELECTION_ATTRIBUTE,
        AUTODISMISS_LENGTH_ATTRIBUTE} from "../../../WebComponents/Notification/constants.js";
import React from 'react'


export const createComponentNotification = (props) => {
    const [output, setOutput] = React.useState(<></>)    
    React.useEffect(()=>{
      const notification = document.createElement(COMPONENT_NOTIFICATION)
      const parser = new DOMParser();
      const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
      const children = [...doc.body.children]
      children.forEach(child =>
        notification.appendChild(child)
      )
      ATTRIBUTES.forEach((ATTRIBUTE)=> {
        if (props.hasOwnProperty(ATTRIBUTE.attributeName)) notification.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
      })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${notification.outerHTML}`}} style={{display:"contents"}}></div>)
      
    },[props[CONTENT_TO_APPEND],
    props[COLOR_ATTRIBUTE],
    props[SIZE_ATTRIBUTE],
    props[STATE_ATTRIBUTE],
    props[CLOSE_ATTRIBUTE],
    props[ICON_SELECTION_ATTRIBUTE],
    props[AUTODISMISS_LENGTH_ATTRIBUTE]
    ])
            
    return <>{output}</>;
}