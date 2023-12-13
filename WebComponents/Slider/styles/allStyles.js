import {PATH_STYLE,
        STYLE_KEY,
        STYLE_OBJECT,
        COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {simpleSlider} from './simpleSliderStyles.js'
import {simpleSliderLabel} from './simpleSliderLabelStyles.js'
import { multipleSlider } from "./multipleSliderStyles.js"
import { multipleSliderLabel } from "./multipleSliderLabelStyles.js"
const allStylesObjects = {}
const allStylesKeysAndPaths = []

const allStyles = []
allStyles.push(...simpleSlider)
allStyles.push(...simpleSliderLabel)
allStyles.push(...multipleSlider)
allStyles.push(...multipleSliderLabel)

for (var i=0; i<allStyles.length;i++)
{
  var styleKey = "Slider_Style_" + i

  var componentKeyAndPath = {}
  componentKeyAndPath[PATH_STYLE] = allStyles[i].path
  componentKeyAndPath[STYLE_KEY] = styleKey
  componentKeyAndPath[COMPONENT_VARIANT_KEY] = allStyles[i][COMPONENT_VARIANT_KEY]
  allStylesKeysAndPaths.push({...componentKeyAndPath})
  allStylesObjects[styleKey] = allStyles[i][STYLE_OBJECT]
}
export  {allStylesKeysAndPaths};
export  {allStylesObjects}
