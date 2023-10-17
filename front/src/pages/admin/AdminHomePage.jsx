import classNames from "classnames/bind";
import styles from "../../components/ComponentsAdmin/AdminStyle.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const cx = classNames.bind(styles);

const AdminHomePage = () => {
	return (
		<div className={cx("grid wide")}>
			<div className={cx("prod-title")}>
				<h1 className={cx("title")}>Espace Admin</h1>
			</div>
			<div className={cx("admin-bloc")}>
				<ul className={cx("row")}>
					<li className={cx("l-3", "m-3", "c-12")}>
						<Link to={"/admin/messages"} className={cx("admin-title")}>
							Messages
						</Link>
					</li>
					<li className={cx("l-3", "m-3", "c-12")}>
						<Link to={"/admin/marques"} className={cx("admin-title")}>
							Gérer les marques
						</Link>
					</li>
					<li className={cx("l-3", "m-3", "c-12")}>
						<Link to={"/admin/categories"} className={cx("admin-title")}>
							Gérer les catégories
						</Link>
					</li>
					<li className={cx("l-3", "m-3", "c-12")}>
						<Link to={"/admin/produits"} className={cx("admin-title")}>
							Gérer les produits
						</Link>
					</li>
				</ul>
			</div>
			<Button primary to={"/logout"}>
				ME DECONNECTER
			</Button>
		</div>
	);
};

export default AdminHomePage;
