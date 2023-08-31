import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import styles from "./Navbar.module.css";
import WrapperPopper from "../../Popper/WrapperPopper";

const cx = classNames.bind(styles);

const Navbar = ({ isOpen }) => {
	return (
		<nav
			className={cx("navbar", {
				"menu-mobile-open": isOpen,
				"menu-mobile-close": !isOpen,
			})}
		>
			<div>
				<Tippy
					interactive
					delay={[0, 700]}
					render={(attrs) => (
						<div
							tabIndex="-1"
							{...attrs}
							key={crypto.randomUUID()}
							className={cx("sub-menu")}
						>
							{/* afficher le component popper ici */}
							<WrapperPopper>
								{/*les resultats 
							afficher ici */}
								<ul>
									<li>
										<Link
											to={"/produits/parfum"}
											className={cx("sub-menu-link")}
										>
											Parfum
										</Link>
									</li>
									<li>
										<Link
											to={"/produits/maquillage"}
											className={cx("sub-menu-link")}
										>
											Maquillage
										</Link>
									</li>
									<li>
										<Link to={"/produits/soin"} className={cx("sub-menu-link")}>
											Soin
										</Link>
									</li>
									<li>
										<Link
											to={"/produits/cheveux"}
											className={cx("sub-menu-link")}
										>
											Cheveux
										</Link>
									</li>
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
							key={crypto.randomUUID()}
							className={cx("sub-menu")}
						>
							{/* afficher le component popper ici */}
							<WrapperPopper>
								{/*les resultats 
							afficher ici */}
								<ul>
									<li>
										<Link to={"/produits"} className={cx("sub-menu-link")}>
											Chanel
										</Link>
									</li>
									<li>
										<Link to={"/produits"} className={cx("sub-menu-link")}>
											Dior
										</Link>
									</li>
									<li>
										<Link to={"/produits"} className={cx("sub-menu-link")}>
											Lancome
										</Link>
									</li>
									<li>
										<Link to={"/produits"} className={cx("sub-menu-link")}>
											Yves Rocher
										</Link>
									</li>
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
