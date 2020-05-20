const mongoose = require('mongoose');
const config = require('./config');

const dbConnect = async () => {
	try {
		await mongoose.connect(config.db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('---Data base Connected---');
	} catch (err) {
		console.log('Database Error --- ' + err);
		process.exit(1);
	}
};

module.exports = dbConnect;
