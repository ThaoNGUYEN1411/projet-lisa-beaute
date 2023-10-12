import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import styles from "../ProductsPage.module.css";
import { SecurityContext } from "../../context/SecurityContextProvider";
import AsideEspacePersoClient from "../../components/AsideEspacePersoClient/AsideEspacePersoClient";

// import AsideEspacePersoClient from "../../components/AsideEspacePersoClient/AsideEspacePersoClient";
// import { SecurityContext } from "../../context/SecurityContextProvider";
const cx = classNames.bind(styles);

const EspacePersoClientPage = () => {
	const { user, setUser } = useContext(SecurityContext);
	const [message, setMessage] = useState();

	useEffect(() => {
		if (window.sessionStorage.getItem("notice")) {
			setMessage(window.sessionStorage.getItem("notice"));
			window.sessionStorage.removeItem("notice");
			setTimeout(() => setMessage(null), 5000);
		}
	});
	return (
		<div className={cx("grid", "wide")}>
			<div className={cx("prod-title")}>
				<h1 className={cx("title")}>Mon compte</h1>
			</div>
			<div className={cx("grid", "wide", "row")}>
				<AsideEspacePersoClient />
				{user && (
					<section
						className={cx("product-wrapper", "col", "l-9", "m-9", "c-12")}
					>
						<div className={cx("profil")}>
							<p className={cx("message")}>{message}</p>
							<h3>Mon profil</h3>
							<p>
								{user.fristName} {user.lastName}
							</p>
							<p>{user.email}</p>
						</div>
					</section>
				)}
			</div>
		</div>
	);
};

export default EspacePersoClientPage;
