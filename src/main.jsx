import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import MainLayout from './Layout/MainLayout';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index:true,
       
      },
      
      {
        path:"/books",
        element:"Books"
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(


  <StrictMode>
        <RouterProvider router={router} />,
  </StrictMode>,
)
