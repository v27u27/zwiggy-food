import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Cart from "./components/Cart.jsx";
import RestaurantPage from "./components/RestaurantPage.jsx";
import Body from "./components/Body.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/home',
                element: <Body />
            },
            {
                path: '/restaurant/:resid',
                element: <RestaurantPage/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
