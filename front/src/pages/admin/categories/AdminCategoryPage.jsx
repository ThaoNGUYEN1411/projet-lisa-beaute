import classNames from "classnames/bind";
import styles from "../../../components/ComponentsAdmin/AdminStyle.module.css";
import Button from "../../../components/Button/Button";
import AdminListCaterories from "../../../components/ComponentsAdmin/AdminListCaterories";

const cx = classNames.bind(styles);

const AdminCategoryPage = () => {
	return (
		<div className={cx("grid wide")}>
			<div className={cx("ad-title")}>
				<h1 className={cx("title")}>Admin Categories</h1>
			</div>
			<div className={cx("admin-bloc", "text-center")}>
				<Button primary to="/categories/form">
					Ajouter une nouvelle catégorie{" "}
				</Button>
			</div>
			<section>
				<h2>La list de catégories</h2>
				<AdminListCaterories />
			</section>
		</div>
	);
};

export default AdminCategoryPage;
