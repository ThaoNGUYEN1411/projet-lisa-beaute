import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from "../ContactComponents/ContactComponent.module.css";
import { SecurityContext } from "../../context/SecurityContextProvider";
import Button from "../../components/Button/Button";
import { postLoginUser } from "../../services/userApi";

const cx = classNames.bind(styles);

const Login = () => {
	const { user, setUser } = useContext(SecurityContext);
	const [message, setMessage] = useState();
	const navigate = useNavigate();
	const {
		handleSubmit,
		watch,
		register,
		formState: { isValid, isSubmitted, submitCount, errors },
	} = useForm();

	const onSubmit = async (values) => {
		const responseAPI = await postLoginUser(values);
		if (responseAPI.status === 200) {
			// console.log("responseAPI", responseAPI);
			setUser(responseAPI.data);
			window.sessionStorage.setItem("notice", "Vous êtes connecté");
			if (responseAPI.data.role === "admin") {
				navigate("/admin");
			} else {
				navigate("/EspacePersoClient");
			}
		} else {
			setMessage("Identifiants invalides");
			setTimeout(() => setMessage(), 5000);
		}
	};

	useEffect(() => {
		// const subscription = watch((observer) => console.log(observer));
		const subscription = watch((observer) => null);

		return () => subscription.unsubscribe();
	}, [watch]);

	useEffect(() => {
		if (window.sessionStorage.getItem("notice")) {
			setMessage(window.sessionStorage.getItem("notice"));
			window.sessionStorage.removeItem("notice");
			setTimeout(() => setMessage(null), 5000);
		}
	});
	return (
		<section
			className={cx("l-6", "m-6", "c-12", "wp-connection", "text-center")}
		>
			<h1 className={cx("title")}>Vous avez déjà un compte ?</h1>
			{!message && <h2 className={cx("sub-title")}>Ravi de vous revoir !</h2>}
			<p className={cx("message-succes")}>{message}</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p>
					<label className={cx("label", "label-connection")}>Votre email</label>
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
	);
};

export default Login;
