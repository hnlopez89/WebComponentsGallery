
import {ATTRIBUTES,COLOR_ATTRIBUTE,THEME_ATTRIBUTE} from "../../../WebComponents/Divider/constants.js"
import {COMPONENT_DIVIDER} from '../index.js';
import React from 'react'
export const createComponentDivider = (props) => {
    const [output, setOutput] = React.useState(<></>) 
    
    React.useEffect(()=>{
      const dividerElement = document.createElement(COMPONENT_DIVIDER)
    ATTRIBUTES.forEach((ATTRIBUTE)=> {
      if (props.hasOwnProperty(ATTRIBUTE.attributeName)) dividerElement.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
    })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${dividerElement.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[COLOR_ATTRIBUTE],props[THEME_ATTRIBUTE]])
    return <>{output}</>;
}