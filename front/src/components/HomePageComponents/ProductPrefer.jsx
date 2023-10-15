import classNames from "classnames/bind";
import styles from "../HomePageComponents/HomePage.module.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const cx = classNames.bind(styles);

const ProductPrefer = () => {
	return (
		<section className={cx("product-prefer")}>
			<h2 className={cx("title-block", "text-center")}>
				Nos produits préférés
			</h2>
			<div className={cx("row")}>
				<article
					className={cx("product", "text-center", "col", "l-3", "m-6", "c-12")}
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
					className={cx("product", "text-center", "col", "l-3", "m-6", "c-12")}
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
					className={cx("product", "text-center", "col", "l-3", "m-6", "c-12")}
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
					className={cx("product", "text-center", "col", "l-3", "m-6", "c-12")}
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
				<Button primary to={"/produits"}>
					Je découvrir plus
				</Button>
			</div>
		</section>
	);
};

export default ProductPrefer;
