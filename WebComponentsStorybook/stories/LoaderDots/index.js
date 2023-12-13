import { COMPONENT_LOADERDOTS } from "../index.js";
import {ATTRIBUTES, THEME_ATTRIBUTE,SIZE_ATTRIBUTE, TYPE_DETAIL_ATTRIBUTE } from "../../../WebComponents/LoaderDots/constants.js";
import React from 'react'
export const createComponentLoaderDots = (props) => {
    const [output, setOutput] = React.useState(<></>)
    
    
    React.useEffect(()=>{
      const loaderDots = document.createElement(COMPONENT_LOADERDOTS);
 
      ATTRIBUTES.forEach((ATTRIBUTE)=> {
      if (props.hasOwnProperty(ATTRIBUTE.attributeName)) loaderDots.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
      
    })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${loaderDots.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[THEME_ATTRIBUTE],
       props[SIZE_ATTRIBUTE],
       props[TYPE_DETAIL_ATTRIBUTE],])
    return <>{output}</>;
  }