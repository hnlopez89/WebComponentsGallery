import {STYLE_KEY, COMPONENT_VARIANT_KEY} from "./commonConstants.js"
export class  TreeComponent {
    constructor (value)
    {
       this.value = value;
       this.childrenProperty = null;
       this.children = []
       this.style = null
       this.variant = null
    }
    
    getKeys (path) 
    {
        
        const keys = Object.keys(path)
        if (keys.length === 0) 
        {
            const keysReturn = {}
            keysReturn[STYLE_KEY] = this.style
            keysReturn[COMPONENT_VARIANT_KEY] = this.variant
            return keysReturn
        }

        const indexProperty = keys.indexOf(this.childrenProperty)
        if (indexProperty === -1) return null;
        else if (indexProperty !== -1) 
        {
            const childFiltered = this.children.filter (child => child.value === path[keys[indexProperty]])
            if (childFiltered.length === 0) return null;
            const subPath = {...path}
            delete subPath[keys[indexProperty]];
            return childFiltered[0].getKeys(subPath)
        }
    }
    addKeys (path, style, variant) 
    {
        const keys = Object.keys(path)
        if (keys.length === 0) return
        
        if (this.childrenProperty === null)
        {
            const child = new TreeComponent (path[keys[0]])
            this.childrenProperty = keys [0]
            this.children.push(child)
            const subPath = {...path}
            delete subPath[keys[0]];
            child.addKeys(subPath,style, variant)
            if (keys.length === 1)
            {
                child.style=style
                child.variant=variant
            } 
        }
        else 
        {
            const indexProperty = keys.indexOf(this.childrenProperty);
            if (indexProperty === -1) return;
            else if (indexProperty !== -1) 
            {
                const allChildrenValues = this.children.map(child => child.value)
                const indexChildren = allChildrenValues.indexOf(path[keys[indexProperty]]);
                if (indexChildren === -1) 
                {
                    const newChild = new TreeComponent (path[keys[indexProperty]])
                    this.children.push(newChild)
                    const subPathChild = {...path}
                    delete subPathChild[keys[indexProperty]];
                    newChild.addKeys(subPathChild,style, variant)
                    if (keys.length === 1) 
                    {
                        newChild.style=style
                        newChild.variant=variant   
                    }
                }
                else 
                {
                    const subPath = {...path}
                    delete subPath[keys[indexProperty]];
                    this.children[indexChildren].addKeys(subPath,style, variant)

                }
            }
        }
    }
}

export const setKeysMethod = (tree) => {
        return (keysAttributes) => {
                const keys = Object.keys(keysAttributes)
                keys.forEach (key => {if (keysAttributes[key] === null) delete keysAttributes[key]})
                const keysToReturn = tree.getKeys(keysAttributes)
                return keysToReturn;
                }
}
export const setStyleMethod = (allStylesObjects) => {
        return (styleKey) => {return allStylesObjects[styleKey]}
}

export const processStyleMethod = (EVENTS_OF_COMPONENT, DEFAULT_EVENT= 'default') => { 
    return (element, styleObject, events= EVENTS_OF_COMPONENT) => {
        const styles = {}
        styles [DEFAULT_EVENT] = []
        for (var i=0; i<events.length;i++)
        {
            styles[events[i]] = []
        }
        var keys = Object.keys(styleObject)
        for (var i=0;i<keys.length;i++)
        {
            if(events.includes(keys[i]) === false) 
            {   
                var assignStyleDefault = () => {
                    var indexCopy = i
                    return () => element.style[keys[indexCopy]]=styleObject[keys[indexCopy]]
                }
                styles[DEFAULT_EVENT].push(assignStyleDefault())
            }
            else if (events.includes(keys[i]))
            {
                var keysEvent = Object.keys(styleObject[keys[i]])
                for (var j=0;j<keysEvent.length;j++)
                {
                    var assignStyleEvent = () => 
                    {
                        var keysEventCopy = [...keysEvent]
                        var indexCopy = i
                        var indexCopyj = j
                        return () => element.style[keysEventCopy[indexCopyj]]=styleObject[keys[indexCopy]][keysEventCopy[indexCopyj]]
                    }
                    styles[keys[i]].push(assignStyleEvent())
                }
            }
        }
        return styles;
    }
}
export const processIconStyleMethod = (EVENTS_OF_COMPONENT, DEFAULT_EVENT= 'default') => { 
    return (element, styleObject, events= EVENTS_OF_COMPONENT) => {
        const styles = {}
        styles [DEFAULT_EVENT] = []
        for (var i=0; i<events.length;i++)
        {
            styles[events[i]] = []
        }
        var keys = Object.keys(styleObject)
        for (var i=0;i<keys.length;i++)
        {
            if(events.includes(keys[i]) === false) 
            {   
                var assignStyleDefault = () => {
                    var indexCopy = i
                    return () => element.setAttribute(keys[indexCopy],styleObject[keys[indexCopy]])
                }
                styles[DEFAULT_EVENT].push(assignStyleDefault())
            }
            else if (events.includes(keys[i]))
            {
                var keysEvent = Object.keys(styleObject[keys[i]])
                for (var j=0;j<keysEvent.length;j++)
                {
                    var assignStyleEvent = () => 
                    {
                        var keysEventCopy = [...keysEvent]
                        var indexCopy = i
                        var indexCopyj = j
                        return () => element.setAttribute(keysEventCopy[indexCopyj],styleObject[keys[indexCopy]][keysEventCopy[indexCopyj]])
                    }
                    styles[keys[i]].push(assignStyleEvent())
                }
            }
        }
        return styles;
    }
}
export const destructureObject = (EVENTS_OF_COMPONENT, DEFAULT_EVENT= 'default') => { 
    return (styleObject, events= EVENTS_OF_COMPONENT) => {
        const copyStyles = JSON.parse(JSON.stringify(styleObject))
        const styles = {}
        events.forEach((ev) =>{
            styles [ev] = {...copyStyles[ev]}
            delete copyStyles[ev]
        })
        styles [DEFAULT_EVENT] = {...copyStyles}
        return styles;
        
    }
}
export const convertObjectToStyleString = (style) => 
{
    
    return Object.entries(style).map(([k, v]) => { 
        k = k.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);  
        return `${k}:${v}`}).join(';\n')
}