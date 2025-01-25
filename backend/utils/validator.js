import ResponseHandler from './response.js'

class Validator {
    joiValidate =
        async (schema, type = 'body') =>
        (req, res, next) => {
            const { error } = schema.validate(req[type])
            if (error) {
                const errorMessages = error.details[0].message.replace(
                    /"/g,
                    "'"
                )
                return ResponseHandler.respondError(
                    res,
                    { message: errorMessages },
                    400
                )
            }

            next()
        }
}

export default Validator
