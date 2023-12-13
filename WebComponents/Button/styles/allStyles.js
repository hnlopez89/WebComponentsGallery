import {primaryStyles} from "./primaryStyles.js"
import {secondaryStyles} from "./secondaryStyles.js"
import { roundedSolidStyles } from "./roundedSolidStyles.js"
import { roundedOutlinedStyles } from "./roundedOutlinedStyle.js"
import { hyperlinkStyles } from "./hyperlinkStyles.js"
import { tertiaryStyles } from "./tertiaryStyles.js"
import {destructiveStyles} from "./destructiveStyles.js"
import { iconButtonStyles } from "./iconButtonStyles.js" 
import {PATH_STYLE,
        STYLE_KEY,
        STYLE_OBJECT,
        COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {HOVER_OPTION, HOVER_BUTTON_EVENT, STATE_ATTRIBUTE, ACTIVE_OPTION, PRESS_OPTION} from "../constants.js"
const allStylesObjects = {}
const allStylesKeysAndPaths = []

const allStyles = []
allStyles.push(...primaryStyles)
allStyles.push(...secondaryStyles)
allStyles.push(...roundedSolidStyles)
allStyles.push(...roundedOutlinedStyles)
allStyles.push(...hyperlinkStyles)
allStyles.push(...tertiaryStyles)
allStyles.push(...destructiveStyles)
allStyles.push(...iconButtonStyles)
const allCopyStyles = allStyles.map((styleWrapper)=>{
  return JSON.parse(JSON.stringify(styleWrapper))
})

function hoverFilter(obj) {
  const subcomponents = Object.keys(obj[STYLE_OBJECT])
  var hasHover = false
  subcomponents.forEach((subcomponent)=>{
    if(obj[STYLE_OBJECT][subcomponent].hasOwnProperty(HOVER_BUTTON_EVENT)) hasHover=true
  })
  return hasHover;
}

const extractHover = allCopyStyles.filter(hoverFilter);

//const extractHover = allCopyStyles.filter(oneStyle =>oneStyle[PATH_STYLE][STATE_ATTRIBUTE] === ACTIVE_OPTION);
const hoverStyles = extractHover.map((styleWrapper)=>{
  
    const copyWrapper = JSON.parse(JSON.stringify(styleWrapper))
    copyWrapper[PATH_STYLE][STATE_ATTRIBUTE] = HOVER_OPTION
    const subcomponents = Object.keys(copyWrapper[STYLE_OBJECT])
    subcomponents.forEach((subcomponent)=>{
      if(copyWrapper[STYLE_OBJECT][subcomponent].hasOwnProperty(HOVER_BUTTON_EVENT)) {
        copyWrapper[STYLE_OBJECT][subcomponent] = {
        ...JSON.parse(JSON.stringify(copyWrapper[STYLE_OBJECT][subcomponent])),
        ...JSON.parse(JSON.stringify(copyWrapper[STYLE_OBJECT][subcomponent][HOVER_BUTTON_EVENT]))
        }
        delete copyWrapper[STYLE_OBJECT][subcomponent][HOVER_BUTTON_EVENT]
      }
    })
    return copyWrapper;
})

allStyles.push(...hoverStyles)

for (var i=0; i<allStyles.length;i++)
{
  var styleKey = "Button_Style_" + i

  var componentKeyAndPath = {}
  componentKeyAndPath[PATH_STYLE] = allStyles[i].path
  componentKeyAndPath[STYLE_KEY] = styleKey
  componentKeyAndPath[COMPONENT_VARIANT_KEY] = allStyles[i][COMPONENT_VARIANT_KEY]
  allStylesKeysAndPaths.push({...componentKeyAndPath})
  allStylesObjects[styleKey] = allStyles[i][STYLE_OBJECT]
}
export  {allStylesKeysAndPaths};
export  {allStylesObjects}
