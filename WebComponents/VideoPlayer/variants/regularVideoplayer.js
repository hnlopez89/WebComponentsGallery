import { STYLE_KEY } from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { setStyle, processStyle, processIconStyle } from "../styles/index.js"
import {STATE_ATTRIBUTE,
        ID_YOUTUBE_VIDEO,
        PLAY_OPTION,
        STOP_OPTION} from "../constants.js"
import { DEFAULT_EVENT, PLAY_EVENT } from "../constants.js"
import {MAX_WIDTH_SMALL_OPTION,MAX_WIDTH_MEDIUM_OPTION} from '../../commonMethodsAndConstants/Styles/commonConstants.js'
import { WRAPPER_COMPONENT,
            PLAYER_WRAPPER,
            PLAYER_COMPONENT,
            CLOSE_ICON_WRAPPER_COMPONENT,
            CLOSE_ICON_COMPONENT } from "../constants.js"
import {NAME_OF_COMPONENT as ICON} from "../../Icons/constants.js"


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const TEMPORARY_ATTRIBUTE = 'temporary-attribute'

const getOneColumnWidth = function (gap, ncol) {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    return ((vw - (ncol + 1)*gap)/ncol)
}
const widthVideo = function (ncol, gap, widthOneColumn){
    return (ncol * widthOneColumn + (ncol - 1)* gap)
}

const resizeWidthG = function (){
        
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    
    var widthOneColumn = null
    var widthVideoCalculus = null

    if (vw < MAX_WIDTH_SMALL_OPTION)
    {
        widthOneColumn = getOneColumnWidth(16,2)
        widthVideoCalculus = vw - 32
    }
    else if (vw >= MAX_WIDTH_SMALL_OPTION && vw < MAX_WIDTH_MEDIUM_OPTION)
    {
        widthOneColumn = getOneColumnWidth(32,6)
        widthVideoCalculus = widthVideo(6,32,widthOneColumn)
    }
    else if (vw >= MAX_WIDTH_MEDIUM_OPTION && vw < 1416)
    {
        widthOneColumn = getOneColumnWidth(32,12)
        widthVideoCalculus = widthVideo(10,32,widthOneColumn)
    }
    else if (vw >= 1416)
    {
        widthOneColumn = getOneColumnWidth(32,12)
        widthVideoCalculus = widthVideo(8,32,widthOneColumn)
    }
    if (this.getAttribute(STATE_ATTRIBUTE) === PLAY_OPTION)
    {
        this.playerSubWrapper.style.width = `${widthVideoCalculus}px`
        this.playerSubWrapper.style.height = `${ widthVideoCalculus/1.77}px`
    } 
}

function onPlayerStateChangeF(event) {
    if (event.data == 1 ) this.setAttribute(STATE_ATTRIBUTE, PLAY_OPTION)                
  }

function YTLoadedIframe () 
{
    const onPlayerStateChange = onPlayerStateChangeF.bind(this)
    if(window['YT'] === undefined) {
        window.onYouTubeIframeAPIReady =  () => {
            const playerIframe = new YT.Player(this.player, {
                height: '100%',
                width: '100%',
                videoId: this.customAttributes[ID_YOUTUBE_VIDEO],
                events: {
                'onStateChange': onPlayerStateChange
                }
            });
            this.stopvideo = () => {
                playerIframe.stopVideo()
            }
      }
    }
    else if (window['YT'].loaded === 0) {
        window.onYouTubeIframeAPIReady =  () => {
            const playerIframe = new YT.Player(this.player, {
                height: '100%',
                width: '100%',
                videoId: this.customAttributes[ID_YOUTUBE_VIDEO],
                events: {
                'onStateChange': onPlayerStateChange
                }
            });
            this.stopvideo = () => {
                playerIframe.stopVideo()
            }
      }
        
    }
    else 
    {
        const playerIframe = new YT.Player(this.player, {
            height: '100%',
            width: '100%',
            videoId: this.customAttributes[ID_YOUTUBE_VIDEO],
            events: {
            'onStateChange': onPlayerStateChange
            }
        });
        this.stopvideo = () => {
            playerIframe.stopVideo()
        }
    }

}
class vanillaRegularVideoPlayer extends HTMLElement {
    constructor() {
        super();
        this.customAttributes = null
        this.styles = null
        this.defaultStyles = []
        this.openStyles = []
        this.stopvideo = null
        this.shadow = this.attachShadow({ mode: 'open' });

    }
    static get observedAttributes() { return [STATE_ATTRIBUTE]; }
    attributeChangedCallback(name, oldValue, newValue) {

        if (name === STATE_ATTRIBUTE && oldValue!==newValue)
        {
            if (newValue === PLAY_OPTION) this.openStyles.forEach( (style)=> style())
            else if (newValue === STOP_OPTION) this.defaultStyles.forEach( (style)=> style())
            
        }
    }

