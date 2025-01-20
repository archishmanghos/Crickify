import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.POSTGRES, {
    dialect: 'postgres',
    logging: console.log
});

const connectPostgres = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log(
            'Connection with postgres has been established successfully.'
        );
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

const SequelizeConnection = { sequelize, connectPostgres };

export default SequelizeConnection;