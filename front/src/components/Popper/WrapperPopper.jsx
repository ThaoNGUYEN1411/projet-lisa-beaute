import classNames from "classnames/bind";
import styles from "./Popper.module.css";

const cx = classNames.bind(styles);
// creer un modele pour chaque popper
const WrapperPopper = ({ children }) => {
	return <div className={cx("wrapper")}>{children}</div>;
};

export default WrapperPopper;
