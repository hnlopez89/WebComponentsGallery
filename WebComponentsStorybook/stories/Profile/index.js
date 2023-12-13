import { CONTENT_TO_APPEND, COMPONENT_PROFILE } from "../index.js";
import { ATTRIBUTES,
  THEME_ATTRIBUTE,
  SIZE_ATTRIBUTE,
  TITLE_ATTRIBUTE,
  STATE_ATTRIBUTE,
  SHOW_TITLE_ATTRIBUTE,
  SHOW_PICTURE_ATTRIBUTE,
  BADGE_NUMBER_ATTRIBUTE,
  BADGE_STATE_ATTRIBUTE,
  SHOW_BADGE_ATTRIBUTE} from "../../../WebComponents/Profile/constants.js";
import React from 'react'
export const createComponentProfile = (props) => {
    const [output, setOutput] = React.useState(<></>) 
    
    React.useEffect(()=>{
      const Pagination= document.createElement(COMPONENT_PROFILE);
      const parser = new DOMParser();
      const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
      const children = [...doc.body.children]
      Pagination.append(...children)
      ATTRIBUTES.forEach((ATTRIBUTE)=> {
        if (props.hasOwnProperty(ATTRIBUTE.attributeName)) Pagination.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
        
      })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${Pagination.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[THEME_ATTRIBUTE],
      props[SIZE_ATTRIBUTE],
      props[TITLE_ATTRIBUTE],
      props[BADGE_NUMBER_ATTRIBUTE],
      props[BADGE_STATE_ATTRIBUTE],
  ])
       return <>{output}</>;
  }