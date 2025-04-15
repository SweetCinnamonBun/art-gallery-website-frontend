

import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import RootLayout from './components/RootLayout'
import HomePage from './pages/HomePage'
import LocationPage from './pages/LocationPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/location",
        element: <LocationPage />
      }
    ]
  }
])


function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
