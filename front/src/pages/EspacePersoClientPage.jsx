import classNames from "classnames/bind";
// import styles from "./EspacePersoClientPage.module.css";
import styles from "./ProductsPage.module.css";

import AsideEspacePersoClient from "../components/AsideEspacePersoClient/AsideEspacePersoClient";
import { useContext } from "react";
import { SecurityContext } from "../context/SecurityContextProvider";
const cx = classNames.bind(styles);

const EspacePersoClientPage = () => {
	const { user, setUser } = useContext(SecurityContext);
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
