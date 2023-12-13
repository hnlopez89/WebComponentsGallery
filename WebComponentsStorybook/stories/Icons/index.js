import { ICON } from "../index.js";
import { ICON_ATTRIBUTES,ICON_SIZE_ATTRIBUTE, ICON_COLOR_ATTRIBUTE, ICON_SELECTION_ATTRIBUTE } from "../../../WebComponents/Icons/constants.js";
import React from 'react'
export const createComponentIcon = (props) => {
    const [output, setOutput] = React.useState(<></>)
    
    
    React.useEffect(()=>{
      const icon = document.createElement(ICON);
 
    ICON_ATTRIBUTES.forEach((ATTRIBUTE)=> {
      if (props.hasOwnProperty(ATTRIBUTE.attributeName)) icon.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
      
    })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${icon.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[ICON_SIZE_ATTRIBUTE],
       props[ICON_COLOR_ATTRIBUTE],
       props[ICON_SELECTION_ATTRIBUTE],])
    return <>{output}</>;
  }