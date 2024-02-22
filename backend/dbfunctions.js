// This defines the db connection string and the functions that occur to and from the database
const {MongoClient} = require('mongodb');
const mongoURL = 'mongodb://localhost:27017/SidenotesDB';

// The db saved to a variable
MongoClient.connect(mongoURL)
  .then((client) => {
    // Use the MongoDB client and perform database operations
    const db = client.db();
    console.log('Db successfully connected');
    // Define routes that interact with the database
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });
