import { BLACK } from "../commonMethodsAndConstants/Styles/commonConstants";

// attributeNames
export const ICON_COLOR_ATTRIBUTE = 'data-color';
export const ICON_SIZE_ATTRIBUTE = 'data-size'
export const ICON_WIDTH_ATTRIBUTE = 'data-width';
export const ICON_HEIGHT_ATTRIBUTE = 'data-height';
export const ICON_SELECTION_ATTRIBUTE = 'data-icon-selection';
export const ICON_ANIMATION_DURATION = 'data-duration'
// defaultValues

export const COLOR_DEFAULT = BLACK;
export const WIDTH_DEFAULT = '32';
export const HEIGHT_DEFAULT = '32';
export const DURATION_DEFAULT = '0.50';




export const ICON_DEFAULT = 'default';
export const ICON_360_ICON_OPTION = "360"
export const ALERT_ROUNDED_ICON_OPTION = "alert-rounded"
export const ALERT_TRIANGLE_ICON_OPTION = "alert-triangle"
export const APPROVAL_CHECK_ICON_OPTION = "approval-check"
export const APPROVAL_ICON_OPTION = "approval"
export const ARROW_ICON_OPTION = "arrow"
export const ARROW_DOWN_ICON_OPTION = "arrow-down"
export const ARROW_RIGHT_ICON_OPTION = "arrow-right"
export const ARROW_LEFT_ICON_OPTION = "arrow-left"
export const BAG_ICON_OPTION = "bag"
export const BILL_ICON_OPTION = "bill"
export const CO2_ICON_OPTION = "cO2"
export const CABLE_ICON_OPTION = "cable"
export const CALCULATOR_ICON_OPTION = "calculator"
export const CALENDAR_ICON_OPTION = "calendar"
export const CAR_FRONTAL_ICON_OPTION = "car-frontal"
export const CAR_LATERAL_ICON_OPTION = "car-lateral"
export const CART_ICON_OPTION = "cart"
export const CHECK_ICON_OPTION = "check"
export const CLOSE_ICON_OPTION = "close"
export const CONTACT_ICON_OPTION = "contact"
export const COPY_ICON_OPTION = "copy"
export const CREDIT_CARD_ICON_OPTION = "credit-card"
export const DELETE_ICON_OPTION = "delete"
export const DOCUMENT_DOWNLOAD_ICON_OPTION = "document-download"
export const DOCUMENT_ICON_OPTION = "document"
export const DOTS_ICON_OPTION = "dots"
export const DOWNLOAD_ICON_OPTION = "download"
export const EDIT_ICON_OPTION = "edit"
export const ELECTRIC_ICON_OPTION = "electric"
export const EMPTY_CART_ICON_OPTION = "empty-cart"
export const ENERGY_ICON_OPTION = "energy"
export const EXPAND_ICON_OPTION = "expand"
export const EXTERNAL_ICON_OPTION = "external"
export const EYE_CLOSED_ICON_OPTION = "eye-closed"
export const EYE_OPEN_ICON_OPTION = "eye-open"
export const FILTERS_ICON_OPTION = "filters"
export const FUEL_ICON_OPTION = "fuel"
export const GARAGE_ICON_OPTION = "garage"
export const INFO_ROUNDED_ICON_OPTION = "info-rounded"
export const INFO_TRIANGLE_ICON_OPTION = "info-triangle"
export const LIKE_FILL_ICON_OPTION = "like-fill"
export const LIKE_ICON_OPTION = "like"
export const LOADER_ICON_OPTION = "loader"
export const LOCATION_ICON_OPTION = "location"
export const LOCK_ICON_OPTION = "lock"
export const LOGOUT_ICON_OPTION = "logout"
export const MAIL_ICON_OPTION = "mail"
export const MALL_ICON_OPTION = "mall"
export const MINUS_ICON_OPTION = "minus"
export const MOBILE_ICON_OPTION = "mobile"
export const NOTIFICATION_ICON_OPTION = "notification"
export const ORDERS_ICON_OPTION = "orders"
export const PAUSE_ICON_OPTION = "pause"
export const PIGGY_ICON_OPTION = "piggy"
export const PLAY_ICON_OPTION = "play"
export const PLUS_ICON_OPTION = "plus"
export const POSITION_ICON_OPTION = "position"
export const PROFILE_ICON_OPTION = "profile"
export const REPAIR_ICON_OPTION = "repair"
export const ROAD_ICON_OPTION = "road"
export const SEARCH_ICON_OPTION = "search"
export const SHARE_ICON_OPTION = "share"
export const STAR_ICON_OPTION = "star"
export const STORE_ICON_OPTION = "store"
export const SUCCESS_ICON_ANIMATED_ICON_OPTION = 'success icon animated'
export const SUITCASE_ICON_OPTION = "suitcase"
export const SUPPORT_ICON_OPTION = "support"
export const TAG_ICON_OPTION = "tag"
export const TICKET_ICON_OPTION = "ticket"
export const TIME_ICON_OPTION = "time"
export const UPHOLSTERY_ICON_OPTION = "upholstery"
export const VIEW_LIST_ICON_OPTION = "view-list"
export const VIEW_ICON_OPTION = "view"
export const WARRANTY_ICON_OPTION = "warranty"
export const WHATSAPP_ICON_OPTION = "whatsapp"
export const WLAN_ICON_OPTION = "wlan"
export const WRITE_ICON_OPTION = "write"
export const WRONG_ICON_OPTION = "wrong"




const ICON_ATTRIBUTES = [];
ICON_ATTRIBUTES.push({
    attributeName: ICON_COLOR_ATTRIBUTE,
    defaultValue : COLOR_DEFAULT,
    proccessValue: (value) => {return   value}

})
ICON_ATTRIBUTES.push({
    attributeName: ICON_WIDTH_ATTRIBUTE,
    defaultValue : WIDTH_DEFAULT,
    proccessValue: (value) => {return   value}

})
ICON_ATTRIBUTES.push({
    attributeName: ICON_HEIGHT_ATTRIBUTE,
    defaultValue : HEIGHT_DEFAULT,
    proccessValue: (value) => {return   value}

})
ICON_ATTRIBUTES.push({
    attributeName: ICON_SIZE_ATTRIBUTE,
    defaultValue : null,
    proccessValue: (value) =>  {return value}
})
ICON_ATTRIBUTES.push({
    attributeName: ICON_SELECTION_ATTRIBUTE,
    defaultValue : PLUS_ICON_OPTION,
    proccessValue: (value) =>  {return value }
})

ICON_ATTRIBUTES.push({
    attributeName: ICON_ANIMATION_DURATION,
    defaultValue : DURATION_DEFAULT,
    proccessValue: (value) =>  {return value}
})


export {ICON_ATTRIBUTES};


export const PARTICULAR_ICON_PATH_ATTRIBUTE = 'path'
export const PARTICULAR_ICON_VIEWBOX_ATTRIBUTE = 'viewbox'
export const PARTICULAR_ICON_COMPONENT_ATTRIBUTE = 'component'
export const PARTICULAR_ICON_POLYGON_ATTRIBUTE = 'polygon'

export const REGULAR_ICONS_COMPONENT = 'regular icons component'
export const ANIMATED_ICONS_COMPONENT = 'animated icons component'
export const ACCORDION_ICONS_COMPONENT = 'accordion icons component'

export const NAME_OF_COMPONENT = 'component-icons'

