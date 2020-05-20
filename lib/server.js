import express from 'express';
import config from './config';
import dbConnect from './db';
const router = express.Router();
import UserSchema from '../model/User';
const app = express();

app.use(express.static('public'));

app.listen(config.port, console.log(' ---Server connected--- ' + config.port));
dbConnect();
app.use(express.json({ extended: false }));
//Test
app.get('/', (req, res) => {
	console.log('connected');
});

app.use('/add', require('./router.js'));
