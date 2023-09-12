import { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleXmark,
	faLocationDot,
	faMagnifyingGlass,
	faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import styles from "./Header.module.css";
import WrapperPopper from "../Popper/WrapperPopper";

const cx = classNames.bind(styles);

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState("");
	//le resutal est un array, on utilise useState
	const [searchResult, setSearchResult] = useState([]);
	// condition pour afficher le resultat
	const [showResult, setShowResult] = useState(true);

	const inputRef = useRef();

	const handleClear = () => {
		setSearchValue("");
		setSearchResult([]);
		// supprimer le text de rechercher, il focus input
		inputRef.current.focus();
	};
	const handleHideResult = () => {
		setShowResult(false);
	};

	//call api => afficher quand il aura le resultat, exemple 3s
	useEffect(() => {
		setTimeout(() => {
			setSearchResult(["parfum Miss dior", "parfum Chanel", "parfum Hermes"]);
			// / ajouter array pour essayer ["parfum Miss dior", "parfum Chanel", "parfum Hermes"]
		}, 0);
	}, []);

	return (
		//utiliser tippyjs react props => headless
		<div>
			<Tippy
				interactive
				// quand on a le resutal => tippy affiche
				visible={showResult && searchResult.length > 0}
				render={(attrs) => (
					<div
						className={cx("search-result")}
						tabIndex="-1"
						{...attrs}
						key={crypto.randomUUID()}
					>
						{/* afficher le component popper ici */}
						<WrapperPopper>
							{/*les resultats afficher ici */}

							{searchResult.map((productName) => {
								return (
									<div className={cx("list-result")} key={crypto.randomUUID()}>
										<ul key={crypto.randomUUID()}>
											<li
												key={crypto.randomUUID()}
												className={cx("li-list-result")}
											>
												{productName}
											</li>
										</ul>
									</div>
								);
							})}
						</WrapperPopper>
					</div>
				)}
				onClickOutside={handleHideResult}
			>
				<div className={cx("search")}>
					<input
						value={searchValue}
						type="text"
						placeholder="Rechercher un produit"
						spellCheck={false}
						className={cx("search-input")}
						ref={inputRef}
						onChange={(e) => {
							setSearchValue(e.target.value);
						}}
					/>
					{!!searchValue && (
						<button className={cx("clear")} onClick={handleClear}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
					)}

					<button className={cx("search-btn")}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</div>
			</Tippy>
		</div>
	);
};

export default SearchBar;