    connectedCallback() {
        const resizeWidth = resizeWidthG.bind(this)
        //Define attributes of component
        this.customAttributes = JSON.parse(this.getAttribute(TEMPORARY_ATTRIBUTE))
        this.removeAttribute(TEMPORARY_ATTRIBUTE)
        this.styles = JSON.parse(JSON.stringify(setStyle(this.customAttributes[STYLE_KEY])))

        const wrapperComponent = document.createElement('div')
        const stylesProccessedWrapperComponent= processStyle(wrapperComponent,this.styles[WRAPPER_COMPONENT])
        this.defaultStyles.push(...stylesProccessedWrapperComponent[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedWrapperComponent[PLAY_EVENT])
        
        const playerWrapper = document.createElement('div')
        const stylesProccessedPlayerWrapper= processStyle(playerWrapper,this.styles[PLAYER_WRAPPER])
        this.defaultStyles.push(...stylesProccessedPlayerWrapper[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedPlayerWrapper[PLAY_EVENT])

        this.playerSubWrapper = document.createElement('div')
        const stylesProccessedPlayerSubWrapper= processStyle(this.playerSubWrapper,this.styles[PLAYER_COMPONENT])
        this.defaultStyles.push(...stylesProccessedPlayerSubWrapper[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedPlayerSubWrapper[PLAY_EVENT])

        
        
        
        this.player = document.createElement('div')
        
        const iconCloseWrapper = document.createElement('div')
        const stylesProccessedIconCloseWrapper= processStyle(iconCloseWrapper,this.styles[CLOSE_ICON_WRAPPER_COMPONENT])
        this.defaultStyles.push(...stylesProccessedIconCloseWrapper[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedIconCloseWrapper[PLAY_EVENT])

        

        const iconClose = document.createElement(ICON)
        const stylesProccessedIconClose = processIconStyle(iconClose, this.styles[CLOSE_ICON_COMPONENT])
        this.defaultStyles.push(...stylesProccessedIconClose[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedIconClose[PLAY_EVENT])


        this.openStyles.push(resizeWidth)
        window.addEventListener("resize", resizeWidth)
        iconCloseWrapper.onclick = () => {
            this.stopvideo()
            this.setAttribute(STATE_ATTRIBUTE,STOP_OPTION)
        }

        this.shadow.appendChild(wrapperComponent)
            wrapperComponent.appendChild(iconCloseWrapper)
                iconCloseWrapper.appendChild(iconClose)
            wrapperComponent.appendChild(playerWrapper)
                playerWrapper.appendChild(this.playerSubWrapper)
                    this.playerSubWrapper.appendChild(this.player)

        YTLoadedIframe.bind(this)()
        this.defaultStyles.forEach( (style)=> style())
      }
        
    
    
}

const regularVideoplayerCustomComponent = 'component-regular-videoplayer'
if (customElements.get(regularVideoplayerCustomComponent) === undefined) customElements.define(regularVideoplayerCustomComponent, class extends vanillaRegularVideoPlayer { });

export const createRegularVideoPlayer = function () {
    const videoplayer = document.createElement(regularVideoplayerCustomComponent)
    videoplayer.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(this.dataAttributes))
    return videoplayer
    
}