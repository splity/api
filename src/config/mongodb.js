import mongoose from 'mongoose';

require('dotenv').config();

const databaseURL = () => {
  if (process.env.ENV !== 'development') {
    let host = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DATABASE}`;

    if (process.env.MONGO_OPTIONS === undefined) {
      return host;
    }

    host += `?${process.env.MONGO_OPTIONS}`;
    return host;
  }

  return process.env.MONGO_CLUSTER || 'mongodb://127.0.0.1/split-app';
};

let cachedDb = null;
const connectToDatabase = async () => {
  try {
    if (cachedDb) {
      return Promise.resolve(cachedDb);
    }

    const db = await mongoose.connect(databaseURL(), {
      autoIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: false,
      useFindAndModify: false,
      connectTimeoutMS: 4000,
    });
    cachedDb = db;
    return Promise.resolve(cachedDb);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectToDatabase;
