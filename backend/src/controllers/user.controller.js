import logger from '../../logs/logger.js'
import ResponseHandler from '../../utils/response.js'
import UserService from '../services/user.service.js'

class UserController {
    constructor() {
        this.userService = new UserService()
    }

    registerUser = async (req, res) => {
        logger.info(`Starting User Controller...`)
        try {
            const userDetails = req.body
            const response = await this.userService.registerUser(userDetails)
            logger.info(
                `Response from User Service: ${JSON.stringify(response, null, 2)}`
            )

            ResponseHandler.respondOk(res, response)
        } catch (error) {
            ResponseHandler.respondError(res, error)
        }
    }
}

export default UserController
