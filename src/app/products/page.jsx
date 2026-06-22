import dbConnect from "@/lib/dbConnect";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Products",
    description: "All about our Compliance BD Products",
};

const Products = async () => {
    try {
        const collection = await dbConnect("practice_data");
        const products = await collection
            .find({})
            .sort({ _id: -1 })
            .toArray();

        return (
            <div>
                {products.length === 0 ? (
                    <p className="text-gray-600">No products available right now.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
                        {products.map((product) => (
                            <div className="rounded-2xl border p-5" key={product._id}>
                                {product.productName}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error("Products page error:", error);

        return (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
                Products could not be loaded right now. Please try again later.
            </div>
        );
    }
};

export default Products;