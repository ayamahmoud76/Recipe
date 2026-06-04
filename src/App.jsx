import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import RecipeDetails from './components/RcipeDetails/RecipeDetails'
import NotFound from './components/Notfound/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'recipe/:id', element: <RecipeDetails /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}