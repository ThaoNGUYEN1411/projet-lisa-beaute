import { useContext, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
	faBars,
	faLocationDot,
	faUser,
	faUserCheck,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar";
import { SecurityContext } from "../../context/SecurityContextProvider";

// import { useState } from "react";

const cx = classNames.bind(styles);
const Header = () => {
	const { user, setUser } = useContext(SecurityContext);
	// const currentUser = false;
	const [isOpen, setIsopen] = useState(false);
	const handleMenuMobile = () => {
		setIsopen(!isOpen);
	};
	console.log("user", user);
	// apres log in setUserName = name client pour afficher
	// const [userName, setUserName] = useState([]);
	// setUserName("Thao Nguyen");

	return (
		<div>
			<a href="#" className={cx("text-header")}>
				Vous souhaitez recevoir des promotions ? Rejoignez-nous !
			</a>

			<header className={cx("wrapper")}>
				<div className={cx("inner")}>
					<Link to={"/"}>
						<img
							src="/logo/logo-lisa.png"
							alt="Lisa Beaute"
							className={cx("logo")}
						/>
					</Link>

					<div className={cx("menu-mobile-hide-search")}>
						<SearchBar />
					</div>

					<div className={cx("header-icons")}>
						<div className={cx("icon-magasin")}>
							<a href="#" className={cx("icon-magasin-link")}>
								<FontAwesomeIcon icon={faLocationDot} />
								<span className={cx("title-icon")}>Magasin</span>
							</a>
						</div>
						{user ? (
							<>
								<div className={cx("current-user")}>
									<a href="#" className={cx("icon-current-user")}>
										<FontAwesomeIcon icon={faUserCheck} />
										<span className={cx("title-icon")}>{user.lastName}</span>
									</a>
								</div>
							</>
						) : (
							<>
								<div className={cx("icon-account")}>
									<Link to={"/login"} className={cx("icon-account-link")}>
										<FontAwesomeIcon icon={faUser} />
										<span className={cx("title-icon")}>Mon Compte</span>
									</Link>
								</div>
							</>
						)}

						<div className={cx("mobile-menu")}>
							{/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a
								href="#"
								className={cx("mobile-menu-icon")}
								onClick={handleMenuMobile}
							>
								{isOpen ? (
									<FontAwesomeIcon icon={faXmark} />
								) : (
									<FontAwesomeIcon icon={faBars} />
								)}
							</a>
						</div>
					</div>

					<div className={cx("navbar")}>
						<Navbar isOpen={isOpen} />
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
