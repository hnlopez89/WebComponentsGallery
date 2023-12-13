import {REGULAR_PAGINATION_VARIANT} from "../constants.js"
import {regularPaginationComponent} from "./regularPagination.js"
import { REGULAR_COUNTER_VARIANT } from "../constants.js"
import { regularPaginationBulletComponent } from "./regularBullet.js"
const COMPONENTS = []
COMPONENTS[REGULAR_PAGINATION_VARIANT] = regularPaginationComponent
COMPONENTS[REGULAR_COUNTER_VARIANT] = regularPaginationBulletComponent
export {COMPONENTS}
