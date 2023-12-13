import { CONTENT_TO_APPEND, COMPONENT_BUTTONS_GROUP } from "../index.js";
import { ATTRIBUTES,COLOR_ATTRIBUTE, SIZE_ATTRIBUTE, WIDTH_ATTRIBUTE } from "../../../WebComponents/ButtonGroup/constants.js";
import React from 'react'


export const createComponentGroupButton = (props) => {
    const [output, setOutput] = React.useState(<></>) 
    React.useEffect(()=>{
      const btn= document.createElement(COMPONENT_BUTTONS_GROUP);
      const parser = new DOMParser();
      const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
      const children = [...doc.body.children]
      btn.append(...children)
      ATTRIBUTES.forEach((ATTRIBUTE)=> {
        if (props.hasOwnProperty(ATTRIBUTE.attributeName)) btn.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
        
      })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${btn.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[CONTENT_TO_APPEND],
       props[COLOR_ATTRIBUTE],
       props[SIZE_ATTRIBUTE],
       props[WIDTH_ATTRIBUTE]])
       return <>{output}</>;
  }