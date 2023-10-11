import classNames from "classnames/bind";
import styles from "../components/HomePageComponents/HomePage.module.css";
import Banner from "../components/HomePageComponents/Banner";
import ProductPrefer from "../components/HomePageComponents/ProductPrefer";
import ArticleHomePage from "../components/HomePageComponents/ArticleHomePage";
import CategoryHomePage from "../components/HomePageComponents/CategoryHomePage";
import NewsLetter from "../components/HomePageComponents/NewsLetter";

const cx = classNames.bind(styles);

const HomePage = () => {
	return (
		<div className={cx("grid", "wide")}>
			<Banner />
			<ProductPrefer />
			<ArticleHomePage />
			<CategoryHomePage />
			<NewsLetter />
		</div>
	);
};

export default HomePage;
