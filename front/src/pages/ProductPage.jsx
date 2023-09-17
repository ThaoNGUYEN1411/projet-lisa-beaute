import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import styles from "./ProductPage.module.css";
import getProduct from "../services/productApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getAllComments from "../services/commentApi";

const cx = classNames.bind(styles);

const ProductPage = () => {
	const [product, setProduct] = useState({});
	const [comments, setComments] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		console.log("id", id);
		getProduct(id)
			.then((data) => {
				data && setProduct(data);
				console.log("product", product);
			})
			.catch((error) => console.log("error getting one product", error));
	}, [id]);

	useEffect(() => {
		getAllComments(id).then((data) => {
			data && setComments(data);
			console.log(data);
			console.log("comments", comments);
		});
	}, []);

	return (
		<div className={cx("grid", "wide")}>
			{console.log("product rendre", product)}
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
							{product.category_name}
						</a>
					</li>
				</ul>
			</div>
			<section className={cx("wp-product", "row")}>
				<div className={cx("col", "l-6", "m-6", "c-12")}>
					<div className={cx("wp-img-product")}>
						<img
							src={`/images/${product.image}`}
							alt="Demaquillant Lancome"
							className={cx("img-product")}
						/>
					</div>
				</div>
				<article className={cx("col", "l-6", "m-6", "c-12")}>
					<div className={cx("contenu-product")}>
						<h1 className={cx("prod-maintitle")}>
							<div className={cx("prod-name-brand")}>{product.brand_name}</div>
							<div className={cx("prod-subname")}>{product.name}</div>
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
						{/* <div className={cx("star")}>
							<span>
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
							</span>
							<span>Voir 6 avis</span>
						</div> */}
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
						<p className={cx("l-8", "c-12", "m-12")}>{product.description}</p>
					</div>
					<div className={cx("row")}>
						<h3 className={cx("l-4", "m-12", "c-12")}>
							Conseils d'utilisation
						</h3>
						<p className={cx("l-8", "c-12", "m-12")}>{product.usage_tips}</p>
					</div>
					<div className={cx("row")}>
						<h3 className={cx("l-4", "m-12", "c-12")}>Ingrédients</h3>
						<p className={cx("l-8", "c-12", "m-12")}>{product.ingredients}</p>
					</div>
				</article>
			</section>
			{comments.length > 0 && (
				<section className={cx("avis", "margin-bloc")}>
					<h3 className={cx("title-block", "text-center")}>
						Avis consommateur
					</h3>
					{comments.map((comment) => {
						return (
							<article>
								<div className={cx("avis-header", "row")}>
									<div className={cx("l-8", "m-8", "c-8")}>
										<h4 className={cx("name-user")}>
											{comment.user_firstName} {comment.user_lastName}
										</h4>
										<time className={cx("comment-date")}>{comment.time}</time>
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
									<p>{comment.content}</p>
								</div>
							</article>
						);
					})}
				</section>
			)}
			<hr />
		</div>
	);
};

export default ProductPage;
