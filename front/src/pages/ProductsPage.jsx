import { useEffect, useState } from "react";
import getAllproducts from "../services/productsApi";
import classNames from "classnames/bind";
import styles from "./ProductsPage.module.css";
import Product from "../components/Product/Product";
import Dropdown from "../components/Dropdown/Dropdown";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const ProductsPage = () => {
	const dropdownCats = [
		{ text: "Nouveautés", url: "#" },
		{ text: "Parfum", url: "#" },
		{ text: "Maquillage", url: "#" },
		{ text: "Soin", url: "#" },
		{ text: "Cheveux", url: "#" },
	];

	const priceFilter = [
		{ text: "Prix croissant", url: "#" },
		{ text: "Prix décroissant", url: "#" },
		{ text: "Prix promotion", url: "#" },
	];

	const brandFilter = [
		{ text: "Chanel", url: "#" },
		{ text: "Dior", url: "#" },
		{ text: "Lancome", url: "#" },
		{ text: "Yves Rocher", url: "#" },
	];

	const numStarFilter = [
		{ text: "5/5 étoiles", url: "#" },
		{ text: "4/5 étoiles", url: "#" },
		{ text: "3/5 étoiles", url: "#" },
		{ text: "2/5 étoiles", url: "#" },
		{ text: "1/5 étoiles", url: "#" },
	];

	const [products, setProducts] = useState([]);
	console.log("products", products);

	// const productsCheveux = products.filter(elm => elm.type ==== "hair")

	useEffect(() => {
		//recupérer des données de l'API
		getAllproducts().then((data) => {
			setProducts(data.data);
			// console.log(products);
			// console.log(data.data);
		});
	}, []);

	return (
		<div className={cx("grid", "wide")}>
			<div className={cx("prod-title")}>
				<h1 className={cx("title")}>Tous les produits</h1>
			</div>

			<div className={cx("grid", "wide", "row")}>
				<aside className={cx("container-filter", "col", "l-3", "m-3", "c-12")}>
					<div className={cx("list-filter", "row")}>
						<div className={cx("col", "l-12", "m-12", "c-6")}>
							<Dropdown links={dropdownCats} titleDropdown="Catégories" />
							<hr className={cx("hr")} />
						</div>
						<div className={cx("col", "l-12", "m-12", "c-6")}>
							<Dropdown links={priceFilter} titleDropdown="Prix" />
							<hr className={cx("hr")} />
						</div>
						<div className={cx("col", "l-12", "m-12", "c-6")}>
							<Dropdown links={brandFilter} titleDropdown="Marque" />
							<hr className={cx("hr")} />
						</div>
						<div className={cx("col", "l-12", "m-12", "c-6")}>
							<Dropdown links={numStarFilter} titleDropdown="Notes" />
						</div>
					</div>
				</aside>

				<section className={cx("product-wrapper", "col", "l-9", "m-9", "c-12")}>
					<div className={cx("prod-list", "row")}>
						{products.map((product) => {
							return (
								<article className={cx("prod", "col", "l-3", "m-4", "c-6")}>
									<Link to={`/${product.id}`}>
										<Product imgProdWidth product={product} />
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

export default ProductsPage;
