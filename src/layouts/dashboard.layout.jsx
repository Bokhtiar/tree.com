import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
    return (
        <>
            <>dasbhoard navbar</>
            <div className="">
                <Outlet />
            </div>
            <>dashboard footer</>
        </>
    );
};
