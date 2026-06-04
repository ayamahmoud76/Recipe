import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecipeCard from '../recipeCard/RecipeCard'
import LoadingPage from '../Loading/LoadingPage'


export default function Home() {
     const categories = [
     { name: "all", category: "", great: "search.php?s=" },
     { name: "beef", category: "Beef", great: "filter.php?c=" },
     { name: "breakfast", category: "Breakfast", great: "filter.php?c=" },
     { name: "chicken", category: "Chicken", great: "filter.php?c=" },
     { name: "dessert", category: "Dessert", great: "filter.php?c=" },
     { name: "goat", category: "Goat", great: "filter.php?c=" },
     { name: "lamb", category: "Lamb", great: "filter.php?c=" },
     { name: "miscellaneous", category: "Miscellaneous", great: "filter.php?c=" },
     { name: "pasta", category: "Pasta", great: "filter.php?c=" },
     { name: "pork", category: "Pork", great: "filter.php?c=" },
     { name: "seafood", category: "Seafood", great: "filter.php?c=" },
     { name: "side", category: "Side", great: "filter.php?c=" },
     { name: "starter", category: "Starter", great: "filter.php?c=" },
     { name: "vegan", category: "Vegan", great: "filter.php?c=" },
     { name: "vegetarian", category: "Vegetarian", great: "filter.php?c=" },
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
                    onClick={() => { setCategory(cat.category); setGreat(cat.great); }}
                    className='w-fit text-gray-600 px-3 py-2 transform hover:scale-100 hover:shadow-md hover:bg-white transition-all capitalize rounded-3xl cursor-pointer border'
                  >
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


