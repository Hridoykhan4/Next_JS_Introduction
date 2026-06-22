import { MongoClient, ServerApiVersion } from "mongodb";

let clientPromise;

async function getClient() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME || "PRACTICE_NEXTJS_10";

  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  if (!clientPromise) {
    clientPromise = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
      socketTimeoutMS: 5000,
    }).connect();
  }

  return clientPromise;
}

async function dbConnect(collectionName) {
  const client = await getClient();
  const dbName = process.env.DB_NAME || "PRACTICE_NEXTJS_10";
  return client.db(dbName).collection(collectionName);
}

export default dbConnect;
