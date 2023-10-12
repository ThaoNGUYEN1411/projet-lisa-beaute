import { useContext } from "react";
// import { UserContext } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { SecurityContext } from "../../context/SecurityContextProvider";

const LogoutPage = () => {
	// accéder à l'utilisateur stocké dans le contexte
	const { user, setUser } = useContext(SecurityContext);

	const navigate = useNavigate();

	// supprimer l'utilisateur
	useEffect(() => {
		// supprimer l'utilisateur stocké dans le contexte
		setUser();

		// message en session
		window.sessionStorage.setItem("notice", "Vous êtes déconnecté");

		// redirection
		navigate("/");
	});

	return <></>;
};

export default LogoutPage;
