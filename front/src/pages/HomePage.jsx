import classNames from "classnames/bind";
import styles from "./HomePage.module.css";
import Button from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const HomePage = () => {
	return (
		<div>
			{/* banner */}
			<section className={cx("grid wide")}>
				<div className={cx("row")}>
					<article
						className={cx("upper-banner", "col", "l-12", "m-12", "c-12")}
					>
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
					<article
						className={cx("under-banner", ["col", "l-4", "m-4", "c-12"])}
					>
						<Link
							to={"/produits/categorie/Maquillage"}
							className={cx("wp-img")}
						>
							<img src="/images/b.jpg" alt="" className={cx("banner-img")} />
							<span className={cx("banner-title")}>Soin & maquillage</span>
						</Link>
					</article>
					<article className={cx("under-banner", "col", "l-4", "m-4", "c-12")}>
						<Link to={"/produits"} className={cx("wp-img")}>
							<img src="/images/b.webp" alt="" className={cx("banner-img")} />
							<span className={cx("banner-title")}>Top vents</span>
						</Link>
					</article>
				</div>
			</section>

			{/* product prefer */}
			<section className={cx("grid", "wide", "product-prefer")}>
				<h2 className={cx("title-block", "text-center")}>
					Nos produits préférés
				</h2>
				<div className={cx("row")}>
					<article
						className={cx(
							"product",
							"text-center",
							"col",
							"l-3",
							"m-6",
							"c-12",
						)}
					>
						<Link to={"/produits/6"}>
							<img
								src="/images/product1-remp.gif"
								alt=""
								className={cx("product-img")}
							/>
							<div className={cx("product-description")}>
								<span className={cx("product-brand")}>The ordinary</span>
								<span className={cx("product-name")}>
									Masque à l'Acide Salicylique 2%
								</span>
								<span className={cx("product-price")}>25€</span>
							</div>
						</Link>
					</article>
					<article
						className={cx(
							"product",
							"text-center",
							"col",
							"l-3",
							"m-6",
							"c-12",
						)}
					>
						<Link to={"/produits/14"}>
							<img
								src="/images/product2-rs.jpg"
								alt=""
								className={cx("product-img")}
							/>
							<div className={cx("product-description")}>
								<span className={cx("product-brand")}>Lancôme</span>
								<span className={cx("product-name")}>Base Maquillage</span>
								<span className={cx("product-price")}>62€</span>
							</div>
						</Link>
					</article>
					<article
						className={cx(
							"product",
							"text-center",
							"col",
							"l-3",
							"m-6",
							"c-12",
						)}
					>
						<Link to={"/produits/1"}>
							<img
								src="/images/product3-rs.jpg"
								alt="The ordinary"
								className={cx("product-img")}
							/>
							<div className={cx("product-description")}>
								<span className={cx("product-brand")}>The ordinary</span>
								<span className={cx("product-name")}>
									The Ordinary peeling L'AHA
								</span>
								<span className={cx("product-price")}>13€</span>
							</div>
						</Link>
					</article>
					<article
						className={cx(
							"product",
							"text-center",
							"col",
							"l-3",
							"m-6",
							"c-12",
						)}
					>
						<Link to={"/produits/42"}>
							<img
								src="/images/product6-rs.jpg"
								alt=""
								className={cx("product-img")}
							/>
							<div className={cx("product-description")}>
								<span className={cx("product-brand")}>GUERLAIN</span>
								<span className={cx("product-name")}>
									AQUA ALLEGORIA FORTE Mandarine Basilic
								</span>
								<span className={cx("product-price")}>122€</span>
							</div>
						</Link>
					</article>
				</div>
				<div className={cx("text-center")}>
					<Button primary>Je découvrir plus</Button>
				</div>
			</section>

			{/* Block article */}
			<section className={cx("grid", "wide", "bloc-article")}>
				<article className={cx("row", "article")}>
					<div
						className={cx("wrapper-photo-article", "col", "l-6", "m-6", "c-12")}
					>
						<img
							src="images/img-article1-rs.jpg"
							alt=""
							className={cx("img-article")}
						/>
					</div>
					<div
						className={cx(
							"text-center",
							"col",
							"l-6",
							"m-6",
							"c-12",
							"margin-block",
						)}
					>
						<div className={cx("article-contenu")}>
							<h3 className={cx("article-title")}>
								Quels parfums porter au étés ?
							</h3>
							<p className={cx("article-text")}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
								maiores in, laudantium nam illum dolores ab mollitia. Id
								mollitia necessitatibus et labore aliquid fuga autem amet quas,
								nam odit nisi.
							</p>
						</div>

						<Button primary>Je decouvre</Button>
					</div>
				</article>
			</section>

			{/* block categories */}
			<section className={cx("grid", "wide", "product-prefer")}>
				<h2 className={cx("title-block", "text-center")}>Nos categories</h2>
				<div className={cx("row")}>
					<article
						className={cx(
							"product",
							"text-center",
							"col",
							"l-3",
							"m-6",
							"c-12",
						)}
					>
						<img src="/images/cat1.jpg" alt="" className={cx("product-img")} />
						<div className={cx("product-description")}>
							<span className={cx("product-brand")}>name</span>
						</div>
					</article>
					<article
						className={cx(
							"product",
							"text-center",
							"col",
							"l-3",
							"m-6",
							"c-12",
						)}
					>
						<img src="/images/cat2.jpg" alt="" className={cx("product-img")} />
						<div className={cx("product-description")}>
							<span className={cx("product-brand")}>name</span>
						</div>
					</article>
					<article
						className={cx(
							"product",
							"text-center",
							"col",
							"l-3",
							"m-6",
							"c-12",
						)}
					>
						<img src="/images/cat3.jpg" alt="" className={cx("product-img")} />
						<div className={cx("product-description")}>
							<span className={cx("product-brand")}>name</span>
						</div>
					</article>
					<article
						className={cx(
							"product",
							"text-center",
							"col",
							"l-3",
							"m-6",
							"c-12",
						)}
					>
						<img src="/images/cat4.jpg" alt="" className={cx("product-img")} />
						<div className={cx("product-description")}>
							<span className={cx("product-brand")}>name</span>
						</div>
					</article>
				</div>
			</section>

			{/* newsletter */}
			<section className={cx("grid", "wide", "news-letter")}>
				<div className={cx("text-center", "news-letter-bloc")}>
					<label htmlFor="email" className={cx("input-title")}>
						S’inscrire à notre newsletter
					</label>
					<input
						type="email"
						placeholder="Votre Email..."
						className={cx("input-email")}
					/>
					<Button small className={cx("btn-newsletter")}>
						<FontAwesomeIcon icon={faPaperPlane} />
					</Button>
					<div>
						<span className={cx("social-label")}>Nous suivre</span>
						<div>
							<ul className={cx("list-social")}>
								<li>
									<a href="#" className={cx("social-icon")}>
										<FontAwesomeIcon icon={faFacebook} />
									</a>
								</li>
								<li>
									<a href="#" className={cx("social-icon")}>
										<FontAwesomeIcon icon={faInstagram} />
									</a>
								</li>
								<li>
									<a href="#" className={cx("social-icon")}>
										<FontAwesomeIcon icon={faTwitter} />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
