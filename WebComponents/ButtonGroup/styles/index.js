import {EVENTS_OF_COMPONENT, DEFAULT_EVENT} from "../constants.js"
import {PATH_STYLE,STYLE_KEY,COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {allStylesKeysAndPaths,allStylesObjects} from "./allStyles.js"
import {TreeComponent, setStyleMethod, setKeysMethod, processStyleMethod} from "../../commonMethodsAndConstants/Styles/commonMethods.js"
//EN ESTE ARCHIVO SE CONSTRUYE UN ARBOL PARA DAR LOS ESTILOS A DISTINTOS COMPONENTES

const tree = new TreeComponent ("root")
allStylesKeysAndPaths.forEach(style => {tree.addKeys( style[PATH_STYLE] , style[STYLE_KEY], style[COMPONENT_VARIANT_KEY])})
export const setStyle = setStyleMethod(allStylesObjects)
export const setKeys = setKeysMethod (tree)
export const processStyle = processStyleMethod(EVENTS_OF_COMPONENT, DEFAULT_EVENT)