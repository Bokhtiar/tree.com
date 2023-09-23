import {Order} from '../components/order'
import { Cart } from "../components/cart"
import { Navigate } from "react-router-dom"
import { Wishlish } from "../components/wishlist"
import { DashboardLayout } from "../layouts/dashboard.layout"
import { Dashboard } from '../components/dashboard'

const appRoutes = [
    {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
            { path: "*", element: <Navigate to="/404" /> },
            { path: "", element: <Dashboard /> },
            { path: "cart", element: <Cart /> },
            { path: "wishlist", element: <Wishlish /> },
            { path: "order", element: <Order /> },
            { path: "profile", element: <>profile</> },
        ],
    }, 
];

/* Generate permitted routes */
export const permittedRoutes = () => {
    // const token = localStorage.getItem("token");
    const token = "ok"
    if (token) {
        return appRoutes;
    }
    return [];
};