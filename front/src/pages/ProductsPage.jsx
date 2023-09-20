import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProductsPage.module.css";
import Product from "../components/Product/Product";
import { Link } from "react-router-dom";
import AsideProductsPage from "../components/AsideProductsPage/AsideProductsPage";
import { getAllproducts } from "../services/productsApi";

const cx = classNames.bind(styles);

const ProductsPage = () => {
	const [products, setProducts] = useState([]);

	// const productsCheveux = products.filter(elm => elm.type ==== "hair")

	useEffect(() => {
		//recupérer des données de l'API
		getAllproducts().then((data) => {
			setProducts(data.data);
		});
	}, []);

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

export default ProductsPage;
