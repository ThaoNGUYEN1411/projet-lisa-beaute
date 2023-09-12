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
// import { getAllProducts } from "../../../back/services/api.products";

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
			{/* <h1>Ex1: Change couleur</h1>
			<ChangeColor />
			<TextBraille /> */}

			{products.map((product) => {
				return (
					<div key={crypto.randomUUID()}>
						<h3>{product.name}</h3>
						{/* <img
							key={crypto.randomUUID()}
							src={product.image}
							alt=""
							style={{ width: 100 }}
						/>
						<p key={crypto.randomUUID()}>{product.description}</p> */}
					</div>
				);
			})}
			{/* <TipsCalcul /> */}
		</div>
	);
};

export default BlogPage;
