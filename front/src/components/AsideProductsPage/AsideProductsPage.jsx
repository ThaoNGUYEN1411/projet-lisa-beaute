import classNames from "classnames/bind";
import styles from "./AsideProductsPage.module.css";
import Dropdown from "../Dropdown/Dropdown";

const cx = classNames.bind(styles);

const AsideProductsPage = () => {
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

	return (
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
	);
};

export default AsideProductsPage;
