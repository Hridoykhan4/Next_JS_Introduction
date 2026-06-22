import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

const FALLBACK_PRODUCTS = [
  { _id: "fallback-1", productName: "Laptop", status: 201 },
  { _id: "fallback-2", productName: "Mobile", status: 201 },
  { _id: "fallback-3", productName: "TV", status: 201 },
];

export async function GET() {
  try {
    const collection = await dbConnect("practice_data");
    const data = await collection.find({}).toArray();
    return Response.json({ success: true, data });
  } catch (err) {
    console.error("GET /api/items failed:", err);
    return Response.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const productName = body?.productName;

    if (!productName || productName.trim() === "") {
      return Response.json(
        {
          success: false,
          message: "Product name is required and cannot be empty",
        },
        { status: 400 },
      );
    }

    const collection = await dbConnect("practice_data");
    const result = await collection.insertOne({
      productName,
      status: 201,
    });
    revalidatePath("/products");
    return Response.json({ result, success: true }, { status: 201 });
  } catch (err) {
    console.error("POST /api/items failed:", err);
    return Response.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
