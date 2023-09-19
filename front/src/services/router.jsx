import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ProductsPage from "../pages/ProductsPage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductsTypeDetail from "../pages/ProductsTypeDetail";
import ProductsBrandDetail from "../pages/ProductsBrandDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "produits",
				// element: <ProductsPage />,
				children: [
					{
						path: "",
						element: <ProductsPage />,
					},
					{
						path: ":id",
						element: <ProductPage />,
					},
					{
						path: "/produits/categorie/:type",
						element: <ProductsTypeDetail />,
					},
					{
						path: "/produits/marques/:brand",
						element: <ProductsBrandDetail />,
					},
					// {
					// 	path: "/categories/:type",
					// 	element: <ProductsPage />,
					// },
				],
			},
			{
				path: "aPropos",
				element: <AboutPage />,
			},
			{
				path: "blog",
				element: <BlogPage />,
			},
			{
				path: "contact",
				element: <ContactPage />,
			},
		],
	},
]);

export default router;
