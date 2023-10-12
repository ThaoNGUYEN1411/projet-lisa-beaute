import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

import styles from "../ProductsPage.module.css";
import Product from "../../components/Product/Product";
import AsideEspacePersoClient from "../../components/AsideEspacePersoClient/AsideEspacePersoClient";
import { getWishlistOfUser } from "../../services/userApi";
import { SecurityContext } from "../../context/SecurityContextProvider";

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
