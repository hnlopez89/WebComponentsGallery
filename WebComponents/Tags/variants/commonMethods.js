import { TITLE_ATTRIBUTE } from "../constants.js"
export const appendButtonVariant = function (parentElement, attributes,customTags)
{
    if (parentElement.getElementsByTagName('button').length>0)  
    {
        attributes[TITLE_ATTRIBUTE] = parentElement.getElementsByTagName('button')[0].innerText
        customTags.appendChild(parentElement.getElementsByTagName('button')[0])      
    }
    else if (parentElement.getElementsByTagName('span').length>0)  
    {
        attributes[TITLE_ATTRIBUTE] = parentElement.getElementsByTagName('span')[0].innerText
        customTags.appendChild(parentElement.getElementsByTagName('span')[0])      
    }
    if (attributes[TITLE_ATTRIBUTE].length>20) attributes[TITLE_ATTRIBUTE] = attributes[TITLE_ATTRIBUTE].slice(0, 16) + "..."
    return;
}
export const clickCallback = function ()
{
    this.getElementsByTagName('button')[0].click()
}
export const addListener = function () 
{
   const clickL = clickCallback.bind(this)
   if( this.getElementsByTagName('button').length>0) this.container.addEventListener("click",clickL)
}