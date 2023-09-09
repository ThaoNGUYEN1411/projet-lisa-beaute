import classNames from "classnames/bind";
import styles from "./ContactPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAddressBook,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const ContactPage = () => {
	return (
		<div className={cx("grid", "wide")}>
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
			<section>
				<h2>Envoyez nous un message</h2>
				<div className={cx("contact-bloc", "row")}>
					<div className={cx("l-12", "m-12", "c12")}>
						<input
							className={cx("contact-input")}
							type="text"
							placeholder="Choisissez un sujet"
						/>
					</div>
					<div className={cx("l-12", "m-12", "c12")}>
						<input
							className={cx("contact-input")}
							type="text"
							placeholder="Votre nom"
						/>
					</div>
					<div className={cx("l-12", "m-12", "c12")}>
						<input
							className={cx("contact-input")}
							type="text"
							placeholder="Votre prénom"
						/>
					</div>
					<div className={cx("l-12", "m-12", "c12")}>
						<input
							className={cx("contact-input")}
							type="text"
							placeholder="Votre e-mail"
						/>
					</div>

					<div className={cx("l-12", "m-12", "c12")}>
						<input
							className={cx("contact-input")}
							type="text"
							placeholder="Ecrire votre message ici... "
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactPage;
