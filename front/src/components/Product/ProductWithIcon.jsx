import { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";

import styles from "../../pages/ProductsPage.module.css";
import Product from "./Product";
import { SecurityContext } from "../../context/SecurityContextProvider";
import { SortPriceContext } from "../../context/SortPriceContextProvider";
import {
	addProductToWishlist,
	deleteProductFromWishlist,
	getWishlistOfUser,
} from "../../services/userApi";

const cx = classNames.bind(styles);

const ProductWithIcon = ({ products }) => {
	const { user } = useContext(SecurityContext);
	const { sort, setSort } = useContext(SortPriceContext);
	// const [products, setProducts] = useState([]);
	const [favoriteProducts, setFavoriteProducts] = useState([]);
	// état pour rafraîchir le composant après la suppression d'un produit
	const [forceUpdate, setForceUpdate] = useState(false);
	// const [checkedFavorite, setCheckedFavorite] = useState(false);

	useEffect(() => {
		getWishlistOfUser(user?.id).then((data) => {
			setFavoriteProducts(data);
		});
	}, [forceUpdate]);

	const id = user?.id;
	const toggleFavorite = async (product) => {
		const productId = product.id;
		if (user) {
			try {
				if (favoriteProducts.find((elm) => elm.id === productId)) {
					// si le produit est déja dan les favoris supprimez-le
					await deleteProductFromWishlist(productId);
					// mettrez à jour l'état davoriteProducts en supprimant le produit
					setFavoriteProducts(
						favoriteProducts.filter((id) => id !== productId),
					);
					setForceUpdate(!forceUpdate);
				} else {
					// sinon, ajouter les produits préférer
					// console.log(typeof id, typeof productId);
					await addProductToWishlist({ id, productId });
					// mettre à jour l'état favoriteProducts en ajoutant le produit
					setFavoriteProducts([...favoriteProducts, product]);
				}
			} catch (error) {
				null;
			}
		}
	};
	return (
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
	);
};

export default ProductWithIcon;
