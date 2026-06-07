import React, { useEffect, useState } from 'react'
import IngredientCard from '../ingredientCard/IngredientCard'
import LoadingPage from '../Loading/LoadingPage'
import axios from 'axios'

export default function Ingredients() {
const [ingredient, setIngredient] = useState(null)
async function getIngredients(){
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    setIngredient(data.meals)
    console.log(data.meals);
}
useEffect(()=>{
    getIngredients()
},[])
  return <>
  {ingredient ?  <div className='p-5'>
    <h2 className='font-[Pacifico] m-6 text-4xl font-bold gradient-text'>
        All Ingredients
    </h2>
    <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
       {ingredient?.map((ingredient) => (
    <IngredientCard key={ingredient.idIngredient} ingredient={ingredient}/>
))}
   </div>
   </div> : <LoadingPage/>}
  </>
}
