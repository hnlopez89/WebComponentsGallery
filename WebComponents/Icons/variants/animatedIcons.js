import {
    ICON_COLOR_ATTRIBUTE, 
    ICON_HEIGHT_ATTRIBUTE, 
    ICON_WIDTH_ATTRIBUTE, 
    ICON_ANIMATION_DURATION,
    ICON_SELECTION_ATTRIBUTE,
    PARTICULAR_ICON_PATH_ATTRIBUTE,
    PARTICULAR_ICON_VIEWBOX_ATTRIBUTE,
    
    } from '../constants.js'
export const animatedIconFunction = function  (attributes)
{
    const xmlns = "http://www.w3.org/2000/svg";
    const svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(null, "viewBox", attributes[ICON_SELECTION_ATTRIBUTE][PARTICULAR_ICON_VIEWBOX_ATTRIBUTE]);
    svgElem.setAttributeNS(null, "width", attributes[ICON_WIDTH_ATTRIBUTE]);
    svgElem.setAttributeNS(null, "height", attributes[ICON_HEIGHT_ATTRIBUTE]);

    const lineargradient = document.createElementNS(xmlns, "linearGradient");
    lineargradient.setAttributeNS(null, "id", "left-to-right");
                    

    const stop1 = document.createElementNS(xmlns, "stop");
    stop1.setAttributeNS(null, "offset", "0");
    stop1.setAttributeNS(null, "stop-color", attributes[ICON_COLOR_ATTRIBUTE]);
    const animate1 = document.createElementNS(xmlns, "animate");
    animate1.setAttributeNS(null, "dur", "0.15s");
    animate1.setAttributeNS(null, "attributeName", "offset");
    animate1.setAttributeNS(null, "fill", "freeze");
    animate1.setAttributeNS(null, "from", "0")
    animate1.setAttributeNS(null, "to", "1")
    animate1.setAttributeNS(null, "begin", `${attributes[ICON_ANIMATION_DURATION]}s;op.end+${attributes[ICON_ANIMATION_DURATION]}s`)

    stop1.appendChild(animate1)

    const stop2 = document.createElementNS(xmlns, "stop");
    stop2.setAttributeNS(null, "offset", "0");
    stop2.setAttributeNS(null, "stop-color", "transparent");
    const animate2 = document.createElementNS(xmlns, "animate");
    animate2.setAttributeNS(null, "dur", "0.15s");
    animate2.setAttributeNS(null, "attributeName", "offset");
    animate2.setAttributeNS(null, "fill", "freeze");
    animate2.setAttributeNS(null, "from", "0")
    animate2.setAttributeNS(null, "to", "1")
    animate2.setAttributeNS(null, "begin", `${attributes[ICON_ANIMATION_DURATION]};op.end+${attributes[ICON_ANIMATION_DURATION]}s`)

    stop2.appendChild(animate2)

    lineargradient.appendChild(stop1)
    lineargradient.appendChild(stop2)
            
    const path = document.createElementNS(xmlns, "path");
    path.setAttributeNS(null, 'd', attributes[ICON_SELECTION_ATTRIBUTE][PARTICULAR_ICON_PATH_ATTRIBUTE]);
    path.setAttributeNS(null, 'fill','url(#left-to-right)')
                    
    svgElem.appendChild(lineargradient);
    svgElem.appendChild(path)
    svgElem.style.display ="flex"
    svgElem.style.alignItems = "center"
    return svgElem;
}

