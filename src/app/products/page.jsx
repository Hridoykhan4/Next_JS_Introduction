import dbConnect from "@/lib/dbConnect";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Products",
    description: "All about our Compliance BD Products",
};

const FALLBACK_PRODUCTS = [
    { _id: "fallback-1", productName: "Laptop" },
    { _id: "fallback-2", productName: "Mobile" },
    { _id: "fallback-3", productName: "TV" },
    { _id: "fallback-4", productName: "Fridge" },
];

const Products = async () => {
    let products = [];

    try {
        const collection = await dbConnect("practice_data");
        products = await collection
            .find({})
            .sort({ _id: -1 })
            .toArray();
    } catch (error) {
        console.error("Products page error:", error);
        products = [];
    }

    return (
        <div>
            {products.length === 0 ? (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
                    {FALLBACK_PRODUCTS.map((product) => (
                        <div className="rounded-2xl border p-5" key={product._id}>
                            {product.productName}
                        </div>
                    ))}
                </div>
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
};

export default Products;