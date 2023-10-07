import classNames from "classnames/bind";
import styles from "./Product.module.css";
import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
const VITE_API_URL = import.meta.env.VITE_API_URL;

const cx = classNames.bind(styles);

const Product = ({ product, imgProdWidth = false }) => {
	const [imageSrc, setImageSrc] = useState(null);
	// afficher les photos depuis deux dossiers different
	useEffect(() => {
		// console.log(product);
		// Essayer de charger l'image à partir du premier emplacement
		const img1 = new Image();
		img1.onload = () => {
			setImageSrc(`/images/${product.image}`);
		};
		img1.onerror = () => {
			// Si l'image du premier emplacement n'est pas disponible, chargez l'image du deuxième emplacement
			setImageSrc(`${VITE_API_URL}/img/${product.image}`);
		};

		img1.src = `/images/${product.image}`;
	}, [product]);

	return (
		<div className={cx("product", "text-center")} key={product.id}>
			{imageSrc && (
				<img
					src={imageSrc}
					// src={`${VITE_API_URL}/img/${value.image}`}
					alt={product.name}
					className={cx("product-img", { imgProdWidth })}
				/>
			)}

			<div className={cx("product-description")}>
				<span className={cx("product-brand")}>{product.brand_name}</span>
				<span className={cx("product-name")}>{product.name}</span>
				<span className={cx("product-price")}>{product.price} €</span>
			</div>
		</div>
	);
};

export default Product;
