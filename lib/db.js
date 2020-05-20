import mongoose from 'mongoose';
import config from './config';

const dbConnect = async () => {
	try {
		await mongoose.connect(config.db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
		console.log('--dbConnected--');
	} catch (error) {
		console.log('Database error ' + error);
	}
};

module.exports = dbConnect;
