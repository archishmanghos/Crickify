const { Sequelize } = require('sequelize');
const { sequelize } = require('../../db/seq.connection');

const User = sequelize.define('User', {
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
            this.setDataValue('email', value.toLowerCase());
        }
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    },
    displayName: {
        type: Sequelize.STRING
    },
    dob: {
        type: Sequelize.DATEONLY
    },
    profilePic: {
        type: Sequelize.STRING
    },
    timeZone: {
        type: Sequelize.STRING,
        defaultValue: 'Asia/Kolkata'
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
});

module.exports = { User };
