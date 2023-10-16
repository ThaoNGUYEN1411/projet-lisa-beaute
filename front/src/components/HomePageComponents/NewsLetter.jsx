import classNames from "classnames/bind";
import styles from "../HomePageComponents/HomePage.module.css";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useContext } from "react";
import { EmailContext } from "../../context/EmailContextProvider";

const cx = classNames.bind(styles);

const NewsLetter = () => {
	const { email, setEmail } = useContext(EmailContext);
	const navigate = useNavigate();

	const {
		handleSubmit,
		watch,
		register,
		formState: { isValid, isSubmitted, submitCount, errors },
		reset,
	} = useForm();

	const onSubmit = async (values) => {
		const email = values.email;
		setEmail(email);
		console.log(values.email);

		navigate("/users/registration");

		reset();
	};
	useEffect(() => {
		// const subscription = watch((observer) => null);

		const subscription = watch((observer) => console.log(observer));

		return () => subscription.unsubscribe();
	}, [watch]);

	return (
		<section className={cx("news-letter")}>
			<div className={cx("text-center", "news-letter-bloc")}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor="email" className={cx("input-title")}>
						S’inscrire à notre newsletter
					</label>
					<input
						type="email"
						placeholder="Votre Email..."
						className={cx("input-email")}
						{...register("email", {
							required: "Email est requis",
						})}
					/>
					<Button small className={cx("btn-newsletter")}>
						<FontAwesomeIcon icon={faPaperPlane} />
					</Button>
					<span className={cx("message-error")}>{errors.email?.message}</span>
				</form>
				<div>
					<span className={cx("social-label")}>Nous suivre</span>
					<div>
						<ul className={cx("list-social")}>
							<li>
								<Link to={"/"} className={cx("social-icon")}>
									<FontAwesomeIcon icon={faFacebook} />
								</Link>
							</li>
							<li>
								<Link to={"/"} className={cx("social-icon")}>
									<FontAwesomeIcon icon={faInstagram} />
								</Link>
							</li>
							<li>
								<Link to={"/"} className={cx("social-icon")}>
									<FontAwesomeIcon icon={faTwitter} />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsLetter;
