import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { v4 as uuid } from "uuid";

import styles from "./Navbar.module.css";
import WrapperPopper from "../../Popper/WrapperPopper";
import { getAllBrands } from "../../../services/allBrandsApi";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../../services/allCategoriesApi";

const cx = classNames.bind(styles);

const Navbar = ({ isOpen, setIsOpen }) => {
	const [allBrands, setAllBrands] = useState([]);
	const [allCategories, setAllCategories] = useState([]);

	useEffect(() => {
		getAllBrands().then((data) => {
			// console.log(data);
			setAllBrands(data);
		});
	}, []);

	useEffect(() => {
		getAllCategories().then((data) => {
			// console.log(data);
			setAllCategories(data);
		});
	}, []);

	// Fonction pour vérifier si l'écran est mobile
	const isMobile = () => {
		return window.innerWidth <= 740;
	};

	const handleCloseMenuMobile = (event) => {
		if (window.innerWidth <= 740) {
			setIsOpen(!isOpen);
		}
	};
	return (
		<nav
			className={cx("navbar", {
				"menu-mobile-open": isOpen,
				"menu-mobile-close": !isOpen,
			})}
		>
			<div className={cx("menu-item")}>
				<Tippy
					// visible
					interactive
					delay={[0, 500]}
					render={(attrs) => (
						<div
							tabIndex="-1"
							{...attrs}
							key={uuid()}
							className={cx("sub-menu", { "hide-mobile": isMobile() })}
						>
							{/* afficher le component popper ici */}
							<WrapperPopper>
								{/*les resultats 
							afficher ici */}
								<ul>
									{/* <li>a</li>
									<li>b</li>
									<li>c</li> */}

									{allCategories?.map((link) => (
										<li key={uuid()}>
											<Link
												to={`/produits/categorie/${link.name}`}
												className={cx("sub-menu-link")}
												key={uuid()}
											>
												{link.name}
											</Link>
										</li>
									))}
								</ul>
							</WrapperPopper>
						</div>
					)}
				>
					<Link
						to={"/produits"}
						className={cx("nav-item")}
						onClick={handleCloseMenuMobile}
					>
						Produits
					</Link>
				</Tippy>
			</div>
			<div className={cx({ "hide-mobile": isMobile() })}>
				<Tippy
					interactive
					delay={[0, 700]}
					render={(attrs) => (
						<div
							tabIndex="-1"
							{...attrs}
							key={uuid()}
							className={cx("sub-menu")}
						>
							{/* afficher le component popper ici */}
							<WrapperPopper>
								{/*les resultats 
							afficher ici */}
								<ul>
									{allBrands?.map((link) => (
										<li key={uuid()}>
											<Link
												to={`/produits/marques/${link.name}`}
												className={cx("sub-menu-link")}
												key={uuid()}
											>
												{link.name}
											</Link>
										</li>
									))}
									{/* <li>d</li>
									<li>e</li>
									<li>f</li> */}
								</ul>
							</WrapperPopper>
						</div>
					)}
				>
					<Link
						to={"/produits"}
						className={cx("nav-item", { "hide-mobile": isMobile() })}
					>
						Marques
					</Link>
				</Tippy>
			</div>

			{/* <Link to={"/blog"} className={cx("nav-item")}>
				Blog
			</Link> */}
			<Link
				to={"/apropos"}
				className={cx("nav-item")}
				onClick={handleCloseMenuMobile}
			>
				A propos
			</Link>
			<Link
				to={"/contact"}
				className={cx("nav-item")}
				onClick={handleCloseMenuMobile}
			>
				Contact
			</Link>
		</nav>
	);
};

export default Navbar;
