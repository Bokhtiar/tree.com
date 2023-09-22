import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
            <>navbar</>
            <div className="">
                <Outlet />
            </div>
            <>footer</>
        </>
    );
};
