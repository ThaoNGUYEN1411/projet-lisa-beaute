import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AvisProduct.module.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { addCommentByUser } from "../../services/productsApi";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const AvisProduct = ({ userId, productId }) => {
	const [message, setMessage] = useState();
	const {
		handleSubmit,
		watch,
		register,
		formState: { isValid, isSubmitted, submitCount, errors },
		reset,
	} = useForm();
	const navigate = useNavigate();
	const onSubmit = async (info) => {
		const date = new Date(); // Obtenez la date et l'heure actuelles

		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0"); // Mois commence à 0, donc ajoutez 1 et formatez avec 2 chiffres
		const day = String(date.getDate()).padStart(2, "0");
		const hours = String(date.getHours()).padStart(2, "0");
		const minutes = String(date.getMinutes()).padStart(2, "0");
		const seconds = String(date.getSeconds()).padStart(2, "0");

		const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

		// console.log(formattedDate);
		// console.log(info.avisContent, userId, productId);

		const avisContent = info.avisContent;
		const time = "2023-07-12 10:20:05";
		await addCommentByUser({
			content: avisContent,
			time: formattedDate,
			userId: userId,
			productId: productId,
		});

		if (response.status === 200) {
			window.sessionStorage.setItem("notice", "Votre commentaire a été envoyé");
		} else {
			window.sessionStorage.setItem("notice", "Error");
		}
		navigate(`/produits/${productId}`);
		// reset();
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
		<article className={cx("grid", "wide")}>
			{/* <h3 className={cx("avis-title")}>Name produit</h3> */}
			<p>{message}</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p className={cx("avis-title")}>
					Quelle note attribuez-vous à ce produit ?
					<span className={cx("star-group")}>
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
					</span>
				</p>
				<p className={cx("avis-title")}>
					<label className={cx("")}>
						Qu'avez-vous pensé de votre produit ?
					</label>
					<textarea
						{...register("avisContent", {
							required: "Un avis est requis",
						})}
						className={cx("textarea")}
					/>
					<span>{errors.messageContent?.message}</span>
				</p>
				<Button primary>Publier un avis</Button>
			</form>
		</article>
	);
};

export default AvisProduct;
