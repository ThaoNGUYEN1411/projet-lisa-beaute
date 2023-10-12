import classNames from "classnames/bind";
import styles from "../ContactComponents/ContactComponent.module.css";

const cx = classNames.bind(styles);

import Button from "../Button/Button";

const LinkCreateUser = () => {
	return (
		<section
			className={cx("l-6", "m-6", "c-12", "wp-create-user", "text-center")}
		>
			<h2 className={cx("title", "title-2")}>Nouveau sur Lisabeaute ?</h2>
			<h3 className={cx("sub-title")}>Bienvenue !</h3>
			<p className={cx("sub-title")}>Créez votre compte en quelques minutes</p>

			<Button primary className={cx("btn")} to={"/users/registration"}>
				CREER VOTRE COMPTE
			</Button>
		</section>
	);
};

export default LinkCreateUser;
