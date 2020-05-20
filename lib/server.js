const express = require('express');
const config = require('./config');
const app = express();
const dbConnect = require('./db');

app.use(express.static('public'));

app.listen(config.port, console.log(' --Server connected-- ' + config.port));
dbConnect();
