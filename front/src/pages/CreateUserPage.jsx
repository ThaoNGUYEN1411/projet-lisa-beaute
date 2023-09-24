import classNames from "classnames/bind";
import styles from "./ContactPage.module.css";

import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const CreateUserPage = () => {
	// const [infos, setInfos] = useState();

	const {
		handleSubmit,
		watch,
		register,
		formState: { isValid, isSubmitted, submitCount, errors },
	} = useForm();

	const onSubmit = async (infosUser) => {
		const isSubmitted = true;
		console.log(infosUser);
		try {
			const response = await fetch("http://localhost:3000/user/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(infosUser),
			});
			if (response.ok) {
				console.log("Données enregistrées avec succès !");
			} else {
				// La requête a échoué
				console.error("Échec de l'enregistrement des données.");
			}
		} catch (error) {
			console.error("Erreur lors de la requête :", error);
		}
	};

	useEffect(() => {
		const subscription = watch((observer) => console.log(observer));

		return () => subscription.unsubscribe();
	}, [watch]);

	return (
		<div className={cx("grid", "wide", "wrapper", "text-center")}>
			<h1 className={cx("title-block", "margin-bloc")}>
				Nouveau sur lisabeaute ?
			</h1>

			<section className={cx("contact-form")}>
				<h2 className={cx("text-center", "title-form")}>CRÉEZ VOTRE COMPTE</h2>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={cx("contact-bloc", "row")}>
						<div className={cx("row", "name")}>
							<p className={cx("contact-info", "l-6", "m-6", "c-12")}>
								<label className={cx("label", "label-name")}>Votre nom</label>
								<input
									className={cx("lastName")}
									type="text"
									placeholder="Votre nom"
									{...register("lastName", {
										required: "Votre nom est requis",
									})}
								/>
								<span>{errors.lastName?.message}</span>
							</p>
							<p className={cx("contact-info", "l-6", "m-6", "c-12")}>
								<label className={cx("label", "label-name")}>
									Votre prénom
								</label>
								<input
									className={cx("firstName")}
									type="text"
									placeholder="Votre prénom"
									{...register("firstName")}
								/>
							</p>
						</div>
						<p className={cx("contact-info", "l-12", "m-12", "c-12")}>
							<label className={cx("label")}>Votre e-mail</label>
							<input
								className={cx("contact-input")}
								type="email"
								placeholder="Email"
								{...register("email", {
									required: "Email est requis",
								})}
							/>
							<span className={cx("errors")}>{errors.email?.message}</span>
						</p>
						<p className={cx("contact-info", "l-12", "m-12", "c-12")}>
							<label className={cx("label")}>Votre mot de passe : </label>
							<input
								className={cx("contact-input")}
								type="Password"
								placeholder="Password"
								{...register("password", {
									required: "Mot de passe est requis",
								})}
							/>
							<span className={cx("errors")}>{errors.password?.message}</span>
						</p>
					</div>
					{isSubmitted && (
						<p className={cx("success-message")}>
							<FontAwesomeIcon icon={faCircleCheck} />
							Merci! Votre compte a été créé avec succès
						</p>
					)}
					<div className={cx("text-center", "margin-bloc")}>
						<Button primary>Créer mon compte</Button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default CreateUserPage;