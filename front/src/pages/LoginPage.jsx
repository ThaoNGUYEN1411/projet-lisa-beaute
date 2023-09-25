import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";

import styles from "./ContactPage.module.css";
import Button from "../components/Button/Button";
import { postLoginUser } from "../services/userApi.js";
import { SecurityContext } from "../context/SecurityContextProvider";

const cx = classNames.bind(styles);

const LoginPage = () => {
	const { user, setUser } = useContext(SecurityContext);

	const {
		handleSubmit,
		watch,
		register,
		formState: { isValid, isSubmitted, submitCount, errors },
	} = useForm();

	const onSubmit = async (values) => {
		// console.log(values);
		const responseAPI = await postLoginUser(values);
		console.log("responseAPI", responseAPI.data.lastName);
		setUser(responseAPI.data);
		// if (responseAPI.status === 200) {
		// 	setUser(responseAPI.data);
		// 	// setFlashMessage(response.message);
		// 	// navigate("/");
		// 	return;
		// }
	};

	useEffect(() => {
		const subscription = watch((observer) => console.log(observer));

		return () => subscription.unsubscribe();
	}, [watch]);

	return (
		<div className={cx("grid", "wide", "connect-form", "row", "margin-bloc")}>
			<section
				className={cx("l-6", "m-6", "c-12", "wp-connection", "text-center")}
			>
				<h1 className={cx("title")}>Vous avez déjà un compte ?</h1>
				<h2 className={cx("sub-title")}>Ravi de vous revoir !</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<p>
						<label className={cx("label", "label-connection")}>
							Votre email
						</label>
						<input
							type="email"
							className={cx("connection-input", "contact-input")}
							placeholder="Email"
							{...register("email", {
								required: "Email est requis",
							})}
						/>
						<span className={cx("error-message")}>{errors.email?.message}</span>
					</p>
					<p>
						<label className={cx("label", "label-connection")}>
							Votre mot de passe
						</label>
						<input
							type="password"
							className={cx("connection-input", "contact-input")}
							placeholder="Password"
							{...register("password", {
								required: "Mot de passe est requis",
							})}
						/>
						<span className={cx("error-message")}>
							{errors.password?.message}
						</span>
					</p>
					<Button primary className={cx("btn")}>
						SE CONNECTER
					</Button>
				</form>
			</section>
			<section
				className={cx("l-6", "m-6", "c-12", "wp-create-user", "text-center")}
			>
				<h2 className={cx("title", "title-2")}>Nouveau sur Lisabeaute ?</h2>
				<h3 className={cx("sub-title")}>Bienvenue !</h3>
				<p className={cx("sub-title")}>
					Créez votre compte en quelques minutes
				</p>

				<Button primary className={cx("btn")} to={"/users/registration"}>
					CREER VOTRE COMPTE
				</Button>
			</section>
		</div>
	);
};

export default LoginPage;
