import {profileLogoutStyles} from "./profileLogoutStyles.js"
import {profileInitialsStyles} from "./profileInitialsStyles.js"
import {profilePictureStyles} from "./profilePictureStyles.js"
import {profileInitialsBadgeStyles} from "./profileInitialsBadgeStyles.js"
import {profilePictureBadgeStyles} from "./profilePictureBadgeStyles.js"
import {PATH_STYLE,
        STYLE_KEY,
        STYLE_OBJECT,
        COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
const allStylesObjects = {}
const allStylesKeysAndPaths = []

const allStyles = []
allStyles.push(...profileLogoutStyles)
allStyles.push(...profileInitialsStyles)
allStyles.push(...profilePictureStyles)
allStyles.push(...profileInitialsBadgeStyles)
allStyles.push(...profilePictureBadgeStyles)

for (var i=0; i<allStyles.length;i++)
{
  var styleKey = "Style_" + i

  const componentKeyAndPath = {}
  componentKeyAndPath[PATH_STYLE] = allStyles[i][PATH_STYLE]
  componentKeyAndPath[STYLE_KEY] = styleKey
  componentKeyAndPath[COMPONENT_VARIANT_KEY] = allStyles[i][COMPONENT_VARIANT_KEY]
  allStylesKeysAndPaths.push({...componentKeyAndPath})
  allStylesObjects[styleKey] = allStyles[i][STYLE_OBJECT]
}

export  {allStylesKeysAndPaths};
export  {allStylesObjects}
