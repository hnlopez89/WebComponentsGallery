import {
    ICON_NOTIFICATION_VARIANT,
    REGULAR_NOTIFICATION_VARIANT,
    ICON_CLOSE_NOTIFICATION_VARIANT,
    REGULAR_CLOSE_NOTIFICATION_VARIANT,
} from "../constants.js"
import { notificationRegularComponent } from "./regularNotificationVariant.js"
import { closeNotificationtComponent } from "./closeNotificationVariant.js"
import { notificationIconComponent } from "./iconNotificationVariant.js"
import { notificationFullComponent } from "./fullNotificationVariant.js"
const COMPONENTS = []
COMPONENTS[REGULAR_NOTIFICATION_VARIANT] = notificationRegularComponent
COMPONENTS[REGULAR_CLOSE_NOTIFICATION_VARIANT] = closeNotificationtComponent
COMPONENTS[ICON_NOTIFICATION_VARIANT] = notificationIconComponent
COMPONENTS[ICON_CLOSE_NOTIFICATION_VARIANT] = notificationFullComponent

export {COMPONENTS}
