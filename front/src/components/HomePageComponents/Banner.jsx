import classNames from "classnames/bind";
import styles from "../HomePageComponents/HomePage.module.css";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const Banner = () => {
	return (
		<section>
			<div className={cx("row")}>
				<article className={cx("upper-banner", "col", "l-12", "m-12", "c-12")}>
					<div className={cx("banner")}>
						<img
							src="/images/banner-upper-g.jpg"
							alt=""
							className={cx("banner-img")}
						/>
					</div>
				</article>
			</div>

			<div className={cx("under-banners", "row")}>
				<article className={cx("under-banner", "col", "l-4", "m-4", "c-12")}>
					<Link to={"/produits/categorie/Nouveauté"} className={cx("wp-img")}>
						<img src="/images/b3.jpg" alt="" className={cx("banner-img")} />
						<span className={cx("banner-title")}>Nouveauté</span>
					</Link>
				</article>
				<article className={cx("under-banner", ["col", "l-4", "m-4", "c-12"])}>
					<Link to={"/produits/categorie/Maquillage"} className={cx("wp-img")}>
						<img src="/images/b.jpg" alt="" className={cx("banner-img")} />
						<span className={cx("banner-title")}>Soin & maquillage</span>
					</Link>
				</article>
				<article className={cx("under-banner", "col", "l-4", "m-4", "c-12")}>
					<Link to={"/produits"} className={cx("wp-img")}>
						<img src="/images/b.webp" alt="" className={cx("banner-img")} />
						<span className={cx("banner-title")}>Top ventes</span>
					</Link>
				</article>
			</div>
		</section>
	);
};

export default Banner;
