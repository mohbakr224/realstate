import React from 'react'
import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout/Layout'
import Home from './Pages/Home/Home';
import Zones from './Pages/Zones/Zones';

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
      },
      {
        path:"/zones",
        element:<Zones/>
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
