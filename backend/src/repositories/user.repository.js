import User from '../models/user.model.js'

class UserRepository {
    constructor() {
        this.user = User
    }

    getUserByEmail = async (email) => this.user.findOne({ email })

    createUser = async (user) => {
        const createdUser = await this.user.create(user)
        return createdUser.get({ plain: true })
    }
}

export default UserRepository
