import {Link} from 'react-router-dom'

export default function IngredientCard({ingredient}) {

  return <>
  <div className="group relative min-h-26 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 font-[cursive]">
      <div className="relative shadow flex items-center justify-center h-48 overflow-hidden">
        <div className="absolute w-36 h-36 rounded-full bg-amber-100/60 group-hover:scale-110 transition-transform duration-500" />
        <img
          src={ingredient.strThumb}
          alt={ingredient.strIngredient}
          className="relative z-10 w-32 h-32 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500"
        />
      </div>
 
     
      <div className="p-4 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-gray-800 capitalize mb-2">
        {ingredient.strIngredient}
        </h3>
 
       
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
            {ingredient.strDescription}
          </p>
     
 
       
        <Link to={`/ingredient/${ingredient.strIngredient}`} className="mx-auto my-3 w-full text-center p-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all duration-200 text-white text-sm font-semibold rounded-2xl shadow-md shadow-emerald-200">
          View Meals
        </Link>
      </div>
    </div>
  
  </>
}
