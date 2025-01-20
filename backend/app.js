import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import http from 'http';

import SequelizeConnection from './db/seq.connection.js';

const app = express();
app.use(
  cors({
      origin: process.env.CORS_ORIGIN.split(','),
      credentials: true
  })
);
app.use(express.json());

const server = http.createServer(app);

SequelizeConnection.connectPostgres()
  .then(() =>
    server.listen(3333, () => console.log("Server listening on PORT 3000"))
  )
  .catch((error) => console.error(error));
