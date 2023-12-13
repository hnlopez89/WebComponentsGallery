import {PATH_STYLE,
        STYLE_KEY,
        STYLE_OBJECT,
        COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { windowModalStyles } from "./windowModalStyles.js"
import { fullscreenModalStyles } from "./fullscreenModalStyles.js"
const allStylesObjects = {}
const allStylesKeysAndPaths = []

const allStyles = []
allStyles.push(...windowModalStyles)
allStyles.push(...fullscreenModalStyles)

for (var i=0; i<allStyles.length;i++)
{
  var styleKey = "Modal_Style_" + i

  var componentKeyAndPath = {}
  componentKeyAndPath[PATH_STYLE] = allStyles[i].path
  componentKeyAndPath[STYLE_KEY] = styleKey
  componentKeyAndPath[COMPONENT_VARIANT_KEY] = allStyles[i][COMPONENT_VARIANT_KEY]
  allStylesKeysAndPaths.push({...componentKeyAndPath})
  allStylesObjects[styleKey] = allStyles[i][STYLE_OBJECT]
}
export  {allStylesKeysAndPaths};
export  {allStylesObjects}
