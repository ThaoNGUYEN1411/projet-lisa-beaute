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
import Button from "../Button/Button";
import { v4 as uuid } from "uuid";

const cx = classNames.bind(styles);

const AdminListCategories = () => {
	const [categories, setCategories] = useState([]);
	const [forceUpdate, setForceUpdate] = useState(false);
	const [message, setMessage] = useState();

	useEffect(() => {
		getAllCategories().then((data) => {
			// console.log(data);
			setCategories(data);
		});
	}, [forceUpdate]);

	// récupérer la notification du sessionStorage
	useEffect(() => {
		// si un message existe en session
		if (window.sessionStorage.getItem("noticeCat")) {
			// stocker le message dans l'état
			setMessage(window.sessionStorage.getItem("noticeCat"));

			// supprimer le massage en session
			window.sessionStorage.removeItem("noticeCat");

			// faire disparaître le message après un délai en millisecondes
			setTimeout(() => setMessage(null), 5000);
		}
	});

	// supprimer un caterogy
	const handleClick = async (id) => {
		// console.log(id);
		const responseAPI = await deleteCategory(id);

		if (responseAPI.status === 200) {
			window.sessionStorage.setItem("noticeCat", "Catégorie supprimé");
		} else {
			window.sessionStorage.setItem("noticeCat", "Erreur");
		}

		setForceUpdate(!forceUpdate);
	};

	return (
		<>
			<div className={cx("admin-bloc", "text-center")}>
				<Button primary to={"/admin/categories/form"}>
					Ajouter une nouvelle catégorie
				</Button>
			</div>
			<section>
				<h2>La list de catégories</h2>
				{/* <AdminListCategories /> */}

				<p className={cx("message-succes")}>{message}</p>
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
							<tr className={cx("tr")} key={uuid()}>
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
											// console.log(value.id);
										}}
									>
										<FontAwesomeIcon
											icon={faTrashAlt}
											className={cx("ad-btn")}
										/>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</>
	);
};

export default AdminListCategories;
