import express from 'express';
import config from './config';
import dbConnect from './db';
const app = express();

app.use(express.static('public'));

app.listen(config.port, console.log(' ---Server connected--- ' + config.port));
dbConnect();
