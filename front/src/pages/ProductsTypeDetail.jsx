import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProductsPage.module.css";
import { useParams } from "react-router-dom";
import AsideProductsPage from "../components/AsideProductsPage/AsideProductsPage";
import { getAllProductsSameType } from "../services/productsApi";
import ProductWithIcon from "../components/Product/ProductWithIcon";

const cx = classNames.bind(styles);

const ProductsTypeDetail = () => {
	const [products, setProducts] = useState([]);

	const { type } = useParams();

	useEffect(() => {
		//recupérer des données de l'API
		getAllProductsSameType(type).then((data) => {
			setProducts(data.data);
		});
	}, [type]);

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

export default ProductsTypeDetail;
