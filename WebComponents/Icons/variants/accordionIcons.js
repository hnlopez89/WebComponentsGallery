import {
    ICON_COLOR_ATTRIBUTE, 
    ICON_HEIGHT_ATTRIBUTE, 
    ICON_WIDTH_ATTRIBUTE, 
    ICON_SELECTION_ATTRIBUTE,
    PARTICULAR_ICON_POLYGON_ATTRIBUTE,
    PARTICULAR_ICON_VIEWBOX_ATTRIBUTE
    } from '../constants.js'

export const accordionIcons = function (attributes)
{
    const xmlns = "http://www.w3.org/2000/svg";
    const svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(null, "viewBox", attributes[ICON_SELECTION_ATTRIBUTE][PARTICULAR_ICON_VIEWBOX_ATTRIBUTE]);
    svgElem.setAttributeNS(null, "width", attributes[ICON_WIDTH_ATTRIBUTE]);
    svgElem.setAttributeNS(null, "height", attributes[ICON_HEIGHT_ATTRIBUTE]);


    const g = document.createElementNS(xmlns, "g");
    g.setAttributeNS(null, 'fill', 'none');
    g.setAttributeNS(null, 'fillRule', 'evenodd');
    g.setAttributeNS(null, 'stroke', 'none');
    g.setAttributeNS(null, 'strokeWidth', '1');

    const g1 = document.createElementNS(xmlns, "g");
    g1.setAttributeNS(null, 'fill', attributes[ICON_COLOR_ATTRIBUTE]);

    const polygon = document.createElementNS(xmlns, "polygon");
    polygon.setAttributeNS(null, 'points', attributes[ICON_SELECTION_ATTRIBUTE][PARTICULAR_ICON_POLYGON_ATTRIBUTE]);
        
    svgElem.appendChild(g);
    g.appendChild(g1);
    g1.appendChild(polygon)
    svgElem.style.display ="flex"
    svgElem.style.alignItems = "center"
    return svgElem;
}

