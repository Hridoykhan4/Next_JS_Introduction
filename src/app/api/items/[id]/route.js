import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const collection = await dbConnect("practice_data");
    const result = await collection.findOne({
      _id: new ObjectId(id),
    });
    return Response.json(result);
  } catch (err) {
    console.error("GET /api/items/[id] failed:", err);
    return Response.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    const collection = await dbConnect("practice_data");
    const result = await collection.deleteOne({
      _id: new ObjectId(id),
    });
    return Response.json(result);
  } catch (err) {
    console.error("DELETE /api/items/[id] failed:", err);
    return Response.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

export async function PATCH(req, { params }) {
  try {
    const test = await req.json();
    const { id } = await params;
    const collection = await dbConnect("practice_data");
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...test } },
    );
    return Response.json(result);
  } catch (err) {
    console.error("PATCH /api/items/[id] failed:", err);
    return Response.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
