import classNames from "classnames/bind";
import styles from "./ContactPage.module.css";

import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { postCreateUser } from "../services/userApi";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const CreateUserPage = () => {
	// const [infos, setInfos] = useState();
	const [message, setMessage] = useState();
	const navigate = useNavigate();

	const {
		handleSubmit,
		watch,
		register,
		formState: { isValid, isSubmitted, submitCount, errors },
		reset,
	} = useForm();

	const onSubmit = async (values) => {
		// console.log(values);

		const responseAPI = await postCreateUser(values);

		window.sessionStorage.setItem(
			"notice",
			"Merci! Votre compte a été créé avec succès",
		);
		navigate("/login");

		reset();
	};

	useEffect(() => {
		const subscription = watch((observer) => null);

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
					<div className={cx("row")}>
						<div className={cx("row", "name")}>
							<p className={cx("contact-info", "l-6", "m-6", "c-12")}>
								<label className={cx("label", "label-name", "label-lastName")}>
									Votre nom
								</label>
								<input
									className={cx("lastName")}
									type="text"
									placeholder="Nom"
									{...register("lastName", {
										required: "Votre nom est requis",
									})}
								/>
								<span className={cx("message-error")}>
									{errors.lastName?.message}
								</span>
							</p>
							<p className={cx("contact-info", "l-6", "m-6", "c-12")}>
								<label className={cx("label", "label-name")}>
									Votre prénom
								</label>
								<input
									className={cx("firstName")}
									type="text"
									placeholder="Prénom"
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
							<span className={cx("message-error")}>
								{errors.email?.message}
							</span>
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
							<span className={cx("message-error")}>
								{errors.password?.message}
							</span>
						</p>
					</div>

					<div className={cx("text-center", "margin-bloc")}>
						<Button primary>Créer mon compte</Button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default CreateUserPage;
