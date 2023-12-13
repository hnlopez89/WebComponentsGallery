import { BLACK } from '../../commonMethodsAndConstants/Styles/commonConstants.js'
import {
    ICON_COLOR_ATTRIBUTE, 
    ICON_HEIGHT_ATTRIBUTE, 
    ICON_WIDTH_ATTRIBUTE, 
    ICON_SELECTION_ATTRIBUTE,
    PARTICULAR_ICON_PATH_ATTRIBUTE,
    PARTICULAR_ICON_VIEWBOX_ATTRIBUTE
    } from '../constants.js'
function modifyObject (obj, color, height, width)
{
    if ('fill' in obj.attributes)
    {
        if (obj.attributes['fill'] !== 'none' && obj.attributes['fill']=== BLACK)
        {
            obj.attributes['fill'] = color
        }
    }
    else if ('stroke' in obj.attributes)
    {
        if (obj.attributes['stroke']=== BLACK)
        {
            obj.attributes['stroke'] = color
        }
    }
    if (obj.elementName === 'svg')
    {
        obj.attributes['height'] = height
        obj.attributes['width'] = width
        delete obj.attributes['data-name']
    }
    obj.children.forEach(child => {
        modifyObject(child, color, height, width)
    });
    return obj;
}
function createIcon (obj)
{
    const xmlns = "http://www.w3.org/2000/svg";
    const el = document.createElementNS(xmlns, obj.elementName)
    const keys = Object.keys(obj.attributes);

    keys.forEach(key=>{

        el.setAttributeNS(null,key, obj.attributes[key])
    })
    const childrenCreated = []
    obj.children.forEach(child => {
        childrenCreated.push(createIcon(child))
    })
    childrenCreated.forEach(child => {
        el.appendChild(child)
    })
    return el;
}
export const regularIconFunction = function (attributes)
{
    
    const color = attributes[ICON_COLOR_ATTRIBUTE]
    const height = attributes[ICON_HEIGHT_ATTRIBUTE]
    const width = attributes[ICON_WIDTH_ATTRIBUTE]
    const IconSelected = JSON.parse(JSON.stringify(attributes[ICON_SELECTION_ATTRIBUTE]))
    modifyObject (IconSelected, color, height, width)

    const svgElem = createIcon(IconSelected)
    return svgElem;
}

