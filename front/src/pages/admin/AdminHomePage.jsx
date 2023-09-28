import classNames from "classnames/bind";
import styles from "../ProductsPage.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const AdminHomePage = () => {
	return (
		<div className={cx("grid wide")}>
			<div className={cx("prod-title")}>
				<h1 className={cx("title")}>Admin</h1>
			</div>
			<div className={cx("admin-bloc")}>
				<ul className={cx("row")}>
					<li className={cx("l-4", "m-4", "c-12")}>
						<Link to={"/admin/produits"} className={cx("admin-title")}>
							Gérer les produits
						</Link>
					</li>
					<li className={cx("l-4", "m-4", "c-12")}>
						<Link to={"/admin/marques"} className={cx("admin-title")}>
							Gérer les marques
						</Link>
					</li>
					<li className={cx("l-4", "m-4", "c-12")}>
						<Link to={"/admin/categories"} className={cx("admin-title")}>
							Gérer les catégories
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AdminHomePage;
