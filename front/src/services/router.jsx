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
import CreateUserPage from "../pages/CreateUserPage";
import LoginPage from "../pages/LoginPage";
import EspacePersoClientPage from "../pages/EspacePersoClientPage";
import WishlistPage from "../pages/WishlistPage";
// import ProductsPriceCroissant from "../pages/ProductsPriceCroissant";

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
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "users/registration",
				element: <CreateUserPage />,
			},
			{
				path: "EspacePersoClient",
				element: <EspacePersoClientPage />,
			},
			{
				path: "EspacePersoClient/Wishlist",
				element: <WishlistPage />,
			},
			{
				path: "produits",
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
					{
						path: "/produits?sort=desc",
						element: <ProductsPage />,
					},
					{
						path: "/produits?sort=asc",
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
