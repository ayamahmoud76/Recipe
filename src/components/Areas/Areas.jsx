import React, { useEffect, useState } from 'react'
import LoadingPage from '../Loading/LoadingPage'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Areas() {
    const [areas, setAreas] = useState(null)
   async function getAllAreas(){
        let {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        console.log(data);
        setAreas(data.meals)
    }
useEffect(()=>{
    getAllAreas()
},[])

  return <>
  {areas ?  <div className='p-5'>
    <h2 className='font-[Pacifico] m-6 text-4xl font-bold gradient-text'>
        All Areas
    </h2>
    <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
       {areas?.map((area) => (
   <Link to={`/areas/${area.strArea}/recipes`}>
    <div className="rounded-2xl bg-white shadow p-4">
        <h2 className='font-bold gradient-text mb-2'>
           {area.strArea}
        </h2>
        <p className='text-gray-600 font-bold'>
            {area.strCountry}
        </p>
    </div>
   
   </Link>
))}
   </div>
   </div> : <LoadingPage/>}
  
  </>
}
