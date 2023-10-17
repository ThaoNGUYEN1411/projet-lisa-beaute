import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames/bind";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

import styles from "../ComponentsAdmin/AdminStyle.module.css";
import { getAllBrands } from "../../services/allBrandsApi.js";
import {
	createProduct,
	getProduct,
	getProductById,
	updateProduct,
} from "../../services/productsApi";

const cx = classNames.bind(styles);

const AdminProductForm = () => {
	// récupérer l'identifiant de l'produit à modifier
	const { id } = useParams();

	const [brands, setBrands] = useState([]);
	// importer le hook de redirection
	const navigate = useNavigate();

	const {
		formState: { errors },
		handleSubmit,
		register,
		watch,
		reset,
	} = useForm();

	useEffect(() => {
		const allPromises = Promise.allSettled([getAllBrands()]);

		allPromises.then((results) => {
			setBrands(results[0].value);
		});

		// préremplir le formulaire avec un produit existant
		prefillForm();
	}, []);

	// préremplir le formulaire avec un produit existant
	const prefillForm = async () => {
		if (id) {
			const responseAPI = await getProductById(id);
			// console.log(responseAPI);
			const product = responseAPI;
			reset({
				id: product.id,
				name: product.name,
				price: product.price,
				description: product.description,
				usage_tips: product.usage_tips,
				ingredients: product.ingredients,
				image: product.image,
				brand_id: product.brand_id,
			});
		}
	};

	const onSubmit = async (values) => {
		const formData = new FormData();
		formData.append("id", values.id);
		formData.append("name", values.name);
		formData.append("price", values.price);
		formData.append("description", values.description);
		formData.append("usage_tips", values.usage_tips);
		formData.append("ingredients", values.ingredients);
		formData.append("image", values.image[0]);
		formData.append("brand_id", values.brand_id);

		// appel de la route d'API
		// await updateStudent(values)
		// await createStudent(values);
		const responseAPI = id
			? await updateProduct(formData)
			: await createProduct(formData);

		if (responseAPI.status === 200) {
			window.sessionStorage.setItem(
				"noticeAdProduct",
				id ? "Produit modifié" : "Nouveau produit ajouté",
			);
		} else {
			window.sessionStorage.setItem("noticeAdProduct", "Error");
		}
		navigate("/admin/produits");
	};

	useEffect(() => {
		// const observer = watch((values) => console.log(values));
		const observer = watch((values) => null);

		return () => observer.unsubscribe();
	}, [watch]);

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				encType="multipart/form-data"
				className={cx("wp-form")}
			>
				<p className={cx("input-product")}>
					<label>Nom : </label>
					{/* utiliser les noms des colonnes sql pour le nom des champs */}
					<input
						className={cx("ad-input-pd")}
						type="text"
						{...register("name", { required: "Nom de produit est requis" })}
					/>
					{/* errors.<nom du champ défini dans register>.message */}
					<small className={cx("message-error")}>{errors.name?.message}</small>
				</p>
				<p className={cx("input-product")}>
					<label>Prix : </label>
					{/* utiliser les noms des colonnes sql pour le nom des champs */}
					<input
						className={cx("ad-input-pd")}
						type="text"
						{...register("price", { required: "Prix est requis" })}
					/>
					{/* errors.<nom du champ défini dans register>.message */}
					<small className={cx("message-error")}>{errors.price?.message}</small>
				</p>
				<p className={cx("input-product")}>
					<label>Description : </label>
					{/* utiliser les noms des colonnes sql pour le nom des champs */}
					<textarea
						className={cx("ad-input-pd")}
						type="text"
						{...register("description", { required: "Description est requis" })}
					/>
					{/* errors.<nom du champ défini dans register>.message */}
					<small className={cx("message-error")}>
						{errors.description?.message}
					</small>
				</p>
				<p className={cx("input-product")}>
					<label>Usage_tips : </label>
					{/* utiliser les noms des colonnes sql pour le nom des champs */}
					<textarea
						className={cx("ad-input-pd")}
						type="text"
						{...register("usage_tips", { required: "Usage_tips est requis" })}
					/>
					{/* errors.<nom du champ défini dans register>.message */}
					<small className={cx("message-error")}>
						{errors.usage_tip?.message}
					</small>
				</p>
				<p className={cx("input-product")}>
					<label>Ingredients : </label>
					{/* utiliser les noms des colonnes sql pour le nom des champs */}
					<textarea
						className={cx("ad-input-pd")}
						type="text"
						{...register("ingredients", { required: "Ingredients est requis" })}
					/>
					{/* errors.<nom du champ défini dans register>.message */}
					<small className={cx("message-error")}>
						{errors.ingredients?.message}
					</small>
				</p>
				<p className={cx("input-product")}>
					<label>Image : </label>
					{/* le champ image est obligatoire à la création mais optionnel à la modification */}
					<input
						className={cx("ad-input-pd")}
						type="file"
						{...register("image", id ? {} : { required: "Image est requis" })}
					/>
					{/* errors.<nom du champ défini dans register>.message */}
					<small className={cx("message-error")}>{errors.image?.message}</small>
				</p>

				<p className={cx("input-product")}>
					<label>brand : </label>

					<select
						className={cx("ad-input-pd")}
						{...register("brand_id", { required: "Marque est requis" })}
						value={watch().brand_id}
					>
						<option value=""> </option>
						{brands.map((el) => (
							<option key={uuid()} value={el.id}>
								{el.name}
							</option>
						))}
					</select>

					{/* errors.<nom du champ défini dans register>.message */}
					<small className={cx("message-error")}>
						{errors.brand_id?.message}
					</small>
				</p>
				<p className={cx("input-product", "btn-envoyer")}>
					<input type="hidden" {...register("id")} />
					<input type="submit" className={cx("ad-input")} />
				</p>
			</form>
			<p className={cx("input-product", "text-centre")}>
				<Link to={"/admin/produits"} className={cx("back-btn")}>
					Back
				</Link>
			</p>
		</>
	);
};

export default AdminProductForm;
