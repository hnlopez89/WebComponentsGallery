import { COMPONENT_LOADERBAR } from "../index.js";
import {ATTRIBUTES, THEME_ATTRIBUTE,SIZE_ATTRIBUTE, PROGRESS_STATE_ATTRIBUTE } from "../../../WebComponents/LoaderBar/constants.js";
import React from 'react'
export const createComponentLoaderBar2 = (props) => {
    const [output, setOutput] = React.useState(<></>)
    const loaderBar = document.createElement(COMPONENT_LOADERBAR);
    React.useEffect(()=>{
      
      ATTRIBUTES.forEach((ATTRIBUTE)=> {
        if (props.hasOwnProperty(ATTRIBUTE.attributeName)) loaderBar.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
    })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${loaderBar.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[THEME_ATTRIBUTE],
       props[PROGRESS_STATE_ATTRIBUTE],
       props[SIZE_ATTRIBUTE],
    ])
    return <component-loaderbar   data-size="large" data-theme="light"  data-progress-state={props[PROGRESS_STATE_ATTRIBUTE]}></component-loaderbar>;
  }