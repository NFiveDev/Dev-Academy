import mongoose from 'mongoose';

const ENV_CONNECTION_STRING = process.env.MONGO_URL;

const connect = async () => {
  if (!ENV_CONNECTION_STRING) throw Error('NO CONNECTION STRING SPECIFIED');

  try {
    await mongoose.connect(ENV_CONNECTION_STRING);
  } catch (error) {
    throw new Error('connection failed with err: ' + error);
  }
};

export default connect;
