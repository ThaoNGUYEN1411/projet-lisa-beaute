import classNames from "classnames/bind";
import styles from "../../../components/ComponentsAdmin/AdminStyle.module.css";
import AdminListCaterories from "../../../components/ComponentsAdmin/AdminListCaterories";

const cx = classNames.bind(styles);

const AdminCategoryPage = () => {
	return (
		<div className={cx("grid wide")}>
			<div className={cx("ad-title")}>
				<h1 className={cx("title")}>Administration de categoriess</h1>
			</div>
			<AdminListCaterories />
		</div>
	);
};

export default AdminCategoryPage;
