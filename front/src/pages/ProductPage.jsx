import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import styles from "./ProductPage.module.css";
import getProduct from "../services/productApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

const ProductPage = () => {
	const [product, setProduct] = useState();
	const { id } = useParams();

	useEffect(() => {
		getProduct(id)
			.then((data) => {
				setProduct(data);
			})
			.catch((error) => console.log("error getting one product", error));
	}, [id]);

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
					<h2 className={cx("text-center", "title-block")}>
						Informations de produit
					</h2>
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
			<section className={cx("avis", "margin-bloc")}>
				<h3 className={cx("title-block", "text-center")}>Avis consommateur</h3>
				<article>
					<div className={cx("avis-header", "row")}>
						<div className={cx("l-8", "m-8", "c-8")}>
							<h4 className={cx("name-user")}>Isma Hana</h4>
							<time datetime="2023-05-08 02:55:41" class="comment-date">
								Le 08 mai 2023
							</time>
						</div>
						<div className={cx("star", "l-4", "m-4", "c-4")}>
							<span>
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
							</span>
						</div>
					</div>
					<div className={cx("avis-content", "margin-bloc")}>
						<p>
							J'adore ! Comparé à des marques de luxe, l'effet de fraîcheur
							n'est pas trop prononcé. C'est très agréable, et la tenue est
							excellente pour un gloss.
						</p>
					</div>
				</article>
				<hr />
			</section>
		</div>
	);
};

export default ProductPage;
