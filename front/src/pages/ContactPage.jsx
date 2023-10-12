import classNames from "classnames/bind";
import styles from "../components/ContactComponents/ContactComponent.module.css";

import ContactInfo from "../components/ContactComponents/ContactInfo";
import ContactComponentForm from "../components/ContactComponents/ContactComponentForm";

const cx = classNames.bind(styles);

const ContactPage = () => {
	return (
		<div className={cx("grid", "wide", "wrapper")}>
			<section className={cx("margin-bloc")}>
				<h1 className={cx("title-block", "text-center")}>Nous contacter</h1>
				<ContactInfo />
			</section>
			<ContactComponentForm />
		</div>
	);
};

export default ContactPage;
