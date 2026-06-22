import { MongoClient, ServerApiVersion } from "mongodb";

let clientPromise;

async function getClient() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME;

  if (!uri || !dbName) {
    throw new Error("Missing MONGODB_URI or DB_NAME environment variables");
  }

  if (!clientPromise) {
    clientPromise = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    }).connect();
  }

  return clientPromise;
}

async function dbConnect(collectionName) {
  const client = await getClient();
  return client.db(process.env.DB_NAME).collection(collectionName);
}

export default dbConnect;
