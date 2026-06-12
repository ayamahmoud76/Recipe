import {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import RecipeCard from "../recipeCard/RecipeCard";
import LoadingPage from "../Loading/LoadingPage";
import axios from "axios";

export default function AreaRecipes() {
    const [recipes, setRecipes] = useState(null)
    const {area} = useParams()
async function getAreaRecipes(){
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    console.log(data);
    setRecipes(data.meals)
}
useEffect(()=>{
    getAreaRecipes()
},[area])
  return <>
  {recipes? <div className="p-5">
  <h2 className="font-[Pacifico] my-6 ml-8 text-4xl font-bold gradient-text">
      {area}
  </h2>
    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 p-5'>
      {recipes?.map((recipe)=>( <RecipeCard key={recipe.idMeal} recipe={recipe}/>) )}
    </div>
    </div>: <LoadingPage/> && <div className='w-full h-screen font-[cursive]'>
        <h2 className="my-6 ml-8 text-4xl font-bold text-amber-500">
      No Recipes Found For {area}
  </h2>
  <Link to='/areas' className='mx-8 w-1/5 text-gray-500 text-lg flex items-center gap-3'>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>
    <span>
        back to areas
        </span> 
  </Link>
        </div>}
  
  </>
}
