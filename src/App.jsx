import React from 'react'
import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout/Layout'
import Home from './Pages/Home/Home';
import Zones from './Pages/Zones/Zones';
import Developer from './Pages/Developer/Developer';
import Units from './Pages/Units/Units';
import Contact_us from './Pages/Contact_us/Contact_us';

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
      },
      {
        path:"/developers",
        element:<Developer/>
      },
      {
        path:"/unit",
        element:<Units/>
      },{
        path:"/contactus",
        element:<Contact_us/>
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
