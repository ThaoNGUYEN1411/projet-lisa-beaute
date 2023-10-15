import classNames from "classnames/bind";
import styles from "./Product.module.css";
import { useEffect, useState } from "react";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const cx = classNames.bind(styles);

const Product = ({ product, imgProdWidth = false }) => {
	return (
		<div className={cx("product", "text-center")} key={product.id}>
			<img
				src={`${VITE_API_URL}/img/${product?.image}`}
				alt={product.name}
				className={cx("product-img", { imgProdWidth })}
			/>

			<div className={cx("product-description")}>
				<span className={cx("product-brand")}>{product.brand_name}</span>
				<span className={cx("product-name")}>{product.name}</span>
				<span className={cx("product-price")}>{product.price} €</span>
			</div>
		</div>
	);
};

export default Product;
