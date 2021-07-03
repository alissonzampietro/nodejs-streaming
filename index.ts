import * as dotenv from 'dotenv';
import Routes from './src/routes';
import Middlewares from './src/middlewares/index';
dotenv.config();
import express from 'express';
const app = express();

Middlewares(app);
Routes(app);

app.listen(process.env.PORT || 5003);