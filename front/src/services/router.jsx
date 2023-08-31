import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ProductsPage from "../pages/ProductsPage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";

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
				element: <ProductsPage />,
				children: [
					{
						path: "parfum",
						element: <ProductsPage />,
					},
					{
						path: "maquillage",
						element: <ProductsPage />,
					},
					{
						path: "soin",
						element: <ProductsPage />,
					},
					{
						path: "cheveux",
						element: <ProductsPage />,
					},
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
