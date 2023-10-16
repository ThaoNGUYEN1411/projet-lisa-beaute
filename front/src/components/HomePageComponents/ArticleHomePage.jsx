import classNames from "classnames/bind";
import styles from "../HomePageComponents/HomePage.module.css";
import Button from "../Button/Button";

const cx = classNames.bind(styles);
const ArticleHomePage = () => {
	return (
		<section className={cx("bloc-article")}>
			<article className={cx("row", "article")}>
				<div
					className={cx("wrapper-photo-article", "col", "l-6", "m-6", "c-12")}
				>
					<img
						src="images/img-article1-rs.jpg"
						alt=""
						className={cx("img-article")}
					/>
				</div>
				<div
					className={cx(
						"text-center",
						"col",
						"l-6",
						"m-6",
						"c-12",
						"margin-block",
					)}
				>
					<div className={cx("article-contenu")}>
						<h3 className={cx("article-title")}>
							Quels parfums porter en été ?
						</h3>
						<p className={cx("article-text")}>
							Les agrumes comme le citron, la mandarine, l'orange, le
							pamplemousse ou encore la bergamote y sont plébiscités pour leur
							fraîcheur et leur côté acidulé.
						</p>
					</div>

					<Button primary to={"/articles/1"}>
						Je decouvre
					</Button>
				</div>
			</article>
		</section>
	);
};

export default ArticleHomePage;
