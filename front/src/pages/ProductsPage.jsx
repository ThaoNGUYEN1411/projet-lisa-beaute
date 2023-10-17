import { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./ProductsPage.module.css";
import AsideProductsPage from "../components/AsideProductsPage/AsideProductsPage";
import { getAllproducts } from "../services/productsApi";
import { SortPriceContext } from "../context/SortPriceContextProvider";
import ProductWithIcon from "../components/Product/ProductWithIcon";

const cx = classNames.bind(styles);

const ProductsPage = () => {
	const { sort, setSort } = useContext(SortPriceContext);
	const [products, setProducts] = useState([]);

	useEffect(
		(sortPrice = sort) => {
			//recupérer des données de l'API
			getAllproducts(sortPrice).then((data) => {
				setProducts(data.data);
			});
		},
		[sort],
	);

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

export default ProductsPage;
