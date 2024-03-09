// This defines the connection purely

const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/Sidenotes';

mongoose.connect(uri);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Find documents in the 'users' collection
db.once('open', () => {
// Functions go in here
});

