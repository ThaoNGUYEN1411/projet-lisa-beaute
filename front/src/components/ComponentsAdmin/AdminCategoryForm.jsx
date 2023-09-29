// import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "../ComponentsAdmin/AdminStyle.module.css";
import { useEffect, useState } from "react";
import { createCategory } from "../../services/allCategoriesApi";
const cx = classNames.bind(styles);

const AdminCategoryForm = () => {
	const { id } = useParams();
	const [category, setCategory] = useState([]);

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
		const allPromises = Promise.allSettled([setCategory()]);

		allPromises.then((results) => {
			setClassrooms(results[0].value.data);
			console.log(results);
		});

		// préremplir le formulaire avec un élève existant
		prefillForm();
	}, []);
	// préremplir le formulaire avec un élève existant
	const prefillForm = async () => {
		if (id) {
			// console.log(id);
			const responseAPI = await getCategoryByID(id);
			const student = responseAPI.data;
			// console.log(student);
			reset({
				id: student.id,
				name: student.firstname,
			});
		}
	};
	useEffect(() => {
		const subscription = watch((observer) => console.log(observer));

		return () => subscription.unsubscribe();
	}, [watch]);

	const onSubmit = async (values) => {
		// console.log(values);
		const responseAPI = id ? console.log(id) : await createCategory(values);

		if (responseAPI.status === 200) {
			window.sessionStorage.setItem(
				"notice",
				id ? "Category updated" : "Category created",
			);
		} else {
			window.sessionStorage.setItem("notice", "Error");
		}
		navigate("/admin/categories");
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p>
					<label>Id : </label>
					<input
						className={cx("ad-input")}
						type="number"
						{...register("id", { required: "Id  est requis." })}
					/>
					<small className={cx("message-dange")}>{errors.id?.message}</small>
				</p>
				<p>
					<label>Nom de catégorie : </label>
					{/* utiliser les noms des colonnes sql pour le nom des champs */}
					<input
						className={cx("ad-input")}
						type="text"
						{...register("name", {
							required: "Le nom de la catégorie est requis.",
						})}
					/>
					{/* errors.<nom du champ défini dans register>.message */}
					<small className={cx("message-dange")}>{errors.name?.message}</small>
				</p>

				<p>
					{/* <input className={cx("ad-input")} type="hidden" {...register("id")} /> */}
					<input className={cx("ad-input")} type="submit" />
				</p>
			</form>
			<p>
				<Link to={"/admin/categories"} className={cx("back-btn")}>
					Back
				</Link>
			</p>
		</>
	);
};

export default AdminCategoryForm;
