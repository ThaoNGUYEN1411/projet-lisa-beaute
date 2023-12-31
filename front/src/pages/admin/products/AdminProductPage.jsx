import classNames from "classnames/bind";
import styles from "../../../components/ComponentsAdmin/AdminStyle.module.css";
import AdminListProducts from "../../../components/ComponentsAdmin/AdminListProducts";
const cx = classNames.bind(styles);

const AdminProductPage = () => {
	return (
		<div className={cx("grid wide2")}>
			<div className={cx("ad-title")}>
				<h1 className={cx("title")}>Administration de produits</h1>
			</div>
			<AdminListProducts />
		</div>
	);
};

export default AdminProductPage;
