// import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import styles from "../ComponentsAdmin/AdminStyle.module.css";
import {
	createBrands,
	getBrandsById,
	updateBrands,
} from "../../services/allBrandsApi";

const cx = classNames.bind(styles);

const AdminBrandForm = () => {
	const { id } = useParams();
	const [brand, setBrand] = useState([]);

	const {
		formState: { errors },
		handleSubmit,
		register,
		watch,
		reset,
	} = useForm();

	// importer le hook de redirection
	const navigate = useNavigate();

	useEffect(() => {
		const allPromises = Promise.allSettled([setBrand()]);

		allPromises.then((results) => {
			setBrand(results[0].data);
			// console.log(results);
		});

		// préremplir le formulaire avec un élève existant
		prefillForm();
	}, []);

	// préremplir le formulaire avec un élève existant
	const prefillForm = async () => {
		if (id) {
			// console.log(id);
			const responseAPI = await getBrandsById(id);
			const brand = responseAPI.data;
			reset({
				id: brand.id,
				name: brand.name,
			});
		}
	};

	useEffect(() => {
		// const subscription = watch((observer) => console.log(observer));
		const subscription = watch((observer) => null);

		return () => subscription.unsubscribe();
	}, [watch]);

	const onSubmit = async (values) => {
		// console.log(values);
		const responseAPI = id
			? await updateBrands(values)
			: await createBrands(values);

		if (responseAPI.status === 200) {
			window.sessionStorage.setItem(
				"noticeAdminBrand",
				id ? "Marque modifiée" : "Nouvelle marque créée",
			);
		} else {
			window.sessionStorage.setItem("noticeAdminBrand", "Error");
		}
		navigate("/admin/marques");
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* <p>
					<label>Id : </label>
					<input
						className={cx("ad-input")}
						type="number"
						{...register("id", { required: "Id  est requis." })}
					/>
					<small className={cx("message-error")}>{errors.id?.message}</small>
				</p> */}
				<p>
					<label>Nom de catégorie : </label>
					{/* utiliser les noms des colonnes sql pour le nom des champs */}
					<input
						className={cx("ad-input")}
						type="text"
						{...register("name", {
							required: "Le nom de la marques est requis.",
						})}
					/>
					{/* errors.<nom du champ défini dans register>.message */}
					<small className={cx("message-error")}>{errors.name?.message}</small>
				</p>

				<p className={cx("btn-envoyer")}>
					{/* <input className={cx("ad-input")} type="hidden" {...register("id")} /> */}
					<input className={cx("ad-input")} type="submit" />
				</p>
			</form>
			<p className={cx("btn-bloc", "text-centre")}>
				<Link to={"/admin/marques"} className={cx("back-btn")}>
					Back
				</Link>
			</p>
		</>
	);
};

export default AdminBrandForm;
