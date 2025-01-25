class ApplicationError extends Error {
    constructor(message, data = {}, code = ApplicationError.InvalidOperation) {
        super()
        Object.assign(this, data)
        this.message =
            message || ApplicationError.errorMessages.SOMETHING_WENT_WRONG
        this.code = code
    }

    /**
     * Creates a new instance of `ApplicationError` based on the provided error and data.
     *
     * @param {number|string|Error} err - The error identifier. It can be:
     *   - A number representing an HTTP status code (e.g., 400, 404).
     *   - A string matching a predefined ApplicationError key (e.g., "BadRequest").
     *   - An `Error` object or any other value.
     * @param {Object|string} [data] - Additional context for the error. It can be:
     *   - An object containing extra information (e.g., `{ userId: 123 }`).
     *   - A string representing the error message.
     * @returns {ApplicationError} A new instance of `ApplicationError`.
     *
     * @example
     * // Using an HTTP status code
     * const error1 = ApplicationError.create(400, { message: "Invalid input", field: "email" });
     * console.log(error1.message); // "Invalid input"
     * console.log(error1.code); // 400
     *
     * @example
     * // Using a predefined key
     * const error2 = ApplicationError.create("NotFound", { resource: "User" });
     * console.log(error2.message); // "NotFound"
     * console.log(error2.code); // 404
     *
     * @example
     * // Using an Error object
     * const error3 = ApplicationError.create(new Error("Custom error"));
     * console.log(error3.message); // "Custom error"
     * console.log(error3.code); // 500 (default)
     */
    static create(err, data) {
        let code = ApplicationError.InvalidOperation
        let message =
            typeof data === 'string'
                ? data
                : data?.message || 'InvalidOperation'

        if (typeof err === 'number') {
            const key = Object.keys(ApplicationError).find(
                (k) => ApplicationError[k] === err
            )
            code = key ? ApplicationError[key] : err
            message = message || key || String(err)
        } else if (typeof err === 'string' && ApplicationError[err]) {
            code = ApplicationError[err]
            message = message || err
        } else if (typeof err !== 'string' && !data) {
            message = err?.message || 'InvalidOperation'
            data = err
        }

        return new ApplicationError(message, data, code)
    }
}

ApplicationError.BadRequest = 400
ApplicationError.InvalidOperation = 500
ApplicationError.Unauthorized = 401
ApplicationError.Forbidden = 403
ApplicationError.NotFound = 404
ApplicationError.Conflict = 409
ApplicationError.NotSupported = 415
ApplicationError.NotImplemented = 501
ApplicationError.Timeout = 504

ApplicationError.errorMessages = {
    SOMETHING_WENT_WRONG: 'Something went wrong',
    NON_EXISTING_ENTITY: (entity) => `${entity} does not exist`,
    EXISTING_ENTITY: (entity) => `${entity} already exists`
}

export default ApplicationError
