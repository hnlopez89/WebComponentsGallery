
import {ATTRIBUTES,COLOR_ATTRIBUTE,
        SIZE_ATTRIBUTE, 
        OPEN_ATTRIBUTE,
        TITLE_ATTRIBUTE} from "../../../WebComponents/Accordion/constants.js"
import {CONTENT_TO_APPEND, 
        COMPONENT_ACCORDION} from '../index.js';
import React from 'react'
import parse from 'html-react-parser';
export const createComponentAccordion = (props) => {
    const [output, setOutput] = React.useState(<></>)

    
    React.useEffect(()=>{
       
        setOutput(<component-accordion {...{...(!!props[OPEN_ATTRIBUTE] && { [OPEN_ATTRIBUTE]:props[OPEN_ATTRIBUTE] }),
                                    ...(!!props[SIZE_ATTRIBUTE] && { [SIZE_ATTRIBUTE]:props[SIZE_ATTRIBUTE] }),
                                    ...(!!props[COLOR_ATTRIBUTE] && { [COLOR_ATTRIBUTE]:props[COLOR_ATTRIBUTE] }),
                                    ...(!!props[TITLE_ATTRIBUTE] && { [TITLE_ATTRIBUTE]:props[TITLE_ATTRIBUTE] }),
                    }}>           
                    {parse(props[CONTENT_TO_APPEND])}
            
                </component-accordion>)
      },[props[CONTENT_TO_APPEND],
         props[OPEN_ATTRIBUTE],
         props[SIZE_ATTRIBUTE], 
         props[COLOR_ATTRIBUTE], 
         props[TITLE_ATTRIBUTE]])

    return output;
}