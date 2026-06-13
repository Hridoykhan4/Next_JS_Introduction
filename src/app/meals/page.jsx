"use client"
import React, { useEffect, useState } from 'react'

/* 
    ---- WHEN TO USE CSR

*/

export default function MealsPage() {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
                const data = await res.json();
                setMeals(data?.meals || [])
                return data.meals
            }
            catch (err) {
                console.log(err);
                return []
            }
        }
        fetchMeals()
    }, [search])

    console.log(meals);

    return (
        <div>
            <h2 className="underline text-2xl">
                Total Meals: {meals?.length}
            </h2>
            <div>
                <input type="text" value={search} className='border mt-5' onChange={(e) => setSearch(e.target.value)} />
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
