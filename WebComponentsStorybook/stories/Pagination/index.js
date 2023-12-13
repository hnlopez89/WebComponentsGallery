import { CONTENT_TO_APPEND, COMPONENT_PAGINATION } from "../index.js";
import { ATTRIBUTES, COLOR_ATTRIBUTE, MODE_ATTRIBUTE } from "../../../WebComponents/Pagination/constants.js";
import React from 'react'
export const createComponentPagination = (props) => {
    const [output, setOutput] = React.useState(<></>) 
    
    React.useEffect(()=>{
      const Pagination= document.createElement(COMPONENT_PAGINATION);
      const parser = new DOMParser();
      const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
      const children = [...doc.body.children]
      Pagination.append(...children)
      ATTRIBUTES.forEach((ATTRIBUTE)=> {
        if (props.hasOwnProperty(ATTRIBUTE.attributeName)) Pagination.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
        
      })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${Pagination.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[CONTENT_TO_APPEND],
       props[COLOR_ATTRIBUTE],
       props[MODE_ATTRIBUTE]])
       return <>{output}</>;
  }