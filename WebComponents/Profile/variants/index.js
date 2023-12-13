import {LOGOUT_PROFILE_VARIANT,
    LOG_IN_INITIALS_PROFILE_VARIANT,
    LOG_IN_PICTURE_PROFILE_VARIANT,
    LOG_IN_INITIALS_BADGE_PROFILE_VARIANT,
    LOG_IN_PICTURE_BADGE_PROFILE_VARIANT,
    } from "../constants.js"
import { profileLogoutComponent } from "./profileLogout.js"
import { profileInitialsComponent } from "./profileInitials.js"
import { profilePictureComponent } from "./profilePicture.js"
import { profileInitialsBadgeComponent } from "./profileInitialsBadge.js"
import { profilePictureBadgeComponent } from "./profilePictureBadge.js"
const COMPONENTS = []
COMPONENTS[LOGOUT_PROFILE_VARIANT] = profileLogoutComponent
COMPONENTS[LOG_IN_INITIALS_PROFILE_VARIANT] = profileInitialsComponent
COMPONENTS[LOG_IN_PICTURE_PROFILE_VARIANT] = profilePictureComponent
COMPONENTS[LOG_IN_INITIALS_BADGE_PROFILE_VARIANT] = profileInitialsBadgeComponent
COMPONENTS[LOG_IN_PICTURE_BADGE_PROFILE_VARIANT] = profilePictureBadgeComponent

export {COMPONENTS}
