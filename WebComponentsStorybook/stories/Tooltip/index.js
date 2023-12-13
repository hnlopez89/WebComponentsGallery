
import {ATTRIBUTES,COLOR_ATTRIBUTE,
        LINES_ATTRIBUTE, 
        POSITION_ATTRIBUTE,
        ALIGNMENT_ATTRIBUTE,
        BUTTON_NUMBER_ATTRIBUTE
        } from "../../../WebComponents/Tooltip/constants.js"
import {CONTENT_TO_APPEND, 
        COMPONENT_TOOLTIP} from '../index.js';
import React from 'react'
export const createComponentTooltipButton = (props) => {
    const [output, setOutput] = React.useState(<></>) 
    
    React.useEffect(()=>{
      const tooltipElement = document.createElement(COMPONENT_TOOLTIP)
    var parser = new DOMParser();
    var doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
    var children = [...doc.body.children]
    children.forEach(child=>{
      tooltipElement.appendChild(child)
      }
      )
    ATTRIBUTES.forEach((ATTRIBUTE)=> {
      if (props.hasOwnProperty(ATTRIBUTE.attributeName)) tooltipElement.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
    })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${tooltipElement.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[COLOR_ATTRIBUTE],
       props[LINES_ATTRIBUTE],
       props[POSITION_ATTRIBUTE],
       props[ALIGNMENT_ATTRIBUTE],
       props[BUTTON_NUMBER_ATTRIBUTE],
       props[CONTENT_TO_APPEND],
      ])
       return <>{output}</>;
}