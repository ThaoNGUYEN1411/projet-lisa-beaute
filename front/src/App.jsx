import { RouterProvider } from "react-router-dom";
import router from "./services/router";
// /home/thaonguyen/workspace/projet-lisa-beaute/front/src/context/SecurityContextProvider.jsx
import { SecurityProvider } from "./context/SecurityContextProvider";
import { SortPriceProvider } from "./context/SortPriceContextProvider";
import "../node_modules/leaflet/dist/leaflet.css";
import { StoreProvider } from "./context/StoreContextProvider";
const App = () => {
	return (
		<SecurityProvider>
			<SortPriceProvider>
				<StoreProvider>
					<RouterProvider router={router} />
				</StoreProvider>
			</SortPriceProvider>
		</SecurityProvider>
	);
};

export default App;
