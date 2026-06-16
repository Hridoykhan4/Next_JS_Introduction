const fetchMeal = async (id) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    return data?.meals[0]
}

export async function generateMetadata({params}) {
    const {id} = await params;
    const meal = await fetchMeal(id);
    return {
        title: meal?.strMeal,
        description: meal.strInstructions
    }
}

const Meal = async ({ params }) => {
    const { id } = await params;
    const meal = await fetchMeal(id)
    return (
        <div>
            {JSON.stringify(meal)}
        </div>
    );
};

export default Meal;