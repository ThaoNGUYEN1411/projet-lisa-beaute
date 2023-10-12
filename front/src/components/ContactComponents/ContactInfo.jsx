import classNames from "classnames/bind";
import styles from "../ContactComponents/ContactComponent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAddressBook,
	faChevronRight,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

const ContactInfo = () => {
	return (
		<div className={cx("contact", "row")}>
			<div className={cx("contact-info", "l-6", "m-6", "c-12", "text-center")}>
				<span className={cx("contact-icon")}>
					<FontAwesomeIcon icon={faAddressBook} />
				</span>
				<h3>Adresse</h3>
				<p>55 rue de Vincennes, 93100 Montreuil</p>
			</div>
			<div className={cx("contact-info", "l-6", "m-6", "c-12", "text-center")}>
				<span className={cx("contact-icon")}>
					<FontAwesomeIcon icon={faPhone} />
				</span>
				<h3>Service client</h3>
				<p>1900 223 8899</p>
			</div>
		</div>
	);
};

export default ContactInfo;
