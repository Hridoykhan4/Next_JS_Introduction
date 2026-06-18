import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, {params}) {
  const p = await params;
  console.log(p.id);
  const result = await dbConnect("practice_data").findOne({
    _id: new ObjectId(p.id),
  });
  return Response.json(result);
}


// export async  function DELETE(req, params) {

// }    