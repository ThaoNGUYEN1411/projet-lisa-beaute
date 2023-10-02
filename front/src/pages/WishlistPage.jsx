import classNames from "classnames/bind";
// import styles from "./EspacePersoClientPage.module.css";
import styles from "./ProductsPage.module.css";
import Product from "../components/Product/Product";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AsideEspacePersoClient from "../components/AsideEspacePersoClient/AsideEspacePersoClient";
import { SecurityContext } from "../context/SecurityContextProvider";
import { getWishlistOfUser } from "../services/userApi";
import { v4 as uuid } from "uuid";

const cx = classNames.bind(styles);

const WishlistPage = () => {
	const [products, setProducts] = useState([]);
	const { user, setUser } = useContext(SecurityContext);

	useEffect(() => {
		getWishlistOfUser(user?.id).then((data) => {
			setProducts(data);
		});
	}, []);

	return (
		<div className={cx("grid", "wide")}>
			<div className={cx("prod-title")}>
				<h1 className={cx("title")}>Mon compte</h1>
			</div>
			<div className={cx("grid", "wide", "row")}>
				<AsideEspacePersoClient />
				<section className={cx("product-wrapper", "col", "l-9", "m-9", "c-12")}>
					<div className={cx("prod-list", "row")}>
						{products?.map((product) => {
							return (
								<article
									className={cx("prod", "col", "l-3", "m-4", "c-6")}
									key={uuid()}
								>
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

export default WishlistPage;
