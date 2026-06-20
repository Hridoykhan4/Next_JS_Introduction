'use client'

import { useRouter } from "next/navigation";

export default function AddProductForm() {
    const router = useRouter()
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const productName = e.target.productName.value;
        const payload = {
            productName
        }
        try {
            const res = await fetch('http://localhost:3000/api/items', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            form.reset()
            router.push('/products')
        }
        catch (err) {
            console.log(err?.message || 'failed');
        }
    }
    return (
        <div>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input placeholder="Product Name" type="text" name="productName" className="border" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
