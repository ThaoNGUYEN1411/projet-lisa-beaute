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
							src="/images/the-ordinary-p1.webp"
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
			<section className={cx("wp-desc-product")}>
				<article>
					<h2 className={cx("text-center")}>Informations de produit</h2>
					<div className={cx("row")}>
						<h3 className={cx("l-4", "m-12", "c-12")}>Description</h3>
						<p className={cx("l-8", "c-12", "m-12")}>
							Le Masque à l'Acide Salicylique 2% est formulé pour cibler le
							teint terne et les irrégularités de texture. La formule est
							composée d'acide salicylique concentré à 2% mais également de
							charbon et d'argiles afin de lisser la peau et révéler l'éclat et
							la fraîcheur du teint.
						</p>
					</div>
					<div className={cx("row")}>
						<h3 className={cx("l-4", "m-12", "c-12")}>
							Conseils d'utilisation
						</h3>
						<p className={cx("l-8", "c-12", "m-12")}>
							Utilisez une à deux fois par semaine sur une peau parfaitement
							propre et sèche. Ne pas utiliser sur une peau mouillée. Appliquez
							uniformément du bout des doigts sur le visage en évitant le
							contour des yeux.
						</p>
					</div>
					<div className={cx("row")}>
						<h3 className={cx("l-4", "m-12", "c-12")}>Ingrédients</h3>
						<p className={cx("l-8", "c-12", "m-12")}>
							AQUA (WATER), KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE,
							SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE,
							PENTYLENE GLYCOL.
						</p>
					</div>
				</article>
			</section>
		</div>
	);
};

export default ProductPage;
