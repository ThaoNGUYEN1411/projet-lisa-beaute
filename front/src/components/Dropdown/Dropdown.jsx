import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Dropdown.module.css";

const cx = classNames.bind(styles);

const Dropdown = ({ links, titleDropdown }) => {
	const [isDropdownVisible, setDropdownVisibility] = useState(false);
	const [isIconUp, setIsIconUp] = useState(false);

	// useEffect(() => {}, []);

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
							<li key={crypto.randomUUID()} className={cx("link")}>
								<a
									href={link.url}
									key={crypto.randomUUID()}
									className={cx("link-text")}
								>
									{link.text}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
