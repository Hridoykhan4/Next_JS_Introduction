
/* 
    ---- WHEN TO USE CSR

*/

/* 
    ------------------
    User interactivity amra j input field dicchi sheta handle korar jnne separate ekTa component MealSearchInput amra use kortasi
    server theke data fetching kortasi amra, user actions er jnne client component er help nicchi

*/


/* Ekhn amader kaj hobe server component e url search params ta recieve kora & oi searched data fetch kora */

import MealSearchInput from "./components/MealSearchInput"


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
        <div>
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
                            <h1>Name: {meal.strMeal}</h1>
                            <p>Category: {meal.strCategory}</p>
                            <p>Area: {meal?.strArea ?? 'N/A'}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
