import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = await params;
  const result = await dbConnect("practice_data").findOne({
    _id: new ObjectId(id),
  });
  return Response.json(result);
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  const result = await dbConnect("practice_data").deleteOne({
    _id: new ObjectId(id),
  });
  return Response.json(result);
}

export async function PATCH(req, { params }) {
  const test = await req.json();
  const { id } = await params;
  const result = await dbConnect("practice_data").updateOne(
    { _id: new ObjectId(id) },
    { $set: { ...test } },
  );
  return Response.json(result);
}
