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

const Navbar = ({ isOpen }) => {
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
	return (
		<nav
			className={cx("navbar", {
				"menu-mobile-open": isOpen,
				"menu-mobile-close": !isOpen,
			})}
		>
			<div>
				<Tippy
					// visible
					interactive
					delay={[0, 500]}
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
					<Link to={"/produits"} className={cx("nav-item")}>
						Produits
					</Link>
				</Tippy>
			</div>
			<div>
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
								</ul>
							</WrapperPopper>
						</div>
					)}
				>
					<Link to={"/produits"} className={cx("nav-item")}>
						Marques
					</Link>
				</Tippy>
			</div>

			<Link to={"/blog"} className={cx("nav-item")}>
				Blog
			</Link>
			<Link to={"/apropos"} className={cx("nav-item")}>
				A propos
			</Link>
			<Link to={"/contact"} className={cx("nav-item")}>
				Contact
			</Link>
		</nav>
	);
};

export default Navbar;
