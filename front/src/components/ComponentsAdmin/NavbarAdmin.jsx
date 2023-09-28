import { Link } from "react-router-dom";
import classNames from "classnames/bind";
// import styles from "../Header/Navbar/Navbar.module.css";
import styles from "../ComponentsAdmin/AdminStyle.module.css";

const cx = classNames.bind(styles);

const NavbarAdmin = () => {
	return (
		<div className={cx("ad-nav")}>
			<nav className={cx("grid wide")}>
				<Link to={"/produits"} className={cx("nav-item")}>
					Produits
				</Link>
				<Link to={"/categories"} className={cx("nav-item")}>
					Catégories
				</Link>
				<Link to={"/marques"} className={cx("nav-item")}>
					Marques
				</Link>
			</nav>
		</div>
	);
};

export default NavbarAdmin;
