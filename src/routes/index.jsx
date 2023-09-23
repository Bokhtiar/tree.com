import { Navigate } from "react-router-dom";
import { DashboardLayout } from "../layouts/dashboard.layout";
import { Cart } from "../components/cart";
import { Wishlish } from "../components/wishlist";

const appRoutes = [
    {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
            { path: "*", element: <Navigate to="/404" /> },
            { path: "", element: <>dashboard</> },
            { path: "cart", element: <Cart /> },
            { path: "wishlist", element: <Wishlish /> },
            { path: "profile", element: <>profile</> },
        ],
    }, 
];

/* Generate permitted routes */
export const permittedRoutes = () => {
    const token = localStorage.getItem("token");
    if (token) {
        return appRoutes;
    }
    return [];
};