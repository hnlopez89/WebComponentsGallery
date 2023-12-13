import {COMPONENT_VIDEOPLAYER } from "../index.js";
import { ATTRIBUTES, SIZE_ATTRIBUTE,  ID_YOUTUBE_VIDEO} from "../../../WebComponents/VideoPlayer/constants.js";
import React from 'react'
export const createComponentVideoplayer = (props) => {
 
    

    const [output, setOutput] = React.useState(<></>) 
    
    


    React.useEffect(()=>{
      const videoplayer = document.createElement(COMPONENT_VIDEOPLAYER);
      ATTRIBUTES.forEach((ATTRIBUTE)=> {
        if (props.hasOwnProperty(ATTRIBUTE.attributeName)) videoplayer.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
      })
        setOutput(<div dangerouslySetInnerHTML={{__html: `${videoplayer.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[ID_YOUTUBE_VIDEO],
       props[SIZE_ATTRIBUTE],])
       return <>{output}</>;
  }