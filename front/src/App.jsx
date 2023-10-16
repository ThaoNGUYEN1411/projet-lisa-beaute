import { RouterProvider } from "react-router-dom";
import router from "./services/router";
// /home/thaonguyen/workspace/projet-lisa-beaute/front/src/context/SecurityContextProvider.jsx
import { SecurityProvider } from "./context/SecurityContextProvider";
import { SortPriceProvider } from "./context/SortPriceContextProvider";
import "../node_modules/leaflet/dist/leaflet.css";
import { StoreProvider } from "./context/StoreContextProvider";
import { EmailProvider } from "./context/EmailContextProvider";
const App = () => {
	return (
		<SecurityProvider>
			<SortPriceProvider>
				<StoreProvider>
					<EmailProvider>
						<RouterProvider router={router} />
					</EmailProvider>
				</StoreProvider>
			</SortPriceProvider>
		</SecurityProvider>
	);
};

export default App;
