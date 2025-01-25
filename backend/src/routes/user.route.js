import express from 'express'

import UserController from '../controllers/user.controller.js'
import Validator from '../../utils/validator.js'
import UserSchema from '../joiSchemas/user.schema.js'

const router = express.Router()
const userController = new UserController()
const validator = new Validator()

router.post(
    '/user/register',
    await validator.joiValidate(UserSchema.register),
    userController.registerUser
)

export default router
