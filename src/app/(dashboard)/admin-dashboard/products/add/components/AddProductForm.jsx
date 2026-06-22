'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddProductForm() {
    const router = useRouter();
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const form = e.target;
        const productName = form.productName.value;

        if (!productName || !productName.trim()) {
            setError("Product name is required !!");
            return;
        }

        try {
            const res = await fetch("/api/items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ productName })
            });

            const data = await res.json();
            console.log(data);

            if (!res.ok) {
                throw new Error(data?.message || "Failed to add product");
            }

            form.reset();
            router.push("/products");
        } catch (err) {
            setError(err.message || "Something went wrong");
        }
    };

    return (
        <div>
            <form className="flex flex-col gap-5 max-w-sm" onSubmit={handleSubmit}>
                <input
                    placeholder="Product Name"
                    type="text"
                    name="productName"
                    className={`border p-2 ${error ? "border-red-500" : "border-gray-300"}`}
                    required
                />

                {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}

                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
}
