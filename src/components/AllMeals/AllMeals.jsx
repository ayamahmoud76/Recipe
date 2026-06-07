import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeCard from "../recipeCard/RecipeCard"
import LoadingPage from '../Loading/LoadingPage'
import { useNavigate } from 'react-router-dom'
export default function AllMeals() {
    const navigate = useNavigate()
         const categories = [
         { name: "All", category: "", great: "search.php?s=" },
         { name: "Beef", category: "Beef", great: "filter.php?c=" },
         { name: "Breakfast", category: "Breakfast", great: "filter.php?c=" },
         { name: "Chicken", category: "Chicken", great: "filter.php?c=" },
         { name: "Dessert", category: "Dessert", great: "filter.php?c=" },
         { name: "Goat", category: "Goat", great: "filter.php?c=" },
         { name: "Lamb", category: "Lamb", great: "filter.php?c=" },
         { name: "Miscellaneous", category: "Miscellaneous", great: "filter.php?c=" },
         { name: "Pasta", category: "Pasta", great: "filter.php?c=" },
         { name: "Pork", category: "Pork", great: "filter.php?c=" },
         { name: "Seafood", category: "Seafood", great: "filter.php?c=" },
         { name: "Side", category: "Side", great: "filter.php?c=" },
         { name: "Starter", category: "Starter", great: "filter.php?c=" },
         { name: "Vegan", category: "Vegan", great: "filter.php?c=" },
         { name: "Vegetarian", category: "Vegetarian", great: "filter.php?c=" },
     ]
       
        let [category, setCategory] = useState("")
        let [recipes, setRecipes] = useState(null)
        let [great, setGreat] = useState('search.php?s=')
        async function getAllRecipes(){
            let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/${great}${category}`)
            console.log(data.meals);
            setRecipes(data.meals)
            
        }
        
        useEffect(()=>{
            getAllRecipes()
            
        }, [category,great])
    
  return (
     recipes !== null ? (
      <>
        <div className="container mx-auto w-full max-w-screen-xl bg-gray-100 font-[cursive] md:pt-3">
            <h2 className='font-[Pacifico] my-4 ml-8 text-4xl font-bold gradient-text'>
              Learn, Cook, Eat Your Food
            </h2>
            <div className="categories mb-10">
              <ul className='flex flex-wrap px-4 gap-4'>
                {categories.map((cat) => (
                  <li
  key={cat.name}
  onClick={() => { setCategory(cat.category); setGreat(cat.great); navigate(`/allmeals/${cat.name}`) }}
  className={`w-fit px-3 py-2 transform hover:scale-100 hover:shadow-md transition-all cursor-pointer rounded-2xl border
    ${category === cat.category ? 'bg-black text-white' : 'text-gray-600 hover:bg-white'}`}>
  {cat.name}
</li>
                ))}
              </ul>
            </div>

            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-8 p-5">
                {recipes?.map((recipe) => (
                  <RecipeCard key={recipe.idMeal} recipe={recipe} />
                ))}
              </div>
          </div>
      </>
      ) : (
        <LoadingPage />
      )
    )
}
