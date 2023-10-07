import classNames from "classnames/bind";
import styles from "../../../components/ComponentsAdmin/AdminStyle.module.css";

import AdminProductForm from "../../../components/ComponentsAdmin/AdminProductForm";
const cx = classNames.bind(styles);

const AdminProductFormPage = () => {
	return (
		<div className={cx("grid wide")}>
			<div className={cx("ad-title")}>
				<h1 className={cx("title")}>Administration de produits</h1>
			</div>
			<section>
				<h2>La list de produits</h2>
				<AdminProductForm />
			</section>
		</div>
	);
};

export default AdminProductFormPage;
