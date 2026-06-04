import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingPage from '../Loading/LoadingPage'

export default function RecipeDetails() {
  const { id } = useParams()
  const [meal, setMeal] = useState(null)

  async function getRecipeDetails() {
    try {
      let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      if (data?.meals?.length) {
        setMeal(data.meals[0])
      } else {
        setMeal(null)
      }
    } catch (error) {
      console.error(error)
      setMeal(null)
    }
  }

  useEffect(() => {
    getRecipeDetails()
  }, [id])



  return (
    <>
      {meal !== null ? (
        <div className="recipe min-h-screen bg-gray-100 font-[cursive]">
          <div className="container mx-auto w-full max-w-screen-xl bg-gray-100 py-5 px-6">
            <div className="w-full grid lg:grid-cols-3 gap-5 md:grid-cols-2">
              <div className="picture">
                <div className="mt-6">
                  <h2 className='font-[Pacifico] my-4 ml-8 text-4xl font-bold bg-gradient-to-r from-red-500 via-[#ca1023c4] to-[#c90519] bg-clip-text text-transparent'>
                    {meal?.strMeal}
                  </h2>
                  <img src={meal?.strMealThumb} className='rounded-4xl mb-7' alt="recipe image" />
                  <div className="buttons flex justify-center gap-x-2.5">
                    <button onClick={() => window.open(meal?.strYoutube)} className='w-fit cursor-pointer mr-3 rounded-xl bg-red-600 text-white p-2.5'>YouTube</button>
                    <button onClick={() => window.open(meal?.strSource)} className='bg-emerald-500 cursor-pointer text-white w-fit rounded-xl p-2.5'>Source</button>
                  </div>
                </div>
              </div>

              <div className="cook text-base px-4 mt-6 pt-10">{meal?.strInstructions}</div>

              <div className="rounded-2xl h-fit bg-white py-5 mt-5">
                <ul className='px-4'>
                  <li className='capitalize p-1 mb-4 text-2xl font-semibold border-b-4 border-gray-300'>
                    ingrediants
                  </li>
                  <li className='py-2 flex justify-between border-b-2 border-gray-300 capitalize'>
                    <span>{meal?.strIngredient1}</span>
                    <span>{meal?.strMeasure1}</span>
                  </li>
                  <li className='py-2 flex justify-between border-b-2 border-gray-300 capitalize'>
                    <span>{meal?.strIngredient2}</span>
                    <span>{meal?.strMeasure2}</span>
                  </li>
                  <li className='py-2 flex justify-between border-b-2 border-gray-300 capitalize'>
                    <span>{meal?.strIngredient3}</span>
                    <span>{meal?.strMeasure3}</span>
                  </li>
                  <li className='py-2 flex justify-between border-b-2 border-gray-300 capitalize'>
                    <span>{meal?.strIngredient4}</span>
                    <span>{meal?.strMeasure4}</span>
                  </li>
                  <li className='py-2 flex justify-between border-b-2 border-gray-300 capitalize'>
                    <span>{meal?.strIngredient5}</span>
                    <span>{meal?.strMeasure5}</span>
                  </li>
                  <li className='py-2 flex justify-between border-b-2 border-gray-300 capitalize'>
                    <span>{meal?.strIngredient6}</span>
                    <span>{meal?.strMeasure6}</span>
                  </li>
                  <li className='py-2 flex justify-between border-b-2 border-gray-300 capitalize'>
                    <span>{meal?.strIngredient7}</span>
                    <span>{meal?.strMeasure7}</span>
                  </li>
                  <li className='py-2 flex justify-between border-b-2 border-gray-300 capitalize'>
                    <span>{meal?.strIngredient8}</span>
                    <span>{meal?.strMeasure8}</span>
                  </li>
                  <li className='py-2 flex justify-between capitalize'>
                    <span>{meal?.strIngredient9}</span>
                    <span>{meal?.strMeasure9}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  )
}