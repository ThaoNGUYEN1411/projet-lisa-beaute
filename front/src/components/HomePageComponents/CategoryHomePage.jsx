import classNames from "classnames/bind";
import styles from "../HomePageComponents/HomePage.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const CategoryHomePage = () => {
	return (
		<section className={cx("product-prefer")}>
			<h2 className={cx("title-block", "text-center")}>Nos categories</h2>
			<div className={cx("row")}>
				<article
					className={cx("product", "text-center", "col", "l-3", "m-6", "c-12")}
				>
					<Link to={"/produits/categorie/Soin"}>
						<img src="/images/cat1.jpg" alt="" className={cx("product-img")} />
						<div className={cx("product-description")}>
							<span className={cx("product-brand")}>Soin</span>
						</div>
					</Link>
				</article>
				<article
					className={cx("product", "text-center", "col", "l-3", "m-6", "c-12")}
				>
					<Link to={"/produits/categorie/Parfum"}>
						<img src="/images/cat2.jpg" alt="" className={cx("product-img")} />
						<div className={cx("product-description")}>
							<span className={cx("product-brand")}>Parfum</span>
						</div>
					</Link>
				</article>
				<article
					className={cx("product", "text-center", "col", "l-3", "m-6", "c-12")}
				>
					<Link to={"/produits/categorie/Maquillage"}>
						<img src="/images/cat3.jpg" alt="" className={cx("product-img")} />
						<div className={cx("product-description")}>
							<span className={cx("product-brand")}>Maquillage</span>
						</div>
					</Link>
				</article>
				<article
					className={cx("product", "text-center", "col", "l-3", "m-6", "c-12")}
				>
					<Link to={"/produits/categorie/Bio"}>
						<img src="/images/cat4.jpg" alt="" className={cx("product-img")} />
						<div className={cx("product-description")}>
							<span className={cx("product-brand")}>Bio</span>
						</div>
					</Link>
				</article>
			</div>
		</section>
	);
};

export default CategoryHomePage;
