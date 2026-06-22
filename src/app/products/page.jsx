import { getProducts } from "../actions/products/getProducts";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Products",
    description: "All about our Compliance BD Products",
};


const Products = async () => {
    let products = await getProducts();

    return (
        <div>
            {products.length === 0 ? (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
                    No Product Available
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