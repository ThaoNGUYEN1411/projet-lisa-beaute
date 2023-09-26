import { RouterProvider } from "react-router-dom";
import router from "./services/router";
// /home/thaonguyen/workspace/projet-lisa-beaute/front/src/context/SecurityContextProvider.jsx
import { SecurityProvider } from "./context/SecurityContextProvider";
import { SortPriceProvider } from "./context/SortPriceContextProvider";
const App = () => {
	return (
		<SecurityProvider>
			<SortPriceProvider>
				<RouterProvider router={router} />
			</SortPriceProvider>
		</SecurityProvider>
	);
};

export default App;
