import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import styles from "../ContactComponents/ContactComponent.module.css";
import Button from "../Button/Button";
// import { createNewMessage } from "../services/messageApi";
import { createNewMessage } from "../../services/messageApi";
const cx = classNames.bind(styles);

const ContactComponentForm = () => {
	const [infosMessage, setInfosMessage] = useState();
	const [message, setMessage] = useState();
	const navigate = useNavigate();
	// const refForm = useRef();
	const {
		handleSubmit,
		watch,
		register,
		formState: { isValid, isSubmitted, submitCount, errors },
		reset,
	} = useForm();

	const onSubmit = async (info) => {
		// console.log(info);
		const response = await createNewMessage(info);

		if (response.status === 200) {
			window.sessionStorage.setItem("notice", "Votre message a été envoyé");
		} else {
			window.sessionStorage.setItem("notice", "Error");
		}
		navigate("/contact");
		reset();
	};

	useEffect(() => {
		if (window.sessionStorage.getItem("notice")) {
			setMessage(window.sessionStorage.getItem("notice"));
		}
	}, []);

	useEffect(() => {
		// const subscription = watch((observer) => console.log(observer));
		const subscription = watch((observer) => null);

		return () => subscription.unsubscribe();
	}, [watch]);

	return (
		<section className={cx("contact-form")}>
			<h2 className={cx("text-center", "title-form")}>
				Envoyez nous un message
			</h2>
			<p>{message}</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={cx("contact-bloc", "row")}>
					<p className={cx("contact-info", "l-12", "m-12", "c-12")}>
						<label className={cx("label")}>Votre sujet</label>
						<select
							{...register("sujet", { required: "Un message est requis" })}
							className={cx("contact-input")}
						>
							<option value="Choisissez un sujet">Choisissez un sujet</option>
							<option value="Suggérer une marque">Suggérer une marque</option>
							<option value="Publicité">Publicité</option>
							<option value="Signaler un problème de connexion">
								Signaler un problème de connexion
							</option>
							<option value="Signaler un problème d'inscription">
								Signaler un problème d'inscription
							</option>
							<option value="Signaler un contenu">Signaler un contenu</option>
							<option value="Suggérer une amélioration">
								Suggérer une amélioration
							</option>
							<option value="Autre">Autre</option>
						</select>
						{errors.sujet && (
							<span className="error-message">{errors.sujet.message}</span>
						)}
					</p>
					<div className={cx("row", "contact-name", "bloc-name")}>
						<p className={cx("contact-info", "l-6", "m-6", "c-12")}>
							<label className={cx("label", "label-name", "ct-label-lastName")}>
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
							<span>{errors.lastName?.message}</span>
						</p>
						<p className={cx("contact-info", "l-6", "m-6", "c-12")}>
							<label
								className={cx("label", "label-name", "ct-label-firstName")}
							>
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
						<span>{errors.email?.message}</span>
					</p>
					<p className={cx("contact-info", "l-12", "m-12", "c-12")}>
						<label className={cx("label")}>Votre message : </label>
						<textarea
							{...register("messageContent", {
								required: "Un message est requis",
							})}
							className={cx("contact-input")}
						/>
						<span>{errors.messageContent?.message}</span>
					</p>
				</div>
				<div className={cx("text-center")}>
					<Button primary>
						Envoyer
						<span>
							<FontAwesomeIcon icon={faChevronRight} />
						</span>
					</Button>
				</div>
			</form>
		</section>
	);
};

export default ContactComponentForm;
