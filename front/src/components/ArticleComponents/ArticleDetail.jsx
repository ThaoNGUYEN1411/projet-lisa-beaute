import classNames from "classnames/bind";
import styles from "./ArticleComponent.module.css";

const cx = classNames.bind(styles);

const ArticleDetail = () => {
	return (
		<div className={cx("grid", "wide", "wrapper")}>
			<section>
				<div className={cx("text-center", "text-present")}>
					<p>
						L'été est une saison de chaleur, de soleil, et d'évasion. C'est le
						moment idéal pour adopter un parfum qui évoque la fraîcheur, la
						vitalité et l'énergie de la saison estivale. Dans cet article, nous
						allons explorer les parfums qui sont parfaits pour l'été, en mettant
						en avant des fragrances légères, florales et fruitées qui apportent
						une touche de fraîcheur à vos journées ensoleillées.
					</p>
				</div>
			</section>
			{/* Block article */}
			<section className={cx("grid", "wide", "bloc-article")}>
				<article className={cx("row", "article")}>
					<div className={cx("wrapper-photo-article")}>
						<img
							src="../../images/img-article1-rs.jpg"
							alt=""
							className={cx("img-article")}
						/>
					</div>
				</article>
			</section>
			<section className={cx("text")}>
				<div>
					<h3>1. Les fragrances florales</h3>
					<p>
						Les divarfums floraux sont toujours un choix populaire en été. Ils
						capturent la beauté des jardins en fleurs et évoquent une ambiance
						estivale romantique. Optez pour des parfums à base de notes de
						jasmin, de rose, de pivoine ou de fleur d'oranger. Ces senteurs
						délicates évoquent la douce brise estivale et sont idéales pour les
						journées ensoleillées.
					</p>
					<h3>2. Les parfums fruités</h3>
					<p>
						Les parfums fruités apportent une touche de gaieté à l'été. Les
						notes de citron, de mandarine, de pamplemousse, de pomme verte ou de
						framboise donnent à votre parfum une fraîcheur pétillante. Les
						parfums fruités sont parfaits pour les activités en plein air et les
						soirées estivales.
					</p>
					<h3>3. Les parfums aquatiques</h3>{" "}
					<p>
						Les parfums aquatiques sont inspirés de la mer et de l'océan, ce qui
						en fait un choix rafraîchissant pour l'été. Ces fragrances évoquent
						la brise marine, les vagues et la sensation de vacances à la plage.
						Recherchez des parfums avec des notes marines, d'algues ou de sel
						pour une expérience olfactive estivale unique. 4. Les parfums
						exotiques : Les parfums exotiques capturent l'esprit de l'aventure
						estivale. Optez pour des parfums avec des notes de coco, de vanille,
						de jasmin sambac ou de tiaré pour une ambiance tropicale. Ces
						senteurs vous transportent dans des destinations lointaines et vous
						font sentir en vacances, même si vous ne l'êtes pas.
					</p>
					<h3>4. Les parfums exotiques </h3>
					<p>
						Les parfums exotiques capturent l'esprit de l'aventure estivale.
						Optez pour des parfums avec des notes de coco, de vanille, de jasmin
						sambac ou de tiaré pour une ambiance tropicale. Ces senteurs vous
						transportent dans des destinations lointaines et vous font sentir en
						vacances, même si vous ne l'êtes pas.
					</p>
					<h3>5. Les parfums unisexes </h3>
					<p>
						L'été est également le moment idéal pour explorer les parfums
						unisexes. Ces fragrances sont souvent légères, fraîches et
						conviennent aussi bien aux hommes qu'aux femmes. Elles sont idéales
						pour les journées décontractées à la plage ou les sorties entre
						amis.
					</p>
					<h3>Conseils pour l'application de parfum en été :</h3>
					<ul>
						<li>
							<p>
								Appliquez votre parfum sur des zones de pouls, comme le poignet,
								le cou et derrière les oreilles, pour une meilleure diffusion de
								la fragrance.
							</p>
						</li>
						<li>
							<p>
								Évitez de surcharger votre parfum, car la chaleur peut
								intensifier l'odeur. Une ou deux pulvérisations légères
								suffisent.
							</p>
						</li>
						<li>
							<p>
								Gardez votre parfum à l'abri de la chaleur directe et de la
								lumière du soleil pour préserver sa fraîcheur.
							</p>
						</li>
					</ul>
					<p>
						En conclusion, l'été est le moment idéal pour expérimenter de
						nouvelles fragrances qui capturent l'esprit de la saison. Que vous
						préfériez des notes florales, fruitées, aquatiques, exotiques ou
						unisexes, il existe un parfum pour chaque préférence. Alors,
						choisissez votre fragrance estivale préférée et laissez-vous
						emporter par les plaisirs olfactifs de cette saison ensoleillée.
					</p>
				</div>
			</section>
		</div>
	);
};

export default ArticleDetail;
