import ArticleDetail from "../../components/ArticleComponents/ArticleDetail";
import classNames from "classnames/bind";
import styles from "../../components/ArticleComponents/ArticleComponent.module.css";
const cx = classNames.bind(styles);

const DetailArticlePage = () => {
	return (
		<div className={cx("grid", "wide")}>
			<h1>Quels parfums porter en été ?</h1>
			<ArticleDetail />
		</div>
	);
};

export default DetailArticlePage;
