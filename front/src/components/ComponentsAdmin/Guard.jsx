import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { SecurityContext } from "../../context/SecurityContextProvider";
// role est recupéré par la props créer sur le compossant dans router.jsx
const Guard = ({ children, role }) => {
	const { user, setUser } = useContext(SecurityContext);
	const navigate = useNavigate();
	// verifier l'utilisateur
	useEffect(() => {
		// console.log("user", role);
		// si l'utilisateur ne possède pas le role requis
		if (!user || user.role !== role) {
			window.sessionStorage.setItem("notice", "Accès refusé");
			navigate("/");
		} else {
			navigate("/admin");
		}
	}, []);
	return <div>{children}</div>;
};

export default Guard;
