import classNames from "classnames/bind";
import styles from "./Product.module.css";

const cx = classNames.bind(styles);

const Product = ({ imgProdWidth = false }) => {
	return (
		<div className={cx("product", "text-center")}>
			<img
				src="/images/product1-remp.gif"
				alt=""
				className={cx("product-img", { imgProdWidth })}
			/>
			<div className={cx("product-description")}>
				<span className={cx("product-brand")}>name</span>
				<span className={cx("product-name")}>sub name</span>
				<span className={cx("product-price")}>Prix</span>
			</div>
		</div>
	);
};

export default Product;
