import { RouterProvider } from "react-router-dom";
import router from "./services/router";
// /home/thaonguyen/workspace/projet-lisa-beaute/front/src/context/SecurityContextProvider.jsx
import { SecurityProvider } from "./context/SecurityContextProvider";
const App = () => {
	return (
		<SecurityProvider>
			<RouterProvider router={router} />
		</SecurityProvider>
	);
};

export default App;
