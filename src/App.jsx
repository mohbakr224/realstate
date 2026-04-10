import React from 'react'
import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout/Layout'
import Home from './Pages/Home/Home';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/home",
        element:<Home/>
      },
       {
        path:"/",
        element:<Home/>
      }
    ]
  }
])
export default function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
