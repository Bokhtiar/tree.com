import { Home} from './pages/home';
import { Shop } from './pages/shop';
import { About } from './pages/about';
import { FourOFour } from "./pages/404";
import { Contact } from './pages/contact';
import { permittedRoutes } from "./routes";
import { MainLayout } from "./layouts/main.layout";
import { Navigate, useRoutes } from "react-router-dom";
import { ProductShow } from './components/product/show';

export const App = () => {

  const mainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "product/show/1", element: <ProductShow /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "404", element: <FourOFour /> },
    ],
  };

  const routing = useRoutes([mainRoutes, ...permittedRoutes()]);

  return (
    <>
      {routing}
      {/* <ToastContainer /> */}
    </>
  );
}


