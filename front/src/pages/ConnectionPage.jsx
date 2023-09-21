import classNames from "classnames/bind";
import styles from "./ContactPage.module.css";

import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

const ConnectionPage = () => {
	const [infosMessage, setInfosMessage] = useState();

	const {
		handleSubmit,
		watch,
		register,
		formState: { isValid, isSubmitted, submitCount, errors },
	} = useForm();

	const onSubmit = (info) => {
		console.log(info);
	};

	useEffect(() => {
		const subscription = watch((observer) => console.log(observer));

		return () => subscription.unsubscribe();
	}, [watch]);

	return (
		<div className={cx("grid", "wide", "wrapper")}>
			<section className={cx("margin-bloc")}>
				<h1 className={cx("title-block")}>CRÉEZ VOTRE COMPTE</h1>
			</section>
			<section className={cx("contact-form")}>
				<h2 className={cx("text-center", "title-form")}>
					Nouveau sur lisabeaute ?
				</h2>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={cx("contact-bloc", "row")}>
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
							<label className={cx("label")}>Votre mot de passe : </label>
							<input
								className={cx("contact-input")}
								type="Password"
								placeholder="Password"
								{...register("password", {
									required: "Mot de passe est requis",
								})}
							/>
							<span>{errors.messageContent?.message}</span>
						</p>
					</div>
					<div className={cx("text-center")}>
						<Button primary>Créer mon compte</Button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default ConnectionPage;
