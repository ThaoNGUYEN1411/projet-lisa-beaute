import classNames from "classnames/bind";
import styles from "../../../components/ComponentsAdmin/AdminStyle.module.css";
import AdminListMessages from "../../../components/ComponentsAdmin/AdminListMessages";

const cx = classNames.bind(styles);

const AdminMessagesPage = () => {
	return (
		<div className={cx("grid wide")}>
			<div className={cx("ad-title")}>
				<h1 className={cx("title")}>Administration de messages</h1>
			</div>
			<AdminListMessages />
		</div>
	);
};

export default AdminMessagesPage;
