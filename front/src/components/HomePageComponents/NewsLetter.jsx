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
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const NewsLetter = () => {
	return (
		<section className={cx("news-letter")}>
			<div className={cx("text-center", "news-letter-bloc")}>
				<label htmlFor="email" className={cx("input-title")}>
					S’inscrire à notre newsletter
				</label>
				<input
					type="email"
					placeholder="Votre Email..."
					className={cx("input-email")}
				/>
				<Button small className={cx("btn-newsletter")}>
					<FontAwesomeIcon icon={faPaperPlane} />
				</Button>
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
