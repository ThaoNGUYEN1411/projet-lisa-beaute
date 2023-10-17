import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleXmark,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { v4 as uuid } from "uuid";

import styles from "./Header.module.css";
import WrapperPopper from "../Popper/WrapperPopper";
import { getAllProductsBySearch } from "../../services/productsApi";

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

	useEffect(() => {
		if (!searchValue.trim()) {
			setSearchResult([]);
			return;
		}

		getAllProductsBySearch(searchValue).then((res) => setSearchResult(res));
		setShowResult(true);
		// console.log(searchResult);
		//chaque lettre qui change, il appele api
	}, [searchValue]);

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
						key={uuid()}
					>
						{/* afficher le component popper ici */}
						<WrapperPopper>
							{/*les resultats afficher ici */}

							{searchResult.map((product) => {
								return (
									<div className={cx("list-result")} key={uuid()}>
										<ul key={uuid()}>
											<li key={uuid()} className={cx("li-list-result")}>
												<Link to={`/produits/${product.id}`}>
													{product.brand} {product.name}
												</Link>
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
						onFocus={() => setShowResult(true)}
					/>
					{!!searchValue && (
						// rome-ignore lint/a11y/useButtonType: <explanation>
						<button className={cx("clear")} onClick={handleClear}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
					)}

					{/* rome-ignore lint/a11y/useButtonType: <explanation> */}
					<button className={cx("search-btn")}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</div>
			</Tippy>
		</div>
	);
};

export default SearchBar;
