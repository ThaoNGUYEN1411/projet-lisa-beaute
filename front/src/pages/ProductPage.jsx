import classNames from "classnames/bind";
import styles from "./ProductPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

const ProductPage = () => {
	return (
		<div className={cx("grid", "wide")}>
			<div className={cx("breadcrumbs-nav")}>
				<ul className={cx("breadcrumbs")}>
					<li className={cx("breadcrumbs-item")}>
						<a href="#" className={cx("breadcrumbs-link")}>
							Accueil
							<FontAwesomeIcon
								icon={faChevronRight}
								className={cx("breadcrumbs-icon")}
							/>
						</a>
					</li>
					<li className={cx("breadcrumbs-item")}>
						<a href="#" className={cx("breadcrumbs-link")}>
							Nom de catégorie
						</a>
					</li>
				</ul>
			</div>
			<section className={cx("wp-product", "row")}>
				<div className={cx("col", "l-6", "m-6", "c-12")}>
					<div className={cx("wp-img-product")}>
						<img
							src="/images/pd-1.jpg"
							alt="Demaquillant Lancome"
							className={cx("img-product")}
						/>
					</div>
				</div>
				<article className={cx("col", "l-6", "m-6", "c-12")}>
					<div className={cx("contenu-product")}>
						<h1 className={cx("prod-maintitle")}>
							<div className={cx("prod-name-brand")}>Lancome</div>
							<div className={cx("prod-subname")}>
								BI-FACIL Démaquillant Yeux Instantané - Effet non gras
							</div>
						</h1>
						<div>
							<div className={cx("price")}>
								30
								<span className={cx("price-currency")}>€</span>
							</div>
							<div className={cx("icon-heart")}>
								<FontAwesomeIcon icon={faHeart} />
							</div>
						</div>
						<div className={cx("star")}>
							<span>
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
							</span>
							<span>Voir 6 avis</span>
						</div>
						<div>
							<p>button</p>
						</div>
					</div>
				</article>
			</section>
		</div>
	);
};

export default ProductPage;
