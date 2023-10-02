import { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import Product from "../components/Product/Product";
import { Link } from "react-router-dom";
import AsideProductsPage from "../components/AsideProductsPage/AsideProductsPage";
import { getAllproducts } from "../services/productsApi";
import styles from "./ProductsPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { SortPriceContext } from "../context/SortPriceContextProvider";
import { SecurityContext } from "../context/SecurityContextProvider";
import {
	getWishlistOfUser,
	addProductToWishlist,
	deleteProductFrompWishlist,
} from "../services/userApi";
import axios from "axios";
const cx = classNames.bind(styles);
import { v4 as uuid } from "uuid";

const ProductsPage = () => {
	const { user } = useContext(SecurityContext);
	const [products, setProducts] = useState([]);
	const [allFavoriteByUser, setAllFavoriteByUser] = useState([]);
	const { sort, setSort } = useContext(SortPriceContext);
	// const isCroissant = true;
	// console.log(sort);

	// const productsCheveux = products.filter(elm => elm.type ==== "hair")

	useEffect(
		(sortPrice = sort) => {
			//recupérer des données de l'API
			getAllproducts(sortPrice).then((data) => {
				setProducts(data.data);
			});
		},
		[sort],
	);

	// useEffect(() => {
	// 	getWishlistOfUser(user.id);
	// }, []);

	// const getWishlistOfUser = async (id) => {
	// 	const requestProduct = new Request(
	// 		`http://localhost:3000/user/Wishlist/${id}`,
	// 	);
	// 	const request = await fetch(requestProduct);
	// 	const response = await request.json();
	// 	console.log("response", response);
	// 	setAllFavoriteByUser(response.data);
	// };

	const getWishlistOfUser = (userId) => {
		axios
			.get(`http://localhost:3000/user/Wishlist/${userId}`)
			.then((response) => {
				console.log("response.data.data", response.data.data);
				setAllFavoriteByUser(response.data.data);
				return response.data.data;
			})
			.catch((error) => console.log("error", error));
	};

	const handleProductLiked = async (productId, checkedFavorite) => {
		// const id = user.id;
		console.log("checkedFavorite", checkedFavorite);
		// if (!checkedFavorite) {
		// 	addProductToWishlist({ productId, id });
		// } else {
		// 	deleteProductFrompWishlist(productId);
		// }

		getWishlistOfUser(id);
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
							const checkedFavorite = allFavoriteByUser.find(
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
												handleProductLiked(product.id, checkedFavorite)
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
