import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const collection = await dbConnect("practice_data");
    const data = await collection.find({}).toArray();
    return Response.json({ success: true, data });
  } catch (err) {
    return Response.json(
      { success: false, error: err.message },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    const { productName } = await req.json();
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
    return Response.json(
      { success: false, error: err.message },
      { status: 500 },
    );
  }
}
