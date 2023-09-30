import classNames from "classnames/bind";
import styles from "../../../components/ComponentsAdmin/AdminStyle.module.css";
import AdminListBrands from "../../../components/ComponentsAdmin/AdminListBrands";

const cx = classNames.bind(styles);

const AdminBrandPage = () => {
	return (
		<div className={cx("grid wide")}>
			<div className={cx("ad-title")}>
				<h1 className={cx("title")}>Admin Categories</h1>
			</div>
			<AdminListBrands />
		</div>
	);
};

export default AdminBrandPage;
