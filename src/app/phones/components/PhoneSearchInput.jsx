'use client'
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PhoneSearchInput = () => {
    const [phones, setPhones] = useState([]);
    const [search, setSearch] = useState('s');
    const pathname = usePathname();
    const router = useRouter()

    useEffect(() => {
        const query = { search };
        const urlQueryParams = new URLSearchParams(query);
        const url = `${pathname}?${urlQueryParams}`
        router.push(url)
    }, [search, pathname, router])

    return (
        <div>
            <input type="text" className="border" onChange={(e) => setSearch(e.target.value)} />
        </div>
    );
};

export default PhoneSearchInput;