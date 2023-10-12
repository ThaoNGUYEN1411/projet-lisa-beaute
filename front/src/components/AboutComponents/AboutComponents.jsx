import classNames from "classnames/bind";
import styles from "../AboutComponents/AboutComponents.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const AboutComponents = () => {
	return (
		<div className={cx("grid", "wide", "wrapper")}>
			<section>
				<div className={cx("wp-banner")}>
					<div className={cx("banner")}>
						<img src="./images/propos.webp" alt="" />
					</div>
					<div className={cx("title", "text-center")}>
						<h1>Qui sommes-nous?</h1>
					</div>
				</div>
				<div className={cx("text-center", "text-present")}>
					<p>
						Bienvenue sur Lisabeaute ! Nous sommes bien plus qu'un simple site
						de produits de beauté. Nous sommes une équipe passionnée de
						professionnels de la beauté et de la technologie, réunis par une
						vision commune : rendre l'univers de la beauté plus accessible,
						transparent et excitant pour vous.
					</p>
				</div>
			</section>
			{/* Block article */}
			<section className={cx("grid", "wide", "bloc-article")}>
				<article className={cx("row", "article")}>
					<div
						className={cx("wrapper-photo-article", "col", "l-6", "m-6", "c-12")}
					>
						<img
							src="images/propos-img2.webp"
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
							<h3 className={cx("article-title")}>La Beauté Partagée</h3>
							<p className={cx("article-text")}>
								Notre site, créé par des experts en beauté et des passionnés du
								développement, offre une expérience en ligne complète pour la
								beauté. Notre objectif est de vous aider à découvrir les
								produits populaires, suivre les tendances, obtenir des conseils
								d'experts, et prendre des décisions éclairées pour vous sentir
								bien dans votre peau. Rejoignez notre communauté et laissez
								briller votre passion pour la beauté à travers notre site.
							</p>
						</div>
					</div>
				</article>
			</section>
			<section>
				<div>
					<div className={cx("text-center")}>
						<h3 className={cx("social-label")}>Nous suivre</h3>
					</div>
					<div>
						<ul className={cx("list-social")}>
							<li>
								<Link to={"/"} className={cx("social-icon")}>
									<FontAwesomeIcon icon={faFacebook} />
								</Link>
							</li>
							<li>
								<Link to={"/"} className={cx("social-icon")}>
									<FontAwesomeIcon icon={faInstagram} />
								</Link>
							</li>
							<li>
								<Link to={"/"} className={cx("social-icon")}>
									<FontAwesomeIcon icon={faTwitter} />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutComponents;
