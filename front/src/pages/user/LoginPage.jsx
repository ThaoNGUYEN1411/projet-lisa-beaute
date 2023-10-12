import classNames from "classnames/bind";
import styles from "../../components/ContactComponents/ContactComponent.module.css";
import Login from "../../components/User/Login";
import LinkCreateUser from "../../components/User/LinkCreateUser";

const cx = classNames.bind(styles);

const LoginPage = () => {
	return (
		<div className={cx("grid", "wide", "connect-form", "row", "margin-bloc")}>
			<Login />
			<LinkCreateUser />
		</div>
	);
};

export default LoginPage;
