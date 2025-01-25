import { Sequelize } from 'sequelize'
import logger from '../logs/logger.js'

const sequelize = new Sequelize(process.env.POSTGRES, {
    dialect: 'postgres',
    logging: console.log
})

const connectPostgres = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log(
            'Connection with postgres has been established successfully.'
        )
    } catch (error) {
        logger.error(`Unable to connect to the database with error: ${error}`)
    }
}

const SequelizeConnection = { sequelize, connectPostgres }

export default SequelizeConnection
