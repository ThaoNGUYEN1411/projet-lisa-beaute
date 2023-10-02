import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProductsPage.module.css";
import Product from "../components/Product/Product";
import { Link, useParams } from "react-router-dom";
import AsideProductsPage from "../components/AsideProductsPage/AsideProductsPage";
import { getAllProductsSameBrand } from "../services/productsApi";
import { v4 as uuid } from "uuid";

const cx = classNames.bind(styles);

const ProductsBrandDetail = () => {
	const [products, setProducts] = useState([]);

	const { brand } = useParams();

	// console.log(type);

	useEffect(() => {
		//recupérer des données de l'API
		getAllProductsSameBrand(brand).then((data) => {
			setProducts(data.data);
			// console.log("products", products);
		});
	}, [brand]);

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

export default ProductsBrandDetail;
