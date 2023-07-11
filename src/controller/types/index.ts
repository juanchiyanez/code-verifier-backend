/**
 * Basic JSON Response for Controllers
 */
export type BasicResponse = {
    message: string
}

/**
 * Error JSON Response for Controllers
 */
export type ErrorResponse = {
    error: string,
    message: string
}

/**
 * Goodbye JSON Response for Controllers
 */
export type GoodbyeResponse = {
    date: string,
    message: string
}