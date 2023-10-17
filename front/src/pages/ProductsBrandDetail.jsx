import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import styles from "./ProductsPage.module.css";
import AsideProductsPage from "../components/AsideProductsPage/AsideProductsPage";
import { getAllProductsSameBrand } from "../services/productsApi";
import ProductWithIcon from "../components/Product/ProductWithIcon";

const cx = classNames.bind(styles);

const ProductsBrandDetail = () => {
	const [products, setProducts] = useState([]);

	const { brand } = useParams();

	useEffect(() => {
		//recupérer des données de l'API
		getAllProductsSameBrand(brand).then((data) => {
			setProducts(data.data);
		});
	}, [brand]);

	return (
		<div className={cx("grid", "wide")}>
			<div className={cx("prod-title")}>
				<h1 className={cx("title")}>Tous les produits</h1>
			</div>

			<div className={cx("grid", "wide", "row")}>
				<AsideProductsPage />
				<ProductWithIcon products={products} />
			</div>
		</div>
	);
};

export default ProductsBrandDetail;
