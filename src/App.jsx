import { RouterProvider, createBrowserRouter } from "react-router-dom"

// PAGES
import AppLayout from "./pages/AppLayout"
import Dashboard from "./pages/Dashboard"
import AdvanceSearch from "./pages/AdvanceSearch"
import SelectedRecipe from "./pages/SelectedRecipe"
import RandomRecipe from "./pages/RandomRecipe"
import Error from "./pages/Error"

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Dashboard/>,
      },
      {
        path: 'search',
        element: <AdvanceSearch/>
      },
      {
        path: 'suggestion',
        element: <RandomRecipe/>
      },
      {
        path: 'recipe/:id',
        element: <SelectedRecipe/>
      }
    ]
  }
])

const App = () => { 
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
