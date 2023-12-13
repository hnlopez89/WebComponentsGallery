import { CONTENT_TO_APPEND, COMPONENT_BUTTON } from "../index.js";
import { ATTRIBUTES,HIERARCHY_ATTRIBUTE,
  SIZE_ATTRIBUTE, 
  COLOR_ATTRIBUTE, 
  THEME_ATTRIBUTE,
  STATE_ATTRIBUTE, 
  LINE_ATTRIBUTE,
  ICON_SELECTION_ATTRIBUTE,
  WIDTH_ATTRIBUTE } from "../../../WebComponents/Button/constants.js";
import React from 'react'
import parse from 'html-react-parser';
export const createComponentButton = (props) => {
    const [output, setOutput] = React.useState(<></>)
    const [outputPreview, setOutputPreview] = React.useState(<></>)
    const [click, setClick] = React.useState(()=>{})
    React.useEffect(()=>{
       const hierarchy = props[HIERARCHY_ATTRIBUTE]
       const size = props[SIZE_ATTRIBUTE]
       const color = props[COLOR_ATTRIBUTE]
       const theme= props[THEME_ATTRIBUTE]
       const state = props[STATE_ATTRIBUTE]
       const line = props[LINE_ATTRIBUTE]
       const iconSelection = props[ICON_SELECTION_ATTRIBUTE]
       const width = props[WIDTH_ATTRIBUTE]

       const parser = new DOMParser();
       const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
       const children = [...doc.body.children]
      setOutput(<h1>Building...</h1>)
      setOutputPreview(<component-button
        {...{
        ...(!!hierarchy && { [HIERARCHY_ATTRIBUTE]:hierarchy }),
        ...(!!size && { [SIZE_ATTRIBUTE]:size }),
        ...(!!color && { [COLOR_ATTRIBUTE]:color }),
        ...(!!theme && { [THEME_ATTRIBUTE]:theme }),
        ...(!!state && { [STATE_ATTRIBUTE]:state }),
        ...(!!line && { [LINE_ATTRIBUTE]:line }),
        ...(!!iconSelection && { [ICON_SELECTION_ATTRIBUTE]:iconSelection }),
        ...(!!width && { [WIDTH_ATTRIBUTE]:width }),
      }}>
        {children[0].nodeName === "BUTTON" && <button onClick={()=>{
          new Function('return ' + children[0].attributes["onclick"].value)()
          }}>{children[0].innerHTML}</button>
          }
        
        {children[0].nodeName === "A" && <a onClick={!!children[0].attributes["onclick"] ? new Function('return ' + children[0].attributes["onclick"].value)() : undefined } href={!!children[0].attributes["href"] ?children[0].attributes["href"].value:undefined}
        target={!!children[0].attributes["target"] ?children[0].attributes["target"].value:undefined}
        >
          {children[0].innerHTML}</a>
        }
        
                </component-button>)
       


    },[props[CONTENT_TO_APPEND],
       props[HIERARCHY_ATTRIBUTE],
       props[SIZE_ATTRIBUTE], 
       props[COLOR_ATTRIBUTE], 
       props[THEME_ATTRIBUTE],
       props[STATE_ATTRIBUTE], 
       props[LINE_ATTRIBUTE],
       props[ICON_SELECTION_ATTRIBUTE],
       props[WIDTH_ATTRIBUTE]])
    
       React.useEffect(()=>{
        if (output.type === "h1")  setOutput(outputPreview)
      },[output])
    return output;
  }