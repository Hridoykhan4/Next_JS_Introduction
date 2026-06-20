export const metadata = {
    title: "Products",
    description: "All about our Compliance BD Products"
}

const Products = async () => {
    const res = await fetch('http://localhost:3000/api/items', {
        // Forcefully cache koracchi, jeno barbar network request na kre
        cache: 'force-cache'
    });
    const { data: products } = await res.json();
    return (
        <div>
            <div className="grid grid-cols-4 gap-5">
                {
                    products.map(product => (
                        <div className="border p-5 rounded-2xl" key={product._id}>
                            {product?.productName}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;