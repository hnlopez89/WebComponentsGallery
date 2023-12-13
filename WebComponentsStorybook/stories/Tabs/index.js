import { CONTENT_TO_APPEND, COMPONENT_TABS } from "../index.js";
import { ATTRIBUTES, COLOR_ATTRIBUTE, SIZE_ATTRIBUTE } from "../../../WebComponents/Tabs/constants.js";
import React from 'react'
export const createComponentTabs = (props) => {
    const [output, setOutput] = React.useState(<></>) 
    React.useEffect(()=>{
      const tabs= document.createElement(COMPONENT_TABS);
      const parser = new DOMParser();
      const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
      const children = [...doc.body.children]
      tabs.append(...children)
      ATTRIBUTES.forEach((ATTRIBUTE)=> {
        if (props.hasOwnProperty(ATTRIBUTE.attributeName)) tabs.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
        
      })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${tabs.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[CONTENT_TO_APPEND],
       props[COLOR_ATTRIBUTE],
       props[SIZE_ATTRIBUTE]])
       return <>{output}</>;
  }