import classNames from "classnames/bind";
import styles from "./Footer.module.css";

const cx = classNames.bind(styles);

const Footer = () => {
	return (
		<footer className={cx("grid", "wide")}>
			<div className={cx("footer", "row")}>
				<div className={cx("footer-menu", "col", "c-12", "l-4", "m-4")}>
					<h3 className={cx("footer-title")}>A propos de Lisa Beauté</h3>
					<ul>
						<li className={cx("footer-item")}>
							<a href="#" className={cx("footer-link")}>
								Qui sommes nous?
							</a>
						</li>
						<li className={cx("footer-item")}>
							<a href="#" className={cx("footer-link")}>
								Nos magasins
							</a>
						</li>
						<li className={cx("footer-item")}>
							<a href="#" className={cx("footer-link")}>
								Nous rejoindre
							</a>
						</li>
					</ul>
				</div>
				<div className={cx("footer-menu", "col", "c-12", "l-4", "m-4")}>
					<h3 className={cx("footer-title")}>Services</h3>
					<ul>
						<li className={cx("footer-item")}>
							<a href="#" className={cx("footer-link")}>
								Rechercher un produit
							</a>
						</li>
						<li className={cx("footer-item")}>
							<a href="#" className={cx("footer-link")}>
								Nous contacter
							</a>
						</li>
					</ul>
				</div>
				<div className={cx("footer-menu", "col", "c-12", "l-4", "m-4")}>
					<h3 className={cx("footer-title")}>Condition</h3>
					<ul>
						<li className={cx("footer-item")}>
							<a href="#" className={cx("footer-link")}>
								Mention légales et CGU
							</a>
						</li>
						<li className={cx("footer-item")}>
							<a href="#" className={cx("footer-link")}>
								CGV
							</a>
						</li>
						<li className={cx("footer-item")}>
							<a href="#" className={cx("footer-link")}>
								Avis Clients
							</a>
						</li>
					</ul>
				</div>
			</div>
			<p className={cx("text-center", "coppyright")}>@2023 Lisa Beauté</p>
		</footer>
	);
};

export default Footer;
