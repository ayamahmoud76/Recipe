import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import RecipeDetails from './components/RcipeDetails/RecipeDetails'
import NotFound from './components/Notfound/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Ingredients from './components/Ingredients/Ingredients'
import AllMeals from './components/AllMeals/AllMeals'
import IngredientMeals from './components/IngredientMeals/IngredientMeals'
import Areas from './components/Areas/Areas'
import AreaRecipes from './components/AreaRecipes/AreaRecipes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />},
      { path: '/allmeals/:name', element: <AllMeals /> },
      { path: '/recipe/:id', element: <RecipeDetails /> },
      { path: '/ingredients/:ingredient/recipe/:id', element: <RecipeDetails /> },
      { path: '/areas/:area/recipes/recipe/:id', element: <RecipeDetails /> },
      { path: '/ingredients', element: <Ingredients/> },
      { path: '/ingredients/:ingredient', element: <IngredientMeals/> },
      {path: '/areas', element: <Areas/>},
      {path: '/areas/:area/recipes', element: <AreaRecipes/>},
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}