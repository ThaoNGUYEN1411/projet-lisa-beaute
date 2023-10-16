import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { v4 as uuid } from "uuid";

import styles from "../ComponentsAdmin/AdminStyle.module.css";
import Button from "../Button/Button";
import { deleteBrands, getAllBrands } from "../../services/allBrandsApi";
const cx = classNames.bind(styles);

const AdminListBrands = () => {
	const [brands, setBrands] = useState([]);
	const [forceUpdate, setForceUpdate] = useState(false);
	const [message, setMessage] = useState();

	useEffect(() => {
		getAllBrands().then((data) => {
			// console.log(data);
			setBrands(data);
		});
	}, [forceUpdate]);

	// récupérer la notification du sessionStorage
	useEffect(() => {
		// si un message existe en session
		if (window.sessionStorage.getItem("noticeAdminBrand")) {
			// stocker le message dans l'état
			setMessage(window.sessionStorage.getItem("noticeAdminBrand"));

			// supprimer le massage en session
			window.sessionStorage.removeItem("noticeAdminBrand");

			// faire disparaître le message après un délai en millisecondes
			setTimeout(() => setMessage(null), 5000);
		}
	});

	// supprimer un caterogy
	const handleClick = async (id) => {
		// console.log(id);
		const responseAPI = await deleteBrands(id);

		if (responseAPI.status === 200) {
			window.sessionStorage.setItem("noticeAdminBrand", "Marque supprimé");
		} else {
			window.sessionStorage.setItem("noticeAdminBrand", "Erreur");
		}

		setForceUpdate(!forceUpdate);
	};

	return (
		<>
			<div className={cx("admin-bloc", "text-center")}>
				<Button primary to={"/admin/marques/form"}>
					Ajouter un nouveau marque
				</Button>
			</div>
			<section>
				<h2>La list de marques</h2>
				{/* <AdminListBrands /> */}

				<p className={cx("message-succes")}>{message}</p>
				<table className={cx("table")}>
					<thead>
						<tr className={cx("tr")}>
							<td className={cx("td")}>id</td>
							<td className={cx("td")}>Nom</td>
							<td className={cx("td")}>Modifier</td>
							<td className={cx("td")}>Supprimer</td>
						</tr>
					</thead>
					<tbody>
						{brands.map((value) => (
							<tr className={cx("tr")} key={uuid()}>
								<td className={cx("td")}>{value.id}</td>
								<td className={cx("td")}>{`${value.name}`}</td>

								<td className={cx("td")}>
									<Link to={`/admin/marques/${value.id}/form`}>
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

export default AdminListBrands;
