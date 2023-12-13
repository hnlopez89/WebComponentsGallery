import {Styles} from "./primaryStyles.js"
import {PATH_STYLE,
        STYLE_KEY,
        STYLE_OBJECT,
        COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
const allStylesObjects = {}
const allStylesKeysAndPaths = []

const allStyles = []
allStyles.push(...Styles)


for (var i=0; i<allStyles.length;i++)
{
  var styleKey = "Accordion_Style_" + i
  var componentKeyAndPath = {}
  componentKeyAndPath[PATH_STYLE] = allStyles[i][PATH_STYLE]
  componentKeyAndPath[STYLE_KEY] = styleKey
  componentKeyAndPath[COMPONENT_VARIANT_KEY] = allStyles[i][COMPONENT_VARIANT_KEY]
  allStylesKeysAndPaths.push({...componentKeyAndPath})
  allStylesObjects[styleKey] = allStyles[i][STYLE_OBJECT]
}

export  {allStylesKeysAndPaths};
export  {allStylesObjects}
