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
import { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./BlogPage.module.css";
import { getAllproducts } from "../services/productsApi";
import { v4 as uuid } from "uuid";
import AvisProduct from "../components/ProductComponents/AvisProduct";
import Button from "../components/Button/Button";
import { SecurityContext } from "../context/SecurityContextProvider";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const BlogPage = () => {
	const [products, setProducts] = useState([]);
	const [avis, setAvis] = useState(false);
	const { user } = useContext(SecurityContext);
	const navigate = useNavigate();

	//utiliser un effet de bord (useEffect)
	useEffect(() => {
		//recupérer des données de l'API
		getAllproducts().then((data) => {
			setProducts(data.data);
			// console.log(products);
			// console.log(data.data);
		});
	}, []);
	const handleClickAvis = () => {
		if (user) {
			setAvis(!avis);
		}
	};
	return (
		<div>
			{user && <Button onClick={handleClickAvis}>Rédiger un avis</Button>}
			{avis && <AvisProduct userId="2" productId="20" />}
			{products.map((product) => {
				return (
					<div key={uuid()} className={cx("product", "text-center")}>
						<img
							key={uuid()}
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
