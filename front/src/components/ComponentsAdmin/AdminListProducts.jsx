import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "../ComponentsAdmin/AdminStyle.module.css";
import Button from "../Button/Button";
import { v4 as uuid } from "uuid";
import { deleteProduct, getAllproducts } from "../../services/productsApi";
const VITE_API_URL = import.meta.env.VITE_API_URL;

const cx = classNames.bind(styles);

const AdminListProducts = () => {
	const [products, setProducts] = useState([]);
	const [forceUpdate, setForceUpdate] = useState(false);
	const [message, setMessage] = useState();

	useEffect(() => {
		//recupérer des données de l'API
		getAllproducts("").then((data) => {
			setProducts(data.data);
		});
	}, [forceUpdate]);

	// récupérer la notification du sessionStorage
	useEffect(() => {
		// si un message existe en session
		if (window.sessionStorage.getItem("noticeAdProduct")) {
			// stocker le message dans l'état
			setMessage(window.sessionStorage.getItem("noticeAdProduct"));

			// supprimer le massage en session
			window.sessionStorage.removeItem("noticeAdProduct");

			// faire disparaître le message après un délai en millisecondes
			setTimeout(() => setMessage(null), 5000);
		}
	});

	// supprimer un produit
	const handleDeleteProduct = async (id) => {
		console.log(id);
		const responseAPI = await deleteProduct(id);

		if (responseAPI.status === 200) {
			window.sessionStorage.setItem("noticeAdProduct", "Produit supprimé");
		} else {
			window.sessionStorage.setItem("noticeAdProduct", "Erreur");
		}

		setForceUpdate(!forceUpdate);
	};

	return (
		<>
			<div className={cx("admin-bloc", "text-center")}>
				<Button primary to={"/admin/produits/form"}>
					Ajouter un nouveau produit
				</Button>
			</div>
			<section>
				<h2>La list de produits</h2>
				{/* <AdminListCategories /> */}
				<p className={cx("message-succes")}>{message}</p>
				<table className={cx("table")}>
					<thead>
						<tr className={cx("tr")}>
							<td className={cx("td")}>Id</td>
							<td className={cx("td")}>Nom</td>
							<td className={cx("td")}>Prix (€)</td>
							<td className={cx("td")}>Description</td>
							<td className={cx("td")}>Usage_tips</td>
							<td className={cx("td")}>Ingredients</td>
							<td className={cx("td")}>Image</td>
							<td className={cx("td")}>Brand_id</td>
							{/* <td className={cx("td")}>Brand_name</td> */}
							<td className={cx("td")}>Action</td>
							{/* <td className={cx("td")}>Supprimer</td> */}
						</tr>
					</thead>
					<tbody>
						{products.map((value) => (
							<tr className={cx("tr")} key={uuid()}>
								<td className={cx("td")}>{value.id}</td>
								<td className={cx("td")}>{value.name}</td>
								<td className={cx("td")}>{value.price}</td>
								<td className={cx("td")}>
									<p className={cx("td-desc")}>{value.description}</p>
								</td>
								<td className={cx("td")}>
									<p className={cx("td-usage")}>{value.usage_tips}</p>
								</td>
								<td className={cx("td")}>
									<p className={cx("td-ingredients")}>{value.ingredients}</p>
								</td>
								<td className={cx("td")}>{value.image}</td>
								<td className={cx("td")}>{value.brand_id}</td>
								{/* <td className={cx("td")}>{value.brand_name}</td> */}

								<td className={cx("td")}>
									<Link to={`/admin/produits/${value.id}/form`}>
										<FontAwesomeIcon
											icon={faPenToSquare}
											className={cx("ad-btn")}
										/>
									</Link>

									<Link
										onClick={() => {
											handleDeleteProduct(value.id);
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

export default AdminListProducts;
