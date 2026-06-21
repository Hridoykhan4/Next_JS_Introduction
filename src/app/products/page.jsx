import dbConnect from "@/lib/dbConnect";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Products",
    description: "All about our Compliance BD Products"
};

const Products = async () => {
    const products = await dbConnect("practice_data")
        .find({})
        .sort({ _id: -1 })
        .toArray();

    return (
        <div>
            <div className="grid grid-cols-4 gap-5">
                {products?.map((product) => (
                    <div className="border p-5 rounded-2xl" key={product._id}>
                        {product?.productName}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;