import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import http from 'http'

import SequelizeConnection from './db/seq.connection.js'
import logger from './logs/logger.js'
import router from './src/routes/user.route.js'

const app = express()
app.use(
    cors({
        origin: process.env.CORS_ORIGIN.split(','),
        credentials: true
    })
)
app.use(express.json())
app.use('/api', router)

const server = http.createServer(app)

SequelizeConnection.connectPostgres()
    .then(() =>
        server.listen(process.env.PORT, () =>
            console.log(`Server running on PORT ${process.env.PORT}`)
        )
    )
    .catch((error) => logger.error(`Server ran into error: ${error}`))
