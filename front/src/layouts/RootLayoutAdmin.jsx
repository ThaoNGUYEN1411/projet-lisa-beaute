import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components/ComponentsAdmin/NavbarAdmin";

const RootLayoutAdmin = () => {
	return (
		<>
			<NavbarAdmin />
			<Outlet />
		</>
	);
};

export default RootLayoutAdmin;
