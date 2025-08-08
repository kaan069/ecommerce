import { createBrowserRouter } from "react-router";
import App from "../components/App";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/catalog/CatalogPage";
import ProductDetailPage from "../pages/catalog/ProductDetailPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        //errorElement: <NotFound />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "catalog", element: <CatalogPage /> },
            { path: "catalog/:id", element: <ProductDetailPage /> },



        ],
    },
]);
