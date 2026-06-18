import { Roboto } from "next/font/google";
const roboto = Roboto({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    variable: "--font-roboto",
    display: "swap",
});
/* 
    ---- WHEN TO USE CSR

*/

/* 
    ------------------
    User interactivity amra j input field dicchi sheta handle korar jnne separate ekTa component MealSearchInput amra use kortasi
    server theke data fetching kortasi amra, user actions er jnne client component er help nicchi

*/


/* Ekhn amader kaj hobe server component e url search params ta recieve kora & oi searched data fetch kora */

import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput"
import Image from "next/image";


export const metadata = {
    title: "All Meals",
    description: "All about our meals in Compliance BD"
}

export default async function MealsPage({ searchParams }) {
    const { search } = await searchParams;


    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await res.json();
            return data.meals
        }
        catch (err) {
            console.log(err);
            return []
        }
    }

    const meals = await fetchMeals()


    return (
        <div className={`${roboto.className}`}>
            <h2 className="underline text-2xl">
                Total Meals: {meals?.length}
            </h2>
            <div className="mt-6">
                <MealSearchInput></MealSearchInput>
            </div>
            {
                meals?.length === 0 && <p className='mt-4 text-red-600 font-semibold'>OOPSSS! No Meals Found </p>
            }
            <div className="grid grid-cols-1 py-6 sm:grid-cols-2  lg:grid-cols-3 gap-5">
                {
                    meals?.map(meal => (
                        <div className="border p-6 rounded-2xl" key={meal.idMeal}>
                            <Image width={631} height={631} src={meal.strMealThumb} alt={meal?.strMeal} />
                            <h1>Name: {meal.strMeal}</h1>
                            <p>Category: {meal.strCategory}</p>
                            <p>Area: {meal?.strArea ?? 'N/A'}</p>
                            <Link href={`/meals/${meal.idMeal}`} className="underline">View Details</Link>
                        </div>
                    ))
                }
            </div> 
        </div>
    )
}
