import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useContext } from "react";
import classNames from "classnames/bind";
import { v4 as uuid } from "uuid";

import styles from "./Dropdown.module.css";
import { Link } from "react-router-dom";
import { SortPriceContext } from "../../context/SortPriceContextProvider";

const cx = classNames.bind(styles);

const Dropdown = ({ links, titleDropdown }) => {
	const [isDropdownVisible, setDropdownVisibility] = useState(false);
	const [isIconUp, setIsIconUp] = useState(false);
	const { sort, setSort } = useContext(SortPriceContext);
	// console.log(sort);
	// console.log(window.location.href);
	if (window.location.href === "http://localhost:5174/produits") {
		setSort("");
	}
	const toggleDropdown = () => {
		/*
			if(isDropdownVisible){
				setDropdownVisibility(false);
				isIconUp(false);
			} else {
				setDropdownVisibility(true);
				isIconUp(true);
			}
		*/
		setDropdownVisibility(!isDropdownVisible);
		setIsIconUp(!isIconUp);
	};

	const closeDropdown = (eve) => {
		if (!eve.target.classList.contains("dropbtn")) {
			setDropdownVisibility(false);
		}
	};

	useEffect(() => {
		window.addEventListener("click", closeDropdown);
		return () => {
			window.removeEventListener("click", closeDropdown);
			// setIsIconUp(!isIconUp);
		};
	}, []);
	// test
	// const linksNumber = links.length;
	return (
		<div className={cx("dropdown")}>
			<div className={cx("wp-button")}>
				{/* rome-ignore lint/a11y/useButtonType: <explanation> */}
				<button
					onClick={toggleDropdown}
					className={cx("dropbtn")}
					style={{
						width: "100%",
						fontWeight: "600",
						fontSize: "1.8rem",
						padding: "10px",
						display: "flex",
						justifyContent: " start",
						cursor: "pointer",
						position: "relative",
						background: "#fff",
					}}
				>
					{titleDropdown}
					{isIconUp ? (
						<FontAwesomeIcon
							icon={faChevronUp}
							className={cx("icon-chevron")}
						/>
					) : (
						<FontAwesomeIcon
							icon={faChevronDown}
							className={cx("icon-chevron")}
						/>
					)}
				</button>
			</div>
			{isDropdownVisible && (
				<div className={cx("dropdown-content")}>
					<ul>
						{links.map((link) => (
							<li key={uuid()} className={cx("link")}>
								{titleDropdown === "Catégories" && (
									<Link
										to={`/produits/categorie/${link.name}`}
										key={uuid()}
										className={cx("link-text")}
									>
										{link.name}
									</Link>
								)}
								{titleDropdown === "Marque" && (
									<Link
										to={`/produits/marques/${link.name}`}
										key={uuid()}
										className={cx("link-text")}
									>
										{link.name}
									</Link>
								)}
								{titleDropdown === "Prix" && (
									<Link
										to={`/produits?sort=${link.url}`}
										key={uuid()}
										className={cx("link-text")}
										onClick={() => setSort(link.url)}
										value={link.url}
									>
										{link.name}
									</Link>
								)}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
