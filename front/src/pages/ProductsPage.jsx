import { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";

import styles from "./ProductsPage.module.css";
import Product from "../components/Product/Product";
import AsideProductsPage from "../components/AsideProductsPage/AsideProductsPage";
import { getAllproducts } from "../services/productsApi";
import { SortPriceContext } from "../context/SortPriceContextProvider";
import { SecurityContext } from "../context/SecurityContextProvider";
import {
	getWishlistOfUser,
	addProductToWishlist,
	deleteProductFromWishlist,
} from "../services/userApi";

const cx = classNames.bind(styles);

const ProductsPage = () => {
	const { user } = useContext(SecurityContext);
	const { sort, setSort } = useContext(SortPriceContext);
	const [products, setProducts] = useState([]);

	const [favoriteProducts, setFavoriteProducts] = useState([]);
	const [isFaviriteProduct, setIsFaviriteProduct] = useState(false);

	useEffect(
		(sortPrice = sort) => {
			//recupérer des données de l'API
			getAllproducts(sortPrice).then((data) => {
				setProducts(data.data);
			});
		},
		[sort],
	);

	useEffect(() => {
		getWishlistOfUser(user?.id).then((data) => {
			console.log("ok", data);
			setFavoriteProducts(data);
		});
	}, []);

	// const getWishlistOfUser = async (id) => {
	// 	const requestProduct = new Request(
	// 		`http://localhost:3000/user/Wishlist/${id}`,
	// 	);
	// 	const request = await fetch(requestProduct);
	// 	const response = await request.json();
	// 	console.log("response", response);
	// 	setAllFavoriteByUser(response.data);
	// };

	// const getWishlistOfUser = (userId) => {
	// 	axios
	// 		.get(`${VITE_API_URL}/user/Wishlist/${userId}`)
	// 		.then((response) => {
	// 			console.log("response.data.data", response.data.data);
	// 			setAllFavoriteByUser(response.data.data);
	// 			return response.data.data;
	// 		})
	// 		.catch((error) => console.log("error", error));
	// };

	const toggleFavorite = async (productId, checkedFavorite) => {
		// console.log(productClicked);
		const id = user?.id;
		console.log("checkedFavorite", checkedFavorite);
		if (!checkedFavorite) {
			addProductToWishlist({ productId, id });
		} else {
			console.log("checkedFavorite", checkedFavorite);
			deleteProductFromWishlist(productId);
		}

		getWishlistOfUser(id).then((data) => console.log(data));
	};

	return (
		<div className={cx("grid", "wide")}>
			<div className={cx("prod-title")}>
				<h1 className={cx("title")}>Tous les produits</h1>
			</div>

			<div className={cx("grid", "wide", "row")}>
				<AsideProductsPage />
				<section className={cx("product-wrapper", "col", "l-9", "m-9", "c-12")}>
					<div className={cx("prod-list", "row")}>
						{products.map((product) => {
							const checkedFavorite = favoriteProducts.find(
								(elm) => elm.id === product.id,
							);

							return (
								<article
									className={cx("prod", "col", "l-4", "m-4", "c-6")}
									key={uuid()}
								>
									<div className={cx("icon-heart")}>
										{/* rome-ignore lint/a11y/useButtonType: <explanation> */}
										<button
											className={cx("btn-heart")}
											onClick={() =>
												toggleFavorite(product.id, checkedFavorite)
											}
										>
											{checkedFavorite ? (
												<FontAwesomeIcon
													icon={faHeart}
													className={cx("icon", "icon-heart-favorite")}
												/>
											) : (
												<FontAwesomeIcon
													icon={faHeart}
													className={cx("icon")}
												/>
											)}
										</button>
									</div>
									<Link to={`/produits/${product.id}`} key={uuid()}>
										<Product imgProdWidth product={product} key={uuid()} />
									</Link>
								</article>
							);
						})}
					</div>
				</section>
			</div>
		</div>
	);
};

export default ProductsPage;
