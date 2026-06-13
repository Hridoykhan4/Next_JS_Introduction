'use client'

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/* Ei component er kaj hocche input field theke amra j value dicchi, sheta k ekta searchparams e create kre route kore dicche & then shei searchParams k destructiure kore MealsPage kaj kortase */

/* User interactivitz handle korar jnne amra client component use kortasi */
/* Next js er principle maintain korar jnne j kaj amra ekTa component e kortam sheta duita separate component e kortasi, component duitar moddhe communicate hoitase url params er through te */

export default function MealSearchInput() {
    // const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('')
    const pathname = usePathname();
    const router = useRouter()
    /* 
    server component e pathabo
    routing kore search params url e load korbo, 
     */

    useEffect(() => {
        const searchQuery = { search };
        const urlQueryParams = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlQueryParams}`;
        router.push(url)
        // fetchMeals()

    }, [search, pathname, router])


    return (
        <div>
            <input type="text" value={search} className='border mt-5' onChange={(e) => setSearch(e.target.value)} />

        </div>
    )
}
