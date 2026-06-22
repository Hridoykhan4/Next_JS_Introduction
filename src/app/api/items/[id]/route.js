import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = await params;
  const collection = await dbConnect("practice_data");
  const result = await collection.findOne({
    _id: new ObjectId(id),
  });
  return Response.json(result);
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  const collection = await dbConnect("practice_data");
  const result = await collection.deleteOne({
    _id: new ObjectId(id),
  });
  return Response.json(result);
}

export async function PATCH(req, { params }) {
  const test = await req.json();
  const { id } = await params;
  const collection = await dbConnect("practice_data");
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { ...test } },
  );
  return Response.json(result);
}
