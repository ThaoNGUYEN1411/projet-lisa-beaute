import classNames from "classnames/bind";
// import styles from "./EspacePersoClientPage.module.css";
import styles from "./ProductsPage.module.css";
import Product from "../components/Product/Product";
import { useEffect, useState } from "react";
import { getAllproducts } from "../services/productsApi";
import { Link } from "react-router-dom";
import AsideEspacePersoClient from "../components/AsideEspacePersoClient/AsideEspacePersoClient";
const cx = classNames.bind(styles);

const WishlistPage = () => {
	const [products, setProducts] = useState([]);
	// const isCroissant = true;

	// const productsCheveux = products.filter(elm => elm.type ==== "hair")

	useEffect((sort = "") => {
		//recupérer des données de l'API
		getAllproducts(sort).then((data) => {
			setProducts(data.data);
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
						{products.map((product) => {
							return (
								<article
									className={cx("prod", "col", "l-3", "m-4", "c-6")}
									key={crypto.randomUUID()}
								>
									<Link
										to={`/produits/${product.id}`}
										key={crypto.randomUUID()}
									>
										<Product
											imgProdWidth
											product={product}
											key={crypto.randomUUID()}
										/>
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
