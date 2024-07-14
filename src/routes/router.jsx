import { createBrowserRouter } from "react-router-dom"
import Home from "../components/home/Home"
import Items from "../components/item/Items"
import { Login } from "../components/auth/Login"
import { Signup } from "../components/auth/Signup"
import Cart from "../components/cart/Cart"
import PrivateRoute from "./PrivateRoute"
import Active from "../components/auth/Active"
import { api } from "../utils/baseurl"
import Orders from "../components/orders/Orders"

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>,
        errorElement: <Error/>,
        children: [
           {
            path: "/:items?",
            element: <Items/>,
            loader: async ({params}) => {
                return fetch(`${import.meta.env.VITE_BASE_URL}/items/v1/category/`)
            },
           },
           {
            path: "login",
            element: <Login/>
           },
           {
            path: "signup",
            element: <Signup/>
           },
           {
            path: "cart",
            element: <PrivateRoute><Cart/></PrivateRoute>
           },
           {
            path: "orders",
            element: <Orders/>
           }
        ]
    }, 
    {
        path: "active/:uid/:token",
        element: <Active/>
    }
])