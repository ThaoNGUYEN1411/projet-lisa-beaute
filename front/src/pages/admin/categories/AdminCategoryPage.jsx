import classNames from "classnames/bind";
import styles from "../../../components/ComponentsAdmin/AdminStyle.module.css";
import AdminListCategories from "../../../components/ComponentsAdmin/AdminListCategories";

const cx = classNames.bind(styles);

const AdminCategoryPage = () => {
	return (
		<div className={cx("grid wide")}>
			<div className={cx("ad-title")}>
				<h1 className={cx("title")}>Administration de categoriess</h1>
			</div>
			<AdminListCategories />
		</div>
	);
};

export default AdminCategoryPage;
