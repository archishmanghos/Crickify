class ResponseHandler {
    /**
     * Sends a success response.
     * @param {Object} res - The response object.
     * @param {Object} [result={}] - The response body.
     */
    static respondOk(res, result = {}) {
        res.status(200).send(result)
    }

    /**
     * Sends an error response.
     * @param {Object} res - The response object.
     * @param {Object} [result={}] - The response body.
     * @param {number} [errorCode=500] - The default error code.
     */
    static respondError(res, result = {}, errorCode = 500) {
        res.status(result.code || errorCode).send({
            message: result.message,
            ...(result.errors && { errors: result.errors })
        })
    }
}

export default ResponseHandler
