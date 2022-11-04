import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
    createHashRouter,
    RouterProvider,
    Link,
} from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login/Login";

const router = createHashRouter([
    {
        path:'/',
        element:(
            <div>
                <h1>Hello World</h1>
                <Link to="about">About Us</Link>
            </div>
        ),
    },
    {
        path:'about',
        element:(
            <div>
                <h1>555</h1>
                <Link to="/about">About Us</Link>
            </div>
        ),
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
          <RouterProvider router={router} />
)
