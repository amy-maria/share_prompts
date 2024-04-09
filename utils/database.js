import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }
  try {
    await mongoose.connect(process.env.local.MONGODB_URI, {
      dbName: 'share_prompts',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //connectTimeoutMS: 10000,
    });

    //Ping MongoDB to check if connection is successful from docs //
    const db = mongoose.connection;
    await db.command({ ping: 1 });

    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};
