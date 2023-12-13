import {BACKGROUND_COMPONENT,WRAPPER_COMPONENT, MODAL_WRAPPER_COMPONENT, ICON_CLOSE_COMPONENT,ICON_CLOSE_WEB_COMPONENT, SIZE_ATTRIBUTE} from "../constants.js"
import { processStyle,processIconStyle, setStyle } from "../styles/index.js"
import { DEFAULT_EVENT } from "../constants.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {NAME_OF_COMPONENT as COMPONENT_ICON} from '../../Icons/constants.js'
import {SIZE_FUNCTION_PARSING } from "../constants.js"
import {widthOneColumn, GRID, LAYOUT_MODAL,POSITION_ICON_CLOSE, PADDING_MODAL } from './constants.js'
const removeScrollbar = () => {
    const styleSheet = document.createElement('style')
    styleSheet.innerHTML= `
    * {
        -webkit-tap-highlight-color: transparent;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    *::-webkit-scrollbar {
        display: none;
      }
    `
    return styleSheet;
}
const calculateWidthF = function () {
    const value = SIZE_FUNCTION_PARSING()
    const width1Col = widthOneColumn.bind(this)()
    const widthModal = LAYOUT_MODAL.nCol[value] * width1Col + LAYOUT_MODAL.nSpace[value] * GRID.space[value]
    this.wrapperModal.style.width = `${widthModal}px`
    return widthModal;

}
const positionateIconCloseF = function () {
    const value = SIZE_FUNCTION_PARSING()
    if (this.dataAttributes[SIZE_ATTRIBUTE]!== value)
    {
        this.dataAttributes[SIZE_ATTRIBUTE] = value
        this.wrapperModal.style.padding = PADDING_MODAL[value]
        Object.keys(POSITION_ICON_CLOSE).forEach(key=>{this.iconCloseWrapper.style[key] = POSITION_ICON_CLOSE[key][value]})
    }
    return;

}
export const windowVariant = function ()
{
    const styles = setStyle(this.dataAttributes[STYLE_KEY])
    const calculateWidth = calculateWidthF.bind(this)
    const positionateIconClose = positionateIconCloseF.bind(this)
    
    const backgroundComponent = document.createElement('div')
    const stylesProccessedBackgroundComponent = processStyle(backgroundComponent,styles[BACKGROUND_COMPONENT])
    stylesProccessedBackgroundComponent[DEFAULT_EVENT].forEach(element => element());

    const wrapper = document.createElement('div')
    const stylesProccessedWrapper = processStyle(wrapper,styles[WRAPPER_COMPONENT])
    stylesProccessedWrapper[DEFAULT_EVENT].forEach(element => element());

    this.wrapperModal = document.createElement('div')
    const stylesProccessedWrapperModal = processStyle(this.wrapperModal,styles[MODAL_WRAPPER_COMPONENT])
    stylesProccessedWrapperModal[DEFAULT_EVENT].forEach(element => element());

    this.iconCloseWrapper = document.createElement('div')
    const stylesProccessedIconCloseWrapper = processStyle(this.iconCloseWrapper,styles[ICON_CLOSE_COMPONENT])
    stylesProccessedIconCloseWrapper[DEFAULT_EVENT].forEach(element => element());

    const iconClose = document.createElement(COMPONENT_ICON)
    const stylesProccessedIconClose = processIconStyle(iconClose,styles[ICON_CLOSE_WEB_COMPONENT])
    stylesProccessedIconClose[DEFAULT_EVENT].forEach(element => element());

    const slotElement = document.createElement('slot')

    this.iconCloseWrapper.onclick = () => {this.remove()}
    window.addEventListener("resize", ()=>{calculateWidth()
                                            positionateIconClose()});
    calculateWidth()
    positionateIconClose()
    this.shadow.appendChild(removeScrollbar())
    this.shadow.appendChild(backgroundComponent)
    this.shadow.appendChild(wrapper)
            wrapper.appendChild(this.wrapperModal)
                this.wrapperModal.appendChild(this.iconCloseWrapper)
                    this.iconCloseWrapper.appendChild(iconClose)
                this.wrapperModal.appendChild(slotElement)
}