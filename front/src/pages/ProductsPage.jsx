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

	// const [checkedFavorite, setCheckedFavorite] = useState(false);

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

	console.log("favoriteProducts", favoriteProducts);
	const id = user?.id;
	const toggleFavorite = async (product) => {
		const productId = product.id;
		if (user) {
			try {
				if (favoriteProducts.find((elm) => elm.id === productId)) {
					console.log("delete");
					console.log(productId);
					// si le produit est déja dan les favoris supprimez-le
					await deleteProductFromWishlist(productId);
					// mettrez à jour l'état davoriteProducts en supprimant le produit
					setFavoriteProducts(
						favoriteProducts.filter((id) => id !== productId),
					);
				} else {
					// sinon, ajouter les produits préférer
					// console.log(typeof id, typeof productId);
					await addProductToWishlist({ id, productId });
					// mettre à jour l'état favoriteProducts en ajoutant le produit
					setFavoriteProducts([...favoriteProducts, product]);
				}
			} catch (error) {
				console.log(error);
			}
		}
		// console.log("productId", productId);
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
							return (
								<article
									className={cx("prod", "col", "l-4", "m-4", "c-6")}
									key={uuid()}
								>
									<div className={cx("icon-heart")}>
										{/* rome-ignore lint/a11y/useButtonType: <explanation> */}
										<button
											className={cx("btn-heart")}
											onClick={() => toggleFavorite(product)}
										>
											<FontAwesomeIcon
												icon={faHeart}
												style={{
													color: favoriteProducts.find(
														(elm) => elm.id === product.id,
													)
														? "red"
														: "gray",
													cursor: "pointer",
													fontSize: "2rem",
												}}
											/>
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
