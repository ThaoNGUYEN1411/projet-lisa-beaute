import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "../ComponentsAdmin/AdminStyle.module.css";

const cx = classNames.bind(styles);

const NavbarAdmin = () => {
	return (
		<div className={cx("ad-nav")}>
			<div className={cx("grid", "wide", "row")}>
				<div className={cx("l-2")}>
					<Link to={"/"}>
						<img
							src="/logo/logo-lisa.png"
							alt="Lisa Beaute"
							className={cx("logo")}
						/>
					</Link>
				</div>
				<nav className={cx("l-10")}>
					<Link to={"/admin/produits"} className={cx("nav-item")}>
						Produits
					</Link>
					<Link to={"/admin/categories"} className={cx("nav-item")}>
						Catégories
					</Link>
					<Link to={"/admin/marques"} className={cx("nav-item")}>
						Marques
					</Link>
					<Link to={"/admin/messages"} className={cx("nav-item")}>
						Messages
					</Link>
					{/* <Link to={"/admin/blog"} className={cx("nav-item")}>
						Blog
					</Link> */}
				</nav>
			</div>
		</div>
	);
};

export default NavbarAdmin;
