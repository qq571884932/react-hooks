import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from "./views/Layout";
const router = createHashRouter([
    {
        path:'/',
        element:<Layout />,
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
          <RouterProvider router={router} />
)
