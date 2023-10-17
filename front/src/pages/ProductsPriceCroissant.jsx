// import { useEffect, useState } from "react";
// import classNames from "classnames/bind";
// import styles from "./ProductsPage.module.css";
// import Product from "../components/Product/Product";
// import { Link } from "react-router-dom";
// import AsideProductsPage from "../components/AsideProductsPage/AsideProductsPage";
// // import { getAllProductsFilter } from "../services/productsApi";
// // import { getAllProductsPriceCroissant } from "../services/productsApi";
// import { v4 as uuid } from "uuid";

// const cx = classNames.bind(styles);

// const ProductsPriceCroissant = () => {
// 	const [products, setProducts] = useState([]);
// 	const [sort, setSort] = useState("asc");
// 	// const isCroissant = true;

// 	// const productsCheveux = products.filter(elm => elm.type ==== "hair")

// 	useEffect(() => {
// 		//recupérer des données de l'API
// 		// getAllProductsFilter().then((data) => {
// 		// 	setProducts(data.data);
// 		// });
// 	}, [sort]);

// 	return (
// 		<div className={cx("grid", "wide")}>
// 			<div className={cx("prod-title")}>
// 				<h1 className={cx("title")}>Tous les produits</h1>
// 				{/* rome-ignore lint/a11y/useButtonType: <explanation> */}
// 				<button onClick={setSort("asc")}>croissant</button>
// 			</div>

// 			<div className={cx("grid", "wide", "row")}>
// 				<AsideProductsPage />
// 				<section className={cx("product-wrapper", "col", "l-9", "m-9", "c-12")}>
// 					<div className={cx("prod-list", "row")}>
// 						{products.map((product) => {
// 							return (
// 								<article
// 									className={cx("prod", "col", "l-3", "m-4", "c-6")}
// 									key={uuid()}
// 								>
// 									<Link to={`/produits/${product.id}`} key={uuid()}>
// 										<Product imgProdWidth product={product} key={uuid()} />
// 									</Link>
// 								</article>
// 							);
// 						})}
// 					</div>
// 				</section>
// 			</div>
// 		</div>
// 	);
// };

// export default ProductsPriceCroissant;
