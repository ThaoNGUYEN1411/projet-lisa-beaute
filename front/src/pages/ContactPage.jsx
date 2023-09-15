import classNames from "classnames/bind";
import styles from "./ContactPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAddressBook,
	faChevronRight,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import { useEffect } from "react";

const cx = classNames.bind(styles);

const ContactPage = () => {
	const {
		handleSubmit,
		watch,
		register,
		formState: { isValid, isSubmitted, submitCount, errors },
	} = useForm();
	const onSubmit = (values) => {
		console.log(values);
	};

	useEffect(() => {
		const subscription = watch((observer) => console.log(observer));

		return () => subscription.unsubscribe();
	}, [watch]);

	return (
		<div className={cx("grid", "wide", "wrapper")}>
			<section className={cx("margin-bloc")}>
				<h1 className={cx("title-block")}>Nous contacter</h1>
				<div className={cx("contact", "row")}>
					<div
						className={cx("contact-info", "l-4", "m-4", "c-12", "text-center")}
					>
						<span className={cx("contact-icon")}>
							<FontAwesomeIcon icon={faAddressBook} />
						</span>
						<h3>Adresse</h3>
						<p>55 rue de Vincennes, 93100 Montreuil</p>
					</div>
					<div
						className={cx("contact-info", "l-4", "m-4", "c-12", "text-center")}
					>
						<span className={cx("contact-icon")}>
							<FontAwesomeIcon icon={faPhone} />
						</span>
						<h3>Service client</h3>
						<p>1900 223 8899</p>
					</div>
					<div
						className={cx("contact-info", "l-4", "m-4", "c-12", "text-center")}
					>
						<span className={cx("contact-icon")}>
							<FontAwesomeIcon icon={faEnvelope} />
						</span>
						<h3>Email</h3>
						<p>lisabeaute@gmail.com</p>
					</div>
				</div>
			</section>
			<section className={cx("contact-form")}>
				<h2 className={cx("text-center", "title-form")}>
					Envoyez nous un message
				</h2>

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
						<div className={cx("row", "name")}>
							<p className={cx("contact-info", "l-6", "m-6", "c-12")}>
								<label className={cx("label", "label-name")}>Votre nom</label>
								<input
									className={cx("lastname")}
									type="text"
									placeholder="Votre nom"
									{...register("lastname", {
										required: "Votre nom est requis",
									})}
								/>
								<span>{errors.lastname?.message}</span>
							</p>
							<p className={cx("contact-info", "l-6", "m-6", "c-12")}>
								<label className={cx("label", "label-name")}>
									Votre prénom
								</label>
								<input
									className={cx("firstname")}
									type="text"
									placeholder="Votre prénom"
									{...register("firstname")}
								/>
							</p>
						</div>
						<p className={cx("contact-info", "l-12", "m-12", "c-12")}>
							<label className={cx("label")}>Votre e-mail</label>
							<input
								className={cx("contact-input")}
								type="email"
								placeholder="Email est requis"
								{...register("email", {
									required: "Email est requis",
								})}
							/>
							<span>{errors.email?.message}</span>
						</p>
						<p className={cx("contact-info", "l-12", "m-12", "c-12")}>
							<label className={cx("label")}>Votre message : </label>
							<textarea
								{...register("message", { required: "Un message est requis" })}
								className={cx("contact-input")}
							/>
							<span>{errors.message?.message}</span>
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
		</div>
	);
};

export default ContactPage;
