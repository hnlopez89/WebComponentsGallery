import { CONTENT_TO_APPEND, COMPONENT_TAGS } from "../index.js";
import { ATTRIBUTES, COLOR_ATTRIBUTE,
         ICON_ATTRIBUTE,
         ICON_SELECTION_ATTRIBUTE, 
         POSITION_ICON_ATTRIBUTE,
         CLOSE_ATTRIBUTE} from "../../../WebComponents/Tags/constants.js";
import React from 'react'
export const createComponentTags = (props) => {
    const [output, setOutput] = React.useState(<></>) 
    
    React.useEffect(()=>{
      const tag = document.createElement(COMPONENT_TAGS);
      const parser = new DOMParser();
      const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
      const children = [...doc.body.children]
      tag.appendChild(children[0])
      ATTRIBUTES.forEach((ATTRIBUTE)=> {
        if (props.hasOwnProperty(ATTRIBUTE.attributeName)) tag.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
        
      })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${tag.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[CONTENT_TO_APPEND],
       props[COLOR_ATTRIBUTE],
       props[ICON_SELECTION_ATTRIBUTE],
       props[POSITION_ICON_ATTRIBUTE],
       props[CLOSE_ATTRIBUTE]])
       return <>{output}</>;
  }