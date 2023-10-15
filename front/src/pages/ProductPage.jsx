import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import styles from "./ProductPage.module.css";
import { getProduct } from "../services/productsApi";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getAllComments } from "../services/commentApi";
import { toLocaleDate } from "../services/dateService.js";
import { v4 as uuid } from "uuid";
import Button from "../components/Button/Button";
import AvisProduct from "../components/ProductComponents/AvisProduct";
import { SecurityContext } from "../context/SecurityContextProvider";
import ProductPrefer from "../components/HomePageComponents/ProductPrefer";
const VITE_API_URL = import.meta.env.VITE_API_URL;

const cx = classNames.bind(styles);

const ProductPage = () => {
	const [product, setProduct] = useState({});
	const [comments, setComments] = useState([]);
	const { user } = useContext(SecurityContext);
	const [avis, setAvis] = useState(false);
	const [message, setMessage] = useState();

	const { id } = useParams();

	useEffect(() => {
		// console.log("id", id);
		getProduct(id)
			.then((data) => {
				data && setProduct(data);
				// console.log("product", product);
			})
			.catch((error) => console.log("error getting one product", error));
	}, [id]);

	useEffect(() => {
		getAllComments(id).then((data) => {
			data && setComments(data);
			// console.log(data);
			// console.log("comments", comments);
		});
	}, []);
	const handleClickAvis = () => {
		if (user) {
			setAvis(!avis);
		}
	};

	useEffect(() => {
		if (window.sessionStorage.getItem("notice")) {
			setMessage(window.sessionStorage.getItem("notice"));
			// supprimer le massage en session
			window.sessionStorage.removeItem("notice");

			// faire disparaître le message après un délai en millisecondes
			setTimeout(() => setMessage(null), 5000);
		}
	}, []);
	return (
		<div className={cx("grid", "wide", "wrapper")}>
			<div className={cx("breadcrumbs-nav")}>
				<ul className={cx("breadcrumbs")}>
					<li className={cx("breadcrumbs-item")}>
						<Link to={"/produits"}>
							Accueil
							<FontAwesomeIcon
								icon={faChevronRight}
								className={cx("breadcrumbs-icon")}
							/>
						</Link>
					</li>
					<li className={cx("breadcrumbs-item")}>
						<Link to={`/produits/categorie/${product.category_name}`}>
							{product.category_name}
						</Link>
					</li>
				</ul>
			</div>
			<section className={cx("wp-product", "row")}>
				<div className={cx("col", "l-6", "m-6", "c-12")}>
					<div className={cx("wp-img-product")}>
						<img
							src={`${VITE_API_URL}/img/${product?.image}`}
							alt={product.name}
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
								{product.price}
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
						{/* <div>
							<p>button</p>
						</div> */}
					</div>
				</article>
			</section>
			<section className={cx("wp-desc-product", "row")}>
				<article className={cx("col", "l-12", "m-12", "c-12")}>
					<h2 className={cx("text-center", "title-block", "info-product")}>
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
			<ProductPrefer />
			<div className={cx("avis")}>
				<div className={cx("text-right")}>
					<p className={cx("message-succes")}>{message}</p>
					{user && <Button onClick={handleClickAvis}>Rédiger un avis</Button>}
				</div>
				{avis && <AvisProduct userId={user.id} productId={product.id} />}
			</div>
			{comments.length > 0 && (
				<section className={cx("avis", "margin-bloc")}>
					<h3 className={cx("title-block", "text-center")}>
						Avis consommateur
					</h3>
					{comments.map((comment) => {
						return (
							<article key={uuid()}>
								<div className={cx("avis-header", "row")} key={uuid()}>
									<div className={cx("l-8", "m-8", "c-8")} key={uuid()}>
										<h4 className={cx("name-user")} key={uuid()}>
											{comment.user_firstName} {comment.user_lastName}
										</h4>
										<time className={cx("comment-date")} key={uuid()}>
											{toLocaleDate(comment.time)}
										</time>
									</div>
									<div className={cx("star", "l-4", "m-4", "c-4")} key={uuid()}>
										<span key={uuid()}>
											<FontAwesomeIcon icon={faStar} />
											<FontAwesomeIcon icon={faStar} />
											<FontAwesomeIcon icon={faStar} />
											<FontAwesomeIcon icon={faStar} />
										</span>
									</div>
								</div>
								<div className={cx("avis-content", "margin-bloc")} key={uuid()}>
									<p key={uuid()}>{comment?.content}</p>
								</div>
							</article>
						);
					})}
				</section>
			)}
			<hr className={cx("hr")} />
		</div>
	);
};

export default ProductPage;
