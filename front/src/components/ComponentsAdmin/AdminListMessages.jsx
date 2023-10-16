import {
	faCirclePlay,
	faEnvelope,
	faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "../ComponentsAdmin/AdminStyle.module.css";
// import Button from "../Button/Button";
import { deleteMessage, getAllMessages } from "../../services/messageApi";
import { v4 as uuid } from "uuid";

const cx = classNames.bind(styles);

const AdminListMessages = () => {
	const [listMessages, setListMessages] = useState([]);
	const [forceUpdate, setForceUpdate] = useState(false);
	const [message, setMessage] = useState();

	useEffect(() => {
		getAllMessages().then((data) => {
			// console.log(data.data);
			setListMessages(data.data);
		});
	}, [forceUpdate]);
	// console.log("listMessages", listMessages);
	// récupérer la notification du sessionStorage
	useEffect(() => {
		// si un message existe en session
		if (window.sessionStorage.getItem("noticeMessage")) {
			// stocker le message dans l'état
			setMessage(window.sessionStorage.getItem("noticeMessage"));

			// supprimer le massage en session
			window.sessionStorage.removeItem("noticeMessage");

			// faire disparaître le message après un délai en millisecondes
			setTimeout(() => setMessage(null), 5000);
		}
	});

	// supprimer un caterogy
	const handleClick = async (id) => {
		// console.log(id);
		const responseAPI = await deleteMessage(id);

		if (responseAPI.status === 200) {
			window.sessionStorage.setItem("noticeMessage", "Message supprimé");
		} else {
			window.sessionStorage.setItem("noticeMessage", "Erreur");
		}

		setForceUpdate(!forceUpdate);
	};

	return (
		<>
			{/* <div className={cx("admin-bloc", "text-center")}>
				<Button primary to={"/admin/categories/form"}>
					Ajouter une nouvelle catégorie
				</Button>
			</div> */}
			<section>
				<h2>La list de catégories</h2>
				<p className={cx("message-succes")}>{message}</p>
				<table className={cx("table")}>
					<thead>
						<tr className={cx("tr")}>
							<td className={cx("td")}>id</td>
							<td className={cx("td")}>Sujet</td>
							<td className={cx("td")}>LastName</td>
							<td className={cx("td")}>FirstName</td>
							<td className={cx("td")}>Email</td>
							<td className={cx("td")}>Contenu de message</td>
							<td className={cx("td")}>Réponse</td>
							<td className={cx("td")}>Supprimer</td>
						</tr>
					</thead>
					<tbody>
						{listMessages?.map((value) => (
							<tr className={cx("tr")} key={uuid()}>
								<td className={cx("td")}>{value.id}</td>
								<td className={cx("td")}>{`${value.sujet}`}</td>
								<td className={cx("td")}>{`${value.lastName}`}</td>
								<td className={cx("td")}>{`${value.firstName}`}</td>
								<td className={cx("td")}>{`${value.email}`}</td>
								<td className={cx("td")}>{`${value.messageContent}`}</td>

								<td className={cx("td")}>
									<Link to={`/admin/messages/${value.id}/form`}>
										<FontAwesomeIcon
											icon={faEnvelope}
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

export default AdminListMessages;
