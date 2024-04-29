import { RouterProvider, createBrowserRouter } from "react-router-dom"

// PAGES
import AppLayout from "./pages/AppLayout"
import Dashboard from "./pages/Dashboard"
import AdvanceSearch from "./pages/AdvanceSearch"
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
