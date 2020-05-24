import express from 'express';
import config from './config';
// import data from './data.json';
import dbConnect from './db';

// import UserSchema from '../model/User';
const app = express();

app.use(express.static('public'));

app.listen(
	config.port,
	console.log(' ---Server  $$ connected--- ' + config.port),
);
dbConnect();
app.use(express.json({ extended: false }));
//Test
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept',
	);
	next();
});
app.get('/', (req, res) => {
	res.send('Connected');
});

app.use('/api/register', require('./router/register'));
app.use('/api/signin', require('./router/auth'));

// app.use('/api', require('./router/register'));
// app.use('api');
