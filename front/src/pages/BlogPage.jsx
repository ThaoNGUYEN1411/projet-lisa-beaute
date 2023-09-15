// // import classNames from "classnames.bind";
// // import styles from "./BlogPage.module.css";

// // const cx = classNames.bind(styles);

// import ProductPage from "./ProductPage";

// const BlogPage = () => {
// 	return (
// 		<div>
// 			<ProductPage />
// 			{/* <section> */}
// 			{/* <h2>Notre séléction</h2>
// 				<article className={cx("l-4", "m-4", "c-12", "")}>
// 					<img src="" alt="" />
// 					<h3></h3>
// 				</article>
// 				<article className={cx("l-4", "m-4", "c-12", "")}>
// 					<img src="" alt="" />
// 					<h3></h3>
// 				</article>
// 				<article className={cx("l-4", "m-4", "c-12", "")}>
// 					<img src="" alt="" />
// 					<h3></h3>
// 				</article> */}
// 			{/* </section>
// 			<section>
// 				<h2>HAAA</h2>
// 			</section> */}
// 		</div>
// 	);
// };

// export default BlogPage;
// =================
// essayer connecter le back (API) comme une fonction
import { useEffect, useState } from "react";
import getAllproducts from "../services/productsApi";
import classNames from "classnames/bind";
import styles from "./BlogPage.module.css";

const cx = classNames.bind(styles);

const BlogPage = () => {
	const [products, setProducts] = useState([]);

	//utiliser un effet de bord (useEffect)
	useEffect(() => {
		//recupérer des données de l'API
		getAllproducts().then((data) => {
			setProducts(data.data);
			console.log(products);
			console.log(data.data);
		});
	}, []);

	return (
		<div>
			{products.map((product) => {
				return (
					<div
						key={crypto.randomUUID()}
						className={cx("product", "text-center")}
					>
						<img
							key={crypto.randomUUID()}
							src={`/images/${product.image}`}
							alt=""
							style={{ width: 100 }}
							className={cx("product-img")}
						/>

						<div className={cx("product-description")}>
							<span className={cx("product-brand")}>{product.brand_name}</span>
							<span className={cx("product-name")}>{product.name}</span>
							<span className={cx("product-price")}>{product.price}€</span>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default BlogPage;
