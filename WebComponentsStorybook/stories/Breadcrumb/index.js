import { CONTENT_TO_APPEND, COMPONENT_BREADCRUMB } from "../index.js";
import { ATTRIBUTES, THEME_ATTRIBUTE} from "../../../WebComponents/Button/constants.js";
import React from 'react'
export const createComponentBreadcrumb = (props) => {
    const [output, setOutput] = React.useState(<></>)    
    React.useEffect(()=>{
        const parser = new DOMParser();
        const breadcrumb = document.createElement(COMPONENT_BREADCRUMB)
        const doc = parser.parseFromString(props[CONTENT_TO_APPEND], 'text/html');
        const children = [...doc.body.children]
        breadcrumb.append(...children)
        ATTRIBUTES.forEach((ATTRIBUTE)=> {
            if (props.hasOwnProperty(ATTRIBUTE.attributeName)) breadcrumb.setAttribute(ATTRIBUTE.attributeName,props[ATTRIBUTE.attributeName])
        })
      setOutput(<div dangerouslySetInnerHTML={{__html: `${breadcrumb.outerHTML}`}} style={{display:"contents"}}></div>)
    },[props[CONTENT_TO_APPEND],
       props[THEME_ATTRIBUTE]
    ])
    return <>{output}</>;
}