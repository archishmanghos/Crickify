import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import UserRepository from '../repositories/user.repository.js'
import ApplicationError from '../../utils/error.js'
import logger from '../../logs/logger.js'

class UserService {
    constructor() {
        this.userRepository = new UserRepository()
    }

    generateJWTToken = (id) =>
        jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' })

    registerUser = async (userDetails) => {
        logger.info(`Starting User Service...`)
        logger.info(`User Details: ${JSON.stringify(userDetails, null, 2)}`)
        try {
            const existingUser = await this.userRepository.getUserByEmail(
                userDetails.email
            )
            logger.info(`Existing User: ${existingUser}`)
            if (existingUser) {
                throw ApplicationError.create(
                    ApplicationError.Conflict,
                    ApplicationError.errorMessages.EXISTING_ENTITY('User')
                )
            }

            const salt = await bcrypt.genSalt(
                parseInt(process.env.SALT_ROUND, 10)
            )
            const hashedPassword = await bcrypt.hash(userDetails.password, salt)
            logger.info(
                `Password generated: ${JSON.stringify(hashedPassword, null, 2)}`
            )

            const user = {
                ...userDetails,
                password: hashedPassword
            }
            logger.info(
                `User generated for DB: ${JSON.stringify(user, null, 2)}`
            )

            const createdUser = await this.userRepository.createUser(user)
            logger.info(
                `Created User in DB: ${JSON.stringify(createdUser, null, 2)}`
            )

            const { id, email, firstName, lastName } = createdUser

            const token = this.generateJWTToken(id)
            logger.info(`Generated Token: ${token}`)

            return {
                id,
                email,
                firstName,
                lastName,
                token
            }
        } catch (error) {
            logger.error(`Error in registering User: ${error}`)
            throw ApplicationError.create(error.code, error)
        }
    }
}

export default UserService
