import { COMPONENT_LOADER_LOGO } from "../index.js";
import {ATTRIBUTES, SIZE_ATTRIBUTE,  } from "../../../WebComponents/LoaderLogo/constants.js";
import React from 'react'
export const createComponentLoaderLogo = (props) => {
    const [output, setOutput] = React.useState(<></>)
    const loaderLogo = document.createElement(COMPONENT_LOADER_LOGO);

    React.useEffect(()=>{
      
      ATTRIBUTES.forEach((ATTRIBUTE)=> {
        if (props.hasOwnProperty(ATTRIBUTE.attributeName)) loaderLogo.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
    })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${loaderLogo.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[SIZE_ATTRIBUTE]])
    return <>{output}</>;
  }