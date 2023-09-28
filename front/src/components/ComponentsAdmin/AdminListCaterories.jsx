import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	deleteCategory,
	getAllCategories,
} from "../../services/allCategoriesApi";
import classNames from "classnames/bind";
import styles from "../ComponentsAdmin/AdminStyle.module.css";
const cx = classNames.bind(styles);

const AdminListCaterories = () => {
	const [categories, setCategories] = useState([]);
	const [forceUpdate, setForceUpdate] = useState(false);
	const [message, setMessage] = useState();

	useEffect(() => {
		getAllCategories().then((data) => {
			console.log(data);
			setCategories(data);
		});
	}, [forceUpdate]);

	// récupérer la notification du sessionStorage
	useEffect(() => {
		// si un message existe en session
		if (window.sessionStorage.getItem("notice")) {
			// stocker le message dans l'état
			setMessage(window.sessionStorage.getItem("notice"));

			// supprimer le massage en session
			window.sessionStorage.removeItem("notice");

			// faire disparaître le message après un délai en millisecondes
			setTimeout(() => setMessage(null), 5000);
		}
	});
	// supprimer un caterogy
	const handleClick = async (id) => {
		console.log(id);
		const responseAPI = await deleteCategory(id);

		if (responseAPI.status === 200) {
			window.sessionStorage.setItem("notice", "Catégorie supprimé");
		} else {
			window.sessionStorage.setItem("notice", "Erreur");
		}

		setForceUpdate(!forceUpdate);
	};
	return (
		<>
			<p>{message}</p>
			<table className={cx("table")}>
				<thead>
					<tr className={cx("tr")}>
						<td className={cx("td")}>id</td>
						<td className={cx("td")}>Nom</td>
						<td className={cx("td")}>Modifier</td>
						<td className={cx("td")}>Supprimer</td>

						{/* <td> </td> */}
					</tr>
				</thead>
				<tbody>
					{categories.map((value) => (
						<tr className={cx("tr")} key={crypto.randomUUID()}>
							<td className={cx("td")}>{value.id}</td>
							<td className={cx("td")}>{`${value.name}`}</td>

							<td className={cx("td")}>
								<Link to={`/admin/categories/${value.id}/form`}>
									<FontAwesomeIcon
										icon={faPenToSquare}
										className={cx("ad-btn")}
									/>
								</Link>
							</td>
							<td className={cx("td")}>
								<Link
									onClick={() => {
										handleClick(value.id);
										console.log(value.id);
									}}
								>
									<FontAwesomeIcon icon={faTrashAlt} className={cx("ad-btn")} />
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default AdminListCaterories;
