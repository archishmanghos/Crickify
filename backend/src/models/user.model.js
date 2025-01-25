import Sequelize from 'sequelize'

import SequelizeConnection from '../../db/seq.connection.js'

const User = SequelizeConnection.sequelize.define('User', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        },
        set(value) {
            this.setDataValue('email', value.toLowerCase())
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    },
    userName: {
        type: Sequelize.STRING
    },
    dob: {
        type: Sequelize.DATEONLY
    },
    profilePic: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.ENUM('male', 'female', 'other')
    },
    contactNumber: {
        type: Sequelize.STRING,
        validate: {
            is: /^\+\d[\d\s-]*$/,
            len: [7, 16]
        }
    }
})

export default User
