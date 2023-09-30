import classNames from "classnames/bind";
import styles from "../../../components/ComponentsAdmin/AdminStyle.module.css";
import AdminCategoryForm from "../../../components/ComponentsAdmin/AdminCategoryForm";
const cx = classNames.bind(styles);

const AdminCategoryFormPage = () => {
	return (
		<div className={cx("grid wide")}>
			<div className={cx("ad-title")}>
				<h1 className={cx("title")}>Administration de categories</h1>
			</div>
			<section>
				<h2>La list de catégories</h2>
				<AdminCategoryForm />
			</section>
		</div>
	);
};

export default AdminCategoryFormPage;
