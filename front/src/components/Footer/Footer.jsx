import classNames from "classnames/bind";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Footer = () => {
	return (
		<footer className={cx("grid", "wide")}>
			<div className={cx("footer", "row")}>
				<div className={cx("footer-menu", "col", "c-12", "l-4", "m-4")}>
					<h3 className={cx("footer-title")}>A propos de Lisa Beauté</h3>
					<ul>
						<li className={cx("footer-item")}>
							<Link to={"/apropos"} className={cx("footer-link")}>
								Qui sommes nous?
							</Link>
						</li>
						<li className={cx("footer-item")}>
							<Link to={"/magasin"} className={cx("footer-link")}>
								Nos magasins
							</Link>
						</li>
						<li className={cx("footer-item")}>
							<Link to={"/users/registration"} className={cx("footer-link")}>
								Nous rejoindre
							</Link>
						</li>
					</ul>
				</div>
				<div className={cx("footer-menu", "col", "c-12", "l-4", "m-4")}>
					<h3 className={cx("footer-title")}>Services</h3>
					<ul>
						<li className={cx("footer-item")}>
							<Link to={"/produits"} className={cx("footer-link")}>
								Rechercher un produit
							</Link>
						</li>
						<li className={cx("footer-item")}>
							<Link to={"/contact"} className={cx("footer-link")}>
								Nous contacter
							</Link>
						</li>
					</ul>
				</div>
				<div className={cx("footer-menu", "col", "c-12", "l-4", "m-4")}>
					<h3 className={cx("footer-title")}>Condition</h3>
					<ul>
						<li className={cx("footer-item")}>
							<Link to={"/"} className={cx("footer-link")}>
								Mention légales et CGU
							</Link>
						</li>
						<li className={cx("footer-item")}>
							<Link to={"/"} className={cx("footer-link")}>
								CGV
							</Link>
						</li>
						<li className={cx("footer-item")}>
							<Link to={"/"} className={cx("footer-link")}>
								Avis Clients
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<p className={cx("text-center", "coppyright")}>@2023 Lisa Beauté</p>
		</footer>
	);
};

export default Footer;
