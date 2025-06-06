const mongoose = require('mongoose');

// PUBLIC_INTERFACE
/**
 * Connect to MongoDB using Mongoose.
 * URI is loaded from the environment variable MONGODB_URI.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/aurasphere', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`MongoDB connection error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
