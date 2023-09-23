import { Navigate } from "react-router-dom";
import { DashboardLayout } from "../layouts/dashboard.layout";

const appRoutes = [
    {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
            { path: "*", element: <Navigate to="/404" /> },
            { path: "", element: <>dashboard</> },
            { path: "cart", element: <>cdd</> },
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