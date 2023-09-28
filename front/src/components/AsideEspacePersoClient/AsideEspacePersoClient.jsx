import classNames from "classnames/bind";
import styles from "../../pages/ProductsPage.module.css";
// import Button from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import { Link } from "react-router-dom";
import Button from "../Button/Button";
const cx = classNames.bind(styles);

const AsideEspacePersoClient = () => {
	return (
		<aside className={cx("container-filter", "col", "l-3", "m-3", "c-12")}>
			<ul className={cx("nav-aside")}>
				<li className={cx("li-nav")}>
					<Link to={"/EspacePersoClient"}>
						<span className={cx("icon-aside")}>
							<FontAwesomeIcon icon={faUser} />
						</span>
						Mes informations personnelles
					</Link>
				</li>
				<li className={cx("li-nav")}>
					<Link to={"/EspacePersoClient/Wishlist"}>
						<span className={cx("icon-aside")}>
							<FontAwesomeIcon icon={faHeart} />
						</span>
						Ma Wishlist
					</Link>
				</li>
			</ul>
			<Button primary to={"/logout"}>
				ME DECONNECTER
			</Button>
		</aside>
	);
};

export default AsideEspacePersoClient;
