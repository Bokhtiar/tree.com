import { Footer } from '../components/footer';
import { Outlet } from "react-router-dom";
import { Navbar } from '../components/navbar';

export const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};
