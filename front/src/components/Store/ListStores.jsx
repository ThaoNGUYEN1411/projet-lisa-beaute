import classNames from "classnames/bind";
import styles from "../../pages/StorePage.module.css";
import { useContext } from "react";
import { v4 as uuid } from "uuid";

import { StoreContext } from "../../context/StoreContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAddressBook,
	faChessBishop,
	faCircleUser,
	faHeart,
	faStopCircle,
	faUser,
} from "@fortawesome/free-regular-svg-icons";
const cx = classNames.bind(styles);

const ListStores = () => {
	const { coords, setCoords } = useContext(StoreContext);
	const storesData = [
		{
			name: "Montreuil",
			adresse: "14 Rue de la Beaune, 93100 Montreuil, France",
			tel: "08 68 68 68 86",
			coords: { lat: 48.8618309, lng: 2.4359251 },
		},
		{
			name: "Westfield forum",
			adresse: "Westfield forum des halles 75001 Paris",
			tel: "06 68 68 68 86",
			coords: { lat: 48.861878, lng: 2.3471384 },
		},
		{
			name: "Aulnay-sous-Bois",
			adresse: "1 Rue Auguste Renoir, 93600 Aulnay-sous-Bois, France",
			tel: "06 68 68 68 68",
			coords: { lat: 48.9526953, lng: 2.4902234 },
		},
	];
	const handleClick = (value) => {
		setCoords(value.coords);
		// console.log(value.coords);
	};
	return (
		<section className={cx("list-store")}>
			{/* <h2>Trouver le magasin le plus proche</h2> */}
			{storesData.map((value) => (
				// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<article key={uuid()} onClick={() => handleClick(value)}>
					<h4 className={cx("name-store")}>
						<span className={cx("icon-adress")}>
							<FontAwesomeIcon icon={faAddressBook} />
						</span>
						{value.name}
					</h4>
					<p>{value.adresse}</p>
					<p>{value.tel}</p>
					<hr className={cx("hr")} />
				</article>
			))}
		</section>
	);
};

export default ListStores;
