const mongoose =  require('mongoose');
const { MONGODB_CONNECTION_STRING } = require('../config/index');

let cachedConnection = null;

const dbConnect = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    mongoose.set('strictQuery', false);
    const connection = await mongoose.connect(MONGODB_CONNECTION_STRING);
    console.log(`Database connected to host: ${connection.connection.host}`);
    cachedConnection = connection;
    return connection;
  } catch (error) {
    console.error(`Error connecting to the database: ${error}`);
    throw error;
  }
};

module.exports = dbConnect;
