const mongoose = require('mongoose');

const DB = 'mongodb+srv://panditbhupendra219:PtZxBRqHTex56qoR@cluster0.ggysf2a.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;