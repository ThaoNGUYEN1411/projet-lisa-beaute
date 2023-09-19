import classNames from "classnames/bind";
import styles from "./AsideProductsPage.module.css";
import Dropdown from "../Dropdown/Dropdown";
import { useEffect, useState } from "react";
import getAllBrands from "../../services/allBrandsApi";
import getAllCategories from "../../services/allCategoriesApi";

const cx = classNames.bind(styles);

const AsideProductsPage = () => {
	const [allBrands, setAllBrands] = useState([]);
	const [allCategories, setAllCategories] = useState([]);

	useEffect(() => {
		getAllBrands().then((data) => {
			// console.log(data);
			setAllBrands(data);
		});
	}, []);

	useEffect(() => {
		getAllCategories().then((data) => {
			// console.log(data);
			setAllCategories(data);
		});
	}, []);

	const priceFilter = [
		{ id: 1, name: "Prix croissant" },
		{ id: 2, name: "Prix décroissant" },
		{ id: 3, name: "Prix promotion" },
	];

	const numStarFilter = [
		{ id: 1, name: "5/5 étoiles" },
		{ id: 2, name: "4/5 étoiles" },
		{ id: 3, name: "3/5 étoiles" },
		{ id: 4, name: "2/5 étoiles" },
		{ id: 5, name: "1/5 étoiles" },
	];

	return (
		<aside className={cx("container-filter", "col", "l-3", "m-3", "c-12")}>
			<div className={cx("list-filter", "row")}>
				<div className={cx("col", "l-12", "m-12", "c-6")}>
					<Dropdown
						links={allCategories}
						isCategories={isCategories}
						titleDropdown="Catégories"
					/>
					<hr className={cx("hr")} />
				</div>
				<div className={cx("col", "l-12", "m-12", "c-6")}>
					<Dropdown links={priceFilter} titleDropdown="Prix" />
					<hr className={cx("hr")} />
				</div>
				<div className={cx("col", "l-12", "m-12", "c-6")}>
					<Dropdown links={allBrands} titleDropdown="Marque" />
					<hr className={cx("hr")} />
				</div>
				<div className={cx("col", "l-12", "m-12", "c-6")}>
					<Dropdown links={numStarFilter} titleDropdown="Note" />
				</div>
			</div>
		</aside>
	);
};

export default AsideProductsPage;
