import classNames from "classnames/bind";
import styles from "./StorePage.module.css";
const cx = classNames.bind(styles);
import React from "react";
import MapStores from "../components/Store/MapStores";
import ListStores from "../components/Store/ListStores";

const StorePage = () => {
	return (
		<div className={cx("grid", "wide", "wrapper")}>
			<section>
				<div className={cx("wp-banner")}>
					<div className={cx("banner")}>
						<img src="./images/magasin.webp" alt="" />
					</div>
					<div className={cx("title", "text-center")}>
						<h1>Trouver le magasin le plus proche</h1>
					</div>
				</div>
				<article className={cx("row")}>
					<div className={cx("l-4", "m-4", "c-12", "list-store")}>
						<ListStores />
					</div>
					<div className={cx("l-8", "m-8", "c-12", "map")}>
						<MapStores />
					</div>
				</article>
			</section>
		</div>
	);
};

export default StorePage;
