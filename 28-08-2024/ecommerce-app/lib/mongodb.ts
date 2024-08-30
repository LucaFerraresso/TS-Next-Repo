//connect to mongo
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cachedConnection: typeof mongoose | null = null;

async function connectMongo() {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    cachedConnection = await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
    return cachedConnection;
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    throw error;
  }
}

export default connectMongo;

//come potrei configurare la connessione a due database?
export const connectMongo2 = async () => {
  try {
    const connection = await mongoose.createConnection(MONGODB_URI, {
      bufferCommands: false,
    });
    return connection;
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    throw error;
  }
};
