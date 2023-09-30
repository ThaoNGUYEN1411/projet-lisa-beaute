import classNames from "classnames/bind";
import styles from "../../../components/ComponentsAdmin/AdminStyle.module.css";
import AdminBrandForm from "../../../components/ComponentsAdmin/AdminBrandForm";

const cx = classNames.bind(styles);

const AdminBrandFormPage = () => {
	return (
		<div className={cx("grid wide")}>
			<div className={cx("ad-title")}>
				<h1 className={cx("title")}>Admin marque</h1>
			</div>
			<section>
				<h2>La list de marque</h2>
				<AdminBrandForm />
			</section>
		</div>
	);
};

export default AdminBrandFormPage;
