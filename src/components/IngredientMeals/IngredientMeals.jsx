import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RecipeCard from "../recipeCard/RecipeCard";
import LoadingPage from "../Loading/LoadingPage";

export default function IngredientMeals() {
    let [recipes, setRecipes] = useState(null)
    const { ingredient } = useParams()
            async function getAllIngredientMeals(){
                let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
                console.log(data.meals, 'ingredient meals');
                setRecipes(data.meals)
                
            }
    
    useEffect(()=>{
                getAllIngredientMeals()
                
            }, [ingredient])
  return <>
 {recipes?  <div className="p-5">
<h2 className="font-[Pacifico] my-6 ml-8 text-4xl font-bold gradient-text">
    {ingredient}
</h2>
  <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 p-5'>
    {recipes?.map((recipe)=>( <RecipeCard key={recipe.idMeal} recipe={recipe}/>) )}
  </div>
  </div>: <LoadingPage/>}
  </>
}
