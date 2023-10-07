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
import Guard from "../components/ComponentsAdmin/Guard";
import AdminHomePage from "../pages/admin/AdminHomePage";
import RootLayoutAdmin from "../layouts/RootLayoutAdmin";
import LogoutPage from "../pages/LogoutPage";
import AdminCategoryPage from "../pages/admin/categories/AdminCategoryPage";
import AdminProductPage from "../pages/admin/products/AdminProductPage";
import AdminBrandPage from "../pages/admin/brands/AdminBrandPage";
import AdminBrandFormPage from "../pages/admin/brands/AdminBrandFormPage";

import AdminCategoryFormPage from "../pages/admin/categories/AdminCategoryFormPage";
import AdminMessagesPage from "../pages/admin/messages/AdminMessagesPage";
import AdminBlogPage from "../pages/admin/blog/AdminBlogPage";
import AdminProductFormPage from "../pages/admin/products/AdminProductFormPage";
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
				path: "logout",
				element: <LogoutPage />,
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
	{
		path: "/admin/",
		element: (
			<Guard role="admin">
				<RootLayoutAdmin />
			</Guard>
		),
		children: [
			{
				path: "",
				element: <AdminHomePage />,
			},
			{
				path: "produits/:id?",
				element: <AdminProductPage />,
			},
			{
				path: "produits/:id?/form",
				element: <AdminProductFormPage />,
			},
			{
				path: "categories/:id?",
				element: <AdminCategoryPage />,
			},
			{
				path: "categories/:id?/form",
				element: <AdminCategoryFormPage />,
			},
			// {
			// 	path: "marques",
			// 	element: <AdminBrandPage />,
			// },
			{
				path: "marques/:id?",
				element: <AdminBrandPage />,
			},
			{
				path: "marques/:id?/form",
				element: <AdminBrandFormPage />,
			},
			{
				path: "messages/:id?",
				element: <AdminMessagesPage />,
			},
			{
				path: "blog",
				element: <AdminBlogPage />,
			},
		],
	},
]);

export default router;
