import { Link } from "react-router-dom";
// import classNames from "classnames/bind";
import styles from "../Header/Navbar/Navbar.module.css";
// import styles from "../../components/"
// /home/thaonguyen/workspace/projet-lisa-beaute/front/src/components/Header/Navbar/Navbar.module.css
// /home/thaonguyen/workspace/projet-lisa-beaute/front/src/components/ComponentsAdmin/NavbarAdmin.jsx
// const cx = classNames.bind(styles);

const NavbarAdmin = () => {
	return (
		<nav>
			<Link to={"/produits"}>Produits</Link>
			<Link to={"/categories"}>Catégories</Link>
			<Link to={"/marques"}>Marques</Link>
		</nav>
	);
};

export default NavbarAdmin;
