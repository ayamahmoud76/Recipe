import React from 'react'
import { Link } from 'react-router-dom'

export default function RecipeCard({recipe, setId, setShow}) {
  return <>
  
  <div className='shadow-xl p-2 mb-8 pb-2 group rounded-4xl hover:scale-105 duration-200 bg-white'>
                    <div className="card-container">
                        <div className="card-imge -translate-y-8 shadow-2xl bg-emerald-700 w-36 h-36 rounded-full mx-auto transition-all group-hover:rotate-[360deg] duration-700">
                            <img src={recipe.strMealThumb} className='w-36 h-36 rounded-full' alt="" />
                        </div>
                        <p className='text-center font-bold text-xl capitalize'>{recipe.strMeal}</p>
                        <p className='text-emerald-700 text-center capitalize'>{recipe.strArea}</p>
                        <Link to={`recipe/${recipe.idMeal}`} className='w-24 h-16 mb-2 font-medium mx-auto hover:scale-105 capitalize  flex justify-center items-center text-white mt-4 transition-all hover:bg-emerald-600 bg-emerald-500 p-0 rounded-full'>
                          <span>
                            view <br/> recipe
                        </span>
                        </Link>
                    </div>
                </div>
  </>
}
